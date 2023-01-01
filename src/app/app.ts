import {Component, ViewChild} from '@angular/core';
import * as ons from 'onsenui';
import {OnsSplitterContent, OnsSplitterSide} from 'ngx-onsenui';
import {Home} from '../home/home';
import {Menu} from '../menu/menu';
import {About} from '../about/about';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ './app.css' ]
})
export class MyApp {
  @ViewChild(OnsSplitterContent) content: OnsSplitterContent;
  @ViewChild(OnsSplitterSide) side: OnsSplitterSide;

  pages = {
    home: Home,
    menu: Menu,
    about: About
  };

  load(name) {
    if (this.pages.hasOwnProperty(name)) {
      this.content.element.load(this.pages[name]);
      this.side.element.close();
    } else {
      console.error(`page ${name} not found`);
    }
  }

  openMenu(){
      this.side.element.open();
  }



  constructor() {}
  
  
}
