
import {Component, enableProdMode} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login';



@Component({
    selector: 'ibp-app',
    template: ' <router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home/...', as: 'Home', component: HomeComponent },
    { path: '/login', as: 'Login', component: LoginComponent, useAsDefault:true }
])


export class AppComponent {
    constructor(public router: Router) {

    }


}
