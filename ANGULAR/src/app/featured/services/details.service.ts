import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private Http:HttpClient,

  ) { }

  delete(offerId:string){
    return this.Http.post(`api/items/deleteOffer`,{offerId})
  }
  getOffer(id:string){
    return this.Http.get(`api/items/offer/${id}`)
  }


  getProfile(id:string){
    return this.Http.get(`api/users/userProfileInfo/${id}`)
  }
  getPurchasedOffers(userId:string){
    return this.Http.get(`api/users/getPurchasedOffers/${userId}`)
  }
}
