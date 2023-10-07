import {Component, OnInit} from '@angular/core';
import {Form} from "@angular/forms";
import {io} from "socket.io-client";
import {CacheService} from "../../shared/services/cache.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  private socket:any
  constructor(
    public CacheService:CacheService
  ) {
  }

  onSubmit(form:any){
    console.log(form.value)
  }
  ngOnInit() {
    this.socket = io("http://localhost:3000")
    this.CacheService.socket = this.socket
    // Subscribe to events or perform other setup here
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      // this.socket.emit("connectToRoom",{
      //   roomId:"652054e08b09208c8df493f4",
      //   userId:"652054d58b09208c8df493f0"
      // })
      // this.socket.emit("createMessage", {messageText: "ddsd",
      //   roomId:"652054e08b09208c8df493f4",
      //   userId:"652054d58b09208c8df493f0"})

      this.socket.on("error",(message:string)=>{
        console.log(message)
      })
      this.socket.on("newMessage",(d:any)=>{
        console.log(d)
      })
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }



}
