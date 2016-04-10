import {Component, EventEmitter} from 'angular2/core';
import {listItemType} from './listItemType';


@Component({
    selector: 'shopping-list-item-component',
    template: `
      <div class="input">
        <label for="item-name">Name</label>
        <input type="text" id="item-name" [(ngModel)]="item.name"/>
      </div>
      <div class="input">
        <label for="item-amount">Name</label>
        <input type="text" id="item-amount" [(ngModel)]="item.amount" />
      </div>
      <button (click)="onDelete()">Delete Item</button>
    `,
    inputs:['item'],
    outputs:['removed']

})
export class ShoppingListtemComponent {
    item={name:'', amount:0};
    removed=new EventEmitter<listItemType>();
    onDelete(){
        this.removed.emit(this.item);
    }


}
