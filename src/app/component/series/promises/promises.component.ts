import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
 promiseval:any;
  constructor() { }

  ngOnInit(): void {
    let LapTop = new Promise((resolve,reject)=>{
      if(this.DellAvailable()){
        return setTimeout(()=>{
          resolve("dell is purchased");
        },3000)
      
      }else if(this.HpAvailable()){
        return setTimeout(()=>{
          resolve("hp is available");
        },3000)
      }else{
        return setTimeout(()=>{
          reject("laptop is not available");

        },3000)
      }
   
    });
    LapTop.then(res=>{
      console.log(res);
      this.promiseval = res;
    }).catch(res=>{
      console.log(res);
      this.promiseval = res;
      
    })
  }
  DellAvailable(){
     return false;
  }
  HpAvailable(){
     return false;
  }

}
