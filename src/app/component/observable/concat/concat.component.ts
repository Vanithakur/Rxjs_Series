import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    const Techsource = interval(1000).pipe(map(data => 'Tech Video #'+ (data+1)),take(5));
    const Comedysource = interval(1000).pipe(map(data => 'Comedy Video #'+ (data+1)),take(10));
    const Newssource = interval(1000).pipe(map(data => 'News Video #'+ (data+1)),take(3));
     
    const finalObs = concat(Techsource, Comedysource, Newssource);
    finalObs.subscribe(res => {
      console.log(res);
      this.formevent.print(res, 'eleContainer');
    });


  }

}
