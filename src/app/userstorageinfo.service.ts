import { ngModuleJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Beverage } from './beverage';


@Injectable({
  providedIn: 'root'
})
export class UserstorageinfoService {
  
  data: Beverage[] = [
    {name: "Wiskey"},
    {name: "Beer"},
    {name: "Wine"},
    {name: "Soda"},
    {name: "Cola"}
  ]

  getDrink(): Beverage[] {
    return this.data;
  }

  logName(fname, lname) {
    console.log('(SERVICE)Förnamn: ', fname, ', Efternamn: ', lname)
    localStorage.setItem('fornamn', fname);
    localStorage.setItem('efternamn', lname);
  }

  checkName(){
    let fname = localStorage.getItem('fornamn');
    let ename = localStorage.getItem('efternamn');
    console.log('CheckName: ', fname+' '+ename)
    return(fname+' '+ename)
  }

  checkDrink(){
    let drink = localStorage.getItem('drink');
    console.log('CheckDrink: ', drink)
    return(drink)
  }
  
  clearALL() {
    console.log('(SERVICE) LS is empty!');
    localStorage.clear();
    location.reload();
  }
  

  drinkSelected(drink) {
    console.log('(SERVICE)Drink: ', drink);
    localStorage.setItem('drink', drink)
  }

  constructor() { }
 


}
