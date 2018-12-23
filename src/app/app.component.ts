import { Component, Injector } from '@angular/core';
import { SendMessageComponent } from './send-message/send-message.component';
import { createCustomElement } from '@angular/elements';
import { DynamicElementService } from './dynamic-element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Elements Test and Example Project';
  sendData = '';

  constructor(
    injector: Injector,
    private dynamicElementService: DynamicElementService
  ) {
    // Convert  to a custom element.
    const SendMessageElement = createCustomElement(SendMessageComponent, {
      injector
    });
    // Register the custom element with the browser.
    customElements.define('send-message-element', SendMessageElement);
  }

  /**
   * Event from custom element
   * Angular data is in .detail property
   * @param event
   */
  dataSend(event: any) {
    this.sendData = event.detail;
  }

  /**
   * Add a new one dynamically via service
   */
  clickNew() {
    this.dynamicElementService.createMessageElement();
  }
}
