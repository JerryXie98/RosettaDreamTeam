import { Component, OnInit } from '@angular/core';
import {RosettaService} from '../../Services/rosetta.service';

@Component({
  selector: 'app-distance-function',
  templateUrl: './distance-function.component.html',
  styleUrls: ['./distance-function.component.css']
})
export class DistanceFunctionComponent implements OnInit {
  URLTEMPLATE = 'http://localhost:61899/api/distancefunction/';
  urlString: string;
  output: any;
  constructor(private _rosettaService: RosettaService) { }

  ngOnInit() {
  }

  runDistanceFunction (functionName: string, stringA: string, stringB: string) {
    this.urlString = this.URLTEMPLATE + functionName + '?strA=' + stringA + '&strB=' + stringB;
    this._rosettaService.distanceFunction(this.urlString).subscribe(
      data => {
        this.output = data;
      },
      err => {
        if ( err.error instanceof Error) {
          // Client-side Error
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend Error
          console.log(`Backend returned code ${err.status}`);
        }
      }
    );
  }

}

