import { Component } from '@angular/core';
import { IPeople } from './Data Models/ipeople';
import { ContactService } from './Services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rosetta';
  myContactList: IPeople[];
  matListCheck: string[];

  constructor(private _contactService: ContactService) {
    this._contactService.getContacts();
    this.matListCheck = ['fuck', 'shit', 'trash'];
  }

  OnClick() {
    this.myContactList = this._contactService.getContacts();
    this._contactService.tanayTest();
  }
}
