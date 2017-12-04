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
         MatDatepickerModule,
         MatFormFieldModule,
         MatTabsModule,
         MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RosettaService } from './Services/rosetta.service';
import { ConfigService} from './Services/config.service';
import { TypesComponent } from './Components/settings-components/types/types.component';
import { HomeComponent } from './Components/home-components/home/home.component';
import { HomeToolbarComponent } from './Components/shared/home-toolbar/home-toolbar.component';
import { DistanceFunctionComponent } from './Components/shared/distance-function/distance-function.component';
import { ProgressComponent } from './Components/shared/progress-bar/progress.component';
import { SettingsComponent } from './Components/settings-components/settings/settings.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { peopleReduce } from './Reducers/people.reducer';
import { configReduce } from './Reducers/config.reducer';
import { ProjectComponent } from './Components/home-components/project/project.component';
import { DataSourcesComponent } from './Components/home-components/data-sources/data-sources.component';
import { ColumnMappingComponent } from './Components/home-components/column-mapping/column-mapping.component';
import { StandardizationComponent } from './Components/home-components/standardization/standardization.component';
import { BlockingComponent } from './Components/home-components/blocking/blocking.component';
import { MatchingComponent } from './Components/home-components/matching/matching.component';
import { ExecutionComponent } from './Components/home-components/execution/execution.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'types', component: TypesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'progress-bar', component: ProgressComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'data-sources', component: DataSourcesComponent },
  { path: 'home-toolbar', component: HomeToolbarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    HomeComponent,
    HomeToolbarComponent,
    DistanceFunctionComponent,
    ProgressComponent,
    SettingsComponent,
    ProjectComponent,
    DataSourcesComponent,
    ColumnMappingComponent,
    StandardizationComponent,
    BlockingComponent,
    MatchingComponent,
    ExecutionComponent
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
      config: configReduce}),
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
    MatDatepickerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [ RosettaService, ConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }