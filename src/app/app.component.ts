<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';


=======
import { Component, OnInit } from "@angular/core";
import { AuthStore } from "./services/auth.store";
>>>>>>> main

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
<<<<<<< HEAD
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }
=======
export class AppComponent implements OnInit {
  constructor(public auth: AuthStore) {}
>>>>>>> main

  ngOnInit() {}

  logout() {
<<<<<<< HEAD
        this.auth.logout();

=======
    this.auth.logout();
>>>>>>> main
  }
}
