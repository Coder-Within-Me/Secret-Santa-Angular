import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/Sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './components/Sign-up/sign-up/sign-up.component';
import { MailGetPasswordComponent } from './components/Mail-GetPassword/mail-get-password/mail-get-password.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent}, 
  { path: 'signup', component: SignUpComponent },
  { path: 'mailgetpassword/:mailid', component: MailGetPasswordComponent },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
