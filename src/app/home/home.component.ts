import { Component, OnInit } from "@angular/core";
import { DataService } from "./../data.service";

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
    { label: "ERNALULAM", value: "ERNAKULAM" }
  ];

  constructor(public dataSvc: DataService) {}

  ngOnInit() {
    this.selectionUpdate({ value: "Bangalore" });
  }

  selectionUpdate(event) {
    this.dataSvc.fetchData(event.value).subscribe(res => {
      this.banks = res;

      // console.log(JSON.stringify(res));
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

  checFav(ifsc){
  if(ifsc)
    JSON.parse(localStorage.getItem("fav"));
  }

}
