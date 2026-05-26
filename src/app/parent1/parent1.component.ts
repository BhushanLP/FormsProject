import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
fromParent = "Data from Parent1 Component";
childData:any=''
fromChildFun(data:any){
this.childData = data;
}
}
