import {AfterViewInit, Component, OnInit} from '@angular/core';
import {constants} from "../../../shared/constants"
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "../../services/details.service";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private DetailsService:DetailsService,
    public UserService:UserService,
    private ToastrService:ToastrService,


  ) {
  }
  currentOffer:any ={}
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
