import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import * as ons from 'onsenui';
import {MyApp} from '../app/app';

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html'),
  styles: [
    './home.css'
  ]
})
export class Home {

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {}
}
