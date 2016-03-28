/*import {Injectable} from "angular2/core";
itt megh�vunk megy angular classt �s hozz�rendelj�k
a CONTACTS cost-ot a mock-contact f�jlb�l*/

import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";


@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
    insertContact(contact: Contact){
        return Promise.resolve(CONTACTS).then((contacts:Contact[])=>contacts.push(contact));

    }
}