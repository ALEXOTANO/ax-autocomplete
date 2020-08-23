import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AxAutocompleteModule } from 'ax-autocomplete'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AxAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
