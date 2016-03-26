import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
      <h3 (click)="onSelect()"
      [class.clicked]="showDeitals===true"
      >{{contact.lastName}} {{contact.firstName}}</h3>
      <input [(ngModel)]="contact.firstName" type="text">
      <div *ngIf='showDeitals===true'> phone:{{contact.phone}}<br>
      email:{{contact.email}}</div>
    `,
    styleUrls:["../src/css/app.css"]
})
export class AppComponent {
    public contact = {
        firstName: 'István',
        lastName: 'Izsó',
        phone:'204383456',
        email:'hunk74@gmail.com'
    };
    public showDeitals=false;
    onSelect(){
        this.showDeitals=!this.showDeitals;

    }

}
