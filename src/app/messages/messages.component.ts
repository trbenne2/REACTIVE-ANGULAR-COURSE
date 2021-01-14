<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
import {MessagesService} from './messages.service';
=======
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../model/message";
import { tap } from "rxjs/operators";
import { MessagesService } from "./messages.service";
>>>>>>> main

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  showMessages: boolean = false;

<<<<<<< HEAD
  showMessages = false;

  errors$: Observable<string[]>;


  constructor(public messagesService: MessagesService) {

      console.log("Created messages component");

  }

  ngOnInit() {
      this.errors$ = this.messagesService.errors$
          .pipe(
              tap(() => this.showMessages = true)
          );

=======
  errors$: Observable<string[]>;

  constructor(public messagesService: MessagesService) {
    console.log("Created messages component");
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => (this.showMessages = true))
    );
>>>>>>> main
  }

  onClose() {
<<<<<<< HEAD
      this.showMessages = false;

=======
    this.showMessages = false;
>>>>>>> main
  }
}
