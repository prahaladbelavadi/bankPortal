import { Component, OnInit } from "@angular/core";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-bank-detail",
  templateUrl: "./bank-detail.component.html",
  styleUrls: ["./bank-detail.component.scss"]
})
export class BankDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataSvc: DataService) {}

  bankDetail;

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res);
    });

    this.bankDetail = this.dataSvc.bankDetail;

    console.log(this.bankDetail);
  }
}
