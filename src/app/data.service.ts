import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endPoint = 'https://vast-shore-74260.herokuapp.com/banks';
  cityBankData = [];
  constructor(public http: HttpClient) { }

  fetchData(city: string) {
    return this.http.get(this.endPoint + '?city=' + city.toUpperCase());
  }

}
