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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r32.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r13.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r36.valueChanges(item_r11.name, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r39.editValues[item_r11.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r14.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r42.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r15.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r46.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r16.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r50.open(); })("dateChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r53.formatDate(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return !!_r50 ? _r50.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r50)("value", ctx_r17.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r57.formatDateTime(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r18.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r61.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r65.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r69.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r21.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r73.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r76.fileUpload($event, item_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r22.editValues[item_r11.name] != "" ? ctx_r22.editValues[item_r11.name] == null ? null : ctx_r22.editValues[item_r11.name].file_url : ctx_r22.storeFileUrl[item_r11.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.editValues[item_r11.name] != "" ? ctx_r22.editValues[item_r11.name] == null ? null : ctx_r22.editValues[item_r11.name].file_name : ctx_r22.storeFile[item_r11.name] == null ? null : ctx_r22.storeFile[item_r11.name].file_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r22.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r79.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r82.fileUpload($event, item_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r23.editValues[item_r11.name] != "" ? ctx_r23.editValues[item_r11.name] == null ? null : ctx_r23.editValues[item_r11.name].file_url : ctx_r23.storeFileUrl[item_r11.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r23.editValues[item_r11.name] != "" ? ctx_r23.editValues[item_r11.name] == null ? null : ctx_r23.editValues[item_r11.name].file_url : ctx_r23.storeFile[item_r11.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r85.valueChanges(item_r11.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r24.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r89.valueChanges(item_r11.name, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r25.editValues[item_r11.name] == 1);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r93.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r26.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r97.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r101.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r28.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r105.valueChanges(item_r11.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r29.editValues[item_r11.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r110, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r111.valueChanges(item_r11.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_21_mat_option_2_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r30.editValues[item_r11.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r11.option_list);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_22_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const option_r117 = ctx.$implicit; const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r118.valueChanges(item_r11.name, option_r117.id); return ctx_r118.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r117 = ctx.$implicit;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r117[item_r11.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r117[item_r11.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r122.getDropdownValues(item_r11, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r125.editValues[item_r11.name].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_22_mat_option_4_Template, 2, 2, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r115)("value", ctx_r31.editValues[item_r11.name].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.dropdownSearch);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_span_3_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template, 7, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template, 9, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template, 8, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template, 5, 3, "div", 24);
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
} }
function EditViewComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_Template, 23, 23, "div", 20);
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
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.redirectDashBoard(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.updateValues(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 56);
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
    getValues() {
        let temp = { id: this.routeInfo.rowid, tableId: this.routeInfo.id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            console.log("log", response.info[0]);
            for (let i = 0; i < this.attachFile.length; i++) {
                if (response.info[0].hasOwnProperty(this.attachFile[i])) {
                    if (response.info[0][this.attachFile[i]] != "") {
                        response.info[0][this.attachFile[i]] = JSON.parse(response.info[0][this.attachFile[i]]);
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
    createFile() {
        let temp1 = Object.keys(this.storeFile);
        for (let i = 0; i < temp1.length; i++) {
            let temp = {};
            let myDate = new Date();
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
    fileUpload(event, name) {
        console.log('responsezdfbk', event);
        this.CommonService.uploadFile(event).then((response) => {
            console.log(response, 'response');
            this.storeFile[name] = response[0];
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
    updateValues() {
        this.CommonService.putColumns(this.values, this.routeInfo.tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                setTimeout(() => {
                    this.createFile();
                    this.redirectDashBoard();
                }, 10);
            }
        });
    }
    valueChanges(name, value) {
        this.values[name] = value;
        console.log("value", this.values);
    }
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
    getWidth(grid) {
        return `calc( ${grid}% - 30px)`;
    }
    redirectDashBoard() {
        this.route.navigate(['/dashboard/view', this.routeInfo.tablename], { queryParams: { id: this.routeInfo.id, tablename: this.routeInfo.tablename } });
    }
}
EditViewComponent.ɵfac = function EditViewComponent_Factory(t) { return new (t || EditViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
EditViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditViewComponent, selectors: [["app-edit-view"]], decls: 2, vars: 2, consts: [["class", "container-b", 4, "ngIf"], ["class", "position-r full-height", 4, "ngIf"], [1, "container-b"], [1, "container"], [1, "header-r"], [1, "header-text"], [1, "icon-alignment", "cursor", 3, "click"], [1, "body-c"], [1, "group-c"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "footer-c"], [1, "can-btn", "cursor", 3, "click"], [1, "cre-btn", "cursor", 3, "click"], [3, "click"], [1, "content-group"], [1, "header-g"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], ["class", "field-g", 3, "width", 4, "ngFor", "ngForOf"], [1, "field-g"], [1, "field-h"], ["style", "color: red;", 4, "ngIf"], [4, "ngIf"], [2, "color", "red"], ["type", "text", 1, "input-f", 3, "value", "change"], ["type", "password", 1, "input-f", 3, "value", "change", "valueChange"], [1, "input-date"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "value", "click", "dateChange"], [1, "date-icon", 3, "click"], ["picker", ""], ["type", "datetime-local", "placeholder", "Choose a date", 3, "value", "change"], ["type", "time", "placeholder", "Choose a time", 3, "value", "change"], ["rows", "3", 1, "input-textarea", 3, "value", "change"], [1, "attachment"], ["target", "_blank", 3, "href"], [1, "file-link"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 1, "input-f", 3, "value", "change"], ["file", ""], ["target", "_blank", 1, "image-b", 3, "href"], ["alt", "Image", 1, "image-h", 3, "src"], ["type", "file", "id", "tableViewFileLabel", "accept", "image/*", 3, "change"], ["image", ""], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 1, "input-f", 3, "value", "change"], [1, "input-select", 3, "placeholder", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 1, "input-f", 3, "matAutocomplete", "value", "input", "valueChange"], ["autosetect", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "position-r", "full-height"], [1, "spinner", "spin-class", 3, "diameter"]], template: function EditViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditViewComponent_div_0_Template, 19, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp && !!ctx.editValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp && ctx.editValues));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: [".container-b[_ngcontent-%COMP%] {\n  background: #04040487;\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  background: #fff;\n  position: fixed;\n  left: 10px;\n  top: 10px;\n}\n\n.header-r[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 transparent, 0 3px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n  color: #495264;\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto -webkit-max-content;\n  grid-template-columns: auto max-content;\n  align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 7px 5px;\n\n}\n\n.body-c[_ngcontent-%COMP%] {\n  height: 87vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 250px auto 250px;\n}\n\n.group-c[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  border: 1px solid var(--silver);\n  background-color: #b0b0b00f;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  \n  \n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--blue);\n  background-color: var(--white);\n}\n\n.group-btn-o[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #495264;\n}\n\n.btn-b[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid var(--blue);\n  display: flex;\n  border-radius: 2px;\n}\n\n.btn-b-o[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid transparent;\n  display: flex;\n  border-radius: 2px;\n}\n\n.content-c[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-sizing: border-box;\n  display: grid;\n  overflow: auto;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 20px;\n  margin: 10px 0px;\n}\n\n.content-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-gap: 5px;\n}\n\n.field-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2b2b2be3;\n}\n\n.input-f[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 4px 5px;\n}\n\n.input-date[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.date-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-g[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed var(--pinkish-grey);\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: var(--blue);\n  padding-bottom: 5px;\n}\n\n.row-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 12px 10px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n}\n\n.cre-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n.can-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n  .mat-select-placeholder {\n  color: var(--warm-grey) !important;\n}\n\n#tableViewFileLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#datetime[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#times[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: grid;\n  height: 28px;\n  align-items: center;\n}\n\n.image-b[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-h[_ngcontent-%COMP%]{\n  width: 35px !important;\n  height: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRGQUE0RjtFQUM1Rix3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdmlldy9lZGl0LXZpZXcvZWRpdC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWIge1xuICBiYWNrZ3JvdW5kOiAjMDQwNDA0ODc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLXIge1xuICBib3gtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudCwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjA3KTtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6ICM0OTUyNjQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtYXgtY29udGVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA3cHggNXB4O1xuXG59XG5cbi5ib2R5LWMge1xuICBoZWlnaHQ6IDg3dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG8gMjUwcHg7XG59XG5cbi5ncm91cC1jIHtcbiAgLyogYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwMGY7XG59XG5cbi5ncm91cC1idG4ge1xuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzAsIDEzNiwgMjI5LCAxKSAwLCByZ2JhKDEsIDE5MiwgMTkyLCAxKSAxMDAlKTsgKi9cbiAgLyogYm94LXNoYWRvdzogMCAwIDAgcmdiKDMwIDEzNSAyMjkpLCAwIDZweCA3cHggcmdiKDMwIDEzNSAyMjkgLyAzMiUpOyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZ3JvdXAtYnRuLW8ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQ5NTI2NDtcbn1cblxuLmJ0bi1iIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuLWItbyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNvbnRlbnQtYyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmNvbnRlbnQtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLmZpZWxkLWcge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG87XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5maWVsZC1oIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzJiMmIyYmUzO1xufVxuXG4uaW5wdXQtZiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi5pbnB1dC1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA0cHggNXB4O1xufVxuXG4uaW5wdXQtZGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhdGUtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyLWcge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5yb3ctZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb290ZXItYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQsIDAgLTJweCA2cHggcmdiYSgwLCAwLCAwLCAuMDcpO1xuICB6LWluZGV4OiA5O1xufVxuXG4uY3JlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSkgIWltcG9ydGFudDtcbn1cblxuI3RhYmxlVmlld0ZpbGVMYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNkYXRldGltZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0aW1lcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdHRhY2htZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDVweDtcbn1cblxuLmF0dC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLWxpbmsge1xuICBjb2xvcjogdmFyKC0tbGlnaHRpc2gtYmx1ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1iIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlLWh7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
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