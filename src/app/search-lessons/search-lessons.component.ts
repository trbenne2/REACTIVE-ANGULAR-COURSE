<<<<<<< HEAD
import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
=======
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
>>>>>>> main
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
<<<<<<< HEAD
  concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Lesson} from '../model/lesson';
import {CoursesService} from '../services/courses.service';


@Component({
  selector: 'course',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
=======
  concatAll,
  shareReplay,
} from "rxjs/operators";
import { merge, fromEvent, Observable, concat } from "rxjs";
import { Lesson } from "../model/lesson";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course",
  templateUrl: "./search-lessons.component.html",
  styleUrls: ["./search-lessons.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
>>>>>>> main
})
export class SearchLessonsComponent implements OnInit {
  searchResults$: Observable<Lesson[]>;

<<<<<<< HEAD
  searchResults$ : Observable<Lesson[]>;

  activeLesson:Lesson;

  constructor(private coursesService: CoursesService) {
=======
  activeLesson: Lesson; // replaces master view with detail view
>>>>>>> main

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

<<<<<<< HEAD
    onSearch(search:string) {
        this.searchResults$  = this.coursesService.searchLessons(search);
    }

    openLesson(lesson:Lesson) {
      this.activeLesson = lesson;
    }

    onBackToSearch() {
      this.activeLesson = null;
    }

=======
  onBackToSearch() {
    this.activeLesson = null;
  }
>>>>>>> main
}
