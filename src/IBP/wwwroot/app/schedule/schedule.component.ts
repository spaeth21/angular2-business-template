import {Component, OnInit, ChangeDetectorRef} from 'angular2/core';


import {PanelBodyComponent} from '../shared/index';

import {Schedule, Dialog, Calendar, ToggleButton} from 'primeng/primeng';

@Component({
    selector: 'ibp-schedule',
    templateUrl: 'app/schedule/schedule.component.html',
    directives: [Schedule, PanelBodyComponent, Dialog, Calendar, ToggleButton]

})

export class ScheduleComponent implements OnInit {
    dialogVisible: boolean = false;
    calendarHeight: number = 850;
    header: Object;


    constructor(private _cd: ChangeDetectorRef) {
        console.log('in schedule');}

    ngOnInit() {
        console.log('in schedule');
       this.header = {
            left: 'prev,next, today',
                center: 'title',
                    right: 'month,agendaWeek,agendaDay'
        }
    }


    handleDayClick(event) {
        console.dir('handled click');
        this.dialogVisible = true;
        this._cd.detectChanges();
        
    }
}