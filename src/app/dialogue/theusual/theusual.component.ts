import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserstorageinfoService } from '../../userstorageinfo.service';

@Component({
  selector: 'app-theusual',
  templateUrl: './theusual.component.html',
  styleUrls: ['./theusual.component.css']
})
export class TheusualComponent implements OnInit {

  public sameDrink = "";
  public name = "";
  @Input() thedrink: string;
  @Output() drinkaDrink = new EventEmitter<string>();

  constructor(private _UserstorageinfoService: UserstorageinfoService ) { }

  sameSame() {
    this.drinkaDrink.emit(this.sameDrink);
  }

  ngOnInit(): void {
    this.sameDrink = this._UserstorageinfoService.checkDrink();
    //console.log(this.sameDrink)
    this.name = this._UserstorageinfoService.checkName();
    //console.log(this.name)
  }

}
