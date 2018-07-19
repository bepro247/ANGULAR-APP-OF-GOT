import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public houseme;
  public headname;
  constructor(public apiservice:ApicallService,private _location: Location) { }
  backClicked() {
    this._location.back();
}

  ngOnInit() {

   this.houseme=this.apiservice.get3();

   this.headname=this.apiservice.sendcharname();
       

  }

}
