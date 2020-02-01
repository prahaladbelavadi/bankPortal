(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel *ngIf=\"dataLoadedState\">\n\n  <p-header>\n    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n      (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto; margin-right: 10px;\">\n\n    <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" (onChange)=\"selectionUpdate($event)\">\n      <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p>\n    </p-dropdown>\n\n  </p-header>\n\n\n  <p-table [value]=\"banks\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[10,20,30]\" #dt\n    [globalFilterFields]=\"['bank_name','ifsc', 'branch', 'city','state','address']\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>NAME</th>\n        <th>IFSC</th>\n        <!-- <th>BANK ID</th> -->\n        <th>BRANCH</th>\n        <th>CITY</th>\n        <th>STATE</th>\n        <th>ADDRESS</th>\n        <th (click)=\"resetFav()\"> Fav </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bank>\n      <tr>\n        <td>{{bank.bank_name}}</td>\n        <td>{{bank.ifsc}}</td>\n        <!-- <td>{{banks.bank_id}}</td> -->\n        <td>{{bank.branch}}</td>\n        <td>{{bank.city}}</td>\n        <td>{{bank.state}}</td>\n        <td>{{bank.address}}</td>\n        <td ngClass=\"fav\" (click)=favorite(bank.ifsc)> <i class=\"pi pi-heart\"></i> </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</p-panel>\n\n<p-progressSpinner *ngIf=!dataLoadedState></p-progressSpinner>\n\n\n<app-testing></app-testing>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/testing/testing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testing/testing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Basic</h3>\n<p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterWithContains($event)\" [size]=\"30\"\n[minLength]=\"1\" placeholder=\"Hint: type 'a' or 'o'\" [dropdown]=\"true\" field=\"label\" [style]=\"{'width':'250px'}\">\n    <ng-template let-brand pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <img src=\"assets/showcase/images/demo/car/{{brand.value}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n            <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand.value}}</div>\n        </div>\n    </ng-template>\n</p-autoComplete>\n\n<h3>Custom</h3>\n<p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n        <tr>\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                <input *ngSwitchCase=\"'year'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                <input *ngSwitchCase=\"'brand'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                <input *ngSwitchCase=\"'color'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\">\n            <td *ngFor=\"let col of columns\">\n                {{rowData[col.field]}}\n            </td>\n        </tr>\n    </ng-template>\n</p-table> -->\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [{ path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bankPortal';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);





// import { HttpModule } from "@angular/common/http";










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _testing_testing_component__WEBPACK_IMPORTED_MODULE_11__["TestingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.endPoint = 'https://vast-shore-74260.herokuapp.com/banks';
        this.cityBankData = [];
    }
    fetchData(city) {
        return this.http.get(this.endPoint + '?city=' + city.toUpperCase());
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);

// checkFav(bank.ifsc)


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fav {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXN0L0RvY3VtZW50cy9QZXJzb25hbC9CYW5raW5nLVBvcnRhbC9iYW5rUG9ydGFsL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2e1xuICBjb2xvcjogcmVkO1xufVxuIiwiLmZhdiB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");



let HomeComponent = class HomeComponent {
    constructor(dataSvc) {
        this.dataSvc = dataSvc;
        this.banks = [];
        this.dataLoadedState = false;
        this.cities = [
            { label: "BANGALORE", value: "BANGALORE" },
            { label: "MUMBAI", value: "MUMBAI" },
            { label: "KOCHI", value: "KOCHI" },
            { label: "DELHI", value: "DELHI" },
            { label: "ERNALULAM", value: "ERNAKULAM" }
        ];
    }
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
    checFav(ifsc) {
        if (ifsc)
            JSON.parse(localStorage.getItem("fav"));
    }
};
HomeComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/testing/testing.component.scss":
/*!************************************************!*\
  !*** ./src/app/testing/testing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestingComponent = class TestingComponent {
};
TestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testing',
        template: __webpack_require__(/*! raw-loader!./testing.component.html */ "./node_modules/raw-loader/index.js!./src/app/testing/testing.component.html"),
        styles: [__webpack_require__(/*! ./testing.component.scss */ "./src/app/testing/testing.component.scss")]
    })
], TestingComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/test/Documents/Personal/Banking-Portal/bankPortal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map