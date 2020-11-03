import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userservice: UserService){}

ngOnInit(){
  console.log('===========================================+');
     this.userservice.getUser().subscribe(response => {
      console.log('===========================================+');
      console.log(response);
    });
  
}

}
