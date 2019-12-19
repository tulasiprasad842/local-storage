import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  educations: Education[] = [
    { value: 'mca', viewValue: 'MCA' },
    { value: 'btech', viewValue: 'B.Tech' },
    { value: 'degree', viewValue: 'Degree' }
  ];

  hide = true;
  misMatch: boolean = false;
  myForm: FormGroup;
  isSubmitted: boolean = false;
  data;

  constructor(private fb: FormBuilder) {


    this.myForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
      confirmPass: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      gender: [null, Validators.required],
      education: [null, Validators.required],
      dob: [null, Validators.required],
    })
  }

  checkPassword() {
    let password = this.myForm.value.pass;
    let confirmPassword = this.myForm.value.confirmPass;

    console.log(password + '<-->' + confirmPassword);
    return password === confirmPassword ? this.misMatch = false : this.misMatch = true;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.data = [{
      Name: this.myForm.value.name,
      Email: this.myForm.value.email,
      Password: this.myForm.value.pass,
      Mobile: this.myForm.value.mobile,
      Gender: this.myForm.value.gender,
      dob: this.myForm.value.dob,
      education: this.myForm.value.education
    }]

    localStorage.setItem("users", JSON.stringify(this.data));
    console.log("data", this.data);
    var users = localStorage.getItem("users");
    alert(users);
  }

  ngOnInit() { }

}
