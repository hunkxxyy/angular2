import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shoppingListNewItem.component';

@Component({
    selector: 'shopping-list',
    template: `
     <section><h3>New Item</h3> <br>
         <shopping-list-new-item-component (itemAdded)="onItemAdded($event)"></shopping-list-new-item-component>
         </section>
     <section>
     <h3>List</h3>
     <div class="list">
        <ul>
        <li *ngFor="#ListItem of listItems"> {{ListItem.name}} ({{ListItem.amount}})
        </li>
        </ul>
     </div>
     </section>
     <section>
        edit Items
     </section>
    `,
    directives:[ShoppingListNewItemComponent]
})
export class ShoppingList {
    listItems=new Array<{name:string, amount:number}>();
    onItemAdded(item:{name:string, amount:number}){
       this.listItems.push({name:item.name, amount:item.amount});
    }

}