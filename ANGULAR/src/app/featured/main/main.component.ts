import {Component, OnInit} from '@angular/core';
import {Form} from "@angular/forms";
import {io} from "socket.io-client";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  private socket:any
  constructor() {
  }

  onSubmit(form:any){
    console.log(form.value)
  }
  ngOnInit() {
    this.socket = io("http://localhost:3000")
    // Subscribe to events or perform other setup here
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }



}
