import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "../../services/details.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {



constructor(
  private route:ActivatedRoute,
  private DetailsService:DetailsService,
  private ToastrService:ToastrService,
) {
}
  profile!:any

  picPaths=[
    "/assets/service.png",
    "./assets/service1.png",
    "./assets/service2.png",
    "./assets/service3.png",
    "./assets/service4.png",
    "./assets/service5.png",
  ]

  randomNum(){
    return Math.floor(Math.random() * 6)
  }
  ngOnInit() {


    this.route.params.subscribe((params:any) => {
      const id = params['id']; // 'id' should match the parameter name in your route configuration
      this.DetailsService.getProfile(id).subscribe(
        (res:any)=>{
          this.profile = res
          if(this.profile.userType =="Client"){

            this.DetailsService.getPurchasedOffers(this.profile._id).subscribe(
              (res)=>{
                this.profile.offers = res
              },
              (error)=>{
                this.ToastrService.error(error.error.message,"Error")

              }
            )
          }
        },
        (error)=>{
          this.ToastrService.error(error.error.message,"Error")
        }
      )
    });
  }
  businessman = {
    company: 'alibaba',
    name: 'Viktor Pantov',
    offers: [
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
      {
        name: 'the coolest offer',
        description: 'this is just an offer about the SoftUni Fest.',
        price: 15,
      },
    ],
  };
}
