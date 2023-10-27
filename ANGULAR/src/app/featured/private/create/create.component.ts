import { Component } from '@angular/core';
import {CreateService} from "../../services/create.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private CreateService:CreateService,
    private ToastrService:ToastrService,
  ) {
  }
  submit(form:any){
    if(form.invalid) return
    this.CreateService.createOffer(
      form.value.name,
      form.value.description,
      form.value.price,
    ).subscribe(
      (res)=>{
        console.log(res)
      },
      (error) => {
        this.ToastrService.error(error.message, "Error")
      }
    )
  }
}
