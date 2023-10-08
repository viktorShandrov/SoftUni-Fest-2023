import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  messages!:any
  socket!:any
  rooms!:any
  constructor() { }
}
