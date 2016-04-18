System.register(['angular2/core', 'angular2/common', '../../shared/index'], function(exports_1, context_1) {
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
    var core_1, common_1, index_1;
    var ClientComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            ClientComponent = (function () {
                function ClientComponent(fb) {
                    this.fb = fb;
                }
                ClientComponent.prototype.ngOnInit = function () {
                    this.clientForm = this.fb.group({
                        customerName: [null, common_1.Validators.compose([common_1.Validators.required])],
                        phone: [null, common_1.Validators.compose([common_1.Validators.required])],
                        address: [null, common_1.Validators.compose([common_1.Validators.required])],
                        email: [null, common_1.Validators.compose([common_1.Validators.required])],
                        city: [null, common_1.Validators.compose([common_1.Validators.required])],
                        state: [null, common_1.Validators.compose([common_1.Validators.required])],
                        zip: [null, common_1.Validators.compose([common_1.Validators.required])]
                    });
                };
                ClientComponent.prototype.onFocusElement = function (event, el) {
                    el.focus();
                };
                ClientComponent = __decorate([
                    core_1.Component({
                        selector: 'ibp-client',
                        templateUrl: 'app/create/client/client.component.html',
                        directives: [index_1.PanelBodyComponent, index_1.PanelHeaderComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ClientComponent);
                return ClientComponent;
            }());
            exports_1("ClientComponent", ClientComponent);
        }
    }
});
