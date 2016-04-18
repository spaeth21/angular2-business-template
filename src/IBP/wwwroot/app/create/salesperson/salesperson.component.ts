import {Component, OnInit} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';

import {PanelHeaderComponent, PanelBodyComponent} from '../../shared/index';


@Component({
    selector: 'ibp-salesperson',
    templateUrl: 'app/create/salesperson/salesperson.component.html',
    directives: [PanelHeaderComponent, PanelBodyComponent]
})


export class SalesPersonComponent implements OnInit{

    constructor(public fb: FormBuilder) { }

    onFocusElement(event, el) {
        el.focus();
    }

    ngOnInit() {
    }
}