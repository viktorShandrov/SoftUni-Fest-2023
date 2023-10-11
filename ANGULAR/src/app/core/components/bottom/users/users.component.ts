import {AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {CacheService} from "../../../../shared/services/cache.service";
import {HtmlElementsService} from "../../../../shared/services/html-elements.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit{
  @ViewChildren("roomElement") roomElements!:QueryList<ElementRef>
  constructor(
    private elementRef: ElementRef,
    public CacheService: CacheService,
    private HtmlElementsService: HtmlElementsService,
    private renderer2: Renderer2) {
    renderer2.setStyle(elementRef.nativeElement, 'flex', "1");
    renderer2.setStyle(elementRef.nativeElement, 'height', "100%");
  }
  ngAfterViewInit() {
    this.HtmlElementsService.elements.roomElementsQL = this.roomElements

  }
}
