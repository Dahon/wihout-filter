import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormModel {
  captcha?: string;
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  form: FormGroup;
  selected :any;
  constructor() { }

  ngOnInit() {
  	this.form = new FormGroup({
  		fullname: new FormControl('', [Validators.required]),
  		email: new FormControl('', [Validators.required, Validators.email]),
  		company: new FormControl('', [Validators.required]),
  		tel: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  		captha: new FormControl()
  	});
  }
  wasClicked = false;

  onClick() {
      this.wasClicked= !this.wasClicked;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }



}
