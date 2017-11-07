import { Injectable } from '@angular/core';
import {IPeople} from '../Data Models/ipeople';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {

  contactsList: IPeople[];
  CONTACT_URL = 'https://address-book-demo.herokuapp.com/api/contacts';
  GO_TEST = 'http://localhost:8080/get';
  myContactsList: IPeople[];

  constructor(private _http: HttpClient) { }

  getContacts(): IPeople[] {
    this._http.get(this.CONTACT_URL).subscribe(data => {
      this.contactsList = data['contacts'];
    });
    return this.contactsList;
  }

  tanayTest() {
    this._http.get(this.GO_TEST).subscribe(data => {
      console.log(data);
    });
  }

  readContacts() {
    console.log(this.contactsList[0].name);
    this.myContactsList = this.contactsList;
  }

}
