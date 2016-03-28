/*�jmcontact felv�tele,
 1. adj az inputokna egy variblet a # taggel

 2. aktiv�ld a �providerst
 3. iND�TSD EL AZ ESEM�NYT
 a #first az az eg�sz objektum ez�rt csak a valuet-post�zzuk
 <button (click)="onAddContact(onAddContact(first.value, last.value, email.value))">Create new cobtact</button>
 4. DOLGOZD FEL!
 a lettel hozol l�tere objectum instancet
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
 5. A router navig�l�s
 a constructorba hivjuk meg a roter instancet
 constructor(private _contactService:ContactService, private _router:Router){};
 �s a navig�l�sban ebben az esetben a name param�terre hivatkozva h�vjuk meg az utat
 this._router.navigate(['Contacts'])

 egy �rdekesslg a routert nem kellettt meghivni mint providers, az�rt mert m�r megvolt h�vv� globalisana  a  boots.ts-ben
 bootstrap(AppComponent,[ROUTER_PROVIDERS]);

 */

/*
 OnInit protocol megh�v�sa a core-bol akkkor fut le mikor bet�lt�dik az oldal
 ez implnt�lni krll  classexportba
 majd megh�vni az onInt methodot, f�ggv�ny l�trehoz�sa ctrl+i
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