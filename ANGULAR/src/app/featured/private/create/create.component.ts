import { Component } from '@angular/core';
import {CreateService} from "../../services/create.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  editMode= false
  constructor(
    public CreateService:CreateService,
    private ToastrService:ToastrService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params:any) => {
    if (params.edit === 'true') {
      this.editMode = true
    }
  });
  }


  editOffer(offer:any){
    this.CreateService.editOffer(offer)
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
