import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {HtmlElementsService} from "../../shared/services/html-elements.service";

@Directive({
  selector: '[appAsideMenuBtn]'
})
export class AsideMenuBtnDirective {
  @Input("menuToShow") menuToShow!:ElementRef
  constructor(
    private element:ElementRef,
    private HtmlElementsService:HtmlElementsService,
    private Renderer2:Renderer2,
  ) {
  }

    @HostListener("click")
    onClick(){
      this.Renderer2.setStyle(this.HtmlElementsService.elements['offcanvas'],"display","none")
      
      this.Renderer2.setStyle(this.menuToShow.nativeElement,"display","flex")
    }

}
