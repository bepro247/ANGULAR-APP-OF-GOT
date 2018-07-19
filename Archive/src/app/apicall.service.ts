import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Router,NavigationExtras} from "@angular/router";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  public allBlo=[];
  public currblo;
  public _baseme;
  public house;
  public charname;
  public gothouse=[];
  public characterDetail=[];
  public myResponse;
  public igotmess=[];
  public baseUrl= 'https://anapioficeandfire.com/api/characters/583';
  public baseUrl1= 'https://anapioficeandfire.com/api/books';
  public baseUrl2= 'https://anapioficeandfire.com/api/characters/2';
  constructor(private _http: HttpClient,private router: Router) { 


  }


public getMe(): any {
  
  let myResponse = this._http.get(this.baseUrl);
 
  return myResponse;
}

public get1(): any {

  this.myResponse = this._http.get(this.baseUrl1);
  
  return this.myResponse;
}

public get2(): any {
let tempArray = [];  
for(let x=0;x<this.igotmess.length;x++){
  
this._http.get(this.igotmess[x]).toPromise().then(
      data =>{  
      tempArray[x]=data;
      
    
      },
      error =>{
       alert("404: DATA NOT FOUND")
      }
    );
   
}

return tempArray;
}

public sendata(_baseme,j):any {
  this.igotmess[j]=_baseme;

  
 }

public findmechar(_listcharacters,gotbooks):any{

  this.allBlo=_listcharacters;
  this.currblo= gotbooks;

 
    
     this.router.navigate(['/characters']);
     this.gotthechar();
     this.gotitle();
     
}

public gotthechar():any{

    return this.allBlo;
}
public gotitle():any{

  return this.currblo;
}

public sendhouses(house,k,_charname):any {
  this.charname = _charname;
  this.gothouse[k]=house;
  this.router.navigate(['/house']);
  this.sendcharname();

  
 }
 public sendcharname():any{

  return this.charname;
}

 public get3(): any {
  let houseArray = [];  
  for(let y=0;y<this.gothouse.length;y++){
    
  this._http.get(this.gothouse[y]).toPromise().then(
        data =>{  
        houseArray[y]=data;
        
      
        },
        error =>{
          alert("404: DATA NOT FOUND")
        }
      );
     
  }
  
  return houseArray;
 
  }








}//export class


