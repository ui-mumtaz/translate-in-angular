import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput22') myInput22: ElementRef;
  @ViewChild('myInput33') myInput33: ElementRef;
  reqData22 = null;
  reqData33 = null;
/*   constructor(private loadingBar: LoadingBarService) { } */
  ngOnInit(): void {  }

/*Note: evey method we are putting before doing subscribe();
(1) as the data first need to be rendered in the DOM after that we can take
 it from the DOM, so we can not use it in the ngOnInit(), we have to use
 this fromEvent() in the ngAfterViewInit();
(2)in console without using map() when we are printing the whole
 "this.myInput33.nativeElement" then on the console we have a "target"
  property, in the target we have a "value" property in this value property
  we are getting our input data,
  "event11.target.value"   here we are getting that input data
(3) fromEvent<any>  we use <any>  because "event11.target.value" here the
"target" is showing error, as it does not know the data type
(4) debounceTime(1 sec) means that angular will wait till "1 sec"
before sending the request to server
 */
  ngAfterViewInit() {

// Example -1  debounceTime()
const searchTerm22 =
   fromEvent<any>(this.myInput22.nativeElement, 'keyup')
     .pipe(
         map( event11 => event11.target.value ),
         debounceTime(1000)
     );

    searchTerm22.subscribe(res => {
       this.reqData22  = res;
       //this.loadingBar.start();

       setTimeout(() => {
            this.reqData22 = null;
       //     this.loadingBar.stop();
       },2000);
    });

// Example -2      distinctUntilChanged();

    const searchTerm33 =
      fromEvent<any>(this.myInput33.nativeElement, 'keyup')
        .pipe(
          map( event11 => event11.target.value ),
          debounceTime(1000),
          distinctUntilChanged()
        );

    searchTerm33.subscribe(res => {
      this.reqData33  = res;
     // this.loadingBar.start();

      setTimeout(() => {
        this.reqData33 = null;
       // this.loadingBar.stop();
      },2000);
    });
  }


}
