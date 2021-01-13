import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Course } from "../model/course";

// only return observables. stateless in that it doesn't store in service
// the values like Courses[]
@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  // transform obs by map
  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay() // to stop more than one api request
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http
      .put(`/api/courses/${courseId}`, changes)
      .pipe(shareReplay());
  }
}
