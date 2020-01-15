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
  filteredBanks :any;


  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBanks = this.listFilter ? this.doFilter(this.listFilter) : this.banks;

  }

  cities = [
    { name: 'MUMBAI' },
    { name: 'BANGALORE' },
    { name: 'KOCHI' },
    { name: 'DELHI' },
    { name: 'ANGOLA' }
  ];

  constructor(private dataSvc: DataService) {
    this.dataSvc.fetchData('mumbai').subscribe(res => {
      this.dataSvc.mumbaiData = res;
      this.banks = res;
      console.log(res);
    });
    this.filteredBanks = this.banks;
    this.listFilter = '';
  }

  ngOnInit() {
    this.dataLoadedState = true;
  }

  doFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.banks.filter((bank) =>
        bank.bank_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}
