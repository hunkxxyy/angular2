/*
Route param�ter �tad�sa:
 path: '/newcontact/:lastName',
*/
import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";

import {ROUTER_DIRECTIVES} from  'angular2/router';
import {RouteConfig} from  'angular2/router';
import {HTTPTestComponent} from  './http-test.component';

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav>

            <a [routerLink]="['Contacts']">Contact</a>
            <a [routerLink]="['NewContact']">New Contact</a>
        </nav>
    </header>
    <div class="main">
    <router-outlet></router-outlet>
    <http-test></http-test>
    </div>
    `,
    directives: [ContactListComponent,HTTPTestComponent, ROUTER_DIRECTIVES]

})
@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactListComponent,
        useAsDefault:true
    },
    {
        path: '/newcontact',
        name: 'NewContact',
        component: NewContactComponent
    }


])
export class AppComponent {


}
