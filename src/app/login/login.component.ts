import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

<<<<<<< HEAD

import {Router} from '@angular/router';
import {AuthStore} from '../services/auth.store';
=======
import { Router } from "@angular/router";
import { AuthStore } from "../services/auth.store";
>>>>>>> main

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
<<<<<<< HEAD
    private auth: AuthStore) {

=======
    private auth: AuthStore
  ) {
>>>>>>> main
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;

<<<<<<< HEAD
    this.auth.login(val.email, val.password)
        .subscribe(
            () => {
                this.router.navigateByUrl("/courses")
            },
            err => {
                alert("Login failed!");
            }
        );



=======
    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl("/courses");
      },
      (err) => {
        alert("Login failed!");
      }
    );
>>>>>>> main
  }
}
