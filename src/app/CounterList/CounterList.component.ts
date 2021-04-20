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
  }

  addACounter(){
    this.counterList.push(new Counter());
    console.log(this.counterList.length);
  }

}
