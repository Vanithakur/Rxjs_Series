import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)
export class ReplaySubjectService{
    videoEmit = new ReplaySubject<string>(2,5000);
    constructor(){

    }

}