import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {

    // of operator

    const Obs1 = of('sunny', 'manny', 'bunny');

    Obs1.subscribe(res => {
      console.log(res);
      this.designUtilitySer.print22(res, 'elContainer22');
    });

    const Obs2 = of({
      a: 'sunny',
      b: 'manny',
      c: 'bunny'
    });

    Obs2.subscribe(res => {
      this.obsMsg = res;
      console.log('obsMsg  = ' + res);
    });


    // from operator

    let Arr = ['sunny', 'manny', 'bunny'];
    const Obs3 = from(Arr);  // data inside a Array [ ]

    Obs3.subscribe(res => {
      this.designUtilitySer.print22(res, 'elContainer33');
    });

// converting a promise to a observable
   const promise22 = new Promise(resolve => {
     setTimeout(() => {
      resolve('Promise Resolve');
     },3000);
   });

    const Obs4 = from(promise22);  // data inside a Array [ ]
    Obs4.subscribe(res => {
      console.log('from promise =>'+  res);
      this.designUtilitySer.print22(res, 'elContainer44');
    });

// converting a string to a observable

    const Obs5 = from('any type of string we can put');  // data inside a Array [ ]
    Obs5.subscribe(res => {
      console.log('from string  =>'+  res);
      this.designUtilitySer.print22(res, 'elContainer55');
    });


  }

}
/*
of()  opertaor takes the values and convert them into observable stream
 in the const Obs2 = of( object type)  we have taken as key-value pairs


from() takes a array of elements and convert them into array or an iterable
                                                                     object

 */
