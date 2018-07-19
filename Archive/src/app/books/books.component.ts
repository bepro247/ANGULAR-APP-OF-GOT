import { Component, OnInit} from '@angular/core';
import { ApicallService } from '../apicall.service';





@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public booksme;
  public _bookname;
  public findme=[];
  public i;
  public characme;
  public callme;
  public characterDetail=[];
  public extra=[];
  public don1;
  public findchar=[];
 
  constructor(public apiservice:ApicallService) {
    
   }
   
  ngOnInit() {
   
    
    this.booksme = this.apiservice.get1().subscribe(

      data =>{
        
        this.findme = data;

        
        
      },
      error =>{
       alert("404 : DATA NOT FOUND");
      }
    )
  


  }


  gotme(_bookname){

  
   for(let i in this.findme){
   if(_bookname == this.findme[i].name)
    {
      for(let j=0;j<this.findme[i].characters.length;j++){
      this.callme=this.findme[i].characters[j];
     
      
      this.apiservice.sendata(this.callme,j);
    
      }
  
      
      
      this.characterDetail = this.apiservice.get2();
        
    
     
     
       
      

       
      
    
      


      
      
     
    }
    
   

  }
  this.apiservice.findmechar(this.characterDetail,_bookname);
 
}



}






