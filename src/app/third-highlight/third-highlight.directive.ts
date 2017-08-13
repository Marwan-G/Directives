import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appThirdHighlight]'
})
  export class ThirdHighlightDirective {
    @HostBinding('style.backgroundColor')  backgroundcolor: string = 'transparent';
    @HostListener('mouseover') mouseover(event: Event) {
        this.backgroundcolor = ' green  ';
    }
    @HostListener('mouseout') mouseout(event: Event) {
        this.backgroundcolor = ' transparent  ';
    }
      constructor() { }
  }
