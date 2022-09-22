import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterSubjectDataComponent } from './enter-subject-data/enter-subject-data.component';

export class TopicData{
  topicRef: number = 0;
  topicLevel: number = 0;
  topicString: string = "";
  subjects: string[] = [];
};

// each topics el has an array of Subject strings
// and refers to a specifc Topic with a list of strings for Subject data
export class SubjectData{
    subjectRef: number = 0;
    subjectString: string = "";
    topics: TopicData[] = [];
};

// subjectData[3] will ref a specific SubjectData[3]
export class Subjects{
    subjectData: SubjectData = {subjectRef:0, subjectString:'Fred', topics: []};
};

@NgModule({
  declarations: [
    AppComponent,
    EnterSubjectDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
