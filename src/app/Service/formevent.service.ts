import { Injectable } from "@angular/core";
@Injectable(
    {
        providedIn:'root'
    }
)
export class FormEventService{

    constructor(){

    }
    print(val:any, containerId:any){
        let ele = document.createElement('li');
        ele.innerText = val;
        document.getElementById(containerId)?.appendChild(ele);
      }

}