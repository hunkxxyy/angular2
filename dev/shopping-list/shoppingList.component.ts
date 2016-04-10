import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shoppingListNewItem.component';
import {listItemType} from './listItemType';
import {ShoppingListtemComponent} from './shoppingListItem.component';

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
        <li *ngFor="#ListItem of listItems" (click)="onSelect(ListItem)"> {{ListItem.name}} ({{ListItem.amount}})
        </li>
        </ul>
     </div>
     </section>
     <section *ngIf="selectedItem!=null">
        <shopping-list-item-component
        [item]="selectedItem"
        (removed)="onRemoved($event)"
        ></shopping-list-item-component>
     </section>
    `,
    directives:[ShoppingListNewItemComponent,ShoppingListtemComponent ]
})
export class ShoppingList {
    listItems=new Array<listItemType>();
    selectedItem:listItemType;
    onItemAdded(item:listItemType){
       this.listItems.push({name:item.name, amount:item.amount});
    }
    onSelect(Item:listItemType){

        this.selectedItem=Item;

    }
    onRemoved(item : listItemType){
        this.listItems.splice(this.listItems.indexOf(item),1);
        this.selectedItem=null;
    }
}