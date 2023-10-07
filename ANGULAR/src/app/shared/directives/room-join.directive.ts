import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { CacheService } from '../services/cache.service';

@Directive({
  selector: '[appRoomJoin]',
})
export class RoomJoinDirective {
  constructor(
    private element: ElementRef,
    private Renderer2: Renderer2,
    private CacheService: CacheService
  ) {
    this.Renderer2.listen(this.element.nativeElement, 'click', () => {
      this.CacheService.socket.emit('connectToRoom', {
        roomId: '65215f214903201a01353d04',
        userId: '652160174903201a01353d28',
      });
      this.CacheService.socket.on('messages', (messages: any) => {
        this.CacheService.messages = messages;
      });
    });
  }
}
