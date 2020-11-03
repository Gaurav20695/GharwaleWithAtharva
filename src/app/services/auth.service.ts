import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface AuthResponseData{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:	boolean;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggingMode = false;
  loggingMode = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  signUp(email:string, password:string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCncVhlBSlbylSbei0-qP7SAxMVBlVo_qU',
     {
       email: email,
       password: password,
       returnSecureToken: true
     }
     );
  }
  login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCncVhlBSlbylSbei0-qP7SAxMVBlVo_qU',
    {
      email: email,
       password: password,
       returnSecureToken: true
    });
  }
}
