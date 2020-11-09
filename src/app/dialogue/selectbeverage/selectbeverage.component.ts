import { Component, OnInit } from '@angular/core';
import { UserstorageinfoService } from '../../userstorageinfo.service';

@Component({
  selector: 'app-selectbeverage',
  templateUrl: './selectbeverage.component.html',
  styleUrls: ['./selectbeverage.component.css']
})
export class SelectbeverageComponent implements OnInit {

  public drinks = [];

  constructor(private _UserstorageinfoService: UserstorageinfoService ) { }

  ngOnInit(): void {
    this.drinks = this._UserstorageinfoService.getDrink();
  }

}
