import { Component, OnInit } from "@angular/core";
import { DataService } from "./../data.service";
import { Bank } from "../bank";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  textFilter: string;
  selectedCity;
  banks: any = [];
  dataLoadedState = false;
  filteredBanks;
  cities = [
    { label: "BANGALORE", value: "BANGALORE" },
    { label: "MUMBAI", value: "MUMBAI" },
    { label: "KOCHI", value: "KOCHI" },
    { label: "DELHI", value: "DELHI" },
    { label: "ERNAKULAM", value: "ERNAKULAM" }
  ];

  constructor(public dataSvc: DataService, public route: Router) {}

  ngOnInit() {
    this.selectionUpdate({ value: "Bangalore" });
  }

  selectionUpdate(event) {
    this.dataSvc.fetchData(event.value).subscribe(res => {
      this.banks = res;

      console.log(res[0]);
      const loc = localStorage.getItem("fav");

      this.dataLoadedState = true;
    });
  }

  favorite(bank) {
    localStorage.setItem("fav", JSON.stringify(bank));
  }

  resetFav() {
    localStorage.removeItem("fav");
  }

  checFav(ifsc) {
    if (ifsc) {
      JSON.parse(localStorage.getItem("fav"));
    }
  }

  pickBank(bank: Bank) {
    const ifsc = bank.ifsc;
    this.dataSvc.bankDetail = bank;

    this.route.navigate([ifsc]);
  }
}
