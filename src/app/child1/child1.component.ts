import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { BhushanComponent } from "../bhushan/bhushan.component";


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  standalone: true,
    imports: [NgxDocViewerModule, CommonModule, ReactiveFormsModule, BhushanComponent], // Must be here if standalone
})
export class Child1Component implements OnInit {
@Input() dataFromParent: string="";
@Output() fromChild:EventEmitter<string> = new EventEmitter();

btnDisabled:boolean = false;

userForm!:FormGroup;
Users:any[] = [];
fileURL:any;
userInfo:any;
constructor(private fb:FormBuilder){
this.fromChild.emit("Data from child to parent");
this.userForm = this.fb.group({
  name : ['',[  Validators.required, Validators.minLength(3)]],
  email : ['',[  Validators.required, Validators.email]],
  address : ['',[  Validators.required, Validators.minLength(3)]],
  contact : this.fb.array([this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])])

})
}

ngOnInit(): void {  
// this.userForm.patchValue({
//   name: 'John Doe',
//   email: 'asd@gmail.com',
//   address: 'askfafajfl',
// })
// this.fileURL = "https://images.unsplash.com/photo-1682685790910-1e3f5c7d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
this.fileURL = "https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc"
this.userInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: '123 Main St'
};

}
getContact(){
  return this.userForm.get('contact') as FormArray;
}
remove(i:number){
this.getContact().removeAt(i);
}
add(){
  this.getContact().push(this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]));
}

onSubmit(){
  if(this.userForm.valid){
    console.log(this.userForm.value);
    this.Users.push(this.userForm.value);
   console.log(this.Users)
   this.userForm.reset();
  //  this.userForm.disable();
  }
}

  contentLoaded() {
    console.log('File loaded');
  }
}
