import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../interface/course.interface';
import { getCoursesFromLocalStorage, getEnrollments, saveEnrollment } from '../../utils/localstorage.helpers';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | null = null;
  message: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    debugger ;
    if (courseId) {
      const courses = getCoursesFromLocalStorage();
      debugger ;
      this.course = courses.find(c => c.id === courseId) || null;
    }
  }

  enroll(): void {
    if (!this.course) return;

    const enrollments = getEnrollments();
    const isAlreadyEnrolled = enrollments.some(e => e.courseId === this.course?.id);

    if (isAlreadyEnrolled) {
      this.message = 'You are already enrolled in this course.';
      return;
    }

    const unmetPrereqs = this.course.prerequisites.filter(prereqId =>
      !enrollments.some(e => e.courseId === prereqId)
    );

    if (unmetPrereqs.length > 0) {
      this.message = 'You must complete the prerequisite courses before enrolling.';
      return;
    }

    saveEnrollment({
       userId: "b5a3f4b8-d41e-4e9c-8e5b-f7b203c91cf2",
        courseId: this.course.id,
        status: 'enrolled',
        progress: 0,
        enrolledAt: new Date().toISOString()
    });

    this.message = 'Successfully enrolled!';
  }
}
