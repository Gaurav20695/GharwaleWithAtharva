import { Injectable } from '@angular/core';
import { SignupData } from '../signup-data';


@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  previewData : SignupData;
  constructor() { }

  setPreviewData(data : SignupData){
    this.previewData = data;
    console.log("-=-=-=-=-");
    console.log(this.previewData);
  }

  getPreviewData(){
    return this.previewData;
  }
}
