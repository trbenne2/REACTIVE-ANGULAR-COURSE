<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
=======
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LoadingService } from "./loading.service";
>>>>>>> main

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  constructor(public loadingService: LoadingService) {} // access by template making it public

<<<<<<< HEAD

  constructor(public loadingService: LoadingService) {

  }

  ngOnInit() {

  }


=======
  ngOnInit() {}
>>>>>>> main
}
