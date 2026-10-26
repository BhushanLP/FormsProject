import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bhushan',
  templateUrl: './bhushan.component.html',
  styleUrls: ['./bhushan.component.css'],
  standalone:true
})
export class BhushanComponent {
@Input() bhushanInfo:any;



}
