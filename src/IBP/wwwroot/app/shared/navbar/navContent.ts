


import {Component, OnInit, EventEmitter, Output} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';


import {SidebarComponent} from '../sidebar/sidebar.component';


@Component({
    selector: 'ibp-navbar',
    templateUrl: 'app/shared/navbar/navContent.html',
    directives: [ROUTER_DIRECTIVES, SidebarComponent]
})

export class NavComponent implements OnInit{


    menu: Array<Object> = [{ name: 'Dashboard', icon: 'fa fa-dashboard fa-2x', route: './Dashboard' }, { name: 'Schedule', icon: 'fa fa-calendar fa-2x', route: './Schedule' },
        { name: 'Orders', icon: 'fa fa-clipboard fa-2x', route: './Orders' },
        { name: 'Quotes', icon: 'fa fa-money fa-2x', route: './Quotes' }, { name: 'Create', icon: 'fa fa-bolt fa-2x', route: './Create'}]
    sideBarOpen: boolean = false;
    @Output() sideBarPosition = new EventEmitter();

    constructor() {
        console.log('in nav');
    }

    ngOnInit() {
        this.sideBarPosition.emit(this.sideBarOpen);
    }


    toggleSideBar(toggle) {
        this.sideBarOpen = toggle;
        this.sideBarPosition.emit(this.sideBarOpen);
    }
}