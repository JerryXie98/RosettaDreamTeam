import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule,
         MatListModule,
         MatMenuModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactService } from './Services/contact.service';
import { RosettaService } from './Services/rosetta.service';
import { TypesComponent } from './Components/types/types.component';
import { HomeComponent } from './Components/home/home.component';

const appRoutes: Routes = [
  { path: 'types', component: TypesComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // for debugging purposes
    ),
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [ ContactService, RosettaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
