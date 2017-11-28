import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { testReduce } from './Reducers/message.reducer';


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
import { ConfigService} from './Services/config.service';
import { TypesComponent } from './Components/types/types.component';
import { HomeComponent } from './Components/home/home.component';
import { DistanceFunctionComponent } from './Components/distance-function/distance-function.component';
import { ProgressComponent } from './Components/progress-bar/progress.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { peopleReduce } from './Reducers/people.reducer';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'types', component: TypesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'progress-bar', component: ProgressComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    DistanceFunctionComponent,
    ProgressComponent,
    SettingsComponent
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
    StoreModule.forRoot({
      people: peopleReduce,
      message: testReduce}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
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
  providers: [ ContactService, RosettaService, ConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
