import { Component, OnInit } from '@angular/core';
import { Course } from '../../interface/course.interface';
import { CourseService } from '../../services/course.services';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  categoryFilter = '';
  freeOnly = false;
  sortOption = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredCourses = this.courses
      .filter(course => (!this.categoryFilter || course.category === this.categoryFilter))
      .filter(course => (!this.freeOnly || course.isFree))
      .sort((a, b) => {
        if (this.sortOption === 'title') return a.title.localeCompare(b.title);
        if (this.sortOption === 'duration') return a.duration - b.duration;
        return 0;
      });
  }

  onFilterChange(): void {
    this.applyFilters();
  }
  
  onCoursesFiltered(filtered: Course[]) {
    this.filteredCourses = filtered;
  }

}
