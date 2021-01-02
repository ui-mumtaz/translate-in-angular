import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {map, pluck, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data22;
  data33;
  constructor() { }

  users22 = [
    {
      name: 'aaa',
      skills: 'Angular',
      job: {
        title: 'Frontend Developer',
        exp: '10 years'
      }
    },
    {
      name: 'bbb',
      skills: 'Java',
      job: {
        title: 'Backend Developer',
        exp: '5 years'
      }
    },
    {
      name: 'ccc',
      skills: 'JavaScript',
      job: {
        title: 'Backend Developer',
        exp: '5 years'
      }
    },
    {
      name: 'ddd',
      skills: 'Angular',
      job: {
        title: 'Backend Developer',
        exp: '5 years'
      }
    }
  ]

  ngOnInit(): void {

// Note: map() return a stream of data so if we directly do
// this.data22 = res;   then we will get error, because stream
// can not be directly put into Array , so for converting
// stream into Array we have used here toArray()
    from(this.users22).pipe( map(data1 => data1.name),
                             toArray()
                      ).subscribe(res => {
//                   this.data22 = res;
                 })
//-------------------------------------------------------------
// Example -1a   pluck()
// pluck() return also a stream as map() operator do, so we need to
// convert to Array in our case with toArray() method.
//  in pluck() we have to put the "key"  of a object

    from(this.users22).pipe( pluck('name'),
                             toArray()
                      ).subscribe(res => {
                   this.data22 = res;
    });

// Example -2  pluck(x,y) <-- fetching nexted object

    from(this.users22).pipe( pluck('job','title'),
                              toArray()
                       ).subscribe(res => {
                           this.data33 = res;
    });


  }

}
