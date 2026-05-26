import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
@Input() dataFromParent: string="";
@Output() fromChild:EventEmitter<string> = new EventEmitter();

btnDisabled:boolean = false;

constructer(){
this.fromChild.emit("Data from child to parent");
}


}
