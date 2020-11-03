import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../services/can-deactivate.service';
import { CustomValidationService } from '../services/custom-validation.service';
import { PreviewService } from '../services/preview.service';
import { SignupData } from '../signup-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, CanComponentDeactivate {
  

  signupData: SignupData;
  signupForm: FormGroup;
  isFormFilled : boolean = false;

  constructor(private router : Router, private preview : PreviewService, private customValidationservice: CustomValidationService, private fb:FormBuilder) { }
  

  ngOnInit(): void {


  this.signupForm = this.fb.group({
    'firstname': new FormControl(null, Validators.required),
    'lastname': new FormControl(null, Validators.required),
    'city': new FormControl(null, Validators.required),
    'address': new FormControl(null, Validators.required),
    'pincode': new FormControl(null, Validators.required),
    'gender': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required,Validators.email]),
    'password': new FormControl(null, Validators.required),
    'confpassword': new FormControl(null, Validators.required)
  },
  {
    validator:this.customValidationservice.passwordMatchValidator("password", "confpassword")
  })
}

  onNext(){
    console.log("we are in the next");
    this.isFormFilled = true;
    console.log(this.signupForm);
    this.signupData = this.signupForm.value;    
    this.preview.setPreviewData(this.signupData);
    this.router.navigate(['/preview']);
  }
  onReset(){
    this.signupForm.reset();
  }
canDeactivate() {
  console.log("we are in the can deactivate");

   console.log('++========================');
    if (!this.isFormFilled) {
    
      if(confirm("You have unsaved changes! If you leave, your changes will be lost.")){
        return true;
  }else{
   return false;   
  
  }
    } 
    return true;
}
}
