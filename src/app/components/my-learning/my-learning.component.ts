import { Component, OnInit } from '@angular/core';
import { getCoursesFromLocalStorage, getEnrollments ,saveEnrollmentsToLocalStorage } from '../../utils/localstorage.helpers';
import { Enrollment } from '../../interface/enrollment.interface';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
})
export class MyLearningComponent implements OnInit {
  enrollments: Enrollment[] = [];
  courseTitles: { [key: string]: string } = {};

  ngOnInit(): void {
    this.enrollments = getEnrollments().filter(e => e.status !== 'completed' || e.progress < 100);
    const courses = getCoursesFromLocalStorage();
    courses.forEach(course => this.courseTitles[course.id] = course.title);
    console.log(this.courseTitles) ;
  }

  updateProgress(enrollment: Enrollment, value: number): void {
    enrollment.progress = value;
    if (value === 100) {
      enrollment.status = 'completed';
      enrollment.completedAt = new Date().toISOString();
    }
    saveEnrollmentsToLocalStorage(this.enrollments);
  }

  getCourseTitle(courseId: string): string {
    return this.courseTitles[courseId] || 'Unknown Course';
  }
}
