import { Injectable } from '@angular/core';
import {HtmlElementsService} from "./html-elements.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private HtmlElementsService:HtmlElementsService
  ) { }

  scrollToBottom(){
    const element =this.HtmlElementsService.elements.messagesContainer
    element.scrollTop = element.scrollHeight
  }

}
