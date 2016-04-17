import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from './template-drivers.component';


@Component({
    selector: 'my-app',
    template: `
    <template-driven></template-driven>
    `,

    styleUrls:["../src/css/app.css"],
    directives:[TemplateDrivenFormComponent]
})
export class AppComponent {

}
