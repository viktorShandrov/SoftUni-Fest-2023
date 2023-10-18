import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Form } from '@angular/forms';
import { io } from 'socket.io-client';
import { CacheService } from '../../../shared/services/cache.service';
import { HttpService } from '../../../shared/services/http.service';
import { UserService } from '../../../shared/services/user.service';
import { ChatService } from '../../../shared/services/chat.service';
import { ToastrService } from 'ngx-toastr';
import { HtmlElementsService } from '../../../shared/services/html-elements.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  inputValue: string = '';
  emojies: string[] = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😜',
    '😝',
    '🤪',
    '🤨',
    '🧐',
    '😎',
    '🤩',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😤',
    '😢',
    '😭',
    '😰',
    '😱',
    '😨',
    '😥',
    '😓',
    '🤗',
    '🤔',
  ];
  private socket: any;
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  constructor(
    public CacheService: CacheService,
    private Renderer2: Renderer2,
    public UserService: UserService,
    private ChatService: ChatService,
    private HttpService: HttpService,
    private HtmlElementsService: HtmlElementsService,
    private ToastrService: ToastrService
  ) {}

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.CacheService.socket = this.socket;
    this.HttpService.getRequest('api/rooms/giveJoinedRooms').subscribe(
      (res: any) => {
        this.CacheService.rooms = res.rooms;
      },
      (error) => {
        this.ToastrService.error(error.error.message, 'Error');
      }
    );

    // Subscribe to events or perform other setup here
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');

      this.socket.on('error', (message: string) => {
        console.log(message);
      });
      this.socket.on('newMessage', (message: any) => {
        this.CacheService.messages.push(message);
        setTimeout(() => {
          this.ChatService.scrollToBottom();
        }, 0);
      });
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }

  onMessageSubmit(form: any) {
    if (!form.form.value.message) {
      return;
    }
    this.socket.emit('createMessage', {
      messageText: form.form.value.message,
      roomId: this.CacheService.currentRoomId,
      userId: this.UserService.getUserId(),
    });
    form.form.reset();
  }

  onEmojiAdd(emoji: any, form: any) {
    // form.form.value.message += emoji;
    this.inputValue += emoji;
  }
}
