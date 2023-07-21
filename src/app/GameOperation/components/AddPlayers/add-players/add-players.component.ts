import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPLayersComponent {

  public addplayerForm : FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){
    this.CreateForm();
  }

  private CreateForm() : void {
    this.addplayerForm = this._formBuilder.group({
      groupName: ['',[Validators.required]],
      groupValidityDate: ['',[Validators.required]],
      players: this._formBuilder.array([this.getPlayersControl(),this.getPlayersControl()])
    });
  }

  private getPlayersControl() : FormGroup{
    return this._formBuilder.group({
      playerName : '',
      email : ''
    });
  }

  public get players(){
    return <FormArray>this.addplayerForm.get('players');
  }

  CreateNew(){
    this.players.push(this.getPlayersControl());
  }

  RemoveEle(i : any) : void{
    this.players.removeAt(i);
  }

}
