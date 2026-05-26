import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-rxjsobs',
  templateUrl: './rxjsobs.component.html',
  styleUrls: ['./rxjsobs.component.css'],
})
export class RxjsobsComponent implements OnInit  {
 @Input() dropdowndata:any;

 isLoading:boolean = false;
isbtnClicked:boolean = false;
 @Output() eventFromChild:EventEmitter<any> = new EventEmitter();
 apiData:any;
  constructor(private service:SharedService) {
  }

ngOnInit(){
this.isLoading = false;
}
   
fun(){
  this.isbtnClicked = true;
    this.service.getTableData().subscribe(res=>{
this.isLoading = true;
      if(res){
        setTimeout(() => {
          this.isLoading = false;
           this.apiData = res;
      this.eventFromChild.emit(this.apiData);
        }, 3000);
     
      }else{
        console.log('No data found');
      }
    });

}


}
