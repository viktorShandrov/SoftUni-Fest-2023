import { Component } from '@angular/core';
import {Form} from "@angular/forms";
import {io} from "socket.io-client";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor() {
    const socket = io("http://localhost:3000")
  }

  onSubmit(form:any){
    console.log(form.value)
  }
}
