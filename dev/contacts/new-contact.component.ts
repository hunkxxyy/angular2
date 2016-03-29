/*
 1 integrálás
 import {ControlGroup} from 'angular2/common';
 import {FormBuilder} from 'angular2/common';
 contollerben:
 myForm:ControlGroup;
 constructor(private _formBuilder:FormBuilder)
2. formbilter építése
 szükséges objectek:
    import {Validators} from 'angular2/common';
 controllerben:
 ngOnInit():any {
 this.myForm = this._formBuilder.group({
 'firstName': ['',Validators.required],
 'lastName': [],
 'email': [],
 'phone': []
 });
 }
 3.
for attributes
 <form
 [ngFormModel]="myForm"
 (ngSubmit)="onSubmit(myForm.value)"
 >
 input atributes
 [ngFormControl] = "myForm.controls['firstName']"

 validálás:
 <button type="submit" [disabled]="!myForm.valid" >Create new cobtact</button>

 ! a szögletes zárójel jelzi a templatben hogy bindig
 */

import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from "./contact";
import {Router} from  'angular2/router';
import {RouteParams} from  'angular2/router';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';


@Component({


    template: `


<form
    [ngFormModel]="myForm"
    (ngSubmit)="onSubmit(myForm.value)"
    >
      <div class="hunk" >
         <label for="first-name" >First name:</label>
         <input type="text" id="first-name"
        [ngFormControl] = "myForm.controls['firstName']"
        #firstNamex="ngForm"
         >
        <span *ngIf="!firstNamex.valid">Not Valid</span>
       </div>
       <div>
         <label for="last-name">Last name:</label>
         <input type="text" id="last-name"
         [ngFormControl] = "myForm.controls['lastName']"

         >
       </div>
       <div>
            <label for="phone"> phone</label>
            <input  type="text" id="phone"
      [ngFormControl] = "myForm.controls['phone']"

         >
        </div>
        <div>
           <label for="email">email</label>
           <input type="text" id="email"
      [ngFormControl] = "myForm.controls['email']"

         >
       </div>
       <button type="submit" [disabled]="!myForm.valid" >Create new contact</button>
      </form>
    `,
    providers: [ContactService],
    styles: [`
    label{
        display:inline-block;
        width:140px;



    }
    input{
    width:250px;
    }
    .ng-invalid{
        border:3px solid red;

    }
    `]

})
export class NewContactComponent implements OnInit {
    myForm:ControlGroup;
  constructor(private _contactService:ContactService,
                private _router:Router,
                private _routeParams:RouteParams,
                private _formBuilder:FormBuilder) {
    };
    onSubmit(value) {
        console.log(value);
        this._contactService.insertContact(value);
        this._router.navigate(['Contacts'])
    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'firstName': ['',Validators.required],
            'lastName': [this._routeParams.get('lastName'),Validators.required],
            'email': ['',Validators.required],
            'phone': ['',Validators.required],
        });
    }
}