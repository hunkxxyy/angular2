import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";

@Component({
    selector:"contact-list",
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
         (click)="onSelect(contact)"
      [class.clicked]="selectedContact===contact" >
      {{contact.lastName}} {{contact.firstName}}

         </li>
    </ul>
 <contact [contact]="selectedContact"></contact>

    `,

    directives:[ContactComponent],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent{
    public contacts =
        [
            {firstName: "Max", lastName: "Smith", email: "max@gmail.com"},
            {firstName: "Chris", lastName: "Raches", email: "chris@gmail.com"},
            {firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com"},
            {firstName: "John", lastName: "Doe", email: "john@gmail.com"},
        ];
    public selectedContact = {};

    public onSelect(contact) {
        this.selectedContact = contact;
    }
}