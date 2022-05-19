import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  response;
  constructor(private http:HttpClient ) {}
  ngOnInit() {          
    this.http.get<any>('https://cat-fact.herokuapp.com/facts').subscribe(data => {
        this.response = data;
    })
}
}
