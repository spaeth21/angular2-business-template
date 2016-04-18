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
// export type MaterializeOptions =
// "collapsible" |
// "dropdown" |
// "materialbox" |
// "tabs" |
// "tooltip" |
// "characterCounter" |
// "material_select" |
// "sideNav" |
// "leanModal";
var MaterializeDirective = (function () {
    function MaterializeDirective(_el) {
        this._el = _el;
        this._params = null;
        this._functionName = null;
        this.previousValue = null;
        this.changeListenerShouldBeAdded = true;
    }
    Object.defineProperty(MaterializeDirective.prototype, "materializeParams", {
        set: function (params) {
            this._params = params;
            this.performElementUpdates();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterializeDirective.prototype, "materialize", {
        set: function (functionName) {
            this._functionName = functionName;
        },
        enumerable: true,
        configurable: true
    });
    MaterializeDirective.prototype.ngAfterViewInit = function () {
        this.performElementUpdates();
    };
    MaterializeDirective.prototype.ngDoCheck = function () {
        var nativeElement = this._el.nativeElement;
        if (this.isSelect() && nativeElement.value != this.previousValue) {
            // handle select changes of the model
            this.previousValue = nativeElement.value;
            this.performLocalElementUpdates();
        }
        return false;
    };
    MaterializeDirective.prototype.performElementUpdates = function () {
        // it should have been created by now, but confirm anyway
        if (Materialize && Materialize.updateTextFields) {
            Materialize.updateTextFields();
        }
        // handle select changes from the HTML
        if (this.isSelect() && this.changeListenerShouldBeAdded) {
            var nativeElement = this._el.nativeElement;
            var jQueryElement = $(nativeElement);
            jQueryElement.on("change", function (e) { return nativeElement.dispatchEvent(new Event("input")); });
            this.changeListenerShouldBeAdded = false;
        }
        if (this.isDatePicker()) {
            var nativeElement = this._el.nativeElement;
            var jQueryElement = $(nativeElement);
            var enablebtns = this.enableDPButtons;
            jQueryElement[this._functionName].apply(jQueryElement, this._params);
            jQueryElement.on("change", function (e) { return nativeElement.dispatchEvent(new Event("input")); });
            var datePickerPopUp = jQueryElement.siblings(".picker").first();
            jQueryElement.on('click', function () {
                datePickerPopUp.addClass('picker--focused picker--opened');
                enablebtns();
                //close on side click
                $('.picker__holder').click(function (event) {
                    if (event.target.className === 'picker__holder') {
                        datePickerPopUp.removeClass('picker--focused picker--opened');
                    }
                });
                jQueryElement.change(function () {
                    setTimeout(function () {
                        enablebtns();
                    }, 10);
                });
                $('.picker__select--year').on('change', function () {
                    setTimeout(function () {
                        enablebtns();
                    }, 10);
                });
                $('.picker__select--month').on('change', function () {
                    setTimeout(function () {
                        enablebtns();
                    }, 10);
                });
            });
        }
        this.performLocalElementUpdates();
    };
    MaterializeDirective.prototype.performLocalElementUpdates = function () {
        if (this._functionName) {
            var jQueryElement = $(this._el.nativeElement);
            if (jQueryElement[this._functionName]) {
                if (this._params) {
                    if (this._params instanceof Array) {
                        jQueryElement[this._functionName].apply(jQueryElement, this._params);
                    }
                    else {
                        throw new Error("Params has to be an array.");
                    }
                }
                else {
                    jQueryElement[this._functionName]();
                }
            }
            else {
                // fallback to running this function on the global Materialize object
                if (Materialize[this._functionName]) {
                    Materialize[this._functionName]();
                }
                else {
                    throw new Error("Couldn't find materialize function ''" + this._functionName + "' on element or the global Materialize object.");
                }
            }
        }
    };
    MaterializeDirective.prototype.isSelect = function () {
        return (this._functionName && this._functionName === "material_select");
    };
    MaterializeDirective.prototype.isDatePicker = function () {
        return (this._functionName && this._functionName === "pickadate");
    };
    MaterializeDirective.prototype.enableDPButtons = function () {
        $('.picker__clear').removeAttr("disabled");
        $('.picker__today').removeAttr("disabled");
        $('.picker__close').removeAttr("disabled");
        $('.picker__select--year').removeAttr("disabled");
        $('.picker__select--month').removeAttr("disabled");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MaterializeDirective.prototype, "materializeParams", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MaterializeDirective.prototype, "materialize", null);
    MaterializeDirective = __decorate([
        core_1.Directive({
            selector: '[materialize]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MaterializeDirective);
    return MaterializeDirective;
})();
exports.MaterializeDirective = MaterializeDirective;
