System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PanelHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PanelHeaderComponent = (function () {
                function PanelHeaderComponent() {
                }
                PanelHeaderComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelHeaderComponent.prototype, "mainTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelHeaderComponent.prototype, "secondaryTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelHeaderComponent.prototype, "backgroundColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelHeaderComponent.prototype, "textMainColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelHeaderComponent.prototype, "textSecondaryColor", void 0);
                PanelHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'panel-header',
                        templateUrl: 'app/shared/panel/headerBlockComponent.html',
                        styleUrls: ['app/shared/panel/headerBlock.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelHeaderComponent);
                return PanelHeaderComponent;
            }());
            exports_1("PanelHeaderComponent", PanelHeaderComponent);
        }
    }
});
