import { Injectable } from '@angular/core';
import {  CanActivate, CanDeactivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoutGurdService implements CanActivate  {
  user: string = null;

  constructor(private router: Router) {
    this.user = sessionStorage.getItem('userEmail');
   }
 
  canActivate(){
      if(this.user==null){
        alert('Please Login');
this.router.navigate(['/signin']);
        return false;
          }
          else{
          return true;
        }
       
  }
 
   
}
