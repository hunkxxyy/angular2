/*import {Injectable} from "angular2/core";
itt meghívunk megy angular classt és hozzárendeljük
a CONTACTS cost-ot a mock-contact fájlból*/
import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";


@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}