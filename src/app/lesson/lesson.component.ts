<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../model/lesson';
=======
import { Component, Input, OnInit } from "@angular/core";
import { Lesson } from "../model/lesson";
>>>>>>> main

@Component({
  selector: "lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
})
<<<<<<< HEAD
export class LessonComponent implements OnInit {

  @Input()
  lesson:Lesson;

  constructor() { }

  ngOnInit() {

  }

=======
export class LessonComponent {
  @Input()
  lesson: Lesson;
>>>>>>> main
}
