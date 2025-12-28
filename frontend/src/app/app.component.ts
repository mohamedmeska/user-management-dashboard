import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'User Management Dashboard';

  onLogout(): void {
    // This is intentionally simple for learning purposes
    console.log('User logged out');
  }
}
