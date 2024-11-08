import {ApplicationConfig, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations:[],
  providers:[],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
