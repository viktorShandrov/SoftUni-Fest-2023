import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormElement]',
})
export class FormDirective {
  @Input('ivan') submission: any ;

  constructor(private element: ElementRef, private Renderer2: Renderer2) {
    this.Renderer2.listen(this.element.nativeElement, 'submit', this.submission);
  }
}
