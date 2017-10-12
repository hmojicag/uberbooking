import { Http, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';

@Injectable()
export class LoginService {
  private apiAuthUrl = '/api/tokenauth/login';
  private email = 'user1@something.com';
  private pass = 'user1psd';
  private headers = new Headers({'Content-Type': 'application/json'});
  private accessToken: string;

  constructor(private http: Http) { }

  /*
  * This service must be complemented with a component
  * that pops up a Login window
  * */

  public replaceMeLogin(): Promise<string> {
    console.log('Login for new Token:');
    return this.http.post(this.apiAuthUrl, JSON.stringify({Email: this.email, Password: this.pass}),
      { headers: this.headers })
      .toPromise()
      .then(res => {
        const loginRequest = res.json() as LoginRequest;
        console.log(loginRequest);
        localStorage.setItem('accessToken', loginRequest.data.accessToken)
        return loginRequest.data.accessToken;
      });
  }

  public getAuthToken(): Promise<string> {
    this.accessToken = localStorage.getItem('accessToken');
    console.log('Token in Storage:', this.accessToken);
    if (this.accessToken == null || this.accessToken === 'undefined') {
      // Check for null or undefined
      // This shit can literaly return a string 'undefined'
      console.log('Calling replaceMeLogin()');
      return this.replaceMeLogin(); // <- Change later for a complete Login solution
    }
    console.log('Returning token:', this.accessToken);
    return Promise.resolve(this.accessToken);
  }

}
