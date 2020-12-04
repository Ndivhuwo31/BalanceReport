import { Component, OnInit } from '@angular/core';

// uncomment the following import in order to use Lodash
// import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myData : any;
  constructor() { }

  ngOnInit(): void {
    this.myData = JSON.parse(localStorage.getItem('transaction'))


  }

}
