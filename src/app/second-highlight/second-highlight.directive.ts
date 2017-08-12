import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSecondHighlight]'
})
export class SecondHighlightDirective implements OnInit {

  constructor(private Refel: ElementRef, private render: Renderer2) { }
  ngOnInit() {
          this.render.setStyle(this.Refel.nativeElement, 'background-color', 'blue');
  }
}
