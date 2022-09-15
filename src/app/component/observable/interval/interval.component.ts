import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
obsMsg:any;
videoSubscribe:any;

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
      //interval
    // const broadcastvideo = interval(2000);
    //timer(delay,interval)
    const broadcastvideo = timer(10000,1000);
    this.videoSubscribe = broadcastvideo.subscribe(response=>{
      console.log(response);
      this.obsMsg = 'Video '+response;
      this.formevent.print(this.obsMsg, 'AppendLi');
      this.formevent.print(this.obsMsg, 'AppendLi2');
      this.formevent.print(this.obsMsg, 'AppendLi3');

      if(response >= 50){
        this.videoSubscribe.unsubscribe();
      }
    })
  }

}
