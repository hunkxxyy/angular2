/*import {Injectable} from "angular2/core";
itt megh�vunk megy angular classt �s hozz�rendelj�k
a CONTACTS cost-ot a mock-contact f�jlb�l*/
import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";


@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}