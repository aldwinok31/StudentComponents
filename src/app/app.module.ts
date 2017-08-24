import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { InputComponent } from './input/input.component';
import { PrintComponent } from './print/print.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PrintComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
