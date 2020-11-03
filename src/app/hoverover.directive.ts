import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverover]'
})
export class HoveroverDirective {

  constructor( private elementref: ElementRef, private render: Renderer2){

  }
  @HostListener('mouseenter') Mousehover(eventData: Event){

    this.render.setStyle(this.elementref.nativeElement, 'transform', 'scale(1.1)');
    this.render.setStyle(this.elementref.nativeElement, 'transition', '1s ease')
  }
  @HostListener('mouseleave') Mousemove(eventData: Event){
    this.render.setStyle(this.elementref.nativeElement, 'transform', 'scale(1)');
    this.render.setStyle(this.elementref.nativeElement, 'transition', '1s ease')
  }

}
