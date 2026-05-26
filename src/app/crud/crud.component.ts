import { Component, OnInit } from '@angular/core';
import { Employee } from '../constant/interface';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  employeeForm!:FormGroup;
  employeeList:Employee[]= []; 
  isaddClicked:boolean = false;
  isEditClicked:boolean = false;  
  buttonName:string = 'Submit';
  isEditMode: boolean = false;

  constructor(private fb:FormBuilder, private service:SharedService){
    this.employeeForm = this.fb.group({
      id:['',[Validators.required]],
      title:['',[Validators.required,Validators.minLength(3)]],
      author:['']
    })
  }

  ngOnInit():void{
this.getEmployeeData() // ✅ refresh list initially when component loads
  }

getEmployeeData(){
    this.service.getData().subscribe((data:any)=>{          //get api initially fetches the data from json server and then we are storing that data in employeeList array and then we are using that array to display the data in table
      this.employeeList = data;
    })
    // this.service.getData1('admin').subscribe((data:any)=>{          //get api initially fetches the data from json server and then we are storing that data in employeeList array and then we are using that array to display the data in table
    //   this.employeeList = data;
    //   console.log(data)
    // })

}

  onSubmit(){
    this.isaddClicked = false;

      if (this.isEditMode) {
    this.onUpdate();   // ✅ call update instead of post
  } else {
    this.service.postData(this.employeeForm.value).subscribe((data:any) => {
      this.employeeList.push(data);
      this.getEmployeeData(); // ✅ refresh list after submit
    });
  } 
    this.employeeForm.reset()
  }

onUpdate() {
  const updatedData = this.employeeForm.value;

  this.service.updateData(updatedData.id, updatedData).subscribe(() => {
    this.getEmployeeData(); // ✅ refresh list after update
  });
}
  onCancel(){
    this.isaddClicked = false;
  }
  
  onReset(){
    this.employeeForm.reset()
  }
onAdd(){
this.isaddClicked = true;
}

onEdit(employee:Employee){
  this.isaddClicked = true;
  this.isEditClicked = true;
  this.isEditMode = true;
  this.buttonName = 'Update';

this.employeeForm.patchValue({
  id:employee.id,
  title:employee.title,
  author:employee.author
})

}

onDelete(id:any){
  this.service.deleteData(id).subscribe(() => {
    this.employeeList = this.employeeList.filter(emp => emp.id !== id);
  });
  this.getEmployeeData(); // ✅ refresh list after delete
}

}


