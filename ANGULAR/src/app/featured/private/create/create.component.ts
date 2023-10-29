import { Component } from '@angular/core';
import {CreateService} from "../../services/create.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

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
    private Router:Router,
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
      form.value.type,
    ).subscribe(
      (res:any)=>{
        this.Router.navigate(["/offerDetails",res.offer._id])
        this.ToastrService.success("Successfully created", "Happy message")

      },
      (error) => {
        this.ToastrService.error(error.error.message, "Error")
      }
    )
  }
}
