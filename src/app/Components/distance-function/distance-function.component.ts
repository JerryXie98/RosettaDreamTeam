import { Component, OnInit } from '@angular/core';
import {RosettaService} from '../../Services/rosetta.service';

@Component({
  selector: 'app-distance-function',
  templateUrl: './distance-function.component.html',
  styleUrls: ['./distance-function.component.css']
})
export class DistanceFunctionComponent implements OnInit {
  urlString: string;
  output: Number;
  constructor(private _rosettaService: RosettaService) { }

  ngOnInit() {
  }

  runDistanceFunction(functionName: string, stringA: string, stringB: string) {

    this.output = this._rosettaService.distanceFunction(functionName, stringA, stringB);
    
  }
}
