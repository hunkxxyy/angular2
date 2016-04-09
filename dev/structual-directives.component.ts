import {Component} from 'angular2/core';
import {UnlessDirective} from './unless.directive';

@Component({
    selector: 'my-structural-directives',
    template: `
    <section class="directive">
        <h2>*ngIf</h2>
        <div>
        Enter a number higher than ten
        <br/>
        <input type="text" #number (keyup)="0">
        <div *ngIf="number.value>10">
            nuber is greater than 10
        </div>
        </div>
    </section>
    <section class="directive">
        <h2>*ngFor</h2>
        <ul>
            <li *ngFor="#item of list, #i=index">{{item}} {{i}}</li>
        </ul>
    </section>
    <section class="directive">
        <h2>[ngSwitch]</h2>
        <div>
        Enter Red Blue or green
        <br/>
        <input type="text" #color (keyup)="0" />

        </div>
        <div [ngSwitch]="color.value">
            <template [ngSwitchWhen]="'red'"> <span style="color: red">Color is red</span> </template>
            <template [ngSwitchWhen]="'blue'"> <span style="color: blue">Color is blue</span> </template>
            <template [ngSwitchWhen]="'green'"> <span style="color: green">Color is green</span> </template>
            <template ngSwitchDefault="'red'"> <span>Deafault</span> </template>
        </div>
    </section>
      <section class="directive">
        <h2>Sajat directive *myUnless</h2>
        Enter true or false
        <input type="text" #condition (keyup)="0"/>
        <div *myUnless="condition.value!='false'">
            only show if 'false'was entered
        </div>
    </section>

    `,
    directives:[UnlessDirective]
})
export class StructuralDirectives {
    list = ['Aple', 'Milk', 'Brad'];


}