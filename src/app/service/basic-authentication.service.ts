import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';

class AuthenticationBean {
  constructor(public message: string) {

  }
}

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }

  }
  //
  // executeAuthenticationService(username, password) {
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //
  //   const headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   });
  //   return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem('AUTHENTICATED_USER', username);
  //         sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //         return data;
  //       }
  //     )
  //   );
  // }

  executeJWTAuthenticationService(username, password) {

    return this.httpClient.post<any>(`${API_URL}/authenticate`, {
      username, password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

}
