import {AfterViewInit, Component, OnInit} from '@angular/core';
import {constants} from "../../../shared/constants"
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "../../services/details.service";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../shared/services/user.service";
import {RouterService} from "../../../core/services/router.service";
import {CreateService} from "../../services/create.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private Router:Router,
    private DetailsService:DetailsService,
    public UserService:UserService,
    private ToastrService:ToastrService,
    private CreateService:CreateService,
    private RouterService:RouterService,


  ) {
  }
  currentOffer:any ={}

  redirectToEdit(){
    this.CreateService.offer = this.currentOffer
    this.Router.navigate(['/createOffer'], { queryParams: { edit: 'true' } });
  }
  delete(id:string){
    this.DetailsService.delete(id).subscribe(
      (res)=>{
        this.ToastrService.success("Successfully deleted","Happy message")
        this.Router.navigate(["/profile"])
      },
      (error)=>{
        this.ToastrService.error(error.message,"Error")
      }
    )
  }
  ngOnInit() {


    this.route.params.subscribe((params:any) => {
      const id = params['id']; // 'id' should match the parameter name in your route configuration
      this.DetailsService.getOffer(id).subscribe(
        (res:any)=>{
          this.currentOffer = res.offer
        },
        (error)=>{
          this.ToastrService.error(error.message,"Error")
        }
      )
    });
  }

}
