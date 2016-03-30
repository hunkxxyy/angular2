import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';


@Component({
    selector: 'http-test',
    template: `
    <button> Test Get</button>
      <p>Output:{{getData}}</p>
    <button (click)="getDatabase()">GET DATABASE billcity</button>
    <p>Output:{{getData}}</p>
    `,
    providers:[HTTPTestService]
})
export class HTTPTestComponent {
constructor (private _httpService:HTTPTestService){};
    getData:string;

    getDatabase(){

        this._httpService.getDatabase()
        .subscribe(
            data=>this.getData=JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('Finshed')
        )

    }

}