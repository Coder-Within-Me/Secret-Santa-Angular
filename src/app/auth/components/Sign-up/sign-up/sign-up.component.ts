import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public SignUpForm : FormGroup;
  public IsPasswordSame : boolean = false;
  hide = true;
  hide1 = true;
  // public emailErrorMessage : string;
  // public passwordErrorMessage : string;
  // public rePasswordErrorMessage : string;

  constructor(private router:Router) { } 

  ngOnInit(){
    this.SignUpForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      rePassword: new FormControl('',[Validators.required,Validators.minLength(8)])
    });

    // const emailcontrol = this.SignUpForm.get('email');
    // emailcontrol?.valueChanges.subscribe(x => {
    //   this.ValidateEmailField(emailcontrol as FormControl);
    // });

    // const passwordcontrol = this.SignUpForm.get('password');
    // passwordcontrol?.valueChanges.subscribe(x => {
    //   this.ValidatePasswordField(passwordcontrol as FormControl);
    // });

    // const rePasswordcontrol = this.SignUpForm.get('rePassword');
    // rePasswordcontrol?.valueChanges.subscribe(x => {
    //   this.ValidateRePasswordField(rePasswordcontrol as FormControl);
    // });
    
  }

  // public ValidateEmailField(emailcontrol : FormControl) : void{
  //   this.emailErrorMessage = '';
  //   if(emailcontrol.errors && (emailcontrol.touched || emailcontrol.dirty)){
  //     if(emailcontrol.errors?.['required']){
  //       this.emailErrorMessage = 'This is a required field.'
  //     }
  //     else if(emailcontrol.errors?.['email']){
  //       this.emailErrorMessage = 'This is not a valid email address.'
  //     }
  //   }
  // }

  // public ValidatePasswordField(passwordcontrol : FormControl) : void{
  //   this.passwordErrorMessage = '';
  //   if(passwordcontrol.errors && (passwordcontrol.touched || passwordcontrol.dirty)){
  //     if(passwordcontrol.errors?.['required']){
  //       this.passwordErrorMessage = 'This is a required field.'
  //     }
  //     else if(passwordcontrol.errors?.['minlength']){
  //       this.passwordErrorMessage = 'must have atleast 8 characters.'
  //     }
  //   }
  // }

  // public ValidateRePasswordField(rePasswordcontrol : FormControl) : void{
  //   this.rePasswordErrorMessage = '';
  //   if(rePasswordcontrol.errors && (rePasswordcontrol.touched || rePasswordcontrol.dirty)){
  //     if(rePasswordcontrol.errors?.['required']){
  //       this.rePasswordErrorMessage = 'This is a required field.'
  //     }
  //     else if(rePasswordcontrol.errors?.['minlength']){
  //       this.rePasswordErrorMessage = 'must have atleast 8 characters.'
  //     }
  //   }
  // }

  public ValidatePasswords() : boolean{
    const passwordcontrol = this.SignUpForm.get('password');
    const rePasswordcontrol = this.SignUpForm.get('rePassword');
    if(passwordcontrol?.value !== rePasswordcontrol?.value){
      this.IsPasswordSame = true;
      return false;
    }
    else{
      this.IsPasswordSame = false;
      return true;
    }
  }

  signinRedirect(){
    this.router.navigate(['auth/signin']);
  }

  SignUp(){
    if(this.SignUpForm.valid && this.ValidatePasswords()){
      console.log('This is Signup msg.');
    }
    else{
      console.log('mismatched');
    }
  }
}
