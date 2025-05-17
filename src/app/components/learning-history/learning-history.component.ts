import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../../interface/enrollment.interface';
import { Course } from '../../interface/course.interface';
import { getEnrollments, getCoursesFromLocalStorage } from '../../utils/localstorage.helpers';

@Component({
  selector: 'app-learning-history',
  templateUrl: './learning-history.component.html',
  styleUrls: ['./learning-history.component.scss'],
})
export class LearningHistoryComponent implements OnInit {
  completedCourses: (Course & { completedAt: string })[] = [];
  totalCompleted = 0;
  totalHours = 0;

  ngOnInit(): void {
    console.log(getEnrollments()) ;
    const enrollments = getEnrollments().filter(e => e.status === 'completed');
    const courses = getCoursesFromLocalStorage();
    
    this.completedCourses = enrollments.map(e => {
      const course = courses.find(c => c.id === e.courseId);
      return course ? { ...course, completedAt: e.completedAt! } : null;
    }).filter(Boolean) as (Course & { completedAt: string })[];

    this.totalCompleted = this.completedCourses.length;
    this.totalHours = this.completedCourses.reduce((sum, c) => sum + c.duration, 0);
  }
}
