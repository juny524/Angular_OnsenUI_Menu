import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import * as ons from 'onsenui';
import {MyApp} from '../app/app';

@Component({
  selector: 'ons-page[about]',
  template: require('./about.html'),
  styles: [
    './about.css'
  ]
})
export class About {

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {}
}
