import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
  
    UserLandingComponent,
       UserViewComponent,
       UserEditComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
