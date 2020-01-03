import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  constructor( private http: HttpClient ) { }

  
  configUrl = 'assets/users.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }


  auth(){

  }
}
