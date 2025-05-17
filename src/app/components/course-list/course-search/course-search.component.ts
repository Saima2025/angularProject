import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../interface/course.interface';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() filteredCourses = new EventEmitter<Course[]>();

  searchTerm: string = '';
  filtered: Course[] = [];

  ngOnInit() {
    this.filtered = this.courses;
    this.filteredCourses.emit(this.filtered);
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filtered = this.courses.filter(course => 
      course.title.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term)
    );
    this.filteredCourses.emit(this.filtered);
  }
}
