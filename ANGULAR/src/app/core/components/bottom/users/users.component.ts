import { Component, ElementRef, Renderer2 } from '@angular/core';
import {CacheService} from "../../../../shared/services/cache.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(
    private elementRef: ElementRef,
    public CacheService: CacheService,
    private renderer2: Renderer2) {
    renderer2.setStyle(elementRef.nativeElement, 'flex', "1");
    renderer2.setStyle(elementRef.nativeElement, 'height', "100%");
  }
}
