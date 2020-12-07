import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.scss']
})
export class ExpencesComponent implements OnInit {
  validatingForm: FormGroup;
annie:any[] = [];
  constructor() { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      expenseDescription: new FormControl('', Validators.required),
      expenseAmount: new FormControl('', Validators.required),
      transactionType: new FormControl('', Validators.required)
    });

  }
  get transactionType() {
    return this.validatingForm.get('transactionType');

  }

// GETTING ITEMS FROM LOCAL STORAGE
  get expenseDescription() {
    return this.validatingForm.get('expenseDescription');
  }
// GETTING AMOUNT FROM LOCAL STORAGE
  get expenseAmount() {
    return this.validatingForm.get('expenseAmount');
  }

// ADDING DATA IN LOCAL STORAGE

  add(){

if(localStorage.length > 0){
  this.annie = JSON.parse(localStorage.getItem('transactions'));
  this.annie.push(this.validatingForm.value);

   localStorage.setItem("transactions", JSON.stringify(this.annie));

}
else{localStorage.setItem("transactions", JSON.stringify(this.annie));}


}
}
