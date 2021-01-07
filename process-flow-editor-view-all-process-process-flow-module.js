(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-flow-editor-view-all-process-process-flow-module"],{

/***/ "0WUw":
/*!*************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/process.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessService", function() { return ProcessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common.service */ "gbi4");





class ProcessService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    //Format date for httpOption
    formatDate() {
        let d = new Date(), formatDateVal = [this.formatNumber(d.getFullYear()), this.formatNumber(('' + (d.getMonth() + 1))), this.formatNumber(('' + d.getDate()))], formatTimeval = [this.formatNumber(('' + d.getHours())), this.formatNumber(('' + d.getMinutes())), this.formatNumber(('' + d.getSeconds()))];
        return formatDateVal.join('-') + ' ' + formatTimeval.join('-');
    }
    //add "0" before number if length 1
    formatNumber(value) {
        if (value.length < 2) {
            return value = '0' + value;
        }
        else {
            return value;
        }
    }
    getGroups(value, data) {
        const payload = {
            "limit": 100,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                {
                    "group_name": value
                }
            ]
        };
        if (data.type === 'filter') {
            payload.filter = [
                { 'process_type': data.value }
            ];
        }
        return this.http.post(this.baseUrl + 'getProcessGroup/', payload, this.commonService.httpOptions);
    }
    createGroup(value) {
        const payload = {
            "values": [
                value
            ]
        };
        return this.http.post(this.baseUrl + 'createProcessGroup/', payload, this.commonService.httpOptions);
    }
    putGroup() {
        const payload = {
            "values": [
                {
                    "group_name": "Admin",
                    "id": 1
                }
            ]
        };
        return this.http.put(this.baseUrl + 'putProcessGroup/', payload, this.commonService.httpOptions);
    }
    getProcess(value, type, filter) {
        const payload = {
            "limit": 100,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
        };
        if (filter === null || filter === void 0 ? void 0 : filter.sort_type)
            payload.sort_type = filter.sort_type;
        if (filter === null || filter === void 0 ? void 0 : filter.sort_field)
            payload.sort_field = filter.sort_field;
        payload.filter = [];
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.group_id)) {
            payload.filter.push({ 'group_id': filter.group_id });
        }
        console.log(filter, 'filter');
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.process_type)) {
            payload.filter.push({ 'process_type': filter.process_type });
        }
        if (type === 'table_name') {
            payload.search = [
                {
                    "table_name": value,
                }
            ];
        }
        else if (type === 'group_id') {
            payload.search = [
                {
                    "group_id": value,
                }
            ];
        }
        else if (type === 'id') {
            payload.search = [
                {
                    "id": value,
                }
            ];
        }
        return this.http.post(this.baseUrl + 'getProcess/', payload, this.commonService.httpOptions);
    }
    createProcess(value) {
        const payload = {
            "values": [
                value
            ]
        };
        return this.http.post(this.baseUrl + 'createProcess/', payload, this.commonService.httpOptions);
    }
    putProcess() {
        const payload = {
            "values": [
                {
                    "table_name": "test",
                    "id": 11
                }
            ]
        };
        return this.http.put(this.baseUrl + 'putProcess/', payload, this.commonService.httpOptions);
    }
    deleteProcess(id) {
        return this.http.delete(this.baseUrl + 'deleteProcess/' + id, this.commonService.httpOptions);
    }
    checkTable(value) {
        const payload = {
            "table_name": value
        };
        return this.http.post(this.baseUrl + 'checkTable/', payload, this.commonService.httpOptions);
    }
    convertSnackCase(value) {
        return value && value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
    }
}
ProcessService.ɵfac = function ProcessService_Factory(t) { return new (t || ProcessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ProcessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessService, factory: ProcessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "8kyr":
/*!*************************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/process-flow-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProcessFlowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessFlowRoutingModule", function() { return ProcessFlowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-process-view/all-process-view.component */ "OPeC");





const routes = [
    {
        path: '',
        component: _all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_2__["AllProcessViewComponent"]
    }, {
        path: 'view',
        component: _all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_2__["AllProcessViewComponent"]
    }
];
class ProcessFlowRoutingModule {
}
ProcessFlowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessFlowRoutingModule });
ProcessFlowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessFlowRoutingModule_Factory(t) { return new (t || ProcessFlowRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessFlowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessFlowRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "G3PP":
/*!***************************************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/create-category/create-category.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _materialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../materialIcons */ "j7Q9");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");












function CreateCategoryComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", icon_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r3, " ");
} }
const _c0 = function (a0) { return { "submit-btn": a0 }; };
class CreateCategoryComponent {
    constructor(fb) {
        this.fb = fb;
        this.process_type = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterIconList = [];
        this.materialIconList = [];
        this.iconList = _materialIcons__WEBPACK_IMPORTED_MODULE_2__["iconList"];
        this.iconList.categories.forEach(i => { i.icons.forEach(j => { this.materialIconList.push(j.id); }); });
        this.filterIconList = this.materialIconList;
    }
    ngOnInit() {
        this.groupForm = this.fb.group({
            group_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // category_icon: ['']
            process_type: [this.process_type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    iconsFilter(val) {
        this.filterIconList = this.materialIconList.filter(i => i.includes(val));
    }
}
CreateCategoryComponent.ɵfac = function CreateCategoryComponent_Factory(t) { return new (t || CreateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateCategoryComponent, selectors: [["app-create-category"]], inputs: { process_type: "process_type" }, outputs: { closeEvent: "closeEvent" }, decls: 40, vars: 9, consts: [[1, "container"], [1, "header"], [1, "form-container", 3, "formGroup"], [1, "form-g"], [1, "label"], ["type", "text", "formControlName", "group_name", "placeholder", "Enter Title", 1, "input-t"], [1, "d-flex"], [1, "form-g", "width-60"], [1, "input-a"], ["placeholder", "Choose Icon", 1, "input-h", 3, "matAutocomplete", "input"], ["trigger", "matAutocompleteTrigger"], [1, "auto-icon", "cursor", 3, "click"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-g", "width-50", "process-pad"], ["placeholder", "Process Type", "formControlName", "process_type"], ["value", "process"], ["value", "masters"], ["value", "others"], [1, "border-line"], [1, "d-flex", "btn-layout"], ["mat-raised-button", "", 1, "cancel-btn", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "ngClass", "disabled", "mat-dialog-close"], [3, "value"]], template: function CreateCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateCategoryComponent_Template_input_input_15_listener($event) { return ctx.iconsFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryComponent_Template_mat_icon_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); $event.stopPropagation(); return _r0.panelOpen ? _r0.closePanel() : _r0.openPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateCategoryComponent_mat_option_21_Template, 4, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Process Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Masters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterIconList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.groupForm.valid))("disabled", !ctx.groupForm.valid)("mat-dialog-close", ctx.groupForm.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    color: #707070;\n    font-size: 16px;\n    font-weight: 500;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  }\n\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    display: grid;\n    padding: 15px;\n    grid-gap: 10px;\n  }\n\n  .form-g[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 8px;\n  }\n\n  .label[_ngcontent-%COMP%] {\n    color: var(--charcoal-grey);\n  }\n\n  .input-t[_ngcontent-%COMP%] {\n    border: 1px solid var(--pinkish-grey);\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    min-height: 32px !important;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  }\n\n  .input-a[_ngcontent-%COMP%] {\n    border: 1px solid var(--pinkish-grey);\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n  }\n\n  .auto-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 20px;\n    width: 20px;\n  }\n\n  .input-h[_ngcontent-%COMP%] {\n    min-height: 15px !important;\n  }\n\n  .mat-button-toggle-checked[_ngcontent-%COMP%] {\n    background-color: var(--cerulean) !important;\n    color: var(--white) !important;\n  }\n\n  .side-toggle-width[_ngcontent-%COMP%] {\n   width: 38%;\n   margin-left: 15px;\n }\n\n  .side-toggle-area[_ngcontent-%COMP%] {\n   margin-top: 8px;\n }\n\n  .border-line[_ngcontent-%COMP%] {\n  margin: 10px;\n  border: 1px solid #f2f2f2;\n }\n\n  .cancel-btn[_ngcontent-%COMP%] {\n   background-color: var(--silver);\n   color: var(--greyish-two);\n   margin-right: 10px;\n }\n\n  .btn-layout[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  width: 96%;\n  margin: 10px 0;\n }\n\n  .process-pad[_ngcontent-%COMP%] {\n   padding-left: 15px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci92aWV3LWFsbC1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlEQUFpRDtFQUNuRDs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsOEJBQThCO0VBQ2hDOztFQUNEO0dBQ0UsVUFBVTtHQUNWLGlCQUFpQjtDQUNuQjs7RUFDQTtHQUNFLGVBQWU7Q0FDakI7O0VBQ0E7RUFDQyxZQUFZO0VBQ1oseUJBQXlCO0NBQzFCOztFQUNBO0dBQ0UsK0JBQStCO0dBQy9CLHlCQUF5QjtHQUN6QixrQkFBa0I7Q0FDcEI7O0VBRUE7RUFDQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGNBQWM7Q0FDZjs7RUFFQTtHQUNFLGtCQUFrQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtZmxvdy1lZGl0b3Ivdmlldy1hbGwtcHJvY2Vzcy9jcmVhdGUtcHJvY2Vzcy9jcmVhdGUtcHJvY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDhweDtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpO1xuICB9XG5cbiAgLmlucHV0LXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaW5wdXQtYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5hdXRvLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICAuaW5wdXQtaCB7XG4gICAgbWluLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlcnVsZWFuKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgfVxuIC5zaWRlLXRvZ2dsZS13aWR0aCB7XG4gICB3aWR0aDogMzglO1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gfVxuIC5zaWRlLXRvZ2dsZS1hcmVhIHtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiB9XG4gLmJvcmRlci1saW5lIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuIH1cbiAuY2FuY2VsLWJ0biB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICAgY29sb3I6IHZhcigtLWdyZXlpc2gtdHdvKTtcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcbiB9XG5cbiAuYnRuLWxheW91dCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMTBweCAwO1xuIH1cblxuIC5wcm9jZXNzLXBhZCB7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-category',
                templateUrl: './create-category.component.html',
                styleUrls: ['../create-process/create-process.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { process_type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "K7H8":
/*!***********************************************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/single-process-card/single-process-card.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SingleProcessCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProcessCardComponent", function() { return SingleProcessCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process.service */ "0WUw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _atoms_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../atoms/confirmation-dialog/confirmation-dialog.component */ "zkFv");










const _c0 = function (a0) { return { "color": a0 }; };
function SingleProcessCardComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.menuOpened ? "#2e9afc" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.inputData == null ? null : ctx_r0.inputData.icon);
} }
function SingleProcessCardComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.baseUrl, "db_icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SingleProcessCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function SingleProcessCardComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-confirmation-dialog", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitResult", function SingleProcessCardComponent_div_23_Template_app_confirmation_dialog_emitResult_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.emitConfirmation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "border": a0 }; };
class SingleProcessCardComponent {
    constructor(processService, router) {
        this.processService = processService;
        this.router = router;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baseUrl = "https://api.myairliftusa.com/uploads/";
        this.isClicked = false;
        this.menuOpened = false;
        this.viewConfirmation = false;
    }
    ngOnInit() {
    }
    emitConfirmation(event) {
        this.viewConfirmation = false;
        event ? this.deleteProcess() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["noop"])();
    }
    deleteProcess() {
        var _a;
        this.processService.deleteProcess((_a = this.inputData) === null || _a === void 0 ? void 0 : _a.id).subscribe((response) => {
            if (response['statusCode'] === 200) {
                this.onDelete.emit();
            }
        });
    }
    openDelete() {
        this.viewConfirmation;
        setTimeout(() => {
            this.viewConfirmation = true;
        }, 100);
    }
    goToProcess() {
        var _a;
        this.inputData["process"] = "view-all";
        this.router.navigate(['/edit-process', (_a = this.inputData) === null || _a === void 0 ? void 0 : _a.table_name], { queryParams: this.inputData, });
    }
    goToDashboard() {
        let temp = { id: this.inputData.id, tablename: this.inputData.table_name, };
        this.router.navigate(['/dashboard/view', this.inputData.table_name], { queryParams: temp, });
    }
}
SingleProcessCardComponent.ɵfac = function SingleProcessCardComponent_Factory(t) { return new (t || SingleProcessCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SingleProcessCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleProcessCardComponent, selectors: [["app-single-process-card"]], inputs: { inputData: "inputData" }, outputs: { onDelete: "onDelete" }, decls: 24, vars: 9, consts: [[1, "p-main-card", 3, "ngStyle"], ["matRipple", "", 1, "align-center", "justify-center", "process-details"], [2, "color", "#484848", "text-align", "center"], ["class", "icon-35", 3, "ngStyle", 4, "ngIf"], ["class", "icon-35", 3, "src", 4, "ngIf"], [1, "p-name"], ["class", "p-loading-bg align-center justify-center", 4, "ngIf"], [1, "process-more"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor", "menuOpened", "menuClosed"], ["menuprocess", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [3, "click"], [4, "ngIf"], [1, "icon-35", 3, "ngStyle"], [1, "icon-35", 3, "src"], [1, "p-loading-bg", "align-center", "justify-center"], [3, "emitResult"]], template: function SingleProcessCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SingleProcessCardComponent_mat_icon_3_Template, 2, 4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SingleProcessCardComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SingleProcessCardComponent_div_7_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuOpened", function SingleProcessCardComponent_Template_button_menuOpened_9_listener() { return ctx.menuOpened = true; })("menuClosed", function SingleProcessCardComponent_Template_button_menuClosed_9_listener() { return ctx.menuOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProcessCardComponent_Template_button_click_14_listener() { return ctx.goToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProcessCardComponent_Template_button_click_17_listener() { return ctx.goToProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProcessCardComponent_Template_span_click_21_listener() { return ctx.openDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SingleProcessCardComponent_div_23_Template, 2, 0, "div", 13);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.menuOpened ? "1px solid #2e9afc" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputData.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inputData.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputData == null ? null : ctx.inputData.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewConfirmation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _atoms_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationDialogComponent"]], styles: [".p-main-card[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 220px;\n  background: #fff;\n  margin: 6px;\n  overflow: hidden;\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.07);\n  position: relative;\n  box-sizing: border-box;\n  border-radius:8px;\n}\n\n.process-details[_ngcontent-%COMP%] {\n  height: 160px;\n  transition: all .3s ease-out;\n}\n\n.p-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px;\n  -webkit-line-clamp: 2;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 200px;\n  height: 23px;\n  white-space: nowrap;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 200px;\n}\n\n.hid-box[_ngcontent-%COMP%] {\n  top: 170px;\n  position: absolute;\n  transition: all .3s ease-out;\n  height: 35px;\n  border-top: 1px solid #ddddddba;\n  display: grid;\n  align-items: center;\n  padding: 0px 10px;\n  width: 91%;\n}\n\n.hide-g[_ngcontent-%COMP%] {\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n}\n\n.p-loading-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #0000006b;\n  opacity: 0.5;\n}\n\n.p-view-btn[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-size: 12px;\n  height: 24px;\n}\n\n.process-more[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci92aWV3LWFsbC1wcm9jZXNzL3NpbmdsZS1wcm9jZXNzLWNhcmQvc2luZ2xlLXByb2Nlc3MtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1RUFBdUU7RUFDdkUsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtZmxvdy1lZGl0b3Ivdmlldy1hbGwtcHJvY2Vzcy9zaW5nbGUtcHJvY2Vzcy1jYXJkL3NpbmdsZS1wcm9jZXNzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLW1haW4tY2FyZCB7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6OHB4O1xufVxuXG4ucHJvY2Vzcy1kZXRhaWxzIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbn1cblxuLnAtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uaGlkLWJveCB7XG4gIHRvcDogMTcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZGJhO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgd2lkdGg6IDkxJTtcbn1cblxuLmhpZGUtZyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wLWxvYWRpbmctYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA2YjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucC12aWV3LWJ0biB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5wcm9jZXNzLW1vcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleProcessCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-process-card',
                templateUrl: './single-process-card.component.html',
                styleUrls: ['./single-process-card.component.css']
            }]
    }], function () { return [{ type: _process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { inputData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "OPeC":
/*!*****************************************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/all-process-view/all-process-view.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AllProcessViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProcessViewComponent", function() { return AllProcessViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _process_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process.service */ "0WUw");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common.service */ "gbi4");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _single_process_card_single_process_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../single-process-card/single-process-card.component */ "K7H8");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../create-process/create-process.component */ "cJcx");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create-category/create-category.component */ "G3PP");
















function AllProcessViewComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r10.selectedNav = item_r9.name; ctx_r10.groupBy = ""; ctx_r10.nullCurrent(); return ctx_r10.getGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cursor ", item_r9.name == ctx_r0.selectedNav ? "active-type-btn " : "", " p-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.display_value);
} }
const _c0 = function (a0) { return { "selected-category": a0 }; };
function AllProcessViewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const group_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectedGroup(group_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " folder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.currentGroup.id === group_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", group_r12.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r12.group_name, " ");
} }
function AllProcessViewComponent_app_single_process_card_44_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-single-process-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function AllProcessViewComponent_app_single_process_card_44_Template_app_single_process_card_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getProcess(ctx_r16.currentGroup == null ? null : ctx_r16.currentGroup.id, "group_id"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputData", item_r15);
} }
function AllProcessViewComponent_mat_spinner_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 43);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
function AllProcessViewComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-process", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEvent", function AllProcessViewComponent_ng_template_56_Template_app_create_process_closeEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("group", ctx_r6.currentGroup ? ctx_r6.currentGroup : "")("process_type", ctx_r6.selectedNav);
} }
function AllProcessViewComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-category", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEvent", function AllProcessViewComponent_ng_template_58_Template_app_create_category_closeEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("process_type", ctx_r8.selectedNav);
} }
let currentCategory = null;
class AllProcessViewComponent {
    constructor(route, dialog, processService, commonService) {
        this.route = route;
        this.dialog = dialog;
        this.processService = processService;
        this.commonService = commonService;
        this.baseUrl = "https://api.myairliftusa.com/uploads/";
        this.sideNav = [
            { name: 'all', display_value: 'All', icon: 'view_list' },
            { name: 'process', display_value: 'Process', icon: 'mediation' },
            { name: 'masters', display_value: 'Masters', icon: 'leaderboard' },
            { name: 'others', display_value: 'Others', icon: 'folder' },
        ];
        this.groupBy = 'all';
        this.groupList = [];
        this.selectedNav = 'all';
        this.data = {};
        this.inputValue = '';
        this.dataGroup = [];
        this.groupProcess = [];
        this.searchProcsss = '';
        this.getGroup();
    }
    ngOnInit() {
    }
    redirectDashboard() {
        currentCategory = null;
        this.route.navigate(['dashboard']);
    }
    getGroup() {
        const data = {};
        if (this.selectedNav !== 'all') {
            data.type = 'filter';
            data.value = this.selectedNav;
        }
        this.currentGroup = [];
        this.processService.getGroups('', data).subscribe((response) => {
            var _a;
            this.dataGroup = response['info'];
            if (this.dataGroup && this.dataGroup[0]) {
                this.currentGroup = (currentCategory === null || currentCategory === void 0 ? void 0 : currentCategory.id) ? currentCategory : this.dataGroup[0];
                this.getProcess((_a = this.currentGroup) === null || _a === void 0 ? void 0 : _a.id, 'group_id');
            }
            else {
                this.groupProcess = [];
            }
        });
    }
    getProcess(value, type) {
        var _a, _b;
        const filter = {};
        if ((_a = this.currentGroup) === null || _a === void 0 ? void 0 : _a.id) {
            filter.group_id = (_b = this.currentGroup) === null || _b === void 0 ? void 0 : _b.id;
        }
        if (this.selectedNav !== 'all')
            filter.process_type = this.selectedNav;
        this.groupProcess = [];
        this.processService.getProcess(value, type, filter).subscribe((response) => {
            this.groupProcess = response['info'];
        });
    }
    nullCurrent() {
        currentCategory = null;
    }
    createDialog(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '500px',
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.onsubmit(templateName, result);
        });
    }
    onsubmit(template, result) {
        var _a, _b;
        console.log(template, 'rtempla');
        if (((_a = template === null || template === void 0 ? void 0 : template._declarationTContainer) === null || _a === void 0 ? void 0 : _a.localNames[0]) === 'newCategory' && result) {
            this.processService.createGroup(result).subscribe((response) => {
                const data = {};
                if (this.selectedNav !== 'all') {
                    data.type = 'filter';
                    data.value = this.selectedNav;
                }
                this.processService.getGroups('', data).subscribe((response) => {
                    this.dataGroup = response['info'];
                });
            });
        }
        else if (((_b = template === null || template === void 0 ? void 0 : template._declarationTContainer) === null || _b === void 0 ? void 0 : _b.localNames[0]) === 'newProcessTemplate' && result) {
            result.table_name = this.processService.convertSnackCase(result === null || result === void 0 ? void 0 : result.display_name);
            result.icon = (result === null || result === void 0 ? void 0 : result.icon) ? result.icon : '3d_rotation';
            this.processService.createProcess(result).subscribe((response) => {
                var _a;
                this.creteColuns(result.table_name, response.last_insert_id[0]);
                this.getProcess((_a = this.currentGroup) === null || _a === void 0 ? void 0 : _a.id, 'group_id');
            });
        }
    }
    creteColuns(table, id) {
        let value = { table_name: table, user_id: '2', table_id: id };
        this.commonService.createValues(value, "table_columns_ordering").subscribe((response) => {
        });
    }
    createCategory(value) {
        console.log(value, 'value');
    }
    selectedGroup(group) {
        var _a;
        this.currentGroup = group;
        currentCategory = this.currentGroup;
        this.getProcess((_a = this.currentGroup) === null || _a === void 0 ? void 0 : _a.id, 'group_id');
    }
}
AllProcessViewComponent.ɵfac = function AllProcessViewComponent_Factory(t) { return new (t || AllProcessViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
AllProcessViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllProcessViewComponent, selectors: [["app-all-process-view"]], decls: 60, vars: 7, consts: [[1, "back-drop"], [1, "process-layout"], [1, "header-row-c", "process-header-ly"], [1, "align-center", "back-icon", "cursor", "full-height"], ["mat-button", "", 3, "click"], [1, "header-t"], [1, "flex", "flex-end", "icon-alignment"], ["mat-icon-button", "", 3, "click"], [1, "process-layout-body", "d-flex"], [1, "type-list-container", "cursor"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "width-175", "category-area"], [1, "btn", "cateogory-btn", "justify-center", "font-14", 3, "click"], [1, "icon-alignment", "icon-20"], [1, "ctg-title"], [1, "ctg-title", "overflow-category"], ["class", "d-flex group", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "process-layout-main", "position-r"], [1, "grid", "g-c-auto-100"], [1, "position-r", "search-grid"], ["placeholder", "what do you want to search or create ?", 1, "search-input", "search-b", 3, "ngModel", "ngModelChange", "input"], [1, "p-search-btn", "cursor", 3, "click"], [1, "group-f", "padding-10"], [1, "p-sort-icon", "cursor", "align-center", "justify-center", "search-b", 3, "matMenuTriggerFor"], [1, "icon-c"], [1, "btn", 3, "click"], [1, "overflow-a", "height-p", 2, "position", "relative"], [1, "padding-10"], [1, "process-list-flex"], [3, "inputData", "onDelete", 4, "ngFor", "ngForOf"], ["class", "spinner", 3, "diameter", 4, "ngIf"], ["menuSort", "matMenu"], ["mat-menu-item", ""], ["newProcessTemplate", ""], ["newCategory", ""], [3, "click"], [1, "align-center", "justify-center"], [1, "side-nav-icon"], [1, "icon-alignment"], [1, "d-flex", "group", 3, "ngClass", "click"], [1, "material-icons"], [1, "align-center", "g-padding", "white-space", 3, "matTooltip"], [3, "inputData", "onDelete"], [1, "spinner", 3, "diameter"], [3, "group", "process_type", "closeEvent"], [3, "process_type", "closeEvent"]], template: function AllProcessViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_Template_button_click_4_listener() { return ctx.redirectDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Create,Delete & Edit Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_Template_button_click_11_listener() { return ctx.redirectDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllProcessViewComponent_div_16_Template, 6, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); return ctx.createDialog(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AllProcessViewComponent_div_25_Template, 5, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllProcessViewComponent_Template_input_ngModelChange_29_listener($event) { return ctx.inputValue = $event; })("ngModelChange", function AllProcessViewComponent_Template_input_ngModelChange_29_listener($event) { return ctx.searchProcsss = $event; })("input", function AllProcessViewComponent_Template_input_input_29_listener() { return ctx.getProcess(ctx.searchProcsss, "table_name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_Template_mat_icon_click_30_listener() { return ctx.getProcess(ctx.searchProcsss, "table_name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllProcessViewComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return ctx.createDialog(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AllProcessViewComponent_app_single_process_card_44_Template, 1, 1, "app-single-process-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AllProcessViewComponent_mat_spinner_45_Template, 1, 1, "mat-spinner", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-menu", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ascending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Descending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Newly Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Last Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AllProcessViewComponent_ng_template_56_Template, 1, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AllProcessViewComponent_ng_template_58_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("ngModel", ctx.searchProcsss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.groupProcess && ctx.groupProcess.length));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _single_process_card_single_process_card_component__WEBPACK_IMPORTED_MODULE_11__["SingleProcessCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_13__["CreateProcessComponent"], _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_14__["CreateCategoryComponent"]], styles: [".process-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 65px auto;\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  background: #fff;\n  position: fixed;\n  left: 10px;\n  top: 10px;\n}\n\n.process-header-ly[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100px auto 50px;\n  grid-gap: 20px;\n}\n\n.back-icon[_ngcontent-%COMP%] {\n  background-color: #313f4b40;\n  color: #ffff;\n}\n\n.header-t[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  color: #484848;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n\n.type-list-container[_ngcontent-%COMP%] {\n  background: #243340f0;\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.07);\n  z-index: 9;\n  width: 100px;\n}\n\n.active-type-btn[_ngcontent-%COMP%] {\n  background: #1b2935;\n}\n\n.p-list-item[_ngcontent-%COMP%] {\n  min-height: 70px;\n  max-height: 70px;\n  color: #fff;\n  display: grid;\n  grid-template-rows: auto auto;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #61616178;\n  font-size: 14px;\n}\n\n.side-nav-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  height: 30px;\n  width: 38px;\n}\n\n.process-layout-main[_ngcontent-%COMP%] {\n  background: var(--white);\n  width: calc(100% - 300px);\n  margin: 12px 0;\n}\n\n.crt-header[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: auto -webkit-max-content -webkit-max-content;\n  grid-template-columns: auto max-content max-content;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  align-items: center;\n  display: flex;\n  border: 0px;\n  color: #fff;\n  font-weight: 400;\n  cursor: pointer;\n  font-size: 12px;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  width: 130px;\n  margin: 0;\n  justify-content: center;\n}\n\n.g-c-auto-100[_ngcontent-%COMP%] {\n  grid-template-columns: auto 300px;\n  grid-gap: 15px;\n}\n\n.search-grid[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  padding: 10px;\n  padding-left: 15px;\n  position: relative;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  line-height: 32px;\n  background: #f3f3f3;\n  border-radius: 4px;\n  padding: 0px 10px;\n  border: 1px solid #9999;\n  font-size: 14px;\n  width: 100%;\n}\n\n.search-b[_ngcontent-%COMP%] {\n  background: var(--pale-grey);\n  border-radius: 4px !important;\n  border: solid 1px #dadada !important;\n  background-color: #ffffff !important;\n}\n\n.p-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #424242;\n  right: -5px;\n  font-size: 19px;\n  top: 18px;\n}\n\n.group-f[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px auto 30px;\n  align-items: center;\n  grid-gap: 10px;\n}\n\n.p-sort-icon[_ngcontent-%COMP%] {\n  border: 1px solid #888888;\n  border-radius: 2px;\n  background: #fbfbfb;\n  height: 30px;\n  width: 30px;\n}\n\n.icon-c[_ngcontent-%COMP%] {\n  color: #424242\n}\n\n.height-p[_ngcontent-%COMP%] {\n  height: calc(100vh - 188px);\n}\n\n.g-padding[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n\n.group-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-transform: capitalize;\n  border-bottom: 1px dashed #4a4a4a63;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: #484848;\n}\n\n.process-list-flex[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n\n\n.add-process-con[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  font-weight: 500;\n  color: #484848;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #ababab;\n  font-size: 14px;\n}\n\n.width-175[_ngcontent-%COMP%] {\n  width: 175px;\n}\n\n.category-area[_ngcontent-%COMP%] {\n  margin: 0 20px 0 0;\n  padding: 15px 0px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.cateogory-btn[_ngcontent-%COMP%] {\n  background: var(--pale-blue);\n  border: none;\n  outline: none;\n  box-shadow: none;\n  margin: auto;\n  width: 130px;\n}\n\n.cateogory-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .cateogory-btn[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n}\n\n.ctg-title[_ngcontent-%COMP%] {\n  margin: 15px 20px\n}\n\n.overflow-category[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: calc(100vh - 180px);\n}\n\n.group[_ngcontent-%COMP%], .selected-category[_ngcontent-%COMP%]  {\n  padding: 4px;\n  cursor: pointer;\n  margin: 2px 0;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.selected-category[_ngcontent-%COMP%] {\n  background: var(--pale-blue);\n  color: var(--lightish-blue);\n  border-radius: 4px;\n}\n\n.white-space[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci92aWV3LWFsbC1wcm9jZXNzL2FsbC1wcm9jZXNzLXZpZXcvYWxsLXByb2Nlc3Mtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVFQUF1RTtFQUN2RSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtRUFBbUQ7RUFBbkQsbURBQW1EO0VBQ25ELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRHQUE0RztFQUM1RyxZQUFZO0VBQ1osU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixlQUFlO0VBRWYsbUJBQW1CO0FBQ3JCOztBQUVBLHlIQUF5SDs7QUFDekg7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWZsb3ctZWRpdG9yL3ZpZXctYWxsLXByb2Nlc3MvYWxsLXByb2Nlc3Mtdmlldy9hbGwtcHJvY2Vzcy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvY2Vzcy1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1cHggYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLnByb2Nlc3MtaGVhZGVyLWx5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvIDUwcHg7XG4gIGdyaWQtZ2FwOiAyMHB4O1xufVxuXG4uYmFjay1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2Y0YjQwO1xuICBjb2xvcjogI2ZmZmY7XG59XG5cblxuLmhlYWRlci10IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnR5cGUtbGlzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMjQzMzQwZjA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICB6LWluZGV4OiA5O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5hY3RpdmUtdHlwZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMWIyOTM1O1xufVxuXG4ucC1saXN0LWl0ZW0ge1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYxNjE2MTc4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zaWRlLW5hdi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzOHB4O1xufVxuXG4ucHJvY2Vzcy1sYXlvdXQtbWFpbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5jcnQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZy1jLWF1dG8tMTAwIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwMHB4O1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLnNlYXJjaC1ncmlkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbGUtZ3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGFkYWRhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnAtc2VhcmNoLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIHJpZ2h0OiAtNXB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRvcDogMThweDtcbn1cblxuLmdyb3VwLWYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLnAtc29ydC1pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODg4ODtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uaWNvbi1jIHtcbiAgY29sb3I6ICM0MjQyNDJcbn1cblxuLmhlaWdodC1wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg4cHgpO1xufVxuXG4uZy1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5ncm91cC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzRhNGE0YTYzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLnByb2Nlc3MtbGlzdC1mbGV4IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmFkZC1wcm9jZXNzLWNvbiB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBNb3N0IG1vZGVybiBicm93c2VycyBzdXBwb3J0IHRoaXMgbm93LiAqL1xuICBjb2xvcjogI2FiYWJhYjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ud2lkdGgtMTc1IHtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG4uY2F0ZWdvcnktYXJlYSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhdGVvZ29yeS1idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYWxlLWJsdWUpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4uY2F0ZW9nb3J5LWJ0biBtYXQtaWNvbiwgLmNhdGVvZ29yeS1idG4ge1xuICBjb2xvcjogdmFyKC0tbGlnaHRpc2gtYmx1ZSk7XG59XG5cbi5jdGctdGl0bGUge1xuICBtYXJnaW46IDE1cHggMjBweFxufVxuXG4ub3ZlcmZsb3ctY2F0ZWdvcnkge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XG59XG5cbi5ncm91cCwgLnNlbGVjdGVkLWNhdGVnb3J5ICB7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDJweCAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbn1cblxuLnNlbGVjdGVkLWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFsZS1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0aXNoLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ud2hpdGUtc3BhY2Uge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProcessViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-process-view',
                templateUrl: './all-process-view.component.html',
                styleUrls: ['./all-process-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "X1GU":
/*!*************************************************************************!*\
  !*** ./src/app/atoms/confirmation-dialog/confirmation-dialog.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogModule", function() { return ConfirmationDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation-dialog.component */ "zkFv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






class ConfirmationDialogModule {
}
ConfirmationDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfirmationDialogModule });
ConfirmationDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfirmationDialogModule_Factory(t) { return new (t || ConfirmationDialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfirmationDialogModule, { declarations: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"], _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]], exports: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"], _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"], _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
                ],
                exports: [_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"], _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cJcx":
/*!*************************************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/create-process/create-process.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CreateProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProcessComponent", function() { return CreateProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _materialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../materialIcons */ "j7Q9");
/* harmony import */ var _process_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process.service */ "0WUw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");














function CreateProcessComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is already taken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProcessComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", icon_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r7, " ");
} }
function CreateProcessComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateProcessComponent_mat_option_49_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const group_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectedGroup(group_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r8.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r8.group_name, " ");
} }
const _c0 = function (a0) { return { "submit-btn": a0 }; };
class CreateProcessComponent {
    constructor(fb, processService) {
        this.fb = fb;
        this.processService = processService;
        this.process_type = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.group = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterIconList = [];
        this.materialIconList = [];
        this.iconList = _materialIcons__WEBPACK_IMPORTED_MODULE_2__["iconList"];
        this.iconList.categories.forEach(i => { i.icons.forEach(j => { this.materialIconList.push(j.id); }); });
        this.filterIconList = this.materialIconList;
    }
    ngOnInit() {
        var _a;
        this.groupData = this.group;
        const data = {
            type: 'filter',
            value: this.process_type
        };
        this.processService.getGroups('', data).subscribe((response) => {
            this.groupList = response['info'];
            this.groupListCopy = this.groupList;
        });
        this.processForm = this.fb.group({
            display_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            show_on_side_nav: ['no'],
            icon: [''],
            icon_img_url: [''],
            group_name: [(_a = this.groupData) === null || _a === void 0 ? void 0 : _a.group_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group_id: [''],
            process_type: [this.process_type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.selectedGroup(this.groupData);
    }
    iconsFilter(val) {
        this.filterIconList = this.materialIconList.filter(i => i.includes(val));
    }
    selectedGroup(group) {
        this.selectGroup = group;
        this.processForm.get('group_id').setValue(this.selectGroup.id);
    }
    checkTableExist(value) {
        if (value && value.length) {
            this.processService.checkTable(this.processService.convertSnackCase(value)).subscribe((response) => {
                this.nameError = (response && response['info'] && response['info'].length) ? true : false;
                if (this.nameError) {
                    const temp = this.processForm.get('display_name').value;
                    this.processForm.get('display_name').setValue('');
                    this.processName = temp;
                }
            });
        }
    }
    onProcessType(value) {
    }
    groupFilter(val) {
        this.groupList = this.groupListCopy.filter(i => i['group_name'].toLowerCase().includes(val.toLowerCase()));
    }
}
CreateProcessComponent.ɵfac = function CreateProcessComponent_Factory(t) { return new (t || CreateProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"])); };
CreateProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateProcessComponent, selectors: [["app-create-process"]], inputs: { process_type: "process_type", group: "group" }, outputs: { closeEvent: "closeEvent" }, decls: 68, vars: 13, consts: [[1, "container"], [1, "header"], [1, "form-container", 3, "formGroup"], [1, "form-g"], [1, "label"], ["type", "text", "placeholder", "Enter Title", "formControlName", "display_name", 1, "input-t", 3, "ngModel", "blur"], ["class", "error-class", 4, "ngIf"], ["textInputHeight", "", "placeholder", "Enter Description", "formControlName", "description", 1, "input-t"], [1, "d-flex"], [1, "form-g", "width-60"], [1, "input-a"], ["formControlName", "icon", "placeholder", "Choose Icon", 1, "input-h", 3, "matAutocomplete", "input"], ["trigger", "matAutocompleteTrigger"], [1, "auto-icon", "cursor", 3, "click"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "side-toggle-width"], [1, "side-toggle-area"], ["formControlName", "show_on_side_nav", "selected", "selectedyes", "name", "fontStyle", "aria-label", "Font Style"], ["id", "create-process-toggle", "value", "yes"], ["id", "create-process-toggle", "value", "no"], [1, "form-g", "width-50"], ["formControlName", "group_name", "autocomplete", "new-group", "placeholder", "Choose Group", 1, "input-h", 3, "matAutocomplete", "input"], ["grouptrigger", "matAutocompleteTrigger"], ["groupActiveFirstOption", ""], ["group", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "form-g", "width-50", "process-pad"], ["placeholder", "Field Type", "formControlName", "process_type", 3, "valueChange"], ["value", "process"], ["value", "masters"], ["value", "others"], [1, "border-line"], [1, "d-flex", "btn-layout"], ["mat-raised-button", "", 1, "cancel-btn", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "ngClass", "disabled", "mat-dialog-close"], [1, "error-class"], [3, "value"], [3, "value", "onSelectionChange"]], template: function CreateProcessComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Process Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CreateProcessComponent_Template_input_blur_8_listener() { return ctx.checkTableExist(ctx.processForm.get("display_name").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateProcessComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Process Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateProcessComponent_Template_input_input_21_listener($event) { return ctx.iconsFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProcessComponent_Template_mat_icon_click_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); $event.stopPropagation(); return _r1.panelOpen ? _r1.closePanel() : _r1.openPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-autocomplete", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateProcessComponent_mat_option_27_Template, 4, 3, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Show on Side Nav ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-button-toggle-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-button-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Group Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateProcessComponent_Template_input_input_43_listener($event) { return ctx.groupFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProcessComponent_Template_mat_icon_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); $event.stopPropagation(); return _r4.panelOpen ? _r4.closePanel() : _r4.openPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-autocomplete", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CreateProcessComponent_mat_option_49_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Process Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateProcessComponent_Template_mat_select_valueChange_55_listener() { return ctx.onProcessType(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Masters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Others ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.processForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.processName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterIconList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.processForm.valid))("disabled", !ctx.processForm.valid)("mat-dialog-close", ctx.processForm.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    color: #707070;\n    font-size: 16px;\n    font-weight: 500;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  }\n\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    display: grid;\n    padding: 15px;\n    grid-gap: 10px;\n  }\n\n  .form-g[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 8px;\n  }\n\n  .label[_ngcontent-%COMP%] {\n    color: var(--charcoal-grey);\n  }\n\n  .input-t[_ngcontent-%COMP%] {\n    border: 1px solid var(--pinkish-grey);\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    min-height: 32px !important;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  }\n\n  .input-a[_ngcontent-%COMP%] {\n    border: 1px solid var(--pinkish-grey);\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n  }\n\n  .auto-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n    height: 20px;\n    width: 20px;\n  }\n\n  .input-h[_ngcontent-%COMP%] {\n    min-height: 15px !important;\n  }\n\n  .mat-button-toggle-checked[_ngcontent-%COMP%] {\n    background-color: var(--cerulean) !important;\n    color: var(--white) !important;\n  }\n\n  .side-toggle-width[_ngcontent-%COMP%] {\n   width: 38%;\n   margin-left: 15px;\n }\n\n  .side-toggle-area[_ngcontent-%COMP%] {\n   margin-top: 8px;\n }\n\n  .border-line[_ngcontent-%COMP%] {\n  margin: 10px;\n  border: 1px solid #f2f2f2;\n }\n\n  .cancel-btn[_ngcontent-%COMP%] {\n   background-color: var(--silver);\n   color: var(--greyish-two);\n   margin-right: 10px;\n }\n\n  .btn-layout[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  width: 96%;\n  margin: 10px 0;\n }\n\n  .process-pad[_ngcontent-%COMP%] {\n   padding-left: 15px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci92aWV3LWFsbC1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzL2NyZWF0ZS1wcm9jZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlEQUFpRDtFQUNuRDs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsOEJBQThCO0VBQ2hDOztFQUNEO0dBQ0UsVUFBVTtHQUNWLGlCQUFpQjtDQUNuQjs7RUFDQTtHQUNFLGVBQWU7Q0FDakI7O0VBQ0E7RUFDQyxZQUFZO0VBQ1oseUJBQXlCO0NBQzFCOztFQUNBO0dBQ0UsK0JBQStCO0dBQy9CLHlCQUF5QjtHQUN6QixrQkFBa0I7Q0FDcEI7O0VBRUE7RUFDQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGNBQWM7Q0FDZjs7RUFFQTtHQUNFLGtCQUFrQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtZmxvdy1lZGl0b3Ivdmlldy1hbGwtcHJvY2Vzcy9jcmVhdGUtcHJvY2Vzcy9jcmVhdGUtcHJvY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDhweDtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpO1xuICB9XG5cbiAgLmlucHV0LXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaW5wdXQtYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5hdXRvLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICAuaW5wdXQtaCB7XG4gICAgbWluLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlcnVsZWFuKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgfVxuIC5zaWRlLXRvZ2dsZS13aWR0aCB7XG4gICB3aWR0aDogMzglO1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gfVxuIC5zaWRlLXRvZ2dsZS1hcmVhIHtcbiAgIG1hcmdpbi10b3A6IDhweDtcbiB9XG4gLmJvcmRlci1saW5lIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuIH1cbiAuY2FuY2VsLWJ0biB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICAgY29sb3I6IHZhcigtLWdyZXlpc2gtdHdvKTtcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcbiB9XG5cbiAuYnRuLWxheW91dCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMTBweCAwO1xuIH1cblxuIC5wcm9jZXNzLXBhZCB7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-process',
                templateUrl: './create-process.component.html',
                styleUrls: ['./create-process.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _process_service__WEBPACK_IMPORTED_MODULE_3__["ProcessService"] }]; }, { process_type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "j7Q9":
/*!***********************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/materialIcons.ts ***!
  \***********************************************************************/
/*! exports provided: iconList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconList", function() { return iconList; });
const iconList = { "baseUrl": "static/icons/", "categories": [{ "icons": [{ "id": "3d_rotation" }, { "id": "accessibility" }, { "id": "accessibility_new" }, { "id": "accessible" }, { "id": "accessible_forward" }, { "id": "account_balance" }, { "id": "account_balance_wallet" }, { "id": "account_box" }, { "id": "account_circle" }, { "id": "add_shopping_cart" }, { "id": "alarm" }, { "id": "alarm_add" }, { "id": "alarm_off" }, { "id": "alarm_on" }, { "id": "all_inbox" }, { "id": "all_out" }, { "id": "android" }, { "id": "announcement" }, { "id": "arrow_right_alt" }, { "id": "aspect_ratio" }, { "id": "assessment" }, { "id": "assignment" }, { "id": "assignment_ind" }, { "id": "assignment_late" }, { "id": "assignment_return" }, { "id": "assignment_returned" }, { "id": "assignment_turned_in" }, { "id": "autorenew" }, { "id": "backup" }, { "id": "book" }, { "id": "bookmark" }, { "id": "bookmark_border" }, { "id": "bookmarks" }, { "id": "bug_report" }, { "id": "build" }, { "id": "cached" }, { "id": "calendar_today" }, { "id": "calendar_view_day" }, { "id": "camera_enhance" }, { "id": "card_giftcard" }, { "id": "card_membership" }, { "id": "card_travel" }, { "id": "change_history" }, { "id": "check_circle" }, { "id": "check_circle_outline" }, { "id": "chrome_reader_mode" }, { "id": "class" }, { "id": "code" }, { "id": "commute" }, { "id": "compare_arrows" }, { "id": "contact_support" }, { "id": "copyright" }, { "id": "credit_card" }, { "id": "dashboard" }, { "id": "date_range" }, { "id": "delete" }, { "id": "delete_forever" }, { "id": "delete_outline" }, { "id": "description" }, { "id": "dns" }, { "id": "done" }, { "id": "done_all" }, { "id": "done_outline" }, { "id": "donut_large" }, { "id": "donut_small" }, { "id": "drag_indicator" }, { "id": "eject" }, { "id": "euro_symbol" }, { "id": "event" }, { "id": "event_seat" }, { "id": "exit_to_app" }, { "id": "explore" }, { "id": "explore_off" }, { "id": "extension" }, { "id": "face" }, { "id": "favorite" }, { "id": "favorite_border" }, { "id": "feedback" }, { "id": "find_in_page" }, { "id": "find_replace" }, { "id": "fingerprint" }, { "id": "flight_land" }, { "id": "flight_takeoff" }, { "id": "flip_to_back" }, { "id": "flip_to_front" }, { "id": "g_translate" }, { "id": "gavel" }, { "id": "get_app" }, { "id": "gif" }, { "id": "grade" }, { "id": "group_work" }, { "id": "help" }, { "id": "help_outline" }, { "id": "highlight_off" }, { "id": "history" }, { "id": "home" }, { "id": "horizontal_split" }, { "id": "hourglass_empty" }, { "id": "hourglass_full" }, { "id": "http" }, { "id": "https" }, { "id": "important_devices" }, { "id": "info" }, { "id": "input" }, { "id": "invert_colors" }, { "id": "label" }, { "id": "label_important" }, { "id": "label_off" }, { "id": "language" }, { "id": "launch" }, { "id": "line_style" }, { "id": "line_weight" }, { "id": "list" }, { "id": "lock" }, { "id": "lock_open" }, { "id": "loyalty" }, { "id": "markunread_mailbox" }, { "id": "maximize" }, { "id": "minimize" }, { "id": "motorcycle" }, { "id": "note_add" }, { "id": "offline_bolt" }, { "id": "offline_pin" }, { "id": "opacity" }, { "id": "open_in_browser" }, { "id": "open_in_new" }, { "id": "open_with" }, { "id": "pageview" }, { "id": "pan_tool" }, { "id": "payment" }, { "id": "perm_camera_mic" }, { "id": "perm_contact_calendar" }, { "id": "perm_data_setting" }, { "id": "perm_device_information" }, { "id": "perm_identity" }, { "id": "perm_media" }, { "id": "perm_phone_msg" }, { "id": "perm_scan_wifi" }, { "id": "pets" }, { "id": "picture_in_picture" }, { "id": "picture_in_picture_alt" }, { "id": "play_for_work" }, { "id": "polymer" }, { "id": "power_settings_new" }, { "id": "pregnant_woman" }, { "id": "print" }, { "id": "query_builder" }, { "id": "question_answer" }, { "id": "receipt" }, { "id": "record_voice_over" }, { "id": "redeem" }, { "id": "remove_shopping_cart" }, { "id": "reorder" }, { "id": "report_problem" }, { "id": "restore" }, { "id": "restore_from_trash" }, { "id": "restore_page" }, { "id": "room" }, { "id": "rounded_corner" }, { "id": "rowing" }, { "id": "schedule" }, { "id": "search" }, { "imageUrls": { "twotone": "twotone-settings-24px.svg", "sharp": "sharp-settings-24px.svg", "outline": "outline-settings-24px.svg", "round": "round-settings-24px.svg", "baseline": "baseline-settings-20px.svg" }, "id": "settings" }, { "id": "settings_applications" }, { "id": "settings_backup_restore" }, { "id": "settings_bluetooth" }, { "id": "settings_brightness" }, { "id": "settings_cell" }, { "id": "settings_ethernet" }, { "id": "settings_input_antenna" }, { "id": "settings_input_component" }, { "id": "settings_input_composite" }, { "id": "settings_input_hdmi" }, { "id": "settings_input_svideo" }, { "id": "settings_overscan" }, { "id": "settings_phone" }, { "id": "settings_power" }, { "id": "settings_remote" }, { "id": "settings_voice" }, { "id": "shop" }, { "id": "shop_two" }, { "id": "shopping_basket" }, { "id": "shopping_cart" }, { "id": "speaker_notes" }, { "id": "speaker_notes_off" }, { "id": "spellcheck" }, { "imageUrls": { "twotone": "twotone-star_rate-18px.svg", "sharp": "sharp-star_rate-18px.svg", "outline": "outline-star_rate-18px.svg", "round": "round-star_rate-18px.svg", "baseline": "baseline-star_rate-18px.svg" }, "id": "star_rate" }, { "id": "stars" }, { "id": "store" }, { "id": "subject" }, { "id": "supervised_user_circle" }, { "id": "supervisor_account" }, { "id": "swap_horiz" }, { "id": "swap_horizontal_circle" }, { "id": "swap_vert" }, { "id": "swap_vertical_circle" }, { "id": "tab" }, { "id": "tab_unselected" }, { "id": "text_rotate_up" }, { "id": "text_rotate_vertical" }, { "id": "text_rotation_down" }, { "id": "text_rotation_none" }, { "id": "theaters" }, { "id": "thumb_down" }, { "id": "thumb_up" }, { "id": "thumbs_up_down" }, { "id": "timeline" }, { "id": "toc" }, { "id": "today" }, { "id": "toll" }, { "id": "touch_app" }, { "id": "track_changes" }, { "id": "translate" }, { "id": "trending_down" }, { "id": "trending_flat" }, { "id": "trending_up" }, { "id": "turned_in" }, { "id": "turned_in_not" }, { "id": "update" }, { "id": "verified_user" }, { "id": "vertical_split" }, { "id": "view_agenda" }, { "id": "view_array" }, { "id": "view_carousel" }, { "id": "view_column" }, { "id": "view_day" }, { "id": "view_headline" }, { "id": "view_list" }, { "id": "view_module" }, { "id": "view_quilt" }, { "id": "view_stream" }, { "id": "view_week" }, { "id": "visibility" }, { "id": "visibility_off" }, { "id": "voice_over_off" }, { "id": "watch_later" }, { "id": "work" }, { "id": "work_off" }, { "id": "work_outline" }, { "id": "youtube_searched_for" }, { "id": "zoom_in" }, { "id": "zoom_out" }], "name": "action" }, { "icons": [{ "id": "add_alert" }, { "id": "error" }, { "id": "error_outline" }, { "id": "notification_important" }, { "id": "warning" }], "name": "alert" }, { "icons": [{ "id": "4k" }, { "id": "add_to_queue" }, { "id": "airplay" }, { "id": "album" }, { "id": "art_track" }, { "id": "av_timer" }, { "id": "branding_watermark" }, { "id": "call_to_action" }, { "id": "closed_caption" }, { "id": "control_camera" }, { "id": "equalizer" }, { "id": "explicit" }, { "id": "fast_forward" }, { "id": "fast_rewind" }, { "id": "featured_play_list" }, { "id": "featured_video" }, { "id": "fiber_dvr" }, { "id": "fiber_manual_record" }, { "id": "fiber_new" }, { "id": "fiber_pin" }, { "id": "fiber_smart_record" }, { "id": "forward_10" }, { "id": "forward_30" }, { "id": "forward_5" }, { "id": "games" }, { "id": "hd" }, { "id": "hearing" }, { "id": "high_quality" }, { "id": "library_add" }, { "id": "library_books" }, { "id": "library_music" }, { "id": "loop" }, { "id": "mic" }, { "id": "mic_none" }, { "id": "mic_off" }, { "id": "missed_video_call" }, { "id": "movie" }, { "id": "music_video" }, { "id": "new_releases" }, { "id": "not_interested" }, { "id": "note" }, { "id": "pause" }, { "id": "pause_circle_filled" }, { "id": "pause_circle_outline" }, { "id": "play_arrow" }, { "id": "play_circle_filled" }, { "imageUrls": { "twotone": "twotone-play_circle_filled_white-24px.svg", "sharp": "sharp-play_circle_filled_white-24px.svg", "outline": "outline-play_circle_filled_white-24px.svg", "round": "round-play_circle_filled_white-24px.svg", "baseline": "baseline-play_circle_filled_white-48px.svg" }, "id": "play_circle_filled_white" }, { "id": "play_circle_outline" }, { "id": "playlist_add" }, { "id": "playlist_add_check" }, { "id": "playlist_play" }, { "id": "queue" }, { "id": "queue_music" }, { "id": "queue_play_next" }, { "id": "radio" }, { "id": "recent_actors" }, { "id": "remove_from_queue" }, { "id": "repeat" }, { "id": "repeat_one" }, { "id": "replay" }, { "id": "replay_10" }, { "id": "replay_30" }, { "id": "replay_5" }, { "id": "shuffle" }, { "id": "skip_next" }, { "id": "skip_previous" }, { "id": "slow_motion_video" }, { "id": "snooze" }, { "id": "sort_by_alpha" }, { "id": "stop" }, { "id": "subscriptions" }, { "id": "subtitles" }, { "id": "surround_sound" }, { "id": "video_call" }, { "id": "video_label" }, { "id": "video_library" }, { "id": "videocam" }, { "id": "videocam_off" }, { "id": "volume_down" }, { "id": "volume_mute" }, { "id": "volume_off" }, { "id": "volume_up" }, { "id": "web" }, { "id": "web_asset" }], "name": "av" }, { "icons": [{ "id": "alternate_email" }, { "id": "business" }, { "id": "call" }, { "id": "call_end" }, { "id": "call_made" }, { "id": "call_merge" }, { "id": "call_missed" }, { "id": "call_missed_outgoing" }, { "id": "call_received" }, { "id": "call_split" }, { "id": "cancel_presentation" }, { "id": "cell_wifi" }, { "id": "chat" }, { "id": "chat_bubble" }, { "id": "chat_bubble_outline" }, { "id": "clear_all" }, { "id": "comment" }, { "id": "contact_mail" }, { "id": "contact_phone" }, { "id": "contacts" }, { "id": "desktop_access_disabled" }, { "id": "dialer_sip" }, { "id": "dialpad" }, { "id": "domain_disabled" }, { "id": "duo" }, { "id": "email" }, { "id": "forum" }, { "id": "import_contacts" }, { "id": "import_export" }, { "id": "invert_colors_off" }, { "id": "list_alt" }, { "id": "live_help" }, { "id": "location_off" }, { "id": "location_on" }, { "id": "mail_outline" }, { "id": "message" }, { "id": "mobile_screen_share" }, { "id": "no_sim" }, { "id": "pause_presentation" }, { "id": "person_add_disabled" }, { "id": "phone" }, { "id": "phonelink_erase" }, { "id": "phonelink_lock" }, { "id": "phonelink_ring" }, { "id": "phonelink_setup" }, { "id": "portable_wifi_off" }, { "id": "present_to_all" }, { "id": "print_disabled" }, { "id": "ring_volume" }, { "id": "rss_feed" }, { "id": "screen_share" }, { "id": "sentiment_satisfied_alt" }, { "id": "speaker_phone" }, { "id": "stay_current_landscape" }, { "id": "stay_current_portrait" }, { "id": "stay_primary_landscape" }, { "id": "stay_primary_portrait" }, { "id": "stop_screen_share" }, { "id": "swap_calls" }, { "id": "textsms" }, { "id": "unsubscribe" }, { "id": "voicemail" }, { "id": "vpn_key" }], "name": "communication" }, { "icons": [{ "id": "add" }, { "id": "add_box" }, { "id": "add_circle" }, { "id": "add_circle_outline" }, { "id": "archive" }, { "id": "backspace" }, { "id": "ballot" }, { "id": "block" }, { "id": "clear" }, { "id": "create" }, { "id": "delete_sweep" }, { "id": "drafts" }, { "id": "file_copy" }, { "id": "filter_list" }, { "id": "flag" }, { "id": "font_download" }, { "id": "forward" }, { "id": "gesture" }, { "id": "how_to_reg" }, { "id": "how_to_vote" }, { "id": "inbox" }, { "id": "link" }, { "id": "link_off" }, { "id": "low_priority" }, { "id": "mail" }, { "id": "markunread" }, { "id": "move_to_inbox" }, { "id": "next_week" }, { "id": "outlined_flag" }, { "id": "redo" }, { "id": "remove" }, { "id": "remove_circle" }, { "id": "remove_circle_outline" }, { "id": "reply" }, { "id": "reply_all" }, { "id": "report" }, { "id": "report_off" }, { "id": "save" }, { "id": "save_alt" }, { "id": "select_all" }, { "id": "send" }, { "id": "sort" }, { "id": "text_format" }, { "id": "unarchive" }, { "id": "undo" }, { "id": "waves" }, { "imageUrls": { "twotone": "twotone-weekend-24px.svg", "sharp": "sharp-weekend-24px.svg", "outline": "outline-weekend-24px.svg", "round": "round-weekend-24px.svg", "baseline": "baseline-weekend-48px.svg" }, "id": "weekend" }, { "id": "where_to_vote" }], "name": "content" }, { "icons": [{ "id": "access_alarm" }, { "id": "access_alarms" }, { "id": "access_time" }, { "id": "add_alarm" }, { "id": "add_to_home_screen" }, { "id": "airplanemode_active" }, { "id": "airplanemode_inactive" }, { "id": "battery_20" }, { "id": "battery_30" }, { "id": "battery_50" }, { "id": "battery_60" }, { "id": "battery_80" }, { "id": "battery_90" }, { "id": "battery_alert" }, { "id": "battery_charging_20" }, { "id": "battery_charging_30" }, { "id": "battery_charging_50" }, { "id": "battery_charging_60" }, { "id": "battery_charging_80" }, { "id": "battery_charging_90" }, { "id": "battery_charging_full" }, { "id": "battery_full" }, { "id": "battery_std" }, { "id": "battery_unknown" }, { "id": "bluetooth" }, { "id": "bluetooth_connected" }, { "id": "bluetooth_disabled" }, { "id": "bluetooth_searching" }, { "id": "brightness_auto" }, { "id": "brightness_high" }, { "id": "brightness_low" }, { "id": "brightness_medium" }, { "id": "data_usage" }, { "id": "developer_mode" }, { "id": "devices" }, { "id": "dvr" }, { "id": "gps_fixed" }, { "id": "gps_not_fixed" }, { "id": "gps_off" }, { "id": "graphic_eq" }, { "id": "location_disabled" }, { "id": "location_searching" }, { "id": "mobile_friendly" }, { "id": "mobile_off" }, { "id": "network_cell" }, { "id": "network_wifi" }, { "id": "nfc" }, { "id": "screen_lock_landscape" }, { "id": "screen_lock_portrait" }, { "id": "screen_lock_rotation" }, { "id": "screen_rotation" }, { "id": "sd_storage" }, { "id": "settings_system_daydream" }, { "id": "signal_cellular_0_bar" }, { "id": "signal_cellular_1_bar" }, { "id": "signal_cellular_2_bar" }, { "id": "signal_cellular_3_bar" }, { "id": "signal_cellular_4_bar" }, { "id": "signal_cellular_alt" }, { "id": "signal_cellular_connected_no_internet_0_bar" }, { "id": "signal_cellular_connected_no_internet_1_bar" }, { "id": "signal_cellular_connected_no_internet_2_bar" }, { "id": "signal_cellular_connected_no_internet_3_bar" }, { "id": "signal_cellular_connected_no_internet_4_bar" }, { "id": "signal_cellular_no_sim" }, { "id": "signal_cellular_null" }, { "id": "signal_cellular_off" }, { "id": "signal_wifi_0_bar" }, { "id": "signal_wifi_1_bar" }, { "id": "signal_wifi_1_bar_lock" }, { "id": "signal_wifi_2_bar" }, { "id": "signal_wifi_2_bar_lock" }, { "id": "signal_wifi_3_bar" }, { "id": "signal_wifi_3_bar_lock" }, { "id": "signal_wifi_4_bar" }, { "id": "signal_wifi_4_bar_lock" }, { "id": "signal_wifi_off" }, { "id": "storage" }, { "id": "usb" }, { "id": "wallpaper" }, { "id": "widgets" }, { "id": "wifi_lock" }, { "id": "wifi_tethering" }], "name": "device" }, { "icons": [{ "id": "add_comment" }, { "id": "attach_file" }, { "id": "attach_money" }, { "id": "bar_chart" }, { "id": "border_all" }, { "id": "border_bottom" }, { "id": "border_clear" }, { "id": "border_color" }, { "id": "border_horizontal" }, { "id": "border_inner" }, { "id": "border_left" }, { "id": "border_outer" }, { "id": "border_right" }, { "id": "border_style" }, { "id": "border_top" }, { "id": "border_vertical" }, { "id": "bubble_chart" }, { "id": "drag_handle" }, { "id": "format_align_center" }, { "id": "format_align_justify" }, { "id": "format_align_left" }, { "id": "format_align_right" }, { "id": "format_bold" }, { "id": "format_clear" }, { "id": "format_color_fill" }, { "id": "format_color_reset" }, { "id": "format_color_text" }, { "id": "format_indent_decrease" }, { "id": "format_indent_increase" }, { "id": "format_italic" }, { "id": "format_line_spacing" }, { "id": "format_list_bulleted" }, { "id": "format_list_numbered" }, { "id": "format_list_numbered_rtl" }, { "id": "format_paint" }, { "id": "format_quote" }, { "id": "format_shapes" }, { "id": "format_size" }, { "id": "format_strikethrough" }, { "id": "format_textdirection_l_to_r" }, { "id": "format_textdirection_r_to_l" }, { "id": "format_underlined" }, { "id": "functions" }, { "id": "highlight" }, { "id": "insert_chart" }, { "id": "insert_chart_outlined" }, { "id": "insert_comment" }, { "id": "insert_drive_file" }, { "id": "insert_emoticon" }, { "id": "insert_invitation" }, { "id": "insert_link" }, { "id": "insert_photo" }, { "id": "linear_scale" }, { "id": "merge_type" }, { "id": "mode_comment" }, { "id": "monetization_on" }, { "id": "money_off" }, { "id": "multiline_chart" }, { "id": "notes" }, { "id": "pie_chart" }, { "id": "publish" }, { "id": "scatter_plot" }, { "id": "score" }, { "id": "short_text" }, { "id": "show_chart" }, { "id": "space_bar" }, { "id": "strikethrough_s" }, { "id": "table_chart" }, { "id": "text_fields" }, { "id": "title" }, { "id": "vertical_align_bottom" }, { "id": "vertical_align_center" }, { "id": "vertical_align_top" }, { "id": "wrap_text" }], "name": "editor" }, { "icons": [{ "id": "attachment" }, { "id": "cloud" }, { "id": "cloud_circle" }, { "id": "cloud_done" }, { "id": "cloud_download" }, { "id": "cloud_off" }, { "id": "cloud_queue" }, { "id": "cloud_upload" }, { "id": "create_new_folder" }, { "id": "folder" }, { "id": "folder_open" }, { "id": "folder_shared" }], "name": "file" }, { "icons": [{ "id": "cast" }, { "id": "cast_connected" }, { "imageUrls": { "twotone": "twotone-cast_for_education-24px.svg", "sharp": "sharp-cast_for_education-24px.svg", "outline": "outline-cast_for_education-24px.svg", "round": "round-cast_for_education-24px.svg", "baseline": "baseline-cast_for_education-48px.svg" }, "id": "cast_for_education" }, { "id": "computer" }, { "id": "desktop_mac" }, { "id": "desktop_windows" }, { "id": "developer_board" }, { "id": "device_hub" }, { "id": "device_unknown" }, { "id": "devices_other" }, { "id": "dock" }, { "id": "gamepad" }, { "id": "headset" }, { "id": "headset_mic" }, { "id": "keyboard" }, { "id": "keyboard_arrow_down" }, { "id": "keyboard_arrow_left" }, { "id": "keyboard_arrow_right" }, { "id": "keyboard_arrow_up" }, { "id": "keyboard_backspace" }, { "id": "keyboard_capslock" }, { "id": "keyboard_hide" }, { "id": "keyboard_return" }, { "id": "keyboard_tab" }, { "id": "keyboard_voice" }, { "id": "laptop" }, { "id": "laptop_chromebook" }, { "id": "laptop_mac" }, { "id": "laptop_windows" }, { "id": "memory" }, { "id": "mouse" }, { "id": "phone_android" }, { "id": "phone_iphone" }, { "id": "phonelink" }, { "id": "phonelink_off" }, { "id": "power_input" }, { "id": "router" }, { "id": "scanner" }, { "id": "security" }, { "id": "sim_card" }, { "id": "smartphone" }, { "id": "speaker" }, { "id": "speaker_group" }, { "id": "tablet" }, { "id": "tablet_android" }, { "id": "tablet_mac" }, { "id": "toys" }, { "id": "tv" }, { "id": "videogame_asset" }, { "id": "watch" }], "name": "hardware" }, { "icons": [{ "id": "add_a_photo" }, { "id": "add_photo_alternate" }, { "id": "add_to_photos" }, { "id": "adjust" }, { "id": "assistant" }, { "id": "assistant_photo" }, { "id": "audiotrack" }, { "id": "blur_circular" }, { "id": "blur_linear" }, { "id": "blur_off" }, { "id": "blur_on" }, { "id": "brightness_1" }, { "id": "brightness_2" }, { "id": "brightness_3" }, { "id": "brightness_4" }, { "id": "brightness_5" }, { "id": "brightness_6" }, { "id": "brightness_7" }, { "id": "broken_image" }, { "id": "brush" }, { "id": "burst_mode" }, { "id": "camera" }, { "id": "camera_alt" }, { "id": "camera_front" }, { "id": "camera_rear" }, { "id": "camera_roll" }, { "id": "center_focus_strong" }, { "id": "center_focus_weak" }, { "id": "collections" }, { "id": "collections_bookmark" }, { "id": "color_lens" }, { "id": "colorize" }, { "id": "compare" }, { "id": "control_point" }, { "id": "control_point_duplicate" }, { "id": "crop" }, { "id": "crop_16_9" }, { "id": "crop_3_2" }, { "id": "crop_5_4" }, { "id": "crop_7_5" }, { "id": "crop_din" }, { "id": "crop_free" }, { "id": "crop_landscape" }, { "id": "crop_original" }, { "id": "crop_portrait" }, { "id": "crop_rotate" }, { "id": "crop_square" }, { "id": "dehaze" }, { "id": "details" }, { "id": "edit" }, { "id": "exposure" }, { "id": "exposure_neg_1" }, { "id": "exposure_neg_2" }, { "id": "exposure_plus_1" }, { "id": "exposure_plus_2" }, { "id": "exposure_zero" }, { "id": "filter" }, { "id": "filter_1" }, { "id": "filter_2" }, { "id": "filter_3" }, { "id": "filter_4" }, { "id": "filter_5" }, { "id": "filter_6" }, { "id": "filter_7" }, { "id": "filter_8" }, { "id": "filter_9" }, { "id": "filter_9_plus" }, { "id": "filter_b_and_w" }, { "id": "filter_center_focus" }, { "id": "filter_drama" }, { "id": "filter_frames" }, { "id": "filter_hdr" }, { "id": "filter_none" }, { "id": "filter_tilt_shift" }, { "id": "filter_vintage" }, { "id": "flare" }, { "id": "flash_auto" }, { "id": "flash_off" }, { "id": "flash_on" }, { "id": "flip" }, { "id": "gradient" }, { "id": "grain" }, { "id": "grid_off" }, { "id": "grid_on" }, { "id": "hdr_off" }, { "id": "hdr_on" }, { "id": "hdr_strong" }, { "id": "hdr_weak" }, { "id": "healing" }, { "id": "image" }, { "id": "image_aspect_ratio" }, { "id": "image_search" }, { "id": "iso" }, { "id": "landscape" }, { "id": "leak_add" }, { "id": "leak_remove" }, { "id": "lens" }, { "id": "linked_camera" }, { "id": "looks" }, { "id": "looks_3" }, { "id": "looks_4" }, { "id": "looks_5" }, { "id": "looks_6" }, { "id": "looks_one" }, { "id": "looks_two" }, { "id": "loupe" }, { "id": "monochrome_photos" }, { "id": "movie_creation" }, { "id": "movie_filter" }, { "id": "music_note" }, { "id": "music_off" }, { "id": "nature" }, { "id": "nature_people" }, { "id": "navigate_before" }, { "id": "navigate_next" }, { "id": "palette" }, { "id": "panorama" }, { "id": "panorama_fish_eye" }, { "id": "panorama_horizontal" }, { "id": "panorama_vertical" }, { "id": "panorama_wide_angle" }, { "id": "photo" }, { "id": "photo_album" }, { "id": "photo_camera" }, { "id": "photo_filter" }, { "id": "photo_library" }, { "id": "photo_size_select_actual" }, { "id": "photo_size_select_large" }, { "id": "photo_size_select_small" }, { "id": "picture_as_pdf" }, { "id": "portrait" }, { "id": "remove_red_eye" }, { "id": "rotate_90_degrees_ccw" }, { "id": "rotate_left" }, { "id": "rotate_right" }, { "id": "shutter_speed" }, { "id": "slideshow" }, { "id": "straighten" }, { "id": "style" }, { "id": "switch_camera" }, { "id": "switch_video" }, { "id": "tag_faces" }, { "id": "texture" }, { "id": "timelapse" }, { "id": "timer" }, { "id": "timer_10" }, { "id": "timer_3" }, { "id": "timer_off" }, { "id": "tonality" }, { "id": "transform" }, { "id": "tune" }, { "id": "view_comfy" }, { "id": "view_compact" }, { "id": "vignette" }, { "id": "wb_auto" }, { "id": "wb_cloudy" }, { "id": "wb_incandescent" }, { "id": "wb_iridescent" }, { "id": "wb_sunny" }], "name": "image" }, { "icons": [{ "id": "360" }, { "id": "add_location" }, { "id": "atm" }, { "id": "beenhere" }, { "id": "category" }, { "id": "compass_calibration" }, { "id": "departure_board" }, { "id": "directions" }, { "id": "directions_bike" }, { "id": "directions_boat" }, { "id": "directions_bus" }, { "id": "directions_car" }, { "id": "directions_railway" }, { "id": "directions_run" }, { "id": "directions_subway" }, { "id": "directions_transit" }, { "id": "directions_walk" }, { "id": "edit_attributes" }, { "id": "edit_location" }, { "id": "ev_station" }, { "id": "fastfood" }, { "id": "flight" }, { "id": "hotel" }, { "id": "layers" }, { "id": "layers_clear" }, { "id": "local_activity" }, { "id": "local_airport" }, { "id": "local_atm" }, { "id": "local_bar" }, { "id": "local_cafe" }, { "id": "local_car_wash" }, { "id": "local_convenience_store" }, { "id": "local_dining" }, { "id": "local_drink" }, { "id": "local_florist" }, { "id": "local_gas_station" }, { "id": "local_grocery_store" }, { "id": "local_hospital" }, { "id": "local_hotel" }, { "id": "local_laundry_service" }, { "id": "local_library" }, { "id": "local_mall" }, { "id": "local_movies" }, { "id": "local_offer" }, { "id": "local_parking" }, { "id": "local_pharmacy" }, { "id": "local_phone" }, { "id": "local_pizza" }, { "id": "local_play" }, { "id": "local_post_office" }, { "id": "local_printshop" }, { "id": "local_see" }, { "id": "local_shipping" }, { "id": "local_taxi" }, { "id": "map" }, { "id": "money" }, { "id": "my_location" }, { "id": "navigation" }, { "id": "near_me" }, { "id": "not_listed_location" }, { "id": "person_pin" }, { "id": "person_pin_circle" }, { "id": "pin_drop" }, { "id": "place" }, { "id": "rate_review" }, { "id": "restaurant" }, { "id": "restaurant_menu" }, { "id": "satellite" }, { "id": "store_mall_directory" }, { "id": "streetview" }, { "id": "subway" }, { "id": "terrain" }, { "id": "traffic" }, { "id": "train" }, { "id": "tram" }, { "id": "transfer_within_a_station" }, { "id": "transit_enterexit" }, { "id": "trip_origin" }, { "id": "zoom_out_map" }], "name": "maps" }, { "icons": [{ "id": "apps" }, { "id": "arrow_back" }, { "id": "arrow_back_ios" }, { "id": "arrow_downward" }, { "id": "arrow_drop_down" }, { "id": "arrow_drop_down_circle" }, { "id": "arrow_drop_up" }, { "id": "arrow_forward" }, { "id": "arrow_forward_ios" }, { "id": "arrow_left" }, { "id": "arrow_right" }, { "id": "arrow_upward" }, { "id": "cancel" }, { "id": "check" }, { "id": "chevron_left" }, { "id": "chevron_right" }, { "id": "close" }, { "id": "expand_less" }, { "id": "expand_more" }, { "id": "first_page" }, { "id": "fullscreen" }, { "id": "fullscreen_exit" }, { "id": "last_page" }, { "id": "menu" }, { "id": "more_horiz" }, { "id": "more_vert" }, { "id": "refresh" }, { "id": "subdirectory_arrow_left" }, { "id": "subdirectory_arrow_right" }, { "id": "unfold_less" }, { "id": "unfold_more" }], "name": "navigation" }, { "icons": [{ "id": "adb" }, { "id": "airline_seat_flat" }, { "id": "airline_seat_flat_angled" }, { "id": "airline_seat_individual_suite" }, { "id": "airline_seat_legroom_extra" }, { "id": "airline_seat_legroom_normal" }, { "id": "airline_seat_legroom_reduced" }, { "id": "airline_seat_recline_extra" }, { "id": "airline_seat_recline_normal" }, { "id": "bluetooth_audio" }, { "id": "confirmation_number" }, { "id": "disc_full" }, { "id": "drive_eta" }, { "id": "enhanced_encryption" }, { "id": "event_available" }, { "id": "event_busy" }, { "id": "event_note" }, { "id": "folder_special" }, { "id": "live_tv" }, { "id": "mms" }, { "id": "more" }, { "id": "network_check" }, { "id": "network_locked" }, { "id": "no_encryption" }, { "id": "ondemand_video" }, { "id": "personal_video" }, { "id": "phone_bluetooth_speaker" }, { "id": "phone_callback" }, { "id": "phone_forwarded" }, { "id": "phone_in_talk" }, { "id": "phone_locked" }, { "id": "phone_missed" }, { "id": "phone_paused" }, { "id": "power" }, { "id": "power_off" }, { "id": "priority_high" }, { "id": "sd_card" }, { "id": "sms" }, { "id": "sms_failed" }, { "id": "sync" }, { "id": "sync_disabled" }, { "id": "sync_problem" }, { "id": "system_update" }, { "id": "tap_and_play" }, { "id": "time_to_leave" }, { "id": "tv_off" }, { "id": "vibration" }, { "id": "voice_chat" }, { "id": "vpn_lock" }, { "id": "wc" }, { "id": "wifi" }, { "id": "wifi_off" }], "name": "notification" }, { "icons": [{ "id": "ac_unit" }, { "id": "airport_shuttle" }, { "id": "all_inclusive" }, { "id": "beach_access" }, { "id": "business_center" }, { "id": "casino" }, { "id": "child_care" }, { "id": "child_friendly" }, { "id": "fitness_center" }, { "id": "free_breakfast" }, { "id": "golf_course" }, { "id": "hot_tub" }, { "id": "kitchen" }, { "id": "meeting_room" }, { "id": "no_meeting_room" }, { "id": "pool" }, { "id": "room_service" }, { "id": "rv_hookup" }, { "id": "smoke_free" }, { "id": "smoking_rooms" }, { "id": "spa" }], "name": "places" }, { "icons": [{ "id": "cake" }, { "imageUrls": { "twotone": "twotone-domain-24px.svg", "sharp": "sharp-domain-24px.svg", "outline": "outline-domain-24px.svg", "round": "round-domain-24px.svg", "baseline": "baseline-domain-48px.svg" }, "id": "domain" }, { "id": "group" }, { "id": "group_add" }, { "id": "location_city" }, { "id": "mood" }, { "id": "mood_bad" }, { "id": "notifications" }, { "id": "notifications_active" }, { "id": "notifications_none" }, { "id": "notifications_off" }, { "id": "notifications_paused" }, { "id": "pages" }, { "id": "party_mode" }, { "id": "people" }, { "id": "people_outline" }, { "id": "person" }, { "id": "person_add" }, { "id": "person_outline" }, { "id": "plus_one" }, { "id": "poll" }, { "id": "public" }, { "id": "school" }, { "id": "sentiment_dissatisfied" }, { "id": "sentiment_satisfied" }, { "id": "sentiment_very_dissatisfied" }, { "id": "sentiment_very_satisfied" }, { "id": "share" }, { "id": "thumb_down_alt" }, { "id": "thumb_up_alt" }, { "id": "whatshot" }], "name": "social" }, { "icons": [{ "id": "check_box" }, { "id": "check_box_outline_blank" }, { "id": "indeterminate_check_box" }, { "id": "radio_button_checked" }, { "id": "radio_button_unchecked" }, { "id": "star" }, { "id": "star_border" }, { "id": "star_half" }, { "id": "toggle_off" }, { "id": "toggle_on" }], "name": "toggle" }] };


/***/ }),

/***/ "uzBL":
/*!*****************************************************************************!*\
  !*** ./src/app/process-flow-editor/view-all-process/process-flow.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProcessFlowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessFlowModule", function() { return ProcessFlowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _process_flow_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-flow-routing.module */ "8kyr");
/* harmony import */ var _all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-process-view/all-process-view.component */ "OPeC");
/* harmony import */ var _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-process/create-process.component */ "cJcx");
/* harmony import */ var _single_process_card_single_process_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-process-card/single-process-card.component */ "K7H8");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-category/create-category.component */ "G3PP");
/* harmony import */ var _atoms_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../atoms/confirmation-dialog/confirmation-dialog.module */ "X1GU");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



















class ProcessFlowModule {
}
ProcessFlowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessFlowModule });
ProcessFlowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessFlowModule_Factory(t) { return new (t || ProcessFlowModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _process_flow_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProcessFlowRoutingModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _atoms_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessFlowModule, { declarations: [_all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_4__["AllProcessViewComponent"], _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__["CreateProcessComponent"], _single_process_card_single_process_card_component__WEBPACK_IMPORTED_MODULE_6__["SingleProcessCardComponent"], _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_14__["CreateCategoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _process_flow_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProcessFlowRoutingModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _atoms_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessFlowModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_all_process_view_all_process_view_component__WEBPACK_IMPORTED_MODULE_4__["AllProcessViewComponent"], _create_process_create_process_component__WEBPACK_IMPORTED_MODULE_5__["CreateProcessComponent"], _single_process_card_single_process_card_component__WEBPACK_IMPORTED_MODULE_6__["SingleProcessCardComponent"], _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_14__["CreateCategoryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _process_flow_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProcessFlowRoutingModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _atoms_confirmation_dialog_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zkFv":
/*!****************************************************************************!*\
  !*** ./src/app/atoms/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationDialogComponent, DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ConfirmationDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.title = 'Delete';
        this.content = 'Are you sure you want to delete the Record?';
        this.emitResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '400px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            result ? this.emitResult.emit(true) : this.emitResult.emit();
        });
        const a = DeleteDialogComponent;
        a.prototype.title = this.title;
        a.prototype.content = this.content;
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], inputs: { title: "title", content: "content" }, outputs: { emitResult: "emitResult" }, decls: 0, vars: 0, template: function ConfirmationDialogComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                template: '',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emitResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
class DeleteDialogComponent {
    constructor(confirmDialogRef) {
        this.confirmDialogRef = confirmDialogRef;
        this.emitResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onCancel() {
        this.confirmDialogRef.close();
    }
    onConfirm() {
        this.confirmDialogRef.close(true);
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete-contact-dialog"]], decls: 10, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", "yes");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-contact-dialog',
                templateUrl: 'confirmation-dialog.component.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=process-flow-editor-view-all-process-process-flow-module.js.map