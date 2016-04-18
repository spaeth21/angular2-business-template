System.register(['angular2/core', '../shared/index', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, index_1, primeng_1;
    var ScheduleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            ScheduleComponent = (function () {
                function ScheduleComponent(_cd) {
                    this._cd = _cd;
                    this.dialogVisible = false;
                    this.calendarHeight = 850;
                    console.log('in schedule');
                }
                ScheduleComponent.prototype.ngOnInit = function () {
                    console.log('in schedule');
                    this.header = {
                        left: 'prev,next, today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    };
                };
                ScheduleComponent.prototype.handleDayClick = function (event) {
                    console.dir('handled click');
                    this.dialogVisible = true;
                    this._cd.detectChanges();
                };
                ScheduleComponent = __decorate([
                    core_1.Component({
                        selector: 'ibp-schedule',
                        templateUrl: 'app/schedule/schedule.component.html',
                        directives: [primeng_1.Schedule, index_1.PanelBodyComponent, primeng_1.Dialog, primeng_1.Calendar, primeng_1.ToggleButton]
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], ScheduleComponent);
                return ScheduleComponent;
            }());
            exports_1("ScheduleComponent", ScheduleComponent);
        }
    }
});
