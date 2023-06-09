import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit{

  // regex:string = “^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$”;

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
  // adhaar : ['',[Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/)]],
  adhaar : ['',[Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
  pan : ['',[Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
    address : this.fb.group({
      address1 : [''],
      addressType : [''],
      state : [''],
      zip : [''],
    }),
  
    mobile : this.fb.array([
    this.fb.control('')
  ])
})


counter : number | undefined ;

// get mobile(){
//   return this.userForm.controls[('mobile')] as FormArray;
// }

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
 this.userForm.controls[('mobile')].push(new FormControl(""))
}
resetVal() {
//  this.userForm.controls[('mobile')].patchValue(['','','',''])
this.userForm.controls[('mobile')].reset()
 
}

beneficiaryForm!: FormGroup ;



ngOnInit() {
  this.beneficiaryForm = this.fb.group({
    beneficiaries: this.fb.array([])
  });
}

get beneficiaries(): FormArray {
  return this.beneficiaryForm.get('beneficiaries') as FormArray;
}

addBeneficiary() {
  const beneficiary = this.fb.group({
    name: [''],
    age: [''],
    relationship: ['']
  });

  this.beneficiaries.push(beneficiary);
}

removeBeneficiary(index: number) {
  this.beneficiaries.removeAt(index);
}


}
