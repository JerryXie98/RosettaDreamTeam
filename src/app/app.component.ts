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
  testObject;
  private idUrl = 'http://localhost:59193/api/main/getId/69';
  private strUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  private distanceUrl = 'http://localhost:59193/api/main/Jaro-Winkler?strA=${stringA}&strB=${stringB}';
  private testUrl = 'http://localhost:59193/api/main/getJSON';
  private curUrl;
  data: any = {};

  constructor(private http: Http) {
    console.log('Starting up');
    this.getId();
    this.getData();
  }

  onClick(strA, strB): void {
    this.curUrl = 'http://localhost:59193/api/main/Jaro-Winkler?strA=' + strA + '&strB=' + strB;
    this.getId();
    this.getData();
  }

  getId() {
    return this.http.get(this.curUrl)
      .map((res: Response) => res.json());
  }

  getData() {
    this.getId().subscribe(data => {
      console.log(data);
      this.testObject = data;
      this.data = data;
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
