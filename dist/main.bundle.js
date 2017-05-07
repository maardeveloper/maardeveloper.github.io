webpackJsonp([1,4],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(438);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancerResultService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancerResultService = (function () {
    function CancerResultService(http) {
        this.http = http;
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        this.userApiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT + "/users";
        this.apiUrl = "" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT_CANCER;
        // this.headers = new Headers({
        //   'Accept': 'version=1',
        //   'X-Application': 'client'
        // });
    }
    CancerResultService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    CancerResultService.prototype.getAllUsers = function () {
        var URL = "" + this.userApiUrl;
        return this.http
            .get(URL)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CancerResultService.prototype.getAllCancerResult = function () {
        var URL = "" + this.apiUrl;
        return this.http
            .get(URL)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CancerResultService.prototype.postCancerResult = function (cancer) {
        console.log('esto posteare =>', cancer);
        var URL = "" + this.apiUrl;
        return this.http
            .post(URL, { 'cancer': cancer })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CancerResultService.prototype.logURL = function () {
        console.log("" + this.apiUrl);
    };
    CancerResultService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CancerResultService);
    return CancerResultService;
    var _a;
}());
//# sourceMappingURL=cancer-result.service.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_network_service__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cancer_result_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_network, _cancerApi) {
        this._network = _network;
        this._cancerApi = _cancerApi;
        this.perceptron = null;
        this.outputs = [];
        this.willPassNeuralNet = 'neuralNet';
        this.toggleView = false;
        var TRAINING_SET = [
            {
                input: [0.5, 0.1, 0.3, 0.1, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.2, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.4, 0.6, 0.8, 0.4, 0.1, 0.8, 1, 0.1],
                output: [1]
            },
            {
                input: [0.5, 0.3, 0.2, 0.8, 0.5, 1, 0.8, 0.1, 0.2],
                output: [1]
            },
            {
                input: [1, 0.5, 1, 0.3, 0.5, 0.8, 0.7, 0.8, 0.3],
                output: [1]
            },
            {
                input: [0.4, 0.1, 0.1, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 1, 1, 1, 1, 1, 1, 0.1, 0.1],
                output: [1]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [1, 0.4, 0.3, 1, 0.3, 1, 0.7, 0.1, 0.2],
                output: [1]
            },
            {
                input: [0.5, 1, 1, 1, 0.5, 0.2, 0.8, 0.5, 0.1],
                output: [1]
            },
            {
                input: [0.8, 1, 1, 1, 0.6, 1, 1, 1, 10],
                output: [1]
            },
            {
                input: [0.2, 0.3, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.3, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.6, 0.3, 0.3, 0.3, 0.3, 0.2, 0.6, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.7, 0.1, 0.2, 0.3, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.2, 0.1, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.3, 0.1, 0.3, 0.4, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.6, 0.6, 0.5, 0.7, 0.6, 0.7, 0.7, 0.3],
                output: [1]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.5, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.6, 0.2, 0.3, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.8, 0.7, 0.4, 0.4, 0.5, 0.3, 0.5, 1, 0.1],
                output: [1]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.4, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [1, 1, 0.7, 0.8, 0.7, 0.1, 1, 1, 0.3],
                output: [1]
            },
            {
                input: [0.4, 0.2, 0.4, 0.3, 0.2, 0.2, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.2, 0.2, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 1, 1, 1, 1, 0.2, 1, 1, 10],
                output: [1]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.2, 0.3, 0.4, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.2, 0.1, 0.3, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.2, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.4, 0.5, 0.1, 0.8, 0.1, 0.3, 0.6, 0.1],
                output: [0]
            },
            {
                input: [0.7, 0.8, 0.8, 0.7, 0.3, 1, 0.7, 0.2, 0.3],
                output: [1]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.3, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.3, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.3, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.2],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.7, 0.4, 0.1, 0.6, 0.1, 0.7, 1, 0.3],
                output: [1]
            },
            {
                input: [0.5, 1, 1, 0.8, 0.5, 0.5, 0.7, 1, 0.1],
                output: [1]
            },
            {
                input: [0.3, 1, 0.7, 0.8, 0.5, 0.8, 0.7, 0.4, 0.1],
                output: [1]
            },
            {
                input: [0.3, 0.2, 0.1, 0.2, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.3, 0.2, 0.1, 0.3, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.4, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [1, 1, 1, 1, 0.5, 1, 1, 1, 7],
                output: [1]
            },
            {
                input: [0.5, 1, 1, 1, 0.4, 1, 0.5, 0.6, 0.3],
                output: [1]
            },
            {
                input: [0.5, 0.1, 0.1, 0.1, 0.2, 0.1, 0.3, 0.2, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            }
        ];
        var TESTING_SET = [
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.3, 0.1],
                output: [0]
            },
            {
                input: [0.4, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 8],
                output: [0]
            },
            {
                input: [0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 1, 1, 0.5, 0.4, 0.5, 0.4, 0.4, 0.1],
                output: [1]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.2],
                output: [0]
            },
            {
                input: [0.3, 0.1, 0.1, 0.1, 0.3, 0.2, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.2, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1],
                output: [0]
            },
            {
                input: [0.5, 1, 1, 0.3, 0.7, 0.3, 0.8, 1, 0.2],
                output: [1]
            },
            {
                input: [0.4, 0.8, 0.6, 0.4, 0.3, 0.4, 1, 0.6, 0.1],
                output: [1]
            }
        ];
        this.xTest = [];
        this.yTest = [];
        this.inputLayerSize = 9;
        this.hiddenLayerSize = 2;
        this.outputLayerSize = 1;
        this.inputLayer = new synaptic.Layer(this.inputLayerSize);
        this.hiddenLayer = new synaptic.Layer(this.hiddenLayerSize);
        this.outputLayer = new synaptic.Layer(this.outputLayerSize);
        this.inputLayer.project(this.hiddenLayer);
        this.hiddenLayer.project(this.outputLayer);
        this.neuralNet = new synaptic.Network({
            input: this.inputLayer,
            hidden: [this.hiddenLayer],
            output: this.outputLayer
        });
        this.trainer = new synaptic.Trainer(this.neuralNet);
        this.trainingSet = TRAINING_SET;
        this.testingSet = TESTING_SET;
        this.trainer.train(this.trainingSet, {
            rate: 0.2,
            iterations: 20,
            error: 0.05,
            shuffle: true,
            log: 1,
            cost: synaptic.Trainer.cost.CROSS_ENTROPY
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.doesHasCancer = function (valueActivated) {
        valueActivated > 0.75 ? this.answer = '!!!!!Tienes una alta probabilidad de cancer de mama, ve al doctor!!!!!'
            : this.answer = 'Tienes una baja probabilidad de cancer de mama, descuida :)';
        this.cancerPercentage = valueActivated;
        this.toggleViewAction();
    };
    HomeComponent.prototype.toggleViewAction = function () {
        this.toggleView = !this.toggleView;
    };
    HomeComponent.prototype.toggleViewFromRepeat = function () {
        this.toggleViewAction();
        this.popFromResult();
    };
    HomeComponent.prototype.activateFormInputs = function (formValues) {
        this.cancerResult = this.neuralNet.activate(formValues);
        this.resultsComponent.pushTheResult(formValues);
        this.doesHasCancer(this.neuralNet.activate(formValues));
    };
    HomeComponent.prototype.getTrainJSON = function () {
        var _this = this;
        this._network.getTrainingData().then(function (response) {
            _this.trainingNetworkArray = response;
        }).catch(function (error) { return console.log(error); });
    };
    HomeComponent.prototype.getTestJSON = function () {
        var _this = this;
        this._network.getTestData().then(function (response) {
            _this.testNetworkArray = response;
        }).catch(function (error) { return console.log(error); });
    };
    HomeComponent.prototype.fillxTest = function () {
        for (var _i = 0, _a = this.testNetworkArray; _i < _a.length; _i++) {
            var instance = _a[_i];
            var pushStuff = {};
            pushStuff['FIELD1'] = instance['FIELD1'];
            pushStuff['FIELD2'] = instance['FIELD2'];
            pushStuff['FIELD3'] = instance['FIELD3'];
            pushStuff['FIELD4'] = instance['FIELD4'];
            pushStuff['FIELD5'] = instance['FIELD5'];
            pushStuff['FIELD6'] = instance['FIELD6'];
            pushStuff['FIELD7'] = instance['FIELD7'];
            pushStuff['FIELD8'] = instance['FIELD8'];
            pushStuff['FIELD9'] = instance['FIELD9'];
            pushStuff['FIELD10'] = instance['FIELD10'];
            this.xTest.push(pushStuff);
        }
    };
    HomeComponent.prototype.fillyTest = function () {
        for (var _i = 0, _a = this.testNetworkArray; _i < _a.length; _i++) {
            var instance = _a[_i];
            var pushStuff = {};
            pushStuff['FIELD11'] = instance['FIELD11'];
            this.yTest.push(pushStuff);
        }
    };
    HomeComponent.prototype.binarizeOutput = function () {
        for (var _i = 0, _a = this.testNetworkArray; _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance['FIELD11'] == 2) {
                instance['FIELD11'] = 0;
            }
            if (instance['FIELD11'] == 4) {
                instance['FIELD11'] = 1;
            }
        }
    };
    HomeComponent.prototype.binarizeTestOutput = function () {
        for (var _i = 0, _a = this.yTest; _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance['FIELD11'] == 2) {
                instance['FIELD11'] = 0;
            }
            if (instance['FIELD11'] == 4) {
                instance['FIELD11'] = 1;
            }
        }
    };
    HomeComponent.prototype.binarizeTestInput = function () {
        for (var _i = 0, _a = this.xTest; _i < _a.length; _i++) {
            var instance = _a[_i];
            instance['FIELD2'] = instance['FIELD2'] / 10;
            instance['FIELD3'] = instance['FIELD3'] / 10;
            instance['FIELD4'] = instance['FIELD4'] / 10;
            instance['FIELD5'] = instance['FIELD5'] / 10;
            instance['FIELD6'] = instance['FIELD6'] / 10;
            instance['FIELD7'] = instance['FIELD7'] / 10;
            instance['FIELD8'] = instance['FIELD8'] / 10;
            instance['FIELD9'] = instance['FIELD9'] / 10;
            instance['FIELD10'] = instance['FIELD10'] / 10;
        }
    };
    HomeComponent.prototype.popFromResult = function () {
        this.resultsComponent.popLastEntry();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewChild */])('resultsComponent'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "resultsComponent", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'home',
            template: __webpack_require__(722),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]],
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cancer_result_service__["a" /* CancerResultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cancer_result_service__["a" /* CancerResultService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_ENDPOINT: 'http://localhost:3000/v1',
    API_ENDPOINT_CANCER: 'http://localhost:3000/cancers',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 489;


/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(438);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(717),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cancer_form_cancer_form_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_results_results_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_compare_result_compare_result_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_cancer_result_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(648);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_cancer_form_cancer_form_component__["a" /* CancerFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_compare_result_compare_result_component__["a" /* CompareResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_cancer_result_service__["a" /* CancerResultService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cancer_result_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cancer_form_service__ = __webpack_require__(654);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancerFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CancerFormComponent = (function () {
    function CancerFormComponent(fb, _cancerApi, document) {
        this.fb = fb;
        this._cancerApi = _cancerApi;
        this.document = document;
        this.formValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.cancerForm = fb.group({
            'cT': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'uCSi': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'uCSh': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'mA': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'sECS': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'bN': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'bC': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'nN': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'm': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    CancerFormComponent.prototype.binarizeData = function (valuesArray) {
        var binarizedArray = [];
        for (var _i = 0, valuesArray_1 = valuesArray; _i < valuesArray_1.length; _i++) {
            var arrayItem = valuesArray_1[_i];
            arrayItem = arrayItem / 10;
            binarizedArray.push(arrayItem);
        }
        return binarizedArray;
    };
    CancerFormComponent.prototype.submitForm = function () {
        var arrayData = [
            this.cancerForm.controls['cT'].value, this.cancerForm.controls['uCSi'].value,
            this.cancerForm.controls['uCSh'].value, this.cancerForm.controls['mA'].value,
            this.cancerForm.controls['sECS'].value, this.cancerForm.controls['bN'].value,
            this.cancerForm.controls['bC'].value, this.cancerForm.controls['nN'].value,
            this.cancerForm.controls['m'].value
        ];
        arrayData = this.binarizeData(arrayData);
        this.formValue.emit(arrayData);
        var jsonToApi = {
            'cT': arrayData[0],
            'uCSi': arrayData[1],
            'uCSh': arrayData[2],
            'mA': arrayData[3],
            'sECS': arrayData[4],
            'bN': arrayData[5],
            'bC': arrayData[6],
            'nN': arrayData[7],
            'm': arrayData[8]
        };
        this._cancerApi.postCancerResult(jsonToApi);
        this.cancerForm.reset();
        this.goNextSection();
    };
    CancerFormComponent.prototype.goNextSection = function () {
        console.log('scrolled');
    };
    CancerFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CancerFormComponent.prototype, "formValue", void 0);
    CancerFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'cancer-form',
            template: __webpack_require__(718),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_cancer_form_service__["a" /* CancerFormService */]],
            styles: [__webpack_require__(711)]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cancer_result_service__["a" /* CancerResultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cancer_result_service__["a" /* CancerResultService */]) === 'function' && _c) || Object, Object])
    ], CancerFormComponent);
    return CancerFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=cancer-form.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cancer_result_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareResultComponent = (function () {
    function CompareResultComponent(_cancerResult) {
        this._cancerResult = _cancerResult;
    }
    CompareResultComponent.prototype.ngOnInit = function () {
        this.getAllResults();
    };
    CompareResultComponent.prototype.getAllResults = function () {
        var _this = this;
        this._cancerResult.getAllCancerResult().then(function (response) {
            _this.resultArray = response;
            console.log('REspuesta de respuestas', response);
        }).catch(function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CompareResultComponent.prototype, "willPassNeuralNet", void 0);
    CompareResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'compare-result',
            template: __webpack_require__(719),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cancer_result_service__["a" /* CancerResultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cancer_result_service__["a" /* CancerResultService */]) === 'function' && _a) || Object])
    ], CompareResultComponent);
    return CompareResultComponent;
    var _a;
}());
//# sourceMappingURL=compare-result.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.alertTeam = function () {
        alert('Jorge, Roli, Mario, Peps');
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "toggleView", void 0);
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(720),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsComponent = (function () {
    function ResultsComponent() {
        this.arrayWithResults = [];
    }
    ResultsComponent.prototype.pushTheResult = function (currentAnswer) {
        var result = {};
        result['x_position'] = this.calculateXPositionResult(currentAnswer);
        result['y_position'] = this.calculateXPositionResult(currentAnswer);
        result['color'] = 'blue';
        result['delay'] = this.calculateDelayResult(currentAnswer);
        result['isOurResult'] = true;
        this.arrayWithResults.push(result);
    };
    ResultsComponent.prototype.fillTheResultsArray = function () {
        for (var _i = 0, _a = this.testingArray; _i < _a.length; _i++) {
            var result = _a[_i];
            result['x_position'] = this.calculateXPosition(result);
            result['y_position'] = this.calculateXPosition(result);
            result['color'] = this.calculateColor(result);
            result['delay'] = this.calculateDelay(result);
            result['isOurResult'] = false;
            this.arrayWithResults.push(result);
        }
    };
    ResultsComponent.prototype.calculateXPosition = function (result) {
        var xposition = 0;
        for (var _i = 0, _a = result.input; _i < _a.length; _i++) {
            var value = _a[_i];
            xposition = xposition + value;
        }
        xposition = (xposition / 9) * 100;
        return xposition;
    };
    ResultsComponent.prototype.calculateDelay = function (result) {
        var xposition = 0;
        for (var _i = 0, _a = result.input; _i < _a.length; _i++) {
            var value = _a[_i];
            xposition = xposition + value;
        }
        xposition = (xposition / 9);
        return xposition;
    };
    ResultsComponent.prototype.calculateXPositionResult = function (result) {
        var xposition = 0;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var value = result_1[_i];
            xposition = xposition + value;
        }
        xposition = (xposition / 9) * 100;
        return xposition;
    };
    ResultsComponent.prototype.calculateDelayResult = function (result) {
        var xposition = 0;
        for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
            var value = result_2[_i];
            xposition = xposition + value;
        }
        xposition = (xposition / 9);
        return xposition;
    };
    ResultsComponent.prototype.calculateColor = function (result) {
        var color = '';
        if (result.output[0] == 0) {
            color = 'green';
        }
        else {
            color = 'red';
        }
        return color;
    };
    ResultsComponent.prototype.ngOnInit = function () {
        this.fillTheResultsArray();
    };
    ResultsComponent.prototype.popLastEntry = function () {
        this.arrayWithResults.pop();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultsComponent.prototype, "testingArray", void 0);
    ResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'results',
            template: __webpack_require__(721),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResultsComponent);
    return ResultsComponent;
}());
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancerFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancerFormService = (function () {
    function CancerFormService(_http) {
        this._http = _http;
    }
    CancerFormService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    CancerFormService.prototype.lel = function () {
        console.log('lel');
    };
    CancerFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CancerFormService);
    return CancerFormService;
    var _a;
}());
//# sourceMappingURL=cancer-form.service.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = (function () {
    function NetworkService(_http) {
        this._http = _http;
    }
    NetworkService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    NetworkService.prototype.getTestData = function () {
        return this._http
            .get("assets/network/breast-cancer-wisconsin-test.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NetworkService.prototype.getTrainingData = function () {
        return this._http
            .get("assets/network/breast-cancer-wisconsin.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NetworkService.prototype.lel = function () {
        console.log('lel');
    };
    NetworkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], NetworkService);
    return NetworkService;
    var _a;
}());
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".cancer-form {\n  background-color: white;\n  width: 750px;\n  height: auto;\n}\nmd-card-header {\n  position: absolute;\n  width: 100%;\n  min-height: 5px;\n  top: 0;\n  left: 0;\n  background: #EA80B0;\n  margin-top: -4px !important;\n}\n.title {\n  font-size: 32px !important;\n  color: #FFFFFF;\n}\n.subtitle {\n  font-size: 14px !important;\n  color: #757575;\n}\n\n.cancerForm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.submit-button[disabled] {\n  background-color: #9E9E9E;\n}\n\nmd-card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 50px 0px;\n}\n\nmd-input-container {\n  margin: 0px 5px;\n  color: #212121;\n}\n\nmd-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.animated {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n          animation-name: shake;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".compare-result {\n  width: 700px;\n  height: 300px;\n  background-color: white;\n  overflow-y: auto;\n}\n\nmd-card-header {\n  position: absolute;\n  width: 100%;\n  min-height: 5px;\n  top: 0;\n  left: 0;\n  background: #EA80B0;\n}\n.title {\n  font-size: 32px !important;\n  color: #FFFFFF;\n}\n\nmd-card-content {\n  margin: 50px 0px 50px -300px;\n  width: 700px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.iteration {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #212121;\n}\n\n.iteration-item {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".navbar {\n  z-index: 100000;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #EA80B0;\n  padding-left: 20px;\n}\n\n.navbar > .logo {\n  color: #212121;\n  font-weight: bold;\n}\n\n.navbar > .buttons {\n  color: white;\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.buttons > .action {\n  padding: 0px 10px;\n  border-left: 1px solid white;\n  cursor: pointer;\n}\n\n.action:hover {\n  opacity: 0.8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".resultsContainer {\n  width: 300px;\n  height: 300px;\n  position: relative;\n  background-color: white;\n  color: #212121;\n}\n\n.isOurResult {\n  z-index: 100;\n  border: 1px solid lightgray;\n  opacity: 0.75;\n}\n\n.result {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n\n.animatedContainer {\n  -webkit-animation: animateContainer 10s infinite;\n          animation: animateContainer 10s infinite;\n}\n@-webkit-keyframes animateContainer {\n  0%   {\n    padding: 10px;\n    height: 20px;\n    width: 20px;\n }\n  50% {\n    padding: 0px;\n    height: 10px;\n    width: 10px;\n  }\n  100% {\n    padding: 10px;\n    height: 20px;\n    width: 20px;\n  }\n}\n@keyframes animateContainer {\n  0%   {\n    padding: 10px;\n    height: 20px;\n    width: 20px;\n }\n  50% {\n    padding: 0px;\n    height: 10px;\n    width: 10px;\n  }\n  100% {\n    padding: 10px;\n    height: 20px;\n    width: 20px;\n  }\n}\n\n.resultados {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.resultados > .titulo {\n  font-size: 32px;\n}\n.resultados > .cancer {\n  color:  red;\n}\n\n.resultados > .no-cancer {\n  color: green;\n}\n\n.resultados > .resultado {\n  color: blue;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".home{\n  width: 100vw;\n  overflow-x: hidden;\n  /*background-image: url(/assets/images/hospital_background.jpg);\n  background-position: center;\n  background-size: cover;*/\n  background-color: white;\n  /*-webkit-box-shadow: inset 0px -200px 189px 16px rgba(0,0,0,0.75);\n  -moz-box-shadow: inset 0px -200px 189px 16px rgba(0,0,0,0.75);\n  box-shadow: inset 0px -200px 189px 16px rgba(0,0,0,0.75);*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.description {\n  /*width: 50%;  */\n}\n\n.description > .titulo {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.description > .probabilidad {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.inside-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(234,128,176,0.25);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.result-container {\n  width: 100%;\n  display: none;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.answered {\n  width: 300px;\n  background-color: white;\n  color: #212121;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.toggleView {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.hideView {\n  display: none;\n}\n\n.danger {\n  font-weight: bold;\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">  \n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"cancer-form animated bounceInUp\">\n  <md-card-header>\n    <md-card-title class=\"title\">Ingrese los datos obtenidos en su prueba</md-card-title>\n    <md-card-subtitle class=\"subtitle\">Los datos vienen de los resultados de su exmaen celular en la sección mamaria.\n      Valores del 1 al 10 según su examen.</md-card-subtitle>\n  </md-card-header>\n    <form #f=\"ngForm\" (ngSubmit)=\"submitForm()\" [formGroup]=\"cancerForm\"  class=\"cancerForm\">\n      <md-card-content>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.cT\" type=\"number\" [formControl]=\"cancerForm.controls['cT']\"\n          placeholder=\"Espesor de macizo\" name=\"cT\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.uCSi\" type=\"number\" [formControl]=\"cancerForm.controls['uCSi']\"\n          placeholder=\"Uniformidad de tamaños de células\" name=\"uCSi\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.uCSh\" type=\"number\" [formControl]=\"cancerForm.controls['uCSh']\"\n          placeholder=\"Uniformidad de la forma de las células\" name=\"uCSh\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.mA\" type=\"number\" [formControl]=\"cancerForm.controls['mA']\"\n          placeholder=\"Adhesión marginal\" name=\"mA\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.sECS\" type=\"number\" [formControl]=\"cancerForm.controls['sECS']\"\n          placeholder=\"Tamaño de célula epitelial única\" name=\"sECS\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.bN\" type=\"number\" [formControl]=\"cancerForm.controls['bN']\"\n          placeholder=\"Núcleos desnudos\" name=\"bN\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.bC\" type=\"number\" [formControl]=\"cancerForm.controls['bC']\"\n          placeholder=\"Cromatina suave\" name=\"bC\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.nN\" type=\"number\" [formControl]=\"cancerForm.controls['nN']\"\n          placeholder=\"Normal Nucleoli\" name=\"nN\">\n        </md-input-container>\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"cancerForm.m\" type=\"number\" [formControl]=\"cancerForm.controls['m']\"\n          placeholder=\"Mitosis\" name=\"m\">\n        </md-input-container>\n      </md-card-content>\n      <md-card-footer>\n        <md-card-actions>\n          <button md-button [disabled]=\"!cancerForm.valid\" type=\"submit\" name=\"button\" class=\"submit-button\">Go!</button>\n        </md-card-actions>\n      </md-card-footer>\n    </form>\n</md-card>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"compare-result\">\n  <md-card-header>\n    <md-card-title class=\"title\">Comparar Resultados</md-card-title>\n    <md-card-content>\n      <div class=\"iteration\">\n        <div class=\"iteration-item\">\n          id\n        </div>\n        <div class=\"iteration-item\">\n          bC\n        </div>\n        <div class=\"iteration-item\">\n          bN\n        </div>\n        <div class=\"iteration-item\">\n          cT\n        </div>\n        <div class=\"iteration-item\">\n          m\n        </div>\n        <div class=\"iteration-item\">\n          mA\n        </div>\n        <div class=\"iteration-item\">\n          nN\n        </div>\n        <div class=\"iteration-item\">\n          sECS\n        </div>\n        <div class=\"iteration-item\">\n          uCSh\n        </div>\n        <div class=\"iteration-item\">\n          uCSi\n        </div>\n        <div class=\"iteration-item\">\n          resultado\n        </div>\n      </div>\n      <div *ngFor=\"let result of resultArray\" class=\"iteration\">\n        <div class=\"iteration-item\">\n          {{result.id}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.bC}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.bN}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.cT}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.m}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.mA}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.nN}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.sECS}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.uCSh}}\n        </div>\n        <div class=\"iteration-item\">\n          {{result.uCSi}}\n        </div>\n        <div class=\"iteration-item\">\n          resultado\n        </div>\n      </div>\n    </md-card-content>\n  </md-card-header>\n</md-card>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"logo\">\n    Breast Cancer Diagnose\n  </div>\n  <div class=\"buttons\">\n    <div class=\"team action\">\n      MæSoft\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"resultsContainer animated bounceInDown\" *ngIf=\"arrayWithResults\">\n  <div class=\"result animatedContainer\" *ngFor=\"let result of arrayWithResults\"\n    [style.left.px]=\"result['x_position']\"\n    [style.bottom.px]=\"result['y_position']\"\n    [style.background-color]=\"result['color']\"\n    [style.animation-delay.s]=\"result['delay']\"\n    [class.isOurResult]=\"result['isOurResult']\">\n    <div class=\"animatedContainer\"></div>\n  </div>\n  <div class=\"resultados\">\n    <span class=\"titulo\">Resultados.</span>\n    <span class=\"cancer\">Cancer</span>\n    <span class=\"no-cancer\">No cancer</span>\n    <span class=\"resultado\">Tu resultado</span>\n  </div>\n</md-card>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<navbar [toggleView]=\"toggleView\"></navbar>\n<div class=\"home\">\n  <div class=\"inside-container\">\n    <cancer-form [ngClass]=\"{ 'hideView': toggleView }\" class=\"vh-container\" (formValue)=\"activateFormInputs($event);\"></cancer-form>\n    <div id=\"result\" [ngClass]=\"{ 'toggleView': toggleView }\" class=\"result-container vh-container\">\n      <md-card class=\"answered  animated bounceInDown \">\n        <div class=\"description\">\n          <div class=\"titulo\" [ngClass]=\"{ 'danger': (cancerPercentage > 0.05)}\">\n            ~ {{ answer }}\n          </div>\n          <div class=\"probabilidad\">\n            Probabilidad de presentar cancer de mama: {{ cancerPercentage }}\n          </div>\n        </div>\n        <button md-button type=\"button\" class=\"submit-button\" name=\"button\" (click)=\"toggleViewFromRepeat();\">Repetir prueba</button>\n      </md-card>\n      <results clas=\"vh-container\" #resultsComponent [testingArray]=\"trainingSet\"></results>\n    </div>\n    <!-- <compare-result class=\"vh-container\"></compare-result> -->\n  </div>\n</div>\n"

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(490);


/***/ })

},[975]);
//# sourceMappingURL=main.bundle.js.map