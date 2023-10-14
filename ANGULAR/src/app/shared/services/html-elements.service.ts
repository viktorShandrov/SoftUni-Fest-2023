import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlElementsService {
  elements: any = {};
  constructor() {}

  saveElement(element: ElementRef, elementName: string) {
    this.elements[elementName] = element;
  }
}
