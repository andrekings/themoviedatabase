(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");






var routes = [
    { path: '', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'movie/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");









var _c0 = function () { return ["/movies"]; };
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "The Movie Database";
        this.themeName = 'indigo';
    }
    AppComponent.prototype.changeTheme = function (color) {
        this.themeName = color;
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 6, consts: [["fullscreen", "", 3, "ngClass"], ["color", "primary", "role", "toolbar", 1, "fixed-header"], ["mat-icon-button", "", "role", "button", "aria-label", "menu", 3, "click"], [3, "routerLink"], [1, "height"], ["sideNav", ""], ["role", "link", "mat-list-item", "", 3, "routerLink", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "view_headline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Movies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themeName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEFycXVpdm9zXFxQdWJsaWNSZXBvc1xcdGhlbW92aWVkYXRhYmFzZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUNDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGV7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG4iLCIuY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuIl19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/filter/filter.component */ "./src/app/shared/filter/filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm5/service-worker.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_sw_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/sw.service */ "./src/app/services/sw.service.ts");
/* harmony import */ var _shared_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/social-share/social-share.component */ "./src/app/shared/social-share/social-share.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



















var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false },
        };
        return _this;
    }
    MyHammerConfig.ɵfac = function MyHammerConfig_Factory(t) { return ɵMyHammerConfig_BaseFactory(t || MyHammerConfig); };
    MyHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: MyHammerConfig, factory: MyHammerConfig.ɵfac });
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerGestureConfig"]));

var ɵMyHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetInheritedFactory"](MyHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](MyHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"]
    }], null, null); })();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig },
            _services_movie_db_service__WEBPACK_IMPORTED_MODULE_8__["MovieDBService"],
            _services_sw_service__WEBPACK_IMPORTED_MODULE_14__["SwService"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('/themoviedatabase/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                }),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["TrailerDialogComponent"],
        _shared_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_15__["SocialShareComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__["MoviesComponent"],
        _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
                    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["TrailerDialogComponent"],
                    _shared_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_15__["SocialShareComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__["MoviesComponent"],
                    _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('/themoviedatabase/ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
                    }),
                ],
                providers: [
                    { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig },
                    _services_movie_db_service__WEBPACK_IMPORTED_MODULE_8__["MovieDBService"],
                    _services_sw_service__WEBPACK_IMPORTED_MODULE_14__["SwService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
                entryComponents: [_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["TrailerDialogComponent"], _shared_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_15__["SocialShareComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent, TrailerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerDialogComponent", function() { return TrailerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");



















function MovieDetailsComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 3);
} }
var _c0 = function (a0, a1) { return { "mat-green": a0, "mat-red": a1 }; };
function MovieDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.movie.backdrop_path + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.movie.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, ctx_r1.movie.release_date, "y"), " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.movie.runtime, " minutes \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r1.movie.vote_average >= 5, ctx_r1.movie.vote_average < 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.movie.vote_average, " ");
} }
function MovieDetailsComponent_div_3_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r7.name);
} }
function MovieDetailsComponent_div_3_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cast_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + cast_r8.imgUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r8.character);
} }
function MovieDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function MovieDetailsComponent_div_3_Template_mat_tab_group_selectedIndexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieDetailsComponent_div_3_mat_chip_6_Template, 2, 1, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estrelando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieDetailsComponent_div_3_mat_card_9_Template, 7, 4, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movie.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movie.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movie.cast);
} }
var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, dbService, dialog, domSanitizer, titleService, location, router) {
        var _this = this;
        this.route = route;
        this.dbService = dbService;
        this.dialog = dialog;
        this.domSanitizer = domSanitizer;
        this.titleService = titleService;
        this.location = location;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.route.params.subscribe(function (params) {
            _this.movieId = params['id'];
            _this.getMovieDetails(_this.movieId);
        });
    }
    MovieDetailsComponent.prototype.ngOnInit = function () { };
    MovieDetailsComponent.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.dbService.getMovieDetails(id).subscribe(function (res) {
            _this.movie = res;
            _this.getCast();
            _this.titleService.setTitle(res.title);
            _this.movie.poster_path = "" + environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imgUrl + _this.movie.poster_path;
            _this.movie.backdrop_path = "https://image.tmdb.org/t/p/original" + _this.movie.backdrop_path;
        });
    };
    MovieDetailsComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    MovieDetailsComponent.prototype.getCast = function () {
        var _this = this;
        this.dbService.getCastMovie(this.movieId).subscribe(function (res) {
            _this.movie.cast = res['cast'].slice(0, 10).map(function (cast) {
                cast.imgUrl = "" + environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imgUrl + cast.profile_path;
                return cast;
            });
        });
    };
    MovieDetailsComponent.prototype.getMovieVideos = function () {
        var _this = this;
        if (this.movie.videos && this.movie.videos.length) {
            return;
        }
        this.dbService.getMovieVideos(this.movieId).subscribe(function (res) {
            _this.movie.videos = res.results.map(function (video) {
                video.imgUrl = "https://img.youtube.com/vi/" + video.key + "/0.jpg";
                video.url = "https://www.youtube.com/watch?v=" + video.key;
                return video;
            });
        });
    };
    MovieDetailsComponent.prototype.getMovieReviews = function () {
        var _this = this;
        if (this.movie.reviews && this.movie.reviews.length) {
            return;
        }
        this.dbService.getMovieReviews(this.movieId).subscribe(function (res) {
            _this.movie.reviews = res.results || [];
        });
    };
    MovieDetailsComponent.prototype.similarMovies = function () {
        var _this = this;
        if (this.movie.similarMovies && this.movie.similarMovies.length) {
            return;
        }
        if (this.movieId) {
            this.dbService.getSimilarMovies(this.movieId).subscribe(function (res) {
                _this.movie.similarMovies = _this.dbService.formatMovies(res.results);
            });
        }
    };
    MovieDetailsComponent.prototype.selectChange = function (event) {
        if (event === 1) {
            this.getMovieVideos();
        }
        else if (event === 2) {
            this.getMovieReviews();
        }
        else if (event === 3) {
            this.similarMovies();
        }
    };
    MovieDetailsComponent.prototype.openDialog = function (video) {
        var videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?autoplay=1");
        var dialogRef = this.dialog.open(TrailerDialogComponent, {
            data: { videoUrl: videoUrl }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    MovieDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_db_service__WEBPACK_IMPORTED_MODULE_6__["MovieDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 4, vars: 3, consts: [["color", "primary", "mode", "indeterminate", 4, "ngIf"], ["class", "movie-expo", 3, "background-image", 4, "ngIf"], ["class", "movie-details", 4, "ngIf"], ["color", "primary", "mode", "indeterminate"], [1, "movie-expo"], [1, "movie-head"], [1, "mat-h2"], ["mat-icon-button", "", "aria-label", "back", 1, "btn-back", 3, "click"], [1, "movie-info"], [3, "ngClass"], [1, "movie-details"], [3, "selectedIndexChange"], ["label", "Details"], [4, "ngFor", "ngForOf"], ["class", "cast-list", 4, "ngFor", "ngForOf"], [1, "cast-list"], ["mat-card-avatar", "", 1, "cast-header-image"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailsComponent_div_2_Template, 18, 13, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailsComponent_div_3_Template, 10, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.movie);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".movie-expo[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top right, #000000, #0d0d0d);\n  height: 80vh;\n  width: 100%;\n  min-height: 350px;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.movie-details[_ngcontent-%COMP%] {\n  width: 100%;\n  clear: both;\n  padding: 10px 20px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.movie-head[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px 20px;\n  color: #fff;\n}\n\n.movie-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.movie-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.movie-info[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 20px;\n  padding-left: 40px;\n}\n\n.movie-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.cast-list[_ngcontent-%COMP%] {\n  float: left;\n  min-width: 200px;\n  margin: 5px;\n  padding: 5px;\n}\n\n.cast-header-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.cast-list[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%], .cast-list[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.similar-movies[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: space-around;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n}\n\n.similar-movies[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 200px;\n}\n\n.similar-movies[_ngcontent-%COMP%]   .s-movie[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.movie-trailers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  flex-flow: row wrap;\n}\n\n.movie-trailers[_ngcontent-%COMP%] {\n  width: 400px;\n  display: inline-flex;\n  margin: 10px;\n  height: 300px;\n}\n\n.mat-green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.mat-red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (max-width: 720px) {\n  .movie-details[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .similar-movies[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .movie-head[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9FOlxcQXJxdWl2b3NcXFB1YmxpY1JlcG9zXFx0aGVtb3ZpZWRhdGFiYXNlL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpRUFBaUU7RUFDakUsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUNDMUI7O0FERUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQ0N0Qjs7QURFQTtFQUNJLHNCQUFzQjtBQ0MxQjs7QURFQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQ0NmOztBREVBO0VBQ0ksU0FBUztBQ0NiOztBREVBO0VBQ0ksU0FBUztBQ0NiOztBREVBO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUNDdEI7O0FERUE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztBQ0NmOztBREVBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQ0NoQjs7QURFQTtFQUNJLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUNDNUI7O0FERUE7O0VBRUksU0FBUztBQ0NiOztBREVBO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQ0N2Qjs7QURFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FDQ2hCOztBREVBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsd0JBQXdCO0FDQzVCOztBREVBO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQ0N2Qjs7QURFQTtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7QUNDakI7O0FERUE7RUFDSSxZQUFZO0FDQ2hCOztBREVBO0VBQ0ksVUFDSjtBQ0FBOztBREVBO0VBQ0k7SUFDSSxVQUFVO0VDQ2hCO0VEQ0U7SUFDSSxXQUFXO0VDQ2pCO0VEQ0U7SUFDSSxhQUNKO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1leHBvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDAwMDAsICMwZDBkMGQpO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1vdmllLWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5tb3ZpZS1oZWFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubW92aWUtaGVhZCBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1oZWFkIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubW92aWUtaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4ubW92aWUtaW5mbyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FzdC1saXN0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2FzdC1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmNhc3QtbGlzdCAubWF0LWNhcmQtc3VidGl0bGUsXHJcbi5jYXN0LWxpc3QgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpbWlsYXItbW92aWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuXHJcbi5zaW1pbGFyLW1vdmllcyAuaXRlbSB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpbWlsYXItbW92aWVzIC5zLW1vdmllIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ubW92aWUtdHJhaWxlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxufVxyXG5cclxuLm1vdmllLXRyYWlsZXJzIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLm1hdC1ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5tYXQtcmVkIHtcclxuICAgIGNvbG9yOiByZWRcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAubW92aWUtZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5zaW1pbGFyLW1vdmllcyAuaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubW92aWUtaGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgfVxyXG59XHJcbiIsIi5tb3ZpZS1leHBvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwMDAwMCwgIzBkMGQwZCk7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubW92aWUtZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubW92aWUtaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vdmllLWhlYWQgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5tb3ZpZS1oZWFkIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5tb3ZpZS1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5tb3ZpZS1pbmZvIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FzdC1saXN0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jYXN0LWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmNhc3QtbGlzdCAubWF0LWNhcmQtc3VidGl0bGUsXG4uY2FzdC1saXN0IC5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpbWlsYXItbW92aWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uc2ltaWxhci1tb3ZpZXMgLml0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2ltaWxhci1tb3ZpZXMgLnMtbW92aWUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLm1vdmllLXRyYWlsZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4ubW92aWUtdHJhaWxlcnMge1xuICB3aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDEwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5tYXQtZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5tYXQtcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5tb3ZpZS1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5zaW1pbGFyLW1vdmllcyAuaXRlbSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLm1vdmllLWhlYWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return MovieDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_movie_db_service__WEBPACK_IMPORTED_MODULE_6__["MovieDBService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
var TrailerDialogComponent = /** @class */ (function () {
    function TrailerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TrailerDialogComponent.ɵfac = function TrailerDialogComponent_Factory(t) { return new (t || TrailerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    TrailerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailerDialogComponent, selectors: [["trailer-modal-dialog"]], decls: 0, vars: 0, template: function TrailerDialogComponent_Template(rf, ctx) { }, styles: [".close-button[_ngcontent-%COMP%] {\n        position: absolute;\n        top: -30px;\n        right: -24px;\n        padding: 0;\n        min-width: 40px;\n      }"] });
    return TrailerDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'trailer-modal-dialog',
                templateUrl: './TrailerDialogModal.html',
                styles: [
                    "\n      .close-button {\n        position: absolute;\n        top: -30px;\n        right: -24px;\n        padding: 0;\n        min-width: 40px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var _shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/filter/filter.component */ "./src/app/shared/filter/filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");














function MoviesComponent_mat_progress_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
function MoviesComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_mat_card_6_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var movie_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToMovieDetails(movie_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", movie_r2.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", movie_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r2.overview, " ");
} }
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(titleService, DBService, router) {
        this.titleService = titleService;
        this.DBService = DBService;
        this.router = router;
        this.defaultImage = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].placeholderImg;
        this.options = { page: 1 };
        this.pager = { currentPage: 1, totalPages: 0 };
        this.isLoading = false;
        this.getDiscover(this.options);
        this.titleService.setTitle('Discover New Movies');
    }
    MoviesComponent.prototype.ngOnInit = function () { };
    MoviesComponent.prototype.getDiscover = function (options) {
        var _this = this;
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.DBService.getDiscover('movie', options).subscribe(function (res) {
            _this.pager.totalPages = res.total_pages;
            _this.isLoading = false;
            _this.itemList = _this.DBService.formatMovies(res.results);
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 1000);
        }, function (error) {
            _this.isLoading = false;
        });
    };
    MoviesComponent.prototype.changeSelection = function (options) {
        this.pager.currentPage = 1;
        options.page = 1;
        this.getDiscover(options);
    };
    MoviesComponent.prototype.like = function (e, movie) {
        e.stopPropagation();
        alert(movie.title);
    };
    MoviesComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    MoviesComponent.prototype.changePage = function (pageno) {
        this.pager.currentPage = pageno;
        this.options.page = pageno;
        this.getDiscover(this.options);
    };
    MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_db_service__WEBPACK_IMPORTED_MODULE_4__["MovieDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 9, vars: 3, consts: [[1, "container"], [3, "filterChange"], [1, "main-content"], ["color", "primary", "mode", "indeterminate", 4, "ngIf"], ["class", "example-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "clearfix"], [3, "pager", "changePage"], ["color", "primary", "mode", "indeterminate"], [1, "example-card", 3, "click"], ["mat-card-image", "", 1, "card-img", 3, "src", "alt"], [1, "ellipsis"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Descubra novos filmes aqui");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-filter", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function MoviesComponent_Template_app_filter_filterChange_3_listener($event) { return ctx.changeSelection($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoviesComponent_mat_progress_spinner_5_Template, 1, 0, "mat-progress-spinner", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MoviesComponent_mat_card_6_Template, 7, 4, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function MoviesComponent_Template_app_footer_changePage_8_listener($event) { return ctx.changePage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", ctx.pager);
        } }, directives: [_shared_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"]], styles: [".card-img[_ngcontent-%COMP%] {\n  background-image: url(http://via.placeholder.com/500x281?text=themoviedatabase);\n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL0U6XFxBcnF1aXZvc1xcUHVibGljUmVwb3NcXHRoZW1vdmllZGF0YWJhc2Uvc3JjXFxhcHBcXG1vdmllc1xcbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0VBQStFO0VBQy9FLDJCQUEyQjtFQUFFLHFCQUFBO0VBQzdCLDRCQUE0QjtFQUFFLDRCQUFBO0VBQzlCLHNCQUFzQjtBQ0d4QiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MjgxP3RleHQ9dGhlbW92aWVkYXRhYmFzZSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIi5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MjgxP3RleHQ9dGhlbW92aWVkYXRhYmFzZSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"] });
    return MoviesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _services_movie_db_service__WEBPACK_IMPORTED_MODULE_4__["MovieDBService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/movie-db.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/movie-db.service.ts ***!
  \**********************************************/
/*! exports provided: MovieDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDBService", function() { return MovieDBService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");







var MovieDBService = /** @class */ (function () {
    function MovieDBService(http) {
        this.http = http;
        this.API_BASE = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_BASE;
        this.API_KEY = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY;
    }
    MovieDBService.prototype.formatParams = function (options) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('api_key', this.API_KEY)
            .set('language', 'pt-BR');
        if (options) {
            Object.keys(options).forEach(function (key) {
                params = params.append(key, options[key]);
            });
        }
        return { params: params };
    };
    MovieDBService.prototype.sortByList = function () {
        return [
            { key: 'popularity.desc', value: 'Popularity Descending' },
            { key: 'popularity.asc', value: 'Popularity Ascending' },
            { key: 'vote_count.asc', value: 'Rating Ascending' },
            { key: 'vote_count.desc', value: 'Rating Descending' },
            { key: 'primary_release_date.desc', value: 'Release Date Descending' },
            { key: 'primary_release_date.asc', value: 'Release Date Ascending' }
        ];
    };
    MovieDBService.prototype.getYears = function () {
        var year = new Date().getFullYear();
        var yearList = [];
        for (var i = 0; i < 25; i++) {
            yearList.push(year - i);
        }
        return yearList;
    };
    MovieDBService.prototype.getMovies = function (type) {
        type = type || 'popular';
        return this.http
            .get(this.API_BASE + "movie/" + type, this.formatParams({}))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieDetails = function (movieId) {
        var movieDetilasUrl = this.API_BASE + "movie/" + movieId;
        return this.http.get(movieDetilasUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieVideos = function (movieId) {
        var movieTrailersUrl = this.API_BASE + "movie/" + movieId + "/videos";
        return this.http.get(movieTrailersUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getMovieReviews = function (movieId) {
        var movieReviewUrl = this.API_BASE + "movie/" + movieId + "/reviews";
        return this.http.get(movieReviewUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getGenres = function () {
        var generesUrl = this.API_BASE + "genre/movie/list";
        return this.http.get(generesUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getkeywords = function (val) {
        var generesUrl = this.API_BASE + "search/keyword?api_key=" + this.API_KEY + "&query=" + val + "&page=1";
        return this.http.get(generesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.formatMovies = function (items) {
        var placeholderImg = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].placeholderImg;
        var imgUrl = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imgUrl;
        return items.map(function (item) {
            if (item) {
                item.poster_path = item.poster_path
                    ? "" + imgUrl + item.poster_path
                    : placeholderImg;
                item.backdrop_path = item.backdrop_path
                    ? "" + imgUrl + item.backdrop_path
                    : placeholderImg;
                item.overview = item.overview.substr(0, 100) + '...';
                return item;
            }
        });
    };
    MovieDBService.prototype.getSimilarMovies = function (movie_id) {
        var similarMovieUrl = this.API_BASE + "movie/" + movie_id + "/similar";
        return this.http.get(similarMovieUrl, this.formatParams({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getCastMovie = function (movie_id) {
        var castUrl = this.API_BASE + "movie/" + movie_id + "/credits?api_key=" + this.API_KEY;
        return this.http.get(castUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.getDiscover = function (type, options) {
        // options.api_key = this.API_KEY;
        var discoverUrl = this.API_BASE + "discover/" + type;
        return this.http.get(discoverUrl, this.formatParams(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MovieDBService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            this.body = error || '';
            this.err = this.body.error || JSON.stringify(this.body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + this.err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    MovieDBService.ɵfac = function MovieDBService_Factory(t) { return new (t || MovieDBService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    MovieDBService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieDBService, factory: MovieDBService.ɵfac });
    return MovieDBService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDBService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sw.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/sw.service.ts ***!
  \****************************************/
/*! exports provided: SwService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwService", function() { return SwService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm5/service-worker.js");





function promptUser(event) {
    return true;
}
var SwService = /** @class */ (function () {
    function SwService(updates) {
        // log sw updates
        updates.available.subscribe(function (event) {
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        updates.activated.subscribe(function (event) {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
        // check for updates
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(6 * 60 * 60).subscribe(function () { return updates.checkForUpdate(); });
        // reload the app after updates
        updates.available.subscribe(function (event) {
            if (promptUser(event)) {
                updates.activateUpdate().then(function () { return document.location.reload(); });
            }
        });
    }
    SwService.ɵfac = function SwService_Factory(t) { return new (t || SwService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"])); };
    SwService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SwService, factory: SwService.ɵfac });
    return SwService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/filter/filter.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/filter/filter.component.ts ***!
  \***************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_movie_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movie-db.service */ "./src/app/services/movie-db.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");









function FilterComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var year_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r3);
} }
function FilterComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sort_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sort_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sort_r4.value);
} }
function FilterComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var genres_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genres_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genres_r5.name);
} }
var FilterComponent = /** @class */ (function () {
    function FilterComponent(DBService) {
        var _this = this;
        this.DBService = DBService;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.DBService.getGenres().subscribe(function (res) { return (_this.genresList = res.genres); });
        this.options = {};
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.yearsList = this.DBService.getYears();
        this.sortByList = this.DBService.sortByList();
    };
    FilterComponent.prototype.changeSelection = function () {
        this.filterChange.emit(this.options);
    };
    FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_db_service__WEBPACK_IMPORTED_MODULE_1__["MovieDBService"])); };
    FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], outputs: { filterChange: "filterChange" }, decls: 10, vars: 6, consts: [[1, "discover-filters"], ["role", "form"], ["role", "list", "placeholder", "Ano", 3, "ngModel", "ngModelChange", "selectionChange"], ["role", "option", 3, "value", 4, "ngFor", "ngForOf"], ["role", "list", "placeholder", "Classifica\u00E7\u00E3o", 3, "ngModel", "ngModelChange", "selectionChange"], ["role", "list", "multiple", "", "placeholder", "G\u00EAneros", 3, "ngModel", "ngModelChange", "selectionChange"], ["role", "option", 3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.options.primary_release_year = $event; })("selectionChange", function FilterComponent_Template_mat_select_selectionChange_2_listener() { return ctx.changeSelection(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.options.sort_by = $event; })("selectionChange", function FilterComponent_Template_mat_select_selectionChange_5_listener() { return ctx.changeSelection(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterComponent_mat_option_6_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.options.with_genres = $event; })("selectionChange", function FilterComponent_Template_mat_select_selectionChange_8_listener() { return ctx.changeSelection(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_mat_option_9_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.primary_release_year);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearsList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.sort_by);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortByList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.with_genres);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genresList);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: [".discover-filters[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 10px 5px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbHRlci9FOlxcQXJxdWl2b3NcXFB1YmxpY1JlcG9zXFx0aGVtb3ZpZWRhdGFiYXNlL3NyY1xcYXBwXFxzaGFyZWRcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQ0NuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2NvdmVyLWZpbHRlcnN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn0iLCIuZGlzY292ZXItZmlsdGVycyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iXX0= */"] });
    return FilterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss']
            }]
    }], function () { return [{ type: _services_movie_db_service__WEBPACK_IMPORTED_MODULE_1__["MovieDBService"] }]; }, { filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");




var _c0 = function (a0) { return { disabled: a0 }; };
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FooterComponent.prototype.setPage = function (page) {
        if (page <= 0) {
            page = 1;
        }
        else if (page > this.pager.totalPages) {
            return;
        }
        this.changePage.emit(page);
    };
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { pager: "pager" }, outputs: { changePage: "changePage" }, decls: 26, vars: 13, consts: [[1, "container"], [1, "clearfix"], [1, "pagination"], ["title", "First", 3, "ngClass"], [3, "click"], ["title", "Prev", 3, "ngClass"], ["title", "Next", 3, "ngClass"], ["title", "Last", 3, "ngClass"], ["href", "https://github.com/andrekings"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() { return ctx.setPage(1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "first_page");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_8_listener() { return ctx.setPage(ctx.pager.currentPage - 1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "chevron_left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_14_listener() { return ctx.setPage(ctx.pager.currentPage + 1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "chevron_right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_18_listener() { return ctx.setPage(ctx.pager.totalPages); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "last_page");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Criado e Desenvolvido por ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Andr\u00E9 Lopes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.pager.currentPage === 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.pager.currentPage === 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pager.currentPage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.pager.currentPage === ctx.pager.totalPages));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.pager.currentPage === ctx.pager.totalPages));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9FOlxcQXJxdWl2b3NcXFB1YmxpY1JlcG9zXFx0aGVtb3ZpZWRhdGFiYXNlL3NyY1xcYXBwXFxzaGFyZWRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtBQ0N0Qjs7QURFQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQ0NiOztBREVBO0VBQ0ksZUFBZTtBQ0NuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4iLCJmb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucGFnaW5hdGlvbiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, { pager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
            ],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]], exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_18__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
                ],
                providers: [],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/social-share/social-share.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/social-share/social-share.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function() { return SocialShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");




var SocialShareComponent = /** @class */ (function () {
    function SocialShareComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shareUrl = "https://github.com/andrekings/movie/" + this.data.movie.id;
    }
    SocialShareComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SocialShareComponent.prototype.share = function (type) {
        var href = '';
        var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600';
        switch (type) {
            case 'facebook':
                href += "https://www.facebook.com/sharer/sharer.php?u=" + this.shareUrl;
                window.open(href, '', options);
                break;
            case 'twitter':
                href += "https://twitter.com/intent/tweet?text=" + this.data.movie.original_title + "&url=" + this.shareUrl;
                window.open(href, '', options);
                break;
            case 'google+':
                href += "https://plus.google.com/share?url=" + this.shareUrl;
                window.open(href, '', options);
                break;
            default:
                break;
        }
    };
    SocialShareComponent.prototype.copyLink = function (movieId) {
        var inputElement = document.getElementById('inputId');
        inputElement.select();
        document.execCommand('copy');
        inputElement.blur();
        this.dialogRef.close();
    };
    SocialShareComponent.prototype.ngOnInit = function () { };
    SocialShareComponent.ɵfac = function SocialShareComponent_Factory(t) { return new (t || SocialShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    SocialShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialShareComponent, selectors: [["app-social-share"]], decls: 3, vars: 0, consts: [["matDialogTitle", ""]], template: function SocialShareComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Socail Share");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-dialog-content");
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: [".share-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  justify-items: flex-start;\n}\n\n.item-poster[_ngcontent-%COMP%] {\n  height: 300px;\n  flex: 1;\n  margin-right: 10px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.item-details[_ngcontent-%COMP%] {\n  flex: 2;\n  text-align: left;\n}\n\n.item-details[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.item-details[_ngcontent-%COMP%]   .item-social-share[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.item-details[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NvY2lhbC1zaGFyZS9FOlxcQXJxdWl2b3NcXFB1YmxpY1JlcG9zXFx0aGVtb3ZpZWRhdGFiYXNlL3NyY1xcYXBwXFxzaGFyZWRcXHNvY2lhbC1zaGFyZVxcc29jaWFsLXNoYXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc29jaWFsLXNoYXJlL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQ0MzQjs7QURFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUNDOUI7O0FERUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FDQ2xCOztBREhBO0VBSUksV0FBVztBQ0dmOztBRFBBO0VBT0ksYUFBYTtFQUNiLDZCQUE2QjtBQ0lqQzs7QURaQTtFQVdJLGFBQWE7QUNLakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc29jaWFsLXNoYXJlL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uaXRlbS1wb3N0ZXIge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pdGVtLWRldGFpbHMge1xyXG4gIGZsZXg6IDI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pdGVtLXNvY2lhbC1zaGFyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiIsIi5zaGFyZS1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLml0ZW0tcG9zdGVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5pdGVtLWRldGFpbHMge1xuICBmbGV4OiAyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbS1kZXRhaWxzIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbS1kZXRhaWxzIC5pdGVtLXNvY2lhbC1zaGFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaXRlbS1kZXRhaWxzIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"] });
    return SocialShareComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-share',
                templateUrl: './social-share.component.html',
                styleUrls: ['./social-share.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    placeholderImg: "http://via.placeholder.com/500x281?text=themoviedatabase",
    imgUrl: "http://image.tmdb.org/t/p/w500",
    API_BASE: 'https://api.themoviedb.org/3/',
    API_KEY: 'e98136de756705459104be0a2c27f514',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Arquivos\PublicRepos\themoviedatabase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map