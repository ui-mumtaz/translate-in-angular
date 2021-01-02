import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {concatAll, concatMap, delay, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
/*
concatMap() is a flattening operator
Note: main point to understand is concatMap() always print the data as in the order
the data is stored in the Array, first only one value and print it
after that it goes back and take second value, as i put a delay(2000)
in between every value emitting so we can see clearly in the result.
(1) we get a observable in a observable means in the getData22()
we are returning  of(data---)  means we are returning a Observable
(2) source11 = from(data--)  here we are also returning a observable
as we are returning 2 observable so we need to do 2 times subscribe
and at end we are getting the Data
so first we have to .subscribe the .pipe() then we have to .subscribe() the
response of the .pipe()
 */
  constructor(private designUtilitySer: DesignUtilityService) { }

  getData22(data) {
    return of(data + 'Video Uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {

// Example - 01    map()
    const source11 = from(['Tech', 'Comedy', 'News']);

    source11.pipe( map(res => this.getData22(res)))
            .subscribe( res => res.subscribe( res => {
                    this.designUtilitySer.print22(res, 'elContainer11');
            }));

/*Example - 02  map() + concatAll()
as explains in the first example we are getting observable in a observable
so we are doing 2 times .subscribe() but with the help of concatAll() it will
extract the data of both the Observable inside the .pipe() and when we do
.subscribe() the .pipe() we get the data, so we do not need to du 2 times .subscribe()
*/
    source11.pipe( map(res => this.getData22(res)),
                   concatAll()
                 ).subscribe( res => {
                    this.designUtilitySer.print22(res, 'elContainer22');
      });

/* Example -03  map + mergeAll = mergeMap()
as shown in this example we are using directly mergeMap() and even then we are
getting data as Observable in a Observable then als mergeMap() extract the
data of this Observable inside Observable type in the .pipe() and when we are
doing .subscribe() then we will get the end data.
*/
source11.pipe( concatMap(res => this.getData22(res))
              ).subscribe(res => {
                     this.designUtilitySer.print22(res, 'elContainer33');
               });

// to show the difference between mergeMap()
// as shown it takes the all Data one time and merge it and
// print it, not like the concatMap(), as concatMap() takes
// it one by one and print it one by one
source11.pipe( mergeMap(res => this.getData22(res))
             ).subscribe(res => {
               this.designUtilitySer.print22(res, 'elContainer44');
    });



  }

}
