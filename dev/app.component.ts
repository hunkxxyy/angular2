/*eze egy component váza
 Minden cmp elején importálni kell ezt import {Component} from 'angular2/core';
 2 fő részből áll
 @Component és export class
     a component a régi diective részei
     selector: 'my-app',// ez element a html kódban <my-app>Loading...</my-app>
     template: //a html template
     styleUrls:["../src/css/app.css"] //a css
 export class AppComponent {}
 a comphoz tartozó objejktum,

 Nyelvi elemek:
     bind: (click)
    [class.clicked]
    *ngIf

 */
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
