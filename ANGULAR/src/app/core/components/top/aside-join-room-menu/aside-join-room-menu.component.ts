import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {HtmlElementsService} from "../../../../shared/services/html-elements.service";
import {RoomsService} from "../../../services/rooms.service";
import {subscribeOn} from "rxjs";
import {ToastrService} from "ngx-toastr";

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
    private ToastrService:ToastrService,

  ) {
  }
  ngOnInit(){
    this.HtmlElementsService.saveElement(this.element,"AsideJoinRoomMenuComponent")

  }
  ngAfterViewInit() {

    this.Renderer2.setStyle(this.element.nativeElement  ,"display","none")
  }
  onSubmit(form:any){
    this.RoomsService.joinRoom(form.value.roomId).subscribe(
      (res)=>{

      },
      (error)=>{
        this.ToastrService.error(error.error.message,"Error")
      }
    )
  }
}
