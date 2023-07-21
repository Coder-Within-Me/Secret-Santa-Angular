import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PasswordDialogComponent } from '../../PasswordDialog/password-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterLoginDialogComponent } from '../../after-login-dialog/after-login-dialog.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  password : string="";
  public SignInForm : FormGroup;
  hide = true;

  constructor(private router:Router, public dialog: MatDialog) { }

  ngOnInit(){
    this.SignInForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  signupRedirect(){
    this.router.navigate(['auth/signup']);
  }

  SignIn(){
    alert('signed in successfully.');
    this.openAfterLoginDialog();
  }

  public openAfterLoginDialog() : void{
    let dialogRef = this.dialog.open(AfterLoginDialogComponent, {
      width: '500px',
      data: { name: this.password }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
    });
  }

  openDialog() : void{   

    let dialogRef = this.dialog.open(PasswordDialogComponent, {
      width: '400px',
      // data: { name: this.password }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
    });
  }
}
