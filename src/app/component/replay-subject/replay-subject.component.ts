import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ReplaySubjectService } from 'src/app/Service/replay_subject.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
User1List:any = [
  'Angular1',
  'Angular2'
];
User2List:any = [];
User3List:any = [];

subscribeMode2:boolean = false;
subscribeMode3:boolean = false;

subscribe2:any;
subscribe3:any;

methodInterval:boolean = false;
intervalSubscribe:any;

  constructor(private replayService: ReplaySubjectService) { }

  ngOnInit(): void {
    this.replayService.videoEmit.subscribe(res=>{
     this.User1List.push(res);
      
    })
  }
  onAddvideo(video:any){
    console.log(video.value);
    this.replayService.videoEmit.next(video.value);
  }
  onChangeMode2(){
    if(this.subscribeMode2){
      this.subscribe2.unsubscribe();
    }
    else{
      this.subscribe2 = this.replayService.videoEmit.subscribe(res=>{
        this.User2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2
  }
  onChangeMode3(){
    if(this.subscribeMode3){
      this.subscribe3.unsubscribe();
    }
    else{
      this.subscribe3 = this.replayService.videoEmit.subscribe(res=>{
        this.User3List.push(res)
      })
    }
    
    this.subscribeMode3 = !this.subscribeMode3
  }
  toggleMethod(){
    const boardcast = interval(2000);
    if(!this.methodInterval){
      this.intervalSubscribe =  boardcast.subscribe(res=>{
        this.replayService.videoEmit.next('Video'+ res);
      });
    }else{
      this.intervalSubscribe.unsubscribe();
    }
   
    this.methodInterval = !this.methodInterval;
  }
}
