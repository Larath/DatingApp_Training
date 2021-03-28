// app root component
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({  //this is a Decorator. Gives our class to be an Angular component. Basic UI building block for Angular. The data for the view in the browser
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //Our users is a type of litterally anything. This turns off type safety

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.GetUsers();
  }

  GetUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response=> {
      this.users = response;
    }, error => {
      console.log(error);
    })  //endpoint for API. subcribe is an observable with multiple functions available
  }

}
