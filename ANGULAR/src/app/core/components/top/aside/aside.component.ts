import { Component } from '@angular/core';
import {HtmlElementsService} from "../../../../shared/services/html-elements.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  constructor(
    public HtmlElementsService: HtmlElementsService
  ) {
  }

}
