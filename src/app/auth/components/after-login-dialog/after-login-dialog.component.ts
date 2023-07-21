import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-after-login-dialog',
  templateUrl: './after-login-dialog.component.html',
  styleUrls: ['./after-login-dialog.component.css']
})
export class AfterLoginDialogComponent {
  public AfterLoginDialogForm : FormGroup;
  InvalidGroupCode : boolean;
  IsEmpty : boolean;

  constructor(
    private router:Router,
    public dialogRef: MatDialogRef<AfterLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(){
      this.AfterLoginDialogForm = new FormGroup({
        groupCode: new FormControl()
      });
    }
  
    ViewGroup(groupCode : string){
      this.InvalidGroupCode = false;
      this.IsEmpty = false;
      if(groupCode != null && groupCode.length > 0){
        if(groupCode.length == 8){
          alert('correct group code');
        }
        else{
          this.InvalidGroupCode = true;
        }
      }
      else{
        this.IsEmpty = true;
      }
    }

    CreateNewGroup(){
      this.router.navigate(['gameoperation/addplayer']);
      this.onCancel();
    }

  onCancel(): void {
    this.dialogRef.close();
  }
}
