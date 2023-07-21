import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/Sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './components/Sign-up/sign-up/sign-up.component';
import { MailGetPasswordComponent } from './components/Mail-GetPassword/mail-get-password/mail-get-password.component';
import { PasswordDialogComponent } from './components/PasswordDialog/password-dialog.component';
import { AfterLoginDialogComponent } from './components/after-login-dialog/after-login-dialog.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    MailGetPasswordComponent,
    PasswordDialogComponent,
    AfterLoginDialogComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class AuthModule { }
