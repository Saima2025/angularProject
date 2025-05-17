import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { MyLearningComponent } from './components/my-learning/my-learning.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { LearningHistoryComponent } from './components/learning-history/learning-history.component';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'my-learning',component: MyLearningComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'learning-history', component: LearningHistoryComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
