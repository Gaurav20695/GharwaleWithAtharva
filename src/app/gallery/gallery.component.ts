import { Component, OnInit } from '@angular/core';
import { GalleryData } from '../gallery-data'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cityEntered:string;
gallery : GalleryData[] = [
  {city : 'Amravati', imagePath :'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg', address: 'ambapeth Amravati-444601'},
  {city : 'Amravati', imagePath :'https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_1280.jpg', address: 'ambapeth Amravati-444601'},
 
  {city : 'Amravati', imagePath :'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg', address: 'ambapeth Amravati-444601'},
  
  {city : 'Akola', imagePath :'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg', address: 'ambapeth Amravati-444601'},
  {city : 'Akola', imagePath :'https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_1280.jpg', address: 'ambapeth Amravati-444601'},
 
  {city : 'Paratwada', imagePath :'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg', address: 'ambapeth Amravati-444601'}

];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSearchClick(){
    
  }

}
