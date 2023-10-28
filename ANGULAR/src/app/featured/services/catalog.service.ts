import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  businessmen!:{companyName:string,_id:string}[]
  businessmenSorted!:{companyName:string,_id:string}[]

  constructor() { }

  sortBusinessman(param:string){
    this.businessmenSorted = this.businessmen.filter((el)=>el.companyName.includes(param))
  }
  showAllResults(){
    this.businessmenSorted = this.businessmen
  }


}
