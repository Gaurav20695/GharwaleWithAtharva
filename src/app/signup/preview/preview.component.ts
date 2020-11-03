import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';


import { PreviewService } from 'src/app/services/preview.service';
import { UserService } from 'src/app/services/user.service';
import { SignupData } from 'src/app/signup-data';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit{

  previewData : SignupData;
  user: any;


  constructor(private preview : PreviewService,
    private authservice: AuthService,
    private userservice: UserService,
   ) { }

  ngOnInit(): void {
    this.previewData = this.preview.getPreviewData();
    console.log("we are in preview");
    console.log(this.previewData);
  }
  onSubmit(){
    console.log(this.previewData.email);
    console.log(this.previewData.password);
    const email= this.previewData.email;
    const password= this.previewData.password;

    this.authservice.signUp(email, password).subscribe(resData => {
console.log(resData);

    },error =>{
      console.log(error);
    }
    );
  
  }
 
  

}
