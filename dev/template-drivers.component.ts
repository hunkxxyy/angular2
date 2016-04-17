import {Component} from 'angular2/core';
@Component({
    selector: 'template-driven',
    template: `
    <h2>Sign-Up Form</h2>
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
          <div>
            <label for="mail">Mail:</label>
            <input ngControl="mail" type="text" id="mail" #mail="ngForm" required >
            <span *ngIf="!mail.valid">Not Valid</span>
          </div>
          <div>
            <label for="password">Password:</label>
            <input ngControl="password" type="text" id="password"  #password="ngForm" required >
              <span *ngIf="!password.valid">Not Valid</span>

          </div>
          <div>
            <label for="confirm-password">Pasword again:</label>
            <input ngControl="comfirm-password" type="text" id="confirm-password" #confirmPassword="ngForm"  required >
            <span *ngIf="!confirmPassword.valid">Not Valid</span>
          </div>
          <button [disabled]="!f.valid || password.value !== confirmPassword.value " type="submit">Submit</button>
      </form>
      <h2>You submited</h2>
      <div>mail:{{user.mail}}</div>
      <div>password:{{user.password}}</div>
    `,
    styleUrls:["../src/css/app.css"]
})
export class TemplateDrivenFormComponent {
    user={mail:'', password:''}
    onSubmit(form){
        this.user.mail=form.value['mail'];
        this.user.password=form.controls['password'].value;
        console.log(form.controls);
    }

}