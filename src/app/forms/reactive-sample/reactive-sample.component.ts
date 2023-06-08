import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css']
})
export class ReactiveSampleComponent {

userForm = new FormGroup({
  firstName : new FormControl(''),
  lastName : new FormControl(''),
})
person = new FormArray([])



onSubmit(){ 
  console.log("userform--->",this.userForm)
  console.log("Value--->",this.userForm.value)
}
addNewPerson(){ }


}
