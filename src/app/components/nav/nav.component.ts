import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  manageMenu() {
    this.isOpen = this.isOpen ? false : true;
  }
}
