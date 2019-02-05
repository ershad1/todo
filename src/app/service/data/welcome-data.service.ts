import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return this.httpClient.get<HelloWorldBean>('http://localhost:8090/hello-world-bean');
  }

  //http://localhost:8090/hello-world/path-variable/inasdf
  executeHelloWorldServiceWithPathVariable(name) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8090/hello-world/path-variable/${name}`);
  }
}
