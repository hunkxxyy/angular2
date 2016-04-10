/*
route config
2. import {ROUTER_PROVIDERS} from "angular2/router";
3. bootstrap(AppComponent,[ROUTER_PROVIDERS]);
k�v. appcomponents
*/
/// <reference path="../typings/browser.d.ts" />
/*Itt �l�thatom be , hogy mely komponenseket szeretn�m haszn�li
Ezek k�telez�ek:
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
bootstrap(AppComponent,[]);