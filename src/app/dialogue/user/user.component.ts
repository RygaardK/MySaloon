import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  public fname = "Kristoffer"
  public lname = "Rygaard"

  constructor() { }

  ngOnInit(): void {
  }
  
  // function userName(fname,lname) {
  //   default: "Howdy, stranger. Haven't seen your face around here before. What's your name?"
  //   return "Alright " + lname + ", what can I do you for?"
  // }
}
  