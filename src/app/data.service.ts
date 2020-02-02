import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private endPoint = 'https://vast-shore-74260.herokuapp.com/banks';
  cityBankData = [];
  public bankDetail: Bank;

  constructor(public http: HttpClient) {}

  fetchData(city: string) {
    return this.http.get(this.endPoint + '?city=' + city.toUpperCase());
  }


}

// checkFav(bank.ifsc)
