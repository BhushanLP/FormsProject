import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-childexample',
  templateUrl: './childexample.component.html',
  styleUrls: ['./childexample.component.css']
})
export class ChildexampleComponent {
@Input() hero:any;
@Output() myEvent:EventEmitter<string> = new EventEmitter();
myName = 'Bhushan'
onClick(){
  this.myEvent.emit(this.myName);
}
userForm! :FormGroup;
constructor(){
  this.userForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })
}

onSubmit(){
  console.log(this.userForm.value);
}

}
