import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
	headers: new HttpHeaders({
	'Content-Type':  'application/x-www-form-urlencoded',
	'X-Requested-With': 'XMLHttpRequest'
	})
};
@Injectable()
export class ProfileService {
	url = 'http://mice.local/profile';
	constructor(private http: HttpClient) {}

	profileSave(data: Object) {
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
}
