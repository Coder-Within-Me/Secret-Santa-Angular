import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent {

  public passwordDialogForm : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(){
      this.passwordDialogForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email])
      });
    }
  

    SendMail(){
      if(this.passwordDialogForm.valid){
        alert('Mail sent to your mail ID. Please check & re-set your password.');
      }     
    }

  onCancel(): void {
    this.dialogRef.close();
  }
}
