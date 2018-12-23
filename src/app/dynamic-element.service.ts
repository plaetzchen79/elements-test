import { SendMessageComponent } from './send-message/send-message.component';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

@Injectable({
  providedIn: 'root'
})
export class DynamicElementService {

  constructor(private injector: Injector) { }

  /**
   * Create element dynamically
   */
  createMessageElement(): void {
    // Create Element
    const sendMessageElement =  document.createElement('send-message-element') as NgElement & WithProperties<SendMessageComponent>;

    // Listen to the event
    sendMessageElement.addEventListener('send', ($event) => this.logSend($event));

    // Set input text
    sendMessageElement.textInput = 'Input for new one';

    // Add to the DOM
    document.body.appendChild(sendMessageElement);
  }

  /**
   * Just log event to console
   * @param ev
   */
  private logSend(ev: any) {
    console.log(ev.detail);
  }
}
