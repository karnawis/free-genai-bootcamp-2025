import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudyActivitiesIndexComponent } from './components/study-activities-index/study-activities-index.component';
import { WordsIndexComponent } from './components/words-index/words-index.component';
import { WordGroupsIndexComponent } from './components/word-groups-index/word-groups-index.component';
import { StudySessionsIndexComponent } from './components/study-sessions-index/study-sessions-index.component';
import { SettingsComponent } from './components/settings/settings.component';
import { QuickStatsComponent } from './components/quick-stats/quick-stats.component';
import { LastStudySessionComponent } from './components/last-study-session/last-study-session.component';
import { StudyProgressComponent } from './components/study-progress/study-progress.component';
import { StudyActivitiesLaunchComponent } from './components/study-activities-launch/study-activities-launch.component';
import { WordShowComponent } from './components/word-show/word-show.component';
import { WordGroupsComponent } from './components/word-groups/word-groups.component';
import { StudySessionsComponent } from './components/study-sessions/study-sessions.component';
import { StudySessionDetailsComponent } from './components/study-session-details/study-session-details.component';
import { WordsReviewItemsComponent } from './components/words-review-items/words-review-items.component';
import { PaginatedWordListComponent } from './components/paginated-word-list/paginated-word-list.component';
import { PaginatedStudySessionListComponent } from './components/paginated-study-session-list/paginated-study-session-list.component';
import { StudyActivityCardComponent } from './components/study-activity-card/study-activity-card.component';
import { StudyActivityShowComponent } from './components/study-activity-show/study-activity-show.component';
import { StudyActivitiesPaginatedListComponent } from './components/study-activities-paginated-list/study-activities-paginated-list.component';
import { StudyStatisticsComponent } from './components/study-statistics/study-statistics.component';
import { StudySessionShowComponent } from './components/study-session-show/study-session-show.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'study_activities', component: StudyActivitiesIndexComponent },
  { path: 'words', component: WordsIndexComponent },
  { path: 'groups', component: WordGroupsIndexComponent },
  { path: 'study_sessions', component: StudySessionsIndexComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    StudyActivitiesIndexComponent,
    WordsIndexComponent,
    WordGroupsIndexComponent,
    StudySessionsIndexComponent,
    SettingsComponent,
    QuickStatsComponent,
    LastStudySessionComponent,
    StudyProgressComponent,
    StudyActivitiesLaunchComponent,
    WordShowComponent,
    WordGroupsComponent,
    StudySessionsComponent,
    StudySessionDetailsComponent,
    WordsReviewItemsComponent,
    PaginatedWordListComponent,
    PaginatedStudySessionListComponent,
    StudyActivityCardComponent,
    StudyActivityShowComponent,
    StudyActivitiesPaginatedListComponent,
    StudyStatisticsComponent,
    StudySessionShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }