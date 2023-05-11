import { Component } from '@angular/core';
import { MessageService } from '../message.service';

// MessagesComponent displays that message, and also displays the ID when the user clicks a hero
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}