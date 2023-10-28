import { Component } from '@angular/core';
import {RouterService} from "./core/services/router.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private RouterService:RouterService
  ) {
  this.RouterService.log()
  }
  title = 'ANGULAR';
}
