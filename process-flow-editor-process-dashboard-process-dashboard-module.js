(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-flow-editor-process-dashboard-process-dashboard-module"],{

/***/ "8eSw":
/*!************************************************************************************!*\
  !*** ./src/app/process-flow-editor/process-dashboard/process-dashboard.service.ts ***!
  \************************************************************************************/
/*! exports provided: ProcessDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDashboardService", function() { return ProcessDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common.service */ "gbi4");





class ProcessDashboardService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    createFormsGroup(value) {
        const payload = {
            'values': [value]
        };
        return this.http.post(this.baseUrl + 'createFormsGroup/', payload, this.commonService.httpOptions);
    }
    getFormsGroup(value, process_id) {
        const payload = {
            "limit": 10,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                {
                    "group_name": value
                }
            ]
        };
        payload.filter = [
            { 'table_id': process_id }
        ];
        return this.http.post(this.baseUrl + 'getFormsGroup/', payload, this.commonService.httpOptions);
    }
    putFormsGroup(value) {
        const payload = {
            'values': [value]
        };
        return this.http.put(this.baseUrl + 'putFormsGroup/', payload, this.commonService.httpOptions);
    }
    getGroupFields(table_name, filter) {
        console.log(filter, 'filter');
        const payload = {
            "limit": 10000,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                {
                    "table_name": table_name
                }
            ]
        };
        if (filter && filter.group_id) {
            payload.filter = [
                { 'group_id': filter.group_id }
            ];
        }
        return this.http.post(this.baseUrl + 'getAllProcessFields/', payload, this.commonService.httpOptions);
    }
    createField(value) {
        delete value.width;
        delete value.position;
        const payload = {
            'values': [value]
        };
        return this.http.post(this.baseUrl + 'processFieldBasic/', payload, this.commonService.httpOptions);
    }
    updateField(value) {
        delete value.width;
        delete value.position;
        const payload = {
            'values': [value]
        };
        return this.http.put(this.baseUrl + 'putProcessFields/', payload, this.commonService.httpOptions);
    }
    updatePositionField(value) {
        const payload = {
            'values': value
        };
        return this.http.put(this.baseUrl + 'putProcessFieldMulti/', payload, this.commonService.httpOptions);
    }
    convertSnackCase(value) {
        return value && value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
    }
    createTableField(value) {
        const payload = {
            'values': [value]
        };
        return this.http.post(this.baseUrl + 'processFieldTable/', payload, this.commonService.httpOptions);
    }
    deleteField(table_name, id) {
        return this.http.delete(this.baseUrl + 'process/deletefield/' + table_name + '/' + id + '/', this.commonService.httpOptions);
    }
    getAllSubTables(filter) {
        const payload = {
            "limit": 50,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": []
        };
        if (filter === null || filter === void 0 ? void 0 : filter.group_id)
            payload.filter.push({ 'group_id': filter.group_id });
        if (filter === null || filter === void 0 ? void 0 : filter.parent_table_id)
            payload.filter.push({ 'parent_table_id': filter.parent_table_id });
        return this.http.post(this.baseUrl + 'process/getAllSubTables/', payload, this.commonService.httpOptions);
    }
    checkTable(value) {
        const payload = {
            "table_name": value
        };
        return this.http.post(this.baseUrl + 'checkTable/', payload, this.commonService.httpOptions);
    }
    getCommonValues(data) {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "meta_table_data",
            "sort_type": "ASC",
            "sort_field": "id",
        };
        if (data === null || data === void 0 ? void 0 : data.table_name) {
            payload.filter = [];
            if ((data === null || data === void 0 ? void 0 : data.db_name) === 'flow_pod') {
                payload.filter.push({ 'data_table_name': data.table_name });
            }
            else {
                payload.filter.push({ "table_name": data.table_name });
            }
        }
        if (data === null || data === void 0 ? void 0 : data.db_name)
            payload.db_name = data.db_name;
        if (data === null || data === void 0 ? void 0 : data.name)
            payload.table_name = data === null || data === void 0 ? void 0 : data.name;
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getProcess(filter) {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
        };
        payload.filter = [];
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.table_id)) {
            payload.filter.push({ 'table_id': filter.table_id });
        }
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getDesignationList() {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "designation",
            "sort_type": "ASC",
            "sort_field": "id",
        };
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    putColumns(value, tableName) {
        const payload = {
            "limit": 1,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": tableName,
            "sort_type": "ASC",
            "sort_field": "id",
            "values": value
        };
        return this.http.put(this.baseUrl + 'commonPut/', payload, this.commonService.httpOptions);
    }
    getDepartmentList() {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "departments",
            "sort_type": "ASC",
            "sort_field": "id",
        };
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getPermissionDesignationList(filter) {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "process_permission",
            "sort_type": "ASC",
            "sort_field": "id",
        };
        payload.filter = [];
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.table_id)) {
            payload.filter.push({ 'table_id': filter.table_id });
        }
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getOptionsList(filter) {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": filter === null || filter === void 0 ? void 0 : filter.db,
            "table_name": filter === null || filter === void 0 ? void 0 : filter.table_name,
            "sort_type": "ASC",
            "sort_field": "id",
        };
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.table_field)) {
            payload.search = [];
            payload.search.push({ [filter.table_field]: filter.value });
        }
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.id)) {
            payload.filter = [];
            payload.filter.push({ id: parseInt(filter.id) });
        }
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getAdavanced(id) {
        const payload = {
            "limit": 100,
            "page": 0,
            "db_name": 'tracking_db',
            "table_name": 'select_option_advanced',
            "sort_type": "ASC",
            "sort_field": "id",
            filter: []
        };
        payload.filter.push({ 'field_id': id });
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
}
ProcessDashboardService.ɵfac = function ProcessDashboardService_Factory(t) { return new (t || ProcessDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ProcessDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessDashboardService, factory: ProcessDashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "IUAm":
/*!**************************************************************************************!*\
  !*** ./src/app/process-flow-editor/process-dashboard/process-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProcessDashboardComponent, FieldDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDashboardComponent", function() { return ProcessDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDialogComponent", function() { return FieldDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "uns5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../process-dashboard/process-dashboard.service */ "8eSw");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _rowparse_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rowparse.pipe */ "f1ui");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
























const _c0 = ["myDiv"];
const _c1 = ["editFieldDialog"];
function ProcessDashboardComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_6_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addgroup = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProcessDashboardComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProcessDashboardComponent_div_6_div_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.sectionName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.sectionName);
} }
function ProcessDashboardComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_6_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.createSection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_6_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.addgroup = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.sectionName.length === 0);
} }
function ProcessDashboardComponent_div_6_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 68);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
function ProcessDashboardComponent_div_6_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 72);
} }
const _c2 = function (a0) { return { "background": a0 }; };
function ProcessDashboardComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_6_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const group_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onGroupChange(group_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_6_div_7_div_3_Template, 1, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r25 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r17.selectedGroup.id === group_r25.id ? "#fafafa" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r25.group_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.selectedGroup.id === group_r25.id);
} }
function ProcessDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_6_button_3_Template, 4, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProcessDashboardComponent_div_6_div_4_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProcessDashboardComponent_div_6_div_5_Template, 7, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProcessDashboardComponent_div_6_mat_spinner_6_Template, 1, 1, "mat-spinner", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProcessDashboardComponent_div_6_div_7_Template, 4, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.addLoader && !ctx_r0.addgroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addgroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.addLoader && ctx_r0.addgroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.formGroups);
} }
function ProcessDashboardComponent_div_7_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 72);
} }
function ProcessDashboardComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_7_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const department_r30 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.onDepartmentChange(department_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_7_div_3_div_3_Template, 1, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r29.selectedDepartment.id === department_r30.id ? "#fafafa" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r30.department_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.selectedDepartment.id === department_r30.id);
} }
function ProcessDashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Departments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_7_div_3_Template, 4, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.departmentList);
} }
function ProcessDashboardComponent_div_14_div_3_div_2_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProcessDashboardComponent_div_14_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_14_div_3_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const field_r42 = ctx_r49.$implicit; const fieldIndex_r43 = ctx_r49.index; const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r47.selectedField = field_r42; ctx_r47.selectedField["group_id"] = ctx_r47.selectedGroup.id; ctx_r47.selectedField["row_no"] = rowIndex_r37; ctx_r47.selectedField["field_position"] = fieldIndex_r43; ctx_r47.widthHandleCreate(); return ctx_r47.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_14_div_3_div_2_div_1_span_3_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r42 == null ? null : field_r42.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r42.mandatory);
} }
function ProcessDashboardComponent_div_14_div_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_14_div_3_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const field_r42 = ctx_r54.$implicit; const fieldIndex_r43 = ctx_r54.index; const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r52.selectedField = field_r42; ctx_r52.selectedField["group_id"] = ctx_r52.selectedGroup.id; ctx_r52.selectedField["row_no"] = rowIndex_r37; ctx_r52.selectedField["table_name"] = ctx_r52.dataTableName; ctx_r52.selectedField["table_id"] = ctx_r52.processData.id; ctx_r52.selectedField["field_position"] = fieldIndex_r43; ctx_r52.selectedField["group_name"] = ctx_r52.currentGroupName; ctx_r52.widthHandleCreate(); return ctx_r52.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " + Click to add a new field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "b-hover": a0 }; };
function ProcessDashboardComponent_div_14_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ProcessDashboardComponent_div_14_div_3_div_2_Template_div_drop_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const fieldIndex_r43 = ctx.index; const field_r42 = ctx.$implicit; const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.endFieldDrag(ctx_r56.selectedGroup.id, rowIndex_r37, fieldIndex_r43, field_r42); })("dragover", function ProcessDashboardComponent_div_14_div_3_div_2_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const fieldIndex_r43 = ctx.index; const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r59.dragoverItemId = ctx_r59.selectedGroup.id + "-" + rowIndex_r37 + "-" + fieldIndex_r43; return ctx_r59.dragOver($event); })("dragstart", function ProcessDashboardComponent_div_14_div_3_div_2_Template_div_dragstart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const fieldIndex_r43 = ctx.index; const field_r42 = ctx.$implicit; const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.startFieldDrag(ctx_r61.selectedGroup.id, rowIndex_r37, fieldIndex_r43, field_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProcessDashboardComponent_div_14_div_3_div_2_div_1_Template, 5, 2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessDashboardComponent_div_14_div_3_div_2_div_2_Template, 2, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r42 = ctx.$implicit;
    const fieldIndex_r43 = ctx.index;
    const rowIndex_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r41.getWidth(field_r42.grid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", field_r42 == null ? null : field_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx_r41.dragoverItemId === ctx_r41.selectedGroup.id + "-" + rowIndex_r37 + "-" + fieldIndex_r43));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!field_r42 && !!field_r42.id && field_r42.type != "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !field_r42.id);
} }
function ProcessDashboardComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessDashboardComponent_div_14_div_3_div_2_Template, 3, 8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "rowparse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, rowData_r36).data);
} }
function ProcessDashboardComponent_div_14_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r64.parent_display_name, " ");
} }
function ProcessDashboardComponent_div_14_div_4_th_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProcessDashboardComponent_div_14_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ProcessDashboardComponent_div_14_div_4_th_6_Template_th_drop_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const fieldIndex_r71 = ctx.index; const no_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.dragEnd(no_r65, fieldIndex_r71); })("dragover", function ProcessDashboardComponent_div_14_div_4_th_6_Template_th_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r76.dragOver($event); })("dragstart", function ProcessDashboardComponent_div_14_div_4_th_6_Template_th_dragstart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const fieldIndex_r71 = ctx.index; const no_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.dragStart(no_r65, fieldIndex_r71); })("click", function ProcessDashboardComponent_div_14_div_4_th_6_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const data_r70 = ctx.$implicit; const column_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r79.selectedField = data_r70; ctx_r79.selectedField["group_id"] = ctx_r79.selectedGroup.id; ctx_r79.selectedField["row_no"] = column_r64.row_no; ctx_r79.selectedField["field_position"] = data_r70.field_position; return ctx_r79.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProcessDashboardComponent_div_14_div_4_th_6_span_2_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", data_r70.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r70.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r70.mandatory);
} }
function ProcessDashboardComponent_div_14_div_4_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " ", " ");
} }
function ProcessDashboardComponent_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_14_div_4_span_3_Template, 4, 1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProcessDashboardComponent_div_14_div_4_th_6_Template, 3, 3, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_14_div_4_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const no_r65 = ctx.index; const column_r64 = ctx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r82.selectedField = ctx_r82.field; ctx_r82.selectedField["group_id"] = ctx_r82.selectedGroup.id; ctx_r82.selectedField["row_no"] = no_r65; ctx_r82.selectedField["table_name"] = column_r64.table_name; ctx_r82.selectedField["table_id"] = column_r64.id; ctx_r82.selectedField["field_position"] = column_r64.data ? column_r64.data.length : 0; ctx_r82.selectedField["group_name"] = ctx_r82.currentGroupName; ctx_r82.selectedField["is_subtable"] = column_r64.is_sub_table ? 1 : 0; return ctx_r82.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProcessDashboardComponent_div_14_div_4_td_11_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r64 = ctx.$implicit;
    const no_r65 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", no_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r64 == null ? null : column_r64.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r64.parent_display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", column_r64 == null ? null : column_r64.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r64.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r64.data);
} }
function ProcessDashboardComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ProcessDashboardComponent_div_14_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.saveSectionName($event.target.value); })("ngModelChange", function ProcessDashboardComponent_div_14_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.selectedGroup.group_name ? ctx_r86.selectedGroup.group_name : ctx_r86.selectedGroup.groupName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProcessDashboardComponent_div_14_div_3_Template, 4, 3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProcessDashboardComponent_div_14_div_4_Template, 12, 6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_14_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r87.addNewRow(ctx_r87.selectedGroup.id); return ctx_r87.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " + Click to add a field in New Row ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "group_", ctx_r4.selectedGroup.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.selectedGroup.group_name ? ctx_r4.selectedGroup.group_name : ctx_r4.selectedGroup.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.metaDataGroup[ctx_r4.selectedGroup.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.metaData);
} }
function ProcessDashboardComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 100);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
function ProcessDashboardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please create a New Group by clicking on Add Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "selected-role": a0 }; };
function ProcessDashboardComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const data_r88 = ctx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r89.selectedRole = data_r88; ctx_r89.currentDesignation = data_r88; return ctx_r89.onDesignationSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r88 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, (ctx_r7.selectedRole == null ? null : ctx_r7.selectedRole.id) === (data_r88 == null ? null : data_r88.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r88.designation, " ");
} }
function ProcessDashboardComponent_div_42_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_div_23_div_1_Template_input_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const col_r96 = ctx.index; const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.stopFieldEvent($event, row_r92, col_r96, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_div_23_div_1_Template_input_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const col_r96 = ctx.index; const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.stopFieldEvent($event, row_r92, col_r96, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_div_23_div_1_Template_input_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const col_r96 = ctx.index; const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.stopFieldEvent($event, row_r92, col_r96, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_div_23_div_1_Template_input_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const col_r96 = ctx.index; const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.stopFieldEvent($event, row_r92, col_r96, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r95 = ctx.$implicit;
    const col_r96 = ctx.index;
    const row_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r95.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "editable", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", field_r95.number === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "editable", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "read", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", field_r95.number === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "read", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "create", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", field_r95.number === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "create", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "hidden", row_r92, "checkbox", col_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", field_r95.number === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "hidden", row_r92, "checkbox", col_r96, "");
} }
function ProcessDashboardComponent_div_42_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProcessDashboardComponent_div_42_div_23_div_1_Template, 19, 21, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r91.fields);
} }
function ProcessDashboardComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const data_r91 = ctx.$implicit; const row_r92 = ctx.index; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); data_r91.selected = !(data_r91 == null ? null : data_r91.selected); return ctx_r108.closeAllSelected(row_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_Template_input_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const row_r92 = ctx.index; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.stopEvent($event, row_r92, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_Template_input_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const row_r92 = ctx.index; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.stopEvent($event, row_r92, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_Template_input_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const row_r92 = ctx.index; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.stopEvent($event, row_r92, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_42_Template_input_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const row_r92 = ctx.index; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.stopEvent($event, row_r92, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProcessDashboardComponent_div_42_div_23_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r91 = ctx.$implicit;
    const row_r92 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !data_r91.selected ? "add" : "remove", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r91.group_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "editablecheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r91.number === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "editablecheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "readcheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r91.number === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "readcheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "createcheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r91.number === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "createcheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "hiddencheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r91.number === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "hiddencheckbox", row_r92, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r91 == null ? null : data_r91.selected) && (data_r91 == null ? null : data_r91.fields));
} }
function ProcessDashboardComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function ProcessDashboardComponent_mat_option_53_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const group_r114 = ctx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.selectedDesignation(group_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", group_r114.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r114.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r114.designation, " ");
} }
function ProcessDashboardComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_54_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const data_r117 = ctx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r118.selectedRole = data_r117; ctx_r118.currentDesignation = data_r117; return ctx_r118.getPermissionDesignation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_div_54_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const data_r117 = ctx.$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r120.stopEventhere($event); return ctx_r120.removePermission(data_r117); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r117 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, (ctx_r12.selectedRole == null ? null : ctx_r12.selectedRole.id) === (data_r117 == null ? null : data_r117.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r117.designation, " ");
} }
const _c5 = function (a0) { return { "border": a0 }; };
function FieldDialogComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const types_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r6.selectedType(types_r5); return ctx_r6.tab = "settings"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, types_r5 && types_r5.sub_type && ctx_r4.selectedField && ctx_r4.selectedField.sub_type ? types_r5.sub_type === ctx_r4.selectedField.sub_type ? "1px solid #2e9afc" : "" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](types_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r5.name, " ");
} }
function FieldDialogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDialogComponent_div_5_div_1_Template, 5, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fieldTypes);
} }
const _c6 = function (a0) { return { "selected-settings": a0 }; };
function FieldDialogComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.tab = "items"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx_r8.tab === "items"));
} }
function FieldDialogComponent_div_6_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function FieldDialogComponent_div_6_div_11_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.errortext, " ");
} }
function FieldDialogComponent_div_6_div_11_ng_template_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Fill Id Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_11_ng_template_2_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Fill Starting Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Field Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.field.field_title = $event; })("input", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.checkColumnExist($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDialogComponent_div_6_div_11_ng_template_2_div_5_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sequence ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_mat_button_toggle_group_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.isSequence = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ID Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.field.seq_id_code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FieldDialogComponent_div_6_div_11_ng_template_2_div_19_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Starting Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.field.seq_start_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FieldDialogComponent_div_6_div_11_ng_template_2_div_25_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sequence Digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_2_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.field.seq_count = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.field.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.nameError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.isSequence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.field.seq_id_code)("disabled", ctx_r18.isSequence === "zero" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.seqCodeError && ctx_r18.isSequence === "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.field.seq_start_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.seqStartError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.field.seq_count);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.errortext, " ");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_11_ng_template_4_mat_option_17_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const group_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r45.selectedGroup(group_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r44.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r44.group_name, " ");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Currency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_18_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r47.currencyType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " USD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " INR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r35.currencyType);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Max Length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_24_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r49.field.max_length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.field.max_length);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Default Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_25_Template_mat_slider_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r51.field.default_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r37.field.max_length ? ctx_r37.field.max_length : 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thumbLabel", "true")("color", "primary")("ngModel", ctx_r37.field.default_value)("value", 45);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r56.field.default_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.field.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r53.field.field_sub_type);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r58.field.default_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r54.field.default_value);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_6_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r60.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c7 = function (a0) { return { "width-65": a0 }; };
function FieldDialogComponent_div_6_div_11_ng_template_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Default Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_4_Template, 1, 2, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_5_Template, 1, 1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDialogComponent_div_6_div_11_ng_template_4_div_26_input_6_Template, 1, 0, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r38.field.field_sub_type === "link" || ctx_r38.field.field_sub_type === "image" || ctx_r38.field.field_sub_type === "attachment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.field.field_sub_type === "date" || ctx_r38.field.field_sub_type === "datetime-local" || ctx_r38.field.field_sub_type === "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.field.field_sub_type !== "date" && ctx_r38.field.field_sub_type !== "datetime-local" && ctx_r38.field.field_sub_type !== "time" && ctx_r38.field.field_sub_type !== "image" && ctx_r38.field.field_sub_type !== "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.field.field_sub_type === "image" || ctx_r38.field.field_sub_type === "attachment");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Field Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_27_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r62.field.grid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Small - 25% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Medium - 50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Large - 75% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Full - 100% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.field.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "100");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Default Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_28_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r64.field.default_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.field.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Unique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_53_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r66.field.is_unique = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.field.is_unique);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sequence Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_54_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r68.isNumberField = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_11_ng_template_4_div_54_Template_mat_button_toggle_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r70.field.field_sub_type = "number_select"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_11_ng_template_4_div_54_Template_mat_button_toggle_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r71.field.field_sub_type = "select"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.isNumberField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "zero");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Choose Process ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_mat_option_12_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const process_r77 = ctx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r78.selectedProcess(process_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const process_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", process_r77.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", process_r77.display_name, " ");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Existing Table Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r80.processFilter($event.target.value); })("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r82.advSelectedProcess.display_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_Template_mat_icon_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); $event.stopPropagation(); return _r73.panelOpen ? _r73.closePanel() : _r73.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_div_9_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_mat_option_12_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r75)("ngModel", ctx_r72.advSelectedProcess.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.isAnyAdvanceTouched && !ctx_r72.field.parent_table_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r72.processList);
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Import Existing Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_div_55_Template_mat_button_toggle_group_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r84.importExisting = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FieldDialogComponent_div_6_div_11_ng_template_4_div_55_div_9_Template, 13, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.importExisting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.importExisting === "one");
} }
function FieldDialogComponent_div_6_div_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Field Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r86.field.field_title = $event; })("input", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r88.checkColumnExist($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDialogComponent_div_6_div_11_ng_template_4_div_5_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r89.currentGroup.group_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_mat_icon_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); $event.stopPropagation(); return _r32.panelOpen ? _r32.closePanel() : _r32.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FieldDialogComponent_div_6_div_11_ng_template_4_mat_option_17_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FieldDialogComponent_div_6_div_11_ng_template_4_div_18_Template, 8, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Help Text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r91.field.help_text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FieldDialogComponent_div_6_div_11_ng_template_4_div_24_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FieldDialogComponent_div_6_div_11_ng_template_4_div_25_Template, 4, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FieldDialogComponent_div_6_div_11_ng_template_4_div_26_Template, 7, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FieldDialogComponent_div_6_div_11_ng_template_4_div_27_Template, 12, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FieldDialogComponent_div_6_div_11_ng_template_4_div_28_Template, 8, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-button-toggle-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_mat_button_toggle_group_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r92.field.mandatory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-button-toggle-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_mat_button_toggle_group_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r93.field.is_disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-button-toggle-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_11_ng_template_4_Template_mat_button_toggle_group_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r94.field.is_hidden = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, FieldDialogComponent_div_6_div_11_ng_template_4_div_53_Template, 8, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FieldDialogComponent_div_6_div_11_ng_template_4_div_54_Template, 8, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, FieldDialogComponent_div_6_div_11_ng_template_4_div_55_Template, 10, 4, "div", 56);
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.field.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.nameError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.currentGroup.group_name)("matAutocomplete", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.data.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type === "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.field.help_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type !== "image" && ctx_r20.field.field_sub_type !== "attachment" && ctx_r20.field.field_sub_type !== "link" && ctx_r20.field.field_sub_type !== "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type === "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type !== "slider" && ctx_r20.field.field_sub_type !== "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type !== "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type === "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.field.mandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.one);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.zero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.field.is_disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.one);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.zero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.field.is_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.one);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.zero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.selectedField.name === "Text" || ctx_r20.selectedField.name === "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type === "select" || ctx_r20.field.field_sub_type === "number_select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.field.field_sub_type === "table");
} }
const _c8 = function (a0) { return { "min-200": a0 }; };
function FieldDialogComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDialogComponent_div_6_div_11_div_1_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDialogComponent_div_6_div_11_ng_template_2_Template, 31, 11, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDialogComponent_div_6_div_11_ng_template_4_Template, 56, 24, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r9.field.field_sub_type === "sequence"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.field.field_sub_type === "sequence")("ngIfThen", _r17)("ngIfElse", _r19);
} }
function FieldDialogComponent_div_6_div_12_div_1_div_12_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r100, " ");
} }
function FieldDialogComponent_div_6_div_12_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Set Default Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_12_div_1_div_12_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r101.field.default_value = $event; })("selectionChange", function FieldDialogComponent_div_6_div_12_div_1_div_12_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r103.selectedDefaultOption = {}; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDialogComponent_div_6_div_12_div_1_div_12_mat_option_4_Template, 2, 2, "mat-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r97.field.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r97.itemList);
} }
function FieldDialogComponent_div_6_div_12_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_12_div_1_div_14_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const i_r105 = ctx.index; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r106.deleteItem(i_r105); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r104, " ");
} }
function FieldDialogComponent_div_6_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_12_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r108.itemName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_12_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r110.createItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_12_div_1_div_12_Template, 5, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function FieldDialogComponent_div_6_div_12_div_1_Template_div_cdkDropListDropped_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r111.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FieldDialogComponent_div_6_div_12_div_1_div_14_Template, 4, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r95.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.itemList && ctx_r95.itemList.length && ctx_r95.field.field_sub_type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r95.itemList);
} }
function FieldDialogComponent_div_6_div_12_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Fill Starting Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_12_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Fill Interval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_12_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Fill Ending Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Starting Point* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_12_div_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r115.field.seq_start_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDialogComponent_div_6_div_12_div_2_div_6_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Interval* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_12_div_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r117.field.seq_count = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_12_div_2_div_12_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ending Point* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_12_div_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r118.field.last_seq_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FieldDialogComponent_div_6_div_12_div_2_div_18_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 25 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 75 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r96.field.seq_start_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.limitSelected && !ctx_r96.field.seq_start_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r96.field.seq_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.limitSelected && !ctx_r96.field.seq_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r96.field.last_seq_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.limitSelected && !ctx_r96.field.last_seq_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "100");
} }
function FieldDialogComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDialogComponent_div_6_div_12_div_1_Template, 15, 3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDialogComponent_div_6_div_12_div_2_Template, 31, 10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.field.field_sub_type !== "number_select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.field.field_sub_type === "number_select");
} }
function FieldDialogComponent_div_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function FieldDialogComponent_div_6_div_14_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Choose Process ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_14_div_1_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_1_mat_option_21_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const process_r132 = ctx.$implicit; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r133.selectedProcess(process_r132); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const process_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", process_r132.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", process_r132.display_name, " ");
} }
function FieldDialogComponent_div_6_div_14_div_1_div_38_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Choose Depended Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_14_div_1_div_38_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_1_div_38_mat_option_12_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const group_r139 = ctx.$implicit; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r140.dependField = group_r139; ctx_r140.field.depended_field = ctx_r140.dependField.name; return ctx_r140.isAnyAdvanceTouched = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r139.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r139.field_title, " ");
} }
function FieldDialogComponent_div_6_div_14_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Depended Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_div_38_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r142.dependField.field_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_1_div_38_Template_mat_icon_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); $event.stopPropagation(); return _r135.panelOpen ? _r135.closePanel() : _r135.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FieldDialogComponent_div_6_div_14_div_1_div_38_div_9_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_14_div_1_div_38_mat_option_12_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.dependField.field_title)("matAutocomplete", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.isAnyAdvanceTouched && !ctx_r125.field.depended_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r125.currentTableFieldList);
} }
function FieldDialogComponent_div_6_div_14_div_1_div_39_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Choose Depended Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_14_div_1_div_39_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_1_div_39_mat_option_12_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const group_r149 = ctx.$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r150.processField = group_r149; ctx_r150.field.depended_id = ctx_r150.processField.name; return ctx_r150.isAnyAdvanceTouched = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r149.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r149.field_title, " ");
} }
function FieldDialogComponent_div_6_div_14_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Process Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FieldDialogComponent_div_6_div_14_div_1_div_39_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r152.searchFilter($event.target.value); })("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_div_39_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r154.processField.field_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_1_div_39_Template_mat_icon_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); $event.stopPropagation(); return _r145.panelOpen ? _r145.closePanel() : _r145.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FieldDialogComponent_div_6_div_14_div_1_div_39_div_9_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_14_div_1_div_39_mat_option_12_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r126.processField.field_title)("matAutocomplete", _r147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r126.isAnyAdvanceTouched && !ctx_r126.field.depended_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r126.fieldList);
} }
function FieldDialogComponent_div_6_div_14_div_1_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Choose Search Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FieldDialogComponent_div_6_div_14_div_1_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_1_mat_option_52_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const list_r156 = ctx.$implicit; const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r157.advSearchField = list_r156; ctx_r157.field.parent_table_field = ctx_r157.advSearchField.name; return ctx_r157.isAnyAdvanceTouched = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", list_r156.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r156.field_title, " ");
} }
function FieldDialogComponent_div_6_div_14_div_1_div_53_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_1_div_53_mat_option_11_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const group_r162 = ctx.$implicit; const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r163.selectedDefault(group_r162); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r162 = ctx.$implicit;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r162[ctx_r161.field.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r162[ctx_r161.field.parent_table_field], " ");
} }
function FieldDialogComponent_div_6_div_14_div_1_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Set Default Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FieldDialogComponent_div_6_div_14_div_1_div_53_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r165.searchDefault($event.target.value); })("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_div_53_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r167.selectedDefaultOption[ctx_r167.field.parent_table_field] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_1_div_53_Template_mat_icon_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); $event.stopPropagation(); return _r159.panelOpen ? _r159.closePanel() : _r159.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FieldDialogComponent_div_6_div_14_div_1_div_53_mat_option_11_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r131.selectedDefaultOption[ctx_r131.field.parent_table_field])("matAutocomplete", _r160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r131.defaultOptionList);
} }
function FieldDialogComponent_div_6_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Database ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r169.field.db_name = $event; })("selectionChange", function FieldDialogComponent_div_6_div_14_div_1_Template_mat_select_selectionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r171.selectesDb($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tracking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Flow Pod ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Process Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FieldDialogComponent_div_6_div_14_div_1_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r172.processFilter($event.target.value); })("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r173.advSelectedProcess.display_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_1_Template_mat_icon_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); $event.stopPropagation(); return _r121.panelOpen ? _r121.closePanel() : _r121.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FieldDialogComponent_div_6_div_14_div_1_div_18_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FieldDialogComponent_div_6_div_14_div_1_mat_option_21_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Depended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-button-toggle-group", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_Template_mat_button_toggle_group_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r175.isDepended = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Equal To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle-group", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FieldDialogComponent_div_6_div_14_div_1_div_38_Template, 13, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FieldDialogComponent_div_6_div_14_div_1_div_39_Template, 13, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Search Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FieldDialogComponent_div_6_div_14_div_1_Template_input_input_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r176.searchFilter($event.target.value); })("ngModelChange", function FieldDialogComponent_div_6_div_14_div_1_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r177.advSearchField.field_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_1_Template_mat_icon_click_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); $event.stopPropagation(); return _r127.panelOpen ? _r127.closePanel() : _r127.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, FieldDialogComponent_div_6_div_14_div_1_div_49_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-autocomplete", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FieldDialogComponent_div_6_div_14_div_1_mat_option_52_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, FieldDialogComponent_div_6_div_14_div_1_div_53_Template, 12, 3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.field.db_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "tracking_db");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "flow_pod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r123)("ngModel", ctx_r119.advSelectedProcess.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.isAnyAdvanceTouched && !ctx_r119.field.parent_table_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r119.processList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.isDepended);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.isDepended);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.isDepended);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.advSearchField.field_title)("matAutocomplete", _r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.isAnyAdvanceTouched && !ctx_r119.field.parent_table_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r119.fieldList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r119.field.field_sub_type === "select");
} }
function FieldDialogComponent_div_6_div_14_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_2_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const process_r181 = ctx.$implicit; const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r182.selectedItems(process_r181); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const process_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", process_r181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", process_r181, " ");
} }
function FieldDialogComponent_div_6_div_14_div_2_div_16_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FieldDialogComponent_div_6_div_14_div_2_div_16_mat_option_17_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const group_r189 = ctx.$implicit; const data_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; data_r184.depended_field = group_r189.id; return data_r184.depended_field_title = group_r189.field_title; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r189 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r189.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r189.field_title, " ");
} }
function FieldDialogComponent_div_6_div_14_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_2_div_16_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const data_r184 = ctx.$implicit; return data_r184.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Checked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_2_div_16_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const data_r184 = ctx.$implicit; return data_r184.depended_field_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_div_14_div_2_div_16_Template_mat_icon_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); $event.stopPropagation(); return _r186.panelOpen ? _r186.closePanel() : _r186.openPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", 143, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FieldDialogComponent_div_6_div_14_div_2_div_16_mat_option_17_Template, 2, 2, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FieldDialogComponent_div_6_div_14_div_2_div_16_Template_mat_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const data_r184 = ctx.$implicit; return data_r184.visiblity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Hidden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Locked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r184 = ctx.$implicit;
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r184.list_item, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r184.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r184.depended_field_title)("matAutocomplete", _r187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r180.currentTableFieldList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r184.visiblity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Locked");
} }
function FieldDialogComponent_div_6_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " List Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDialogComponent_div_6_div_14_div_2_mat_option_5_Template, 2, 2, "mat-option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Depended Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FieldDialogComponent_div_6_div_14_div_2_div_16_Template, 26, 11, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r120.itemList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r120.advancedOption);
} }
function FieldDialogComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FieldDialogComponent_div_6_div_14_div_1_Template, 54, 20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FieldDialogComponent_div_6_div_14_div_2_Template, 17, 2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.field.field_sub_type !== "checkbox" && ctx_r12.field.field_sub_type !== "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.field.field_sub_type === "checkbox" || ctx_r12.field.field_sub_type === "radio");
} }
function FieldDialogComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function FieldDialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r198.tab = "settings"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FieldDialogComponent_div_6_div_4_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r200.tab = "validation"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Validation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r201.tab = "advanced"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Advanced Option ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_div_6_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.tab = "visibility"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FieldDialogComponent_div_6_div_11_Template, 6, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FieldDialogComponent_div_6_div_12_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FieldDialogComponent_div_6_div_13_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FieldDialogComponent_div_6_div_14_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FieldDialogComponent_div_6_div_15_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c6, ctx_r1.tab === "settings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.field.field_sub_type === "checklist" || ctx_r1.field.field_sub_type === "number_select" || ctx_r1.field.field_sub_type === "checkbox" || ctx_r1.field.field_sub_type === "select" || ctx_r1.field.field_sub_type === "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c6, ctx_r1.tab === "validation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c6, ctx_r1.tab === "advanced"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c6, ctx_r1.tab === "visibility"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tab === "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tab === "items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tab === "validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tab === "advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tab === "visibility");
} }
function FieldDialogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add a new ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedField == null ? null : ctx_r2.selectedField.name, " ");
} }
function FieldDialogComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r203.deleteField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
let addFieldPopup;
class ProcessDashboardComponent {
    constructor(router, aRouter, processDashboard, dialog, CommonService) {
        this.router = router;
        this.aRouter = aRouter;
        this.processDashboard = processDashboard;
        this.dialog = dialog;
        this.CommonService = CommonService;
        this.title = 'Process';
        this.sectionName = '';
        this.currentIndex = 0;
        this.currentGroupName = '';
        this.metaDataGroup = {};
        this.dragoverItemId = '';
        this.startbody = {};
        this.endbody = {};
        this.contextMenuPosition = { x: '0px', y: '0px' };
        this.field = JSON.parse(JSON.stringify(_constant__WEBPACK_IMPORTED_MODULE_4__["field"]));
        this.dataTableName = '';
        this.row = [1, 2];
        this.metaData = [];
        this.tableDragStart = {
            id: '',
            index: '',
            column: ''
        };
        this.roleList = [];
        this.permissionRoleList = [];
        this.permissionList = [
            {
                name: 'General Information',
                is_edit: false,
                is_read: true,
                is_create: true,
                is_hidden: false,
                selected: true,
                fields: [
                    { name: 'modified', is_edit: false, is_read: true, is_create: true, is_hidden: false, }
                ]
            },
            {
                name: 'Bookings',
                is_edit: false,
                is_read: true,
                is_create: false,
                is_hidden: true,
                selected: false,
                fields: [
                    { name: 'Book', is_edit: false, is_read: true, is_create: true, is_hidden: false, }
                ]
            }
        ];
        this.fieldLoader = false;
        this.addLoader = false;
        this.addgroup = false;
        this.perList = [];
        this.currentDesignation = {};
        this.perGroups = [];
        this.departmentList = [];
        this.selectedDepartment = {};
    }
    ngOnInit() {
        var _a, _b;
        this.aRouter.queryParams.subscribe((params) => {
            var _a, _b;
            this.processData = params;
            if (this.processData) {
                this.title = (_a = this.processData) === null || _a === void 0 ? void 0 : _a.display_name;
                this.dataTableName = (_b = this.processData) === null || _b === void 0 ? void 0 : _b.table_name;
                this.getFormGroup();
                this.getColumn();
            }
        });
        this.containerWidth = (_b = (_a = this.theDiv) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.clientWidth;
        this.selectedRole = this.roleList[0];
    }
    goToProcess() {
        if (this.processData.process == "view-all") {
            this.router.navigate(['/view-all-process']);
        }
        else {
            let temp = { id: this.processData.id, tablename: this.processData.table_name, };
            this.router.navigate(['/dashboard/view', this.processData.table_name], { queryParams: temp, });
        }
    }
    getGroupField() {
        var _a, _b;
        if ((_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id) {
            const filter = {
                group_id: (_b = this.selectedGroup) === null || _b === void 0 ? void 0 : _b.id
            };
            this.metaDataGroup = {};
            this.fieldLoader = true;
            this.processDashboard.getGroupFields(this.processData.table_name, filter).subscribe((response) => {
                var _a;
                this.fieldLoader = false;
                if (response.statusCode === 200) {
                    const temp = response.info;
                    if (temp && temp[0] && temp[0].data) {
                        temp.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.row_no) - (b === null || b === void 0 ? void 0 : b.row_no); });
                        temp.forEach(element => {
                            var _a;
                            element.grid = '';
                            if ((_a = element === null || element === void 0 ? void 0 : element.data) === null || _a === void 0 ? void 0 : _a.length) {
                                element.data.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.field_position) - (b === null || b === void 0 ? void 0 : b.field_position); });
                                element.data.forEach(rowelement => {
                                    if (rowelement.field_type === 'table') {
                                        rowelement.grid = '100%';
                                    }
                                    if (rowelement === null || rowelement === void 0 ? void 0 : rowelement.grid) {
                                        rowelement.width = parseInt(rowelement.grid);
                                        if (element.grid.length) {
                                            element.grid += ' ' + (rowelement.grid + '%');
                                        }
                                        else {
                                            element.grid = rowelement.grid + '%';
                                        }
                                    }
                                    rowelement.position = rowelement.field_position;
                                });
                            }
                        });
                    }
                    this.metaDataGroup = {};
                    this.metaDataGroup[(_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id] = temp;
                }
            });
            this.getAllsubTbles();
        }
    }
    getAllsubTbles() {
        var _a;
        const data = {
            'group_id': (_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id,
        };
        this.processDashboard.getAllSubTables(data).subscribe((response) => {
            var _a;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) == 200) {
                this.metaData = response['info'] ? response['info'] : [];
                if ((_a = this.metaData) === null || _a === void 0 ? void 0 : _a.length) {
                    this.metaData.forEach((value) => {
                        if (value === null || value === void 0 ? void 0 : value.data) {
                            value.data.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.field_position) - (b === null || b === void 0 ? void 0 : b.field_position); });
                        }
                        if (value === null || value === void 0 ? void 0 : value.parent_table_id) {
                            const index = this.metaData.findIndex((a) => { return a.id === parseInt(value.parent_table_id); });
                            if (index > -1) {
                                value.parent_display_name = this.metaData[index].display_name;
                            }
                        }
                    });
                }
            }
        });
    }
    getFormGroup() {
        var _a;
        this.formGroups = [];
        this.processDashboard.getFormsGroup('', (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id).subscribe((response) => {
            var _a;
            if (response.statusCode === 200) {
                this.formGroups = response['info'];
                if (this.formGroups && this.formGroups.length)
                    this.selectedGroup = this.formGroups[0];
                this.currentGroupName = (_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.group_name;
                this.getGroupField();
            }
        });
    }
    redirectViewProcess() {
        this.router.navigate(['/view-all-process']);
    }
    getWidth(grid) {
        return `calc( ${grid}% - 12px)`;
    }
    createSection() {
        var _a, _b;
        const payload = {
            "group_name": this.sectionName,
            "table_Id": (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id,
            "table_name": (_b = this.processData) === null || _b === void 0 ? void 0 : _b.table_name,
            "position": this.formGroups ? this.formGroups.length : 0,
            "created_by": "",
            "last_modified_by": ""
        };
        this.addLoader = true;
        this.processDashboard.createFormsGroup(payload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.addgroup = false;
                this.CommonService.showSnackbar('Successfully Group Created', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbar('Group Not Created, please Try Again', ['red-growl']);
            }
            this.addLoader = false;
            this.sectionName = '';
            this.getFormGroup();
        }, (error) => {
            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    selectedTab(event) {
        var _a;
        this.perList = [];
        if ((event === null || event === void 0 ? void 0 : event.index) === 3) {
            // this.processDashboard.getDepartmentList().subscribe((response: any) => {
            //   if (response?.statusCode === 200 && response?.info.length) {
            //     this.departmentList = response['info'];
            //     this.selectedDepartment = this.departmentList[0];
            //   }
            // }, (error: any) => {
            //   this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
            // });
            this.processDashboard.getFormsGroup('', (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id).subscribe((response) => {
                if (response.statusCode === 200) {
                    this.perGroups = response['info'];
                }
                this.currentDesignation = {};
                this.selectedRole = {};
                this.processDashboard.getDesignationList().subscribe((response) => {
                    if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200 && (response === null || response === void 0 ? void 0 : response.info.length)) {
                        this.roleList = response['info'];
                        this.roleListOriginal = response['info'];
                        this.currentDesignation = this.roleList[0];
                        this.selectedRole = this.currentDesignation;
                        this.getPermissionProcess();
                    }
                }, (error) => {
                    this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                });
            }, (error) => {
                this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
            });
        }
        else if ((event === null || event === void 0 ? void 0 : event.index) === 4) {
            this.currentDesignation = {};
            this.selectedRole = {};
            this.getPermissionDesignation();
            this.getDesignationList();
        }
    }
    getPermissionDesignation() {
        var _a;
        const filter = {
            table_id: (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id
        };
        console.log('currrent', this.currentDesignation);
        console.log('selected', this.selectedRole);
        ;
        this.processDashboard.getPermissionDesignationList(filter).subscribe((response) => {
            var _a;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200 && (response === null || response === void 0 ? void 0 : response.info.length)) {
                this.permissionRoleList = response['info'];
                this.currentDesignation = ((_a = this.currentDesignation) === null || _a === void 0 ? void 0 : _a.id) ? this.currentDesignation : this.permissionRoleList[0];
                this.selectedRole = this.currentDesignation;
            }
        });
    }
    getDesignationList() {
        this.processDashboard.getDesignationList().subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200 && (response === null || response === void 0 ? void 0 : response.info.length)) {
                this.roleList = response['info'];
                this.roleListOriginal = this.roleList;
            }
        });
    }
    searchValue(search) {
        if (this.roleListOriginal) {
            this.roleList = this.roleListOriginal.filter((value) => value.designation.toLowerCase().indexOf(search.toLowerCase()) === 0);
        }
    }
    selectedDesignation(data) {
        var _a;
        for (let i = 0; i < ((_a = this.permissionRoleList) === null || _a === void 0 ? void 0 : _a.length); i++) {
            if (this.permissionRoleList[i].designation_id === data.id && this.permissionRoleList[i].designation === data.designation) {
                console.log(this.permissionRoleList[i], 'iiii', data);
                return;
            }
        }
        this.insertProcessPermission(data);
    }
    getPermissionProcess() {
        var _a;
        this.perList = [];
        this.processDashboard.getProcess({ 'table_id': (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id }).subscribe((response) => {
            var _a;
            if (response && response['info']) {
                const res = response['info'].reduce((acc, curr) => {
                    if (!acc[curr.group_id])
                        acc[curr.group_id] = []; //If this type wasn't previously stored
                    acc[curr.group_id].push(curr);
                    return acc;
                }, {});
                for (let i = 0; i < this.perGroups.length; i++) {
                    const result = {};
                    result.group_id = this.perGroups[i].id;
                    result.group_name = this.perGroups[i].group_name;
                    result.number = this.perGroups[i][this.currentDesignation.id + '_access'];
                    result.fields = res[result.group_id];
                    if ((_a = result.fields) === null || _a === void 0 ? void 0 : _a.length) {
                        for (let i = 0; i < result.fields.length; i++) {
                            if (result.fields[i][this.currentDesignation.id + '_access'] == 0) {
                                result.fields[i].number = 0;
                            }
                            else if (result.fields[i][this.currentDesignation.id + '_access'] == 1) {
                                result.fields[i].number = 1;
                            }
                            else if (result.fields[i][this.currentDesignation.id + '_access'] == 2) {
                                result.fields[i].number = 2;
                            }
                            else if (result.fields[i][this.currentDesignation.id + '_access'] == 3) {
                                result.fields[i].number = 3;
                            }
                        }
                    }
                    if (i === 0)
                        result.selected = true;
                    this.perList.push(result);
                }
            }
        });
    }
    onGroupChange(group) {
        var _a;
        this.selectedGroup = group;
        this.currentIndex = 0;
        this.currentGroupName = (_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.group_name;
        this.getGroupField();
    }
    addField() {
        addFieldPopup = this.dialog.open(FieldDialogComponent, {
            width: '648px',
            disableClose: true,
            data: { groups: this.formGroups, defaultGroup: this.selectedGroup, selectedField: this.selectedField, processData: this.processData }
        });
        addFieldPopup.afterClosed().subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
            console.log(result, 'result');
            if (result) {
                if ((result === null || result === void 0 ? void 0 : result.type) === 'delete') {
                    this.processDashboard.deleteField((_a = this.selectedField) === null || _a === void 0 ? void 0 : _a.table_name, (_b = this.selectedField) === null || _b === void 0 ? void 0 : _b.id).subscribe((response) => {
                        var _a, _b;
                        if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                            this.CommonService.showSnackbar('Successfully Field Deleted', ['green-growl']);
                        }
                        else {
                            this.CommonService.showSnackbar('Field Not Deleted, please Try Again', ['red-growl']);
                        }
                        let temp = [];
                        let temphide = [];
                        if (this.columnVlues[0].hide_fields != "") {
                            temphide = this.columnVlues[0].hide_fields.split(',');
                            for (let i = 0; i < temphide.length; i++) {
                                if (((_a = this.selectedField) === null || _a === void 0 ? void 0 : _a.name) == temphide[i]) {
                                    temphide.splice(i, 1);
                                }
                            }
                            this.columnVlues[0].hide_fields = temphide.toString();
                        }
                        if (this.columnVlues[0].fields != "") {
                            temp = this.columnVlues[0].fields.split(',');
                            for (let i = 0; i < temp.length; i++) {
                                if (((_b = this.selectedField) === null || _b === void 0 ? void 0 : _b.name) == temp[i]) {
                                    temp.splice(i, 1);
                                }
                            }
                            this.columnVlues[0].fields = temp.toString();
                        }
                        if (result.field.table_name == this.dataTableName) {
                            this.updateColumnValues();
                        }
                        console.log("deletes");
                        this.getGroupField();
                    }, (error) => {
                        this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                    });
                }
                else {
                    if ((_c = result.field) === null || _c === void 0 ? void 0 : _c.id) {
                        if (((_d = result === null || result === void 0 ? void 0 : result.field) === null || _d === void 0 ? void 0 : _d.default_value) && ((_e = result === null || result === void 0 ? void 0 : result.field) === null || _e === void 0 ? void 0 : _e.default_value) !== null)
                            result.field.default_value = (_f = result === null || result === void 0 ? void 0 : result.field) === null || _f === void 0 ? void 0 : _f.default_value.toString();
                        (_g = result.field) === null || _g === void 0 ? true : delete _g.is_subtable;
                        this.processDashboard.updateField(result === null || result === void 0 ? void 0 : result.field).subscribe((response) => {
                            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                                this.CommonService.showSnackbar('Successfully Field Updated', ['green-growl']);
                            }
                            else {
                                this.CommonService.showSnackbar('Field Not Updated, please Try Again', ['red-growl']);
                            }
                            this.getGroupField();
                        }, (error) => {
                            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                        });
                        if (result.advanced && result.advanced.length) {
                            const payload = {
                                "values": result.advanced,
                                "table_name": 'select_option_advanced'
                            };
                            for (let i = 0; i < result.advanced.length; i++) {
                                result.advanced[i].field_id = result.field.id;
                                result.advanced[i].meta_table_id = this.processData.id;
                                result.advanced[i].meta_table_name = this.processData.table_name;
                                if (result.advanced[i].depended_field_name)
                                    delete result.advanced[i].depended_field_name;
                                if (!((_h = result.advanced[i]) === null || _h === void 0 ? void 0 : _h.id)) {
                                    this.createSelectedOption(result.advanced[i], result.field.id);
                                }
                                else {
                                    this.processDashboard.putColumns([result.advanced[i]], 'select_option_advanced').subscribe((response) => {
                                    });
                                }
                            }
                        }
                    }
                    else if (((_j = result.field) === null || _j === void 0 ? void 0 : _j.field_sub_type) !== 'table') {
                        (_k = result.field) === null || _k === void 0 ? true : delete _k.is_subtable;
                        this.createField(result);
                    }
                    else if (((_l = result.field) === null || _l === void 0 ? void 0 : _l.field_sub_type) === 'table' && !((_m = result.field) === null || _m === void 0 ? void 0 : _m.is_subtable)) {
                        const payload = {
                            "table_name": (_o = result.field) === null || _o === void 0 ? void 0 : _o.name,
                            "display_name": (_p = result.field) === null || _p === void 0 ? void 0 : _p.field_title,
                            "parent_table_id": (_q = this.processData) === null || _q === void 0 ? void 0 : _q.id,
                            "is_sub_table": 1,
                            "row_no": (_r = result.field) === null || _r === void 0 ? void 0 : _r.row_no,
                            "group_name": this.currentGroupName,
                            "group_id": (_s = this.selectedGroup) === null || _s === void 0 ? void 0 : _s.id,
                        };
                        this.processDashboard.createTableField(payload).subscribe((response) => {
                            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                                this.CommonService.showSnackbar('Successfully Table Created', ['green-growl']);
                            }
                            else {
                                this.CommonService.showSnackbar('Table Not Created, please Try Again', ['red-growl']);
                            }
                            this.getAllsubTbles();
                        }, (error) => {
                            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                        });
                    }
                    else if (((_t = result.field) === null || _t === void 0 ? void 0 : _t.field_sub_type) === 'table' && ((_u = result.field) === null || _u === void 0 ? void 0 : _u.is_subtable)) {
                        result.field.parent_table_id = parseInt((_v = result.field) === null || _v === void 0 ? void 0 : _v.table_id);
                        result.field.field_type = 'VARCHAR';
                        (_w = result.field) === null || _w === void 0 ? true : delete _w.is_subtable;
                        this.createField(result);
                        const payload = {
                            "table_name": (_x = result.field) === null || _x === void 0 ? void 0 : _x.name,
                            "display_name": (_y = result.field) === null || _y === void 0 ? void 0 : _y.field_title,
                            "parent_table_id": (_z = result === null || result === void 0 ? void 0 : result.field) === null || _z === void 0 ? void 0 : _z.table_id,
                            "is_sub_table": 1,
                            "row_no": (_0 = result.field) === null || _0 === void 0 ? void 0 : _0.row_no,
                            "group_name": this.currentGroupName,
                            "group_id": (_1 = this.selectedGroup) === null || _1 === void 0 ? void 0 : _1.id,
                        };
                        result.field.field_type = 'VARCHAR';
                        this.processDashboard.createTableField(payload).subscribe((response) => {
                            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                                this.CommonService.showSnackbar('Successfully Table Created', ['green-growl']);
                            }
                            else {
                                this.CommonService.showSnackbar('Table Not Created, please Try Again', ['red-growl']);
                            }
                            this.getAllsubTbles();
                        }, (error) => {
                            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                        });
                    }
                }
            }
        });
    }
    createField(result) {
        var _a, _b, _c;
        if (((_a = result === null || result === void 0 ? void 0 : result.field) === null || _a === void 0 ? void 0 : _a.default_value) && ((_b = result === null || result === void 0 ? void 0 : result.field) === null || _b === void 0 ? void 0 : _b.default_value) !== null)
            result.field.default_value = (_c = result === null || result === void 0 ? void 0 : result.field) === null || _c === void 0 ? void 0 : _c.default_value.toString();
        this.processDashboard.createField(result === null || result === void 0 ? void 0 : result.field).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                console.log("creaaaa", result);
                this.CommonService.showSnackbar('Successfully Field Created', ['green-growl']);
                let temp = [];
                if (this.columnVlues[0].fields != "") {
                    temp = this.columnVlues[0].fields.split(',');
                }
                temp.push(result === null || result === void 0 ? void 0 : result.field.name);
                this.columnVlues[0].fields = temp.toString();
                if (result.field.table_name == this.dataTableName) {
                    this.updateColumnValues();
                }
                this.getGroupField();
                if (result.advanced && result.advanced.length) {
                    for (let i = 0; i < result.advanced.length; i++) {
                        this.createSelectedOption(result.advanced[i], response.last_insert_id[0]);
                    }
                }
            }
            else {
                this.CommonService.showSnackbar('Field Not Created, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    createSelectedOption(data, id) {
        data.field_id = id;
        data.meta_table_id = this.processData.id;
        data.meta_table_name = this.processData.table_name;
        if (data.depended_field_name)
            delete data.depended_field_name;
        const payload = {
            "values": [data],
            "table_name": 'select_option_advanced'
        };
        console.log(payload, 'payload');
        this.CommonService.commonInsert(payload).subscribe((response) => {
        });
    }
    updateColumnValues() {
        let value = { hide_fields: this.columnVlues[0].hide_fields, fields: this.columnVlues[0].fields, id: this.columnVlues[0].id };
        this.CommonService.putColumns(value, "table_columns_ordering").subscribe((response) => {
        });
    }
    getColumn() {
        // let temp = { table_id: this.routeInfo.id }
        // this.getBody.filter.push(temp);
        let getBody = { table_name: "table_columns_ordering", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", filter: [{ table_name: this.dataTableName }] };
        this.CommonService.getValues(getBody).subscribe((response) => {
            this.columnVlues = response.info;
        });
    }
    rowMove(direction, rowIndex, groupId) {
        if (direction === 'up') {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.metaDataGroup[groupId], rowIndex, rowIndex - 1);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.metaDataGroup[groupId], rowIndex, rowIndex + 1);
        }
        let putList = [];
        this.metaDataGroup[groupId].forEach((j, rowId) => {
            j.data.forEach((k, position) => {
                if (!!k.id) {
                    putList.push({ table_name: 'meta_data', id: k.id, row_no: rowId });
                }
            });
        });
        this.processDashboard.updatePositionField(putList).subscribe((response) => {
            if (response.statusCode === 200) {
            }
        });
    }
    endFieldDrag(groupId, rowIndex, fieldIndex, field) {
        var _a, _b, _c, _d;
        let putList = [];
        let width = 0;
        let grid = '';
        let endRowWidth = 0;
        let startWidth = { width: 0, grid: '' };
        this.startfield = this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data.splice(this.startbody.field_position, 1);
        this.startfield[0].field_position = fieldIndex;
        this.startfield[0].group_id = groupId + '';
        this.startfield[0].row_no = rowIndex;
        this.endbody.group_id = groupId;
        this.endbody.row_no = rowIndex;
        this.endbody.field_position = fieldIndex;
        this.endbody.id = this.startfield[0].id;
        let startItemLength = this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data.length;
        if (((_a = this.startbody) === null || _a === void 0 ? void 0 : _a.row_no) === ((_b = this.endbody) === null || _b === void 0 ? void 0 : _b.row_no) && ((_c = this.startbody) === null || _c === void 0 ? void 0 : _c.field_position) === ((_d = this.endbody) === null || _d === void 0 ? void 0 : _d.field_position)) {
            return;
        }
        for (let j = this.startbody.field_position; j < startItemLength; j++) {
            if (!!this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data[j].id) {
                width += this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data[j].width;
                this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data[j].field_position = j;
                let body = {
                    field_position: this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data[j].field_position,
                    id: this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data[j].id,
                };
                putList.push(body);
            }
            else {
                width = 100;
                grid = '100';
            }
        }
        startWidth.width = width;
        startWidth.grid = grid;
        if (width < 100) {
            this.metaDataGroup[this.startbody.group_id][this.startbody.row_no].data.push(startWidth);
        }
        putList.push(this.endbody);
        if (!!this.startfield) {
            this.metaDataGroup[groupId][rowIndex].data.splice(fieldIndex, 0, this.startfield[0]);
        }
        let itemLength = this.metaDataGroup[groupId][rowIndex].data.length;
        for (let k = 0; k < itemLength; k++) {
            if (!!this.metaDataGroup[groupId][rowIndex].data[k].id) {
                endRowWidth += this.metaDataGroup[groupId][rowIndex].data[k].width;
            }
        }
        if (endRowWidth > 100) {
            let temp = this.metaDataGroup[groupId][rowIndex].grid;
            temp = temp + " " + "auto";
            this.metaDataGroup[groupId][rowIndex].grid = temp;
        }
        for (let i = (fieldIndex + 1); i < itemLength; i++) {
            if (!!this.metaDataGroup[groupId][rowIndex].data[i].id) {
                this.metaDataGroup[groupId][rowIndex].data[i].field_position = i;
                let body = {
                    field_position: this.metaDataGroup[groupId][rowIndex].data[i].field_position,
                    id: this.metaDataGroup[groupId][rowIndex].data[i].id,
                };
                putList.push(body);
            }
        }
        const meta = JSON.parse(JSON.stringify(this.metaDataGroup));
        let checkList = [];
        const loopLength = meta[groupId].length;
        let lastrow = -1;
        for (let row = 0; row < loopLength; row++) {
            if (meta[groupId][row].data && meta[groupId][row].data.length) {
                let datalength = meta[groupId][row].data.length;
                let widthCheck = 0;
                let isNewRow = false;
                let k = 0;
                for (let i = 0; i < datalength; i++) {
                    widthCheck = widthCheck + meta[groupId][row].data[i].width;
                    if (widthCheck > 100 && meta[groupId][row].data[i].id) {
                        lastrow = row;
                        let body = {
                            id: meta[groupId][row].data[i].id,
                            field_position: k++,
                            row_no: meta[groupId][row].data[i].row_no + 1,
                            name: meta[groupId][row].data[i].field_title
                        };
                        checkList.push(body);
                    }
                    if (row > lastrow && lastrow !== -1 && meta[groupId][row].data[i].id) {
                        let body = {
                            id: meta[groupId][row].data[i].id,
                            row_no: meta[groupId][row].data[i].row_no + 1,
                            name: meta[groupId][row].data[i].field_title
                        };
                        checkList.push(body);
                    }
                }
                ;
            }
        }
        if (putList.length) {
            const result = [];
            for (let i = 0; i < checkList.length; i++) {
                const index = putList.findIndex(a => a.id === checkList[i].id);
                if (index > -1) {
                    putList.splice(index, 1);
                }
            }
            checkList = checkList.concat(putList);
            if (!!this.startfield) {
                this.processDashboard.updatePositionField(checkList).subscribe((res) => {
                    if ((res === null || res === void 0 ? void 0 : res.statusCode) === 200) {
                        this.getGroupField();
                        this.CommonService.showSnackbar('Successfully Position Updated', ['green-growl']);
                    }
                    else {
                        this.CommonService.showSnackbar('Position Not Updated, please Try Again', ['red-growl']);
                    }
                }, (error) => {
                    this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                });
            }
        }
        // this.getMetaData();
    }
    startFieldDrag(groupId, rowIndex, fieldIndex, field) {
        this.startbody.group_id = groupId + '';
        this.startbody.row_no = rowIndex;
        this.startbody.field_position = fieldIndex;
        this.startbody.id = field.id;
        this.startbody.width = field.width;
    }
    updatePosition(putList) {
        this.processDashboard.updatePositionField(putList).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.statusCode) === 200) {
                this.getGroupField();
                this.CommonService.showSnackbar('Successfully Position Updated', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbar('Position Not Updated, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    dragOver(e, row) {
        e.preventDefault();
    }
    onSizeEvent(row, event) {
        document.getElementById(row.id).style.zIndex = '9999';
        this.onResizeWidth = Math.round(((event.size.width + 30) / this.containerWidth) * 100);
    }
    widthHandleCreate() {
    }
    onContextMenu(event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        this.contextMenu.menuData = { 'item': item };
        this.contextMenu.menu.focusFirstItem('mouse');
        this.contextMenu.openMenu();
    }
    addNewRow(groupId) {
        var _a;
        if (!this.metaDataGroup[groupId]) {
            this.metaDataGroup[groupId] = [];
        }
        this.selectedField = JSON.parse(JSON.stringify(this.field));
        this.selectedField['grid'] = 25;
        this.selectedField['group_id'] = groupId;
        this.selectedField['group_name'] = this.currentGroupName;
        this.selectedField['row_no'] = this.metaDataGroup[groupId].length;
        this.selectedField['field_position'] = 0;
        this.selectedField['table_name'] = this.dataTableName;
        this.selectedField['table_id'] = (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id;
        let temp = {
            grid: '25% 75%',
            row_no: '',
            data: []
        };
        this.selectedField['new_row'] = true;
        // temp.data.push(this.selectedField);
        // temp.data.push({ width: 75 });
        // this.metaDataGroup[groupId].push(temp);
    }
    dropEvent(event, no) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.metaData[0].data, event.previousIndex, event.currentIndex);
        // this.updateAfterPositionChange();
    }
    dragStart(index, column) {
        if (this.metaData[index].data[column]) {
            this.tableDragStart.id = this.metaData[index].data[column].table_id;
            this.tableDragStart.index = index;
            this.tableDragStart.column = column;
        }
    }
    dragEnd(index, column) {
        if (this.metaData[index].id === this.tableDragStart.id) {
            const temp1 = this.metaData[this.tableDragStart.index].data[this.tableDragStart.column];
            this.metaData[this.tableDragStart.index].data[this.tableDragStart.column] = this.metaData[index].data[column];
            this.metaData[index].data[column] = temp1;
            const putList = [];
            this.metaData[index].data.forEach((element, index) => {
                putList.push({ id: element.id, field_position: index });
            });
            this.processDashboard.updatePositionField(putList).subscribe((response) => {
            });
        }
    }
    closeAllSelected(index) {
        this.perList.forEach((element, i) => {
            if (i !== index) {
                element.selected = false;
            }
        });
    }
    onDesignationSelection() {
        this.getPermissionProcess();
    }
    savePermission(row, col, number) {
        var _a;
        const data = {
            id: this.perList[row].fields[col].id,
            [this.currentDesignation.id + '_access']: number
        };
        this.processDashboard.putColumns([data], 'meta_field_data').subscribe((response) => {
        });
        if ((_a = this.perList[row].fields) === null || _a === void 0 ? void 0 : _a.length) {
            for (let i = 0; i < this.perList[row].fields.length; i++) {
                if (this.perList[row].fields[i].number !== number) {
                    this.perList[row].number = -1;
                    const data = {
                        id: this.perList[row].group_id,
                        [this.currentDesignation.id + '_access']: -1
                    };
                    this.processDashboard.putColumns([data], 'meta_field_group').subscribe((response) => {
                    });
                    break;
                }
            }
        }
    }
    saveGroupPermission(row, number) {
        var _a;
        const values = [];
        if ((_a = this.perList[row].fields) === null || _a === void 0 ? void 0 : _a.length) {
            for (let i = 0; i < this.perList[row].fields.length; i++) {
                this.perList[row].fields[i].number = number;
                values.push({ id: this.perList[row].fields[i].id, [this.currentDesignation.id + '_access']: number });
            }
        }
        const data = {
            id: this.perList[row].group_id,
            [this.currentDesignation.id + '_access']: number
        };
        this.processDashboard.putColumns([data], 'meta_field_group').subscribe((response) => {
        });
        this.processDashboard.putColumns(values, 'meta_field_data').subscribe((response) => {
        });
    }
    stopEvent(value, row, number) {
        if (this.perList[row].number === number) {
            value.preventDefault();
            return false;
        }
        else {
            this.perList[row].number = number;
            this.saveGroupPermission(row, number);
        }
    }
    stopFieldEvent(value, row, col, number) {
        if (this.perList[row].fields[col].number === number) {
            value.preventDefault();
            return false;
        }
        else {
            this.perList[row].fields[col].number = number;
            this.savePermission(row, col, number);
        }
    }
    onDepartmentChange(department) {
        this.selectedDepartment = department;
        this.getDesignationList();
    }
    saveProcessPermission(key) {
        var _a;
        const value = {
            id: (_a = this.currentDesignation) === null || _a === void 0 ? void 0 : _a.id,
            [key]: this.currentDesignation[key]
        };
        this.processDashboard.putColumns([value], 'process_permission').subscribe((response) => {
            this.getPermissionDesignation();
        });
    }
    insertProcessPermission(value) {
        var _a;
        const data = {
            "designation_id": value === null || value === void 0 ? void 0 : value.id,
            "designation": value.designation,
            "table_id": (_a = this.processData) === null || _a === void 0 ? void 0 : _a.id,
            "create_item": 0,
            "edit_process": 0,
            "deletes": 0,
            "updates": 0,
            "reports": 0,
            "mail": 0,
            "mass_update": 0,
            "mass_mail": 0
        };
        const payload = {
            "values": [data],
            "table_name": "process_permission"
        };
        this.CommonService.commonInsert(payload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.getPermissionDesignation();
            }
        });
    }
    removePermission(data) {
        const payload = {
            'id': data === null || data === void 0 ? void 0 : data.id,
            'tablename': 'process_permission'
        };
        this.CommonService.commonDelete(payload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.getPermissionDesignation();
            }
        });
    }
    stopEventhere(event) {
        event.stopImmediatePropagation();
        return false;
    }
    saveSectionName(value) {
        const payload = {
            id: this.selectedGroup.id,
            group_name: value
        };
        this.processDashboard.putColumns([payload], 'meta_field_group').subscribe((response) => {
        });
        this.formGroups.forEach((element) => {
            var _a;
            if ((element === null || element === void 0 ? void 0 : element.id) === ((_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id)) {
                element.group_name = value;
                return;
            }
        });
    }
}
ProcessDashboardComponent.ɵfac = function ProcessDashboardComponent_Factory(t) { return new (t || ProcessDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["ProcessDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"])); };
ProcessDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProcessDashboardComponent, selectors: [["app-process-dashboard"]], viewQuery: function ProcessDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.theDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editFieldDialog = _t.first);
    } }, decls: 100, vars: 19, consts: [[1, "d-flex", "edit-header"], ["mat-button", "", 1, "material-icons", "cursor-pointer", "back-icon-bg", "full-height", 3, "click"], [1, "t-header", "fw-500"], [1, "d-flex", "full-height"], ["class", "width-200 category-area", 4, "ngIf"], [1, "tab-outer"], ["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4", "tab-area", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["mattabcon", ""], ["label", "Form"], [1, "form-main-c", "padding-20", "font-head-color", "position-r"], ["myDiv", ""], [3, "id", 4, "ngIf"], ["class", "spinner spin-class", 3, "diameter", 4, "ngIf"], ["class", "text-center empty-state", 4, "ngIf"], ["label", "Workflow"], ["label", "Action"], ["label", "Permission - Fields"], [1, "d-flex"], [1, "pm-margin-outer", "width-unset"], [1, "position-r", "text-area"], ["type", "text", "placeholder", "Search Role", 1, "search-input", 3, "input"], [1, "material-icons", "search-icon"], [1, "role-outer"], ["class", "role-area cursor font-12", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pm-margin-outer", "width-70", "per-area"], [1, "d-flex", "per-header", "pad-8"], [1, "per-section", "width-35"], [1, "per-section", "text-center"], [4, "ngFor", "ngForOf"], ["label", "Permission - Process"], [1, "d-flex", "position-r", "align-item-center", "text-area", "desig"], ["placeholder", "Search Designation", 1, "input-a", 3, "matAutocomplete", "input"], ["trigger", "matAutocompleteTrigger"], [1, "auto-icon", "cursor", 3, "click"], ["auto", "matAutocomplete"], [3, "matTooltip", "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "role-area cursor font-12 position-r", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "pad-8"], [1, "per-section", "d-flex", "justify-center"], [1, "round", "marg-left"], ["type", "checkbox", "id", "editablecheckbox", 3, "checked", "click"], ["for", "editablecheckbox"], ["type", "checkbox", "id", "createcheckbox", 3, "checked", "click"], ["for", "createcheckbox"], [1, "round"], ["type", "checkbox", "id", "mail", 3, "checked", "click"], ["for", "mail"], ["type", "checkbox", "id", "massmail", 3, "checked", "click"], ["for", "massmail"], ["type", "checkbox", "id", "massupdate", 3, "checked", "click"], ["for", "massupdate"], ["type", "checkbox", "id", "update", 3, "checked", "click"], ["for", "update"], ["type", "checkbox", "id", "reports", 3, "checked", "click"], ["for", "reports"], [1, "width-200", "category-area"], [1, "section-title", "fw-500"], ["class", "btn cateogory-btn justify-center font-14", "style", "width: 85%", 3, "click", 4, "ngIf"], ["class", "section-input", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], ["class", "mlr-auto", 3, "diameter", 4, "ngIf"], ["class", "form-group-area cursor-pointer", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "btn", "cateogory-btn", "justify-center", "font-14", 2, "width", "85%", 3, "click"], [1, "icon-alignment", "icon-20"], [1, "section-input"], ["type", "text", "placeholder", "New Section", "id", "process-sections", 3, "ngModel", "ngModelChange"], [1, "btn", "cateogory-btn", "justify-center", "font-14", 3, "disabled", "click"], [1, "btn", "cateogory-btn", "justify-center", "font-14", "cancel-btn", 3, "click"], [1, "mlr-auto", 3, "diameter"], [1, "form-group-area", "cursor-pointer", 3, "ngStyle", "click"], [1, "section-list"], ["class", "selected-group", 4, "ngIf"], [1, "selected-group"], [3, "id"], [1, "marg-input"], ["type", "text", 1, "input", "over-b", "fw-500", 3, "ngModel", "blur", "ngModelChange"], ["class", "row-container", 4, "ngFor", "ngForOf"], ["class", "table-outer", 3, "id", 4, "ngFor", "ngForOf"], [1, "d-c", "justify-center", "padding-5", "font-12", "m-10", "border-d", "border-c-l", "cursor", 3, "click"], [1, "row-container"], ["container", ""], ["class", "h-100 field", "draggable", "true", 3, "ngClass", "id", "width", "drop", "dragover", "dragstart", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "h-100", "field", 3, "ngClass", "id", "drop", "dragover", "dragstart"], ["class", "input-container padding-10 ", 3, "click", 4, "ngIf"], ["class", "add-field", 3, "click", 4, "ngIf"], [1, "input-container", "padding-10", 3, "click"], [1, "input-label"], ["style", "color: var(--error);", 4, "ngIf"], ["type", "text", 1, "input", "input-border"], [2, "color", "var(--error)"], [1, "add-field", 3, "click"], [1, "table-outer", 3, "id"], [4, "ngIf"], [1, "width-100", "table-area", 3, "id"], [1, "table-header"], ["class", "row-class fw-500", "draggable", "true", 3, "id", "drop", "dragover", "dragstart", "click", 4, "ngFor", "ngForOf"], ["id", "tableaddbtn", 1, "section-table-add-icon"], ["matTooltip", "Click to Add Field", 1, "cursor", 3, "click"], [1, "material-icons", "chain"], ["draggable", "true", 1, "row-class", "fw-500", 3, "id", "drop", "dragover", "dragstart", "click"], [1, "spinner", "spin-class", 3, "diameter"], [1, "text-center", "empty-state"], ["src", "../../../../assets/img/Process Empty State.png"], [1, "role-area", "cursor", "font-12", 3, "ngClass", "click"], [1, "d-flex", "per-section", "width-35"], [1, "square-box", "cursor", 3, "click"], [1, "material-icons"], [1, "round", "round-edit", "marg-left"], ["type", "checkbox", 3, "checked", "id", "click"], [3, "for"], [1, "round", "round-create"], [1, "round", "round-hidden"], ["class", "pad-8 animate", 4, "ngIf"], [1, "pad-8", "animate"], ["class", "d-flex field-margin", 4, "ngFor", "ngForOf"], [1, "d-flex", "field-margin"], [1, "per-section", "width-35", "field-pos"], [3, "matTooltip", "value", "onSelectionChange"], [1, "role-area", "cursor", "font-12", "position-r", 3, "ngClass", "click"], ["matTooltip", "Remove Permission", 1, "material-icons", "close-icon", 3, "click"]], template: function ProcessDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_div_click_1_listener() { return ctx.goToProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProcessDashboardComponent_div_6_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProcessDashboardComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function ProcessDashboardComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) { return ctx.selectedTab($event); })("selectedIndexChange", function ProcessDashboardComponent_Template_mat_tab_group_selectedIndexChange_9_listener($event) { return ctx.currentIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProcessDashboardComponent_div_14_Template, 7, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProcessDashboardComponent_mat_spinner_15_Template, 1, 1, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProcessDashboardComponent_div_16_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Workflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProcessDashboardComponent_Template_input_input_25_listener($event) { return ctx.searchValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProcessDashboardComponent_div_29_Template, 2, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Section Names ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Editable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Read Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Create Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Hidden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProcessDashboardComponent_div_42_Template, 24, 15, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProcessDashboardComponent_Template_input_input_47_listener($event) { return ctx.searchValue($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_mat_icon_click_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48); $event.stopPropagation(); return _r9.panelOpen ? _r9.closePanel() : _r9.openPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-autocomplete", null, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProcessDashboardComponent_mat_option_53_Template, 2, 3, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProcessDashboardComponent_div_54_Template, 5, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Editable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Create Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Mass Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " More Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_74_listener() { ctx.currentDesignation.edit_process === 1 ? ctx.currentDesignation.edit_process = 0 : ctx.currentDesignation.edit_process = 1; return ctx.saveProcessPermission("edit_process"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_78_listener() { ctx.currentDesignation.create_item === 1 ? ctx.currentDesignation.create_item = 0 : ctx.currentDesignation.create_item = 1; return ctx.saveProcessPermission("create_item"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_82_listener() { ctx.currentDesignation.mail === 1 ? ctx.currentDesignation.mail = 0 : ctx.currentDesignation.mail = 1; return ctx.saveProcessPermission("mail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_86_listener() { ctx.currentDesignation.mass_mail === 1 ? ctx.currentDesignation.mass_mail = 0 : ctx.currentDesignation.mass_mail = 1; return ctx.saveProcessPermission("mass_mail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_90_listener() { ctx.currentDesignation.mass_update === 1 ? ctx.currentDesignation.mass_update = 0 : ctx.currentDesignation.mass_update = 1; return ctx.saveProcessPermission("mass_update"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_94_listener() { ctx.currentDesignation.updates === 1 ? ctx.currentDesignation.updates = 0 : ctx.currentDesignation.updates = 1; return ctx.saveProcessPermission("updates"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessDashboardComponent_Template_input_click_98_listener() { ctx.currentDesignation.reports === 1 ? ctx.currentDesignation.reports = 0 : ctx.currentDesignation.reports = 1; return ctx.saveProcessPermission("reports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex === 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.currentIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedGroup && !ctx.fieldLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.perList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissionRoleList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.edit_process === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.create_item === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.mail === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.mass_mail === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.mass_update === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.updates === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.currentDesignation.reports === 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_rowparse_pipe__WEBPACK_IMPORTED_MODULE_15__["RowparsePipe"]], styles: [".edit-header {\n  height: 52px;\n  padding: 0 12px 0 0;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  background-color: var(--white);\n  z-index: 999;\n}\n.back-icon-bg {\n    background-color: var(--pinkish-grey-three);\n    color: var(--white);\n    width: 58px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.t-header {\n    width: 90%;\n    text-transform: capitalize;\n    align-self: center;\n    margin-left: 20px;\n    color: var(--dark-two);\n}\n.save-btn {\n    width: 80px;\n    background-color: var(--green-teal);\n    color: #ffffff;\n}\n.width-200 {\n    width: 12.5%;\n}\n.category-area { \n  padding: 15px 0px;\n}\n.section-input {\n    margin: 22px 19px 20px 8.4px;\n}\n.section-input input {\n    border-radius: 4px;\n    border: solid 1px #cccccc;\n    height: 38px;\n    padding: 0 6px;\n}\n.section-title {\n    color: var(--dark-two);\n    margin: 0 71px 22px 17.4px;\n}\n.btn {\n    height: 30px;\n    width: 80px;\n    margin: 0 6px 25px 12px;\n    align-items: center;\n    display: flex;\n    border: 0px;\n    color: var(--white);\n    font-weight: 400;\n    cursor: pointer;\n    font-size: 12px;\n    border-radius: 2px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    background-image: linear-gradient(357deg, #44a6ff 130%, #0081f6 -50%);\n  }\n.section-list {\n    text-transform: capitalize;\n    color: var(--dark-two);\n    margin: 0 30px;\n  }\n.form-group-area {\n    position: relative;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    margin: 4px 0;\n  }\n.selected-group {\n    position: absolute;\n    border: 1px solid #2897fc;\n    height: 100%;\n    border-width: initial;\n  }\n.tab-outer {\n      width: 100%;\n      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  }\n.tab-area {\n      box-shadow: none;\n  }\n.field-group-area {\n      margin: 12px 0;\n  }\n.field-right {\n      text-align: right;\n  }\n.field-icon {\n      margin: 0 10px;\n  }\n.dash-border {\n    border: 1px solid #d1d1d1;\n    border-style: dashed;\n    margin: 13px 0;\n  }\n.add-icon {\n      color: #1f92fa;\n  }\n.trash-icon {\n      color: #707070;\n  }\n.row-container {\n    /* display: grid; */\n    /* position: relative; */\n    display: flex;\n    /* flex-direction: row; */\n    flex-wrap: wrap;\n    align-items: center;\n  }\n.row-container:hover .arrow-r-c {\n    display: grid;\n  }\n.arrow-r-c {\n    position: absolute;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    left: -20px;\n    background: #f1f1fc;\n  }\n.h-100 {\n  height: 100%;\n}\n.field {\n  border: 1px dashed transparent;\n  position: relative;\n  margin: 0px 5px;\n}\n.field:hover {\n  border: 1px dashed #cccccc;\n}\n.field:hover .resize-handle {\n  display: block;\n}\n.b-hover {\n  border: 1px dashed;\n}\n.input-container {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 5px;\n}\n.padding-10 {\n  padding: 10px;\n  box-sizing: border-box;\n}\n.input-label {\n  color: #7b818d;\n  font-size: 14px;\n}\n.input-border-0 {\n  border: 0;\n  width: 100%;\n}\n.field:hover .resize-handle {\n  display: block;\n}\n.resize-handle {\n  background: #495264;\n  position: absolute;\n  min-height: 19px;\n  right: -3px;\n  top: 38%;\n  min-width: 5px;\n  display: none;\n  cursor: e-resize;\n}\n.add-field {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  font-size: 12px;\n  justify-content: center;\n  cursor: pointer;\n  border: transparent;\n  color: transparent;\n}\n.add-field:hover {\n  border: 1px dashed #cccccc;\n  color: inherit;\n}\n.padding-5 {\n  padding: 5px;\n}\n.m-10 {\n  margin: 10px;\n}\n.border-d {\n  border: 1px dashed;\n}\n.border-c-l {\n  border-color: #c4c1c1;\n}\n.form-main-c {\n  background: #fff;\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.07);\n  overflow: auto;\n}\n.input-border {\n  border: 1px solid #d8d8d8;\n  border-radius: 2px;\n}\n.over-b {\n  color: var(--warm-grey);\n  border-bottom: 1px solid #d1d1d1;\n  border-bottom-style: dashed;\n  margin: 10px 0;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n.table-header {\n  border-radius: 4px;\n  overflow: hidden;\n  color: #797979;\n  position: relative;\n  background-color: #f5f6fa;\n}\n.section-table-add-icon {\n  position: absolute;\n  right: 0px;\n}\n.row-class {\n  text-align: start;\n  color: #475f7b;\n}\n.table-area {\n  box-shadow: 0px 3px 2px -2px rgba(2, 31, 68, 0.15);\n  position: relative;\n  margin: 10px 0;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n}\n.table-area tr {\n  height: 20px;\n}\n.table-outer {\n  margin: 14px;\n}\ntable {\n  border:none;\n  border-collapse: collapse;\n}\ntable td, table th {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n}\ntable td:first-child, table th:first-child {\n  border-left: none;\n}\ntable td:last-child, table th:last-child {\n  border-right: none;\n}\n.pm-margin-outer {\n  margin: 15px;\n  padding: 15px;\n}\n.search-input {\n  border: 1px solid #cccccc;\n  padding: 0 8px;\n  border-radius: 4px;\n  height: 40px;\n}\n.text-area {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.search-icon {\n  position: absolute;\n  right: 4px;\n  opacity: 0.5;\n}\n.role-area {\n  height: 42px;\n  margin: 10px 0 12px;\n  padding: 12px 30px 12px 31px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  width: 185px;\n  text-align: center;\n  text-transform: capitalize;\n}\n.desig {\n  border: 1px solid #cccccc;\n  padding: 12px;\n}\n.selected-role {\n  background-color: var(--dodger-blue);\n  color: #ffffff;\n  transition: all ease-in-out 1s;\n}\n.per-area {\n  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05); */\n  background-color: #ffffff;\n  margin: 30px 15px;\n  padding: unset;\n}\n.per-header {\n  background: #f5f6fa;\n  color: var(--dark-two);\n}\n.pad-8 {\n  padding: 8px;\n}\n.per-section {\n  width: 15%;\n  color: var(--dark-two);\n  white-space: nowrap;\n}\n.width-35 {\n  width: 35%;\n}\n.text-center {\n  text-align: center;\n}\n.marg-left {\n  margin-left: -10px;\n}\n.square-box {\n  border-radius: 2px;\n  border: solid 1px #e3e4ee;\n  background-color: #f4f5fa;\n  width: 18px;\n  height: 18px;\n  margin-right: 10px;\n}\n.square-box div{\n  font-size: 20px;\n  color: #747c81;\n}\n.field-pos {\n  position: relative;\n  left: 32px;\n}\n.field-margin {\n  margin: 5px 0;\n}\n.spin-class {\n  margin: 10px;\n}\n.cancel-btn {\n  background: #f1f1f1;\n  color: var(--warm-grey);\n  box-shadow: none;\n}\n.marg-input {\n  margin: 0 14px;\n}\n.empty-state {\n  margin-top: 20px;\n  color: var(--warm-grey);\n}\n.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label {\n  flex-grow: unset !important;\n}\n.role-outer {\n  overflow: hidden;\n  max-height: calc(100vh - 25vh);\n  overflow-y: auto;\n}\n.role-area span {\n  margin: 0 18px 0 0;\n}\n.close-icon {\n  position: absolute;\n  right: 10px;\n}\n.mat-tab-label-active {\n  color: var(--dark-two) !important;\n}\n.round-edit input[type=\"checkbox\"]:checked + label {\n  background-color: #4badf1;\n  border-color: #4badf1;\n}\n.round-create input[type=\"checkbox\"]:checked + label {\n  background-color: #efbd17;\n  border-color: #efbd17;\n}\n.round-hidden input[type=\"checkbox\"]:checked + label {\n  background-color: #858585;\n  border-color: #858585;\n}\n.chain {\n  position: relative;\n  top: 6px;\n  color: var(--greyish);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci9wcm9jZXNzLWRhc2hib2FyZC9wcm9jZXNzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QjtBQUVFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw0R0FBNEc7SUFDNUcscUVBQXFFO0VBQ3ZFO0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUVBO01BQ0ksV0FBVztNQUNYLDBDQUEwQztFQUM5QztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCO0FBQ0E7TUFDSSxjQUFjO0VBQ2xCO0FBQ0E7TUFDSSxpQkFBaUI7RUFDckI7QUFDQTtNQUNJLGNBQWM7RUFDbEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjtBQUNBO01BQ0ksY0FBYztFQUNsQjtBQUVBO01BQ0ksY0FBYztFQUNsQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0FBRUY7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUVBQXVFO0VBQ3ZFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0RBQWtEO0VBQ2xELGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxpREFBaUQ7RUFDakQseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci9wcm9jZXNzLWRhc2hib2FyZC9wcm9jZXNzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nOiAwIDEycHggMCAwO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICB6LWluZGV4OiA5OTk7XG59XG4uYmFjay1pY29uLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdGhyZWUpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udC1oZWFkZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXR3byk7XG59XG5cbi5zYXZlLWJ0biB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdGVhbCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi53aWR0aC0yMDAge1xuICAgIHdpZHRoOiAxMi41JTtcbn1cbiAgXG4uY2F0ZWdvcnktYXJlYSB7IFxuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLnNlY3Rpb24taW5wdXQge1xuICAgIG1hcmdpbjogMjJweCAxOXB4IDIwcHggOC40cHg7XG59XG5cbi5zZWN0aW9uLWlucHV0IGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay10d28pO1xuICAgIG1hcmdpbjogMCA3MXB4IDIycHggMTcuNHB4O1xufVxuXG4gIC5idG4ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IDAgNnB4IDI1cHggMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzU3ZGVnLCAjNDRhNmZmIDEzMCUsICMwMDgxZjYgLTUwJSk7XG4gIH1cblxuICAuc2VjdGlvbi1saXN0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogdmFyKC0tZGFyay10d28pO1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICB9XG5cbiAgLmZvcm0tZ3JvdXAtYXJlYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgfVxuXG4gIC5zZWxlY3RlZC1ncm91cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyODk3ZmM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcbiAgfVxuXG4gIC50YWItb3V0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAudGFiLWFyZWEge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuZmllbGQtZ3JvdXAtYXJlYSB7XG4gICAgICBtYXJnaW46IDEycHggMDtcbiAgfVxuICAuZmllbGQtcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLmZpZWxkLWljb24ge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgLmRhc2gtYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIG1hcmdpbjogMTNweCAwO1xuICB9XG4gIC5hZGQtaWNvbiB7XG4gICAgICBjb2xvcjogIzFmOTJmYTtcbiAgfVxuXG4gIC50cmFzaC1pY29uIHtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICB9XG5cbiAgLnJvdy1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5yb3ctY29udGFpbmVyOmhvdmVyIC5hcnJvdy1yLWMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICAuYXJyb3ctci1jIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWZjO1xuICB9XG5cbi5oLTEwMCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZpZWxkIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cblxuLmZpZWxkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2NjY2M7XG59XG5cbi5maWVsZDpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYi1ob3ZlciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG4ucGFkZGluZy0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaW5wdXQtbGFiZWwge1xuICBjb2xvcjogIzdiODE4ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmlucHV0LWJvcmRlci0wIHtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWVsZDpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlc2l6ZS1oYW5kbGUge1xuICBiYWNrZ3JvdW5kOiAjNDk1MjY0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDE5cHg7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IDM4JTtcbiAgbWluLXdpZHRoOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogZS1yZXNpemU7XG59XG5cbi5hZGQtZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmFkZC1maWVsZDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjY2NjO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnBhZGRpbmctNSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm0tMTAge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ib3JkZXItZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcbn1cblxuLmJvcmRlci1jLWwge1xuICBib3JkZXItY29sb3I6ICNjNGMxYzE7XG59XG4uZm9ybS1tYWluLWMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ub3Zlci1iIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBkYXNoZWQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzc5Nzk3OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xufVxuLnNlY3Rpb24tdGFibGUtYWRkLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucm93LWNsYXNzIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiAjNDc1ZjdiO1xufVxuLnRhYmxlLWFyZWEge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDJweCAtMnB4IHJnYmEoMiwgMzEsIDY4LCAwLjE1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi50YWJsZS1hcmVhIHRyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnRhYmxlLW91dGVyIHtcbiAgbWFyZ2luOiAxNHB4O1xufVxudGFibGUge1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG50YWJsZSB0ZDpmaXJzdC1jaGlsZCwgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxudGFibGUgdGQ6bGFzdC1jaGlsZCwgdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnBtLW1hcmdpbi1vdXRlciB7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi50ZXh0LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5yb2xlLWFyZWEge1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbjogMTBweCAwIDEycHg7XG4gIHBhZGRpbmc6IDEycHggMzBweCAxMnB4IDMxcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxODVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5kZXNpZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uc2VsZWN0ZWQtcm9sZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvZGdlci1ibHVlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxcztcbn1cblxuLnBlci1hcmVhIHtcbiAgLyogYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAzMHB4IDE1cHg7XG4gIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ucGVyLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY2ZmE7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXR3byk7XG59XG5cbi5wYWQtOCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnBlci1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgY29sb3I6IHZhcigtLWRhcmstdHdvKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndpZHRoLTM1IHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFyZy1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uc3F1YXJlLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UzZTRlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmYTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNxdWFyZS1ib3ggZGl2e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNzQ3YzgxO1xufVxuLmZpZWxkLXBvcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzJweDtcbn1cblxuLmZpZWxkLW1hcmdpbiB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5zcGluLWNsYXNzIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm1hcmctaW5wdXQge1xuICBtYXJnaW46IDAgMTRweDtcbn1cbi5lbXB0eS1zdGF0ZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4ubWF0LXRhYi1ncm91cFttYXQtc3RyZXRjaC10YWJzXT4ubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwge1xuICBmbGV4LWdyb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2xlLW91dGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucm9sZS1hcmVhIHNwYW4ge1xuICBtYXJnaW46IDAgMThweCAwIDA7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXR3bykgIWltcG9ydGFudDtcbn1cbi5yb3VuZC1lZGl0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJhZGYxO1xuICBib3JkZXItY29sb3I6ICM0YmFkZjE7XG59XG4ucm91bmQtY3JlYXRlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZiZDE3O1xuICBib3JkZXItY29sb3I6ICNlZmJkMTc7XG59XG4ucm91bmQtaGlkZGVuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4NTg1O1xuICBib3JkZXItY29sb3I6ICM4NTg1ODU7XG59XG5cbi5jaGFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5aXNoKTtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-process-dashboard',
                templateUrl: './process-dashboard.component.html',
                styleUrls: ['./process-dashboard.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["ProcessDashboardService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }]; }, { theDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myDiv']
        }], editFieldDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editFieldDialog']
        }] }); })();
class FieldDialogComponent {
    constructor(data, fb, processDashboard, commonService) {
        this.data = data;
        this.fb = fb;
        this.processDashboard = processDashboard;
        this.commonService = commonService;
        this.fieldTypes = [
            {
                name: 'Text',
                icon: 'text_fields',
                type: 'VARCHAR',
                sub_type: 'text'
            },
            {
                name: 'Password',
                icon: 'lock',
                type: 'VARCHAR',
                sub_type: 'password'
            },
            {
                name: 'Telephone',
                icon: 'phone',
                type: 'VARCHAR',
                sub_type: 'telephone'
            },
            {
                name: 'E-Mail',
                icon: 'mail_outline',
                type: 'VARCHAR',
                sub_type: 'email'
            },
            {
                name: 'Date',
                icon: 'calendar_today',
                type: 'DATE',
                sub_type: 'date'
            },
            {
                name: 'Checkbox',
                icon: 'check_box',
                type: 'VARCHAR',
                sub_type: 'checkbox'
            },
            {
                name: 'Radio',
                icon: 'radio_button_checked',
                type: 'VARCHAR',
                sub_type: 'radio'
            },
            {
                name: 'Dropdown',
                icon: 'arrow_drop_down_circle',
                type: 'SELECT',
                sub_type: 'select'
            },
            {
                name: 'Table',
                icon: 'table_chart',
                type: 'table',
                sub_type: 'table'
            },
            {
                name: 'Attachment',
                icon: 'attach_file',
                type: 'TEXT',
                sub_type: 'attachment'
            },
            {
                name: 'Slider',
                icon: 'tune',
                type: 'INT',
                sub_type: 'slider'
            },
            {
                name: 'User',
                icon: 'person_pin',
                type: 'user'
            },
            {
                name: 'CheckList',
                icon: 'playlist_add_check',
                type: 'SELECT',
                sub_type: 'checklist'
            },
            {
                name: 'Switch',
                icon: 'edit_attributes',
                type: 'INT',
                sub_type: 'switch'
            },
            {
                name: 'DateTime',
                icon: 'calendar_today',
                type: 'DATETIME',
                sub_type: 'datetime-local'
            },
            {
                name: 'Currency',
                icon: 'attach_money',
                type: 'VARCHAR',
                sub_type: 'currency'
            },
            {
                name: 'Time',
                icon: 'access_time',
                type: 'TIME',
                sub_type: 'time'
            },
            {
                name: 'Paragraph',
                icon: 'format_align_justify',
                type: 'TEXT',
                sub_type: 'textarea'
            },
            {
                name: 'Number',
                icon: 'format_list_numbered',
                type: 'INT',
                sub_type: 'number'
            },
            {
                name: 'Image',
                icon: 'add_photo_alternate',
                type: 'TEXT',
                sub_type: 'image'
            },
            {
                name: 'Link',
                icon: 'link',
                type: 'TEXT',
                sub_type: 'link'
            },
            {
                name: 'Rich Text',
                icon: 'format_shapes',
                type: 'TEXT',
                sub_type: 'richtext'
            },
            {
                name: 'Sequence',
                icon: 'functions',
                type: 'TEXT',
                sub_type: 'sequence'
            }
        ];
        this.step = 0;
        this.cancelBack = 'Cancel';
        this.nextDone = 'Next';
        this.tab = 'settings';
        this.disableBtn = false;
        this.field = JSON.parse(JSON.stringify(_constant__WEBPACK_IMPORTED_MODULE_4__["field"]));
        this.dataType = _constant__WEBPACK_IMPORTED_MODULE_4__["dataType"];
        this.one = 1;
        this.zero = 0;
        this.itemName = '';
        this.itemList = [];
        this.itemListOriginal = [];
        this.currencyType = '';
        this.advSelectedProcess = {};
        this.advSearchField = {};
        this.isDepended = 0;
        this.dependField = {};
        this.processField = {};
        this.errortext = 'Name is already taken';
        this.isSequence = 'zero';
        this.isAnyAdvanceTouched = false;
        this.isNumberField = 'zero';
        this.limitSelected = false;
        this.importExisting = 'zero';
        this.defaultOptionList = [];
        this.selectedDefaultOption = {};
        this.advancedOption = [];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.advancedOption = [];
        this.currentGroup = (_a = this.data) === null || _a === void 0 ? void 0 : _a.defaultGroup;
        this.selectedGroup(this.currentGroup);
        this.inputData = (_b = this.data) === null || _b === void 0 ? void 0 : _b.selectedField;
        if (this.inputData.id) {
            this.field = this.inputData;
            this.step = 1;
            this.nextDone = 'Done';
            this.cancelBack = 'Back';
            if (((_c = this.inputData) === null || _c === void 0 ? void 0 : _c.field_sub_type) === 'number_select') {
                const type = {
                    type: (_d = this.inputData) === null || _d === void 0 ? void 0 : _d.field_type,
                    sub_type: 'select',
                    name: 'Dropdown'
                };
                this.isNumberField = 'one';
                this.selectedType(type);
            }
            else {
                const type = {
                    type: (_e = this.inputData) === null || _e === void 0 ? void 0 : _e.field_type,
                    sub_type: (_f = this.inputData) === null || _f === void 0 ? void 0 : _f.field_sub_type,
                    name: this.fieldTypes.find((item) => { var _a; if (item.sub_type === ((_a = this.inputData) === null || _a === void 0 ? void 0 : _a.field_sub_type)) {
                        return item;
                    } }).name
                };
                this.selectedType(type);
            }
        }
        else {
            this.fieldMap(this.dataType[0].field_sub_type);
        }
        const dataCheck = ((_h = (_g = this.inputData) === null || _g === void 0 ? void 0 : _g.option_list) === null || _h === void 0 ? void 0 : _h.length) ? this.inputData.option_list.split(',') : null;
        this.itemList = ((_k = (_j = this.field) === null || _j === void 0 ? void 0 : _j.option_list) === null || _k === void 0 ? void 0 : _k.length) ? dataCheck : [];
        this.itemListOriginal = this.itemList;
        if ((_l = this.inputData) === null || _l === void 0 ? void 0 : _l.db_name)
            this.selectesDb(this.inputData.db_name);
        this.getAdvancedApi();
    }
    addFieldForm() {
        var _a, _b, _c;
        this.sequenceForm = this.fb.group({
            field_title: [((_a = this.field) === null || _a === void 0 ? void 0 : _a.field_title) ? (_b = this.field) === null || _b === void 0 ? void 0 : _b.field_title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seq_id_code: [''],
            seq_start_no: [''],
            seq_count: ['']
        });
        if (this.selectedField.sub_type === 'sequence') {
            this.sequenceForm.patchValue({
                seq_id_code: [((_c = this.field) === null || _c === void 0 ? void 0 : _c.seq_id_code) ? this.field.seq_id_code : '', this.isSequence === 'one' ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null],
                seq_start_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    selectedType(types) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.selectedField = types;
        this.disableBtn = false;
        this.field.field_type = (_a = this.selectedField) === null || _a === void 0 ? void 0 : _a.type;
        if (((_b = this.inputData) === null || _b === void 0 ? void 0 : _b.field_sub_type) === 'number_select')
            this.field.field_sub_type = 'number_select';
        else
            this.field.field_sub_type = (_c = this.selectedField) === null || _c === void 0 ? void 0 : _c.sub_type;
        if (((_d = this.selectedField) === null || _d === void 0 ? void 0 : _d.sub_type) === 'switch')
            this.field.default_value = ((_e = this.field) === null || _e === void 0 ? void 0 : _e.default_value) ? this.field.default_value : '0';
        if ((this.field.field_sub_type === 'radio' || this.field.field_sub_type === 'checkbox') && ((_f = this.field) === null || _f === void 0 ? void 0 : _f.id)) {
            this.processDashboard.getAdavanced((_g = this.field) === null || _g === void 0 ? void 0 : _g.id).subscribe((response) => {
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    this.advancedOption = response['info'];
                }
            });
        }
    }
    onConfirm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.nextDone === 'Next') {
            this.step = 1;
            this.nextDone = 'Done';
            this.cancelBack = 'Back';
        }
        else if (this.nextDone === 'Done') {
            if (this.field.field_sub_type === 'sequence') {
                if (this.isSequence === 'one') {
                    if (!((_b = (_a = this.field) === null || _a === void 0 ? void 0 : _a.field_title) === null || _b === void 0 ? void 0 : _b.length)) {
                        this.nameError = true;
                        this.errortext = 'Please fill Title';
                        return;
                    }
                    if (!((_c = this.field) === null || _c === void 0 ? void 0 : _c.seq_id_code)) {
                        this.seqCodeError = true;
                        return;
                    }
                    if (!((_d = this.field) === null || _d === void 0 ? void 0 : _d.seq_start_no)) {
                        this.seqStartError = true;
                        return;
                    }
                }
                else if (this.isSequence === 'zero') {
                    if (!((_f = (_e = this.field) === null || _e === void 0 ? void 0 : _e.field_title) === null || _f === void 0 ? void 0 : _f.length)) {
                        this.nameError = true;
                        this.errortext = 'Please fill Title';
                        return;
                    }
                    if (!((_g = this.field) === null || _g === void 0 ? void 0 : _g.seq_start_no)) {
                        this.seqStartError = true;
                        return;
                    }
                }
                if (!((_h = this.field) === null || _h === void 0 ? void 0 : _h.id))
                    this.field.name = this.processDashboard.convertSnackCase(this.field.field_title);
                this.field.field_title = this.field.field_title ? this.field.field_title : 'Title';
                if (!this.isDepended) {
                    this.field.depended_field = null;
                    this.field.depended_id = null;
                }
                addFieldPopup.close({ field: this.field, type: 'update' });
            }
            else if (this.field.field_sub_type === 'number_select' && (!this.field.seq_start_no || !this.field.seq_count || !this.field.last_seq_no)) {
                this.limitSelected = true;
            }
            else {
                if (!((_k = (_j = this.field) === null || _j === void 0 ? void 0 : _j.field_title) === null || _k === void 0 ? void 0 : _k.length)) {
                    this.nameError = true;
                    this.errortext = 'Please fill Title';
                }
                else if (this.isAnyAdvanceTouched) {
                    if (this.isDepended) {
                        if (this.field.depended_field && this.field.depended_id && this.field.parent_table_field && this.field.parent_table_id && this.field.parent_table_name) {
                            this.closePopup();
                        }
                    }
                    else {
                        if (this.field.parent_table_field && this.field.parent_table_id && this.field.parent_table_name) {
                            this.closePopup();
                        }
                    }
                }
                else {
                    this.closePopup();
                }
            }
        }
    }
    closePopup() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_a = this.field) === null || _a === void 0 ? void 0 : _a.id)) {
            this.field.name = this.processDashboard.convertSnackCase(this.field.field_title);
        }
        this.field.field_title = this.field.field_title ? this.field.field_title : 'Title';
        if (this.field.field_sub_type === 'currency') {
            this.field.default_value = this.currencyType + ' ' + this.field.default_value;
        }
        if (!this.isDepended)
            this.field.depended_field = null;
        if ((_b = this.selectedDefaultOption) === null || _b === void 0 ? void 0 : _b.id)
            this.field.default_value = this.selectedDefaultOption.id;
        if (this.field.field_sub_type === 'radio' || this.field.field_sub_type === 'radio') {
            addFieldPopup.close({ field: this.field, type: 'update', advanced: this.advancedOption });
            if (!((_d = (_c = this.field) === null || _c === void 0 ? void 0 : _c.option_list) === null || _d === void 0 ? void 0 : _d.length) && ((_e = this.advancedOption) === null || _e === void 0 ? void 0 : _e.length)) {
                for (let i = 0; i < this.advancedOption.length; i++) {
                    if ((_f = this.advancedOption[i]) === null || _f === void 0 ? void 0 : _f.id) {
                        this.commonService.commonDelete({ 'id': (_g = this.advancedOption[i]) === null || _g === void 0 ? void 0 : _g.id, 'tablename': 'select_option_advanced' }).subscribe((response) => { });
                    }
                }
            }
        }
        else {
            addFieldPopup.close({ field: this.field, type: 'update' });
        }
    }
    onBack() {
        if (this.cancelBack === 'Back') {
            this.step = 0;
            this.nextDone = 'Next';
            this.cancelBack = 'Cancel';
        }
        else if (this.cancelBack === 'Cancel') {
            addFieldPopup.close(false);
        }
    }
    selectedGroup(group) {
        var _a, _b;
        this.currentGroup = group;
        this.field.group_id = (_a = this.currentGroup) === null || _a === void 0 ? void 0 : _a.id;
        this.field.group_name = (_b = this.currentGroup) === null || _b === void 0 ? void 0 : _b.group_name;
    }
    fieldMap(type) {
        var _a, _b, _c;
        this.dataType.forEach(i => {
            if (i.field_type === type) {
                Object.keys(i).forEach(j => {
                    this.field[j] = i[j];
                });
            }
        });
        delete this.field['id'];
        this.field.group_id = this.inputData.group_id;
        this.field.row_no = this.inputData.row_no;
        this.field.field_position = this.inputData.field_position;
        this.field.grid = ((_a = this.inputData) === null || _a === void 0 ? void 0 : _a.grid) ? (_b = this.inputData) === null || _b === void 0 ? void 0 : _b.grid.toString() : '25';
        this.field.table_name = this.inputData.table_name;
        this.field.table_id = parseInt(this.inputData.table_id);
        if ((_c = this.inputData) === null || _c === void 0 ? void 0 : _c.is_subtable)
            this.field.is_subtable = this.inputData.is_subtable;
    }
    createItem() {
        var _a;
        if (this.itemName && this.itemName.length) {
            this.itemList.push(this.itemName.trim());
            this.field.option_list = ((_a = this.itemList) === null || _a === void 0 ? void 0 : _a.length) ? this.itemList.join() : null;
            this.itemName = '';
            this.itemListOriginal = this.itemList;
        }
    }
    deleteItem(i) {
        if (i > -1) {
            this.itemList.splice(i, 1);
            this.field.option_list = this.itemList.length ? this.itemList.toString() : null;
            this.itemListOriginal = this.itemList;
        }
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.itemList, event.previousIndex, event.currentIndex);
        this.field.option_list = this.itemList.toString();
    }
    uploadFile(event) {
        this.commonService.uploadFile(event).then((response) => {
            response.forEach(element => {
                if (this.field.field_sub_type === 'image') {
                    if (element.file_extension !== 'png' && element.file_extension !== 'jpeg') {
                        this.commonService.showSnackbar('Please Upload Image File', ['warning-growl']);
                    }
                }
                else if (this.field.field_sub_type === 'attachment') {
                    if (element.file_extension === 'png' || element.file_extension === 'jpeg') {
                        this.commonService.showSnackbar('Please Upload Attatchment', ['warning-growl']);
                    }
                }
            });
        });
    }
    deleteField() {
        var _a, _b, _c, _d, _e;
        addFieldPopup.close({ field: this.field, type: 'delete' });
        if (((_b = (_a = this.field) === null || _a === void 0 ? void 0 : _a.option_list) === null || _b === void 0 ? void 0 : _b.length) && ((_c = this.advancedOption) === null || _c === void 0 ? void 0 : _c.length)) {
            for (let i = 0; i < this.advancedOption.length; i++) {
                if ((_d = this.advancedOption[i]) === null || _d === void 0 ? void 0 : _d.id) {
                    this.commonService.commonDelete({ 'id': (_e = this.advancedOption[i]) === null || _e === void 0 ? void 0 : _e.id, 'tablename': 'select_option_advanced' }).subscribe((response) => { });
                }
            }
        }
    }
    checkColumnExist(value) {
        this.errortext = 'Name is already taken';
        if (value && value.length) {
            this.commonService.checkColumnExists(this.processDashboard.convertSnackCase(value), this.field.table_name).subscribe((response) => {
                this.nameError = (response && response['info'] && response['info'].length) ? true : false;
            });
        }
    }
    selectesDb(value) {
        const filter = {
            db_name: value,
            name: 'meta_table_data'
        };
        if (value === 'flow_pod') {
            filter.name = 'data_tables';
        }
        this.isAnyAdvanceTouched = true;
        this.processDashboard.getCommonValues(filter).subscribe((response) => {
            var _a;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200)
                this.processList = response['info'];
            if ((_a = this.processList) === null || _a === void 0 ? void 0 : _a.length) {
                this.processList.forEach(element => {
                    var _a, _b;
                    if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.db_name) === 'flow_pod') {
                        element.table_name = element.data_table_name;
                        element.display_name = element.name;
                    }
                    if (element.id === ((_b = this.field) === null || _b === void 0 ? void 0 : _b.parent_table_id))
                        this.selectedProcess(element);
                });
                this.processListCopy = JSON.parse(JSON.stringify(this.processList));
            }
        });
    }
    selectedProcess(process) {
        var _a, _b, _c;
        this.advSelectedProcess = process;
        this.field.parent_table_id = this.advSelectedProcess.id;
        this.field.parent_table_name = this.advSelectedProcess.table_name;
        this.isAnyAdvanceTouched = true;
        if ((_a = this.field) === null || _a === void 0 ? void 0 : _a.db_name) {
            const filter = {
                db_name: (_b = this.field) === null || _b === void 0 ? void 0 : _b.db_name,
                name: 'meta_field_data',
                table_name: process === null || process === void 0 ? void 0 : process.table_name
            };
            if (((_c = this.field) === null || _c === void 0 ? void 0 : _c.db_name) === 'flow_pod') {
                filter.name = 'meta_data';
            }
            this.processDashboard.getCommonValues(filter).subscribe((response) => {
                var _a;
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200)
                    this.fieldList = response['info'];
                if ((_a = this.fieldList) === null || _a === void 0 ? void 0 : _a.length) {
                    this.fieldList.forEach(element => {
                        var _a, _b, _c;
                        if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.db_name) === 'flow_pod') {
                            element.name = element.name;
                            element.field_title = element.display_value;
                        }
                        if (element.name === ((_b = this.field) === null || _b === void 0 ? void 0 : _b.parent_table_field))
                            this.advSearchField = element;
                        if (element.name === ((_c = this.field) === null || _c === void 0 ? void 0 : _c.depended_id))
                            this.processField = element;
                    });
                    this.fieldListCopy = JSON.parse(JSON.stringify(this.fieldList));
                }
            });
        }
    }
    getAdvancedApi() {
        var _a, _b;
        const filter = {
            name: 'meta_field_data',
            table_name: (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.processData) === null || _b === void 0 ? void 0 : _b.table_name
        };
        this.processDashboard.getCommonValues(filter).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200)
                this.currentTableFieldList = response['info'];
            if (((_a = this.currentTableFieldList) === null || _a === void 0 ? void 0 : _a.length) && ((_b = this.field) === null || _b === void 0 ? void 0 : _b.depended_field)) {
                this.currentTableFieldList.forEach(element => {
                    if (element.name === this.field.depended_field)
                        this.dependField = element;
                    this.isDepended = 1;
                });
            }
            if (((_c = this.field) === null || _c === void 0 ? void 0 : _c.parent_table_field) && ((_d = this.field) === null || _d === void 0 ? void 0 : _d.parent_table_id) && ((_e = this.field) === null || _e === void 0 ? void 0 : _e.parent_table_name) && this.field.field_sub_type === 'select')
                this.searchDefault('');
        });
    }
    processFilter(val) {
        this.processList = this.processListCopy.filter(i => i['display_name'].toLowerCase().includes(val.toLowerCase()));
    }
    searchFilter(val) {
        this.fieldList = this.fieldListCopy.filter(i => i['field_title'].toLowerCase().includes(val.toLowerCase()));
    }
    searchDefault(data) {
        if (this.field.parent_table_field && this.field.parent_table_id && this.field.parent_table_name && this.field.field_sub_type === 'select') {
            const filter = {
                table_name: this.field.parent_table_name,
                table_field: this.field.parent_table_field,
                value: data ? data : '',
                db: this.field.db_name
            };
            if (this.field.default_value) {
                filter.id = parseInt(this.field.default_value);
            }
            this.processDashboard.getOptionsList(filter).subscribe((response) => {
                var _a, _b;
                if (response && response['info'])
                    this.defaultOptionList = response['info'];
                if (((_a = this.defaultOptionList) === null || _a === void 0 ? void 0 : _a.length) && ((_b = this.field) === null || _b === void 0 ? void 0 : _b.default_value)) {
                    this.defaultOptionList.forEach(element => {
                        if (element.id === parseInt(this.field.default_value)) {
                            this.selectedDefaultOption = element;
                            this.field.default_value = this.selectedDefaultOption[this.field.parent_table_field];
                        }
                    });
                }
            });
        }
    }
    selectedDefault(data) {
        this.selectedDefaultOption = data;
        this.field.default_value = this.selectedDefaultOption[this.field.parent_table_field];
    }
    selectedItems(data) {
        let index = -1;
        if (this.advancedOption && this.advancedOption.length) {
            index = this.advancedOption.findIndex((a) => { return a.list_item === data; });
            console.log(index, 'indexxx');
        }
        if (index === -1) {
            const payload = {
                list_item: data,
                checked: 'Unchecked',
                depended_field: null,
                depended_field_title: null,
                visiblity: 'Show'
            };
            this.advancedOption.push(payload);
        }
    }
}
FieldDialogComponent.ɵfac = function FieldDialogComponent_Factory(t) { return new (t || FieldDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["ProcessDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"])); };
FieldDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldDialogComponent, selectors: [["app-add-field"]], decls: 16, vars: 9, consts: [[1, "d-flex", "field-header", "fw-500"], [1, "material-icons", "cursor-pointer", 3, "mat-dialog-close"], ["class", "box-area d-flex", 4, "ngIf"], ["class", "mar-lr", 4, "ngIf"], [1, "border-below"], [1, "d-flex", "footer-btn"], ["style", "align-self: center;", 4, "ngIf"], ["mat-raised-button", "", "class", "cancel-btn delete", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "cancel-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "next-btn", 3, "disabled", "click"], [1, "box-area", "d-flex"], ["class", "d-flex type-box cursor-pointer", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "type-box", "cursor-pointer", 3, "ngStyle", "click"], [1, "material-icons", 2, "color", "var(--warm-grey)"], [2, "color", "var(--dark-two)"], [1, "mar-lr"], [1, "d-flex", "tab-border"], [1, "pad-bot", "cursor-pointer", 2, "width", "80px", 3, "ngClass", "click"], ["class", "pad-bot cursor-pointer", "style", "width: 80px;", 3, "ngClass", "click", 4, "ngIf"], [1, "pad-bot", "cursor-pointer", 2, "width", "85px", 3, "ngClass", "click"], [1, "pad-bot", "cursor-pointer", 2, "width", "120px", 3, "ngClass", "click"], ["class", "d-flex flex-wrap min-height", 3, "ngClass", 4, "ngIf"], ["class", "d-flex flex-wrap items min-height", 4, "ngIf"], ["class", "d-flex flex-wrap", 4, "ngIf"], [1, "d-flex", "flex-wrap", "min-height", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["sequence", ""], ["notsequence", ""], [1, "form-g", "width-55", "height-75"], [1, "label"], [1, "position-r"], ["type", "text", "placeholder", "Enter Field Title", 1, "input-a", 3, "ngModel", "ngModelChange", "input"], ["class", "error-class pos-abs", 4, "ngIf"], [1, "form-g", "height-80"], ["selected", "selectedyes", "name", "fontStyle", "aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["id", "create-process-toggle", 3, "value"], [1, "form-g", "width-30", "height-80"], ["type", "text", "placeholder", "", 1, "input-a", 3, "ngModel", "disabled", "ngModelChange"], ["type", "number", "placeholder", "0", "min", "0", 1, "input-a", 3, "ngModel", "ngModelChange"], [1, "error-class", "pos-abs"], [1, "form-g", "width-55"], [1, "form-g", "width-40"], [1, "d-flex", "position-r", "align-item-center"], ["placeholder", "Choose Group", 1, "input-a", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["trigger", "matAutocompleteTrigger"], [1, "auto-icon", "cursor", 3, "click"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "form-g width-30", 4, "ngIf"], [1, "form-g", "width-30"], ["type", "text", "placeholder", "Enter Help Text", 1, "input-a", 3, "ngModel", "ngModelChange"], ["class", "form-g width-75", 4, "ngIf"], ["class", "form-g width-30", 3, "ngClass", 4, "ngIf"], ["class", "form-g", 4, "ngIf"], [1, "form-g"], ["class", "d-flex width-100", 4, "ngIf"], [3, "value", "onSelectionChange"], ["placeholder", "Choose Currency Type", 1, "size-border", 3, "ngModel", "ngModelChange"], ["value", "usd"], ["value", "inr"], ["type", "number", "min", "0", "placeholder", "Enter Max Length", 1, "input-a", 3, "ngModel", "ngModelChange"], [1, "form-g", "width-75"], ["tickInterval", "1000", "min", "1", 3, "thumbLabel", "color", "ngModel", "value", "max", "ngModelChange"], [1, "form-g", "width-30", 3, "ngClass"], ["class", "input-a", "placeholder", "Enter Default Value", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "input-a", "type", "text", "placeholder", "Enter Default Value", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "input-a", "type", "file", "placeholder", "Enter Default Value", 3, "change", 4, "ngIf"], ["placeholder", "Enter Default Value", 1, "input-a", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Default Value", 1, "input-a", 3, "ngModel", "ngModelChange"], ["type", "file", "placeholder", "Enter Default Value", 1, "input-a", 3, "change"], ["placeholder", "Choose Field Size", 1, "size-border", 3, "ngModel", "ngModelChange"], [3, "value"], ["name", "fontStyle", "aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["selected", "isNumberField", "name", "fontStyle", "aria-label", "Font Style", 1, "width-78", 3, "ngModel", "ngModelChange"], ["id", "create-process-toggle", 3, "value", "click"], [1, "d-flex", "width-100"], ["selected", "importExisting", "name", "fontStyle", "aria-label", "Font Style", 1, "width-65", 3, "ngModel", "ngModelChange"], ["class", "form-g width-40", 4, "ngIf"], ["autocomplete", "new-existing", "placeholder", "Table Name", 1, "input-a", 3, "matAutocomplete", "ngModel", "input", "ngModelChange"], ["existingtrigger", "matAutocompleteTrigger"], ["class", "error-class pos-abs error-top", 4, "ngIf"], ["existingActiveFirstOption", ""], ["existing", "matAutocomplete"], [1, "error-class", "pos-abs", "error-top"], [1, "d-flex", "flex-wrap", "items", "min-height"], [4, "ngIf"], [1, "d-flex"], [1, "list-item", "fw-500"], [1, "section-input"], ["type", "text", "placeholder", "New Item", "id", "process-items", 3, "ngModel", "ngModelChange"], [1, "btn", "cateogory-btn", "justify-center", "font-14", 3, "click"], [1, "icon-alignment", "icon-20", "material-icons"], ["class", "form-g width-30 margin-right", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "vertical", 1, "box-list", 3, "cdkDropListDropped"], ["class", "drag-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "form-g", "width-30", "margin-right"], ["placeholder", "Select Database", 1, "size-border", "form-a", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "drag-box"], [1, "material-icons", "trash-icon", 3, "click"], [1, "d-flex", "flex-wrap"], ["type", "number", "min", "0", "placeholder", "0", 1, "input-a", 3, "ngModel", "ngModelChange"], ["placeholder", "Choose Preview", 1, "size-border"], ["class", "d-flex flex-wrap width-100", 4, "ngIf"], [1, "form-g", "width-60"], ["autocomplete", "new-group", "placeholder", "Choose Process Name", 1, "input-a", 3, "matAutocomplete", "ngModel", "input", "ngModelChange"], ["grouptrigger", "matAutocompleteTrigger"], ["groupActiveFirstOption", ""], ["group", "matAutocomplete"], [1, "form-g", "width-25"], ["selected", "selectedyes", "name", "fontStyle", "aria-label", "Font Style", 1, "width-60", 3, "ngModel", "ngModelChange"], ["selected", "selectedyes", "name", "fontStyle", "aria-label", "Font Style", 1, "width-60", 3, "value"], [1, "form-g", "width-100"], ["autocomplete", "new-search", "placeholder", "Choose Process Name", 1, "input-a", 3, "ngModel", "matAutocomplete", "input", "ngModelChange"], ["searchtrigger", "matAutocompleteTrigger"], ["searchActiveFirstOption", ""], ["search", "matAutocomplete"], ["autocomplete", "new-depend", "placeholder", "Choose Depended field", 1, "input-a", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["dependtrigger", "matAutocompleteTrigger"], ["dependActiveFirstOption", ""], ["depend", "matAutocomplete"], ["autocomplete", "new-processdepend", "placeholder", "Choose Process field", 1, "input-a", 3, "ngModel", "matAutocomplete", "input", "ngModelChange"], ["processdependtrigger", "matAutocompleteTrigger"], ["processdependActiveFirstOption", ""], ["processdepend", "matAutocomplete"], ["autocomplete", "new-defualt", "placeholder", "Search Value", 1, "input-a", 3, "ngModel", "matAutocomplete", "input", "ngModelChange"], ["defualttrigger", "matAutocompleteTrigger"], ["defualtActiveFirstOption", ""], ["defualt", "matAutocomplete"], [1, "d-flex", "flex-wrap", "width-100"], ["placeholder", "Add Items", 1, "size-border", "border-none"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "items-border"], [1, "width-25"], ["class", "d-flex", "style", "color: #a9a9a9;", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "d-flex", 2, "color", "#a9a9a9"], [1, "form-g", "width-25", "marg-lr-0", "align-item-center"], [1, "form-g", "width-25", "marg-lr-0"], ["placeholder", "Condition", 1, "size-border", "border-none", 3, "ngModel", "ngModelChange"], ["autocomplete", "new-advDepend", "placeholder", "Select Field", 1, "input-a", "border-none", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["advDependtrigger", "matAutocompleteTrigger"], ["advDependActiveFirstOption", ""], ["advDepend", "matAutocomplete"], ["placeholder", "Visibility", 1, "size-border", "border-none", 3, "ngModel", "ngModelChange"], [2, "align-self", "center"], ["mat-raised-button", "", 1, "cancel-btn", "delete", 3, "click"]], template: function FieldDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FieldDialogComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FieldDialogComponent_div_6_Template, 16, 18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FieldDialogComponent_div_9_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FieldDialogComponent_button_10_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_Template_button_click_12_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FieldDialogComponent_Template_button_click_14_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.selectedField == null ? null : ctx.selectedField.name) ? ctx.selectedField == null ? null : ctx.selectedField.name : "New Field", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.inputData == null ? null : ctx.inputData.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputData == null ? null : ctx.inputData.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cancelBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nextDone);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSlider"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]], styles: [".field-header[_ngcontent-%COMP%] {\n    color: var(--warm-grey);\n    justify-content: space-between;\n    height: 40px;\n    border-bottom: 1px solid #f2f2f2;\n}\n\n.box-area[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    margin: 10px 0;\n}\n\n.type-box[_ngcontent-%COMP%] {\n    width: 85.7px;\n    height: 85.2px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    margin: 0 12px 5px 0px;\n}\n\n.selected-type[_ngcontent-%COMP%] {\n    border: 1px solid #2e9afc;\n}\n\n.border-below[_ngcontent-%COMP%] {\n    border: 1px solid #f2f2f2;\n    margin: 4px 0;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    margin-right: 15px;\n    color: var(--greyish-two);\n}\n\n.next-btn[_ngcontent-%COMP%] {\n    background-color: var(--cerulean);\n}\n\n.footer-btn[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    margin: 15px 0 10px 0;\n}\n\n.tab-border[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #d1d1d1;\n}\n\n.selected-settings[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--blue);\n    border-bottom-width: 3px;\n    animation: op 1s ease-in-out;\n    color: #000000 !important;\n}\n\n.pad-bot[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n    text-align: center;\n    color: #bfbfbf;\n}\n\n@keyframes op {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.input-a[_ngcontent-%COMP%] {\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n}\n\n.input-h[_ngcontent-%COMP%] {\n    min-height: 15px !important;\n}\n\n.input-t[_ngcontent-%COMP%] {\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n    padding: 7px;\n    box-sizing: border-box;\n    width: 100%;\n    min-height: 32px !important;\n}\n\n.form-g[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 8px;\n    margin: 10px 4px;\n}\n\n.auto-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n}\n\n.width-55[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n\n.width-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.width-45[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.width-30[_ngcontent-%COMP%] {\n    width: 30%;\n}\n\n.label[_ngcontent-%COMP%] {\n    color: var(--charcoal-grey);\n}\n\n.width-75[_ngcontent-%COMP%] {\n    width: 75%;\n}\n\n.width-65[_ngcontent-%COMP%] {\n    width: 65%;\n}\n\n.mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 80px;\n    margin: 0 6px 25px 12px;\n    align-items: center;\n    display: flex;\n    border: 0px;\n    color: var(--white);\n    font-weight: 400;\n    cursor: pointer;\n    font-size: 12px;\n    border-radius: 2px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    background-image: linear-gradient(357deg, #44a6ff 130%, #0081f6 -50%);\n    align-self: flex-end;\n  }\n\n.section-input[_ngcontent-%COMP%] {\n    margin: 22px 19px 20px 8.4px;\n}\n\n.section-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: solid 1px #cccccc;\n    height: 38px;\n    padding: 0 6px;\n}\n\n.items[_ngcontent-%COMP%] {\n    flex-direction: column;\n}\n\n.list-item[_ngcontent-%COMP%] {\n    margin: 5px 0px 0 8px\n}\n\n.box-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: .5em 0;\n    width: 45%;\n    position: relative;\n    margin: 0 8px;\n  }\n\n.box-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n.drag-box[_ngcontent-%COMP%] {\n    cursor: move;\n    display: flex;\n    box-sizing: border-box;\n    flex-grow: 1;\n    justify-content: center;\n    margin: .25em;\n    padding: .25em;\n    border: 1px solid #cccccc;\n  }\n\n.cdk-drag[_ngcontent-%COMP%] {\n    \n      transition: transform 150ms ease;\n  }\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    \n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    \n    opacity: 0;\n  }\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    background-color: greenyellow;\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    opacity: .7;\n  }\n\n.trash-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -25px;\n    color: var(--warm-grey);\n    cursor: pointer;\n  }\n\n.size-border[_ngcontent-%COMP%] {\n    border: 1px solid #cccccc;\n    line-height: 2;\n    padding: 4px 5px;\n    width: 90%;\n  }\n\n.min-height[_ngcontent-%COMP%] {\n      min-height: 240px;\n  }\n\n.form-a[_ngcontent-%COMP%] {\n    line-height: 1.2;\n    height: 20px;\n  }\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n      background-color: var(--cerulean) ;\n      color: #ffffff;\n  }\n\n.pad-lr[_ngcontent-%COMP%] {\n      padding: 0 24px;\n  }\n\n.mar-lr[_ngcontent-%COMP%] {\n    margin: 14px 0;\n  }\n\n.delete[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: var(--error);\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    cursor: not-allowed;\n}\n\n.pos-abs[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n.height-80[_ngcontent-%COMP%] {\n    height: 70px;\n    margin: 10px 14px 10px 4px;\n}\n\n.height-75[_ngcontent-%COMP%] {\n    height: 75px;\n}\n\n.error-top[_ngcontent-%COMP%] {\n    top: 32px;\n}\n\n.width-78[_ngcontent-%COMP%] {\n    width: 78%;\n}\n\n.border-none[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.marg-lr-0[_ngcontent-%COMP%] {\n    margin: 10px 0;\n}\n\n.items-border[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #b5b5b5;\n    padding-bottom: 6px;\n    color: var(--dark-two);\n}\n\n.min-200[_ngcontent-%COMP%] {\n    min-height: 200px;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n    margin: 10px 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1mbG93LWVkaXRvci9wcm9jZXNzLWRhc2hib2FyZC9maWVsZC1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxVQUFVO0VBQ1o7O0FBQ0Y7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDRHQUE0RztJQUM1RyxxRUFBcUU7SUFDckUsb0JBQW9CO0VBQ3RCOztBQUNBO0lBQ0UsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrREFBa0Q7TUFDaEQsZ0NBQWdDO0VBQ3BDOztBQUVBO0lBQ0Usa0RBQWtEO0lBQ2xELHNEQUFzRDtFQUN4RDs7QUFFQTtJQUNFLHVGQUF1RjtJQUN2RixVQUFVO0VBQ1o7O0FBRUE7SUFDRSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjs7a0RBRThDO0lBQzlDLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0FBQ0E7TUFDSSxpQkFBaUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUNBO01BQ0ksa0NBQWtDO01BQ2xDLGNBQWM7RUFDbEI7O0FBQ0E7TUFDSSxlQUFlO0VBQ25COztBQUNBO0lBQ0UsY0FBYztFQUNoQjs7QUFDRjtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWZsb3ctZWRpdG9yL3Byb2Nlc3MtZGFzaGJvYXJkL2ZpZWxkLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtaGVhZGVyIHtcbiAgICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uYm94LWFyZWEge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnR5cGUtYm94IHtcbiAgICB3aWR0aDogODUuN3B4O1xuICAgIGhlaWdodDogODUuMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMTJweCA1cHggMHB4O1xufVxuXG4uc2VsZWN0ZWQtdHlwZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlOWFmYztcbn1cblxuLmJvcmRlci1iZWxvdyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICBtYXJnaW46IDRweCAwO1xufVxuLmNhbmNlbC1idG4ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleWlzaC10d28pO1xufVxuLm5leHQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZXJ1bGVhbik7XG59XG4uZm9vdGVyLWJ0biB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTVweCAwIDEwcHggMDtcbn1cblxuXG4udGFiLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7XG59XG5cbi5zZWxlY3RlZC1zZXR0aW5ncyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbiAgICBhbmltYXRpb246IG9wIDFzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYWQtYm90IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNiZmJmYmY7XG59XG5cbkBrZXlmcmFtZXMgb3Age1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaW5wdXQtYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LWgge1xuICAgIG1pbi1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmlucHV0LXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbn1cbi5mb3JtLWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDhweDtcbiAgICBtYXJnaW46IDEwcHggNHB4O1xufVxuXG4uYXV0by1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG59XG4ud2lkdGgtNTUge1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbi53aWR0aC00MCB7XG4gIHdpZHRoOiA0MCU7XG59XG4ud2lkdGgtNDUge1xuICB3aWR0aDogNDUlO1xufVxuLndpZHRoLTMwIHtcbiAgICB3aWR0aDogMzAlO1xufVxuLmxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSk7XG59XG4ud2lkdGgtNzUge1xuICAgIHdpZHRoOiA3NSU7XG59XG4ud2lkdGgtNjUge1xuICAgIHdpZHRoOiA2NSU7XG59XG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uYnRuIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiAwIDZweCAyNXB4IDEycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM1N2RlZywgIzQ0YTZmZiAxMzAlLCAjMDA4MWY2IC01MCUpO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gIC5zZWN0aW9uLWlucHV0IHtcbiAgICBtYXJnaW46IDIycHggMTlweCAyMHB4IDguNHB4O1xufVxuXG4uc2VjdGlvbi1pbnB1dCBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDAgNnB4O1xufVxuLml0ZW1zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxpc3QtaXRlbSB7XG4gICAgbWFyZ2luOiA1cHggMHB4IDAgOHB4XG59XG4uYm94LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAuNWVtIDA7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgfVxuICBcbiAgLmJveC1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbiAgXG4gIC5kcmFnLWJveCB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICB9XG4gIFxuICAuY2RrLWRyYWcge1xuICAgIC8qIHRoaXMgaXMgdGhlIGFuaW1hdGlvbiB0aGF0IGZpcmVzIGZvciB0aGUgZHJhZyAqL1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2U7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIC8qIHRoaXMgaXMgdGhlIGFuaW1hdGlvbiB0aGF0IGZpcmVzIGZvciB0aGUgZHJvcCAqL1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICBcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICAvKiBzZXR0aW5nIG9wYWNpdHkgdG8gemVybyBtYWtlcyBhIGJsYW5rIHNwYWNlIGJldHdlZW4gbGlzdCBpdGVtcyBkdXJpbmcgZHJhZyBwcmV2aWV3ICovXG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgb3BhY2l0eTogLjc7XG4gIH1cblxuICAudHJhc2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2l6ZS1ib3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgcGFkZGluZzogNHB4IDVweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5taW4taGVpZ2h0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICB9XG5cbiAgLmZvcm0tYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VydWxlYW4pIDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5wYWQtbHIge1xuICAgICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG4gIC5tYXItbHIge1xuICAgIG1hcmdpbjogMTRweCAwO1xuICB9XG4uZGVsZXRlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG59XG4uc3VibWl0LWJ0biB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5wb3MtYWJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaGVpZ2h0LTgwIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDE0cHggMTBweCA0cHg7XG59XG4uaGVpZ2h0LTc1IHtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5lcnJvci10b3Age1xuICAgIHRvcDogMzJweDtcbn1cblxuLndpZHRoLTc4IHtcbiAgICB3aWR0aDogNzglO1xufVxuLmJvcmRlci1ub25lIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubWFyZy1sci0wIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5pdGVtcy1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgY29sb3I6IHZhcigtLWRhcmstdHdvKTtcbn1cbi5taW4tMjAwIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbi5tYXJnaW4tcmlnaHQge1xuICAgIG1hcmdpbjogMTBweCAzNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-field',
                templateUrl: 'add-field.component.html',
                styleUrls: ['field-popup.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["ProcessDashboardService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "f1ui":
/*!******************************************************!*\
  !*** ./src/app/process-flow-editor/rowparse.pipe.ts ***!
  \******************************************************/
/*! exports provided: RowparsePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowparsePipe", function() { return RowparsePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RowparsePipe {
    transform(value, args) {
        let temp = JSON.parse(JSON.stringify(value));
        let l = [];
        temp.grid = temp.grid.split('%');
        temp.grid.forEach(i => {
            const s = i.replace(' ', '');
            if (s != '') {
                l.push(parseInt(s));
            }
        });
        const sum = l.reduce((a, b) => a + b, 0);
        if (sum % 4 > 0) {
            value.data.push({ grid: 25, width: 25 });
        }
        return value;
    }
}
RowparsePipe.ɵfac = function RowparsePipe_Factory(t) { return new (t || RowparsePipe)(); };
RowparsePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rowparse", type: RowparsePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowparsePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'rowparse'
            }]
    }], null, null); })();


/***/ }),

/***/ "o7Oj":
/*!***********************************************************************************!*\
  !*** ./src/app/process-flow-editor/process-dashboard/process-dashboard.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProcessDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDashboardModule", function() { return ProcessDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _process_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-dashboard-routing.module */ "zrDh");
/* harmony import */ var _process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-dashboard.component */ "IUAm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _rowparse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rowparse.pipe */ "f1ui");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


















class ProcessDashboardModule {
}
ProcessDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessDashboardModule });
ProcessDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessDashboardModule_Factory(t) { return new (t || ProcessDashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _process_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessDashboardModule, { declarations: [_process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProcessDashboardComponent"], _process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["FieldDialogComponent"], _rowparse_pipe__WEBPACK_IMPORTED_MODULE_10__["RowparsePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _process_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]], exports: [_process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProcessDashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProcessDashboardComponent"], _process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["FieldDialogComponent"], _rowparse_pipe__WEBPACK_IMPORTED_MODULE_10__["RowparsePipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _process_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]
                ],
                exports: [_process_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProcessDashboardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uns5":
/*!*************************************************!*\
  !*** ./src/app/process-flow-editor/constant.ts ***!
  \*************************************************/
/*! exports provided: advanced, field_list, advaced_option_type, visibility, visibility_option_list, validation_appearance, computationals, field, option_list_advance, option_list_normal, default_value, required_depended_validation, dataType, checkListBased, stringBased, toggleBased, fileBased, validations, computational, autoRule, setContainsvalid, file, fileTypeList, specialcharater, notifyType, deadOccuranceType, deadOccuranceTimeType, actionList, iconList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanced", function() { return advanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field_list", function() { return field_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advaced_option_type", function() { return advaced_option_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility_option_list", function() { return visibility_option_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation_appearance", function() { return validation_appearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computationals", function() { return computationals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_list_advance", function() { return option_list_advance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_list_normal", function() { return option_list_normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default_value", function() { return default_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required_depended_validation", function() { return required_depended_validation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataType", function() { return dataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkListBased", function() { return checkListBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringBased", function() { return stringBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBased", function() { return toggleBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileBased", function() { return fileBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validations", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computational", function() { return computational; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoRule", function() { return autoRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContainsvalid", function() { return setContainsvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTypeList", function() { return fileTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialcharater", function() { return specialcharater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyType", function() { return notifyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deadOccuranceType", function() { return deadOccuranceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deadOccuranceTimeType", function() { return deadOccuranceTimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionList", function() { return actionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconList", function() { return iconList; });
// Advance fields (lookup) const Start
const advanced = {
    type: 'non-depended',
    table_name: '',
    operator: 'equal_to',
    depended_field: '',
    filter_field: '',
    filter: '',
    field_list: []
};
const field_list = {
    display_value: '',
    name: '',
    replace_for: [],
    replace_type: 1 //0=id,1=value
};
const advaced_option_type = ['non-depended', 'depended', 'auto-fill'];
// Advance fields (lookup) const End
// Visibility fields const Start
const visibility = {
    type: '',
    option_list: [],
    expression: ''
};
const visibility_option_list = {
    type: '',
    value: [],
    field_list: []
};
// Visibility fields const End
// validation_appearance field const Start
const validation_appearance = {
    type: '',
    name: '',
    value: [],
    color_code: '#f7594b',
    message: '',
    expression: '',
    warn_type: '' //reject,warn
};
// validation_appearance field const End
// computational field const Start
const computationals = {
    type: 'normal',
    name: '',
    is_edit: 0,
    expression: ''
};
// computational field const End
const field = {
    field_type: '',
    name: '',
    field_title: '',
    help_text: '',
    default_value: null,
    mandatory: 0,
    // isunique: 0,
    max_length: 30,
    option_list: null,
    group_id: 0,
    group_name: '',
    table_name: '',
    // section_table_name: '',
    // is_new_table: 1,
    // validation_appearance: null,
    // computational: null,
    // visibility: null,//Refer const visibility
    // advanced: null, //Refer const advanced
    // is_quick_field: 0,
    is_disabled: 0,
    is_hidden: 0,
    is_unique: '0',
    row_no: 0,
    field_position: 0,
    // section_table_view_position: 0,
    // table_view_position: 0,
    grid: 25,
};
//response and
const option_list_advance = [{
        display_value: '',
        name: '',
        replace_for: ''
    }];
const option_list_normal = {
    value: '',
    color: ''
};
// Default value
const default_value = {
    type: '',
    value: ''
};
const required_depended_validation = {
    field_name: '',
    op_type: 'eq_to',
    value: []
};
const dataType = [
    {
        field_type: 'VARCHAR', field_sub_type: 'text', name: '', field_title: 'Text', help_text: '', default_value: null,
        mandatory: 0, max_length: 150, option_list: null,
    },
    {
        field_type: 'textarea', field_sub_type: 'textarea', name: '', field_title: 'Paragraph', help_text: '', default_value: null,
        mandatory: 0, max_length: 700, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'number', name: '', field_title: 'Number', help_text: '', default_value: null,
        mandatory: 0, max_length: 7, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'checklist', name: '', field_title: 'CheckList', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'checkbox', name: '', field_title: 'Check Box', help_text: '', default_value: null,
        mandatory: 0, max_length: 20, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'SELECT', field_sub_type: 'select', name: '', field_title: 'Dropdown', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'DATE', field_sub_type: 'date', name: '', field_title: 'Date', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'DATE', field_sub_type: 'datetime', name: '', field_title: 'Date and Time', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: null,
    },
    {
        field_type: 'TIME', field_sub_type: 'time', name: '', field_title: 'Time', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'image', name: '', field_title: 'Image', help_text: '', default_value: null,
        mandatory: 0, max_length: 200, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'attachment', name: '', field_title: 'Attachment', help_text: '', default_value: null,
        mandatory: 0, max_length: 200, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'switch', name: '', field_title: 'Yes/No', help_text: '', default_value: null,
        mandatory: 0, max_length: 1, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'slider', name: '', field_title: 'Slider', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'user', field_sub_type: 'user', name: '', field_title: 'User', help_text: '', default_value: null,
        mandatory: 0, max_length: 20, option_list: null,
    },
    {
        field_type: 'table', field_sub_type: 'table', name: '', field_title: 'Table', help_text: '', default_value: null,
        mandatory: 0, max_length: 1, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'currency', name: '', field_title: 'Currency', help_text: '', default_value: null,
        mandatory: 0, max_length: 55, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'telephone', name: '', field_title: 'Telephone Number', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'email', name: '', field_title: 'Email', help_text: '', default_value: null,
        mandatory: 0, max_length: 50, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'link', name: '', field_title: 'Link', help_text: '', default_value: null,
        mandatory: 0, max_length: 100, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'password', name: '', field_title: 'Password', help_text: '', default_value: null,
        mandatory: 0, max_length: 25, option_list: null,
    },
    {
        field_type: 'TEXT', field_sub_type: 'richtext', name: '', field_title: 'Rich text', help_text: '', default_value: null,
        mandatory: 0, max_length: 700, option_list: null
    },
];
const checkListBased = [
    'checkbox',
    'checklist',
    'select'
];
const stringBased = [
    'number',
    'text',
    'tel',
    'url',
    'password',
    'textarea',
    'email',
    'richtext',
    'currency'
];
const toggleBased = [
    'toggle',
    'slider'
];
const fileBased = [
    'attachment',
    'image'
];
const validations = {
    'number': [
        { d_name: 'Greater Then', name: 'gt', value: [], message: 'please enter Higher value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Lesser Then', name: 'lt', value: [], message: 'please enter lesser value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Equal to', name: 'eq_to', value: [], message: 'please enter equal value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Not equalto', name: 'nt_eq_to', value: [], message: 'not equal to this value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'text': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Equal to', name: 'eq_to', value: [], message: 'please enter equal value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Not equalto', name: 'nt_eq_to', value: [], message: 'not equal to this value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not special characters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'table': [{ d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' }],
    'tel': [
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'mimnimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'password': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special characters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'textarea': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'Does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special charaters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'richtext': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'Does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special charaters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'date': [
        { d_name: 'In Past', name: 'in_past_d', value: [], message: 'date must be in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_d', value: [], message: 'date must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Current (Today)', name: 'today', value: [], message: 'must be today', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'time': [
        { d_name: 'In Past', name: 'in_past_t', value: [], message: 'time must in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_t', value: [], message: 'time must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'select': [
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'checklist': [
        { d_name: 'Mix no. of Select', name: 'min_select', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max no. of Select', name: 'max_select', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'image': [
        { d_name: 'Image Type', name: 'img_type', value: [], message: 'image type error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximum image size', name: 'max_size', value: [], message: 'image size is large, upload the smaller image', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'attachment': [
        { d_name: 'File Type', name: 'file_type', value: [], message: 'file type error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximun file size', name: 'max_size', value: [], message: 'file size id too large, please upload the smaller file', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximum no. of file', name: 'max_no_of_files', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'url': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'must not contains', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'datetime': [
        { d_name: 'In Past', name: 'in_past_dt', value: [], message: 'date and time must be in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_dt', value: [], message: 'date and time must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Current (Today)', name: 'today', value: [], message: 'must be today', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ]
};
const computational = [
    { d_name: 'Average', name: 'average', value: 'average()', fieldType: 'number', fieldList: [] },
    { display_value: 'Concatenate', name: 'concatenate', value: 'concatenate()', fieldType: '', fieldList: [] },
    { display_value: 'minimum', name: 'min', value: 'min()', fieldType: 'number', fieldList: [] },
    { display_value: 'maximum', name: 'max', value: 'max()', fieldType: 'number', fieldList: [] },
    { display_value: 'Created by', name: 'createdBy', value: '', fieldList: [] },
    { display_value: 'Last modified by', name: 'lastModifiedBy', value: '', fieldList: [] },
    { display_value: 'Rand', name: 'rand', value: 'rand()', fieldList: [] },
    { display_value: 'Rand Between', name: 'randBetween', value: 'rand_between()', fieldList: [] },
    { display_value: 'Sum', name: 'sum', value: 'sum()', fieldType: 'number', fieldList: [] },
    { display_value: 'Date diff', name: 'dateDiff', value: '', fieldList: [] },
    {
        display_value: 'Depended', name: 'depended', value: '', sortType: 'DESC', sortField: '', tableName: '', fieldName: ''
    },
];
const autoRule = ['in_past_date', 'in_future_date', 'in_past_time',
    'in_future_time', 'in_past_datetime', 'in_future_datetime', 'no_special', 'letter_only'];
const setContainsvalid = ['contains', 'does_not_contains'];
const file = ['file_type', 'image_type'];
const fileTypeList = {
    'file_type': [
        'JPG', 'JPEG', 'PNG', 'BMP', 'TIF',
        'PDF', 'PPT', 'PPTX', 'DOC', 'DOCX'
    ],
    'image_type': ['JPG', 'JPEG', 'PNG', 'BMP', 'TIF']
};
const specialcharater = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const notifyType = ['notify', 'escalate'];
const deadOccuranceType = [
    { name: 'before', displayValue: 'Before the deadline' },
    { name: 'after', displayValue: 'After the deadline' }
];
const deadOccuranceTimeType = [
    { name: 'hours', displayValue: 'Hours' },
    { name: 'minutes', displayValue: 'Minutes' },
    { name: 'weaks', displayValue: 'Weaks' }
];
const actionList = [
    { name: 'submit', displayValue: 'Submit', position: 6, color: '', bgColor: '' },
    { name: 'reassign', displayValue: 'Reassign', position: 5, color: '', bgColor: '' },
    { name: 'send back', displayValue: 'Send Back', position: 4, color: '', bgColor: '' },
    { name: 'withdraw', displayValue: 'Withdraw', position: 2, color: '', bgColor: '' },
    { name: 'discard', displayValue: 'Discard', position: 1, color: '', bgColor: '' },
    { name: 'assign', displayValue: 'Assign To', position: 1, color: '', bgColor: '' },
];
const iconList = { "baseUrl": "static/icons/", "categories": [{ "icons": [{ "id": "3d_rotation" }, { "id": "accessibility" }, { "id": "accessibility_new" }, { "id": "accessible" }, { "id": "accessible_forward" }, { "id": "account_balance" }, { "id": "account_balance_wallet" }, { "id": "account_box" }, { "id": "account_circle" }, { "id": "add_shopping_cart" }, { "id": "alarm" }, { "id": "alarm_add" }, { "id": "alarm_off" }, { "id": "alarm_on" }, { "id": "all_inbox" }, { "id": "all_out" }, { "id": "android" }, { "id": "announcement" }, { "id": "arrow_right_alt" }, { "id": "aspect_ratio" }, { "id": "assessment" }, { "id": "assignment" }, { "id": "assignment_ind" }, { "id": "assignment_late" }, { "id": "assignment_return" }, { "id": "assignment_returned" }, { "id": "assignment_turned_in" }, { "id": "autorenew" }, { "id": "backup" }, { "id": "book" }, { "id": "bookmark" }, { "id": "bookmark_border" }, { "id": "bookmarks" }, { "id": "bug_report" }, { "id": "build" }, { "id": "cached" }, { "id": "calendar_today" }, { "id": "calendar_view_day" }, { "id": "camera_enhance" }, { "id": "card_giftcard" }, { "id": "card_membership" }, { "id": "card_travel" }, { "id": "change_history" }, { "id": "check_circle" }, { "id": "check_circle_outline" }, { "id": "chrome_reader_mode" }, { "id": "class" }, { "id": "code" }, { "id": "commute" }, { "id": "compare_arrows" }, { "id": "contact_support" }, { "id": "copyright" }, { "id": "credit_card" }, { "id": "dashboard" }, { "id": "date_range" }, { "id": "delete" }, { "id": "delete_forever" }, { "id": "delete_outline" }, { "id": "description" }, { "id": "dns" }, { "id": "done" }, { "id": "done_all" }, { "id": "done_outline" }, { "id": "donut_large" }, { "id": "donut_small" }, { "id": "drag_indicator" }, { "id": "eject" }, { "id": "euro_symbol" }, { "id": "event" }, { "id": "event_seat" }, { "id": "exit_to_app" }, { "id": "explore" }, { "id": "explore_off" }, { "id": "extension" }, { "id": "face" }, { "id": "favorite" }, { "id": "favorite_border" }, { "id": "feedback" }, { "id": "find_in_page" }, { "id": "find_replace" }, { "id": "fingerprint" }, { "id": "flight_land" }, { "id": "flight_takeoff" }, { "id": "flip_to_back" }, { "id": "flip_to_front" }, { "id": "g_translate" }, { "id": "gavel" }, { "id": "get_app" }, { "id": "gif" }, { "id": "grade" }, { "id": "group_work" }, { "id": "help" }, { "id": "help_outline" }, { "id": "highlight_off" }, { "id": "history" }, { "id": "home" }, { "id": "horizontal_split" }, { "id": "hourglass_empty" }, { "id": "hourglass_full" }, { "id": "http" }, { "id": "https" }, { "id": "important_devices" }, { "id": "info" }, { "id": "input" }, { "id": "invert_colors" }, { "id": "label" }, { "id": "label_important" }, { "id": "label_off" }, { "id": "language" }, { "id": "launch" }, { "id": "line_style" }, { "id": "line_weight" }, { "id": "list" }, { "id": "lock" }, { "id": "lock_open" }, { "id": "loyalty" }, { "id": "markunread_mailbox" }, { "id": "maximize" }, { "id": "minimize" }, { "id": "motorcycle" }, { "id": "note_add" }, { "id": "offline_bolt" }, { "id": "offline_pin" }, { "id": "opacity" }, { "id": "open_in_browser" }, { "id": "open_in_new" }, { "id": "open_with" }, { "id": "pageview" }, { "id": "pan_tool" }, { "id": "payment" }, { "id": "perm_camera_mic" }, { "id": "perm_contact_calendar" }, { "id": "perm_data_setting" }, { "id": "perm_device_information" }, { "id": "perm_identity" }, { "id": "perm_media" }, { "id": "perm_phone_msg" }, { "id": "perm_scan_wifi" }, { "id": "pets" }, { "id": "picture_in_picture" }, { "id": "picture_in_picture_alt" }, { "id": "play_for_work" }, { "id": "polymer" }, { "id": "power_settings_new" }, { "id": "pregnant_woman" }, { "id": "print" }, { "id": "query_builder" }, { "id": "question_answer" }, { "id": "receipt" }, { "id": "record_voice_over" }, { "id": "redeem" }, { "id": "remove_shopping_cart" }, { "id": "reorder" }, { "id": "report_problem" }, { "id": "restore" }, { "id": "restore_from_trash" }, { "id": "restore_page" }, { "id": "room" }, { "id": "rounded_corner" }, { "id": "rowing" }, { "id": "schedule" }, { "id": "search" }, { "imageUrls": { "twotone": "twotone-settings-24px.svg", "sharp": "sharp-settings-24px.svg", "outline": "outline-settings-24px.svg", "round": "round-settings-24px.svg", "baseline": "baseline-settings-20px.svg" }, "id": "settings" }, { "id": "settings_applications" }, { "id": "settings_backup_restore" }, { "id": "settings_bluetooth" }, { "id": "settings_brightness" }, { "id": "settings_cell" }, { "id": "settings_ethernet" }, { "id": "settings_input_antenna" }, { "id": "settings_input_component" }, { "id": "settings_input_composite" }, { "id": "settings_input_hdmi" }, { "id": "settings_input_svideo" }, { "id": "settings_overscan" }, { "id": "settings_phone" }, { "id": "settings_power" }, { "id": "settings_remote" }, { "id": "settings_voice" }, { "id": "shop" }, { "id": "shop_two" }, { "id": "shopping_basket" }, { "id": "shopping_cart" }, { "id": "speaker_notes" }, { "id": "speaker_notes_off" }, { "id": "spellcheck" }, { "imageUrls": { "twotone": "twotone-star_rate-18px.svg", "sharp": "sharp-star_rate-18px.svg", "outline": "outline-star_rate-18px.svg", "round": "round-star_rate-18px.svg", "baseline": "baseline-star_rate-18px.svg" }, "id": "star_rate" }, { "id": "stars" }, { "id": "store" }, { "id": "subject" }, { "id": "supervised_user_circle" }, { "id": "supervisor_account" }, { "id": "swap_horiz" }, { "id": "swap_horizontal_circle" }, { "id": "swap_vert" }, { "id": "swap_vertical_circle" }, { "id": "tab" }, { "id": "tab_unselected" }, { "id": "text_rotate_up" }, { "id": "text_rotate_vertical" }, { "id": "text_rotation_down" }, { "id": "text_rotation_none" }, { "id": "theaters" }, { "id": "thumb_down" }, { "id": "thumb_up" }, { "id": "thumbs_up_down" }, { "id": "timeline" }, { "id": "toc" }, { "id": "today" }, { "id": "toll" }, { "id": "touch_app" }, { "id": "track_changes" }, { "id": "translate" }, { "id": "trending_down" }, { "id": "trending_flat" }, { "id": "trending_up" }, { "id": "turned_in" }, { "id": "turned_in_not" }, { "id": "update" }, { "id": "verified_user" }, { "id": "vertical_split" }, { "id": "view_agenda" }, { "id": "view_array" }, { "id": "view_carousel" }, { "id": "view_column" }, { "id": "view_day" }, { "id": "view_headline" }, { "id": "view_list" }, { "id": "view_module" }, { "id": "view_quilt" }, { "id": "view_stream" }, { "id": "view_week" }, { "id": "visibility" }, { "id": "visibility_off" }, { "id": "voice_over_off" }, { "id": "watch_later" }, { "id": "work" }, { "id": "work_off" }, { "id": "work_outline" }, { "id": "youtube_searched_for" }, { "id": "zoom_in" }, { "id": "zoom_out" }], "name": "action" }, { "icons": [{ "id": "add_alert" }, { "id": "error" }, { "id": "error_outline" }, { "id": "notification_important" }, { "id": "warning" }], "name": "alert" }, { "icons": [{ "id": "4k" }, { "id": "add_to_queue" }, { "id": "airplay" }, { "id": "album" }, { "id": "art_track" }, { "id": "av_timer" }, { "id": "branding_watermark" }, { "id": "call_to_action" }, { "id": "closed_caption" }, { "id": "control_camera" }, { "id": "equalizer" }, { "id": "explicit" }, { "id": "fast_forward" }, { "id": "fast_rewind" }, { "id": "featured_play_list" }, { "id": "featured_video" }, { "id": "fiber_dvr" }, { "id": "fiber_manual_record" }, { "id": "fiber_new" }, { "id": "fiber_pin" }, { "id": "fiber_smart_record" }, { "id": "forward_10" }, { "id": "forward_30" }, { "id": "forward_5" }, { "id": "games" }, { "id": "hd" }, { "id": "hearing" }, { "id": "high_quality" }, { "id": "library_add" }, { "id": "library_books" }, { "id": "library_music" }, { "id": "loop" }, { "id": "mic" }, { "id": "mic_none" }, { "id": "mic_off" }, { "id": "missed_video_call" }, { "id": "movie" }, { "id": "music_video" }, { "id": "new_releases" }, { "id": "not_interested" }, { "id": "note" }, { "id": "pause" }, { "id": "pause_circle_filled" }, { "id": "pause_circle_outline" }, { "id": "play_arrow" }, { "id": "play_circle_filled" }, { "imageUrls": { "twotone": "twotone-play_circle_filled_white-24px.svg", "sharp": "sharp-play_circle_filled_white-24px.svg", "outline": "outline-play_circle_filled_white-24px.svg", "round": "round-play_circle_filled_white-24px.svg", "baseline": "baseline-play_circle_filled_white-48px.svg" }, "id": "play_circle_filled_white" }, { "id": "play_circle_outline" }, { "id": "playlist_add" }, { "id": "playlist_add_check" }, { "id": "playlist_play" }, { "id": "queue" }, { "id": "queue_music" }, { "id": "queue_play_next" }, { "id": "radio" }, { "id": "recent_actors" }, { "id": "remove_from_queue" }, { "id": "repeat" }, { "id": "repeat_one" }, { "id": "replay" }, { "id": "replay_10" }, { "id": "replay_30" }, { "id": "replay_5" }, { "id": "shuffle" }, { "id": "skip_next" }, { "id": "skip_previous" }, { "id": "slow_motion_video" }, { "id": "snooze" }, { "id": "sort_by_alpha" }, { "id": "stop" }, { "id": "subscriptions" }, { "id": "subtitles" }, { "id": "surround_sound" }, { "id": "video_call" }, { "id": "video_label" }, { "id": "video_library" }, { "id": "videocam" }, { "id": "videocam_off" }, { "id": "volume_down" }, { "id": "volume_mute" }, { "id": "volume_off" }, { "id": "volume_up" }, { "id": "web" }, { "id": "web_asset" }], "name": "av" }, { "icons": [{ "id": "alternate_email" }, { "id": "business" }, { "id": "call" }, { "id": "call_end" }, { "id": "call_made" }, { "id": "call_merge" }, { "id": "call_missed" }, { "id": "call_missed_outgoing" }, { "id": "call_received" }, { "id": "call_split" }, { "id": "cancel_presentation" }, { "id": "cell_wifi" }, { "id": "chat" }, { "id": "chat_bubble" }, { "id": "chat_bubble_outline" }, { "id": "clear_all" }, { "id": "comment" }, { "id": "contact_mail" }, { "id": "contact_phone" }, { "id": "contacts" }, { "id": "desktop_access_disabled" }, { "id": "dialer_sip" }, { "id": "dialpad" }, { "id": "domain_disabled" }, { "id": "duo" }, { "id": "email" }, { "id": "forum" }, { "id": "import_contacts" }, { "id": "import_export" }, { "id": "invert_colors_off" }, { "id": "list_alt" }, { "id": "live_help" }, { "id": "location_off" }, { "id": "location_on" }, { "id": "mail_outline" }, { "id": "message" }, { "id": "mobile_screen_share" }, { "id": "no_sim" }, { "id": "pause_presentation" }, { "id": "person_add_disabled" }, { "id": "phone" }, { "id": "phonelink_erase" }, { "id": "phonelink_lock" }, { "id": "phonelink_ring" }, { "id": "phonelink_setup" }, { "id": "portable_wifi_off" }, { "id": "present_to_all" }, { "id": "print_disabled" }, { "id": "ring_volume" }, { "id": "rss_feed" }, { "id": "screen_share" }, { "id": "sentiment_satisfied_alt" }, { "id": "speaker_phone" }, { "id": "stay_current_landscape" }, { "id": "stay_current_portrait" }, { "id": "stay_primary_landscape" }, { "id": "stay_primary_portrait" }, { "id": "stop_screen_share" }, { "id": "swap_calls" }, { "id": "textsms" }, { "id": "unsubscribe" }, { "id": "voicemail" }, { "id": "vpn_key" }], "name": "communication" }, { "icons": [{ "id": "add" }, { "id": "add_box" }, { "id": "add_circle" }, { "id": "add_circle_outline" }, { "id": "archive" }, { "id": "backspace" }, { "id": "ballot" }, { "id": "block" }, { "id": "clear" }, { "id": "create" }, { "id": "delete_sweep" }, { "id": "drafts" }, { "id": "file_copy" }, { "id": "filter_list" }, { "id": "flag" }, { "id": "font_download" }, { "id": "forward" }, { "id": "gesture" }, { "id": "how_to_reg" }, { "id": "how_to_vote" }, { "id": "inbox" }, { "id": "link" }, { "id": "link_off" }, { "id": "low_priority" }, { "id": "mail" }, { "id": "markunread" }, { "id": "move_to_inbox" }, { "id": "next_week" }, { "id": "outlined_flag" }, { "id": "redo" }, { "id": "remove" }, { "id": "remove_circle" }, { "id": "remove_circle_outline" }, { "id": "reply" }, { "id": "reply_all" }, { "id": "report" }, { "id": "report_off" }, { "id": "save" }, { "id": "save_alt" }, { "id": "select_all" }, { "id": "send" }, { "id": "sort" }, { "id": "text_format" }, { "id": "unarchive" }, { "id": "undo" }, { "id": "waves" }, { "imageUrls": { "twotone": "twotone-weekend-24px.svg", "sharp": "sharp-weekend-24px.svg", "outline": "outline-weekend-24px.svg", "round": "round-weekend-24px.svg", "baseline": "baseline-weekend-48px.svg" }, "id": "weekend" }, { "id": "where_to_vote" }], "name": "content" }, { "icons": [{ "id": "access_alarm" }, { "id": "access_alarms" }, { "id": "access_time" }, { "id": "add_alarm" }, { "id": "add_to_home_screen" }, { "id": "airplanemode_active" }, { "id": "airplanemode_inactive" }, { "id": "battery_20" }, { "id": "battery_30" }, { "id": "battery_50" }, { "id": "battery_60" }, { "id": "battery_80" }, { "id": "battery_90" }, { "id": "battery_alert" }, { "id": "battery_charging_20" }, { "id": "battery_charging_30" }, { "id": "battery_charging_50" }, { "id": "battery_charging_60" }, { "id": "battery_charging_80" }, { "id": "battery_charging_90" }, { "id": "battery_charging_full" }, { "id": "battery_full" }, { "id": "battery_std" }, { "id": "battery_unknown" }, { "id": "bluetooth" }, { "id": "bluetooth_connected" }, { "id": "bluetooth_disabled" }, { "id": "bluetooth_searching" }, { "id": "brightness_auto" }, { "id": "brightness_high" }, { "id": "brightness_low" }, { "id": "brightness_medium" }, { "id": "data_usage" }, { "id": "developer_mode" }, { "id": "devices" }, { "id": "dvr" }, { "id": "gps_fixed" }, { "id": "gps_not_fixed" }, { "id": "gps_off" }, { "id": "graphic_eq" }, { "id": "location_disabled" }, { "id": "location_searching" }, { "id": "mobile_friendly" }, { "id": "mobile_off" }, { "id": "network_cell" }, { "id": "network_wifi" }, { "id": "nfc" }, { "id": "screen_lock_landscape" }, { "id": "screen_lock_portrait" }, { "id": "screen_lock_rotation" }, { "id": "screen_rotation" }, { "id": "sd_storage" }, { "id": "settings_system_daydream" }, { "id": "signal_cellular_0_bar" }, { "id": "signal_cellular_1_bar" }, { "id": "signal_cellular_2_bar" }, { "id": "signal_cellular_3_bar" }, { "id": "signal_cellular_4_bar" }, { "id": "signal_cellular_alt" }, { "id": "signal_cellular_connected_no_internet_0_bar" }, { "id": "signal_cellular_connected_no_internet_1_bar" }, { "id": "signal_cellular_connected_no_internet_2_bar" }, { "id": "signal_cellular_connected_no_internet_3_bar" }, { "id": "signal_cellular_connected_no_internet_4_bar" }, { "id": "signal_cellular_no_sim" }, { "id": "signal_cellular_null" }, { "id": "signal_cellular_off" }, { "id": "signal_wifi_0_bar" }, { "id": "signal_wifi_1_bar" }, { "id": "signal_wifi_1_bar_lock" }, { "id": "signal_wifi_2_bar" }, { "id": "signal_wifi_2_bar_lock" }, { "id": "signal_wifi_3_bar" }, { "id": "signal_wifi_3_bar_lock" }, { "id": "signal_wifi_4_bar" }, { "id": "signal_wifi_4_bar_lock" }, { "id": "signal_wifi_off" }, { "id": "storage" }, { "id": "usb" }, { "id": "wallpaper" }, { "id": "widgets" }, { "id": "wifi_lock" }, { "id": "wifi_tethering" }], "name": "device" }, { "icons": [{ "id": "add_comment" }, { "id": "attach_file" }, { "id": "attach_money" }, { "id": "bar_chart" }, { "id": "border_all" }, { "id": "border_bottom" }, { "id": "border_clear" }, { "id": "border_color" }, { "id": "border_horizontal" }, { "id": "border_inner" }, { "id": "border_left" }, { "id": "border_outer" }, { "id": "border_right" }, { "id": "border_style" }, { "id": "border_top" }, { "id": "border_vertical" }, { "id": "bubble_chart" }, { "id": "drag_handle" }, { "id": "format_align_center" }, { "id": "format_align_justify" }, { "id": "format_align_left" }, { "id": "format_align_right" }, { "id": "format_bold" }, { "id": "format_clear" }, { "id": "format_color_fill" }, { "id": "format_color_reset" }, { "id": "format_color_text" }, { "id": "format_indent_decrease" }, { "id": "format_indent_increase" }, { "id": "format_italic" }, { "id": "format_line_spacing" }, { "id": "format_list_bulleted" }, { "id": "format_list_numbered" }, { "id": "format_list_numbered_rtl" }, { "id": "format_paint" }, { "id": "format_quote" }, { "id": "format_shapes" }, { "id": "format_size" }, { "id": "format_strikethrough" }, { "id": "format_textdirection_l_to_r" }, { "id": "format_textdirection_r_to_l" }, { "id": "format_underlined" }, { "id": "functions" }, { "id": "highlight" }, { "id": "insert_chart" }, { "id": "insert_chart_outlined" }, { "id": "insert_comment" }, { "id": "insert_drive_file" }, { "id": "insert_emoticon" }, { "id": "insert_invitation" }, { "id": "insert_link" }, { "id": "insert_photo" }, { "id": "linear_scale" }, { "id": "merge_type" }, { "id": "mode_comment" }, { "id": "monetization_on" }, { "id": "money_off" }, { "id": "multiline_chart" }, { "id": "notes" }, { "id": "pie_chart" }, { "id": "publish" }, { "id": "scatter_plot" }, { "id": "score" }, { "id": "short_text" }, { "id": "show_chart" }, { "id": "space_bar" }, { "id": "strikethrough_s" }, { "id": "table_chart" }, { "id": "text_fields" }, { "id": "title" }, { "id": "vertical_align_bottom" }, { "id": "vertical_align_center" }, { "id": "vertical_align_top" }, { "id": "wrap_text" }], "name": "editor" }, { "icons": [{ "id": "attachment" }, { "id": "cloud" }, { "id": "cloud_circle" }, { "id": "cloud_done" }, { "id": "cloud_download" }, { "id": "cloud_off" }, { "id": "cloud_queue" }, { "id": "cloud_upload" }, { "id": "create_new_folder" }, { "id": "folder" }, { "id": "folder_open" }, { "id": "folder_shared" }], "name": "file" }, { "icons": [{ "id": "cast" }, { "id": "cast_connected" }, { "imageUrls": { "twotone": "twotone-cast_for_education-24px.svg", "sharp": "sharp-cast_for_education-24px.svg", "outline": "outline-cast_for_education-24px.svg", "round": "round-cast_for_education-24px.svg", "baseline": "baseline-cast_for_education-48px.svg" }, "id": "cast_for_education" }, { "id": "computer" }, { "id": "desktop_mac" }, { "id": "desktop_windows" }, { "id": "developer_board" }, { "id": "device_hub" }, { "id": "device_unknown" }, { "id": "devices_other" }, { "id": "dock" }, { "id": "gamepad" }, { "id": "headset" }, { "id": "headset_mic" }, { "id": "keyboard" }, { "id": "keyboard_arrow_down" }, { "id": "keyboard_arrow_left" }, { "id": "keyboard_arrow_right" }, { "id": "keyboard_arrow_up" }, { "id": "keyboard_backspace" }, { "id": "keyboard_capslock" }, { "id": "keyboard_hide" }, { "id": "keyboard_return" }, { "id": "keyboard_tab" }, { "id": "keyboard_voice" }, { "id": "laptop" }, { "id": "laptop_chromebook" }, { "id": "laptop_mac" }, { "id": "laptop_windows" }, { "id": "memory" }, { "id": "mouse" }, { "id": "phone_android" }, { "id": "phone_iphone" }, { "id": "phonelink" }, { "id": "phonelink_off" }, { "id": "power_input" }, { "id": "router" }, { "id": "scanner" }, { "id": "security" }, { "id": "sim_card" }, { "id": "smartphone" }, { "id": "speaker" }, { "id": "speaker_group" }, { "id": "tablet" }, { "id": "tablet_android" }, { "id": "tablet_mac" }, { "id": "toys" }, { "id": "tv" }, { "id": "videogame_asset" }, { "id": "watch" }], "name": "hardware" }, { "icons": [{ "id": "add_a_photo" }, { "id": "add_photo_alternate" }, { "id": "add_to_photos" }, { "id": "adjust" }, { "id": "assistant" }, { "id": "assistant_photo" }, { "id": "audiotrack" }, { "id": "blur_circular" }, { "id": "blur_linear" }, { "id": "blur_off" }, { "id": "blur_on" }, { "id": "brightness_1" }, { "id": "brightness_2" }, { "id": "brightness_3" }, { "id": "brightness_4" }, { "id": "brightness_5" }, { "id": "brightness_6" }, { "id": "brightness_7" }, { "id": "broken_image" }, { "id": "brush" }, { "id": "burst_mode" }, { "id": "camera" }, { "id": "camera_alt" }, { "id": "camera_front" }, { "id": "camera_rear" }, { "id": "camera_roll" }, { "id": "center_focus_strong" }, { "id": "center_focus_weak" }, { "id": "collections" }, { "id": "collections_bookmark" }, { "id": "color_lens" }, { "id": "colorize" }, { "id": "compare" }, { "id": "control_point" }, { "id": "control_point_duplicate" }, { "id": "crop" }, { "id": "crop_16_9" }, { "id": "crop_3_2" }, { "id": "crop_5_4" }, { "id": "crop_7_5" }, { "id": "crop_din" }, { "id": "crop_free" }, { "id": "crop_landscape" }, { "id": "crop_original" }, { "id": "crop_portrait" }, { "id": "crop_rotate" }, { "id": "crop_square" }, { "id": "dehaze" }, { "id": "details" }, { "id": "edit" }, { "id": "exposure" }, { "id": "exposure_neg_1" }, { "id": "exposure_neg_2" }, { "id": "exposure_plus_1" }, { "id": "exposure_plus_2" }, { "id": "exposure_zero" }, { "id": "filter" }, { "id": "filter_1" }, { "id": "filter_2" }, { "id": "filter_3" }, { "id": "filter_4" }, { "id": "filter_5" }, { "id": "filter_6" }, { "id": "filter_7" }, { "id": "filter_8" }, { "id": "filter_9" }, { "id": "filter_9_plus" }, { "id": "filter_b_and_w" }, { "id": "filter_center_focus" }, { "id": "filter_drama" }, { "id": "filter_frames" }, { "id": "filter_hdr" }, { "id": "filter_none" }, { "id": "filter_tilt_shift" }, { "id": "filter_vintage" }, { "id": "flare" }, { "id": "flash_auto" }, { "id": "flash_off" }, { "id": "flash_on" }, { "id": "flip" }, { "id": "gradient" }, { "id": "grain" }, { "id": "grid_off" }, { "id": "grid_on" }, { "id": "hdr_off" }, { "id": "hdr_on" }, { "id": "hdr_strong" }, { "id": "hdr_weak" }, { "id": "healing" }, { "id": "image" }, { "id": "image_aspect_ratio" }, { "id": "image_search" }, { "id": "iso" }, { "id": "landscape" }, { "id": "leak_add" }, { "id": "leak_remove" }, { "id": "lens" }, { "id": "linked_camera" }, { "id": "looks" }, { "id": "looks_3" }, { "id": "looks_4" }, { "id": "looks_5" }, { "id": "looks_6" }, { "id": "looks_one" }, { "id": "looks_two" }, { "id": "loupe" }, { "id": "monochrome_photos" }, { "id": "movie_creation" }, { "id": "movie_filter" }, { "id": "music_note" }, { "id": "music_off" }, { "id": "nature" }, { "id": "nature_people" }, { "id": "navigate_before" }, { "id": "navigate_next" }, { "id": "palette" }, { "id": "panorama" }, { "id": "panorama_fish_eye" }, { "id": "panorama_horizontal" }, { "id": "panorama_vertical" }, { "id": "panorama_wide_angle" }, { "id": "photo" }, { "id": "photo_album" }, { "id": "photo_camera" }, { "id": "photo_filter" }, { "id": "photo_library" }, { "id": "photo_size_select_actual" }, { "id": "photo_size_select_large" }, { "id": "photo_size_select_small" }, { "id": "picture_as_pdf" }, { "id": "portrait" }, { "id": "remove_red_eye" }, { "id": "rotate_90_degrees_ccw" }, { "id": "rotate_left" }, { "id": "rotate_right" }, { "id": "shutter_speed" }, { "id": "slideshow" }, { "id": "straighten" }, { "id": "style" }, { "id": "switch_camera" }, { "id": "switch_video" }, { "id": "tag_faces" }, { "id": "texture" }, { "id": "timelapse" }, { "id": "timer" }, { "id": "timer_10" }, { "id": "timer_3" }, { "id": "timer_off" }, { "id": "tonality" }, { "id": "transform" }, { "id": "tune" }, { "id": "view_comfy" }, { "id": "view_compact" }, { "id": "vignette" }, { "id": "wb_auto" }, { "id": "wb_cloudy" }, { "id": "wb_incandescent" }, { "id": "wb_iridescent" }, { "id": "wb_sunny" }], "name": "image" }, { "icons": [{ "id": "360" }, { "id": "add_location" }, { "id": "atm" }, { "id": "beenhere" }, { "id": "category" }, { "id": "compass_calibration" }, { "id": "departure_board" }, { "id": "directions" }, { "id": "directions_bike" }, { "id": "directions_boat" }, { "id": "directions_bus" }, { "id": "directions_car" }, { "id": "directions_railway" }, { "id": "directions_run" }, { "id": "directions_subway" }, { "id": "directions_transit" }, { "id": "directions_walk" }, { "id": "edit_attributes" }, { "id": "edit_location" }, { "id": "ev_station" }, { "id": "fastfood" }, { "id": "flight" }, { "id": "hotel" }, { "id": "layers" }, { "id": "layers_clear" }, { "id": "local_activity" }, { "id": "local_airport" }, { "id": "local_atm" }, { "id": "local_bar" }, { "id": "local_cafe" }, { "id": "local_car_wash" }, { "id": "local_convenience_store" }, { "id": "local_dining" }, { "id": "local_drink" }, { "id": "local_florist" }, { "id": "local_gas_station" }, { "id": "local_grocery_store" }, { "id": "local_hospital" }, { "id": "local_hotel" }, { "id": "local_laundry_service" }, { "id": "local_library" }, { "id": "local_mall" }, { "id": "local_movies" }, { "id": "local_offer" }, { "id": "local_parking" }, { "id": "local_pharmacy" }, { "id": "local_phone" }, { "id": "local_pizza" }, { "id": "local_play" }, { "id": "local_post_office" }, { "id": "local_printshop" }, { "id": "local_see" }, { "id": "local_shipping" }, { "id": "local_taxi" }, { "id": "map" }, { "id": "money" }, { "id": "my_location" }, { "id": "navigation" }, { "id": "near_me" }, { "id": "not_listed_location" }, { "id": "person_pin" }, { "id": "person_pin_circle" }, { "id": "pin_drop" }, { "id": "place" }, { "id": "rate_review" }, { "id": "restaurant" }, { "id": "restaurant_menu" }, { "id": "satellite" }, { "id": "store_mall_directory" }, { "id": "streetview" }, { "id": "subway" }, { "id": "terrain" }, { "id": "traffic" }, { "id": "train" }, { "id": "tram" }, { "id": "transfer_within_a_station" }, { "id": "transit_enterexit" }, { "id": "trip_origin" }, { "id": "zoom_out_map" }], "name": "maps" }, { "icons": [{ "id": "apps" }, { "id": "arrow_back" }, { "id": "arrow_back_ios" }, { "id": "arrow_downward" }, { "id": "arrow_drop_down" }, { "id": "arrow_drop_down_circle" }, { "id": "arrow_drop_up" }, { "id": "arrow_forward" }, { "id": "arrow_forward_ios" }, { "id": "arrow_left" }, { "id": "arrow_right" }, { "id": "arrow_upward" }, { "id": "cancel" }, { "id": "check" }, { "id": "chevron_left" }, { "id": "chevron_right" }, { "id": "close" }, { "id": "expand_less" }, { "id": "expand_more" }, { "id": "first_page" }, { "id": "fullscreen" }, { "id": "fullscreen_exit" }, { "id": "last_page" }, { "id": "menu" }, { "id": "more_horiz" }, { "id": "more_vert" }, { "id": "refresh" }, { "id": "subdirectory_arrow_left" }, { "id": "subdirectory_arrow_right" }, { "id": "unfold_less" }, { "id": "unfold_more" }], "name": "navigation" }, { "icons": [{ "id": "adb" }, { "id": "airline_seat_flat" }, { "id": "airline_seat_flat_angled" }, { "id": "airline_seat_individual_suite" }, { "id": "airline_seat_legroom_extra" }, { "id": "airline_seat_legroom_normal" }, { "id": "airline_seat_legroom_reduced" }, { "id": "airline_seat_recline_extra" }, { "id": "airline_seat_recline_normal" }, { "id": "bluetooth_audio" }, { "id": "confirmation_number" }, { "id": "disc_full" }, { "id": "drive_eta" }, { "id": "enhanced_encryption" }, { "id": "event_available" }, { "id": "event_busy" }, { "id": "event_note" }, { "id": "folder_special" }, { "id": "live_tv" }, { "id": "mms" }, { "id": "more" }, { "id": "network_check" }, { "id": "network_locked" }, { "id": "no_encryption" }, { "id": "ondemand_video" }, { "id": "personal_video" }, { "id": "phone_bluetooth_speaker" }, { "id": "phone_callback" }, { "id": "phone_forwarded" }, { "id": "phone_in_talk" }, { "id": "phone_locked" }, { "id": "phone_missed" }, { "id": "phone_paused" }, { "id": "power" }, { "id": "power_off" }, { "id": "priority_high" }, { "id": "sd_card" }, { "id": "sms" }, { "id": "sms_failed" }, { "id": "sync" }, { "id": "sync_disabled" }, { "id": "sync_problem" }, { "id": "system_update" }, { "id": "tap_and_play" }, { "id": "time_to_leave" }, { "id": "tv_off" }, { "id": "vibration" }, { "id": "voice_chat" }, { "id": "vpn_lock" }, { "id": "wc" }, { "id": "wifi" }, { "id": "wifi_off" }], "name": "notification" }, { "icons": [{ "id": "ac_unit" }, { "id": "airport_shuttle" }, { "id": "all_inclusive" }, { "id": "beach_access" }, { "id": "business_center" }, { "id": "casino" }, { "id": "child_care" }, { "id": "child_friendly" }, { "id": "fitness_center" }, { "id": "free_breakfast" }, { "id": "golf_course" }, { "id": "hot_tub" }, { "id": "kitchen" }, { "id": "meeting_room" }, { "id": "no_meeting_room" }, { "id": "pool" }, { "id": "room_service" }, { "id": "rv_hookup" }, { "id": "smoke_free" }, { "id": "smoking_rooms" }, { "id": "spa" }], "name": "places" }, { "icons": [{ "id": "cake" }, { "imageUrls": { "twotone": "twotone-domain-24px.svg", "sharp": "sharp-domain-24px.svg", "outline": "outline-domain-24px.svg", "round": "round-domain-24px.svg", "baseline": "baseline-domain-48px.svg" }, "id": "domain" }, { "id": "group" }, { "id": "group_add" }, { "id": "location_city" }, { "id": "mood" }, { "id": "mood_bad" }, { "id": "notifications" }, { "id": "notifications_active" }, { "id": "notifications_none" }, { "id": "notifications_off" }, { "id": "notifications_paused" }, { "id": "pages" }, { "id": "party_mode" }, { "id": "people" }, { "id": "people_outline" }, { "id": "person" }, { "id": "person_add" }, { "id": "person_outline" }, { "id": "plus_one" }, { "id": "poll" }, { "id": "public" }, { "id": "school" }, { "id": "sentiment_dissatisfied" }, { "id": "sentiment_satisfied" }, { "id": "sentiment_very_dissatisfied" }, { "id": "sentiment_very_satisfied" }, { "id": "share" }, { "id": "thumb_down_alt" }, { "id": "thumb_up_alt" }, { "id": "whatshot" }], "name": "social" }, { "icons": [{ "id": "check_box" }, { "id": "check_box_outline_blank" }, { "id": "indeterminate_check_box" }, { "id": "radio_button_checked" }, { "id": "radio_button_unchecked" }, { "id": "star" }, { "id": "star_border" }, { "id": "star_half" }, { "id": "toggle_off" }, { "id": "toggle_on" }], "name": "toggle" }] };


/***/ }),

/***/ "wZkO":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
  \**********************************************************************/
/*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return MAT_TABS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function() { return MAT_TAB_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return MatInkBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return MatTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return MatTabBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return MatTabBodyPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return MatTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return MatTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return MatTabGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return MatTabHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return MatTabLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return MatTabLabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return MatTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return MatTabNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return MatTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _MAT_INK_BAR_POSITIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function() { return _MatTabBodyBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function() { return _MatTabGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function() { return _MatTabHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function() { return _MatTabLinkBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function() { return _MatTabNavBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return matTabsAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function() { return _MAT_INK_BAR_POSITIONER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function() { return MAT_TAB_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function() { return MAT_TAB_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function() { return MatPaginatedTabHeader; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token for the MatInkBar's Positioner. */










function MatTab_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
function MatTabBody_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0) { return { animationDuration: a0 }; };
const _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c3 = ["tabBodyWrapper"];
const _c4 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) { }
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
} }
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
} }
function MatTabGroup_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const tab_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return ctx_r11._handleClick(tab_r4, _r0, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
} }
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15._removeTabBodyWrapperHeight(); })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17._setTabBodyWrapperHeight($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
} }
const _c5 = ["tabListContainer"];
const _c6 = ["tabList"];
const _c7 = ["nextPaginator"];
const _c8 = ["previousPaginator"];
const _c9 = ["mat-tab-nav-bar", ""];
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
    providedIn: 'root',
    factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
    const method = (element) => ({
        left: element ? (element.offsetLeft || 0) + 'px' : '0',
        width: element ? (element.offsetWidth || 0) + 'px' : '0',
    });
    return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
class MatInkBar {
    constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    alignToElement(element) {
        this.show();
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this._setStyles(element));
            });
        }
        else {
            this._setStyles(element);
        }
    }
    /** Shows the ink bar. */
    show() {
        this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */
    hide() {
        this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */
    _setStyles(element) {
        const positions = this._inkBarPositioner(element);
        const inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    }
}
MatInkBar.ɵfac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
MatInkBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_MAT_INK_BAR_POSITIONER,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
    constructor(
    /** Content for the tab. */ template) {
        this.template = template;
    }
}
MatTabContent.ɵfac = function MatTabContent_Factory(t) { return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])); };
MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabContent, selectors: [["", "matTabContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }])] });
MatTabContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabContent]',
                providers: [{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabLabel');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"] {
}
MatTabLabel.ɵfac = function MatTabLabel_Factory(t) { return ɵMatTabLabel_BaseFactory(t || MatTabLabel); };
MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLabel, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
const ɵMatTabLabel_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[mat-tab-label], [matTabLabel]',
                providers: [{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.
/** @docs-private */
class MatTabBase {
}
const _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');
class MatTab extends _MatTabMixinBase {
    constructor(_viewContainerRef, 
    /**
     * @deprecated `_closestTabGroup` parameter to become required.
     * @breaking-change 10.0.0
     */
    _closestTabGroup) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._closestTabGroup = _closestTabGroup;
        /** Plain text label for the tab, used when there is no template label. */
        this.textLabel = '';
        /** Portal that will be the hosted content of the tab */
        this._contentPortal = null;
        /** Emits whenever the internal state of the tab changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        this.origin = null;
        /**
         * Whether the tab is currently active.
         */
        this.isActive = false;
    }
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */
    get templateLabel() { return this._templateLabel; }
    set templateLabel(value) { this._setTemplateLabelInput(value); }
    /** @docs-private */
    get content() {
        return this._contentPortal;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
        }
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    ngOnInit() {
        this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setTemplateLabelInput(value) {
        // Only update the templateLabel via query if there is actually
        // a MatTabLabel found. This works around an issue where a user may have
        // manually set `templateLabel` during creation mode, which would then get clobbered
        // by `undefined` when this query resolves.
        if (value) {
            this._templateLabel = value;
        }
    }
}
MatTab.ɵfac = function MatTab_Factory(t) { return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8)); };
MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTab, selectors: [["mat-tab"]], contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MAT_TAB_CONTENT, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
    } }, viewQuery: function MatTab_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    } }, inputs: { disabled: "disabled", textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, exportAs: ["matTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatTab_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
MatTab.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TAB_GROUP,] }] }
];
MatTab.propDecorators = {
    templateLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MAT_TAB_LABEL,] }],
    _explicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], static: true },] }],
    _implicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], { static: true },] }],
    textLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['label',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab',
                template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
                inputs: ['disabled'],
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                exportAs: 'matTab'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TAB_GROUP]
            }] }]; }, { textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['label']
        }], templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_LABEL]
        }], _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], static: true }]
        }], _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], { static: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-labelledby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
    /** Animation translates a tab along the X axis. */
    translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none' })),
        // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(-100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ])
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"] {
    constructor(componentFactoryResolver, viewContainerRef, _host, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        super(componentFactoryResolver, viewContainerRef, _document);
        this._host = _host;
        /** Subscription to events for when the tab body begins centering. */
        this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Subscription to events for when the tab body finishes leaving from center position. */
        this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
        super.ngOnInit();
        this._centeringSub = this._host._beforeCentering
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position)))
            .subscribe((isCentering) => {
            if (isCentering && !this.hasAttached()) {
                this.attach(this._host._content);
            }
        });
        this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
            this.detach();
        });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
}
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabBodyPortal, selectors: [["", "matTabBodyHost", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabBodyPortal.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: MatTabBody, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabBodyHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }, { type: MatTabBody, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */
class _MatTabBodyBase {
    constructor(_elementRef, _dir, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** Subscription to the directionality change observable. */
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Emits when an animation on the tab is complete. */
        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Event emitted when the tab begins to animate towards the center as the active tab. */
        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted before the centering of the tab begins. */
        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted before the centering of the tab begins. */
        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the tab completes its animation towards the center. */
        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.
        /** Duration for the tab's animation. */
        this.animationDuration = '500ms';
        if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe((dir) => {
                this._computePositionAnimationState(dir);
                changeDetectorRef.markForCheck();
            });
        }
        // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
        this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            // If the transition to the center is complete, emit an event.
            if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
                this._onCentered.emit();
            }
            if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
                this._afterLeavingCenter.emit();
            }
        });
    }
    /** The shifted index position of the tab body, where zero represents the active center tab. */
    set position(position) {
        this._positionIndex = position;
        this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit() {
        if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
        }
    }
    ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();
        this._translateTabComplete.complete();
    }
    _onTranslateTabStarted(event) {
        const isCentering = this._isCenterPosition(event.toState);
        this._beforeCentering.emit(isCentering);
        if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    }
    /** The text direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */
    _isCenterPosition(position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */
    _computePositionAnimationState(dir = this._getLayoutDirection()) {
        if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
        }
        else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
        }
        else {
            this._position = 'center';
        }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */
    _computePositionFromOrigin(origin) {
        const dir = this._getLayoutDirection();
        if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
            return 'left-origin-center';
        }
        return 'right-origin-center';
    }
}
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) { return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
_MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabBodyBase, inputs: { animationDuration: "animationDuration", position: "position", _content: ["content", "_content"], origin: "origin" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _afterLeavingCenter: "_afterLeavingCenter", _onCentered: "_onCentered" } });
_MatTabBodyBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
_MatTabBodyBase.propDecorators = {
    _onCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _beforeCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _afterLeavingCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _onCentered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['content',] }],
    origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['content']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody extends _MatTabBodyBase {
    constructor(elementRef, dir, changeDetectorRef) {
        super(elementRef, dir, changeDetectorRef);
    }
}
MatTabBody.ɵfac = function MatTabBody_Factory(t) { return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabBody, selectors: [["mat-tab-body"]], viewQuery: function MatTabBody_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
    } }, hostAttrs: [1, "mat-tab-body"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]], template: function MatTabBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) { return ctx._onTranslateTabStarted($event); })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) { return ctx._translateTabComplete.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
    } }, directives: [MatTabBodyPortal], styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"], encapsulation: 2, data: { animation: [matTabsAnimations.translateTab] } });
MatTabBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
MatTabBody.propDecorators = {
    _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-body',
                template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                animations: [matTabsAnimations.translateTab],
                host: {
                    'class': 'mat-tab-body'
                },
                styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {
}
// Boilerplate for applying mixins to MatTabGroup.
/** @docs-private */
class MatTabGroupMixinBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */
class _MatTabGroupBase extends _MatTabGroupMixinBase {
    constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /** All of the tabs that belong to the group. */
        this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        /** The tab index that should be selected after the content has been checked. */
        this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        this._tabBodyWrapperHeight = 0;
        /** Subscription to tabs being added/removed. */
        this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Subscription to changes in the tab labels. */
        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._dynamicHeight = false;
        this._selectedIndex = null;
        /** Position of the tab header. */
        this.headerPosition = 'above';
        /** Output to enable support for two-way binding on `[(selectedIndex)]` */
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when focus has changed within a tab group. */
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the body animation has completed */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the tab selection has changed. */
        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        this._groupId = nextId++;
        this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
            defaultConfig.animationDuration : '500ms';
        this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ?
            defaultConfig.disablePagination : false;
    }
    /** Whether the tab group should grow to the size of the active tab. */
    get dynamicHeight() { return this._dynamicHeight; }
    set dynamicHeight(value) { this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() { return this._animationDuration; }
    set animationDuration(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    /** Background color of the tab group. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const nativeElement = this._elementRef.nativeElement;
        nativeElement.classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            nativeElement.classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != indexToSelect) {
            const isFirstRun = this._selectedIndex == null;
            if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
                if (!isFirstRun) {
                    this.selectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngAfterContentInit() {
        this._subscribeToAllTabChanges();
        this._subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this._tabsSubscription = this._tabs.changes.subscribe(() => {
            const indexToSelect = this._clampTabIndex(this._indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                const tabs = this._tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this._indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Listens to changes in all of the tabs. */
    _subscribeToAllTabChanges() {
        // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
        // some that are inside of nested tab groups. We filter them out manually by checking that
        // the closest group to the tab is the current one.
        this._allTabs.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs))
            .subscribe((tabs) => {
            this._tabs.reset(tabs.filter(tab => {
                // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
                // once it becomes a required parameter in MatTab.
                return !tab._closestTabGroup || tab._closestTabGroup === this;
            }));
            this._tabs.notifyOnChanges();
        });
    }
    ngOnDestroy() {
        this._tabs.destroy();
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */
    realignInkBar() {
        if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
        }
    }
    _focusChanged(index) {
        this.focusChange.emit(this._createChangeEvent(index));
    }
    _createChangeEvent(index) {
        const event = new MatTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */
    _subscribeToTabLabels() {
        if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this._tabs.map(tab => tab._stateChanges))
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    _clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i) {
        return `mat-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */
    _getTabContentId(i) {
        return `mat-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + 'px';
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
        }
    }
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight() {
        const wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */
    _handleClick(tab, tabHeader, index) {
        if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
        }
    }
    /** Retrieves the tabindex for the tab. */
    _getTabIndex(tab, idx) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === idx ? 0 : -1;
    }
}
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) { return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabGroupBase, inputs: { headerPosition: "headerPosition", animationDuration: "animationDuration", disablePagination: "disablePagination", dynamicHeight: "dynamicHeight", selectedIndex: "selectedIndex", backgroundColor: "backgroundColor" }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabGroupBase.propDecorators = {
    dynamicHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    headerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    selectedTabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup extends _MatTabGroupBase {
    constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    }
}
MatTabGroup.ɵfac = function MatTabGroup_Factory(t) { return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabGroup, selectors: [["mat-tab-group"]], contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
    } }, viewQuery: function MatTabGroup_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
    } }, hostAttrs: [1, "mat-tab-group"], hostVars: 4, hostBindings: function MatTabGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    } }, inputs: { color: "color", disableRipple: "disableRipple" }, exportAs: ["matTabGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
                provide: MAT_TAB_GROUP,
                useExisting: MatTabGroup
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 7, consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]], template: function MatTabGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) { return ctx._focusChanged($event); })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
    } }, directives: function () { return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody]; }, styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"], encapsulation: 2 });
MatTabGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabGroup.propDecorators = {
    _allTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatTab, { descendants: true },] }],
    _tabBodyWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabBodyWrapper',] }],
    _tabHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabHeader',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-group',
                exportAs: 'matTabGroup',
                template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                inputs: ['color', 'disableRipple'],
                providers: [{
                        provide: MAT_TAB_GROUP,
                        useExisting: MatTabGroup
                    }],
                host: {
                    'class': 'mat-tab-group',
                    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                    '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
                },
                styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTab, { descendants: true }]
        }], _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabBodyWrapper']
        }], _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabHeader']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.
/** @docs-private */
class MatTabLabelWrapperBase {
}
const _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends _MatTabLabelWrapperMixinBase {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    /** Sets focus on the wrapper element */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
}
MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) { return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLabelWrapper, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabLabelWrapper.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabLabelWrapper]',
                inputs: ['disabled'],
                host: {
                    '[class.mat-tab-disabled]': 'disabled',
                    '[attr.aria-disabled]': '!!disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Config used to bind passive event listeners */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
class MatPaginatedTabHeader {
    constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, 
    /**
     * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
     * parameters to become required.
     */
    _platform, _animationMode) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        /** Stream that will stop the automated scrolling. */
        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */
        this.disablePagination = false;
        this._selectedIndex = 0;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when a label is focused. */
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
        _ngZone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
                .subscribe(() => {
                this._stopInterval();
            });
        });
    }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);
        if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;
            if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
            }
        }
    }
    ngAfterViewInit() {
        // We need to handle these events manually, because we want to bind passive event listeners.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('before');
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('after');
        });
    }
    ngAfterContentInit() {
        const dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        const resize = this._viewportRuler.change(150);
        const realign = () => {
            this.updatePagination();
            this._alignInkBarToSelectedTab();
        };
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items)
            .withHorizontalOrientation(this._getLayoutDirection())
            .withHomeAndEnd()
            .withWrap();
        this._keyManager.updateActiveItem(this._selectedIndex);
        // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.
        typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
        // On dir change or window resize, realign the ink bar and update the orientation of
        // the key manager if the direction has changed.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(() => {
            // We need to defer this to give the browser some time to recalculate the element dimensions.
            Promise.resolve().then(realign);
            this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
        });
        // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this._setTabFocus(newFocusIndex);
        });
    }
    ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;
            this._changeDetectorRef.markForCheck();
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
            this._changeDetectorRef.markForCheck();
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */
    _handleKeydown(event) {
        // We don't handle any key bindings with a modifier key.
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this._itemSelected(event);
                }
                break;
            default:
                this._keyManager.onKeydown(event);
        }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    _onContentChanges() {
        const textContent = this._elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || '';
            // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.
            this._ngZone.run(() => {
                this.updatePagination();
                this._alignInkBarToSelectedTab();
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
        }
        this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    _isValidIndex(index) {
        if (!this._items) {
            return true;
        }
        const tab = this._items ? this._items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            const containerEl = this._tabListContainer.nativeElement;
            const dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    }
    /** The layout direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    _updateTabScrollPosition() {
        if (this.disablePagination) {
            return;
        }
        const scrollDistance = this.scrollDistance;
        const platform = this._platform;
        const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
        // Don't use `translate3d` here because we don't want to create a new layer. A new layer
        // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
        // and ripples will exceed the boundaries of the visible tab bar.
        // See: https://github.com/angular/components/issues/10276
        // We round the `transform` here, because transforms with sub-pixel precision cause some
        // browsers to blur the content of the element.
        this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
        // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
        // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.
        if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
        }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    get scrollDistance() { return this._scrollDistance; }
    set scrollDistance(value) {
        this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollHeader(direction) {
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */
    _handlePaginatorClick(direction) {
        this._stopInterval();
        this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollToLabel(labelIndex) {
        if (this.disablePagination) {
            return;
        }
        const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        const { offsetLeft, offsetWidth } = selectedLabel.elementRef.nativeElement;
        let labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
        }
        const beforeVisiblePos = this.scrollDistance;
        const afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkPaginationEnabled() {
        if (this.disablePagination) {
            this._showPaginationControls = false;
        }
        else {
            const isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
            }
            this._showPaginationControls = isEnabled;
        }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkScrollingControls() {
        if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
        }
        else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance() {
        const lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return (lengthOfTabList - viewLength) || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */
    _alignInkBarToSelectedTab() {
        const selectedItem = this._items && this._items.length ?
            this._items.toArray()[this.selectedIndex] : null;
        const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
        }
        else {
            this._inkBar.hide();
        }
    }
    /** Stops the currently-running paginator interval.  */
    _stopInterval() {
        this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */
    _handlePaginatorPress(direction, mouseEvent) {
        // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
        // null check the `button`, but we do it so we don't break tests that use fake events.
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
        }
        // Avoid overlapping timers.
        this._stopInterval();
        // Start a timer after the delay and keep firing based on the interval.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
            // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed)))
            .subscribe(() => {
            const { maxScrollDistance, distance } = this._scrollHeader(direction);
            // Stop the timer if we've reached the start or the end.
            if (distance === 0 || distance >= maxScrollDistance) {
                this._stopInterval();
            }
        });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */
    _scrollTo(position) {
        if (this.disablePagination) {
            return { maxScrollDistance: 0, distance: 0 };
        }
        const maxScrollDistance = this._getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
        return { maxScrollDistance, distance: this._scrollDistance };
    }
}
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) { return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatPaginatedTabHeader, inputs: { disablePagination: "disablePagination" } });
MatPaginatedTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPaginatedTabHeader.propDecorators = {
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */
class _MatTabHeaderBase extends MatPaginatedTabHeader {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    _itemSelected(event) {
        event.preventDefault();
    }
}
_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) { return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabHeaderBase, inputs: { disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabHeaderBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabHeaderBase.propDecorators = {
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends _MatTabHeaderBase {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    }
}
MatTabHeader.ɵfac = function MatTabHeader_Factory(t) { return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabHeader, selectors: [["mat-tab-header"]], contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabHeader_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-header"], hostVars: 4, hostBindings: function MatTabHeader_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    } }, inputs: { selectedIndex: "selectedIndex" }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabHeader_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabHeader_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabHeader_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"], encapsulation: 2 });
MatTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabHeader.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatTabLabelWrapper, { descendants: false },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['previousPaginator',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-header',
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                inputs: ['selectedIndex'],
                outputs: ['selectFocusedIndex', 'indexFocused'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                host: {
                    'class': 'mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
                },
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTabLabelWrapper, { descendants: false }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */
class _MatTabNavBase extends MatPaginatedTabHeader {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
    /**
     * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
     */
    platform, animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
        /** Theme color of the nav bar. */
        this.color = 'primary';
    }
    /** Background color of the tab nav. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    _itemSelected() {
        // noop
    }
    ngAfterContentInit() {
        // We need this to run before the `changes` subscription in parent to ensure that the
        // selectedIndex is up-to-date by the time the super class starts looking for it.
        this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(() => {
            this.updateActiveLink();
        });
        super.ngAfterContentInit();
    }
    /**
     * Notifies the component that the active link has been changed.
     * @breaking-change 8.0.0 `element` parameter to be removed.
     */
    updateActiveLink(_element) {
        if (!this._items) {
            return;
        }
        const items = this._items.toArray();
        for (let i = 0; i < items.length; i++) {
            if (items[i].active) {
                this.selectedIndex = i;
                this._changeDetectorRef.markForCheck();
                return;
            }
        }
        // The ink bar should hide itself if no items are active.
        this.selectedIndex = -1;
        this._inkBar.hide();
    }
}
_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) { return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabNavBase, inputs: { color: "color", backgroundColor: "backgroundColor", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabNavBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabNavBase.propDecorators = {
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends _MatTabNavBase {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
    /**
     * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
     */
    platform, animationMode) {
        super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    }
}
MatTabNav.ɵfac = function MatTabNav_Factory(t) { return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabNav, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabNav_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"], hostVars: 10, hostBindings: function MatTabNav_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { color: "color" }, exportAs: ["matTabNavBar", "matTabNav"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], attrs: _c9, ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabNav_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabNav_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabNav_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabNav_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"], encapsulation: 2 });
MatTabNav.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabNav.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabLink), { descendants: true },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['previousPaginator',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: '[mat-tab-nav-bar]',
                exportAs: 'matTabNavBar, matTabNav',
                inputs: ['color'],
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                host: {
                    'class': 'mat-tab-nav-bar mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabLink), { descendants: true }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
        }] }); })();
// Boilerplate for applying mixins to MatTabLink.
class MatTabLinkMixinBase {
}
const _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
/** Base class with all of the `MatTabLink` functionality. */
class _MatTabLinkBase extends _MatTabLinkMixinBase {
    constructor(_tabNavBar, 
    /** @docs-private */ elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        super();
        this._tabNavBar = _tabNavBar;
        this.elementRef = elementRef;
        this._focusMonitor = _focusMonitor;
        /** Whether the tab link is active or not. */
        this._isActive = false;
        this.rippleConfig = globalRippleOptions || {};
        this.tabIndex = parseInt(tabIndex) || 0;
        if (animationMode === 'NoopAnimations') {
            this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /** Whether the link is active. */
    get active() { return this._isActive; }
    set active(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        if (newValue !== this._isActive) {
            this._isActive = value;
            this._tabNavBar.updateActiveLink(this.elementRef);
        }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple ||
            !!this.rippleConfig.disabled;
    }
    /** Focuses the tab link. */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.elementRef);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.elementRef);
    }
}
_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) { return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabLinkBase, inputs: { active: "active" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabLinkBase.ctorParameters = () => [
    { type: _MatTabNavBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabLinkBase.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _MatTabNavBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */
class MatTabLink extends _MatTabLinkBase {
    constructor(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
        this._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](this, ngZone, elementRef, platform);
        this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._tabLinkRipple._removeTriggerEvents();
    }
}
MatTabLink.ɵfac = function MatTabLink_Factory(t) { return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLink, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"], hostVars: 7, hostBindings: function MatTabLink_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matTabLink"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabLink.ctorParameters = () => [
    { type: MatTabNav },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[mat-tab-link], [matTabLink]',
                exportAs: 'matTabLink',
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                host: {
                    'class': 'mat-tab-link mat-focus-indicator',
                    '[attr.aria-current]': 'active ? "page" : null',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabIndex]': 'tabIndex',
                    '[class.mat-tab-disabled]': 'disabled',
                    '[class.mat-tab-label-active]': 'active'
                }
            }]
    }], function () { return [{ type: MatTabNav }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTabsModule {
}
MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MatTabsModule });
MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MatTabsModule_Factory(t) { return new (t || MatTabsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, { declarations: function () { return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatTabNav,
                    MatTabLink,
                    MatTabContent,
                ],
                declarations: [
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatInkBar,
                    MatTabLabelWrapper,
                    MatTabNav,
                    MatTabLink,
                    MatTabBody,
                    MatTabBodyPortal,
                    MatTabHeader,
                    MatTabContent,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ "zrDh":
/*!*******************************************************************************************!*\
  !*** ./src/app/process-flow-editor/process-dashboard/process-dashboard-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProcessDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDashboardRoutingModule", function() { return ProcessDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _process_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-dashboard.component */ "IUAm");





const routes = [
    {
        path: '',
        component: _process_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardComponent"]
    }
];
class ProcessDashboardRoutingModule {
}
ProcessDashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessDashboardRoutingModule });
ProcessDashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessDashboardRoutingModule_Factory(t) { return new (t || ProcessDashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=process-flow-editor-process-dashboard-process-dashboard-module.js.map