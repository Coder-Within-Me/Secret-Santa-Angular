import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-get-password',
  templateUrl: './mail-get-password.component.html',
  styleUrls: ['./mail-get-password.component.css']
})
export class MailGetPasswordComponent{

  email : string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param) =>{
      this.email = param['mailid'];
      });
  }
}
