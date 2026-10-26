import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from 'store/counter.action';
import { selectUsers } from 'store/user.selector';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements AfterViewInit {
@ViewChild(FooterComponent) foot!: FooterComponent;

fromParent = "Data from Parent1 Component";
childData:any=''
fromChildFun(data:any){
this.childData = data;
}
users$:any;

constructor(
  private store: Store
) {
  
  this.users$ = this.store.select(selectUsers);

  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }

  ngAfterViewInit() {
    this.childData = this.foot.msg;
    console.log('FooterComponent instance:', this.foot.msg);
  }

}
