import { Http, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model';
import { Answer } from '../models/answer.model';

@Injectable()
export class UsersService {
  url = 'http://mice.local/login';
  urlReg = 'http://mice.local/signup';
  //url = 'http://ets.local/login';
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string) {
    return this.http.post(`https://ets.globalair.kz/login`, email);
     // .map((response: Response) => response.json());
      // .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  authUser(data: Object) {

      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    const params = new URLSearchParams();
    for (const key of Object.keys(data)) {
      params.append(key, data[key]);
    }
    console.log(params);
    return this.http.post(this.url, params.toString(), httpOptions);

    // return this.http.post(`https://ets.globalair.kz/login`, {email: email, password :pass}, httpOptions)
    // .map((response: Response) => response.json());
    // .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  createNewUser(data: Object) {

    const httpOptionsR = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    const params = new URLSearchParams();
    for (const key of Object.keys(data)) {
      params.append(key, data[key]);
    }
    return this.http.post(this.urlReg, params.toString(), httpOptionsR);
  }
}
