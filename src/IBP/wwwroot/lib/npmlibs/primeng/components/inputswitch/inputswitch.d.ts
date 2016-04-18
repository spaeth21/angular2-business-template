import { ElementRef, AfterViewInit, OnDestroy, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
export declare class InputSwitch implements AfterViewInit, OnDestroy, OnChanges {
    private el;
    onLabel: string;
    offLabel: string;
    style: string;
    styleClass: string;
    onChange: EventEmitter<any>;
    value: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    initialized: boolean;
    inputSwitchElement: any;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
