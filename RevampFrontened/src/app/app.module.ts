import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import {FormsModule} from "@angular/forms";
import { ChatDisplayComponent } from './chat-display/chat-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
