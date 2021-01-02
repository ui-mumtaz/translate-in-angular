import { Component, OnInit } from '@angular/core';
import {from, interval, of, Subscription} from 'rxjs';
import {take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  users22 = [
           {name: 'sunny', skills: 'Angular'},
           {name: 'bunny', skills: 'Java'},
           {name: 'manny', skills: 'JaaScript'},
            {name: 'tunny', skills: 'TypeScript'},

   ]

  constructor() { }
  sourceSub: Subscription;


  ngOnInit(): void {

  // Example --1  -- take() operator takes only 5 values and after that
  //  take() stop executing further and completed, as values are completed
  // then only toArray() will be executed. if we do not use take()
  // then interval() execute further then toArray() will never be executed
  const source22 = interval(1000);
  this.sourceSub = source22.pipe( take(5),
                                  toArray()
                                ).subscribe(res => {
                                           console.log(res);
                                          });
  //--------------------------------------------
  // Example --2   in this case users22  is already defined and
  //   TS already knows that only 4 values will come and after that
  // completed so after that toArray() will be executed.
  const source2 = from(this.users22);
  source2.pipe(toArray()).subscribe( res => {
                                    console.log(res);
                             });
  //---------------------------------------------

  // Example --3 -- as the values defined in the  of() operator
  //           are completed then only toArray() will be executed.
   const source33 = of('sunny', 'manny', 'bunny', 'tunny')
   source33.pipe(toArray()).subscribe( res => {
                                        console.log(res);
                                     });




  }

}

/*(1)
 Note: we use map() or toArray()  method before .subscribe()
         as we have to manipulate the data as per our condition
         must be done before the subscription.

(2)
toArray()  only execute after the complitation of the source
in our case if we do not unsubscribe the .interval(1000);   then
toArray() will wait and never be executed.


 */
