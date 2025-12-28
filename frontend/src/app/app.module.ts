// Create AppModule with feature modules as described in README

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';  // Add this import
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { UserRolePipe } from './shared/pipes/user-role.pipe';
import { UserListComponent } from './features/users/components/user-list/user-list.component';
import { UserDetailComponent } from './features/users/components/user-detail/user-detail.component';
import { UserFormComponent } from './features/users/components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // Remove HeaderComponent from here
    ConfirmDialogComponent,
    UserRolePipe,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule  // Add this to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
