// Onsen UI Styling and Icons
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';

import * as ons from 'onsenui';

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {Menu} from './menu/menu';
import {About} from './about/about';
import {Home} from './home/home';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule,
    ],
    declarations: [
        MyApp,
        Menu,
        About,
        Home,
    ],
    entryComponents: [
        Menu,
        About,
        Home,
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
