import { Component, OnInit } from "@angular/core";
import { Course, sortCoursesBySeqNo } from "../model/course";
import { interval, noop, Observable, of, throwError, timer } from "rxjs";
import {
  catchError,
  delay,
  delayWhen,
  filter,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";
import { CoursesService } from "../services/courses.service";
import { LoadingService } from "../loading/loading.service";
import { MessagesService } from "../messages/messages.service";
import { CoursesStore } from "../services/courses.store";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    //private coursesService: CoursesService, // for stateless
    private loadingService: LoadingService,
    private messagesService: MessagesService,
    private coursesStore: CoursesStore // get all data from store
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  // does not need subscribe since observable.
  // async pipe handles unsubscribing so no memory leaks
  // because there are to sub to the first observ
  reloadCourses() {
    //   const courses$ = this.coursesService.loadAllCourses().pipe(
    //     map((courses) => courses.sort(sortCoursesBySeqNo))
    //     //finalize(() => this.loadingService.loadingOff()) // always called when observs completes or errors out
    //     catchError((err) => {
    //       const message = "could not load courses";
    //       this.messagesService.showErrors(message);
    //       console.log(message, err);
    //       return throwError(err); // new observer to replace failled observ; throwerror creates new observ that terminates immediately with same error
    //     })
    //   );
    // const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);
    // this.beginnerCourses$ = loadCourses$.pipe(
    //   map((courses) =>
    //     courses.filter((course) => course.category == "BEGINNER")
    //   )
    // );
    // this.advancedCourses$ = loadCourses$.pipe(
    //   map((courses) =>
    //     courses.filter((course) => course.category == "ADVANCED")
    //   )
    // );

    this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");

    this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
  }
}
