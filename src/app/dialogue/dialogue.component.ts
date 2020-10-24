import { Component, OnInit } from '@angular/core';

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
  public name = "Kristoffer R";
  public messageClasses = {
    "text-isDisabled": !this.isDisabled,
    "text-isLoggedIn": !this.isLoggedIn,
    "text-hasError": !this.hasError,
    "text-isSpecial": !this.isSpecial,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
