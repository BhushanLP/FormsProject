import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
myForm : FormGroup;

constructor(private fb:FormBuilder){

  this.myForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    contact:['',[Validators.required]],
    email : this.fb.array([
      this.fb.group({
        myEmail:['',[Validators.required,Validators.email]],
        myData:['',Validators.required],
      })
    ])
})

}
 
get email(){
  return this.myForm.get('email') as FormArray;
}
onEmailAdd(){
  this.email.push(this.fb.group({
    myEmail:['',[Validators.required,Validators.email]],
    myData:['',Validators.required],
  }));
}
onEmailremove(){
  this.email.removeAt(this.email.length - 1);
}
onSubmit(){
  console.log(this.myForm.value);
}

}
