/*
3 fájlt imprtál
1. import {ContactService} from "./contact.service";
a comp headerbe betölti mint provider
    providers:[ContactService],
majd az objektumban a construkorban elkészít rola egy instanct-t
ami a következõ _contactService (private _contactService)
      constructor (private _contactService:ContactService){}
és megcsinál egy hívást
     getContacts(){
     this._contactService.getContacts().then(
        A contacts egy class tipus mely inportalva lett
        (contacts:Contact[] )=>this.contacts=contacts);
     }

2.import {Contact} from "./contact";
Ez az osztály amit használunk

3. import {OnInit} from 'angular2/core';
Szerintem ez egy ilyen call back function akkor fut le ha visszajött a válaszgt
*/
import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from 'angular2/core';
@Component({
    selector:"contact-list",
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
         (click)="onSelect(contact)"
      [class.clicked]="selectedContact==contact" >
      {{contact.lastName}} {{contact.firstName}}

         </li>
    </ul>
 <contact [contact]="selectedContact"></contact>

    `,

    directives:[ContactComponent],
    providers:[ContactService],
    styleUrls: ["../src/css/contact-list.css"]
})
export class ContactListComponent implements OnInit{
    public contacts:Contact[];

    public selectedContact = {};
    /*private _contactService: ContactService;
    constructor (contactService: ContactService ){
        this._contactService=ContactService;

    }*/
    /*tömörebb*/
    constructor (private _contactService:ContactService){}
    public onSelect(contact) {
        console.log(contact);
        this.selectedContact = contact;

    }
    getContacts(){
        this._contactService.getContacts().then((contacts:Contact[] )=>this.contacts=contacts);
    }
    ngOnInit():any{
        this.getContacts();
    }
}