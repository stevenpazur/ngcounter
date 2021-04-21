import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-CounterDetail',
  templateUrl: './CounterDetail.component.html',
  styleUrls: ['./CounterDetail.component.scss']
})
export class CounterDetailComponent implements OnInit {

  @Input() public counter: Counter;

  constructor() { }

  ngOnInit() {
    document.querySelector('input').disabled = true;
  }

  availability(){
  }

}
