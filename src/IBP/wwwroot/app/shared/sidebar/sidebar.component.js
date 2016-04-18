System.register(['angular2/core', 'angular2/router', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, router_1, primeng_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(router, _cd) {
                    this.router = router;
                    this._cd = _cd;
                    this.sideBarOpen = false;
                    this.dialogVisible = false;
                    this.toggleValue = new core_1.EventEmitter();
                    console.log('in sidebar');
                }
                SidebarComponent.prototype.ngOnChanges = function () {
                };
                SidebarComponent.prototype.onToggleSideBar = function (toggle) {
                    this.sideBarOpen = toggle;
                    this.toggleValue.emit(this.sideBarOpen);
                };
                SidebarComponent.prototype.onCreateClick = function () {
                    this.dialogVisible = true;
                    this._cd.detectChanges();
                };
                SidebarComponent.prototype.checkActive = function (route) {
                    if (this.router.isRouteActive(this.router.generate(['./Client'])))
                        return true;
                    if (this.router.isRouteActive(this.router.generate(['./Job'])))
                        return true;
                    if (this.router.isRouteActive(this.router.generate(['./WorkOrder'])))
                        return true;
                    if (this.router.isRouteActive(this.router.generate(['./Create'])))
                        return true;
                    if (this.router.isRouteActive(this.router.generate(['./SalesPerson'])))
                        return true;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SidebarComponent.prototype, "toggleValue", void 0);
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'ibp-sidebar',
                        templateUrl: 'app/shared/sidebar/sidebar.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, primeng_1.Dialog],
                        styleUrls: ['app/shared/sidebar/sidebar.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ChangeDetectorRef])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
