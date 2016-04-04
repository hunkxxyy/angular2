import {Component} from 'angular2/core';
import {HighLightDirective} from './highlight.directive';

@Component({
    selector: 'my-attribute-directives',
    template: `
     <div [myHighLight]="'red'">
        highlite me Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto deserunt dignissimos earum maiores modi quidem ratione repellat. Accusantium culpa eius fuga labore natus quod rem ut. Delectus, error fugiat.
     </div>
     <br><br>
     <div [myHighLight]="'blue'">
        highlite me Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto deserunt dignissimos earum maiores modi quidem ratione repellat. Accusantium culpa eius fuga labore natus quod rem ut. Delectus, error fugiat.
     </div>
    `,
    directives:[HighLightDirective]
})
export class AttributeDirectives {



}