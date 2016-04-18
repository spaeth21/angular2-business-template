import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';

import {PanelHeaderComponent, PanelBodyComponent} from '../../shared/index';

@Component({
    selector: 'ibp-client',
    templateUrl: 'app/create/client/client.component.html',
    directives: [PanelBodyComponent, PanelHeaderComponent]
})



export class ClientComponent implements OnInit {

    clientForm: ControlGroup;

    constructor(public fb: FormBuilder) {
        
    }

    ngOnInit() {
        this.clientForm = this.fb.group({
            customerName: [null, Validators.compose([Validators.required])],
            phone: [null, Validators.compose([Validators.required])],
            address: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required])],
            city: [null, Validators.compose([Validators.required])],
            state: [null, Validators.compose([Validators.required])],
            zip: [null, Validators.compose([Validators.required])]
        });
    }

    onFocusElement(event, el) {
        el.focus();
    }
}