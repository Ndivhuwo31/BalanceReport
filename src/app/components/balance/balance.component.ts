import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
totalBalance :number =0;
  constructor() { }

  ngOnInit(): void {
    let transactions: any[] = JSON.parse(localStorage.getItem('transactions'));

    for (let i = 0; i < transactions.length; i++) {
      console.log(transactions[i].transactionType)

      if (transactions[i].transactionType == "Expences") {
      this.totalBalance = this.totalBalance - transactions[i].expenseAmount
      console.log(this.totalBalance)
    }
    else {
      this.totalBalance = this.totalBalance + transactions[i].expenseAmount
    }
    }
  }
}
