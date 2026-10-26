import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vaish',
  templateUrl: './vaish.component.html',
  styleUrls: ['./vaish.component.css'],
  standalone:true
})
export class VaishComponent {
@Input() data:any;  
@Output() mySuperHero = new EventEmitter<string>();

msg = 'I Am Ironman Vaish Component';

sendDataToParent() {
  this.mySuperHero.emit(this.msg);  }
  
}
