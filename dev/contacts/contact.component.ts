import {Component} from 'angular2/core';
@Component({
    selector: "contact",

    template: `
  <div>
      <div class="hunk">
         <label for="first-name" >First name:</label>
         <input [(ngModel)]="contact.firstName" type="text" id="firstName">
       </div>
       <div>
        <label for="last-name">Last name:</label>
        <input [(ngModel)]="contact.lastName" type="text" id="lastName">
       </div>
       <div>
            <label for="phone"> phone</label>
               <input [(ngModel)]="contact.phone" type="text" id="phone">
       </div>
        <div>
             <label for="email">email</label>
            <input [(ngModel)]="contact.email" type="text" id="email">
       </div>



      </div>

    `,
    styles: [`
    label:{
    width:250px;
    display:none;
    color:red;
    }
    .hunk{background-color:red}
    input{
    width:250px;
    }

    `],
    inputs: ["contact"],

})
export class ContactComponent {
    public contact = {}

}