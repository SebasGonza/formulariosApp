import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  token:string = ''

  constructor() { this.iniciarToken() }

  ngOnInit(): void {
  }

  iniciarToken():void{
    this.token = localStorage.getItem('Token') || '';
    console.log(this.token);
  }
}
