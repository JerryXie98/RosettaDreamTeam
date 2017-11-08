import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule,
         MatListModule,
         MatMenuModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule,
         MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactService } from './Services/contact.service';
import { RosettaService } from './Services/rosetta.service';
import { TypesComponent } from './Components/types/types.component';
import { HomeComponent } from './Components/home/home.component';
import { DistanceFunctionComponent } from './Components/distance-function/distance-function.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'types', component: TypesComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    DistanceFunctionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // for debugging purposes
    ),
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [ ContactService, RosettaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
