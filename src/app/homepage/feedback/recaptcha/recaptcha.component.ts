import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {
	public resolved(captchaResponse: string) {
	  console.log(`Resolved captcha with response ${captchaResponse}:`);
	}
	constructor() { }

	ngOnInit() {
		
	}
}
