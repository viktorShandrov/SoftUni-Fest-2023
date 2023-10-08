import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomJoinDirective } from './directives/room-join.directive';



@NgModule({
  declarations: [
    RoomJoinDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[RoomJoinDirective]
})
export class SharedModule { }
