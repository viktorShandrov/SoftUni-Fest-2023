import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {HtmlElementsService} from "../../../../shared/services/html-elements.service";
import {RoomsService} from "../../../services/rooms.service";
import {subscribeOn} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {CacheService} from "../../../../shared/services/cache.service";

@Component({
  selector: 'app-aside-join-room-menu',
  templateUrl: './aside-join-room-menu.component.html',
  styleUrls: ['./aside-join-room-menu.component.css']
})
export class AsideJoinRoomMenuComponent implements OnInit,AfterViewInit{
  constructor(
    private HtmlElementsService:HtmlElementsService,
    private element:ElementRef,
    private Renderer2:Renderer2,
    private RoomsService:RoomsService,
    private CacheService:CacheService,
    private ToastrService:ToastrService,

  ) {
  }
  ngOnInit(){
    this.HtmlElementsService.saveElement(this.element,"AsideJoinRoomMenuComponent")

  }
  ngAfterViewInit() {
    this.hideMenu()
  }
  onSubmit(form:any){
    this.RoomsService.joinRoom(form.value.roomId).subscribe(
      (res:any)=>{
        this.CacheService.rooms.push(res.room)
        this.hideMenu()
        setTimeout(()=>{
          this.connectToNewestRoom()
        },0)
      },
      (error)=>{
        this.ToastrService.error(error.error.message,"Error")
      }
    )
  }
  hideMenu(){
    this.Renderer2.setStyle(this.element.nativeElement  ,"display","none")
  }
  connectToNewestRoom(){
    const roomElementsAR = this.HtmlElementsService.elements.roomElementsQL.toArray()
    roomElementsAR[roomElementsAR.length-1].nativeElement.click()
  }
}
