import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  addmessage(message: string) {
    this.messages.push(message);
  }
  clearmessages(){
    this.messages = []
  }
  constructor() { }
}
