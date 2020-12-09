import { Component, OnInit } from '@angular/core';
import { UserstorageinfoService } from './../userstorageinfo.service'

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  public isDisabled = true;
  public isLoggedIn = false;
  public hasError = false;
  public isSpecial = false;
  public diaState = "";
  public myDrink = "";
  public name = "";
  public displayGDPR = false;
  public displayFormInput = false;
  public displayTheUsual = false;
  public displaySelectBeverage = false;
  public theMessage = "";
  public drinkMessage = "";


  constructor(private _UserstorageinfoService: UserstorageinfoService ) { }

  logName(fname, lname){
    console.log('(DIALOGUE) logName: ', fname, lname)
    this.theMessage = "Alright " + fname + " " + lname + ", what can I do you for?";
    this.name = fname + " " + lname;
    this._UserstorageinfoService.logName(fname, lname);
    this.displaySelectBeverage = true;
    this.displayFormInput = false;
    this.displayGDPR = true;
  }  

  clearAll(){
    console.log('(DIALOGUE) clearAll: LocalStorage is cleared!');
    this._UserstorageinfoService.clearALL();
    this.ngOnInit()
  }

  whatToDrink($event) {
    console.log('(DIALOGUE) whatToDrink: ', $event)
    this.drinkMessage = "One "+ $event + ", coming right up!"
    this.myDrink = $event
    this._UserstorageinfoService.drinkSelected($event)
  }


  checkLocalStorage() {
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log('Key: ' + key, 'Value: ' + value);
    }
  }

  ngOnInit(): void {
   this.name = this._UserstorageinfoService.checkName();
   this.theMessage = this._UserstorageinfoService.getMessage();
   this.displayFormInput = this._UserstorageinfoService.getDispFI();
   this.displayGDPR = this._UserstorageinfoService.getDispGDPR();
   this.displayTheUsual = this._UserstorageinfoService.getDispTU();
   this.displaySelectBeverage = this._UserstorageinfoService.getDispSB();
  }

}
