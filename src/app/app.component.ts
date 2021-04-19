import { Component, OnDestroy, OnInit } from '@angular/core';
import { count } from 'console';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateDisplay = new Date();
  constructor() { }
  ngOnInit() {
    setInterval(
      ()=>{
        const dateDisplay = new Date();
        this.dateDisplay = dateDisplay;
      },1000
    );
  }

}
