import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

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
