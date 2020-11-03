import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignupData } from '../signup-data';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
 
export class SigninComponent implements OnInit {
  previewData : SignupData;
 
  signinForm:FormGroup;
  constructor(private authservice: AuthService,private router:Router) { }
  
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'email' :new FormControl(null, [Validators.required,Validators.email]),
      'password' :new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    
  
    console.log("=================================");
    console.log(this.signinForm.value.email);
    console.log(this.signinForm.value.password);
    
    this.authservice.login(this.signinForm.value.email, this.signinForm.value.password).subscribe(resData => {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-"+resData);
    sessionStorage.setItem('userEmail',resData.email);
    this.authservice.loggingMode.next(true);
    this.router.navigate(['/home']);

    }, error =>{
      console.log(error)
    }
    );

  }

}

