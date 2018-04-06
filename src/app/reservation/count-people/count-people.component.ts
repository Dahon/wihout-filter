import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-count-people',
  templateUrl: './count-people.component.html',
  styleUrls: ['./count-people.component.css']
})
export class CountPeopleComponent implements OnInit {
	visible: boolean = false;
	adult:number = 1;
	children = 0;
	infants = 0;
	reserv: number = 1;
	maxReserv = 9;
	econom:boolean = true;
	business:boolean = false;
	typeTicket: string = 'эконом';

	@Input() peopleCountGroup: FormGroup;

	constructor() { }

	ngOnInit() {
	}
	toggle() {
	this.visible = !this.visible;
	}
  	plus(eventType: string) {
	    if(eventType === 'adults'){
	      if((this.children + this.adult + this.infants) < this.maxReserv){
	        this.adult++;
	        return this.reserv = this.adult + this.children;
	       }
	      this.adult = 1;
	      return this.reserv = this.adult + this.children;
	    }else{
	      if((this.children + this.adult) < this.maxReserv){
	        this.children++;
	        return this.reserv = this.adult + this.children;
	      }
	      this.children = 0;
	      return this.reserv = this.adult + this.children;
	    }
  	};
	minus(eventType: string) {
	    if(eventType === 'adults'){
	      if(this.adult > 1){
	        this.adult--;
	        return this.reserv = this.adult + this.children;
	       }
	      this.adult = this.maxReserv - this.children;
	      return this.reserv = this.adult + this.children;
	    }else{
	      if(this.children >= 1){
	        this.children--;
	        return this.reserv = this.adult + this.children;
	      }
	      this.children = this.maxReserv - this.adult;
	      return this.reserv = this.adult + this.children;
	    }
	};
  	plusA(){
	  	if(this.infants < this.adult){
	  		this.infants++;
	      return;
	  	}
	  	this.infants = 0;
  	}
  	minusA() {
	  	if(this.infants >= 1){
	      	this.infants--;
	        return;
	  	}
	   	this.infants = this.adult;
  	};
  	changeSwitch(){
	    if(this.econom){
	      this.econom = false;
	      this.business = true;
	      this.typeTicket = 'бизнес';
	    }else{
	      this.econom = true;
	      this.business = false;
	      this.typeTicket = 'эконом';
	    }
  	}

}
