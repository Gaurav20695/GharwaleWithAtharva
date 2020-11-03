import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(value: any, cityEntered: string ) {
    console.log(value);
    console.log(cityEntered);
    
   
    if(value.length===0){
      return value;
    }  
const resultArray=[];

for(const item of value ){
  if (item.city.toUpperCase() === cityEntered.toUpperCase())
  {
    resultArray.push(item);
  }
  
}
console.log(resultArray);
return resultArray;
}
}