import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor() {}

  ngOnInit(): void {}

  public getUserImage(): void {}
}

// <div style="display: flex; flex-direction: column;">
//   <app-toolbar></app-toolbar>
//   <app-sidebar></app-sidebar>
// </div>
