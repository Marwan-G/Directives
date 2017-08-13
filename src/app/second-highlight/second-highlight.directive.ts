import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSecondHighlight]'
})
export class SecondHighlightDirective implements OnInit {

  constructor(private Refel: ElementRef, private render: Renderer2) { }
  ngOnInit() {
  }
  @HostListener('mouseover') mouseover(eventData: Event){
    this.render.setStyle(this.Refel.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseout') mouseout(eventData: Event){
    this.render.setStyle(this.Refel.nativeElement, 'background-color', 'blue');
  }
}
