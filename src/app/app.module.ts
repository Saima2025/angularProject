import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { MyLearningComponent } from './components/my-learning/my-learning.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { LearningHistoryComponent } from './components/learning-history/learning-history.component';
import { CourseSearchComponent } from './components/course-list/course-search/course-search.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, CourseDetailsComponent, MyLearningComponent, MyProfileComponent, HeaderComponent, LearningHistoryComponent, CourseSearchComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
