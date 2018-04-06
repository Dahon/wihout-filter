import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nouislider',
  templateUrl: './nouislider.component.html',
  styleUrls: ['./nouislider.component.css']
})
export class NouisliderComponent implements OnInit {
	@Input() searchResultFilter;

	someRange = [0, 15];
	constructor() { }
	ngOnInit() {
		console.log(this.searchResultFilter[0]);
	}

}
