import {AfterViewInit, Component} from '@angular/core';
import {HttpService} from "../../../shared/services/http.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements AfterViewInit{
  businessmen!:[]
 constructor(
   private HttpService:HttpService,
   private ToastrService:ToastrService,
 ) {
 }
  ngAfterViewInit() {
   this.HttpService.getRequest("api/users/getAllBusinessman").subscribe(
     (res:any)=>{
       console.log(res)
       this.businessmen = res.users
     },
     (error)=>{
       this.ToastrService.error(error.message, "Error")

     }
   )
  }
}
