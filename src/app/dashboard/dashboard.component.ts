import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
dashboardDropdown:any = ['DashboardOption 1', 'DashboardOption 2', 'DashboardOption 3'];
 showTableData:any;
  myForm: FormGroup;
  userForm: FormGroup;


  constructor(private service:SharedService, private fb: FormBuilder) {
        this.myForm = this.fb.group({
      skills: this.fb.array([])
    });
    this.userForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]]
    });
  }
  
  ngOnInit(){
    
  }
      getChildData(event:any){
this.showTableData = event;
}


  // Get FormArray
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  // Add new input
  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  // Remove input
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    console.log(this.myForm.value);
  }
  submitUser() {
    if(this.userForm.get('name')?.value == 'Bhushan' && this.userForm.get('email')?.value == 'bhushan@example.com'){
      alert('Form submitted successfully!');
    }else{
      alert('Form submission failed. Please check your input.');
    }
    console.log(this.userForm.value);
  }
}
