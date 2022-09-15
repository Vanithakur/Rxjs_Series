import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
sub1:Subscription;
sub2:Subscription;

msg1:any;
msg2:any;

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    const broadcastVideo = interval(1000);

    //Example - 01
    this.sub1 = broadcastVideo.pipe(
      map(res=>
      "video "+ (res + 1 )       
      )
    )
    .subscribe(response=>{
      // console.log(response);
      this.msg1 = response;
      
    })
    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000);
   
    //Example - 02

    this.sub2 = broadcastVideo.pipe(
      map(res => res*5 + 5))
    .subscribe(Response=>{
      // console.log(Response);
      this.msg2 = Response;
      
    })
    setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000);
   
    //Example - 03
    
    const members = [
      {id: '09', name: 'Shivani Thakur'},
      {id: '14', name: 'Nishi Karve'},
      {id: '28', name: 'Sonu Bagdi'},
      {id: '21', name: 'Roshni Tiwari'}
    ];
    
    let memObs = from(members);
    memObs.pipe(map(data => data.name))
    .subscribe(res=>{
      // console.log(res);
      this.formevent.print(res, 'eleContainer');
    });

  }

}
