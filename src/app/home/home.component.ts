import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banks: any;

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.fetchData('mumbai').subscribe(res => {
      this.dataSvc.mumbaiData = res;
      this.banks = res;
      console.log(res);
    });
  }

}
