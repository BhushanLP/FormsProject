import { Component } from '@angular/core';

@Component({
  selector: 'app-parentexample',
  templateUrl: './parentexample.component.html',
  styleUrls: ['./parentexample.component.css']
})
export class ParentexampleComponent {
 parentExData = "This is parent Example component data";
 msg=''
 showww(dataa:any){
this.msg = dataa;
 }

}
