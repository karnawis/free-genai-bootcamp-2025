import { Component, OnInit } from '@angular/core';
import { StudyActivitiesService } from '../../services/study-activities.service';

@Component({
  selector: 'app-study-activities-index',
  templateUrl: './study-activities-index.component.html',
  styleUrls: ['./study-activities-index.component.css']
})
export class StudyActivitiesIndexComponent implements OnInit {

  studyActivities: any[] = [];

  constructor(private studyActivitiesService: StudyActivitiesService) { }

  ngOnInit(): void {
    this.studyActivitiesService.getStudyActivities().subscribe(data => {
      this.studyActivities = data;
    });
  }
}
