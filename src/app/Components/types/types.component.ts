import { Component, OnInit } from '@angular/core';
import { IRosettaFunctions } from '../../Data Models/irosetta-functions';
import { RosettaService } from '../../Services/rosetta.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  rosettaFunctionList: IRosettaFunctions[];
  integer = 'Integer';
  expression = '';
  constructor(private _rosettaService: RosettaService) { }

  ngOnInit() {
    this._rosettaService.getFunctionsList().subscribe(data => {
      this.rosettaFunctionList = data['functions'];
    });

    console.log('Types loaded!');
  }

}
