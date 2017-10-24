import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rosetta';
  private idUrl = 'https://localhost:59193/api/main/getId/69';
  private strUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http) {
    console.log('Starting up');
    this.getId();
    this.getData();
  }

  getId() {
      return this.http.get(this.strUrl)
        .map((res: Response) => res.json());
  }

  getData() {
    this.getId().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
