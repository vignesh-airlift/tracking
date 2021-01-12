(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-view-create-view-module"],{

/***/ "FFOT":
/*!******************************************************************!*\
  !*** ./src/app/create-view/create-view/create-view.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateViewComponent", function() { return CreateViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function CreateViewComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const group_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.groupId = group_r6.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.groupId == group_r6.id ? "group-btn" : "group-btn-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.groupId == group_r6.id ? "btn-b" : "btn-b-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r6.group_name, " ");
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r34.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r15.mandatoryField.includes(item_r13.name) && ctx_r15.createIsTrue == 1 && !ctx_r15.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r15.mandatoryField.includes(item_r13.name) && ctx_r15.createIsTrue == 1 && !ctx_r15.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r39.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r16.mandatoryField.includes(item_r13.name) && ctx_r16.createIsTrue == 1 && !ctx_r16.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r16.mandatoryField.includes(item_r13.name) && ctx_r16.createIsTrue == 1 && !ctx_r16.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r44.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_6_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r17.mandatoryField.includes(item_r13.name) && ctx_r17.createIsTrue == 1 && !ctx_r17.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r17.mandatoryField.includes(item_r13.name) && ctx_r17.createIsTrue == 1 && !ctx_r17.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r48.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r18.mandatoryField.includes(item_r13.name) && ctx_r18.createIsTrue == 1 && !ctx_r18.values[item_r13.name] ? "border-c-r" : "", "");
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_8_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r52.open(); })("dateChange", function CreateViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r56.formatDate(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_12_div_3_div_1_div_8_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return !!_r52 ? _r52.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_12_div_3_div_1_div_8_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r19.mandatoryField.includes(item_r13.name) && ctx_r19.createIsTrue == 1 && !ctx_r19.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r19.mandatoryField.includes(item_r13.name) && ctx_r19.createIsTrue == 1 && !ctx_r19.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_9_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r61.formatDateTime(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r20.mandatoryField.includes(item_r13.name) && ctx_r20.createIsTrue == 1 && !ctx_r20.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r20.mandatoryField.includes(item_r13.name) && ctx_r20.createIsTrue == 1 && !ctx_r20.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r66.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_10_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r21.mandatoryField.includes(item_r13.name) && ctx_r21.createIsTrue == 1 && !ctx_r21.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r21.mandatoryField.includes(item_r13.name) && ctx_r21.createIsTrue == 1 && !ctx_r21.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_11_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r71.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_11_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea ", !!ctx_r22.mandatoryField.includes(item_r13.name) && ctx_r22.createIsTrue == 1 && !ctx_r22.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r22.mandatoryField.includes(item_r13.name) && ctx_r22.createIsTrue == 1 && !ctx_r22.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_12_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_12_div_3_div_1_div_12_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r75.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_12_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r79.fileUpload($event, item_r13.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_12_div_3_div_1_div_12_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r23.storeFile[item_r13.name] == null ? null : ctx_r23.storeFile[item_r13.name].file_name, ".", ctx_r23.storeFile[item_r13.name] == null ? null : ctx_r23.storeFile[item_r13.name].file_extension, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r23.mandatoryField.includes(item_r13.name) && ctx_r23.createIsTrue == 1 && !ctx_r23.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_12_div_3_div_1_div_13_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r82.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_13_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r86.fileUpload($event, item_r13.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_12_div_3_div_1_div_13_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r24.storeFile[item_r13.name] == null ? null : ctx_r24.storeFile[item_r13.name].file_name, ".", ctx_r24.storeFile[item_r13.name] == null ? null : ctx_r24.storeFile[item_r13.name].file_extension, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r24.mandatoryField.includes(item_r13.name) && ctx_r24.createIsTrue == 1 && !ctx_r24.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_14_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r90.valueChanges(item_r13.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r25.mandatoryField.includes(item_r13.name) && ctx_r25.createIsTrue == 1 && !ctx_r25.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_15_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r95.valueChanges(item_r13.name, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_15_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r26.mandatoryField.includes(item_r13.name) && ctx_r26.createIsTrue == 1 && !ctx_r26.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r100.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_16_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r27.mandatoryField.includes(item_r13.name) && ctx_r27.createIsTrue == 1 && !ctx_r27.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r27.mandatoryField.includes(item_r13.name) && ctx_r27.createIsTrue == 1 && !ctx_r27.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_17_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r105.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_17_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r28.mandatoryField.includes(item_r13.name) && ctx_r28.createIsTrue == 1 && !ctx_r28.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r28.mandatoryField.includes(item_r13.name) && ctx_r28.createIsTrue == 1 && !ctx_r28.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r110.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_18_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r29.mandatoryField.includes(item_r13.name) && ctx_r29.createIsTrue == 1 && !ctx_r29.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r29.mandatoryField.includes(item_r13.name) && ctx_r29.createIsTrue == 1 && !ctx_r29.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_12_div_3_div_1_div_19_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r115.valueChanges(item_r13.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_19_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r30.mandatoryField.includes(item_r13.name) && ctx_r30.createIsTrue == 1 && !ctx_r30.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r30.mandatoryField.includes(item_r13.name) && ctx_r30.createIsTrue == 1 && !ctx_r30.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_20_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r121, " ");
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateViewComponent_div_0_div_12_div_3_div_1_div_20_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r122.valueChanges(item_r13.name, $event.value); })("valueChange", function CreateViewComponent_div_0_div_12_div_3_div_1_div_20_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r13.default_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_12_div_3_div_1_div_20_mat_option_2_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_12_div_3_div_1_div_20_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r31.mandatoryField.includes(item_r13.name) && ctx_r31.createIsTrue == 1 && !ctx_r31.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.option_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r31.mandatoryField.includes(item_r13.name) && ctx_r31.createIsTrue == 1 && !ctx_r31.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_21_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_12_div_3_div_1_div_21_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const option_r131 = ctx.$implicit; const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r132.valueChanges(item_r13.name, option_r131.id); return ctx_r132.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r131 = ctx.$implicit;
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r131[item_r13.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r131[item_r13.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_21_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateViewComponent_div_0_div_12_div_3_div_1_div_21_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r136.getDropdownValues(item_r13, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_12_div_3_div_1_div_21_mat_option_4_Template, 2, 2, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_12_div_3_div_1_div_21_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r32.mandatoryField.includes(item_r13.name) && ctx_r32.createIsTrue == 1 && !ctx_r32.values[item_r13.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r32.mandatoryField.includes(item_r13.name) && ctx_r32.createIsTrue == 1 && !ctx_r32.values[item_r13.name]);
} }
function CreateViewComponent_div_0_div_12_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_12_div_3_div_1_span_3_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_12_div_3_div_1_div_4_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_12_div_3_div_1_div_5_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_12_div_3_div_1_div_6_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_12_div_3_div_1_div_7_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_12_div_3_div_1_div_8_Template, 8, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_div_0_div_12_div_3_div_1_div_9_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateViewComponent_div_0_div_12_div_3_div_1_div_10_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_div_0_div_12_div_3_div_1_div_11_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_div_0_div_12_div_3_div_1_div_12_Template, 9, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_div_0_div_12_div_3_div_1_div_13_Template, 9, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateViewComponent_div_0_div_12_div_3_div_1_div_14_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateViewComponent_div_0_div_12_div_3_div_1_div_15_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateViewComponent_div_0_div_12_div_3_div_1_div_16_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateViewComponent_div_0_div_12_div_3_div_1_div_17_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateViewComponent_div_0_div_12_div_3_div_1_div_18_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateViewComponent_div_0_div_12_div_3_div_1_div_19_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateViewComponent_div_0_div_12_div_3_div_1_div_20_Template, 4, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateViewComponent_div_0_div_12_div_3_div_1_div_21_Template, 6, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r12.getWidth(item_r13.grid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r13.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.mandatory == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "select" && item_r13.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.field_sub_type == "select" && item_r13.parent_table_id != 0);
} }
function CreateViewComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_12_div_3_div_1_Template, 22, 22, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r11);
} }
function CreateViewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_12_div_3_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r9.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.metaDataTemp[group_r9.id]);
} }
function CreateViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateViewComponent_div_0_button_10_Template, 3, 7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_div_0_div_12_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx_r143.createValues(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create");
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
function CreateViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
function CreateViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_ng_template_2_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Mandatory Filed is Empty! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateViewComponent {
    constructor(route, aRouter, CommonService, dialog) {
        this.route = route;
        this.aRouter = aRouter;
        this.CommonService = CommonService;
        this.dialog = dialog;
        this.getBody = { table_name: "meta_field_group", limit: 20, page: 0, sort_type: "ASC", sort_field: "id", filter: [] };
        this.values = {};
        this.dropdownSearch = [];
        this.storeFile = {};
        this.mandatoryField = [];
        this.mandatoryIsTrue = 0;
        this.createIsTrue = 0;
    }
    ngOnInit() {
        this.aRouter.queryParams.subscribe((params) => {
            this.routeInfo = params;
            console.log("route", this.routeInfo);
            if (!!this.routeInfo) {
                this.getGroupInfo();
                this.getSubValues();
            }
        });
    }
    createDialog(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '300px',
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
    getMetaData() {
        let value = { table_name: this.routeInfo.tablename };
        this.CommonService.getMetaData(value).subscribe((response) => {
            this.metaData = response.info;
            console.log("meta", this.metaData);
            let col = [];
            for (let m = 0; m < this.metaData.length; m++) {
                col.push(this.metaData[m].name);
            }
            for (let m = 0; m < this.metaData.length; m++) {
                if (this.metaData[m].mandatory == 1) {
                    this.mandatoryField.push(this.metaData[m].name);
                }
            }
            console.log("mandatory", this.mandatoryField);
            console.log("col", col.toString());
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
                        if (this.metaData[j].default_value != '') {
                            this.values[this.metaData[j].name] = this.metaData[j].default_value;
                        }
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
            console.log("tempppp", temp);
            this.metaDataTemp = temp;
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
    getGroupInfo() {
        let temp = { table_id: this.routeInfo.id };
        this.getBody.filter.push(temp);
        this.CommonService.getValues(this.getBody).subscribe((response) => {
            this.groupInfo = response.info;
            console.log("group", this.groupInfo);
            this.getMetaData();
        });
    }
    getSubValues() {
        let body = {
            "limit": 100,
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
            console.log("drop", this.subTableInfo);
        });
    }
    getSubFields(tablename) {
        let body = {
            "limit": 100,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { "name": tablename }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.subFieldInfo = response.info;
            console.log("drop", this.subFieldInfo);
        });
    }
    createValues(mandatoryDia) {
        this.createIsTrue = 1;
        this.mandatoryIsTrue = this.mandatoryField.length;
        console.log("create", this.mandatoryIsTrue);
        for (let i = 0; i < this.mandatoryField.length; i++) {
            if (this.values.hasOwnProperty(this.mandatoryField[i])) {
                if (this.values[this.mandatoryField[i]] != "") {
                    this.mandatoryIsTrue--;
                }
            }
        }
        console.log("create", this.mandatoryIsTrue);
        if (this.mandatoryIsTrue == 0) {
            this.CommonService.createValues(this.values, this.routeInfo.tablename).subscribe((response) => {
                if (response.statusCode == 200) {
                    setTimeout(() => {
                        // Add tasks to do 
                        console.log("created");
                        let temp1 = Object.keys(this.storeFile);
                        for (let i = 0; i < temp1.length; i++) {
                            let temp = {};
                            let myDate = new Date();
                            temp["file_data"] = this.storeFile[temp1[i]].file_data;
                            temp["file_name"] = this.storeFile[temp1[i]].file_name + myDate;
                            temp["file_display"] = this.storeFile[temp1[i]].file_name;
                            temp["file_extension"] = this.storeFile[temp1[i]].file_extension;
                            temp["table_name"] = this.routeInfo.tablename;
                            temp["field_id"] = response.last_insert_id[0];
                            temp["field_name"] = temp1[i];
                            this.createFile(temp);
                        }
                        this.redirectDashBoard();
                    }, 10);
                }
            });
        }
        else {
            this.createDialog(mandatoryDia);
        }
    }
    createFile(value) {
        this.CommonService.createFile(value).subscribe((response) => {
            console.log("created");
        });
    }
    fileUpload(event, name) {
        console.log('response');
        this.CommonService.uploadFile(event).then((response) => {
            console.log(response, 'response');
            this.storeFile[name] = response[0];
            console.log(this.storeFile, 'response');
        });
    }
    valueChanges(name, value) {
        this.values[name] = value;
        console.log("values", this.values);
    }
    test(e) {
        console.log("eee", e);
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
CreateViewComponent.ɵfac = function CreateViewComponent_Factory(t) { return new (t || CreateViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
CreateViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateViewComponent, selectors: [["app-create-view"]], decls: 4, vars: 2, consts: [["class", "container-b", 4, "ngIf"], ["class", "position-r full-height", 4, "ngIf"], ["mandatoryDia", ""], [1, "container-b"], [1, "container"], [1, "header-r"], [1, "header-text"], [1, "icon-alignment", "cursor", 3, "click"], [1, "body-c"], [1, "group-c"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "footer-c"], [1, "can-btn", "cursor", 3, "click"], [1, "cre-btn", "cursor", 3, "click"], [3, "click"], [1, "content-group"], [1, "header-g"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], ["class", "field-g", 3, "width", 4, "ngFor", "ngForOf"], [1, "field-g"], [1, "field-h"], ["style", "color: red;", 4, "ngIf"], [4, "ngIf"], [2, "color", "red"], ["type", "text", 3, "change"], ["class", "man-f-c", 4, "ngIf"], [1, "man-f-c"], ["type", "password", 3, "change"], ["name", "email", 3, "change"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "click", "dateChange"], [1, "date-icon", 3, "click"], ["picker", ""], ["type", "datetime-local", 3, "change"], ["type", "time", 3, "change"], ["rows", "3", 3, "change"], [1, "attachment"], [1, "file-link"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 3, "change"], ["file", ""], ["type", "file", "id", "tableViewFileLabel", "accept", "image/*", 3, "change"], ["image", ""], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "change"], ["type", "number", 3, "change"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "matAutocomplete", "input"], ["autosetect", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "position-r", "full-height"], [1, "spinner", "spin-class", 3, "diameter"], [2, "display", "grid"], [1, "dialog-h"], [1, "dialog-c", 3, "click"]], template: function CreateViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateViewComponent_div_0_Template, 19, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_ng_template_2_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], styles: [".container-b[_ngcontent-%COMP%] {\n  background: #04040487;\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  background: #fff;\n  position: fixed;\n  left: 10px;\n  top: 10px;\n}\n\n.header-r[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 transparent, 0 3px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n  color: #495264;\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto -webkit-max-content;\n  grid-template-columns: auto max-content;\n  align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 7px 5px;\n\n}\n\n.body-c[_ngcontent-%COMP%] {\n  height: 87vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 250px auto 250px;\n}\n\n.group-c[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  border: 1px solid var(--silver);\n  background-color: #b0b0b00f;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  \n  \n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--blue);\n  background-color: var(--white);\n}\n\n.group-btn-o[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #495264;\n}\n\n.btn-b[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid var(--blue);\n  display: flex;\n  border-radius: 2px;\n}\n\n.btn-b-o[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid transparent;\n  display: flex;\n  border-radius: 2px;\n}\n\n.content-c[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-sizing: border-box;\n  display: grid;\n  overflow: auto;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 20px;\n  margin: 10px 0px;\n}\n\n.content-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-gap: 5px;\n}\n\n.field-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2b2b2be3;\n}\n\n.input-f[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 4px 5px;\n}\n\n.input-date[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.date-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-g[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed var(--pinkish-grey);\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: var(--blue);\n  padding-bottom: 5px;\n}\n\n.row-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 12px 10px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n}\n\n.cre-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n.can-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n#tableViewFileLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n}\n\n.spin-class[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.red-c[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.border-c-r[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.man-f-c[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 12px;\n}\n\n.dialog-h[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: right;\n  align-items: center;\n}\n\n.dialog-c[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  font-size: 20px;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXZpZXcvY3JlYXRlLXZpZXcvY3JlYXRlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRGQUE0RjtFQUM1Rix3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWIge1xuICBiYWNrZ3JvdW5kOiAjMDQwNDA0ODc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uaGVhZGVyLXIge1xuICBib3gtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudCwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjA3KTtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6ICM0OTUyNjQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtYXgtY29udGVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA3cHggNXB4O1xuXG59XG5cbi5ib2R5LWMge1xuICBoZWlnaHQ6IDg3dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG8gMjUwcHg7XG59XG5cbi5ncm91cC1jIHtcbiAgLyogYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwMGY7XG59XG5cbi5ncm91cC1idG4ge1xuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzAsIDEzNiwgMjI5LCAxKSAwLCByZ2JhKDEsIDE5MiwgMTkyLCAxKSAxMDAlKTsgKi9cbiAgLyogYm94LXNoYWRvdzogMCAwIDAgcmdiKDMwIDEzNSAyMjkpLCAwIDZweCA3cHggcmdiKDMwIDEzNSAyMjkgLyAzMiUpOyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZ3JvdXAtYnRuLW8ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQ5NTI2NDtcbn1cblxuLmJ0bi1iIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuLWItbyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNvbnRlbnQtYyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmNvbnRlbnQtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLmZpZWxkLWcge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG87XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5maWVsZC1oIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzJiMmIyYmUzO1xufVxuXG4uaW5wdXQtZiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi5pbnB1dC1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA0cHggNXB4O1xufVxuXG4uaW5wdXQtZGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhdGUtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyLWcge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5yb3ctZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb290ZXItYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQsIDAgLTJweCA2cHggcmdiYSgwLCAwLCAwLCAuMDcpO1xuICB6LWluZGV4OiA5O1xufVxuXG4uY3JlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI3RhYmxlVmlld0ZpbGVMYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdHRhY2htZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDVweDtcbn1cblxuLmF0dC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLWxpbmsge1xuICBjb2xvcjogdmFyKC0tbGlnaHRpc2gtYmx1ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3Bpbi1jbGFzcyB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnJlZC1jIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWMtciB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5tYW4tZi1jIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaWFsb2ctaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctYyB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-view',
                templateUrl: './create-view.component.html',
                styleUrls: ['./create-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "KqBE":
/*!***********************************************************!*\
  !*** ./src/app/create-view/create-view-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateViewRoutingModule", function() { return CreateViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-view/create-view.component */ "FFOT");





const routes = [
    {
        path: '',
        component: _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_2__["CreateViewComponent"]
    }
];
class CreateViewRoutingModule {
}
CreateViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateViewRoutingModule });
CreateViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateViewRoutingModule_Factory(t) { return new (t || CreateViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TE7Q":
/*!***************************************************!*\
  !*** ./src/app/create-view/create-view.module.ts ***!
  \***************************************************/
/*! exports provided: CreateViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateViewModule", function() { return CreateViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _create_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-view-routing.module */ "KqBE");
/* harmony import */ var _create_view_create_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-view/create-view.component */ "FFOT");
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");


























class CreateViewModule {
}
CreateViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateViewModule });
CreateViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateViewModule_Factory(t) { return new (t || CreateViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _create_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateViewRoutingModule"],
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
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateViewModule, { declarations: [_create_view_create_view_component__WEBPACK_IMPORTED_MODULE_4__["CreateViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _create_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateViewRoutingModule"],
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
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_view_create_view_component__WEBPACK_IMPORTED_MODULE_4__["CreateViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _create_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateViewRoutingModule"],
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
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-view-create-view-module.js.map