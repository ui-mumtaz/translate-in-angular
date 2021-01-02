import { Component, OnInit } from '@angular/core';
import {rejects} from 'assert';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  DellAvailable(){
    return false;
  }
  HpAvailable(){
   return false;
  }

  promiseVal;

 dell = {
   brand: 'Dell',
   hardDisk: '2 TB',
   color: 'Black'
 }
 hp = {
   brand: 'Hp',
   hardDisk: '1 Tb',
   color: 'Silver'
 }
 notAvil = {
   brand: 'Not Available',
   status: 'Failed'
 }

  ngOnInit(): void {
//    let buyLaptop = new Promise((resolve, reject) => {
//      resolve('Promise is resolved')
//    })


    let buyLaptop = new Promise((resolve, reject) => {

      if(this.DellAvailable()) {
        return  setTimeout(()=> {
          resolve(this.dell)
        },3000)

      }else if(this.HpAvailable()) {
        return setTimeout(()=> {
          resolve(this.hp)
        },3000)
      } else {
        return setTimeout(() => {
          reject(this.notAvil)
        },3000)
      }

    });

    buyLaptop.then( res =>  {
       console.log('then code =>', res);
       this.promiseVal = res;
    }).catch(res => {
      console.log('catch code =>', res)
      this.promiseVal = res;
    });


  }
}
