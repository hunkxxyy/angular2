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