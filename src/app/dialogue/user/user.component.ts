import { Component, OnInit } from '@angular/core';
import { UserstorageinfoService } from '../../userstorageinfo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public name = {}
  constructor(private _UserstorageinfoService: UserstorageinfoService ) { }

  ngOnInit(): void {
  }
  
  logName(fname, lname) {
    this._UserstorageinfoService.setName(fname, lname);
  }
 
  // function userName(fname,lname) {
  //   default: "Howdy, stranger. Haven't seen your face around here before. What's your name?"
  //   return "Alright " + lname + ", what can I do you for?"
  // }
}