import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomJoinDirective } from './directives/room-join.directive';
import { HtmlElementDirective } from './directives/html-element.directive';



@NgModule({
  declarations: [
    RoomJoinDirective,
    HtmlElementDirective,
  ],
  imports: [
    CommonModule
  ],
    exports: [RoomJoinDirective, HtmlElementDirective]
})
export class SharedModule { }
