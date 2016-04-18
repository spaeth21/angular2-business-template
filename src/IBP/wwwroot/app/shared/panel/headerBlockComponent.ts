import {Component, Input, OnInit, ViewEncapsulation} from 'angular2/core';


@Component({
    selector: 'panel-header',
    templateUrl: 'app/shared/panel/headerBlockComponent.html',
    styleUrls: ['app/shared/panel/headerBlock.css']
})


export class PanelHeaderComponent implements OnInit {
    @Input() mainTitle: string;
    @Input() secondaryTitle: string;
    @Input() backgroundColor: string;
    @Input() textMainColor: string;
    @Input() textSecondaryColor: string;
    ngOnInit() {
        
    }
}