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

get nominee() {
  return this.userForm.controls["nominee"] as FormArray;
}

onSubmit(){
  debugger;
  console.log(this.userForm.value.nominee[0].firstName);
  console.log(this.userForm.value.nominee.value);
  console.log(this.userForm.value.nominee)
 console.log( '.........'+ this.userForm.value);
 console.log( 'this.data'+this.data);
 console.log( 'this.userForm.controls'+this.userForm);
//  console.log( 'this.addNominee()'+this.addNominee());
 this.userForm.reset()
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
}

deleteNominee(index: number) {
  this.nominee.removeAt(index);
}


}
