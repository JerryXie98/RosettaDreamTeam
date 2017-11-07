import { Component } from '@angular/core';
import { IPeople } from './Data Models/ipeople';
import { ContactService } from './Services/contact.service';
import { IRosettaFunctions } from './Data Models/irosetta-functions';
import {RosettaService} from './Services/rosetta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rosetta';
  // myContactList: IPeople[];
  rosettaFunctionList: IRosettaFunctions[];
  matListCheck: string[];

  constructor(private _rosettaService: RosettaService) {
    // this._rosettaService.getFunctionsList();
    this.matListCheck = ['List1', 'List2', 'List3'];
  }

  OnClick() {

    this.rosettaFunctionList = this._rosettaService.getFunctionsList();
    // Used for Testing Purposes
    // this.myContactList = this._contactService.getContacts();
  }
}
