import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FieldErrorDisplayComponent } from '../shared/component/field-error-display/field-error-display.component';
import { SelectedService } from '../shared/services/selected.service';
import { ProfileService} from '../shared/services/profile.service';

//import { Customer } from '../shared/models/profile.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  docNumber: number = 0;
  selected = [];
  //myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  constructor(private _fb: FormBuilder, private selectedService: SelectedService, private profileService: ProfileService,){}
  ngOnInit() {
    this.profileForm = this._fb.group({
      personalData: this._fb.group({
        passengerGender: ['0', [Validators.required]],
        birthday: [''],
        firstNameLatin: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
        lastNameLatin: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
        passengerIin: ['', [Validators.pattern("[0-9]{12}"), this.iinCheck]],
        firstNameCyrl: ['', [Validators.required, Validators.pattern("[а-яА-ЯёЁ]*")]],
        patronymicCyrl: ['', [Validators.pattern("[а-яА-ЯёЁ]*")]],
        lastNameCyrl: ['', [Validators.required, Validators.pattern("[а-яА-ЯёЁ]*")]],
        companyName: [{value: 'GLOBAL AIR', disabled: true}],
        passengerDepartmentId: ['1'],
        passengerPhone: ['', [Validators.required]],
        passengerEmail: ['', [Validators.required, Validators.email]],
        passengerEmergencyPhone: [''],
        passengerEmergencyContact: ['']
      }),
      documents: this._fb.array([
      ]),
      specialRequirements: this._fb.group({
        passengerPreferenceAirSeat: ['0'],
        passengerPreferenceAirMeal: [''],
      })
    });
    this.selected = this.selectedService.getData();
  }

  isFieldValid(field: string, errorType: string='') {
    if(errorType === 'correctError'){
      return (this.profileForm.get(field).errors && !this.profileForm.get(field).errors.pattern && this.profileForm.get(field).errors.correctError);
    }
    if(errorType === 'pattern'){
      return (this.profileForm.get(field).errors && this.profileForm.get(field).errors.pattern);
    }
    return !this.profileForm.get(field).valid && this.profileForm.get(field).touched && this.profileForm.get(field).value == '';
  }

  displayFieldCss(field: string, errorPattern:string, errorCorrect:string) {
      return {
        'error focused': (this.isFieldValid(field, errorPattern) || this.isFieldValid(field, errorCorrect) || this.isFieldValid(field)),
      }
  }

  iinCheck(controll) {
    let parent = controll.parent;
    let iin : string = controll.value;
    let birthday: string;
    let passengerGender : number;
    // if(parent){
    //    birthday = parent.controls.birthday.value;
    //    passengerGender = parent.controls.passengerGender.value;
    //    console.log(birthday);
    //    //if(iin.substring(0, 6)!=((birthday.substring(6,8))+(birthday.substring(2,4))+(birthday.substring(0,2)))){return false;}else{console.log('suc')}
    // }
    if(!iin) return null;
    if(iin.length!=12)return { 'correctError' : true };    
    if(!(/[0-9]{12}/.test(iin)))return { 'correctError' : true };

    let month : number = parseInt(iin.substring(2, 4));
    if(month>12)return { 'correctError' : true };

    let days : number = parseInt(iin.substring(4, 6));
    if(days>31)return { 'correctError' : true };
    let b1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
    let b2 = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2 ];
    let a = [];
    let myControll : number = 0;
    for(let i=0; i<12; i++){
      a[i] = parseInt(iin.substring(i, i+1));
      if(i<11) myControll += a[i]*b1[i];
    }
    myControll = myControll % 11;
    if(myControll==10) {
      myControll = 0;
      for(let i=0; i<11; i++){
        myControll += a[i]*b2[i];
        myControll = myControll % 11;
      }
    }
    if(myControll!=a[11]) return { 'correctError' : true };else{return null;}
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
  onSubmit() {
    console.log(this.profileForm);
    if (this.profileForm.valid) {
      this.profileService.profileSave(this.profileForm.value)
          .subscribe((data) => {console.log(data)});
    } else {
      this.validateAllFormFields(this.profileForm); 
    }
  }
  initDocuments() {
    // initialize our documents
    return this._fb.group({
        docNationality: ['0'],
        docExpireDate: [''],
        docNumber: [''],
        docIssueDate: [''],
        docType: ['1'],
        docFirstName: [''],
        docLastName: [''],
    });
  }
  addDocument() {
      // add document to the list
      const control = <FormArray>this.profileForm.controls['documents'];
      control.push(this.initDocuments());
  }
  removeDocument(i: number) {
      // remove document from the list
      const control = <FormArray>this.profileForm.controls['documents'];
      control.removeAt(i);
  }
}
 