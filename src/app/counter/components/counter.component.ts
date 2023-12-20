import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
    Counter: {{counter}}
  </h3>

  <button (click)="increseBy(1)">+1</button>

  <button (click)="increseBy(-1)">-1</button>

  <button (click)="resetCounter()">RESET</button>`
})
export class CounterComponent {
  constructor() {}


  public counter:number = 10;


  public increseBy(value:number):void{
    this.counter +=value;
  }

  public resetCounter():void{
    this.counter = 10;
  }
}
