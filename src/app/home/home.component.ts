import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { FilterUtils } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textFilter: string;
  selectedCity;
  banks: any = [];
  dataLoadedState = false;
  filteredBanks;
  cities = [{ label: 'MUMBAI', value: 'MUMBAI' }, { label: 'BANGALORE', value: 'BANGALORE' }, { label: 'KOCHI', value: 'KOCHI' }, { label: 'DELHI', value: 'DELHI' }, { label: 'ERNALULAM', value: 'ERNAKULAM' }];

  constructor(public dataSvc: DataService) {
    // this.dataSvc.cities.forEach(city => {
    //   this.dataSvc.fetchData(city).subscribe(res => {
    //     this.dataSvc.cityBankData[city] = res;
    //     this.dataLoadedState = true;
    //   });
    // });
    // console.log(this.dataSvc.cityBankData);


  }


  ngOnInit() {
    this.dataSvc.fetchData('mumbai').subscribe((res) => {
      this.banks = res;
      console.log(JSON.stringify(res));
      this.dataLoadedState = true;
    })

    // FilterUtils['custom'] = (value, filter): boolean => {
    //   if (filter === undefined || filter === null || filter.trim() === '') {
    //     return true;
    //   }

    //   if (value === undefined || value === null) {
    //     return false;
    //   }

    //   return parseInt(filter) > value;
    // }

  }




}
