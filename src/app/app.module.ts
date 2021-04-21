import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './CounterList/CounterList.component';
import { CounterDetailComponent } from './CounterDetail/CounterDetail.component';

@NgModule({
  declarations: [
    AppComponent,
      CounterListComponent,
      CounterDetailComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
