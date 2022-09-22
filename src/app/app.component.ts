import { Component, OnInit } from '@angular/core';
import { SubjectData, Subjects, TopicData } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'univ-subject-trainer';
  topics: TopicData[] = [];

  selectedSubjects: Subjects = new Subjects();

  subjects: Subjects = [
 
    { subjectData: { subjectRef:0, subjectString: 'LCH abc', topics:[
        
       
    ]},
    { subjectData: { subjectRef:0, subjectString: 'LCH abc', topics:[]},
    { subjectData: { subjectRef:0, subjectString: 'LCH abc', topics:[]},
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    { subjectData: { subjectRef:0, subjectString: 'LCH abc', topics:[]},
 
  ]

  ngOnInit(){
     this.topics = this.selectedSubjects.subjectData.topics;
  }

  updateSubject(subjs:Subjects) {
     console.log(subjs);
     var subj = this.selectedSubjects.subjectData.topics.
         find(e => e.topicRef == subjs.subjectData.topics[0].topicRef);
     this.selectedSubjects.subjectData = subj
     alert("subjects Saved");
  }

  showDetails(topics: TopicData){
     this.selectedSubjects.subjectData.topics;
  }

}
