import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {combineLatest, fromEvent} from 'rxjs';
import {map, pluck, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements AfterViewInit {

  // Note.  it does not works correctly

  //Sources
  nameSource = ['Anup ', 'Shekhar ', 'Sharma ', 'Uxtrendz ', 'John ', 'Alex ', 'Robert', 'Sam'];

  colorSource = ['red ', 'green ', 'blue ', 'yellow ', 'violet ', 'purple ', 'grey '];


  // Template Refrences
  @ViewChild('name') name:ElementRef;
  @ViewChild('color') color:ElementRef;


  ngAfterViewInit(){

    //Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value))
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(pluck('target','value'))


    // Ex - 01 CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color])=>{
      // console.log(name, color);
      this.createBox(name, color, 'elContainer11')
    })

    // Ex - 02 withLatestFrom
    // Master nameObs
    // Slave colorObs

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color])=>{
      console.log(name, color);
      this.createBox(name, color, 'elContainer22')
    })

  }


  createBox(name, color, containerId){
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class",color);
    document.getElementById(containerId).appendChild(el);
  }

}
