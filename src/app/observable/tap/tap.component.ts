import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  myColor: string = '';
  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {

    const source22 = interval(1000);

// Example -1
// in the pipe() we will get the index nr of the Array, so we are using doing unsubscribe()
// on that index nr,

    const Arr = ['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'fff', 'gggg'];

    let obsSub: Subscription;

    obsSub = source22.pipe( tap( res => {  if( res == 4)  obsSub.unsubscribe() }),
                            map(res => Arr[res] ) )
                     .subscribe( res => {
                             this.designUtilitySer.print22(res, 'elContainer11');
            });
//-----------------------------------------------------------------------------

// Example -2

    const Color22 = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Orange'];

    let obsSub22: Subscription;

    obsSub22 = source22.pipe(
                           tap( res => {
                              this.myColor = Color22[res];
                             if( res == 6)  obsSub.unsubscribe()  }),
                            map(res => Color22[res] ) )
                     .subscribe( res => {
                             this.designUtilitySer.print22(res, 'elContainer22');
      });

//-----------------------------------------------------------------------------

// Example -3






  }
}
