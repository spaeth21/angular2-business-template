import {Component, OnInit, ChangeDetectionStrategy } from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';

import {PanelHeaderComponent, PanelBodyComponent} from '../shared/index';


@Component({
    selector: 'ibp-create',
    templateUrl: 'app/create/create.component.html',
    directives: [PanelHeaderComponent, PanelBodyComponent],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class CreateComponent implements OnInit {

    customerForm: ControlGroup;
    jobForm: ControlGroup;
    constructor(fb: FormBuilder) {
       
        this.customerForm = fb.group({
            customerName: [null, Validators.compose([Validators.required])],
            phone: [null, Validators.compose([Validators.required])],
            address: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required])],
            city: [null, Validators.compose([Validators.required])],
            state: [null, Validators.compose([Validators.required])],
            zip: [null, Validators.compose([Validators.required])]
        });
        this.jobForm = fb.group({
            jobName: [null, Validators.compose([Validators.required])],
            phone: [null, Validators.compose([Validators.required])],
            address: [null, Validators.compose([Validators.required])],
            built: [null, Validators.compose([Validators.required])],
            city: [null, Validators.compose([Validators.required])],
            state: [null, Validators.compose([Validators.required])],
            zip: [null, Validators.compose([Validators.required])],
            issues: [null, Validators.compose([Validators.required])],
            referral: [null, Validators.compose([Validators.required])],
            status: [null, Validators.compose([Validators.required])]
        });
    }

    onFocusElement(event, el) {
        el.focus();
    }

    ngOnInit() {
    }
}