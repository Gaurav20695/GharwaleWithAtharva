import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isLoggingMode = false;
  subLoggingMode:Subscription;
  user: string;

  constructor(private authservice: AuthService, private router:Router ) { }

  ngOnInit(): void {
    this.subLoggingMode = this.authservice.loggingMode.subscribe(data => {
  
      this.isLoggingMode = data;
      this.user = sessionStorage.getItem('userEmail');
     console.log('++=======++=+=+=+=+=+=+');
      console.log(this.user);

      
    });

    

    // console.log('++=======++=+=+=+=+=+=+');
    //   console.log(this.user);


  }

  ngOnDestroy(){
    if(this.subLoggingMode){
      this.subLoggingMode.unsubscribe();
    }
  }

  onLogout(){
    sessionStorage.clear();
    this.isLoggingMode = false;
    this.router.navigate(['/signin']);
  }


}
