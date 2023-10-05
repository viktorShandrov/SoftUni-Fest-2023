import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appForm]',
})
export class FormDirective {
  @Input('onSubmit') onSubmit!: any;
  constructor(private element: ElementRef, private Renderer2: Renderer2) {
    this.Renderer2.listen('submit', this.element.nativeElement, this.onSubmit);
  }
}
