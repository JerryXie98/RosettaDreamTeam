import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule,
         MatListModule,
         MatMenuModule,
         MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactService } from './Services/contact.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [ ContactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
