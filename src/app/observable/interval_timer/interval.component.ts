import { Component, OnInit } from '@angular/core';
import {interval, Subscription, timer} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription: Subscription;
  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {
  //  const broadCastVideos = interval(1000);
    const broadCastVideos = timer(1000);

  this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
    this.designUtilitySer.print22(this.obsMsg, 'elContainer22');
    this.designUtilitySer.print22(this.obsMsg, 'elContainer33');
    this.designUtilitySer.print22(this.obsMsg, 'elContainer44');

      if(res >=5) { this.videoSubscription.unsubscribe()  }
     })
    }

}


/*

timer(delay time, interval)

timer operator takes 2 arguments
1  delay time, means after how much time this timer should began
2  interval   ,meany  the interval between execution

 */
