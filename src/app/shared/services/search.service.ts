import {NgModule, Component, Injectable} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { SearchItem } from '../models/searchItem.model';
import { DatePipe } from '@angular/common';
@Injectable()
export class SearchService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';
  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    'dd/MM/yyyy hh:mm:ss',
    'dd-MM-yyyy',
    'dd-MM-yyyy HH:mm:ss',
    'MM/dd/yyyy',
    'MM/dd/yyyy hh:mm:ss',
    'yyyy/MM/dd',
    'yyyy/MM/dd HH:mm:ss',
    'dd/MM/yy',
    'dd/MM/yy hh:mm:ss',
    ];

  //apiRoot: string = 'https://itunes.apple.com/search';
  // apiRoot: string = 'https://maps.googleapis.com/maps/api/place/autocomplete/';

  constructor(private http: Http) { }
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  searchEntries(term) {
    return this.http.get(`http://localhost:3000/city?q=${term}`)
      .map((response: Response) => response.json());
    // return this.http
    //   .get(this.baseUrl + this.queryUrl + term)
    //   .map(res => res.json());
  }
  searchTicket(form){
    return this.http.get(`http://localhost:3000/ResultAir?`)
      .map((response: Response) => response.json());
  }
    //return this.http.get(`http://localhost:3000/ticket?departurePoint=${form.selectedDeparture}&arrivalPoint=${form.selectedArrivals}&departureDate=${form.dateDeparture}`)
}
