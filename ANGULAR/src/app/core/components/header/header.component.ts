import { Component } from '@angular/core';
import {CatalogService} from "../../../featured/services/catalog.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public CatalogService:CatalogService
  ) {
  }
}
