import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.scss']
})
export class ExpencesComponent implements OnInit {
  validatingForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      expenseDescription: new FormControl('', Validators.required),
      expenseAmount: new FormControl('', Validators.required)
    });

  }


  get expenseDescription() {
    return this.validatingForm.get('expenseDescription');
  }

  get expenseAmount() {
    return this.validatingForm.get('expenseAmount');
  }


  add(){
    console.log(this.validatingForm.value)
  }
}
