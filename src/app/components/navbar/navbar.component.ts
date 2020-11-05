import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public nameUser: string;
  public rolUser: string;

  ngOnInit(): void {
    this.nameUser = sessionStorage.getItem('user');
    this.rolUser = sessionStorage.getItem('rol');
  }

}
