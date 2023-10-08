import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { io } from 'socket.io-client';
import { CacheService } from '../../shared/services/cache.service';
import {HttpService} from "../../shared/services/http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  private socket: any;
  constructor(
    public CacheService: CacheService,
    private HttpService: HttpService,

    ) {}

  onSubmit(form: any) {
    console.log(form.value);
  }
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
      this.socket.emit('connectToRoom', {
        roomId: '65215f214903201a01353d04',
        userId: '652160174903201a01353d28',
      });
      this.socket.emit('createMessage', {
        messageText: 'ddsd',
        roomId: '65215f214903201a01353d04',
        userId: '652160174903201a01353d28',
      });

      this.socket.on('error', (message: string) => {
        console.log(message);
      });
      this.socket.on('newMessage', (d: any) => {
        console.log(d);
      });
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }
}
