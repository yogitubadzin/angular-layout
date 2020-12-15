function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-views-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/item-list/item-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/item-list/item-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsItemListItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui items\">\n  <div class=\"item\" *ngFor=\"let item of items\">\n    <div class=\"image\">\n      <img [src]=\"item.image\" />\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">{{ item.title }}</div>\n      <div class=\"description\">\n        <p>\n          {{ item.description }}\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/statistics/statistics.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/statistics/statistics.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsStatisticsStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui statistics\">\n  <div class=\"statistic\" *ngFor=\"let stat of data\">\n    <div class=\"value\">\n      {{ stat.value }}\n    </div>\n    <div class=\"label\">\n      {{ stat.label }}\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/views-home/views-home.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/views-home/views-home.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsViewsHomeViewsHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-divider>Statistics Component</app-divider>\n<app-statistics [data]=\"stats\"></app-statistics>\n\n<app-divider>Item List Component</app-divider>\n<app-item-list [items]=\"items\"></app-item-list>\n";
    /***/
  },

  /***/
  "./src/app/views/item-list/item-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/views/item-list/item-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsItemListItemListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/views/item-list/item-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/item-list/item-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ItemListComponent */

  /***/
  function srcAppViewsItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
      return ItemListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemListComponent =
    /*#__PURE__*/
    function () {
      function ItemListComponent() {
        _classCallCheck(this, ItemListComponent);

        this.items = [];
      }

      _createClass(ItemListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemListComponent.prototype, "items", void 0);
    ItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/item-list/item-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-list.component.css */
      "./src/app/views/item-list/item-list.component.css")).default]
    })], ItemListComponent);
    /***/
  },

  /***/
  "./src/app/views/statistics/statistics.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/views/statistics/statistics.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsStatisticsStatisticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/views/statistics/statistics.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/statistics/statistics.component.ts ***!
    \**********************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppViewsStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StatisticsComponent =
    /*#__PURE__*/
    function () {
      function StatisticsComponent() {
        _classCallCheck(this, StatisticsComponent);

        this.data = [];
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatisticsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StatisticsComponent.prototype, "data", void 0);
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/statistics/statistics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistics.component.css */
      "./src/app/views/statistics/statistics.component.css")).default]
    })], StatisticsComponent);
    /***/
  },

  /***/
  "./src/app/views/views-home/views-home.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/views/views-home/views-home.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsViewsHomeViewsHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZpZXdzLWhvbWUvdmlld3MtaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/views/views-home/views-home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/views-home/views-home.component.ts ***!
    \**********************************************************/

  /*! exports provided: ViewsHomeComponent */

  /***/
  function srcAppViewsViewsHomeViewsHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsHomeComponent", function () {
      return ViewsHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewsHomeComponent =
    /*#__PURE__*/
    function () {
      function ViewsHomeComponent() {
        _classCallCheck(this, ViewsHomeComponent);

        this.stats = [{
          value: 22,
          label: '# of Users'
        }, {
          value: 900,
          label: 'Revenue'
        }, {
          value: 50,
          label: 'Reviews'
        }];
        this.items = [{
          image: '/assets/images/couch.jpeg',
          title: 'Couch',
          description: 'This is a fantastic couch to sit on'
        }, {
          image: '/assets/images/dresser.jpeg',
          title: 'Dresser',
          description: 'This is a great dresser to put stuff in'
        }];
      }

      _createClass(ViewsHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewsHomeComponent;
    }();

    ViewsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-views-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./views-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/views-home/views-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./views-home.component.css */
      "./src/app/views/views-home/views-home.component.css")).default]
    })], ViewsHomeComponent);
    /***/
  },

  /***/
  "./src/app/views/views-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/views-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: ViewsRoutingModule */

  /***/
  function srcAppViewsViewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsRoutingModule", function () {
      return ViewsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _views_home_views_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views-home/views-home.component */
    "./src/app/views/views-home/views-home.component.ts");

    var routes = [{
      path: '',
      component: _views_home_views_home_component__WEBPACK_IMPORTED_MODULE_3__["ViewsHomeComponent"]
    }];

    var ViewsRoutingModule = function ViewsRoutingModule() {
      _classCallCheck(this, ViewsRoutingModule);
    };

    ViewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewsRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/views.module.ts":
  /*!***************************************!*\
    !*** ./src/app/views/views.module.ts ***!
    \***************************************/

  /*! exports provided: ViewsModule */

  /***/
  function srcAppViewsViewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsModule", function () {
      return ViewsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _views_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views-routing.module */
    "./src/app/views/views-routing.module.ts");
    /* harmony import */


    var _views_home_views_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./views-home/views-home.component */
    "./src/app/views/views-home/views-home.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/views/statistics/statistics.component.ts");
    /* harmony import */


    var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-list/item-list.component */
    "./src/app/views/item-list/item-list.component.ts");

    var ViewsModule = function ViewsModule() {
      _classCallCheck(this, ViewsModule);
    };

    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_views_home_views_home_component__WEBPACK_IMPORTED_MODULE_5__["ViewsHomeComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _views_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], ViewsModule);
    /***/
  }
}]);
//# sourceMappingURL=views-views-module-es5.js.map