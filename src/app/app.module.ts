import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { FormComponent } from './parent-form/form/form.component';
import { ListComponent } from './parent-form/list/list.component';
import {FormsModule} from "@angular/forms";




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,ParentFormComponent,FormComponent,ListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
