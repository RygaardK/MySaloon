import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor() { }
  
  setName(fname, lname) {
    console.log(fname, lname)
    localStorage.setItem(name)
  }
  getName(){
    let name = window.localStorage;
    return name.fname,' ', name.lname;
  }
  changeName(x, y){
    let name = {
      fname: "",
      lname: ""
    };
    name.fname = x;
    name.lname = y;
    return name.fname,' ', name.lname;
  }

  setDrink() {
  
  }
  getDrink(){
    return [
      {"id": 1, "name": "Wiskey"},
      {"id": 2, "name": "Beer"},
      {"id": 3, "name": "Wine"},
      {"id": 4, "name": "Soda"},
      {"id": 5, "name": "Cola"}
    ];
  }
  changeDrink(){

  }

}
