import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1_List  = ['Angular-1', 'Angular-2'];
  user2_List  = [];
  user3_List  = [];

  // Subscribe-Modes
  subscribe_Mode2: boolean = false;
  subscribe_Mode3: boolean = false;

  //Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;
  intervalSubscription22: Subscription;

  // Toggle properties
  methodInterval22: boolean = false;


  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilitySer.videoEmit22.subscribe( res => {
      this.user1_List.push(res);
    })
  }

  onAddVideo22(video22) {
     this.designUtilitySer.videoEmit22.next(video22);
  }

  user2_Subscribe() {
    if(this.subscribe_Mode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtilitySer.videoEmit22.subscribe(res => {
        this.user2_List.push(res);
      });
    }

    this.subscribe_Mode2 = !this.subscribe_Mode2;
  }
  user3_Subscribe() {
    if(this.subscribe_Mode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtilitySer.videoEmit22.subscribe(res => {
        this.user3_List.push(res);
      });
    }
    this.subscribe_Mode3 = !this.subscribe_Mode3;
  }

  toggleMethod() {
    const broadcastVideo22 = interval(1000);

    if(!this.methodInterval22) {
      this.intervalSubscription22 = broadcastVideo22.subscribe(res => {
        this.designUtilitySer.videoEmit22.next('Video' + res);
      });
    } else {
      this.intervalSubscription22.unsubscribe();
    }
    this.methodInterval22 =!this.methodInterval22;
  }
}
