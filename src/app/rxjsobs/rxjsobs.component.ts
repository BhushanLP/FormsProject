import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { select, Store } from '@ngrx/store';
import { decrement, increment } from 'store/counter.action';
import { Observable } from 'rxjs';

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

counterVal$ : Observable<number> = new Observable<number>();

  constructor(private service:SharedService, private store:Store<any>,) {  
    this.counterVal$ = this.store.pipe(select('bhushan'));
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
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

}
