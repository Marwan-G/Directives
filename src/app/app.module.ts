import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicHighlightDirective} from './bacichighlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
