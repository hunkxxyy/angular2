import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
         (click)="onSelect(contact)"
      [class.clicked]="showDeitals===true" >
      {{contact.lastName}} {{contact.firstName}}
         </li>
    </ul>

    <input [(ngModel)]="selectedContact.firstName" type="text">
      <div > phone:{{selectedContact.phone}}<br>
      email:{{selectedContact.email}}</div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
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
