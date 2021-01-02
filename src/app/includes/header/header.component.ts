import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen:boolean = false;

  exclusive:boolean = false;


  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtility.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }

  onNavToggle(){
    this.navOpen = !this.navOpen
  }
}
