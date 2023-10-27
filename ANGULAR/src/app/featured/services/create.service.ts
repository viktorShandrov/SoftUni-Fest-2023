import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  createOffer(name:string,description:string,price:string){
    return this.HttpClient.post("api/items/createOffer",{name,description,price})
  }
}
