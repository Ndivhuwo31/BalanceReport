import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
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

localStorage.setItem("transactions" , JSON.stringify(this.validatingForm.value))


  }

  }
