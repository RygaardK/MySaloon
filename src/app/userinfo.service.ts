import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor() { 
    let fname = "Kristoffer "
    let lname = "Rygaard"
    let name = fname + lname;
  }
  
  getName(){
    return name;
  }
  changeName(x, y){
    fname = x;
    lname = y;

  }

  getDrink(){
    return "My Drink";
  }
  changeDrink(){

  }

}
