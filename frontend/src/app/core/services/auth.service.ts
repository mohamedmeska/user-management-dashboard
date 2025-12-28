import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Holds the current authentication state
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  // Public observable for components that want to react to changes
  isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor() {}

  // Synchronous check (useful for guards, templates)
  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  login(): void {
    this.loggedInSubject.next(true);
  }

  logout(): void {
    this.loggedInSubject.next(false);
  }
}
