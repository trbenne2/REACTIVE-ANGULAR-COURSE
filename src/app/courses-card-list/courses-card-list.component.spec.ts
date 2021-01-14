<<<<<<< HEAD
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> main

import { CoursesCardListComponent } from './courses-card-list.component';

describe('CoursesCardListComponent', () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;

<<<<<<< HEAD
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCardListComponent ]
    })
    .compileComponents();
  }));
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCardListComponent ]
    })
    .compileComponents();
  });
>>>>>>> main

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
