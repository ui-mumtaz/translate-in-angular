import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus22;
  names;
  nameStatus;
  sub2: Subscription;
  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {

    //Example -01
    const cusObs1 = new Observable(observer11 => {

      setTimeout(() => {
        observer11.next('Angular')
      }, 1000);

      setTimeout(() => {
        observer11.next('Typescript')
      }, 2000);

      setTimeout(() => {
        observer11.next('Html and Css')
      }, 3000);

      setTimeout(() => {
        observer11.next('JavaScript');
  //      observer11.error(new Error('Limited Exceed'));  // check with error also
      }, 4000);                                     // see the difference

      setTimeout(() => {
        observer11.next('Python')
        observer11.complete();
      }, 5000);


    });

      cusObs1.subscribe(res => {
      console.log(res);
      this.designUtilitySer.print22(res, 'elContainer22');
        },
        (err) => {
          this.techStatus = 'error';
        },
        () => {
          this.techStatus = 'completed';
        }
    );

//------------------------------------------------------------
// Example - 02 ( Custom Interval)
    const Arr2 = ['Rummy', 'Tummy', 'Bummy','shammi', 'Gummy'];

    const cusObs2 = new Observable(observer11 => {
      let count = 0;
       setInterval(() => {
         observer11.next(Arr2[count]);

       if(count >= 2) { observer11.error(new Error('Error emit')) }

       if(count >= 5) {  observer11.complete(); }

        count++;

       },1000)
    });

   this.sub2 =  cusObs2.subscribe( res =>  {
      console.log(res);
      this.designUtilitySer.print22(res, 'elContainer33');
      },

     (err) => {  this.techStatus22 = 'error';  },
     () => {  this.techStatus22 = 'completed';  }
     );

//-------------------------------------------------------------
// Example   Random name Observable

    const Arr3 = ['Rummy', 'Tummy', 'Bummy','shammi', 'Gummy'];

    const cusObs3 = new Observable(observer11 => {
      let count = 0;
      setInterval(() => {
        observer11.next(Arr3[count]);

        if(count >= 3) { observer11.error('Error Emit') }

        if (count >= 5) { observer11.complete() }

        count++;

      }, 1000)
    });

     cusObs3.subscribe( res =>  {
       console.log(res);
       this.names = res;
     },
       (err) => { this.nameStatus = 'error'},
       () => { this.nameStatus = 'completed'}
       );
  }



  ngOnDestroy() {
    this.sub2.unsubscribe();
  }

}
