import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {filter, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id: 1, name: 'aaa', gender: 'Male'},
    {id: 2, name: 'bbbbbb', gender: 'FeMale'},
    {id: 3, name: 'ccc', gender: 'Male'},
    {id: 4, name: 'dddddd', gender: 'FeMale'},
    {id: 5, name: 'eeecc', gender: 'FeMale'},
    {id: 6, name: 'ffffff', gender: 'Male'},
    {id: 7, name: 'gggccc', gender: 'Male'},
    {id: 8, name: 'hhhccc', gender: 'Male'},
    {id: 9, name: 'iii', gender: 'FeMale'},
    {id: 10, name: 'jjccccj', gender: 'FeMale'},
    {id: 11, name: 'kkkcc', gender: 'Male'},
  ];

  data11;
  data22;
  data33;
  constructor() { }

  ngOnInit(): void {

  const source22 = from(this.dataArr);


// Example -1
// here above from() operator takes Array and convert it to a stream
// down toArray() convert stream into Array

    source22.pipe( filter(x => x.name.length > 4),
                   toArray() )
             .subscribe(res => {
                             this.data11 = res;
         });

// Example -2
    source22.pipe( filter(x => x.gender == 'Male'),
                   toArray() )
            .subscribe(res => {
                            this.data22 = res;
      });


// Example -3

    source22.pipe( filter(x => x.id <= 6),
                   toArray() )
            .subscribe(res => {
                          this.data22 = res;
      });


  }

}
