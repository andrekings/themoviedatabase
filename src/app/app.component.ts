import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = `The Movie Database`;
  themeName = 'indigo';
  constructor() { }
  changeTheme(color) {
    this.themeName = color;
  }

  ngOnInit() { }
}
