import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	@Input() searchResultFilter;
	checkBoxes: Array<any>= [];
	i: number = 0;
	constructor() { }
	createCheckbox(filterArray){
		console.log(filterArray);
		for (var i = 0; i < filterArray.length; i++) {
		  if(i == 0){
		    this.checkBoxes.push({ name: filterArray[i], selected: true});
		    continue;
		  }
		    this.checkBoxes.push({ name: filterArray[i], selected: false});
		}
	}

	ngOnInit() {
		this.createCheckbox(this.searchResultFilter);
		console.log(this.checkBoxes);
	}

}
