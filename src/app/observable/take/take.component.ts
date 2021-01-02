import { Component, OnInit } from '@angular/core';
import {from, fromEvent, interval, timer} from 'rxjs';
import {map, take, takeLast, takeUntil} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert']
  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {
                        // converting Array data into stream with from()
                        // from() return Observable stream
    const nameSource22 = from(this.randomNames);

// Example -1     with take() operator we can take the data from
//                the Observable Streams
    nameSource22.pipe( take(4))
                .subscribe(res =>  {
                     this.designUtilitySer.print22(res, 'elContainer11')
    });

//----------------------------------------------------------------------
//Example -2   this operator takes the last values, but not in revers order
//             main point check it, it will not take the value in revers order
    nameSource22.pipe( takeLast(2))
                .subscribe(res =>  {
                      this.designUtilitySer.print22(res, 'elContainer22')
      });


//----------------------------------------------------------------------
//Example -3
// easy to understand, main point is every time takeUnitl() takes a value and give
// it further to print method, it never store all and give all in one time
// this never happens.

    const source33 = interval(1000);

    let condition2 = fromEvent(document, 'click');

    source33.pipe( map(res => 'Number '+ res),
                       takeUntil(condition2))
                .subscribe(res =>  {
                      this.designUtilitySer.print22(res, 'elContainer33')
      });




  }

}




// take()  with take() operator we can take the data from the Observable Streams
