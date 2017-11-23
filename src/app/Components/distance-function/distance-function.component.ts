import {Component, Input, OnInit} from '@angular/core';
import {RosettaService} from '../../Services/rosetta.service';

@Component({
  selector: 'app-distance-function',
  templateUrl: './distance-function.component.html',
  styleUrls: ['./distance-function.component.css']
})
export class DistanceFunctionComponent implements OnInit {
  urlString: string;
  output: any;
  @Input('functionChosen') functionChosen: any;

  constructor(private _rosettaService: RosettaService) { }

  ngOnInit() {
  }

  runDistanceFunction(functionName: string, stringA: string, stringB: string) {
    this._rosettaService.distanceFunction(functionName, stringA, stringB).subscribe(data => {
      this.output = data;
    });
    console.log(this.functionChosen.name);
  }
}
