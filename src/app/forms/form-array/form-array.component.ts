import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
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
    
    // this.userForm.get("selectedDoc")?.valueChanges.subscribe((val)=> {
    //   return this.changeValidators(val)
    // })
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
    this.showTextbox = false;
    // this.resetVal()
    
    

    // if(this.userForm.valid){
    //   console.log('userForm', this.userForm.value);
    //   localStorage.setItem("Data",JSON.stringify(this.userForm.value))
    //   this.userForm.reset()
    // }
  
  }

  get nominee() {
    return this.userForm.controls["nominee"] as FormArray;
  }

 

  deleteNominee(index: number) {
    this.nominee.removeAt(index);
  }

  resetVal() {
    
      // while (this.nominee.length !== 0) {
      //   this.nominee.removeAt(0)
      // }
    
    this.showTextbox = false;
    this.userForm.reset()
  }

  checkDocType(data: any,i:number) {
     console.log('datasssss',data);
     
    if (data == 'adhaar') {
      this.text = "adhaar";
      
    } else if (data == 'pan') {
      this.text = "pan"
       
    } else if (data == 'passport') {
      this.text = "passport"

    }
    this.changeValidators(i);
    
  }


}
