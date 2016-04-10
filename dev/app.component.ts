import {Component} from 'angular2/core';
import {Comp1Component} from './comp1.component';


@Component({
    selector: 'my-app',
    template: `
    <comp-1></comp-1>

    `,
    directives:[Comp1Component]



})
export class AppComponent {


}