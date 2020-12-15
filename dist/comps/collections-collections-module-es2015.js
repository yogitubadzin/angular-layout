(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collections-collections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/biography/biography.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/biography/biography.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>biography works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections-home/collections-home.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections-home/collections-home.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-divider>Table Component</app-divider>\n<app-table class=\"striped celled\" [data]=\"data\" [headers]=\"headers\"></app-table>\n\n<app-divider>Tab Menu</app-divider>\n<app-tabs>\n  <a\n    class=\"item\"\n    routerLink=\"./\"\n    routerLinkActive=\"active\"\n    [routerLinkActiveOptions]=\"{ exact: true }\"\n    >Biography</a\n  >\n  <a class=\"item\" routerLink=\"./companies\" routerLinkActive=\"active\"\n    >Companies</a\n  >\n  <a class=\"item\" routerLink=\"./partners\" routerLinkActive=\"active\">Partners</a>\n</app-tabs>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/companies/companies.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/companies/companies.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>companies works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/partners/partners.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/partners/partners.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>partners works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/table/table.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/table/table.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table [ngClass]=\"classNames\" class=\"ui table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let header of headers\">\n        {{ header.label }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let record of data\">\n      <td *ngFor=\"let header of headers\">\n        {{ record[header.key] }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/tabs/tabs.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/tabs/tabs.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <div class=\"ui vertical fluid tabular menu\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"twelve wide stretched column\">\n    <div class=\"ui segment\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/collections/biography/biography.component.css":
/*!***************************************************************!*\
  !*** ./src/app/collections/biography/biography.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2Jpb2dyYXBoeS9iaW9ncmFwaHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/collections/biography/biography.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/collections/biography/biography.component.ts ***!
  \**************************************************************/
/*! exports provided: BiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographyComponent", function() { return BiographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BiographyComponent = class BiographyComponent {
    constructor() { }
    ngOnInit() {
    }
};
BiographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-biography',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./biography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/biography/biography.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./biography.component.css */ "./src/app/collections/biography/biography.component.css")).default]
    })
], BiographyComponent);



/***/ }),

/***/ "./src/app/collections/collections-home/collections-home.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/collections/collections-home/collections-home.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLWhvbWUvY29sbGVjdGlvbnMtaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/collections/collections-home/collections-home.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/collections/collections-home/collections-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: CollectionsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsHomeComponent", function() { return CollectionsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CollectionsHomeComponent = class CollectionsHomeComponent {
    constructor() {
        this.partOfLink = 'hi';
        this.data = [
            { name: 'James', age: 24, job: 'Designer', employed: true },
            { name: 'Jill', age: 26, job: 'Engineer', employed: false },
            { name: 'Elyse', age: 25, job: 'Engineer', employed: true }
        ];
        this.headers = [
            { key: 'employed', label: 'Has a Job?' },
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'job', label: 'Job' }
        ];
    }
    ngOnInit() { }
};
CollectionsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collections-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collections-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections-home/collections-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collections-home.component.css */ "./src/app/collections/collections-home/collections-home.component.css")).default]
    })
], CollectionsHomeComponent);



/***/ }),

/***/ "./src/app/collections/collections-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/collections/collections-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CollectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsRoutingModule", function() { return CollectionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _collections_home_collections_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections-home/collections-home.component */ "./src/app/collections/collections-home/collections-home.component.ts");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biography/biography.component */ "./src/app/collections/biography/biography.component.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/collections/companies/companies.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/collections/partners/partners.component.ts");







const routes = [
    {
        path: '',
        component: _collections_home_collections_home_component__WEBPACK_IMPORTED_MODULE_3__["CollectionsHomeComponent"],
        children: [
            { path: '', component: _biography_biography_component__WEBPACK_IMPORTED_MODULE_4__["BiographyComponent"] },
            { path: 'companies', component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesComponent"] },
            { path: 'partners', component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_6__["PartnersComponent"] }
        ]
    }
];
let CollectionsRoutingModule = class CollectionsRoutingModule {
};
CollectionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CollectionsRoutingModule);



/***/ }),

/***/ "./src/app/collections/collections.module.ts":
/*!***************************************************!*\
  !*** ./src/app/collections/collections.module.ts ***!
  \***************************************************/
/*! exports provided: CollectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsModule", function() { return CollectionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _collections_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections-routing.module */ "./src/app/collections/collections-routing.module.ts");
/* harmony import */ var _collections_home_collections_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collections-home/collections-home.component */ "./src/app/collections/collections-home/collections-home.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/collections/table/table.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./biography/biography.component */ "./src/app/collections/biography/biography.component.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/collections/companies/companies.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/collections/partners/partners.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/collections/tabs/tabs.component.ts");











let CollectionsModule = class CollectionsModule {
};
CollectionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_collections_home_collections_home_component__WEBPACK_IMPORTED_MODULE_4__["CollectionsHomeComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], _biography_biography_component__WEBPACK_IMPORTED_MODULE_7__["BiographyComponent"], _companies_companies_component__WEBPACK_IMPORTED_MODULE_8__["CompaniesComponent"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_9__["PartnersComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _collections_routing_module__WEBPACK_IMPORTED_MODULE_3__["CollectionsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
    })
], CollectionsModule);



/***/ }),

/***/ "./src/app/collections/companies/companies.component.css":
/*!***************************************************************!*\
  !*** ./src/app/collections/companies/companies.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/collections/companies/companies.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/collections/companies/companies.component.ts ***!
  \**************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompaniesComponent = class CompaniesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/companies/companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.component.css */ "./src/app/collections/companies/companies.component.css")).default]
    })
], CompaniesComponent);



/***/ }),

/***/ "./src/app/collections/partners/partners.component.css":
/*!*************************************************************!*\
  !*** ./src/app/collections/partners/partners.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/collections/partners/partners.component.ts":
/*!************************************************************!*\
  !*** ./src/app/collections/partners/partners.component.ts ***!
  \************************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnersComponent = class PartnersComponent {
    constructor() { }
    ngOnInit() {
    }
};
PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partners',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/partners/partners.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partners.component.css */ "./src/app/collections/partners/partners.component.css")).default]
    })
], PartnersComponent);



/***/ }),

/***/ "./src/app/collections/table/table.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collections/table/table.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/collections/table/table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collections/table/table.component.ts ***!
  \******************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableComponent = class TableComponent {
    constructor() {
        this.classNames = '';
        this.data = [];
        this.headers = [];
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('class')
], TableComponent.prototype, "classNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "headers", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/collections/table/table.component.css")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/collections/tabs/tabs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/collections/tabs/tabs.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/collections/tabs/tabs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/collections/tabs/tabs.component.ts ***!
  \****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsComponent = class TabsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/tabs/tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.component.css */ "./src/app/collections/tabs/tabs.component.css")).default]
    })
], TabsComponent);



/***/ })

}]);
//# sourceMappingURL=collections-collections-module-es2015.js.map