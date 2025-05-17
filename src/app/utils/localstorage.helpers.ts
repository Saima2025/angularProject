import { Course } from '../interface/course.interface';
import { Enrollment } from '../interface/enrollment.interface';
import { User } from '../interface/user.interface';

const USER_KEY = 'user_profile';

export function getUserFromLocalStorage(): User {
  const userJson = localStorage.getItem(USER_KEY);
  if (userJson) {
    return JSON.parse(userJson);
  } else {
    // Default user
    const defaultUser: User ={
      userId: "b5a3f4b8-d41e-4e9c-8e5b-f7b203c91cf2",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      preferences: {
        preferredCategories: ["Programming", "Business"],
        notifications: true,
      },
    };
    localStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
    return defaultUser;
  }
}

export function saveUserToLocalStorage(user: User): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getCoursesFromLocalStorage(): Course[] {
  try {
    const data = localStorage.getItem('lms-courses');
    return data ? JSON.parse(data) as Course[] : [];
  } catch (error) {
    console.error('Error parsing courses from localStorage:', error);
    return [];
  }
  // return JSON.parse(localStorage.getItem('lms-courses') || '[]');
}

export function getEnrollments(): Enrollment[] {
  return JSON.parse(localStorage.getItem('enrollments') || '[]');
}

export function saveEnrollment(enrollment: Enrollment): void {
  const enrollments = getEnrollments();
  enrollments.push(enrollment);
  localStorage.setItem('enrollments', JSON.stringify(enrollments));
}
export function saveEnrollmentsToLocalStorage(enrollments: Enrollment[]): void {
  localStorage.setItem('enrollments', JSON.stringify(enrollments));
}

// export function addEnrollment(newEnrollment: Enrollment): void {
//   const enrollments = getEnrollments();
//   enrollments.push(newEnrollment);
//   saveEnrollments(enrollments);
// }