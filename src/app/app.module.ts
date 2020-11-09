import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectbeverageComponent } from './dialogue/selectbeverage/selectbeverage.component';
import { TheusualComponent } from './dialogue/theusual/theusual.component';
import { UserComponent } from './dialogue/user/user.component';

import { UserinfoService } from './userinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectbeverageComponent,
    TheusualComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
