import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

 interface SignupData {
  firstname:string;
  lastname:string;
  city:string;
  address:string;
  pincode:string;
  gender:string;
  email:string;

}

@Injectable({
  providedIn: 'root'
})



export class UserService {
userData: SignupData;
  constructor(private http: HttpClient) { }

  setNewUser(userData: SignupData){
  return  this.http.post('https://gharwale-1db24.firebaseio.com/userData.json', userData);
  }
getUser(){
 return this.http.get('https://gharwale-1db24.firebaseio.com/userData.json');
}

}
