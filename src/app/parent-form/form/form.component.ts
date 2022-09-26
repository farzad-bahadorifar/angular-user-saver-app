import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {StudentModel} from "../../model/student.model";
import {GlobalFunction} from "../../globalFunction/global.function";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  education = ["Bachelor","Master", "PhD"];

  student : StudentModel = new StudentModel();

  @Output() studentOutput = new EventEmitter<StudentModel>();
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.studentOutput.emit(GlobalFunction.clone(this.student));
  }

}
