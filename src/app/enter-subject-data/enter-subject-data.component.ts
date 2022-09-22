import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subjects } from '../app.module';

@Component({
  selector: 'app-enter-subject-data',
  templateUrl: './enter-subject-data.component.html',
  styleUrls: ['./enter-subject-data.component.scss']
})
export class EnterSubjectDataComponent implements OnInit {

  @Input() subjects: Subjects = new Subjects();
  @Output() subjectChange:EventEmitter<Subjects> = new EventEmitter<Subjects>();
  
  constructor() { }

  ngOnInit(): void {
  }

  updateSubjects(){
      this.subjectChange.emit(this.subjects);
  }
}
