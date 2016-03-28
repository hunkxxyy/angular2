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
import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from "./contact";
import {Router} from  'angular2/router';
@Component({


    template: `
Create a new comtact
<div>
      <div class="hunk">
         <label for="first-name" >First name:</label>
         <input type="text" id="firstName" #first>
       </div>
       <div>
        <label for="last-name">Last name:</label>
        <input type="text" id="lastName" #last>
       </div>
       <div>
            <label for="phone"> phone</label>
               <input  type="text" id="phone" #phone>
       </div>
        <div>
             <label for="email">email</label>
            <input type="text" id="email" #email>
       </div>
       <button (click)="onAddContact(first.value, last.value, email.value, phone.value)">Create new cobtact</button>



      </div>
    `,
    providers:[ContactService],

})
export class NewContactComponent {
    constructor(private _contactService:ContactService, private _router:Router){};
    onAddContact(first, last, email,phone){
      let contact: Contact={
          firstName :first,
          lastName: last,
          email : email,
          phone: phone

      };
      this._contactService.insertContact(contact);
      this._router.navigate(['Contacts'])
    }

}