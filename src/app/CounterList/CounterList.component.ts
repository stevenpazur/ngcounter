import { Component, OnInit } from '@angular/core';
import { Counter } from '../Counter';
import { CounterDetailComponent } from '../CounterDetail/CounterDetail.component';

@Component({
  selector: 'app-CounterList',
  templateUrl: './CounterList.component.html',
  styleUrls: ['./CounterList.component.css']
})



export class CounterListComponent implements OnInit {

  public counterList: Counter[] = [];

  constructor() { }

  ngOnInit() {
    this.counterList.push(new Counter());
  }

  addACounter(){
    this.counterList.push(new Counter());
    // console.log(this.counterList.length);
    console.log("button created");
    if(this.counterList.length >= 6){
      let supCounter: Counter = new Counter();
      supCounter.setSuperCounter(true);
      supCounter.value = this.counterList[0].value + this.counterList[1].value + this.counterList[2].value + this.counterList[3].value + this.counterList[4].value + this.counterList[5].value;
      this.counterList = [];
      this.counterList.push(supCounter);
      document.querySelectorAll('input')[0].classList.add('supercounter');
      document.querySelectorAll('input')[0].classList.remove('counter');
      console.log(document.querySelectorAll('input')[0]);
    }
    // for(let i = 0; i < this.counterList.length; i++){
    //   if(this.counterList[i]._superCounter){
    //     document.querySelectorAll('input')[i].classList.remove('counter');
    //     document.querySelectorAll('input')[i].classList.add('supercounter');
    //   }
    // }
  }

}
