import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';

import {PanelHeaderComponent, PanelBodyComponent} from '../../shared/index';

@Component({
    selector: 'ibp-job',
    templateUrl: 'app/create/job/job.component.html',
    directives: [PanelBodyComponent, PanelHeaderComponent]
})

export class JobComponent implements OnInit {

    jobForm: ControlGroup;

    constructor(public fb: FormBuilder) { }

    ngOnInit() {
        this.jobForm = this.fb.group({
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
}