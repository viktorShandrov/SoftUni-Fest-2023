import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private HttpClient: HttpClient,
    private Router: Router,
    private ToastrService: ToastrService,
  ) { }

  offer = {
    name: '',
    description: '',
    price: '',
    _id:''
  };

  createOffer(name:string,description:string,price:string){
    return this.HttpClient.post("api/items/createOffer",{name,description,price})
  }
  editOffer(offer:any){
    this.HttpClient.post("api/items/editOffer",offer).subscribe(
      (res:any)=>{
        this.Router.navigate(["/offerDetails",res.offer._id])
        this.ToastrService.success("Successfully edited", "Happy message")

      },
      (error)=>{
        this.ToastrService.error(error.message,"Error")
      }
    )
  }
}
