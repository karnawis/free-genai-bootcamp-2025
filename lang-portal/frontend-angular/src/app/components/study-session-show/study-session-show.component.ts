import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudySessionsService } from '../../services/study-sessions.service';

@Component({
  selector: 'app-study-session-show',
  templateUrl: './study-session-show.component.html',
  styleUrls: ['./study-session-show.component.css']
})
export class StudySessionShowComponent implements OnInit {

  sessionId!: number;
  studySession: any;

  constructor(
    private route: ActivatedRoute,
    private studySessionsService: StudySessionsService
  ) { }

  ngOnInit(): void {
    this.sessionId = +this.route.snapshot.paramMap.get('id')!;
    this.studySessionsService.getStudySession(this.sessionId).subscribe(data => {
      this.studySession = data;
    });
  }
}
