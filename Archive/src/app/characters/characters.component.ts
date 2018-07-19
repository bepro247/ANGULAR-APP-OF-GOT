import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characme;
  public findme = [];
  public sub = [];
  public value;


  constructor(public apiservice: ApicallService, private _location: Location) {
    



  }
  backClicked() {
    this._location.back();
  }

  ngOnInit() {

    
    this.sub = this.apiservice.gotthechar();
   

    this.value = this.apiservice.gotitle();
    



  }




  gethouse(_gotcharname) {


   
    for (let i in this.sub)
      if (_gotcharname == this.sub[i].name) {

        for (let j = 0; j < this.sub[i].allegiances.length; j++) {

          this.characme = this.sub[i].allegiances[j];
          this.apiservice.sendhouses(this.characme, j, _gotcharname);
        }

      }




  }
}
