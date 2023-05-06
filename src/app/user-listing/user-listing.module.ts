import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListingRoutingModule } from './user-listing-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProfilePageComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserListingRoutingModule
  ]
})
export class UserListingModule { }
