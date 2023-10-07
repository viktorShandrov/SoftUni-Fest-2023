import {Directive, ElementRef, Renderer2} from '@angular/core';
import {CacheService} from "../services/cache.service";

@Directive({
  selector: '[appRoomJoin]'
})
export class RoomJoinDirective {

  constructor(
    private element:ElementRef,
    private Renderer2:Renderer2,
    private CacheService:CacheService,
  ) {
    this.Renderer2.listen(this.element.nativeElement,"click",()=>{
      this.CacheService.socket.emit("connectToRoom",{
        roomId:"652054e08b09208c8df493f4",
        userId:"652054d58b09208c8df493f0"
      })
      this.CacheService.socket.on("messages",(messages:any)=>{
        this.CacheService.messages = messages
      })
    })
  }

}
