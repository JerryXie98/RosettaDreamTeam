import { Injectable } from '@angular/core';
import {IPeople} from '../Data Models/ipeople';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {

  contactsList: IPeople[];
  CONTACT_URL = 'https://address-book-demo.herokuapp.com/api/contacts';
  myContactsList: IPeople[];

  constructor(private _http: HttpClient) { }

  getContacts(): IPeople[] {
    this._http.get(this.CONTACT_URL).subscribe(data => {
      this.contactsList = data['contacts'];
    });
    return this.contactsList;
  }

  readContacts() {
    this.myContactsList = this.contactsList;
  }

}
