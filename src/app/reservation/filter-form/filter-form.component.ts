import { Component, OnInit, Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  airFilter: FormGroup;

  @Input() public searchResultFilter;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.searchResultFilter.transplantation);
    this.airFilter = this._fb.group({ 
  	  someRange: ['10', []],
  	  someRange2: ["10", []], 
  	});
  }
}
