
import {Component} from 'angular2/core';
import {AttributeDirectives} from './attribute-directives.component';
import {StructuralDirectives} from './structual-directives.component';

@Component({
    selector: 'my-app',
    template: `
<my-attribute-directives></my-attribute-directives>
<br/><br/>
<h1>Structual directives</h1>
<my-structural-directives></my-structural-directives>
    `,
    directives:[AttributeDirectives,StructuralDirectives ]


})
export class AppComponent {


}