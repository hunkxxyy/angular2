/*eze egy component váza
 Minden cmp elején importálni kell ezt import {Component} from 'angular2/core';
 2 fő részből áll
 @Component és export class
     a component a régi diective részei
     selector: 'my-app',// ez element a html kódban <my-app>Loading...</my-app>
     template: //a html template
     styleUrls:["../src/css/app.css"] //a css
 export class AppComponent {}
 a comphoz tartozó objejktum,

 Nyelvi elemek:
     bind: (click)
    [class.clicked]
    *ngIf

 */
import {Component} from 'angular2/core';
import {ShoppingList} from './shopping-list/shoppingList.component';


@Component({
    selector: 'my-app',
    template: `
    <header>
    <div class="brand">Shopping list</div>
    <div class="main">
        <shopping-list></shopping-list>
    </div>
    </header>
    `,
    directives:[ShoppingList]


})
export class AppComponent {


}