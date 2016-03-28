/*
route config
2. import {ROUTER_PROVIDERS} from "angular2/router";
3. bootstrap(AppComponent,[ROUTER_PROVIDERS]);
köv. appcomponents
*/
/// <reference path="../typings/browser.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";

import {enableProdMode} from 'angular2/core';


enableProdMode();
bootstrap(AppComponent,[ROUTER_PROVIDERS]);