<<<<<<< HEAD
import {AfterViewInit, Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {CoursesService} from '../services/courses.service';
import {LoadingService} from '../loading/loading.service';
import {MessagesService} from '../messages/messages.service';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CoursesStore} from '../services/courses.store';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers: [
        LoadingService,
        MessagesService
    ]
})
export class CourseDialogComponent {
=======
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from "moment";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { CoursesService } from "../services/courses.service";
import { LoadingService } from "../loading/loading.service";
import { MessagesService } from "../messages/messages.service";
import { CoursesStore } from "../services/courses.store";

@Component({
  selector: "course-dialog",
  templateUrl: "./course-dialog.component.html",
  styleUrls: ["./course-dialog.component.css"],
  providers: [LoadingService, MessagesService], // different instance of the loading service. so her and any child of the dialog (two instant)
})
export class CourseDialogComponent implements AfterViewInit {
  form: FormGroup;
>>>>>>> main

  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private messagesService: MessagesService,
    private coursesStore: CoursesStore
  ) {
    this.course = course;

<<<<<<< HEAD
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private coursesStore: CoursesStore,
        private messagesService: MessagesService) {
=======
    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }
>>>>>>> main

  ngAfterViewInit() {}

  save() {
    const changes = this.form.value;

    // const saveCourse$ = this.coursesService
    //   .saveCourse(this.course.id, changes)
    //   .pipe(
    //     catchError((err) => {
    //       const message = "Could not save course";
    //       console.log(message, err);
    //       this.messagesService.showErrors(message);
    //       return throwError(err);
    //     })
    //   );

<<<<<<< HEAD
    save() {

      const changes = this.form.value;

      this.coursesStore.saveCourse(this.course.id, changes)
          .subscribe();

      this.dialogRef.close(changes);

    }

    close() {
        this.dialogRef.close();
    }
=======
    // this.loadingService
    //   .showLoaderUntilCompleted(saveCourse$)
    //   .subscribe((val) => {
    //     this.dialogRef.close(val);
    //   });

    this.coursesStore.saveCourse(this.course.id, changes).subscribe();

    this.dialogRef.close(changes);
  }
>>>>>>> main

  close() {
    this.dialogRef.close();
  }
}
