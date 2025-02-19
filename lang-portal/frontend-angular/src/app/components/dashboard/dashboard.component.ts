import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastStudySession: any;
  studyProgress: any;
  quickStats: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getLastStudySession().subscribe(data => {
      this.lastStudySession = data;
    });

    this.dashboardService.getStudyProgress().subscribe(data => {
      this.studyProgress = data;
    });

    this.dashboardService.getQuickStats().subscribe(data => {
      this.quickStats = data;
    });
  }
}
