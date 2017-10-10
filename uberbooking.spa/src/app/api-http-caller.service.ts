import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiHttpCallerService {
  private apiBaseUrl = 'api/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public HttpGet(url: string): Promise<any> {
    this.http.get(this.apiBaseUrl + url, this.headers)
      .toPromise().catch(this.handleError);
    return ;
  }

  private handleError(error: any): Promise<any> {
    if (error.status === 401) {
      // Unauthorized, call the login method with hardcoded user and pass
      // TODO: this should be changed later for a complete login feature

    }
    return Promise.reject(error.message || error);
  }


  private doLogin(): void {

  }

}
