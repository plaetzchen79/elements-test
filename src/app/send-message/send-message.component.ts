import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * A simple component to be transformed as a custom element
 */
@Component({
  selector: 'send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  @Input()
  textInput = 'Write your input here';

  /***
   * Send the message to whoever
   * @event
   */
  @Output()
  send = new EventEmitter<string>();

  sendText = 'Message ';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Simple function to show how an event works
   */
  clickSend() {
    const currentTime = new Date();
    this.sendText = '';
    this.sendText = this.sendText + ' ' + this.textInput + ' send at: ' +  currentTime.toLocaleString();
    this.send.emit(this.sendText);
  }

}
