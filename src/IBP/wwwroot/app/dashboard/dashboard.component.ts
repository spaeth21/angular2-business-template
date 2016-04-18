import {Component, OnInit, ChangeDetectorRef} from 'angular2/core';

import {Schedule, Dialog, Calendar} from 'primeng/primeng';

import {PanelBodyComponent, PanelHeaderComponent} from '../shared/index';

@Component({
    selector: 'ibp-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [Schedule, PanelHeaderComponent, PanelBodyComponent, Dialog, Calendar]

})

export class DashboardComponent implements OnInit {
    calendarHeight: number = 550;
    header: Object;
    dialogVisible: boolean = false;
    constructor(private _cd: ChangeDetectorRef) {
        console.log('in dashboard');}


    ngOnInit() {
        console.log('in dashboard');
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }


    handleDayClick(event) {
        this.dialogVisible = true;
        this._cd.detectChanges();

    }
}