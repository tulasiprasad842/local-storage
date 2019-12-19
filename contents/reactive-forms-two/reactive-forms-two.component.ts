import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reactive-forms-two',
  templateUrl: './reactive-forms-two.component.html',
  styleUrls: ['./reactive-forms-two.component.css']
})
export class ReactiveFormsTwoComponent implements OnInit {

  title: 'Validforms'
  educations: Education[] = [
    { value: 'mca', viewValue: 'MCA' },
    { value: 'btech', viewValue: 'B.Tech' },
    { value: 'degree', viewValue: 'Degree' }
  ];
  reactiveForm: FormGroup;
  data: any = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.data = localStorage.getItem("users");
    console.log("Data ==>", this.data);
    this.reactiveForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
      gender: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      education: [null, Validators.required],
      date: [null, Validators.required]
    });

    console.log("Data_Befor =>", this.data);
    this.data = JSON.parse(this.data);
    console.log("Data_After =>", this.data);

    if(this.data != null || this.data != undefined) {
      this.reactiveForm.patchValue({
        name:this.data[0].Name, 
        email:this.data[0].Email,
        pass: this.data[0].Password,
        gender:this.data[0].Gender,
        mobile:this.data[0].Mobile,
        date: this.data[0].dob,
        education: this.data[0].education
      })
    }

  }


  onSubmit() {
    alert("Your Form is Submitted..Mr " + this.reactiveForm.value.name);
    console.log("value=>", this.reactiveForm.value);
  }

}
