import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
techStatus:any;
techStatus2:any;
names:any;
nameStatus:any;
subObser:Subscription;
  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    // Example - 01 (Manual)
    const custObs1 = Observable.create((observer:any)=>{
      setTimeout(()=>{
        observer.next('Angular');

      },2000);
      setTimeout(()=>{
        observer.next('Html and Css');
       
      },4000);
      setTimeout(()=>{
        observer.next('Javascript');
 
      },6000);
      setTimeout(()=>{
        observer.next('JQuery');
        // observer.error(new Error('Limit Exceed'));
      },8000);
      setTimeout(()=>{
        observer.next('Python');       
        observer.complete();
      },10000);
    })
    custObs1.subscribe((res:any)=>{
    //  console.log(res);
     this.formevent.print(res, 'eleContain')
    },
    (err)=>{
      this.techStatus = 'error';
    },
    ()=>{
      this.techStatus = 'completed';
    });

    // Example - 02 (Custom Interval)
    const arr =['Angular', 'Html & Css', 'Javascript', 'Python'];
    const custObs2 = Observable.create(observer=>{
      let count = 0;
       setInterval(()=>{
        observer.next(arr[count]);
        if(count >= 3){
          observer.error('error created');
        }
        if(count >=5){
          observer.complete();
        }
        count++;

       },1000);
    })
    this.subObser = custObs2.subscribe(res=>{
      // console.log(res);
      this.formevent.print(res, 'eleContain2');
     } ,(err)=>{
      this.techStatus2 = 'error';
    },
    ()=>{
      this.techStatus2 = 'completed';
    });
    // Example - 03 (Random Names)
    
    const arr2 =['Shivani','Nishi', 'Sonu', 'Roshni', 'Thakur', 'Karve', 'Bagdi', 'Tiwari'];

    const custObs3 = Observable.create(observer=>{
      let count = 0;
       setInterval(()=>{
        observer.next(arr2[count]);
        if(count >= 3){
          observer.error('error created');
        }
        if(count >=7 ){
          observer.complete();
        }
        count++;

       },1000);
    });
    custObs3.subscribe(res=>{
      console.log(res);
      this.names = res;
    } ,(err)=>{
      this.nameStatus = 'error';
    },
    ()=>{
      this.nameStatus = 'completed';
    });
  }


  ngOnDestroy(): void {
    this.subObser.unsubscribe();
  }

}
