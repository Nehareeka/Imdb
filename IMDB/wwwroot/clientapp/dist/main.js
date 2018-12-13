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

/***/ "./app/Shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/Shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.movies = [];
    }
    DataService.prototype.loadMovies = function () {
        var _this = this;
        return this.http.get("/api/movie")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.movies = data;
            return _this.movies;
        }));
    };
    DataService.prototype.loadActorDetails = function (name) {
        var _this = this;
        return this.http.get("/api/actor/" + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.person = data;
            return _this.person;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/Shared/movie.ts":
/*!*****************************!*\
  !*** ./app/Shared/movie.ts ***!
  \*****************************/
/*! exports provided: Cast, Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cast", function() { return Cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Cast = /** @class */ (function () {
    function Cast() {
    }
    return Cast;
}());

var Movie = /** @class */ (function () {
    function Movie() {
        this.producerName = new Array();
        this.releaseYear = new Date();
        this.cast = new Array();
    }
    return Movie;
}());



/***/ }),

/***/ "./app/Shared/person.ts":
/*!******************************!*\
  !*** ./app/Shared/person.ts ***!
  \******************************/
/*! exports provided: MovieData, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieData", function() { return MovieData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var MovieData = /** @class */ (function () {
    function MovieData() {
    }
    return MovieData;
}());

var Person = /** @class */ (function () {
    function Person() {
        this.dob = new Date();
        this.movies = new Array();
    }
    return Person;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <router-outlet></router-outlet>\r\n      \r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'IMDB';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'imdb-app',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _movie_movieList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movieList.component */ "./app/movie/movieList.component.ts");
/* harmony import */ var _movie_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie/add.component */ "./app/movie/add.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./person/person.component */ "./app/person/person.component.ts");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shared/dataService */ "./app/Shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var route = [
    { path: "", component: _movie_movieList_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"] },
    { path: "add", component: _movie_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"] },
    { path: "person/:name", component: _person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"] },
    { path: "person/:producerName", component: _person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _movie_movieList_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"],
                _movie_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(route, {
                    useHash: true
                    // enableTracing: true //for debugging of the routes
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _Shared_dataService__WEBPACK_IMPORTED_MODULE_9__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/movie/add.component.html":
/*!**************************************!*\
  !*** ./app/movie/add.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\" >\r\n        <form (submit)=\"onSubmit()\" #form=\"ngForm\" novalidate>\r\n            <div class=\"form-group has-error\">\r\n                <label class=\"control-label\">Name</label>\r\n                <input #name=\"ngModel\" type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"movie.name\" required/>\r\n                <div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-danger\">Enter movie name.</div>\r\n            </div>\r\n            <div class=\"form-group\"  [class.has-error]=\"name.invalid && name.touched\">\r\n                <label class=\"control-label\" for=\"releaseYear\">Release Year</label>\r\n                <input type=\"date\" class=\"form-control\" name=\"releaseYear\" [(ngModel)]=\"movie.releaseYear\" #releaseyear=\"ngModel\" required/>\r\n                <div *ngIf=\"releaseyear.invalid && releaseyear.touched\" class=\"alert alert-danger\">Enter movie name.</div>\r\n            </div>\r\n            <div class=\"form-group\" [class.has-error]=\"plot.invalid && plot.touched\">\r\n                <label class=\"control-label\" for=\"plot\">Plot</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"plot\" [(ngModel)]=\"movie.plot\" #plot=\"ngModel\" required />\r\n                <div *ngIf=\"plot.invalid && plot.touched\" class=\"alert alert-danger\">Enter movie name.</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"cast\">Cast</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"cast\" [(ngModel)]=\"movie.cast\" required/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"producer\">Producer</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"producer\" [(ngModel)]=\"movie.producerName\" required/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Add\"/>\r\n                <a routerLinl=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/movie/add.component.ts":
/*!************************************!*\
  !*** ./app/movie/add.component.ts ***!
  \************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./app/Shared/dataService.ts");
/* harmony import */ var _Shared_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/movie */ "./app/Shared/movie.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = /** @class */ (function () {
    function AddComponent(data, router) {
        this.data = data;
        this.router = router;
        this.movie = new _Shared_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function () {
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-movie',
            template: __webpack_require__(/*! ./add.component.html */ "./app/movie/add.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./app/movie/movieList.component.css":
/*!*******************************************!*\
  !*** ./app/movie/movieList.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-info {\r\n    max-height: 550px;\r\n}\r\n\r\n.movie-info .movie-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.movie-info .cast {\r\n    display: inline-block;\r\n}\r\n\r\n.movie-info img {\r\n    max-width: 300px;\r\n    max-height: 300px;\r\n    float: left;\r\n    margin: 2px 15px;\r\n    border: solid 1px black;\r\n}"

/***/ }),

/***/ "./app/movie/movieList.component.html":
/*!********************************************!*\
  !*** ./app/movie/movieList.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"movie-info col-md-4 well well-sm\" *ngFor=\"let m of movies\">\r\n        <div class=\"card bg-light p-1 m-1\">\r\n            <img src=\"https://image.tmdb.org/t/p/w600_and_h900_bestv2{{ m.poster }}\" class=\"img-responsive\" />\r\n\r\n            <div class=\"movie-name\">{{m.name}} </div>\r\n            <div><strong>Year  </strong>Released in {{m.releaseYear | date:'mediumDate'}}</div>\r\n            <div>\r\n                <strong>Cast </strong>\r\n                <div class=\"cast\" *ngFor=\"let a of m.cast; let lastItem=last;\">\r\n                    <a [routerLink]=\"['/person', a.name ]\"> {{a.name}}<span *ngIf=\"!lastItem\">, </span> </a>\r\n                </div>\r\n            </div>\r\n            <div><strong>Producer  </strong><a [routerLink]=\"['/person',m.producerName | json ]\">{{m.producerName.name}}</a></div>\r\n            <a routerLink=\"actor\" id=\"\" class=\"btn btn-success btn-sm pull-right\">EDIT Info</a>\r\n        </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./app/movie/movieList.component.ts":
/*!******************************************!*\
  !*** ./app/movie/movieList.component.ts ***!
  \******************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./app/Shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(data) {
        this.data = data;
        this.movies = [];
        this.movies = data.movies;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadMovies()
            .subscribe(function (data) {
            if (data) {
                _this.movies = data;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "name", void 0);
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "movie-list",
            template: __webpack_require__(/*! ./movieList.component.html */ "./app/movie/movieList.component.html"),
            styles: [__webpack_require__(/*! ./movieList.component.css */ "./app/movie/movieList.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./app/person/person.component.html":
/*!******************************************!*\
  !*** ./app/person/person.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"card bg-light p-1 m-1\">\r\n\r\n\r\n        <div class=\"movie-name\">{{person.name}} </div>\r\n        <div><strong>Date of Birth  </strong>Released in {{person.dob | date:'mediumDate'}}</div>\r\n        <div><strong>Bio  </strong>{{person.bio}}</div>\r\n        <div><strong>Gender  </strong>{{person.sex}}</div>\r\n        <div *ngFor=\"let m of person.movies\">\r\n            <div>{{m.name}}</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/person/person.component.ts":
/*!****************************************!*\
  !*** ./app/person/person.component.ts ***!
  \****************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./app/Shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/person */ "./app/Shared/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonComponent = /** @class */ (function () {
    function PersonComponent(data, _route) {
        this.data = data;
        this._route = _route;
        this.person = new _Shared_person__WEBPACK_IMPORTED_MODULE_3__["Person"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.input = params['name'];
        });
        this.input = this.isJSON(this.input);
    };
    PersonComponent.prototype.getPerson = function (name) {
        var _this = this;
        this.data.loadActorDetails(name)
            .subscribe(function (data) { return _this.person = data; });
    };
    PersonComponent.prototype.isJSON = function (data) {
        try {
            this.person = JSON.parse(data);
        }
        catch (e) {
            return this.getPerson(data);
        }
    };
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "person-detail",
            template: __webpack_require__(/*! ./person.component.html */ "./app/person/person.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Practice\IMDB\IMDB\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map