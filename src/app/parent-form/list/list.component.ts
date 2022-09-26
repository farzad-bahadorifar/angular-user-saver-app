import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StudentModel} from "../../model/student.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() studentInput : StudentModel = new StudentModel();
  studentList : StudentModel [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.studentInput.fName != null &&
        this.studentInput.lName != null &&
        this.studentInput.age != null &&
        this.studentInput.unit != null &&
        this.studentInput.education != null) {
      this.studentInput.id = this.studentList.length + 1;
    this.studentList.push(this.studentInput);
    }
  }

  delete(student: StudentModel) {
    let index = this.studentList.findIndex(f => f.id == student.id);
    this.studentList.splice(index,1);
  }


}
