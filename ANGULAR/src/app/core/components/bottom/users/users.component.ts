import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    renderer2.setStyle(elementRef.nativeElement, 'flex', 1);
  }
}
