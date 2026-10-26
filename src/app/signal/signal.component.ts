import { Component, signal, } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {

  count = signal(0);
  action:any = [];
  double = signal(1);
hero = 'Spiderman';
msggg=""

superHero(msg:string){
  this.msggg = msg;
}


  increment() {
    this.count.set(this.count() + 1);
    this.action.push('Incremented');
    console.log(this.count());
    this.double.set(this.double()*2)
  }

  decrement() {
    this.count.set(this.count() - 1);
    this.action.push('Decremented');
    console.log(this.count());
  }

}
