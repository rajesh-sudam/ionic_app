import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public Firstname= String;

  constructor() { }

  ngOnInit() {
    this.Firstname= this.Firstname;
   console.log(this.Firstname);
  }

}
