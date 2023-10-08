import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Form } from '@angular/forms';
import { io } from 'socket.io-client';
import { CacheService } from '../../shared/services/cache.service';
import {HttpService} from "../../shared/services/http.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  private socket: any;
  @ViewChild("messagesContainer") messagesContainer!:ElementRef
  constructor(
    public CacheService: CacheService,
    public UserService: UserService,
    private HttpService: HttpService,

    ) {}


  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.CacheService.socket = this.socket;

    this.HttpService.getRequest("api/rooms/giveJoinedRooms").subscribe(
      (res:any)=>{
        this.CacheService.rooms = res.rooms
      },
      error=>{
        console.log(error)
      }
    )






    // Subscribe to events or perform other setup here
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');

      this.socket.on('error', (message: string) => {
        console.log(message);
      });
      this.socket.on('newMessage', (message: any) => {
        this.CacheService.messages.push(message)
        setTimeout(()=>{
          this.scrollToBottom()
        },0)
      });
    });


    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }
  scrollToBottom(){
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight
  }

  onMessageSubmit(form:any){
    const value = form.form.value.message
    form.form.reset()
    this.socket.emit('createMessage', {
      messageText: value,
      roomId: this.CacheService.currentRoomId,
      userId: this.UserService.getUserId(),
    });
  }
}
