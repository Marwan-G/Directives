import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicHighlightDirective} from './bacichighlight/basic-highlight.directive';
import { SecondHighlightDirective } from './second-highlight/second-highlight.directive';
import { ThirdHighlightDirective } from './third-highlight/third-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    SecondHighlightDirective,
    ThirdHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
