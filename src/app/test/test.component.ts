import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  loginForm: FormGroup;
showDashboard = false;
  constructor(private fb: FormBuilder, private router:Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
this.showDashboard =true;
      // API call here
      this.router.navigate(['/header'])
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
