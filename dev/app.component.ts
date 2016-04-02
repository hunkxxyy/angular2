/*
a rout elemei
4. import {ROUTER_DIRECTIVES} from  'angular2/router'; //a deirectivesbe behivni
5. import {RouteConfig} from  'angular2/router'; //a @RouteConfig meg�rni

*/
import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";
import {DataBindingComponent} from "./BINDING/databinding.component";

import {ROUTER_DIRECTIVES} from  'angular2/router';
import {RouteConfig} from  'angular2/router';

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav>



             <a [routerLink]="['BINDING']">BINDING</a> |
        </nav>
    </header>
    <div class="main">
    <router-outlet></router-outlet>
    </div>
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES]

})
@RouteConfig([

    {
        path: '/BINDING',
        name: 'BINDING',
        component: DataBindingComponent
    }

])
export class AppComponent {


}
