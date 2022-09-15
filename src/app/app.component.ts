import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selected') selected:any;
  title = 'uxTrend';
  debounce_time:boolean = false;
  replay_subject:boolean = false;
  ListofButton:any=[
    'Debounce Time',
    'Replay Subject'
  ];
  onSelected(){
  for(let data of this.ListofButton){
     if(data[0]){
      this.debounce_time = true;
     }
     if(data[1]){
      this.replay_subject = true;
     }
  }
   
  }
}
