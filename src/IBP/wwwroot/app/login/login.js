System.register(['angular2/core', 'angular2/router', 'angular2/common', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, fb, http) {
                    this.router = router;
                    this.http = http;
                    this.antiForgeryToken = document.getElementById('antiForgeryForm').children[0].attributes.getNamedItem('value').textContent;
                    this.forgeryHeader = new http_1.Headers([{ '__RequestVerificationToken': this.antiForgeryToken }]);
                    //console.dir(this.forgeryHeader);
                    //this.options = new RequestOptions({ headers: this.forgeryHeader });
                    this.loginForm = fb.group({
                        userName: [null, common_1.Validators.compose([common_1.Validators.required])],
                        password: [null, common_1.Validators.compose([common_1.Validators.required])]
                    });
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.errorMessage = null;
                    var data = { email: this.loginForm.controls['userName'].value, password: this.loginForm.controls['password'].value, __RequestVerificationToken: this.antiForgeryToken };
                    var sendData = JSON.stringify(data);
                    var headers = new http_1.Headers({
                        'X-Request-Verification-Token': this.antiForgeryToken });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post('Account/Login', sendData, options).subscribe(function (data) {
                        setTimeout(function () {
                            console.log('in timeout');
                            _this.router.navigate(['Home']);
                            console.log('after route');
                        }, 10);
                    }, function (err) {
                        _this.errorMessage = "Login does not match. Please try again.";
                    });
                    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    //this.http.post('api/Tests', JSON.stringify(data), {headers: this.forgeryHeader}).subscribe();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        templateUrl: 'app/login/login.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
