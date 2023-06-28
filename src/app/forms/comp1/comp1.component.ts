import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 
  data: any[] = [];
  showTextbox: boolean = false;
  status = ["Pending", "Rejected", "Completed", "Processing"];
  text = '';

  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nominee: this.fb.array([])
    })
  }
 
  ngOnInit() {
    this.addNominee();
  }

   addNominee() {
    const newNominee = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      selectedDoc: ['',Validators.required], //radio
      adhaarNumber: ['',[ Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
      panNumber: ['',[ Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
      passportNumber: ['',[Validators.required,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
      docStatus: ['', Validators.required],
      id:['']
    });
    // let a:any = this.nominee.length+1;
    // newNominee.value.id = a;
    this.nominee.push(newNominee);
  }

  changeValidators(i:any) {
    console.log('changeValidators val ==',this.nominee.controls[i].get('selectedDoc')?.value)
    console.log( 'on submit val....', this.userForm.controls["nominee"]?.value[0].selectedDoc);

    if (this.nominee.controls[i].get('selectedDoc')?.value==="adhaar") {
      this.nominee.controls[i].get('adhaarNumber')?.addValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
      this.nominee.controls[i].get('panNumber')?.removeValidators(Validators.required);
      this.nominee.controls[i].get('passportNumber')?.removeValidators(Validators.required);

  
    } else if (this.nominee.controls[i].get('selectedDoc')?.value==="pan"){
      this.nominee.controls[i].get('panNumber')?.addValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
      this.nominee.controls[i].get('adhaarNumber')?.removeValidators(Validators.required);
      this.nominee.controls[i].get('passportNumber')?.removeValidators(Validators.required);
      
    }else if (this.nominee.controls[i].get('selectedDoc')?.value==="passport"){
      this.nominee.controls[i].get('passportNumber')?.addValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
      this.nominee.controls[i].get('adhaarNumber')?.removeValidators(Validators.required);
      this.nominee.controls[i].get('panNumber')?.removeValidators(Validators.required);
    }
    this.nominee.controls[i].get('adhaarNumber')?.updateValueAndValidity();
    this.nominee.controls[i].get('panNumber')?.updateValueAndValidity();     
    this.nominee.controls[i].get('passportNumber')?.updateValueAndValidity(); 
  }

  onSubmit() {
    console.log( 'on submit val....', this.userForm.controls["nominee"]?.value[0].selectedDoc);
    console.log('changeValidators val ==',this.nominee.controls[0].get('selectedDoc')?.value)
    console.log( 'on submit adhar no....', this.userForm.controls["nominee"]?.value[0].adhaarNumber);
    console.log('userForm', this.userForm);
    console.log('userForm value', this.userForm.value)
  }

  get nominee() {
    return this.userForm.controls["nominee"] as FormArray;
  }

  deleteNominee(index: number) {
    this.nominee.removeAt(index);
  }

  resetVal() {
    this.showTextbox = false;
    this.userForm.reset()
  }

  checkDocType(data: any,i:number ) {
     console.log('checkDocType',data);
    if (data == 'adhaar') {
      this.text = "adhaar";
      
    } else if (data == 'pan') {
      this.text = "pan"
       
    } else if (data == 'passport') {
      this.text = "passport"
    }
    this.changeValidators(i);
  }

//   data:any[]=[];
//   userForm! :FormGroup ;
//   text:any=''

//   constructor(private fb:FormBuilder){
//     this.userForm = this.fb.group({
//     nominee : this.fb.array([this.newnominee()])
//     });
//   }
// // -------------------------------
//   beneficiaryForm!: FormGroup ;

//   ngOnInit() {
//     this.beneficiaryForm = this.fb.group({
//       beneficiaries: this.fb.array([])
//     });
//   }
  
//   get beneficiaries(): FormArray {
//     return this.beneficiaryForm.get('beneficiaries') as FormArray;
//   }
  
//   addBeneficiary() {
//     const beneficiary = this.fb.group({
//       selectedDoc: [''], 
//       adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
//       panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
//       passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
//     });
  
//     this.beneficiaries.push(beneficiary);
//   }
  
//   removeBeneficiary(index: number) {
//     this.beneficiaries.removeAt(index);
//   }

//     //  --------------------------------
// newnominee(): FormGroup {
//    return this.fb.group({
//     selectedDoc: [''], 
//     adhaarNumber: ['', [Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
//     panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
//     passportNumber: ['',[Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
//    })
// }

// get nominee():FormArray{
//   return (<FormArray>this.userForm.get('nominee'))as FormArray
// }

// addnominee():void{
//   this.nominee.push(this.newnominee())
// }
// deleteNominee(index: number) {
//   this.nominee.removeAt(index);
// }


  
//   changeValidators() {
//     console.log('changeValidators',this.userForm.get('selectedDoc')?.value)
//     if (this.userForm.get("selectedDoc")?.value=="adhaar") {
//       this.userForm.controls["adhaarNumber"].addValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
//       this.userForm.controls["panNumber"].removeValidators(Validators.required);
//       this.userForm.controls["passportNumber"].removeValidators(Validators.required);
  
//     } else if (this.userForm.get("selectedDoc")?.value=="pan"){
//       this.userForm.controls["panNumber"].addValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
//       this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
//       this.userForm.controls["passportNumber"].removeValidators(Validators.required);
      
//     }else if (this.userForm.get("selectedDoc")?.value=="passport"){
//       this.userForm.controls["passportNumber"].addValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
//       this.userForm.controls["adhaarNumber"].removeValidators(Validators.required);
//       this.userForm.controls["panNumber"].removeValidators(Validators.required);
//     }
//     this.userForm.get("adhaarNumber")?.updateValueAndValidity();
//     this.userForm.get("panNumber")?.updateValueAndValidity();     
//     this.userForm.get("passportNumber")?.updateValueAndValidity(); 
    
//   }
  
//   onSubmit(){
//     console.log( 'userForm',this.userForm);
//    }
  
//   checkDocType(data: any) {
//     console.log(data);
//     if (data == 'adhaar') {
//       this.text = "adhaar";
      
//     } else if (data == 'pan') {
//       this.text = "pan"
       
//     } else if (data == 'passport') {
//       this.text = "passport"

//     }
  }






 

  
  
  