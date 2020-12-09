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

  public displayTheUsual = false;
  public displaySelectBeverage = false;
  public displayFormInput = false;
  public displayGDPR = false
  public message = "";


  getDrink(): Beverage[] {
    return this.data;
  }

  getMessage() {
    return this.message;
  }

  getDispTU() {
    return this.displayTheUsual;
  }
  getDispSB() {
    return this.displaySelectBeverage;
  }
  getDispFI() {
    return this.displayFormInput;
  }
  getDispGDPR() {
    return this.displayGDPR;
  }


  logName(fname, lname) {
    console.log('(SERVICE)Förnamn: ', fname, ', Efternamn: ', lname)
    localStorage.setItem('fornamn', fname);
    localStorage.setItem('efternamn', lname);
    this.message = "Alright " + fname + " " + lname + ", what can I do you for?";
    this.displayFormInput = false;
    this.displayGDPR = true;
    this.displaySelectBeverage = true;
  }

  checkName(){
    let fname = localStorage.getItem('fornamn');
    let lname = localStorage.getItem('efternamn');
    console.log('fname: ', fname)
    console.log('fname: ', lname)
    if ( fname === null && lname === null ) {
      this.displaySelectBeverage = false;
      this.displayGDPR = false;
      this.displayFormInput = true;
      this.message = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
      console.log('Name is NOT set, GDPR & Beverage is set to FALSE ')
    } else {
      if (this.checkDrink() === null) {
        this.message = "Hello again " + fname + " " + lname + " Please choose some from the Meny."
      } else {
        this.message = "Hello again " + fname + " " + lname + ", The usual?"
      }
      this.displayFormInput = false;
      this.displaySelectBeverage = true;
      this.displayGDPR = true;
      console.log('Name is set, GDPR & Beverage is set to TRUE ')
      
    }
    return(fname+' '+lname)
  }

  checkDrink(){
    let drink = localStorage.getItem('drink');
    console.log('CheckDrink: ', drink)
    if (drink !== null) {
      this.displayTheUsual = true;
      console.log('Name is set, displayTheUsual is set to TRUE ')
    } else {
      this.displayTheUsual = false;
      console.log('Name is NOT set, displayTheUsual is set to FALSE ')
    }
    return(drink)
  }
  
  clearALL() {
    console.log('(SERVICE) LS is empty!');
    localStorage.clear();
    location.reload();
  }
  

  drinkSelected(drink) {
    console.log('(SERVICE) Drink: ', drink);
    localStorage.setItem('drink', drink)
  }

  constructor() { }
 


}
