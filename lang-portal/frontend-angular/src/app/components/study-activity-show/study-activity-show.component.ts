import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudyActivitiesService } from '../../services/study-activities.service';

@Component({
  selector: 'app-study-activity-show',
  templateUrl: './study-activity-show.component.html',
  styleUrls: ['./study-activity-show.component.css']
})
export class StudyActivityShowComponent implements OnInit {

  studyActivityId!: number;
  studyActivity: any;

  constructor(
    private route: ActivatedRoute,
    private studyActivitiesService: StudyActivitiesService
  ) { }

  ngOnInit(): void {
    this.studyActivityId = +this.route.snapshot.paramMap.get('id')!;
    this.studyActivitiesService.getStudyActivity(this.studyActivityId).subscribe(data => {
      this.studyActivity = data;
    });
  }
}
