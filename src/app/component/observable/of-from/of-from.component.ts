import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    const Obs1 = of('Shivani','Nishi','Sonu');
    Obs1.subscribe(res=>{
      this.formevent.print(res,'eleAppend');
      
    });
      //From Array
      const Obs2 = from(['Shivani','Nishi','Sonu']);
      Obs2.subscribe(res=>{
        // console.log(res);
        this.formevent.print(res,'eleAppend2');        
      });
      //Promise
      const promise = new Promise(resolve=>{
        setTimeout(() => {
          resolve("Promise is resolve");
        }, 3000);
        
      });
      const Obs3 = from(promise);
      Obs3.subscribe(res=>{
        console.log(res);
        this.formevent.print(res,'eleAppend3');        
      });
      // From string
      const Obs4 = from('Welcome to Rxjs Series');
      Obs4.subscribe(res=>{
        console.log(res);
        this.formevent.print(res,'eleAppend4');        
      });
  }
}
