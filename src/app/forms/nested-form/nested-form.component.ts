import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent {

  states = ["Andhra Pradesh","Assam","Bihar","Chhattisgarh","Goa"];

  constructor(private fb:FormBuilder){}

// userForm = new FormGroup({
//   firstName : new FormControl(''),
//   lastName : new FormControl(''),
//     address : new FormGroup({
//       address1 : new FormControl(''),
//       addressType : new FormControl(''),
//       state : new FormControl(''),
//       zip : new FormControl('')
//     }),
//   mobile : new FormArray([new FormControl('')])
// })

userForm = this.fb.group({
  firstName : [''],
  lastName : [''],
    address : this.fb.group({
      address1 : [''],
      addressType : [''],
      state : [''],
      zip : [''],
    }),
  
    mobile : this.fb.array([
    // this.fb.control('')
  ])
})


counter : number | undefined ;

get mobile(){
  return this.userForm.controls[('mobile')] as FormArray;
}

onSubmit() {
  console.warn("on submitting form",this.userForm);
  console.warn("form values",this.userForm.value);
  this.counter =0

  // for(let mob of this.mobile.controls){
  //   console.log ("Mobile "+ this.userForm.get(['mobile',this.counter]).value)
  //   this.counter = this.counter + 1;
  // }
}



addNewMobile() {
 this.mobile.push(new FormControl(""))
}



}
