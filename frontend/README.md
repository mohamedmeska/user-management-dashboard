# User Management Dashboard – frontend

You are an expert Angular developer.

I am creating a TRAINING / REVIEW project using Angular 11.
Project name: User Management Dashboard.

Constraints:
- Angular version: 11
- Use NgModules (NO standalone components)
- Use Zone.js change detection (NO signals)
- Use RxJS (classic Angular style)
- Prefer readability and learning over optimization

Project Goal:
Review Angular CORE concepts by building a small but realistic User Management Dashboard.

High-Level Features:
- List users
- View user details
- Create and edit users
- Simulated authentication and route protection

Architecture Rules:
1) AppModule
- Root module
- Imports CoreModule, SharedModule, and AppRoutingModule

2) CoreModule
- Singleton services only
- AuthService
- UserService
- NotificationService
- AuthGuard

3) SharedModule
- Reusable components (Header, ConfirmDialog)
- Custom pipe (UserRolePipe)
- Export common Angular modules

4) UsersModule (Lazy Loaded)
- Route: /users
- Contains:
  - UserListComponent
  - UserDetailComponent
  - UserFormComponent
- Uses UsersRoutingModule
- Includes one Resolver (UserResolver)

Angular Concepts to Demonstrate:
- NgModules and lazy loading
- Components and lifecycle hooks
- @Input / @Output
- Property and event binding
- *ngIf, *ngFor with trackBy
- Custom pipe
- Reactive Forms (FormGroup, FormArray)
- Built-in, custom sync, and async validators
- RxJS Observables and async pipe
- Route params, guards, resolvers
- ChangeDetectionStrategy.OnPush in UserListComponent
- Basic unit testing with TestBed

Guidelines:
- Generate code step-by-step
- Add clear comments explaining WHY, not just WHAT
- Keep HTML and CSS minimal
- Do NOT use modern Angular APIs (signals, standalone components, inject())
