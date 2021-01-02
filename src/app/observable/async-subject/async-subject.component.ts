import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

// main point is we will get the last updated value
// if we put 2 values then only second value will be returned


  asyncVideoEmit33;

  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilitySer.async_VideoEmit22.subscribe( res =>  {
      this.asyncVideoEmit33  = res;
    })

  }


  onAddVideo22(video) {
    this.designUtilitySer.async_VideoEmit22.next(video);

  }

  onComplete22() {
    this.designUtilitySer.async_VideoEmit22.complete();
  }
}
