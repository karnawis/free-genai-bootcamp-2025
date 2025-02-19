import { Component, OnInit } from '@angular/core';
import { StudySessionsService } from '../../services/study-sessions.service';

@Component({
  selector: 'app-paginated-study-session-list',
  templateUrl: './paginated-study-session-list.component.html',
  styleUrls: ['./paginated-study-session-list.component.css']
})
export class PaginatedStudySessionListComponent implements OnInit {

  studySessions: any[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  constructor(private studySessionsService: StudySessionsService) { }

  ngOnInit(): void {
    this.loadStudySessions();
  }

  loadStudySessions(): void {
    this.studySessionsService.getStudySessions(this.currentPage + 1, this.pageSize).subscribe(data => {
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
