import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApicallService } from 'src/app/apicall.service';
import {RouterModule,Routes} from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HousesComponent } from './houses/houses.component';
import { HomeComponent } from './home/home.component';
import { NgProgressModule, NgProgressBrowserXhr,NgProgressInterceptor } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    NavbarComponent,
    HousesComponent,
    HomeComponent,

   

  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'books',component:BooksComponent},
      {path:'characters',component:CharactersComponent},
      {path:'house',component:HousesComponent},
      {path:'home',component:HomeComponent},
      {path:'' , component:HomeComponent}
    
      
   
    ]),
    NgProgressModule,
    BrowserModule,
    HttpModule
  
    
   
   

  ],
  providers: [ApicallService, { provide: BrowserXhr, useClass: NgProgressBrowserXhr },{ provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
