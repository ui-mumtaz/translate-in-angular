import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName22: string = 'Sunny';
  constructor(private designUtilitySer: DesignUtilityService) {
    this.designUtilitySer.userName22.subscribe(res =>  {
      this.userName22 = res;

    });
  }

  ngOnInit(): void {
  }

  onChange22(uname) {
     this.designUtilitySer.userName22.next(uname.value);
  }
}
