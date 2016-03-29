/*
 <div>{{randomData | async}}</div>
 a synnc type azt jelenti, hogy várjon még megjön a cucc majd csak utánna jelenjen meg
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
    <div class="pipes">
    <h2>Date Pipe</h2>
        <div>
            {{date | date:'yMMMMEEEEd'}}
        </div>
        <h2>Numbr Pipe</h2>
        <div>{{1974.08 | number:'1.1-1'}}</div>
        <h2>Currency</h2>
        <div>{{15.99 | currency:'EUR':true:'1.4-4'}}</div>
        <h2>Stateful pipe</h2>
        <div>{{randomData | async}}</div>

    </div>
    </div>
    `,
    directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES]

})
@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactListComponent,
        useAsDefault: true
    },
    {
        path: '/newcontact',
        name: 'NewContact',
        component: NewContactComponent
    }


])
export class AppComponent {

    date = new Date();
    randomData = new Promise((resolve, reject)=> {
        setTimeout(()=>resolve('<b>Random</b>> data!'),1000);
});
}
