import { Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../shared/services/search.service';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';
import { SearchItem} from '../shared/models/searchItem.model';
import {NgxDateRangePickerOptions} from '../../ngx-daterangepicker';
import { FieldErrorDisplayComponent } from '../shared/component/field-error-display/field-error-display.component';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})

export class ReservationComponent implements OnInit {
  reservation: FormGroup;
  selectedDeparture: string = '';
  selectedArrivals: string = '';
  private loadingDeparture: boolean = false;
  private loadingArrivals: boolean = false;
  private show: boolean = true;
  private showS: boolean = true;
  results: Object;
  resultsSec: Object;
  searchTerm$ = new Subject<string>();
  searchTermSec$ = new Subject<string>();
  dateDeparture;
  dateBack;
  searchResultTicket: any;
  searchResultFilter: any;
  searchResult: any; 

  someRange = [0, 15];
  someRange2 = [0, 15];
  public filterItems: Array<any>;
  transplantations: Array<any>= [];

  createCheckbox(){
    for (var i = 0; i < this.searchResultFilter.transplantation.length; i++) {
      if({ name: this.searchResultFilter.transplantation[i]})
      if(i == 0){
        this.transplantations.push({ name: this.searchResultFilter.transplantation[i], selected: true});
        continue;
      }
      this.transplantations.push({ name: this.searchResultFilter.transplantation[i], selected: false});
     } 
  console.log(this.transplantations);
  console.log(this.searchResultTicket);
  }
  // checked() {
  //   return this.filterItems.filter(item => { return item.checked; });
  // }

  get selectedTransTypes() {
    return this.transplantations.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }

  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    autoApply: true,
    labels: ['Вылет', 'Обратно'],
    timePicker24Hour:false,
    autoUpdateInput: false
  };
  public selectedDate(value: any, datepicker?: any) {
    // or manupulat your own internal property
    this.dateDeparture = value.start.format('DD/MM/YYYY');
    this.dateBack = value.end.format('DD/MM/YYYY');
    console.log(this.reservation);

    // this.daterange.start = value.start;
    // this.daterange.end = value.end;
    // this.daterange.label = value.label;
  }
  constructor(private searchService: SearchService, private _fb: FormBuilder) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.show = true;
        this.loadingDeparture = false;
        this.results = results;
      });
    this.searchService.search(this.searchTermSec$)
      .subscribe(results => {
        this.showS = true;
        this.loadingArrivals = false;
        this.resultsSec = results;
      });
  }
  ngOnInit() {
    this.reservation = this._fb.group({
      selectedDeparture: ['', [Validators.required]],
      selectedArrivals: ['', [Validators.required]],
      dateDeparture: ['', [Validators.required]],
      dateBack: ['', [Validators.required]],
      peopleCountGroup: this._fb.group({
        peopleCount: ['', [Validators.required]],
        adult: ['', [Validators.required]],
        children: [''],
        infants: [''],
        typeTicket: ['', [Validators.required]],
      })
    });
  }
  validateAllFormFields(profileForm: FormGroup) {         
    Object.keys(profileForm.controls).forEach(field => {  
      const control = profileForm.get(field);             
      if (control instanceof FormControl) {            
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }
  isFieldValid(field: string) {
    return !this.reservation.get(field).valid && this.reservation.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'error focused': this.isFieldValid(field),
    }
  }
  choiceSearch(selected, type){
    if(type == 'arrive'){
      this.selectedArrivals = selected.name;
      this.showS = false;
    }else{
      this.selectedDeparture = selected.name;
      this.show = false;
    }
  }
  loadingFuncF(){
    this.loadingDeparture = true;
  }
  loadingFuncS(){
    this.loadingArrivals = true;
  }
  onSubmit() {
    if (this.reservation.valid) {
      console.log(this.reservation);
      this.searchService.searchTicket(this.reservation.value)
        .subscribe(results => {this.searchResult = results; this.searchResultTicket = results[0].ticket; this.searchResultFilter = results[1].filter[0]; console.log(results); console.log(this.searchResultTicket);});

    } else {
      console.log(this.reservation);
      this.validateAllFormFields(this.reservation); 
    }
  }
}
