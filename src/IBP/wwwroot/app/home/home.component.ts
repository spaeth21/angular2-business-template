import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';


import {SidebarComponent, NavComponent, FooterComponent} from '../shared/index';
import {OrdersComponent, QuotesComponent, DashboardComponent, ScheduleComponent, CreateComponent, WorkOrderComponent, ClientComponent, JobComponent, SalesPersonComponent} from '../index';


@Component({
    selector: 'home-page',
    templateUrl: 'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES, FooterComponent, NavComponent, SidebarComponent, CreateComponent, QuotesComponent,OrdersComponent,ScheduleComponent, WorkOrderComponent]

})

@RouteConfig([
        { path: '/', as: 'Dashboard', component: DashboardComponent, useAsDefault: true},
        { path: '/schedule', as: 'Schedule', component: ScheduleComponent},
        { path: '/orders', as: 'Orders', component: OrdersComponent },
        { path: '/quotes', as: 'Quotes', component: QuotesComponent},
        { path: '/create', as: 'Create', component: CreateComponent },
        { path: '/create-WorkOrder', as: 'WorkOrder', component: WorkOrderComponent },
        { path: '/create-Client', as: 'Client', component: ClientComponent },
        { path: '/create-Job', as: 'Job', component: JobComponent },
        { path: '/create-SalesPerson', as: 'SalesPerson', component: SalesPersonComponent },
])

export class HomeComponent{
    @Input() sideBarPosition: boolean;
    defaultContent: any = true;
    constructor() {
        console.log('in home');
    }

    sideBarStyle(event: Event) {
        this.defaultContent = event;
    }

}