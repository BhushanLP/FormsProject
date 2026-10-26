import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
myForm : FormGroup;

constructor(private fb:FormBuilder, private route: ActivatedRoute){

  this.route.queryParamMap.subscribe(params => {
  console.log(params.get('page'));
  console.log(params.get('search'));

});


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
