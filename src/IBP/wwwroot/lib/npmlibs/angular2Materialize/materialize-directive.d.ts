import { ElementRef, DoCheck, AfterViewInit } from 'angular2/core';
export declare class MaterializeDirective implements AfterViewInit, DoCheck {
    private _el;
    private _params;
    private _functionName;
    private previousValue;
    private changeListenerShouldBeAdded;
    constructor(_el: ElementRef);
    materializeParams: any;
    materialize: string;
    ngAfterViewInit(): void;
    ngDoCheck(): boolean;
    private performElementUpdates();
    private performLocalElementUpdates();
    private isSelect();
    private isDatePicker();
    private enableDPButtons();
}
