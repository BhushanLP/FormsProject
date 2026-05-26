import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  // getTodos(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/todos')
  // }
  // postTodos(data:any){
  //   return this.http.post('https://jsonplaceholder.typicode.com/todos', data)
  // }
  // updateTodos(data:any,id:any){
  //   return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
  // }
  // deleteTodos(id:any){
  //   return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  // }
  todoList:any;
  btnName:any = 'Submit';
  todoForm!:FormGroup;
  isEditClicked:boolean = false;

constructor(private sharedService: SharedService, private fb:FormBuilder){ { 
this.todoForm = this.fb.group({
  id: ['', [Validators.required]],
  userId: ['', [Validators.required]],
  title: ['', [Validators.required, Validators.minLength(3)]],
  completed: []
});
}
}
callGet(){
  this.sharedService.getTodos().subscribe((res)=>{
    this.todoList = res;
    console.log(res);
  })
}
ngOnInit() {  
  this.callGet();
}

onSubmit(){
  if(!this.isEditClicked){
  this.sharedService.postTodos(this.todoForm.value).subscribe((res)=>{
    console.log(res);
    this.todoList.push(res);
    this.todoForm.reset(); // ✅ reset form after submission
  })
  }else{
    this.onUpdate();
  }
  // this.sharedService.postTodos(this.todoForm.value).subscribe((res)=>{
  //   console.log(res);
  //   this.todoList.push(res);
  // })

}
onEdit(e:any){
  this.isEditClicked = true;
  this.btnName = 'Update';
this.todoForm.patchValue({
  id: e.id,
  userId: e.userId,
  title: e.title,
  completed: e.completed
});
}

onUpdate(){
  const updatedData = this.todoForm.value;
  this.sharedService.updateTodos(updatedData.id,updatedData).subscribe(()=>{
    this.todoForm.reset(); // ✅ reset form after submission
    this.callGet(); // ✅ refresh list after update
    this.btnName = 'Submit';
  })
}
onDelete(id:any){
  this.sharedService.deleteTodos(id).subscribe(() => {
  this.todoList = this.todoList.filter((e:any) => e.id !== id);
  });
}

}
