import {Injectable, Renderer2} from '@angular/core';
import { HtmlElementsService } from './html-elements.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private HtmlElementsService: HtmlElementsService,

    ) {}

  scrollToBottom() {
    const element = this.HtmlElementsService.elements.messagesContainer;
    element.scrollTop = element.scrollHeight;
  }
  hideChatSection(Renderer2:Renderer2){
    Renderer2.setStyle(this.HtmlElementsService.elements.chatSection,"display","none")
  }
  showChatSection(Renderer2:Renderer2){
    Renderer2.setStyle(this.HtmlElementsService.elements.chatSection,"display","flex")
  }
  showEmojiMenu(Renderer2:Renderer2){
    Renderer2.setStyle(this.HtmlElementsService.elements.emojies,"display","flex")
  }
  hideEmojiMenu(Renderer2:Renderer2){
    Renderer2.setStyle(this.HtmlElementsService.elements.emojies,"display","none")
  }
  toggleEmojiMenu(isVisible:boolean,Renderer2:Renderer2){
    if(isVisible) {
      this.showEmojiMenu(Renderer2)
    }else{
      this.hideEmojiMenu(Renderer2)
    }

  }

}
