import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  items = [
    {
      name: 'teste',
      isCollapsed: false
    },
    {
      name: 'teste 2',
      isCollapsed: false
    },
    {
      name: 'teste 3',
      isCollapsed: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}