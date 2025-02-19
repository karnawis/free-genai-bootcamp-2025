import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyActivitiesService } from '../../services/study-activities.service';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-study-activities-launch',
  templateUrl: './study-activities-launch.component.html',
  styleUrls: ['./study-activities-launch.component.css']
})
export class StudyActivitiesLaunchComponent implements OnInit {

  launchForm!: FormGroup;
  groups: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studyActivitiesService: StudyActivitiesService,
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.launchForm = this.fb.group({
      name: [''],
      groupId: ['']
    });

    this.groupsService.getGroups(1, 10).subscribe((data: any) => {
      this.groups = data;
    });
  }

  onSubmit(): void {
    if (this.launchForm.valid) {
      this.studyActivitiesService.createStudyActivity(this.launchForm.value).subscribe(() => {
        this.router.navigate(['/study_activities']);
      });
    }
  }
}
