import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { CacheService } from '../services/cache.service';
import {UserService} from "../services/user.service";
import {ChatService} from "../services/chat.service";

@Directive({
  selector: '[appRoomJoin]',
})
export class RoomJoinDirective {
  constructor(
    private element: ElementRef,
    private Renderer2: Renderer2,
    private UserService: UserService,
    private ChatService: ChatService,
    private CacheService: CacheService
  ) {
    this.Renderer2.listen(this.element.nativeElement, 'click', () => {
      this.connectToRoom()
    });
  }
    connectToRoom(){
      const roomId = this.element.nativeElement.getAttribute("roomid")
      this.CacheService.currentRoomEl = this.element.nativeElement
      this.CacheService.currentRoomId = roomId

      this.CacheService.socket.emit('connectToRoom', {
        roomId,
        userId: this.UserService.getUserId(),
      });
      this.CacheService.socket.on('messages', (messages: any) => {
        this.CacheService.messages = messages;
        setTimeout(()=>{
          this.ChatService.scrollToBottom()
        },0)
      });
    }
}
