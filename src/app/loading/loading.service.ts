<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject,of} from 'rxjs';
import {concatMap, finalize, tap} from 'rxjs/operators';


@Injectable()
export class LoadingService {

    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    constructor() {
        console.log("Loading service created ...");
    }

    showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null)
            .pipe(
                tap(() => this.loadingOn()),
                concatMap(() => obs$),
                finalize(() => this.loadingOff())
            );
    }

    loadingOn() {
        this.loadingSubject.next(true);

    }

    loadingOff() {
        this.loadingSubject.next(false);
    }

=======
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { concatMap, finalize, tap } from "rxjs/operators";

@Injectable() // no root so can block small ones for like components
export class LoadingService {
  // subject for defining custom obsers, sub can emit values
  private loadingSubject = new BehaviorSubject<boolean>(false); // remembers last value by subject; better for async

  loading$: Observable<boolean> = this.loadingSubject.asObservable(); // true when show; false when hide; emit same values as subject

  constructor() {
    console.log("Loading service created ...");
  }

  // input is the observer we want to track, return observe of the same type with loading abilities, why it is generic type
  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    // for life cycle of the given observ

    //used to trigger loading; factory method;
    return of(null).pipe(
      // create observe to start change
      tap(() => this.loadingOn()), //when start we tap to turn on
      concatMap(() => obs$), // switch to outputing input observ
      finalize(() => this.loadingOff()) // when input completes turn off
    );
  }

  loadingOn() {
    this.loadingSubject.next(true); // get emitted by the loading observ
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
>>>>>>> main
}
