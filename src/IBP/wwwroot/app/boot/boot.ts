
/// <reference path="../../../typings/main.d.ts" />

import {bootstrap}    from "angular2/platform/browser";
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode, provide, bind} from 'angular2/core';
import {HTTP_PROVIDERS, BaseRequestOptions, Headers} from 'angular2/http';

//import 'zone.js';
//import 'reflect-metadata';
//import 'es6-shim';

import {AppComponent} from './app'

enableProdMode();


bootstrap(AppComponent, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy), HTTP_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })])
    .catch(err => console.error(err));