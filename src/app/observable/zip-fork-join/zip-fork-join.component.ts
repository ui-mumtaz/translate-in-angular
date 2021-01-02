import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, zip} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss']
})
export class ZipForkJoinComponent implements AfterViewInit {
/*Note:
 (1) Zip()
  some how the code is not working, but main point is that zip() takes 2 or more observables,
 after .subscribing the zip() it will only give us response when both the observables
 has produced values or Emitted we can say, if only one observable has triggered then
 zip() will not work

  (2)
  forkJoin()
  it is same as zip() the main difference is forkjoin as per its name, it will only give us response value
  when both the observables are completed, means  both have run its .complete() method, after completion
  the forkjoin() will be triggered


*/

  //Sources
  nameSource = ['Anup ', 'Shekhar ', 'Sharma ', 'Uxtrendz ', 'John ', 'Alex ', 'Robert', 'Sam'];
  colorSource = ['red ', 'green ', 'blue ', 'yellow ', 'violet ', 'purple ', 'grey '];
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngAfterViewInit() {

const nameObs =
fromEvent<any>(this.name.nativeElement, 'change').pipe(
  map(event => event.target.value)
);


const colorObs =
fromEvent<any>(this.color.nativeElement, 'change').pipe(
  map(event => event.target.value)
);


//    Ex - 01
  zip(nameObs, colorObs).subscribe(([name, color]) => {

   this.createBox(name,color,'elContainer11');
    });



  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', 'red');
    document.getElementById(containerId).appendChild(el);
  }


  }


