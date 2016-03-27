/// <reference path="../typings/browser.d.ts" />
/*Itt álíthatom be , hogy mely komponenseket szeretném használi
Ezek kötelezõek:
    import {bootstrap} from 'angular2/platform/browser';
.
.
.
.
import {enableProdMode} from 'angular2/core';
enableProdMode();
bootstrap(AppComponent);*/
import {bootstrap} from 'angular2/platform/browser';

import {AppComponent} from "./app.component";
import {enableProdMode} from 'angular2/core';


enableProdMode();
bootstrap(AppComponent);