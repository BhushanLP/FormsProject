import { Component } from '@angular/core';

@Component({
  selector: 'app-template-sample',
  templateUrl: './template-sample.component.html',
  styleUrls: ['./template-sample.component.css']
})
export class TemplateSampleComponent {
   states = ["Andhra Pradesh","Assam","Bihar","Chhattisgarh","Goa"];

   user={fname:'Bhushan',lname:'Paradkar'}

  submitHandler(myForm: any){
    console.log("form values status---->",myForm)
    console.log("form values---->",myForm.value)
  }

}
