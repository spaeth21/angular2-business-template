System.register(['angular2/core', 'angular2/router', '../shared/index', '../index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, index_2;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.defaultContent = true;
                    console.log('in home');
                }
                HomeComponent.prototype.sideBarStyle = function (event) {
                    this.defaultContent = event;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], HomeComponent.prototype, "sideBarPosition", void 0);
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        templateUrl: 'app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, index_1.FooterComponent, index_1.NavComponent, index_1.SidebarComponent, index_2.CreateComponent, index_2.QuotesComponent, index_2.OrdersComponent, index_2.ScheduleComponent, index_2.WorkOrderComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Dashboard', component: index_2.DashboardComponent, useAsDefault: true },
                        { path: '/schedule', as: 'Schedule', component: index_2.ScheduleComponent },
                        { path: '/orders', as: 'Orders', component: index_2.OrdersComponent },
                        { path: '/quotes', as: 'Quotes', component: index_2.QuotesComponent },
                        { path: '/create', as: 'Create', component: index_2.CreateComponent },
                        { path: '/create-WorkOrder', as: 'WorkOrder', component: index_2.WorkOrderComponent },
                        { path: '/create-Client', as: 'Client', component: index_2.ClientComponent },
                        { path: '/create-Job', as: 'Job', component: index_2.JobComponent },
                        { path: '/create-SalesPerson', as: 'SalesPerson', component: index_2.SalesPersonComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
