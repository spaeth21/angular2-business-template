var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var lang_1 = require('angular2/src/facade/lang');
var INPUTSWITCH_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
    useExisting: core_1.forwardRef(function () { return InputSwitch; }),
    multi: true
}));
var InputSwitch = (function () {
    function InputSwitch(el) {
        this.el = el;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.initialized = false;
    }
    InputSwitch.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inputSwitchElement = jQuery(this.el.nativeElement.children[0]).find('> .ui-helper-hidden-accessible > input');
        this.inputSwitchElement.puiswitch({
            checked: this.value,
            enhanced: true,
            change: function (event, ui) {
                _this.value = ui.checked;
                _this.onModelChange(_this.value);
                if (_this.onChange) {
                    _this.onChange.emit({ originalEvent: event, checked: _this.value });
                }
            }
        });
        this.initialized = true;
    };
    InputSwitch.prototype.writeValue = function (value) {
        this.value = value;
        if (this.initialized) {
            this.inputSwitchElement.puiswitch('option', 'checked', this.value);
        }
    };
    InputSwitch.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputSwitch.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputSwitch.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            for (var key in changes) {
                this.inputSwitchElement.puiswitch('option', key, changes[key].currentValue);
            }
        }
    };
    InputSwitch.prototype.ngOnDestroy = function () {
        this.inputSwitchElement.puiswitch('destroy');
        this.initialized = false;
        this.inputSwitchElement = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputSwitch.prototype, "onLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputSwitch.prototype, "offLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputSwitch.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InputSwitch.prototype, "styleClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InputSwitch.prototype, "onChange", void 0);
    InputSwitch = __decorate([
        core_1.Component({
            selector: 'p-inputSwitch',
            template: "\n        <div [ngClass]=\"'ui-inputswitch ui-widget ui-widget-content ui-corner-all'\" [attr.style]=\"style\" [attr.class]=\"styleClass\">\n            <div class=\"ui-inputswitch-off\">\n                <span>{{offLabel}}</span>\n            </div>\n            <div class=\"ui-inputswitch-on\">\n                <span>{{onLabel}}</span>\n            </div>\n            <div class=\"ui-inputswitch-handle ui-state-default\"></div>\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" (blur)=\"onModelTouched()\"/>\n            </div>\n        </div>\n    ",
            providers: [INPUTSWITCH_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InputSwitch);
    return InputSwitch;
})();
exports.InputSwitch = InputSwitch;
//# sourceMappingURL=inputswitch.js.map