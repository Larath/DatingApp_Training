import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({  //Tells the app that this is an Angular Module
  declarations: [  //components that are available in our Application
    AppComponent
  ],
  imports: [  //Other modules that are also available in our browser
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule //added by ngx bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]  //Bootstrapping the components
})
export class AppModule { }
