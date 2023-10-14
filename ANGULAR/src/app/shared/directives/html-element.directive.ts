import { Directive, ElementRef } from '@angular/core';
import { HtmlElementsService } from '../services/html-elements.service';

@Directive({
  selector: '[appHtmlElement]',
})
export class HtmlElementDirective {
  constructor(
    private element: ElementRef,
    private HtmlElementsService: HtmlElementsService
  ) {
    const name = this.element.nativeElement.classList[0];
    this.HtmlElementsService.elements[name] = this.element.nativeElement;
  }
}
