import { Http, Headers } from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private apiAuthUrl = '/api/tokenauth/login';

  constructor(private http: Http) { }

  

}
