import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textFilter: string;
  selectedCity;
  banks: any;
  dataLoadedState = false;


  constructor(public dataSvc: DataService) {
    this.dataSvc.cities.forEach(city => {
      this.dataSvc.fetchData(city).subscribe(res => {
        this.dataSvc.cityBankData[city] = res;
      });
    });
    console.log(this.dataSvc.cityBankData);
  }

  ngOnInit() {
    this.dataLoadedState = true;
  }

}
