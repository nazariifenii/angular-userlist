import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: UserListComponent },
  { path: 'profile/:id', component: ProfilePageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
