import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import { DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private designUtilitySer: DesignUtilityService) { }

 @ViewChild('addBtn22') addBtn33: ElementRef;

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    let count22 = 0;
    fromEvent(this.addBtn33.nativeElement, 'click').subscribe( res => {
      let countVal22 = 'video ' + count22++;
      this.designUtilitySer.print22(countVal22, 'elContainer22');
      this.designUtilitySer.print22(countVal22, 'elContainer33');
    })
  }



}







/*
fromEvent() return a Observable

 (1)  fromEvent(target, eventName);  takes 2 arguments
  1     target
  2     eventName

(2)
in the html we have define a  #addBtn22   this is how we define a template reference
variable starts with  # hash

to take the value in the ts file we need to use @ViewChild with ElementRef
to get the access of the value in the formEvent() we need to use .nativeElement

(3)
when we need to acces a telmplate refrence through @Viewchaile, then that we should
not do in the ngOnInit{}   as the button should first rendered after initialization
and after that we can fetch the template refrence, so we should use only inside
the ngAfterViewInit()

(4)
    <ul id="elContainer22">
         <li></li>
         <li></li>
    </ul>


 print22() {
    let el22 = document.createElement('li');
   }

normally we have Unordered List and inside this unordered list
we have always List elements like above i showed

but in our code we are creaking those  List elements
dynamically by the click event

 */
