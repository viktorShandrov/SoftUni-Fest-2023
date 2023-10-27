import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private Http:HttpClient,

  ) { }
  getOffer(id:string){
    return this.Http.get(`api/items/offer/${id}`)
  }
}
