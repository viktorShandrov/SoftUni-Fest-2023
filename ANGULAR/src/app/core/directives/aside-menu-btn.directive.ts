import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAsideMenuBtn]'
})
export class AsideMenuBtnDirective {
  @Input("menuToShow") menuToShow!:ElementRef
  constructor(
    private element:ElementRef,
    private Renderer2:Renderer2,
  ) {
  }

    @HostListener("click")
    onClick(){
      this.Renderer2.setStyle(this.menuToShow.nativeElement,"display","flex")
    }

}
