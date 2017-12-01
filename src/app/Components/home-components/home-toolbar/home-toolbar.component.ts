import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../../Models/irosetta-functions';
import { RosettaService } from '../../../Services/rosetta.service';
import { ConfigService } from '../../../Services/config.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IPeople } from '../../../Models/ipeople';
import { AppState } from '../../../State/config-state';
import * as PeopleActions from '../../../Actions/people';

@Component({
  selector: 'app-homeToolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.css']
})
export class HomeToolbarComponent implements OnInit {

  ngOnInit() {
    console.log('Toolbar is loaded!');
  }

}
