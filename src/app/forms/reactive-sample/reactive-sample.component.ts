import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css']
})
export class ReactiveSampleComponent implements OnInit {
 
data:any[]=[];
userForm! :FormGroup ;
constructor(private fb:FormBuilder){
  this.userForm = this.fb.group({
    nominee : this.fb.array([])
                               })
}

ngOnInit(){
  this.addNominee();
}

onSubmit(){
  // debugger;
  console.log( 'userForm',this.userForm);
//   console.log( 'userForm val....', this.userForm.value);
//   console.log("array",this.userForm.value.nominee)
//   console.log("array val",this.userForm.value.nominee.value);
//  console.log( 'this.data',this.data);
//  this.userForm.reset()
 }

 get nominee() {
  return this.userForm.controls["nominee"] as FormArray;
}

addNominee() {
  const newNominee =  this.fb.group({
        firstName: [''],
        lastName: [''],
         address:this.fb.group({
                 add1: [''],
                 add2: [''],
                    })
                 });
  this.nominee.push(newNominee);
  // debugger;
  // this.userForm.nominee.push(this.nominee)
}

deleteNominee(index: number) {
  this.nominee.removeAt(index);
}


}
