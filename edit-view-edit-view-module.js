(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-view-edit-view-module"],{

/***/ "/mxY":
/*!***********************************************!*\
  !*** ./src/app/edit-view/edit-view.module.ts ***!
  \***********************************************/
/*! exports provided: EditViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViewModule", function() { return EditViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-view-routing.module */ "Gqhu");
/* harmony import */ var _edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-view/edit-view.component */ "TIWb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");

























class EditViewModule {
}
EditViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditViewModule });
EditViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditViewModule_Factory(t) { return new (t || EditViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _edit_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditViewRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditViewModule, { declarations: [_edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_4__["EditViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _edit_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditViewRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_4__["EditViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _edit_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditViewRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Gqhu":
/*!*******************************************************!*\
  !*** ./src/app/edit-view/edit-view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViewRoutingModule", function() { return EditViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-view/edit-view.component */ "TIWb");





const routes = [
    {
        path: '',
        component: _edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_2__["EditViewComponent"]
    }
];
class EditViewRoutingModule {
}
EditViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditViewRoutingModule });
EditViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditViewRoutingModule_Factory(t) { return new (t || EditViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TIWb":
/*!************************************************************!*\
  !*** ./src/app/edit-view/edit-view/edit-view.component.ts ***!
  \************************************************************/
/*! exports provided: EditViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViewComponent", function() { return EditViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function EditViewComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const group_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.groupId = group_r4.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.groupId == group_r4.id ? "group-btn" : "group-btn-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.groupId == group_r4.id ? "btn-b" : "btn-b-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r4.group_name, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r37.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r13.mandatoryField.includes(item_r11.name) && ctx_r13.createIsTrue == 1 && ctx_r13.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r13.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r13.mandatoryField.includes(item_r11.name) && ctx_r13.createIsTrue == 1 && ctx_r13.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r42.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r14.mandatoryField.includes(item_r11.name) && ctx_r14.createIsTrue == 1 && ctx_r14.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r14.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r14.mandatoryField.includes(item_r11.name) && ctx_r14.createIsTrue == 1 && ctx_r14.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r46.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r15.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r51.valueChanges(item_r11.name, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r54.editValues[item_r11.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r16.mandatoryField.includes(item_r11.name) && ctx_r16.createIsTrue == 1 && ctx_r16.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r16.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r16.mandatoryField.includes(item_r11.name) && ctx_r16.createIsTrue == 1 && ctx_r16.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r58.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_8_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r17.mandatoryField.includes(item_r11.name) && ctx_r17.createIsTrue == 1 && ctx_r17.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r17.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r17.mandatoryField.includes(item_r11.name) && ctx_r17.createIsTrue == 1 && ctx_r17.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r63.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r18.mandatoryField.includes(item_r11.name) && ctx_r18.createIsTrue == 1 && ctx_r18.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r18.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r18.mandatoryField.includes(item_r11.name) && ctx_r18.createIsTrue == 1 && ctx_r18.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_10_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r67.open(); })("dateChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r71.formatDate(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return !!_r67 ? _r67.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_10_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r19.mandatoryField.includes(item_r11.name) && ctx_r19.createIsTrue == 1 && ctx_r19.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r67)("value", ctx_r19.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r19.mandatoryField.includes(item_r11.name) && ctx_r19.createIsTrue == 1 && ctx_r19.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r76.formatDateTime(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_11_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r20.mandatoryField.includes(item_r11.name) && ctx_r20.createIsTrue == 1 && ctx_r20.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r20.mandatoryField.includes(item_r11.name) && ctx_r20.createIsTrue == 1 && ctx_r20.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r81.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_12_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r21.mandatoryField.includes(item_r11.name) && ctx_r21.createIsTrue == 1 && ctx_r21.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r21.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r21.mandatoryField.includes(item_r11.name) && ctx_r21.createIsTrue == 1 && ctx_r21.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r86.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_13_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r22.mandatoryField.includes(item_r11.name) && ctx_r22.createIsTrue == 1 && ctx_r22.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r22.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r22.mandatoryField.includes(item_r11.name) && ctx_r22.createIsTrue == 1 && ctx_r22.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r91.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea ", !!ctx_r23.mandatoryField.includes(item_r11.name) && ctx_r23.createIsTrue == 1 && ctx_r23.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r23.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r23.mandatoryField.includes(item_r11.name) && ctx_r23.createIsTrue == 1 && ctx_r23.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_div_2_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_15_div_2_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const i_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r100.deleteFile(item_r11.name, i_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_15_div_2_mat_icon_4_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r98 = ctx.index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r95.editValues[item_r11.name] != "" ? ctx_r95.editValues[item_r11.name][i_r98] == null ? null : ctx_r95.editValues[item_r11.name][i_r98].file_url : ctx_r95.storeFileUrl[item_r11.name][i_r98], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r95.editValues[item_r11.name] != "" ? ctx_r95.editValues[item_r11.name][i_r98] == null ? null : ctx_r95.editValues[item_r11.name][i_r98].file_name : ctx_r95.storeFile[item_r11.name][i_r98] == null ? null : ctx_r95.storeFile[item_r11.name][i_r98].file_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r95.storeFile[item_r11.name] || !!ctx_r95.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_15_div_2_Template, 5, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r96.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r107.fileUpload($event, item_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r24.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_3_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const i_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r115.deleteFile(item_r11.name, i_r113); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_3_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r113 = ctx.index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r110.editValues[item_r11.name] != "" ? ctx_r110.editValues[item_r11.name] == null ? null : ctx_r110.editValues[item_r11.name].file_url : ctx_r110.storeFileUrl[item_r11.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r110.editValues[item_r11.name][i_r113] != "" ? ctx_r110.editValues[item_r11.name][i_r113] == null ? null : ctx_r110.editValues[item_r11.name][i_r113].file_url : ctx_r110.storeFile[item_r11.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r110.storeFile[item_r11.name] || !!ctx_r110.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r111.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r122.fileUpload($event, item_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r125.valueChanges(item_r11.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r26.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r129.valueChanges(item_r11.name, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r27.editValues[item_r11.name] == 1);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r134.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_19_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r28.mandatoryField.includes(item_r11.name) && ctx_r28.createIsTrue == 1 && ctx_r28.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r28.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r28.mandatoryField.includes(item_r11.name) && ctx_r28.createIsTrue == 1 && ctx_r28.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r139.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_20_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r29.mandatoryField.includes(item_r11.name) && ctx_r29.createIsTrue == 1 && ctx_r29.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r29.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r29.mandatoryField.includes(item_r11.name) && ctx_r29.createIsTrue == 1 && ctx_r29.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r144.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_21_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r30.mandatoryField.includes(item_r11.name) && ctx_r30.createIsTrue == 1 && ctx_r30.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r30.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r30.mandatoryField.includes(item_r11.name) && ctx_r30.createIsTrue == 1 && ctx_r30.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r149.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_22_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r31.mandatoryField.includes(item_r11.name) && ctx_r31.createIsTrue == 1 && ctx_r31.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r31.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r31.mandatoryField.includes(item_r11.name) && ctx_r31.createIsTrue == 1 && ctx_r31.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_23_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r155, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_23_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r156.valueChanges(item_r11.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_23_mat_option_2_Template, 2, 2, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_23_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r32.mandatoryField.includes(item_r11.name) && ctx_r32.createIsTrue == 1 && ctx_r32.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r32.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.option_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r32.mandatoryField.includes(item_r11.name) && ctx_r32.createIsTrue == 1 && ctx_r32.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_24_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const option_r163 = ctx.$implicit; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r164.valueChanges(item_r11.name, option_r163.id); return ctx_r164.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r163 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r163[item_r11.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r163[item_r11.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r168.getDropdownValues(item_r11, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r171.editValues[item_r11.name].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_24_mat_option_4_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_24_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r33.mandatoryField.includes(item_r11.name) && ctx_r33.createIsTrue == 1 && ctx_r33.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r160)("value", ctx_r33.editValues[item_r11.name].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r33.mandatoryField.includes(item_r11.name) && ctx_r33.createIsTrue == 1 && ctx_r33.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_25_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r179.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r178 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r178[item_r11.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const che_r183 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", che_r183[item_r11.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_25_div_6_div_1_Template, 4, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r176.checkListName[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r187.getDropdownValues(item_r11, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_25_mat_option_5_Template, 2, 1, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_25_div_6_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_25_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r34.mandatoryField.includes(item_r11.name) && ctx_r34.createIsTrue == 1 && ctx_r34.editValues[item_r11.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r34.checkList[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r34.mandatoryField.includes(item_r11.name) && ctx_r34.createIsTrue == 1 && ctx_r34.editValues[item_r11.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r195.field_title);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 80);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r218.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r200.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r226.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r201.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r234.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r202.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r242.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r203.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r250.open(); })("dateChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_5_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r253.subformatDate(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r250);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r257.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r264); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r262.subformatDateTime(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_8_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r267.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r207.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r277); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r275.subValueChanges(item_r11.table_name, sub_r199.name, $event.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r199.default_value)("value", ctx_r210.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r283.subValueChanges(item_r11.table_name, sub_r199.name, $event.checked ? 1 : 0, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r211.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name] == 1);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r293); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r291.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r212.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r299.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r213.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r309); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r307.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r214.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r317); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r315.subValueChanges(item_r11.table_name, sub_r199.name, $event.target.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r215.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r324 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r324, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_r199.default_value = $event; })("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r328.subValueChanges(item_r11.table_name, sub_r199.name, $event.value, i_r197); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r199.default_value)("placeholder", ctx_r216.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r199.option_list);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r340); const option_r337 = ctx.$implicit; const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r338.subValueChanges(item_r11.table_name, sub_r199.name, option_r337.id, i_r197); return ctx_r338.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r337 = ctx.$implicit;
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r337[sub_r199.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r337[sub_r199.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r346); const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r344.getDropdownValues(sub_r199, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r335)("value", ctx_r217.subValues[item_r11.table_name][i_r197][sub_r199 == null ? null : sub_r199.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r217.dropdownSearch);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_1_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_2_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_3_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_4_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_5_Template, 4, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_6_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_7_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_8_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_9_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_10_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_11_Template, 2, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_12_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_13_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_14_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_15_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_16_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_17_Template, 3, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_div_18_Template, 5, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r199 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "select" && sub_r199.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r199.field_sub_type == "select" && sub_r199.parent_table_id != 0);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_div_4_Template, 19, 18, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r196 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r194.subFieldInfo[item_r11.table_name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_4_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_5_Template, 1, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_div_6_Template, 5, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r191.subFieldInfo[item_r11.table_name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.row_count.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.row_count);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_26_div_1_Template, 7, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r354); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); item_r11.row_count.push(item_r11.row_count.length + 1); return ctx_r352.createSubValues(item_r11.table_name, ctx_r352.subFieldInfo[item_r11.table_name]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r35.subFieldInfo[item_r11.table_name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template, 8, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template, 4, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template, 4, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template, 7, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template, 7, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template, 6, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template, 8, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template, 5, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r10.getWidth(item_r11.grid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r11.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.mandatory == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "select" && item_r11.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "select" && item_r11.parent_table_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.field_sub_type == "checklist" && item_r11.parent_table_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.is_sub_table == 1);
} }
function EditViewComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_Template, 27, 27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r9);
} }
function EditViewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r7.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.metaDataTemp[group_r7.id]);
} }
function EditViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r357); const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r356.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_button_10_Template, 3, 7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r357); const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r358.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r357); const ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r359.updateValues(); return ctx_r359.updateSubValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.routeInfo == null ? null : ctx_r0.routeInfo.displayname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupInfo);
} }
function EditViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
class EditViewComponent {
    constructor(route, aRouter, CommonService) {
        this.route = route;
        this.aRouter = aRouter;
        this.CommonService = CommonService;
        this.getBody = { table_name: "meta_field_group", limit: 20, page: 0, sort_type: "ASC", sort_field: "id", filter: [] };
        this.values = {};
        this.dropdownSearch = [];
        this.attachFile = [];
        this.storeFile = {};
        this.storeFileUrl = {};
        this.dateTime = [];
        this.mandatoryField = [];
        this.mandatoryIsTrue = 0;
        this.createIsTrue = 0;
        this.checkList = {};
        this.checkListName = {};
        this.checkListField = [];
        this.subFieldInfo = {};
        this.subValues = {};
        this.dateTimeSub = [];
        this.fileChange = 0;
    }
    ngOnInit() {
        this.aRouter.queryParams.subscribe((params) => {
            this.routeInfo = params;
            if (!!this.routeInfo) {
                this.getGroupInfo();
                // this.getValues();
            }
        });
    }
    getMetaData() {
        let value = { table_name: this.routeInfo.tablename };
        this.CommonService.getMetaData(value).subscribe((response) => {
            this.metaData = response.info;
            let col = [];
            for (let m = 0; m < this.metaData.length; m++) {
                if (this.metaData[m].field_sub_type == "checklist") {
                    this.checkListField.push(this.metaData[m].name);
                }
                if (this.metaData[m].mandatory == 1) {
                    this.mandatoryField.push(this.metaData[m].name);
                }
                col.push(this.metaData[m].name);
                if (this.metaData[m].field_type == "DATETIME") {
                    this.dateTime.push(this.metaData[m].name);
                }
                if (this.metaData[m].field_sub_type == "attachment" || this.metaData[m].field_sub_type == "image") {
                    this.attachFile.push(this.metaData[m].name);
                }
            }
            console.log("atta", this.attachFile);
            let temp = {};
            for (let i = 0; i < this.groupInfo.length; i++) {
                // temp[this.groupInfo[i].id] = [];
                if (i == 0) {
                    this.groupId = this.groupInfo[i].id;
                }
                let groupField = [];
                let rowno = 0;
                for (let j = 0; j < this.metaData.length; j++) {
                    if (this.metaData[j].group_id == this.groupInfo[i].id) {
                        // if (this.metaData[j].default_value != '') {
                        //   this.values[this.metaData[j].name] = this.metaData[j].default_value;
                        // }
                        this.metaData[j].option_list = this.metaData[j].option_list.split(",");
                        groupField.push(this.metaData[j]);
                    }
                }
                for (let j = 0; j < groupField.length; j++) {
                    if (groupField[j].row_no >= rowno) {
                        rowno = groupField[j].row_no;
                    }
                }
                temp[this.groupInfo[i].id] = [];
                let temp2 = {};
                for (let j = 0; j <= rowno; j++) {
                    temp2[j] = [];
                    for (let k = 0; k < groupField.length; k++) {
                        if (groupField[k].row_no == j) {
                            temp2[j].push(groupField[k]);
                        }
                    }
                    temp[this.groupInfo[i].id].push(temp2[j]);
                }
            }
            this.metaDataTemp = temp;
            this.getValues();
            this.getSubTable();
        });
    }
    getGroupInfo() {
        let temp = { table_id: this.routeInfo.id };
        this.getBody.filter.push(temp);
        this.CommonService.getValues(this.getBody).subscribe((response) => {
            this.groupInfo = response.info;
            this.getMetaData();
        });
    }
    deleteFile(value, i) {
        this.fileChange = 1;
        // if (!!this.editValues[value]) {
        //   this.values[value] = "";
        //   // this.editValues[value] = "";
        // }
        this.storeFile[value].splice(i, 1);
        this.editValues[value].splice(i, 1);
        if (i == 0) {
            if (!!this.storeFile[value].length) {
                this.storeFile[value][0]["append_file"] = false;
                this.editValues[value][0]["append_file"] = false;
            }
        }
        if (!this.storeFile[value].length) {
            delete this.storeFile[value];
            delete this.editValues[value];
            this.values[value] = "";
        }
        console.log("delete", this.storeFile);
    }
    getValues() {
        let temp = { id: this.routeInfo.rowid, tableId: this.routeInfo.id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            console.log("log", response.info[0]);
            for (let i = 0; i < this.checkListField.length; i++) {
                this.checkListName[this.checkListField[i]] = [];
            }
            for (let i = 0; i < this.attachFile.length; i++) {
                if (response.info[0].hasOwnProperty(this.attachFile[i])) {
                    if (response.info[0][this.attachFile[i]] != "") {
                        response.info[0][this.attachFile[i]] = JSON.parse(response.info[0][this.attachFile[i]]);
                        this.storeFile[this.attachFile[i]] = response.info[0][this.attachFile[i]];
                    }
                }
            }
            for (let i = 0; i < this.dateTime.length; i++) {
                if (response.info[0].hasOwnProperty(this.dateTime[i])) {
                    if (response.info[0][this.dateTime[i]] != "") {
                        // let d = new Date(response.info[0][this.dateTime[i]]),
                        //   dformat = [d.getFullYear(), d.getMonth() + 1,
                        //   d.getDate()].join('-') + 'T' +
                        //     [d.getHours(),
                        //     d.getMinutes()].join(':');
                        // response.info[0][this.dateTime[i]] = dformat;
                        let d = new Date(response.info[0][this.dateTime[i]]), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = '' + d.getFullYear(), hours = '' + d.getHours(), minites = '' + d.getMinutes();
                        if (month.length < 2)
                            month = '0' + month;
                        if (day.length < 2)
                            day = '0' + day;
                        if (hours.length < 2)
                            hours = '0' + hours;
                        if (minites.length < 2)
                            minites = '0' + minites;
                        response.info[0][this.dateTime[i]] = [year, month, day].join('-') + 'T' + [hours, minites].join(':');
                    }
                }
            }
            this.editValues = response.info[0];
            this.values["id"] = this.editValues.id;
            console.log("edittt", this.editValues);
        });
    }
    getSubValues(item, ind) {
        let body = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": item.table_name,
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [{ "row_id": this.routeInfo.rowid }]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            for (let j = 0; j < response.info.length; j++) {
                this.subTableInfo[ind].row_count.push(j + 1);
            }
            for (let i = 0; i < this.dateTimeSub.length; i++) {
                for (let j = 0; j < response.info.length; j++) {
                    if (response.info[j].hasOwnProperty(this.dateTimeSub[i])) {
                        if (response.info[j][this.dateTime[i]] != "") {
                            let d = new Date(response.info[j][this.dateTimeSub[i]]), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = '' + d.getFullYear(), hours = '' + d.getHours(), minites = '' + d.getMinutes();
                            if (month.length < 2)
                                month = '0' + month;
                            if (day.length < 2)
                                day = '0' + day;
                            if (hours.length < 2)
                                hours = '0' + hours;
                            if (minites.length < 2)
                                minites = '0' + minites;
                            response.info[j][this.dateTimeSub[i]] = [year, month, day].join('-') + 'T' + [hours, minites].join(':');
                        }
                    }
                }
            }
            this.subValues[item.table_name] = response.info;
        });
    }
    createFile() {
        let temp1 = Object.keys(this.storeFile);
        for (let i = 0; i < temp1.length; i++) {
            for (let j = 0; j < this.storeFile[temp1[i]].length; j++) {
                let temp = {};
                let myDate = new Date();
                if (j == 0) {
                    temp["append_file"] = false;
                }
                else {
                    temp["append_file"] = true;
                }
                temp["file_data"] = this.storeFile[temp1[i]].file_data;
                temp["file_name"] = this.storeFile[temp1[i]].file_name + myDate;
                temp["file_extension"] = this.storeFile[temp1[i]].file_extension;
                temp["table_name"] = this.routeInfo.tablename;
                temp["field_id"] = this.routeInfo.rowid;
                temp["field_name"] = temp1[i];
                temp["file_display"] = this.storeFile[temp1[i]].file_name;
                this.CommonService.createFile(temp).subscribe((response) => {
                    console.log("created");
                });
            }
        }
    }
    fileUpload(event, name) {
        this.fileChange = 1;
        // console.log('responsezdfbk', event);
        this.CommonService.uploadFile(event).then((response) => {
            console.log(response, 'response');
            if (!!this.storeFile[name]) {
                response[0]["append_file"] = true;
                this.storeFile[name].push(response[0]);
                this.editValues[name].push(response[0]);
            }
            else {
                this.storeFile[name] = [];
                this.editValues[name] = [];
                response[0]["append_file"] = false;
                this.storeFile[name].push(response[0]);
                this.editValues[name].push(response[0]);
            }
            this.storeFileUrl[name] = event.target.value;
            console.log(this.storeFile, 'response');
        });
    }
    getDropdownValues(item, value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": item.db_name,
            "table_name": item.parent_table_name,
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { [item.parent_table_field]: value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = response.info;
            console.log("drop", this.dropdownSearch);
        });
    }
    getSubTable() {
        let body = {
            "limit": 90,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": "meta_table_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { "is_sub_table": 1 }, { "parent_table_id": this.routeInfo.id }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.subTableInfo = response.info;
            for (let i = 0; i < this.subTableInfo.length; i++) {
                this.subTableInfo[i]["row_count"] = [];
                let temp = [];
                temp.push(this.subTableInfo[i]);
                this.metaDataTemp[this.subTableInfo[i].group_id].splice(this.subTableInfo[i].row_no, 0, temp);
                this.getSubFields(this.subTableInfo[i], i);
            }
            console.log("subTable", this.subTableInfo);
            console.log("mmmm", this.metaDataTemp);
        });
    }
    getSubFields(item, ind) {
        let body = { table_name: item.table_name };
        this.CommonService.getMetaData(body).subscribe((response) => {
            for (let j = 0; j < response.info.length; j++) {
                if (response.info[j].field_type == "DATETIME") {
                    this.dateTimeSub.push(response.info[j].name);
                }
                response.info[j].option_list = response.info[j].option_list.split(",");
            }
            this.subFieldInfo[item.table_name] = response.info;
            this.getSubValues(item, ind);
            console.log("subFields", this.subFieldInfo);
        });
    }
    updateValues() {
        this.createIsTrue = 1;
        this.mandatoryIsTrue = this.mandatoryField.length;
        for (let i = 0; i < this.mandatoryField.length; i++) {
            if (this.editValues.hasOwnProperty(this.mandatoryField[i])) {
                if (this.editValues[this.mandatoryField[i]] != "") {
                    this.mandatoryIsTrue--;
                }
            }
        }
        console.log("create", this.mandatoryIsTrue);
        if (this.mandatoryIsTrue == 0) {
            console.log("enter", this.mandatoryIsTrue);
            this.CommonService.putColumns(this.values, this.routeInfo.tablename).subscribe((response) => {
                if (response.statusCode == 200) {
                    setTimeout(() => {
                        if (this.fileChange == 1) {
                            this.createFile();
                        }
                        this.redirectDashBoard();
                    }, 10);
                }
            });
        }
    }
    updateSubValues() {
        let temp = Object.keys(this.subValues);
        for (let i = 0; i < temp.length; i++) {
            this.CommonService.putSubValues(this.subValues[temp[i]], temp[i]).subscribe((response) => {
                if (response.statusCode == 200) {
                }
            });
        }
    }
    createSubValues(tablename, value) {
        // let temp1 = Object.keys(this.subValues)
        let temp = {};
        if (!!this.subValues[tablename]) {
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number') {
                    if (value[i].default_value == "") {
                        temp[value[i].name] = 0;
                    }
                    else {
                        temp[value[i].name] = value[i].default_value;
                    }
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                }
            }
            // this.subValues[tablename].push(temp);
        }
        else {
            this.subValues[tablename] = [];
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number') {
                    if (value[i].default_value == "") {
                        temp[value[i].name] = 0;
                    }
                    else {
                        temp[value[i].name] = value[i].default_value;
                    }
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                }
            }
        }
        temp["row_id"] = this.routeInfo.rowid;
        let temp2 = [];
        temp2.push(temp);
        this.subValues[tablename].push(temp);
        // for (let i = 0; i < temp.length; i++) {
        this.CommonService.createSubValues(temp2, tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp3;
                temp3 = this.subValues[tablename].length;
                this.subValues[tablename][temp3 - 1]["id"] = response.last_insert_id[0];
                console.log("created");
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
                }
                else {
                    this.CommonService.showSnackbar('Item Not Updated, please Try Again', ['red-growl']);
                }
            }
        }, (error) => {
            this.CommonService.showSnackbar('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
        // }
        console.log("11111111", this.subValues);
    }
    valueChanges(name, value) {
        this.values[name] = value;
        this.editValues[name] = value;
        console.log("value", this.values);
    }
    subValueChanges(tablename, name, value, i) {
        this.subValues[tablename][i][name] = value;
        console.log("subvalues2222222", this.subValues);
    }
    // subValueAdd(tablename, value) {
    //   let temp = {}
    //   if (!!this.subValues[tablename]) {
    //     for (let i = 0; i < value.length; i++) {
    //       temp[value[i].name] = value[i].default_value
    //     }
    //     this.subValues[tablename].push(temp);
    //   } else {
    //     this.subValues[tablename] = [];
    //     for (let i = 0; i < value.length; i++) {
    //       temp[value[i].name] = value[i].default_value
    //     }
    //     this.subValues[tablename].push(temp);
    //   }
    //   console.log("subaddvalues", this.subValues)
    // }
    formatDate(name, date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        this.valueChanges(name, formatdate);
    }
    formatDateTime(name, date) {
        let d = new Date(date), dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.valueChanges(name, dformat);
    }
    subformatDate(tablename, name, date, i) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        this.subValueChanges(tablename, name, formatdate, i);
    }
    subformatDateTime(tablename, name, date, i) {
        let d = new Date(date), dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.subValueChanges(tablename, name, dformat, i);
    }
    getWidth(grid) {
        return `calc( ${grid}% - 30px)`;
    }
    redirectDashBoard() {
        this.route.navigate(['/dashboard/view', this.routeInfo.tablename], { queryParams: { id: this.routeInfo.id, tablename: this.routeInfo.tablename } });
    }
}
EditViewComponent.ɵfac = function EditViewComponent_Factory(t) { return new (t || EditViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
EditViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditViewComponent, selectors: [["app-edit-view"]], decls: 2, vars: 2, consts: [["class", "container-b", 4, "ngIf"], ["class", "position-r full-height", 4, "ngIf"], [1, "container-b"], [1, "container"], [1, "header-r"], [1, "header-text"], [1, "icon-alignment", "cursor", 3, "click"], [1, "body-c"], [1, "group-c"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "footer-c"], [1, "can-btn", "cursor", 3, "click"], [1, "cre-btn", "cursor", 3, "click"], [3, "click"], [1, "content-group"], [1, "header-g"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], ["class", "field-g", 3, "width", 4, "ngFor", "ngForOf"], [1, "field-g"], [1, "field-h"], ["style", "color: red;", 4, "ngIf"], [4, "ngIf"], ["style", "display: grid;", 4, "ngIf"], [2, "color", "red"], ["type", "text", 3, "value", "change"], ["class", "man-f-c", 4, "ngIf"], [1, "man-f-c"], ["type", "text", "disabled", "true", 3, "value", "change"], ["type", "text", "disabled", "true", 1, "input-f", 3, "value", "change"], ["type", "password", 3, "value", "change", "valueChange"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "value", "click", "dateChange"], [1, "date-icon", 3, "click"], ["picker", ""], ["type", "datetime-local", "placeholder", "Choose a date", 3, "value", "change"], ["type", "time", "placeholder", "Choose a time", 3, "value", "change"], ["rows", "3", 3, "value", "change"], [1, "attachment"], ["class", "file-link-f", 4, "ngFor", "ngForOf"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 1, "input-f", 3, "value", "change"], ["file", ""], [1, "file-link-f"], ["target", "_blank", 3, "href"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "close-icon", 3, "click"], ["style", "display: flex;", 4, "ngFor", "ngForOf"], ["type", "file", "id", "tableViewFileLabel", "accept", "image/*", 3, "change"], ["image", ""], [2, "display", "flex"], ["target", "_blank", 1, "image-b", 3, "href"], ["alt", "Image", 1, "image-h", 3, "src"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 3, "value", "change"], [3, "placeholder", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "matAutocomplete", "value", "input", "valueChange"], ["autosetect", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["type", "text", 3, "matAutocomplete", "input"], ["class", "che", 4, "ngIf"], [1, "che"], ["class", "che-f", 4, "ngFor", "ngForOf"], [1, "che-f"], [1, "che-close-i"], [2, "display", "grid"], ["class", "sub-table", 4, "ngIf"], [1, "add-btn", 3, "click"], [1, "sub-table"], [1, "sub-t-h"], [1, "sub-t-h-n"], ["class", "sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "sub-e-r", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "sub-t-h-t"], [1, "sub-e-r"], [1, "sub-t-r"], [1, "sub-t-r-n"], ["class", "sub-t-r-f", 4, "ngFor", "ngForOf"], [1, "sub-t-r-f"], ["class", "sub-v-a", 4, "ngIf"], [1, "sub-v-a"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "change"], ["type", "password", 1, "sub-input", "sub-input-off", 3, "value", "change"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "click", "dateChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "change"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "change"], ["type", "text", 1, "sub-input", "sub-input-off"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "value", "change"], [1, "sub-input", "sub-input-off", 3, "value", "placeholder", "valueChange", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "value", "input"], [1, "position-r", "full-height"], [1, "spinner", "spin-class", 3, "diameter"]], template: function EditViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditViewComponent_div_0_Template, 19, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp && !!ctx.editValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp && ctx.editValues));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: [".container-b[_ngcontent-%COMP%] {\n  background: #04040487;\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  background: #fff;\n  position: fixed;\n  left: 10px;\n  top: 10px;\n}\n\n.header-r[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 transparent, 0 3px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n  color: #495264;\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto -webkit-max-content;\n  grid-template-columns: auto max-content;\n  align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 7px 5px;\n\n}\n\n.body-c[_ngcontent-%COMP%] {\n  height: 87vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 250px auto 250px;\n}\n\n.group-c[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  border: 1px solid var(--silver);\n  background-color: #b0b0b00f;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  \n  \n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--blue);\n  background-color: var(--white);\n}\n\n.group-btn-o[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #495264;\n}\n\n.btn-b[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid var(--blue);\n  display: flex;\n  border-radius: 2px;\n}\n\n.btn-b-o[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid transparent;\n  display: flex;\n  border-radius: 2px;\n}\n\n.content-c[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-sizing: border-box;\n  display: grid;\n  overflow: auto;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 20px;\n  margin: 10px 0px;\n}\n\n.content-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-gap: 5px;\n}\n\n.field-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2b2b2be3;\n}\n\n.input-f[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 4px 5px;\n}\n\n.input-date[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.date-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-g[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed var(--pinkish-grey);\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: var(--blue);\n  padding-bottom: 5px;\n}\n\n.row-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 12px 10px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n}\n\n.cre-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n.can-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n  .mat-select-placeholder {\n  color: var(--warm-grey) !important;\n}\n\n#tableViewFileLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#datetime[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#times[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: grid;\n  height: 28px;\n  align-items: center;\n\n}\n\n.file-link-f[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: flex;\n  height: 28px;\n  align-items: center;\n\n}\n\n.image-b[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-h[_ngcontent-%COMP%] {\n  width: 35px !important;\n  height: 30px !important;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.red-c[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.border-c-r[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.man-f-c[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 12px;\n}\n\n.che-close-i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  color: var(--warm-grey);\n  cursor: pointer;\n  height: 18px !important;\n  width: 18px !important;\n}\n\n.che-f[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border-radius: 2px;\n  padding: 2px 4px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  color: var(--warm-grey);\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.che[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sub-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid var(--greyish) !important;\n\n}\n\n.sub-input-off[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  display: grid;\n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-input-off-d[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  \n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-table[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.sub-t-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-r[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-r-f[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  width: 100%;\n}\n\n.sub-t-r-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  min-width: 35px;\n  color: var(--warm-grey);\n  align-items: center;\n  justify-content: center;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  border: 0px;\n  color: var(--white);\n  background-color: var(--blue);\n  margin-top: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n\n.sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.sub-v-a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRGQUE0RjtFQUM1Rix3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDOztBQUU3Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXZpZXcvZWRpdC12aWV3L2VkaXQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1iIHtcbiAgYmFja2dyb3VuZDogIzA0MDQwNDg3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmhlYWRlci1yIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQsIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIC4wNyk7XG4gIHotaW5kZXg6IDk7XG4gIGNvbG9yOiAjNDk1MjY0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogN3B4IDVweDtcblxufVxuXG4uYm9keS1jIHtcbiAgaGVpZ2h0OiA4N3ZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvIDI1MHB4O1xufVxuXG4uZ3JvdXAtYyB7XG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2lsdmVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDBmO1xufVxuXG4uZ3JvdXAtYnRuIHtcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMwLCAxMzYsIDIyOSwgMSkgMCwgcmdiYSgxLCAxOTIsIDE5MiwgMSkgMTAwJSk7ICovXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIHJnYigzMCAxMzUgMjI5KSwgMCA2cHggN3B4IHJnYigzMCAxMzUgMjI5IC8gMzIlKTsgKi9cbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmdyb3VwLWJ0bi1vIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0OTUyNjQ7XG59XG5cbi5idG4tYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1iLW8ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb250ZW50LWMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5jb250ZW50LWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG59XG5cbi5maWVsZC1nIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCBhdXRvO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4uZmllbGQtaCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyYjJiMmJlMztcbn1cblxuLmlucHV0LWYge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNHB4IDVweDtcbn1cblxuLmlucHV0LWRhdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXRlLWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlci1nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucm93LWYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9vdGVyLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50LCAwIC0ycHggNnB4IHJnYmEoMCwgMCwgMCwgLjA3KTtcbiAgei1pbmRleDogOTtcbn1cblxuLmNyZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FuLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaC10d28pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpICFpbXBvcnRhbnQ7XG59XG5cbiN0YWJsZVZpZXdGaWxlTGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZGF0ZXRpbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGltZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXR0YWNobWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5hdHQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZS1saW5rIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0aXNoLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5maWxlLWxpbmstZiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGlzaC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uaW1hZ2UtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS1oIHtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5yZWQtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1jLXIge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4ubWFuLWYtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2hlLWNsb3NlLWkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZS1mIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2hlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc3ViLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleWlzaCkgIWltcG9ydGFudDtcblxufVxuXG4uc3ViLWlucHV0LW9mZiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uc3ViLWlucHV0LW9mZi1kIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG59XG5cbi5zdWItdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWItdC1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbn1cblxuLnN1Yi10LWgtdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtaC1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdC1yLWYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViLXQtci1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC1idG4ge1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItZS1yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xufVxuXG4uc3ViLXYtYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-view',
                templateUrl: './edit-view.component.html',
                styleUrls: ['./edit-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-view-edit-view-module.js.map