import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import * as ons from 'onsenui';

import {MyApp} from '../app/app';

@Component({
  selector: 'ons-page[menu]',
  template: require('./menu.html'),
  styles: [
    './menu.css'
  ]
})
export class Menu {

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {}
}
