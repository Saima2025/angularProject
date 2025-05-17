import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../utils/localstorage.helpers';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user: User = {
    userId: '',
    name: '',
    email: '',
    preferences: {
      preferredCategories: [],
      notifications: false,
    }
  };

  categories = ['Programming', 'Business', 'Marketing', 'Design'];
  errorMessage = '';

  ngOnInit(): void {
    this.user = getUserFromLocalStorage();
  }

  toggleCategory(category: string): void {
    debugger ;
    const prefs = this.user.preferences.preferredCategories; // check if the category is already there
    const index = prefs.indexOf(category); // index of the check or unchecked category
    debugger ;
    if (index === -1) {
      prefs.push(category);
    } else {
      prefs.splice(index, 1); // starting at index remove 1 item 
    }
  }

  isCategorySelected(category: string): boolean {
    return this.user.preferences.preferredCategories.includes(category);
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  saveProfile(): void {
    if (!this.validateEmail(this.user.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }
    saveUserToLocalStorage(this.user);
    this.errorMessage = '';
    alert('Profile saved successfully!');
  }
}
