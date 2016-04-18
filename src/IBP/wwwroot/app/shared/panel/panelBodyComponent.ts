import {Component, Input} from 'angular2/core';


@Component({
    selector: 'panel-body',
    templateUrl: 'app/shared/panel/panelBodyComponent.html',
    styleUrls: ['app/shared/panel/panelBody.css']

})

export class PanelBodyComponent {
    @Input() mainDescription: string;
    @Input() icon: string;
    @Input() backgroundColor: string;
    @Input() textColor: string;
    @Input() panelSize: string;
}