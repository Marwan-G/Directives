import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appThirdHighlight]'
})
  export class ThirdHighlightDirective {
    @Input() defaultcolor: string = ' transparent';
    @Input() highlightcolor: string = ' blue';
    @HostBinding('style.backgroundColor')  backgroundcolor = this.defaultcolor;

    @HostListener('mouseover') mouseover(event: Event) {
        this.backgroundcolor = this.highlightcolor;
    }
    @HostListener('mouseout') mouseout(event: Event) {
        this.backgroundcolor = this.defaultcolor;
    }
      constructor() { }
  }
