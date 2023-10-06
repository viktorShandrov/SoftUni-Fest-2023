import { Component } from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  onSubmit(form:any){
    console.log(form.value)
  }
}
