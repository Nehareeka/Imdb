"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dataService_1 = require("../Shared/dataService");
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
    MovieListComponent = __decorate([
        core_1.Component({
            selector: "movie-list",
            templateUrl: "movieList.component.html",
            styleUrls: ["movieList.component.css"]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movieList.component.js.map