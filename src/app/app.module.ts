import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [SendMessageComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
