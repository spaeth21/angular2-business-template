import { EventEmitter } from 'angular2/core';
import { Message } from '../api/message';
export declare class Messages {
    value: Message[];
    valueChange: EventEmitter<any>;
    closable: boolean;
    hasMessages(): boolean;
    getSeverityClass(): string;
    clear(event: any): void;
}
