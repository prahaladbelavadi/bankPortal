import { FilterUtils } from 'primeng/utils/';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banks: any;
  dataLoadedState = false;

  constructor(private dataSvc: DataService) {
    this.dataSvc.fetchData('mumbai').subscribe(res => {
      this.dataSvc.mumbaiData = res;
      this.banks = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataLoadedState = true;
    FilterUtils.contains = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    }

  }

}
