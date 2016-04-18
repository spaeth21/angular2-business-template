
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions, RequestMethod, Request, Response, URLSearchParams} from 'angular2/http';



//import * as rxjs from 'rxjs';

import {HomeComponent} from '../home/home.component';


@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})

export class LoginComponent {

    loginForm: ControlGroup;
    antiForgeryToken: string;
    errorMessage: string;
    forgeryHeader: Headers;
    options: RequestOptions;

    constructor(public router: Router, fb: FormBuilder, public http: Http) {
        //this.antiForgeryToken = document.getElementById('antiForgeryForm').children[0].attributes.getNamedItem('value').textContent;
        //this.forgeryHeader = new Headers([{ '__RequestVerificationToken': this.antiForgeryToken }]);
        //console.dir(this.forgeryHeader);
        //this.options = new RequestOptions({ headers: this.forgeryHeader });

        this.loginForm = fb.group({
            userName: [null, Validators.compose([Validators.required])],
            password: [null, Validators.compose([Validators.required]) ]
        })
    }


    login() {
        this.errorMessage = null;
        let data = { email: this.loginForm.controls['userName'].value, password: this.loginForm.controls['password'].value }
        let sendData = JSON.stringify(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('Account/Login', sendData, options).subscribe(data => {
            setTimeout(() => {
                console.log('in timeout');
                this.router.navigate(['Home']);
                console.log('after route');
            }, 10);
        }, err => {
            this.errorMessage = "Login does not match. Please try again.";
            });


















//let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //this.http.post('api/Tests', JSON.stringify(data), {headers: this.forgeryHeader}).subscribe();
        
    }

}
