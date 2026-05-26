import { Component } from '@angular/core';
import { CardserviceService } from './cardservice.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  userForm!: FormGroup;
  users:any;

constructor(private cardservice:CardserviceService, private fb: FormBuilder){
  this.cardservice.getComments(1).subscribe(res=>{   //1 id ka data milega
    console.log(res)
  });
this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      skills: this.fb.array([this.fb.control('')]),
    });

}


  async ngOnInit() {

    try {

      const data = await this.cardservice.getPromiseData();

      console.log(data);

      this.users = data;

    } catch (error) {

      console.log('Error:', error);

    }

  }


  getSkill() {
    
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    this.getSkill().push(this.fb.control(''));
    const arr = [1, 2, 3, 4, 2, 5, 3, 6];
    
    const duplicates = arr.filter(
      (item, index) => arr.indexOf(item) !== index
    );
    
    console.log(duplicates);
  }

  remove(i: number) {
    this.getSkill().removeAt(i);
  }
  submit() {
    alert(`this.userForm.get('name').value + this.userForm.get('lname').value`);
  }

}
