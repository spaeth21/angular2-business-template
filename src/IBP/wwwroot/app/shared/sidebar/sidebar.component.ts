import {Component, Output, Input, EventEmitter, OnChanges, ChangeDetectorRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Dialog} from 'primeng/primeng';

@Component({
    selector: 'ibp-sidebar',
    templateUrl: 'app/shared/sidebar/sidebar.component.html',
    directives: [ROUTER_DIRECTIVES, Dialog],
    styleUrls: ['app/shared/sidebar/sidebar.component.css']
})

export class SidebarComponent implements OnChanges{
    sideBarOpen: boolean = false;
    dialogVisible: boolean = false;

    @Output() toggleValue = new EventEmitter();

    constructor(public router: Router, private _cd : ChangeDetectorRef) {
        console.log('in sidebar');
    }

    ngOnChanges() {
    }

    onToggleSideBar(toggle) {
        this.sideBarOpen = toggle;
        this.toggleValue.emit(this.sideBarOpen);
    }

    onCreateClick() {
        this.dialogVisible = true;
        this._cd.detectChanges();
    }

    checkActive(route) {
            if(this.router.isRouteActive(this.router.generate(['./Client']))) return true;
            if(this.router.isRouteActive(this.router.generate(['./Job']))) return true;
            if(this.router.isRouteActive(this.router.generate(['./WorkOrder']))) return true;
            if(this.router.isRouteActive(this.router.generate(['./Create']))) return true;
            if(this.router.isRouteActive(this.router.generate(['./SalesPerson']))) return true;
    }

}