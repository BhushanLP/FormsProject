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
 
}

ngOnInit(){
  this.userForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    verificationDoc: ['',Validators.required], //radio here Validators.required is not necessary to add
    adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
    panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
    passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
                               })

  this.userForm.get("verificationDoc")?.valueChanges.subscribe(val=> {
                                 this.changeValidators()
                               })

                               

}

changeValidators() {
  console.log('changeValidators',this.userForm.get('verificationDoc')?.value)
  if (this.userForm.get("verificationDoc")?.value=="adhaar") {
    this.userForm.controls["adhaarNumber"].addValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
    this.userForm.controls["panNumber"].removeValidators(Validators.required);
    this.userForm.controls["passportNumber"].removeValidators(Validators.required);

  } else if (this.userForm.get("verificationDoc")?.value=="pan"){
    this.userForm.controls["panNumber"].addValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
    this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
    this.userForm.controls["passportNumber"].removeValidators(Validators.required);
    
  }else if (this.userForm.get("verificationDoc")?.value=="passport"){
    this.userForm.controls["passportNumber"].addValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
    this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
    this.userForm.controls["panNumber"].removeValidators(Validators.required);
  }
  this.userForm.get("adhaarNumber")?.updateValueAndValidity();
  this.userForm.get("panNumber")?.updateValueAndValidity();     
  this.userForm.get("passportNumber")?.updateValueAndValidity(); 

  // or USE THIS

  // if (this.userForm.get("verificationDoc")?.value=="adhaar") {
  //   this.userForm.controls["adhaarNumber"].setValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
  //   this.userForm.controls["panNumber"].clearValidators();
  //   this.userForm.controls["passportNumber"].clearValidators();

  // } else if (this.userForm.get("verificationDoc")?.value=="pan"){
  //   this.userForm.controls["panNumber"].setValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
  //   this.userForm.controls["adhaarNumber"].clearValidators();
  //   this.userForm.controls["passportNumber"].clearValidators();

  // }else if (this.userForm.get("verificationDoc")?.value=="passport"){
  //   this.userForm.controls["passportNumber"].setValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
  //   this.userForm.controls["adhaarNumber"].clearValidators();
  //   this.userForm.controls["panNumber"].clearValidators();
  // }
  // this.userForm.get("adhaarNumber")?.updateValueAndValidity();
  // this.userForm.get("panNumber")?.updateValueAndValidity();     
  // this.userForm.get("passportNumber")?.updateValueAndValidity();   
  
  
}

onSubmit(){
 
  console.log( 'userForm',this.userForm);

 }

checkDocType(data: any) {
  console.log(data);
 
}


}
