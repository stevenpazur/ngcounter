import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-CounterDetail',
  templateUrl: './CounterDetail.component.html',
  styleUrls: ['./CounterDetail.component.css']
})
export class CounterDetailComponent implements OnInit {

  @Input() public counter: Counter;

  constructor() { }

  ngOnInit() {
  }

}
