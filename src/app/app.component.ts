import { Component } from '@angular/core';
import { CounterDetailComponent } from './CounterDetail/CounterDetail.component';
import { CounterListComponent } from './CounterList/CounterList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';

  counterList: CounterListComponent = new CounterListComponent();

  addCounter(){
    this.counterList.addACounter(new CounterDetailComponent());
  }
}
