import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) {
  }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  //http://localhost:8090/hello-world/path-variable/inasdf
  executeHelloWorldServiceWithPathVariable(name) {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }

  // createBasicAuthenticationHttpHeader() {
  //   const username = 'u';
  //   const password = 'p';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //
  //   return basicAuthHeaderString;
  // }
}
