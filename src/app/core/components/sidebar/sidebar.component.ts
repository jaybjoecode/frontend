import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: any[] = [
    {
      id: 1,
      name: 'Menu 1',
      icon: 'person',
      on: true,
      link: 'one',
    },
    {
      id: 2,
      name: 'Menu 2',
      icon: 'assignment',
      on: false,
      link: 'two',
    },
    {
      id: 3,
      name: 'Menu 3',
      icon: 'shopping_cart',
      on: false,
      link: 'three',
    },
  ];

  constructor() {}

  select(id: string): void {
    this.items.forEach((elem) => {
      elem.on = elem.id === id ? true : false;
    });
  }

  ngOnInit(): void {}
}
