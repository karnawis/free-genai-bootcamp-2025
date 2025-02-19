import { Component, Input, OnInit } from '@angular/core';
import { StudyActivitiesService } from '../../services/study-activities.service';

@Component({
  selector: 'app-study-activities-paginated-list',
  templateUrl: './study-activities-paginated-list.component.html',
  styleUrls: ['./study-activities-paginated-list.component.css']
})
export class StudyActivitiesPaginatedListComponent implements OnInit {

  @Input() studyActivityId!: number;
  studySessions: any[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  constructor(private studyActivitiesService: StudyActivitiesService) { }

  ngOnInit(): void {
    this.loadStudySessions();
  }

  loadStudySessions(): void {
    this.studyActivitiesService.getStudySessions(this.studyActivityId, this.currentPage + 1, this.pageSize).subscribe(data => {
      this.studySessions = data.items;
      this.totalItems = data.pagination.totalItems;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadStudySessions();
  }
}
