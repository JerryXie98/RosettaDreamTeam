import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule,
         MatListModule,
         MatMenuModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule,
         MatSelectModule,
         MatInputModule,
         MatCardModule,
         MatStepperModule,
         MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactService } from './Services/contact.service';
import { RosettaService } from './Services/rosetta.service';
import { TypesComponent } from './Components/types/types.component';
import { HomeComponent } from './Components/home/home.component';
import { DistanceFunctionComponent } from './Components/distance-function/distance-function.component';
import { ProgressComponent } from './Components/progress-bar/progress.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'types', component: TypesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'progress-bar', component: ProgressComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    DistanceFunctionComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatExpansionModule
  ],
  providers: [ ContactService, RosettaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
