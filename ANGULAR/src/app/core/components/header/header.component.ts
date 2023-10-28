import { Component } from '@angular/core';
import { CatalogService } from '../../../featured/services/catalog.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public CatalogService: CatalogService,
    public UserService: UserService
  ) {}

  menu: boolean = false;

  changeMenu() {
    this.menu = !this.menu;
  }
}
