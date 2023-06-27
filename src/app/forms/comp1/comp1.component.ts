import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 
  data:any[]=[];
  userForm! :FormGroup ;
  text:any=''

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
    nominee : this.fb.array([this.newnominee()])
    });
  }
// -------------------------------
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
      selectedDoc: [''], 
      adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
      panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
      passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
    });
  
    this.beneficiaries.push(beneficiary);
  }
  
  removeBeneficiary(index: number) {
    this.beneficiaries.removeAt(index);
  }

    //  --------------------------------
newnominee(): FormGroup {
   return this.fb.group({
    selectedDoc: [''], 
    adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
    panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
    passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
   })
}

get nominee():FormArray{
  return (<FormArray>this.userForm.get('nominee'))as FormArray
}

addnominee():void{
  this.nominee.push(this.newnominee())
}
deleteNominee(index: number) {
  this.nominee.removeAt(index);
}

//   addnominee() {
//     <FormArray>this.userForm.push(this.newnominee());
//  }
  

  // ngOnInit(){
  //   this.userForm = this.fb.group({
  //     selectedDoc: [''], 
  //     adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
  //     panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
  //     passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
  //                                })
  
  //   this.userForm.get("selectedDoc")?.valueChanges.subscribe(val=> {
  //                                  this.changeValidators()
  //                                })
  // }
  
  changeValidators() {
    console.log('changeValidators',this.userForm.get('selectedDoc')?.value)
    if (this.userForm.get("selectedDoc")?.value=="adhaar") {
      this.userForm.controls["adhaarNumber"].addValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
      this.userForm.controls["panNumber"].removeValidators(Validators.required);
      this.userForm.controls["passportNumber"].removeValidators(Validators.required);
  
    } else if (this.userForm.get("selectedDoc")?.value=="pan"){
      this.userForm.controls["panNumber"].addValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
      this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
      this.userForm.controls["passportNumber"].removeValidators(Validators.required);
      
    }else if (this.userForm.get("selectedDoc")?.value=="passport"){
      this.userForm.controls["passportNumber"].addValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
      this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
      this.userForm.controls["panNumber"].removeValidators(Validators.required);
    }
    this.userForm.get("adhaarNumber")?.updateValueAndValidity();
    this.userForm.get("panNumber")?.updateValueAndValidity();     
    this.userForm.get("passportNumber")?.updateValueAndValidity(); 
    
  }
  
  onSubmit(){
    console.log( 'userForm',this.userForm);
   }
  
  checkDocType(data: any) {
    console.log(data);
    if (data == 'adhaar') {
      this.text = "adhaar";
      
    } else if (data == 'pan') {
      this.text = "pan"
       
    } else if (data == 'passport') {
      this.text = "passport"

    }
  }






 

  
  }
  