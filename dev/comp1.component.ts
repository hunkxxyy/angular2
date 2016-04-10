import {Component} from 'angular2/core';
import {LoggingService} from './services/logging.service';

@Component({
    selector: 'comp-1',
    template: `
      <input type="text" #message>
      <button (click)="onLog(message.value)">Send</button>
    `,
    styleUrls: ["../src/css/app.css"],
    providers:[LoggingService]
})
export class Comp1Component {
    constructor(private _loggingService: LoggingService){};
    onLog(message:string) {
        this._loggingService.log(message);
    }
}