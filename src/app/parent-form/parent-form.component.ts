import { Component, OnInit } from '@angular/core';
import {StudentModel} from "../model/student.model";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {
  student : StudentModel = new StudentModel();
  constructor() { }

  ngOnInit(): void {
  }

  getStudentOutput(student: StudentModel) {
    this.student = student;
  }

}
