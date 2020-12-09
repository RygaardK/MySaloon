import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserstorageinfoService } from '../../userstorageinfo.service';


@Component({
  selector: 'app-selectbeverage',
  templateUrl: './selectbeverage.component.html',
  styleUrls: ['./selectbeverage.component.css'],
})

export class SelectbeverageComponent implements OnInit {

  public drinks = [];


 
  @Output() drinkaDrink = new EventEmitter<string>();


  constructor(private _UserstorageinfoService: UserstorageinfoService ) { }

  ngOnInit(): void {
    this.drinks = this._UserstorageinfoService.getDrink();

  }

  drinkSelected($event) {
    console.log($event)
    this.drinkaDrink.emit($event);
  }
}    