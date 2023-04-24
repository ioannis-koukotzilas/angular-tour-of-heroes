import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  // Initialize an empty array of strings
  messages: string[] = [];

  // add() a message to the cache. Method takes a string parameter named message. It pushes the message parameter onto the end of the messages array.
  add(message: string) {
    this.messages.push(message);
  }

  // clear() the cache. Sets the messages array to an empty array.
  clear() {
    this.messages = [];
  }
}