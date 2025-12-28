import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  // Demonstrates @Input (data coming from parent)
  @Input() title: string = 'User Management Dashboard';

  // Demonstrates @Output (event sent to parent)
  @Output() logout = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
    this.logout.emit();
  }
}
