import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apdcl';
  constructor(public router: Router) {}

  // Method to handle the login button click
  onLoginClick() {
    // Hide the content of the page (optional, you can also show a loading indicator here)
    document.body.style.display = 'none';

    // Navigate to the login page
    this.router.navigate(['/login-page']);
  }
}
