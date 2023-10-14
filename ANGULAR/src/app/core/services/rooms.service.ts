import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private HttpService: HttpService) {}

  joinRoom(roomId: string) {
    return this.HttpService.getRequest(`api/rooms/joinRoom/${roomId}`);
  }
}
