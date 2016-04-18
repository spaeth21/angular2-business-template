/// <reference path="../../../typings/main.d.ts" />
System.register(["angular2/platform/browser", 'angular2/router', 'angular2/core', 'angular2/http', './app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, core_1, http_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy), http_1.HTTP_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })])
                .catch(function (err) { return console.error(err); });
        }
    }
});
