/*Újmcontact felvétele,
 1. adj az inputokna egy variblet a # taggel

 2. aktiváld a õproviderst
 3. iNDÍTSD EL AZ ESEMÉNYT
 a #first az az egész objektum ezért csak a valuet-postázzuk
 <button (click)="onAddContact(onAddContact(first.value, last.value, email.value))">Create new cobtact</button>
 4. DOLGOZD FEL!
 a lettel hozol létere objectum instancet
 let contact: Contact={
 firstName :first,
 lastName: last,
 email : email

 };

 private var=_contactService
 constructor(private _contactService:ContactService){};
 majd inset
 onAddContact(){
 const dummyContect= {firstName: "eeeeeChris", lastName: "eeeeRaches", email: "ceeeehris@gmail.com"};
 this._contactService.insertContact(dummyContect);
 }
 5. A router navigálás
 a constructorba hivjuk meg a roter instancet
 constructor(private _contactService:ContactService, private _router:Router){};
 és a navigálásban ebben az esetben a name paraméterre hivatkozva hívjuk meg az utat
 this._router.navigate(['Contacts'])

 egy érdekesslg a routert nem kellettt meghivni mint providers, azért mert már megvolt hívví globalisana  a  boots.ts-ben
 bootstrap(AppComponent,[ROUTER_PROVIDERS]);

 */

/*
 OnInit protocol meghívása a core-bol akkkor fut le mikor betöltõdik az oldal
 ez implntálni krll  classexportba
 majd meghívni az onInt methodot, függvény létrehozása ctrl+i
 */
import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from "./contact";
import {Router} from  'angular2/router';
import {RouteParams} from  'angular2/router';
import {OnInit} from 'angular2/core';


@Component({


    template: `

<form #myForm="ngForm"  (ngSubmit)="onSubmit()">
      <div class="hunk" >
         <label for="first-name" >First name:</label>
         <input type="text" id="firstName"
          ngControl="firstName"
          [(ngModel)]="newContact.firstName"
          required
          #firstName="ngForm">
          <span *ngIf="!firstName.valid">NotValid</span>
       </div>
       <div>
        <label for="last-name">Last name:</label>
        <input type="text" id="lastName"
        ngControl="lastName"
        [(ngModel)]="newContact.lastName"
          required>
       </div>
       <div>
            <label for="phone"> phone</label>
               <input  type="text" id="phone"
               ngControl="phone"
               [(ngModel)]="newContact.phone"
          required>
       </div>
        <div>
             <label for="email">email</label>
            <input type="text" id="email"
            ngControl="email"
            [(ngModel)]="newContact.email"
          required>
       </div>
       <button type="submit" [disabled]="!myForm.form.valid">Create new cobtact</button>



      </form>
    `,
    providers: [ContactService],
    styles:[`
    labe{
        display:inline-block;
        widh:140px;
        background-color:green;

    }
    input{
    width:350px;
    }
    .ng-invalid{
        border:1px solid red;

    }
    `]

})
export class NewContactComponent implements OnInit {
    public pastedLastName = '';
    newContact:Contact;
    constructor(private _contactService:ContactService, private _router:Router, private _routeParams:RouteParams) {
    }

;

    onSubmit(){
       this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts'])
    }
    ngOnInit():any {
        this.newContact ={
            firstName:'',
            lastName: this._routeParams.get('lastName'),
            email:'',
            phone:''
        }
    }
}