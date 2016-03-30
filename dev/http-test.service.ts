import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Headers} from 'angular2/http';
import 'rxjs/Rx';
@Injectable()
export class HTTPTestService{
    constructor(private _http:Http){}
    getUser(){
        return this._http.get("http://192.168.1.99:8085/api/")
            .map(res=>res.json());
    };

    getDatabase(){
        var json = JSON.stringify({
            name: 'teszt@alma.hu',
            password: 'zeusasp123'

        });
        var params =  json;
        console.log(params);
        var header = new Headers();
        header.append('Content-Type', 'application/json');

        return this._http.post("http://52.28.112.29:8085/api/getDatabase/",params, {
            headers:header
        })
            .map(res => res.json());


    };
    postJson(){
    var json = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });
    var params = 'data=' + json;
    var header = new Headers();
    header.append('Content-type', 'application/x-www-form-urlencoded');

    return this._http.post("http://jsonplaceholder.typicode.com/posts",params, {
        headers:header
    })
        .map(res => res.json());
};

    getUsersByPromise(){
        return this._http.get("http://jsonplaceholder.typicode.com/users")
            .toPromise()
            .then(res=>res.json());
    };

}