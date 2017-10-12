import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class ApiHttpCallerService {
  private apiBaseUrl = 'api/';

  constructor(private http: Http,
              private loginService: LoginService) { }

  public HttpGet(url: string): Promise<any> {
    return this.loginService.getAuthToken().then(
      token => {
        const headers = new Headers(
          {'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token });
        return this.HttpGetImpl.bind(this, url, headers);
      });
  }

  public HttpGetImpl(url: string, headers: any): Promise<any> {
    return this.http.get(this.apiBaseUrl + url, headers)
      .toPromise().catch(this.handleError.bind(this));
  }

  private handleError(error: any): Promise<any> {
    if (error.status === 401) {
      // Unauthorized, call the login method with hardcoded user and pass
      // TODO: this should be changed later for a complete login feature
      // this.loginService.replaceMeLogin();
      console.error('Authorization Error, check Token');
    }
    return Promise.reject(error.message || error);
  }

}
