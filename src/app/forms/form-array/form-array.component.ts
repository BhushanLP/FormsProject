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

    this.userForm.get("selectedDoc")?.valueChanges.subscribe((val)=> {
      return this.changeValidators(val)
    })
    // this.userForm.get("selectedDoc")?.valueChanges.subscribe((val)=> {
    //   return this.changeValidators(val)
    // })

  }

  changeValidators(i:any) {
    
    console.log('changeValidators val ==',this.nominee.controls[i].get('selectedDoc')?.value)

    if (this.userForm.controls["nominee"]?.value[i].selectedDoc==="adhaar") {
      this.userForm.controls["nominee"]?.value[i].adhaarNumber.addValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]);
      this.userForm.controls["nominee"]?.value[i].panNumber.removeValidators(Validators.required);
      this.userForm.controls["nominee"]?.value[i].passportNumber.removeValidators(Validators.required);
  
    } else if (this.userForm.controls["nominee"]?.value[i].selectedDoc==="pan"){
      this.userForm.controls["nominee"]?.value[i].panNumber.addValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]);
      this.userForm.controls["nominee"]?.value[i].adhaarNumber.removeValidators(Validators.required);
      this.userForm.controls["nominee"]?.value[i].passportNumber.removeValidators(Validators.required);
      
    }else if (this.userForm.controls["nominee"]?.value[i].selectedDoc==="passport"){
      this.userForm.controls["nominee"]?.value[i].passportNumber.addValidators([Validators.required ,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]);
      this.userForm.controls["nominee"]?.value[i].adhaarNumber.removeValidators(Validators.required);
      this.userForm.controls["nominee"]?.value[i].panNumber.removeValidators(Validators.required);
    }
    this.userForm.controls["nominee"]?.value[i].adhaarNumber.updateValueAndValidity();
    this.userForm.controls["nominee"]?.value[i].panNumber.updateValueAndValidity();     
    this.userForm.controls["nominee"]?.value[i].passportNumber.updateValueAndValidity(); 
  }

  


  onSubmit() {
    // debugger;
    console.log( 'on submit val....', this.userForm.controls["nominee"]?.value[0].selectedDoc);
    console.log( 'on submit adgaar....', this.userForm.controls["nominee"]?.value[0].adhaarNumber);
    // console.log( 'userForm val....', this.userForm.controls["nominee"]?.value[i].selectedDoc);
   
      // console.log( 'adhaar val....', this.nominee.controls[0].get('adhaarNumber')?.value);
    //  this.userForm.reset()
    if(this.userForm.valid){
      console.log('userForm', this.userForm.value);
      localStorage.setItem("Data",JSON.stringify(this.userForm.value))
      this.userForm.reset()
    }
  
  }

  get nominee() {
    return this.userForm.controls["nominee"] as FormArray;
  }

  addNominee() {
    const newNominee = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      selectedDoc: ['',Validators.required], //radio
      // adhaarNumber: [''],
      // panNumber: [''],
      // passportNumber: [''],
      adhaarNumber: ['',[ Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/)]],
      panNumber: ['',[ Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
      passportNumber: ['',[Validators.required,Validators.pattern(/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/)]],
      docStatus: ['', Validators.required],
    });
    this.nominee.push(newNominee);
  }

  deleteNominee(index: number) {
    this.nominee.removeAt(index);
  }

  resetVal() {
    this.showTextbox = true;
    this.userForm.reset()
  }

  checkDocType(data: any) {
     console.log('datasssss',data);
     
    if (data == 'adhaar') {
      this.text = "adhaar";
      
    } else if (data == 'pan') {
      this.text = "pan"
       
    } else if (data == 'passport') {
      this.text = "passport"

    }
  }


}
