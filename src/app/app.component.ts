import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  toRead(){
    this.router.navigate(["/pedido/home"]);
  }

  toCreate(){
    this.router.navigate(["/pedido/create"]);
  }

  toList(){
    this.router.navigate(["/pedido/list"]);
  }
}
