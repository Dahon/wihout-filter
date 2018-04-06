import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {
	form: FormGroup;

	constructor() { }

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
		});
	}

}
