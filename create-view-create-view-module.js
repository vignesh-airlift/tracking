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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
















const _c0 = ["sidecreate"];
function CreateViewComponent_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const group_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r10.groupId = group_r9.id; return ctx_r10.scrollGroup(group_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.groupId == group_r9.id ? "group-btn" : "group-btn-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.groupId == group_r9.id ? "btn-b" : "btn-b-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r9.group_name);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16 == null ? null : item_r16.display_name);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16 == null ? null : item_r16.field_title);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_5_div_1_Template_mat_checkbox_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const val_r60 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r61.radioValueChange(item_r16.name, val_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r60 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r59.d_advanced[item_r16 == null ? null : item_r16.name] === val_r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r60, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_5_div_1_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16 == null ? null : item_r16.option_list);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r66.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r66.createIsTrue == 1 && !ctx_r66.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_6_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r70.valueChanges(item_r16 == null ? null : item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r67.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r67.createIsTrue == 1 && !ctx_r67.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r67.values[item_r16 == null ? null : item_r16.name])("disabled", item_r16[ctx_r67.userData.designation] == 1 || ctx_r67.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_6_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_6_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_6_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r21.userData.designation] == 1 || ctx_r21.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r21.userData.designation] != 1 && ctx_r21.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r21.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r21.createIsTrue == 1 && !ctx_r21.values[item_r16 == null ? null : item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_7_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_7_mat_icon_4_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r22.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r22.createIsTrue == 1 && !ctx_r22.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.values[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_8_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_8_span_2_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_8_span_3_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_8_mat_icon_4_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r23.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r23.createIsTrue == 1 && !ctx_r23.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.values[item_r16.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.values[item_r16.name] == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate_switch");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_9_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_9_mat_icon_4_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r24.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r24.createIsTrue == 1 && !ctx_r24.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.editValues[item_r16 == null ? null : item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_10_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_10_span_6_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r25.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r25.createIsTrue == 1 && !ctx_r25.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.values[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r25.mandatoryField.includes(item_r16.name) && ctx_r25.createIsTrue == 1 && !ctx_r25.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r85.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r85.createIsTrue == 1 && !ctx_r85.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r85.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r90.checkUniqueValues(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r86.mandatoryField.includes(item_r16.name) && ctx_r86.createIsTrue == 1 && !ctx_r86.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r86.values[item_r16.name])("disabled", item_r16[ctx_r86.userData.designation] == 1 || ctx_r86.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_11_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_11_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_11_span_3_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_11_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r26.userData.designation] == 1 || ctx_r26.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r26.userData.designation] != 1 && ctx_r26.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.uniqueField[item_r16.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r26.mandatoryField.includes(item_r16.name) && ctx_r26.createIsTrue == 1 && !ctx_r26.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r95.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r95.createIsTrue == 1 && !ctx_r95.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r95.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r100.valueChanges(item_r16.name, $event.target.value); })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r103.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r96.mandatoryField.includes(item_r16.name) && ctx_r96.createIsTrue == 1 && !ctx_r96.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r96.values[item_r16.name])("disabled", item_r16[ctx_r96.userData.designation] == 1 || ctx_r96.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_12_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_12_input_2_Template, 1, 6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_12_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_12_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r27.userData.designation] == 1 || ctx_r27.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r27.userData.designation] != 1 && ctx_r27.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r27.mandatoryField.includes(item_r16.name) && ctx_r27.createIsTrue == 1 && !ctx_r27.values[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.emailValidate);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r106.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r106.createIsTrue == 1 && !ctx_r106.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r106.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r112.checkUniqueValues(item_r16.name, $event.target.value); })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r115.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r107.mandatoryField.includes(item_r16.name) && ctx_r107.createIsTrue == 1 && !ctx_r107.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r107.values[item_r16.name])("disabled", item_r16[ctx_r107.userData.designation] == 1 || ctx_r107.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_input_2_Template, 1, 6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_4_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_span_5_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r28.userData.designation] == 1 || ctx_r28.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r28.userData.designation] != 1 && ctx_r28.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r28.mandatoryField.includes(item_r16.name) && ctx_r28.createIsTrue == 1 && !ctx_r28.values[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.uniqueField[item_r16.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r28.emailValidate);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_14_span_6_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r29.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r29.createIsTrue == 1 && !ctx_r29.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.values[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r29.mandatoryField.includes(item_r16.name) && ctx_r29.createIsTrue == 1 && !ctx_r29.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_15_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_15_span_6_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r30.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r30.createIsTrue == 1 && !ctx_r30.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.userPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r30.mandatoryField.includes(item_r16.name) && ctx_r30.createIsTrue == 1 && !ctx_r30.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r122.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r122.createIsTrue == 1 && !ctx_r122.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r122.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_16_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_16_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r126.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r123.mandatoryField.includes(item_r16.name) && ctx_r123.createIsTrue == 1 && !ctx_r123.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r123.values[item_r16.name])("disabled", item_r16[ctx_r123.userData.designation] == 1 || ctx_r123.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_16_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_16_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_16_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r31.userData.designation] == 1 || ctx_r31.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r31.userData.designation] != 1 && ctx_r31.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r31.mandatoryField.includes(item_r16.name) && ctx_r31.createIsTrue == 1 && !ctx_r31.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r131.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r131.createIsTrue == 1 && !ctx_r131.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r131.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_2_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r135.open(); })("dateChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_2_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r138.formatDate(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_2_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return !!_r135 ? _r135.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r132.mandatoryField.includes(item_r16.name) && ctx_r132.createIsTrue == 1 && !ctx_r132.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, ctx_r132.values[item_r16.name], "MMM d,y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r135)("value", ctx_r132.values[item_r16.name])("disabled", item_r16[ctx_r132.userData.designation] == 1 || ctx_r132.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_17_div_2_Template, 9, 11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_17_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r32.userData.designation] == 1 || ctx_r32.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r32.userData.designation] != 1 && ctx_r32.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r32.mandatoryField.includes(item_r16.name) && ctx_r32.createIsTrue == 1 && !ctx_r32.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r33.values.last_modified_on, "MMM d, y, h:mm:ss a"), " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r143.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r143.createIsTrue == 1 && !ctx_r143.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r143.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_19_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_19_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r147.formatDateTime(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r144.mandatoryField.includes(item_r16.name) && ctx_r144.createIsTrue == 1 && !ctx_r144.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r16[ctx_r144.userData.designation] == 1 || ctx_r144.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true :  false || item_r16.name === "created_on" || item_r16.name === "last_modified_on");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_19_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_19_input_2_Template, 1, 5, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_19_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r34.userData.designation] == 1 || ctx_r34.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r34.userData.designation] != 1 && ctx_r34.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r34.mandatoryField.includes(item_r16.name) && ctx_r34.createIsTrue == 1 && !ctx_r34.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r152.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r152.createIsTrue == 1 && !ctx_r152.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r152.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_20_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_20_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r156.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r153.mandatoryField.includes(item_r16.name) && ctx_r153.createIsTrue == 1 && !ctx_r153.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r153.values[item_r16.name])("disabled", item_r16[ctx_r153.userData.designation] == 1 || ctx_r153.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_20_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_20_input_2_Template, 1, 6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_20_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r35.userData.designation] == 1 || ctx_r35.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r35.userData.designation] != 1 && ctx_r35.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r35.mandatoryField.includes(item_r16.name) && ctx_r35.createIsTrue == 1 && !ctx_r35.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_21_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r162.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_21_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", item_r16[ctx_r36.userData.designation] == 1 ? "input-textarea-dis" : "input-textarea", " ", !!ctx_r36.mandatoryField.includes(item_r16.name) && ctx_r36.createIsTrue == 1 && !ctx_r36.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r36.values[item_r16.name])("disabled", item_r16[ctx_r36.userData.designation] == 1 || (ctx_r36.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false) || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r36.mandatoryField.includes(item_r16.name) && ctx_r36.createIsTrue == 1 && !ctx_r36.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_2_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173); const i_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r171.deleteFile(item_r16.name, i_r169); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_2_mat_icon_2_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r168 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r168 == null ? null : file_r168.file_name, ".", file_r168 == null ? null : file_r168.file_extension, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r166.storeFile[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_2_Template, 3, 3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_22_span_5_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.storeFile[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r37.mandatoryField.includes(item_r16.name) && ctx_r37.createIsTrue == 1 && !ctx_r37.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_2_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const i_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r182.deleteFile(item_r16.name, i_r180); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_2_mat_icon_2_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r179 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r179 == null ? null : file_r179.file_name, ".", file_r179 == null ? null : file_r179.file_extension, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r177.storeFile[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_2_Template, 3, 3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_23_span_5_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.storeFile[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r38.mandatoryField.includes(item_r16.name) && ctx_r38.createIsTrue == 1 && !ctx_r38.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_24_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r189.valueChanges(item_r16.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_24_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r39.values[item_r16.name])("disabled", item_r16[ctx_r39.userData.designation] == 1 || (ctx_r39.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false) || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r39.mandatoryField.includes(item_r16.name) && ctx_r39.createIsTrue == 1 && !ctx_r39.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_25_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_25_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r194.switchvalueChanges(item_r16.name, $event.checked ? 1 : 0, item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_25_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r16[ctx_r40.userData.designation] == 1 || (ctx_r40.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false) || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r40.mandatoryField.includes(item_r16.name) && ctx_r40.createIsTrue == 1 && !ctx_r40.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r198.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r198.createIsTrue == 1 && !ctx_r198.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r198.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_26_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_26_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r202.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r199.mandatoryField.includes(item_r16.name) && ctx_r199.createIsTrue == 1 && !ctx_r199.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r199.values[item_r16.name])("disabled", item_r16[ctx_r199.userData.designation] == 1 || ctx_r199.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_26_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_26_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_26_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r41.userData.designation] == 1 || ctx_r41.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r41.userData.designation] != 1 && ctx_r41.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r41.mandatoryField.includes(item_r16.name) && ctx_r41.createIsTrue == 1 && !ctx_r41.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r207.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r207.createIsTrue == 1 && !ctx_r207.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r207.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_27_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_27_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r211.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r208.mandatoryField.includes(item_r16.name) && ctx_r208.createIsTrue == 1 && !ctx_r208.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r208.values[item_r16.name])("disabled", item_r16[ctx_r208.userData.designation] == 1 || ctx_r208.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_27_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_27_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_27_input_2_Template, 1, 6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_27_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r42.userData.designation] == 1 || ctx_r42.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r42.userData.designation] != 1 && ctx_r42.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r42.mandatoryField.includes(item_r16.name) && ctx_r42.createIsTrue == 1 && !ctx_r42.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r216.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r216.createIsTrue == 1 && !ctx_r216.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r216.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_28_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_28_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r220.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r217.mandatoryField.includes(item_r16.name) && ctx_r217.createIsTrue == 1 && !ctx_r217.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r217.values[item_r16.name])("disabled", item_r16[ctx_r217.userData.designation] == 1 || ctx_r217.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_28_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_28_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_28_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r43.userData.designation] == 1 || ctx_r43.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r43.userData.designation] != 1 && ctx_r43.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r43.mandatoryField.includes(item_r16.name) && ctx_r43.createIsTrue == 1 && !ctx_r43.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r225.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r225.createIsTrue == 1 && !ctx_r225.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r225.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_29_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_29_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r229.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r226.mandatoryField.includes(item_r16.name) && ctx_r226.createIsTrue == 1 && !ctx_r226.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r226.values[item_r16.name])("disabled", item_r16[ctx_r226.userData.designation] == 1 || ctx_r226.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_29_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_29_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_29_input_2_Template, 1, 6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_29_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r44.userData.designation] == 1 || ctx_r44.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r44.userData.designation] != 1 && ctx_r44.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r44.mandatoryField.includes(item_r16.name) && ctx_r44.createIsTrue == 1 && !ctx_r44.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r234.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r234.createIsTrue == 1 && !ctx_r234.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r234.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_mat_select_2_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r239, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_mat_select_2_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r240.valueChanges(item_r16.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_30_mat_select_2_mat_option_1_Template, 2, 2, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r235.mandatoryField.includes(item_r16.name) && ctx_r235.createIsTrue == 1 && !ctx_r235.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r235.values[item_r16.name])("disabled", item_r16[ctx_r235.userData.designation] == 1 || ctx_r235.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16.option_list);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_30_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_30_mat_select_2_Template, 2, 6, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_30_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r45.userData.designation] == 1 || ctx_r45.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r45.userData.designation] != 1 && ctx_r45.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r45.mandatoryField.includes(item_r16.name) && ctx_r45.createIsTrue == 1 && !ctx_r45.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r245.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r245.createIsTrue == 1 && !ctx_r245.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r245.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_mat_select_2_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r250, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_mat_select_2_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r251.valueChanges(item_r16.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_31_mat_select_2_mat_option_1_Template, 2, 2, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r246.mandatoryField.includes(item_r16.name) && ctx_r246.createIsTrue == 1 && !ctx_r246.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r246.values[item_r16.name])("disabled", item_r16[ctx_r246.userData.designation] == 1 || ctx_r246.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r246.numberSelect[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_31_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_31_mat_select_2_Template, 2, 6, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_31_span_3_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r46.userData.designation] == 1 || ctx_r46.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r46.userData.designation] != 1 && ctx_r46.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r46.mandatoryField.includes(item_r16.name) && ctx_r46.createIsTrue == 1 && !ctx_r46.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r256.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r256.createIsTrue == 1 && !ctx_r256.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r256.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_input_2_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); ctx_r263.subdro = []; return ctx_r263.dropdownSearch = []; })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r264); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r265.getDropdownValues(item_r16, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r257.mandatoryField.includes(item_r16.name) && ctx_r257.createIsTrue == 1 && !ctx_r257.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r258)("value", ctx_r257.editValues[item_r16.name])("disabled", item_r16[ctx_r257.userData.designation] == 1 || ctx_r257.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_mat_option_5_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const option_r268 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r269.dropDownvalueChanges(item_r16.name, option_r268.id, item_r16); ctx_r269.dropdownSearch = []; ctx_r269.advancedSameAs[item_r16.name] = option_r268[item_r16.parent_table_field]; return ctx_r269.relativeFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r268 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r268[item_r16.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r268[item_r16.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r16.depended_field, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_input_2_Template, 1, 7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_mat_option_5_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_span_6_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_span_7_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r47.userData.designation] == 1 || ctx_r47.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r47.userData.designation] != 1 && ctx_r47.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r47.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.depended[item_r16.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r47.mandatoryField.includes(item_r16.name) && ctx_r47.createIsTrue == 1 && !ctx_r47.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_33_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r16.depended_field, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_33_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_33_span_6_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_33_span_7_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r48.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r48.createIsTrue == 1 && !ctx_r48.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.editValues[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.depended[item_r16.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r48.mandatoryField.includes(item_r16.name) && ctx_r48.createIsTrue == 1 && !ctx_r48.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r279.mandatoryField.includes(item_r16 == null ? null : item_r16.name) && ctx_r279.createIsTrue == 1 && !ctx_r279.values[item_r16 == null ? null : item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r279.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_input_2_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); ctx_r286.subdro = []; return ctx_r286.dropdownSearch = []; })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_input_2_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r288.getTable(item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r280.mandatoryField.includes(item_r16.name) && ctx_r280.createIsTrue == 1 && !ctx_r280.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r281)("value", ctx_r280.values[item_r16.name])("disabled", item_r16[ctx_r280.userData.designation] == 1 || ctx_r280.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_mat_option_5_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const s_r292 = ctx.index; const option_r291 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r293.values[item_r16.name] = ctx_r293.subdro[s_r292][item_r16.master_field]; ctx_r293.dropdownSearch = []; ctx_r293.advancedSameAs[item_r16.name] = option_r291[item_r16.parent_table_field]; return ctx_r293.relativeFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r291 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r291[item_r16.master_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r291[item_r16.master_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r16.depended_field, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_div_1_Template, 5, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_input_2_Template, 1, 7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_mat_option_5_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_span_6_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_span_7_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r49.userData.designation] == 1 || ctx_r49.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r49.userData.designation] != 1 && ctx_r49.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r49.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.depended[item_r16.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r49.mandatoryField.includes(item_r16.name) && ctx_r49.createIsTrue == 1 && !ctx_r49.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_35_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_35_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r302); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r300.valueChanges(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_35_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea-dis ", !!ctx_r50.mandatoryField.includes(item_r16.name) && ctx_r50.createIsTrue == 1 && !ctx_r50.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r50.values[item_r16.name])("disabled", true)("value", ctx_r50.editValues[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r50.mandatoryField.includes(item_r16.name) && ctx_r50.createIsTrue == 1 && !ctx_r50.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_36_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r309); const i_r306 = ctx.index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r307.removeCheckListForValue(item_r16.name, i_r306); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r305 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r305);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_36_div_2_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CreateViewComponent_div_0_div_13_div_5_div_1_div_36_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r310.checkListForSelect(item_r16.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.checkList[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_37_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r320); const i_r317 = ctx.index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r318.removeCheckListForValue(item_r16.name, i_r317); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r316 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r316);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_37_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_37_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324); const option_r321 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r322.checkListForSelect(item_r16.name, option_r321); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r321 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r321);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r321, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_37_div_2_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_37_mat_option_4_Template, 2, 2, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.checkList[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16.option_list);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r334); const i_r331 = ctx.index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r332.removeCheckList(item_r16.name, i_r331); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r330 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r330[item_r16.parent_table_field]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r339); const option_r336 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r337.checkListValueChanges(item_r16.name, option_r336, item_r16); return ctx_r337.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r336 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r336[item_r16.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_38_div_3_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r341.subdro = []; return ctx_r341.dropdownSearch = []; })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_38_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r343.getDropdownValues(item_r16, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_13_div_5_div_1_div_38_mat_option_8_Template, 2, 1, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_div_0_div_13_div_5_div_1_div_38_span_9_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r53.mandatoryField.includes(item_r16.name) && ctx_r53.createIsTrue == 1 && !ctx_r53.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.checkListName[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r327)("disabled", item_r16[ctx_r53.userData.designation] == 1 || ctx_r53.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r53.mandatoryField.includes(item_r16.name) && ctx_r53.createIsTrue == 1 && !ctx_r53.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.userData.user_name, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 101);
} if (rf & 2) {
    const ches_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ches_r351.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r358); const i_r352 = ctx.index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r356.removeCheckList(item_r16.name, i_r352); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_img_2_Template, 1, 0, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_img_3_Template, 1, 1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r351 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r351.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r351.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r351[item_r16.parent_table_field]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_div_2_Template, 7, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r346.mandatoryField.includes(item_r16.name) && ctx_r346.createIsTrue == 1 && !ctx_r346.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r346.checkListName[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 101);
} if (rf & 2) {
    const ches_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ches_r365.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r372); const i_r366 = ctx.index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r370.removeCheckList(item_r16.name, i_r366); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_img_2_Template, 1, 0, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_img_3_Template, 1, 1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r365 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r365.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r365.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r365[item_r16.parent_table_field]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_input_4_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r374.getUserValues(item_r16, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r16 == null ? null : item_r16.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r363)("disabled", item_r16[ctx_r362.userData.designation] == 1 || ctx_r362.computationStaField[item_r16 == null ? null : item_r16.name] == 1 ? true :  false || item_r16.name === "created_by" || item_r16.name === "last_modified_by")("value", ctx_r362.editValues[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", option_r378 == null ? null : option_r378.photo[0] == null ? null : option_r378.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r384); const option_r378 = ctx.$implicit; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r382.checkListValueChanges(item_r16.name, option_r378, item_r16); return ctx_r382.userSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_img_2_Template, 1, 0, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_span_3_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r378 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r378.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r378.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r378.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r378.user_name, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_div_2_Template, 7, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_input_4_Template, 1, 4, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_mat_option_7_Template, 5, 4, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r347.mandatoryField.includes(item_r16.name) && ctx_r347.createIsTrue == 1 && !ctx_r347.values[item_r16.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r347.checkListName[item_r16.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r347.userData.designation] != 1 && item_r16.name !== "created_by" && item_r16.name !== "last_modified_by" && ctx_r347.computationStaField[item_r16 == null ? null : item_r16.name] == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r347.userSearch);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r16.depended_field, "");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_1_Template, 3, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_div_2_Template, 8, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_span_3_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_span_4_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r55.userData.designation] == 1 || item_r16.name === "created_by" || item_r16.name === "last_modified_by" || ctx_r55.computationStaField[item_r16 == null ? null : item_r16.name] == 1 || (item_r16 == null ? null : item_r16.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16[ctx_r55.userData.designation] != 1 && item_r16.name !== "created_by" && item_r16.name !== "last_modified_by" && ctx_r55.computationStaField[item_r16 == null ? null : item_r16.name] == 0 && (item_r16 == null ? null : item_r16.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.depended[item_r16.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r55.mandatoryField.includes(item_r16.name) && ctx_r55.createIsTrue == 1 && !ctx_r55.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r391 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r391.field_title);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 113);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_1_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r421); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r420.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r421); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r424.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r396.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_2_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r431); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r430.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r431); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r434.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r397.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_3_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r441); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r440.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r441); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r444.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r398.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_4_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r451); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r450.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r451); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r454.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r399.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r462); const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r460.open(); })("dateChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_5_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r462); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r463.subformatDate(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r460);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r468.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r476 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r474.subformatDateTime(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_8_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r481); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r480.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_8_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r481); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r484.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r403.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_span_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_span_2_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r497); const j_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r495.deleteSubFile(sub_r395.name, i_r393, sub_r395.table_name, j_r493); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_span_2_mat_icon_2_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r492 = ctx.$implicit;
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r492 == null ? null : file_r492.file_name, ".", file_r492 == null ? null : file_r492.file_extension, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r490.storeSubFile[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_span_2_Template, 3, 3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r503); const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r491.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r503); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r504.fileSubUpload($event, sub_r395.name, sub_r395.table_name, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r404.storeSubFile[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r511); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r509.subValueChanges(item_r16.table_name, sub_r395.name, $event.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r406.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r518 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r518); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r516 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r516.subValueChanges(item_r16.table_name, sub_r395.name, $event.checked ? 1 : 0, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r407.subValues[sub_r395.table_name][i_r393][sub_r395.name] == 1);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_13_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r524); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r523.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r524); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r527.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r408.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r534 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_14_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r534); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r533.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r534); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r537.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r409.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r544 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_15_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r544); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r543.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r544); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r547 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r547.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r410.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r554 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_16_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r554); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r553 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r553.subValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); })("change", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r554); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r557.subValueChanges(item_r16.table_name, sub_r395.name, $event.target.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r411.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r564 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r564);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r564, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r567); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r565.subValueChanges(item_r16.table_name, sub_r395.name, $event.value, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r412.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r395.option_list);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r577 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_mat_option_4_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r577); const option_r574 = ctx.$implicit; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r575.dropDownSubvalueChanges(item_r16.table_name, sub_r395.name, option_r574.id, i_r393, sub_r395); return ctx_r575.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r574 = ctx.$implicit;
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r574[sub_r395.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r574[sub_r395.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r583); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r581 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r581.getDropdownValues(sub_r395, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r572 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r572)("disabled", sub_r395.relative_fields == "" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r413.dropdownSearch);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r590 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_mat_option_4_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r590); const option_r587 = ctx.$implicit; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r588.subValueChanges(item_r16.table_name, sub_r395.name, option_r587.id, i_r393); return ctx_r588.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r587 = ctx.$implicit;
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r587[sub_r395.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r587[sub_r395.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r596 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r596); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r594 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r594.getDropdownValues(sub_r395, $event.target.value); })("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r596); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r597.editsubValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_mat_option_4_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r585 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r585)("disabled", sub_r395.relative_fields == "" ? true : false)("value", ctx_r414.editsubValues[sub_r395.table_name][i_r393][sub_r395.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r414.dropdownSearch);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r607); const j_r604 = ctx.index; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r605 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r605.SubremoveCheckListForValue(sub_r395.name, i_r393, sub_r395.table_name, j_r604); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r603 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r603);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r611 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_div_2_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r611); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r609.SubcheckListForSelect(sub_r395.name, $event.target.value, sub_r395.table_name, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r415.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r621 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r621); const j_r618 = ctx.index; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r619 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r619.SubremoveCheckListForValue(sub_r395.name, i_r393, sub_r395.table_name, j_r618); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r617 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r617);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r626); const option_r623 = ctx.$implicit; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r624.SubcheckListForSelect(sub_r395.name, option_r623, sub_r395.table_name, i_r393); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r623 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r623);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r623, " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_div_2_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_mat_option_4_Template, 2, 2, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r416.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r395.option_list);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r638); const j_r635 = ctx.index; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r636.SubremoveCheckListForValue(sub_r395.name, i_r393, sub_r395.table_name, j_r635); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r634 = ctx.$implicit;
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r634[sub_r395.parent_table_field]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r644 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r644); const option_r641 = ctx.$implicit; const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r642 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); ctx_r642.SubcheckListValueChanges(sub_r395.table_name, sub_r395.name, option_r641, i_r393); return ctx_r642.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r641 = ctx.$implicit;
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r641[sub_r395.parent_table_field], " ");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r648 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_div_3_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r648); const ctx_r647 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); ctx_r647.subdro = []; return ctx_r647.dropdownSearch = []; })("input", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r648); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r649 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r649.getDropdownValues(sub_r395, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_mat_option_8_Template, 2, 1, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_span_9_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r631 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r417.subValues[sub_r395.table_name][i_r393][sub_r395.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r631);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r417.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r417.mandatoryField.includes(item_r16.name) && ctx_r417.createIsTrue == 1 && !ctx_r417.values[item_r16.name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r655 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_23_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r655); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r654 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return (ctx_r654.editsubValues[sub_r395.table_name][i_r393][sub_r395.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r395 == null ? null : sub_r395.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r418.editsubValues[sub_r395.table_name][i_r393][sub_r395.name])("disabled", true);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r661 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r661); const sub_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx_r660.getInsideSubTable(_r4, sub_r395); return ctx_r660.insideSubIndex = i_r393; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_1_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_2_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_3_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_4_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_5_Template, 4, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_6_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_7_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_8_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_9_Template, 7, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_10_Template, 2, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_11_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_12_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_13_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_14_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_15_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_16_Template, 2, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_17_Template, 3, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_18_Template, 5, 4, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_19_Template, 5, 5, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_20_Template, 4, 2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_21_Template, 5, 3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_22_Template, 10, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_23_Template, 2, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_div_24_Template, 3, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r395 = ctx.$implicit;
    const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "select" && sub_r395.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "select" && sub_r395.parent_table_id != 0 && sub_r395.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "select" && sub_r395.parent_table_id != 0 && sub_r395.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r395 == null ? null : sub_r395.field_sub_type) == "checklist" && !!ctx_r394.subValues[sub_r395.table_name] && !(sub_r395 == null ? null : sub_r395.parent_table_id) && sub_r395.option_list == "" && !(sub_r395 == null ? null : sub_r395.parent_table_field) && !(sub_r395 == null ? null : sub_r395.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r395 == null ? null : sub_r395.field_sub_type) == "checklist" && !(sub_r395 == null ? null : sub_r395.parent_table_id) && sub_r395.option_list != "" && !(sub_r395 == null ? null : sub_r395.parent_table_field) && !(sub_r395 == null ? null : sub_r395.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r395 == null ? null : sub_r395.field_sub_type) == "checklist" && (sub_r395 == null ? null : sub_r395.parent_table_id) && (sub_r395 == null ? null : sub_r395.parent_table_field) && (sub_r395 == null ? null : sub_r395.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "merge_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r395.field_sub_type == "table");
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_div_4_Template, 25, 24, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r392 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r392);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r390.subFieldInfo[item_r16.table_name]);
} }
function CreateViewComponent_div_0_div_13_div_5_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_5_Template, 2, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_6_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_div_7_Template, 5, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.subFieldInfo[item_r16.table_name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r16.row_count.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16.row_count);
} }
const _c1 = function (a0) { return { "dark-text-black": a0 }; };
function CreateViewComponent_div_0_div_13_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_div_0_div_13_div_5_div_1_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_div_0_div_13_div_5_div_1_span_3_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_div_0_div_13_div_5_div_1_span_4_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_div_1_div_5_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_div_0_div_13_div_5_div_1_div_6_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_div_0_div_13_div_5_div_1_div_7_Template, 5, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_div_0_div_13_div_5_div_1_div_8_Template, 5, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_div_0_div_13_div_5_div_1_div_9_Template, 5, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateViewComponent_div_0_div_13_div_5_div_1_div_10_Template, 7, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_div_0_div_13_div_5_div_1_div_11_Template, 5, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_div_0_div_13_div_5_div_1_div_12_Template, 5, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_div_0_div_13_div_5_div_1_div_13_Template, 6, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateViewComponent_div_0_div_13_div_5_div_1_div_14_Template, 7, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateViewComponent_div_0_div_13_div_5_div_1_div_15_Template, 7, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateViewComponent_div_0_div_13_div_5_div_1_div_16_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateViewComponent_div_0_div_13_div_5_div_1_div_17_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateViewComponent_div_0_div_13_div_5_div_1_div_18_Template, 3, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateViewComponent_div_0_div_13_div_5_div_1_div_19_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateViewComponent_div_0_div_13_div_5_div_1_div_20_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateViewComponent_div_0_div_13_div_5_div_1_div_21_Template, 3, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateViewComponent_div_0_div_13_div_5_div_1_div_22_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateViewComponent_div_0_div_13_div_5_div_1_div_23_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateViewComponent_div_0_div_13_div_5_div_1_div_24_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateViewComponent_div_0_div_13_div_5_div_1_div_25_Template, 3, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateViewComponent_div_0_div_13_div_5_div_1_div_26_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateViewComponent_div_0_div_13_div_5_div_1_div_27_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateViewComponent_div_0_div_13_div_5_div_1_div_28_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateViewComponent_div_0_div_13_div_5_div_1_div_29_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CreateViewComponent_div_0_div_13_div_5_div_1_div_30_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateViewComponent_div_0_div_13_div_5_div_1_div_31_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CreateViewComponent_div_0_div_13_div_5_div_1_div_32_Template, 8, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateViewComponent_div_0_div_13_div_5_div_1_div_33_Template, 8, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateViewComponent_div_0_div_13_div_5_div_1_div_34_Template, 8, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateViewComponent_div_0_div_13_div_5_div_1_div_35_Template, 3, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateViewComponent_div_0_div_13_div_5_div_1_div_36_Template, 4, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CreateViewComponent_div_0_div_13_div_5_div_1_div_37_Template, 5, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateViewComponent_div_0_div_13_div_5_div_1_div_38_Template, 10, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreateViewComponent_div_0_div_13_div_5_div_1_div_39_Template, 8, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateViewComponent_div_0_div_13_div_5_div_1_div_40_Template, 5, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CreateViewComponent_div_0_div_13_div_5_div_1_div_41_Template, 11, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!!item_r16 ? "field-g" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", item_r16 && item_r16.is_sub_table && !!item_r16.display_name ? "100%" : ctx_r15.getWidth(item_r16 && item_r16.grid ? item_r16.grid : "", item_r16, row_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", !!(item_r16 == null ? null : item_r16.is_sub_table) && !!(item_r16 == null ? null : item_r16.display_name) ? item_r16 == null ? null : item_r16.display_name : item_r16 == null ? null : item_r16.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c1, ctx_r15.isDarkEnable === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r16 && !!(item_r16 == null ? null : item_r16.is_sub_table) && !!(item_r16 == null ? null : item_r16.display_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r16 && !(item_r16 == null ? null : item_r16.display_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.mandatory) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "text" && (item_r16 == null ? null : item_r16.is_unique) == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate" && (item_r16 == null ? null : item_r16.parent_table_name) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate_switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "duplicate" && (item_r16 == null ? null : item_r16.parent_table_name) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "date-difference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "text" && (item_r16 == null ? null : item_r16.is_unique) == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "email" && item_r16.is_unique == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "email" && item_r16.is_unique == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.name) == "created_on" || (item_r16 == null ? null : item_r16.name) == "last_modified_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "datetime-local" && (item_r16 == null ? null : item_r16.name) != "created_on" && (item_r16 == null ? null : item_r16.name) != "last_modified_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "select" && item_r16.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "number_select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "select" && item_r16.parent_table_id != 0 && item_r16.is_sub_table == "" && item_r16.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "select" && item_r16.parent_table_id != 0 && item_r16.is_sub_table == "" && item_r16.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "select" && item_r16.parent_table_id != 0 && item_r16.is_sub_table != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "merge_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "checklist" && !(item_r16 == null ? null : item_r16.parent_table_id) && item_r16.option_list == "" && !(item_r16 == null ? null : item_r16.parent_table_field) && !(item_r16 == null ? null : item_r16.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "checklist" && !(item_r16 == null ? null : item_r16.parent_table_id) && item_r16.option_list != "" && !(item_r16 == null ? null : item_r16.parent_table_field) && !(item_r16 == null ? null : item_r16.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "checklist" && (item_r16 == null ? null : item_r16.parent_table_id) && (item_r16 == null ? null : item_r16.parent_table_field) && (item_r16 == null ? null : item_r16.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.name) == "created_by" || (item_r16 == null ? null : item_r16.name) == "last_modified_by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.field_sub_type) == "user" && (item_r16 == null ? null : item_r16.name) !== "created_by" && (item_r16 == null ? null : item_r16.name) !== "last_modified_by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r16 == null ? null : item_r16.is_sub_table) == 1);
} }
function CreateViewComponent_div_0_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_0_div_13_div_5_div_1_Template, 42, 49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r14);
} }
function CreateViewComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_div_0_div_13_div_5_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "group_", group_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.groupId == group_r12.id ? "border-dash" : "border-dash-u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r12.group_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.metaDataTemp[group_r12.id]);
} }
function CreateViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r668 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r668); const ctx_r667 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r667.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_div_0_button_11_Template, 4, 7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_div_0_div_13_Template, 6, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r668); const ctx_r669 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r669.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r668); const ctx_r670 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx_r670.createValues(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.routeInfo == null ? null : ctx_r0.routeInfo.displayname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupInfo);
} }
function CreateViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r672 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_ng_template_2_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r672); const ctx_r671 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r671.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mandatory Field is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please fill mandatory fields and try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_ng_template_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r676 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r676.field_title, " ");
} }
function CreateViewComponent_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 156);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r702 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r702); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r702); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r704 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r704.insideSubValueChange(i_r679, ctx_r704.subViewTable.table_name, ctx_r704.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r711 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r711); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r711); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r713 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r713.insideSubValueChange(i_r679, ctx_r713.subViewTable.table_name, ctx_r713.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r720 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r720); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r720); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r722 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r722.insideSubValueChange(i_r679, ctx_r722.subViewTable.table_name, ctx_r722.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r729 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r729); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r729); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r731 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r731.insideSubValueChange(i_r679, ctx_r731.subViewTable.table_name, ctx_r731.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r738 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r738); const _r736 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r736.open(); })("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r738); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r736 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r736)("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r746 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r746); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r752 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r752); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r758 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r758); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r758); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r760 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r760.insideSubValueChange(i_r679, ctx_r760.subViewTable.table_name, ctx_r760.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r767 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r767); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r765 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r765.insideSubValueChange(i_r679, ctx_r765.subViewTable.table_name, ctx_r765.subViewTable.name, sub_r681.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r773 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r773); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r771.insideSubValueChange(i_r679, ctx_r771.subViewTable.table_name, ctx_r771.subViewTable.name, sub_r681.name, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", subdata_r678[sub_r681.name] == 1);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r779 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r779); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r779); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r781 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r781.insideSubValueChange(i_r679, ctx_r781.subViewTable.table_name, ctx_r781.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r788 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r788); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r788); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r790 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r790.insideSubValueChange(i_r679, ctx_r790.subViewTable.table_name, ctx_r790.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r797 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r797); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r797); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r799.insideSubValueChange(i_r679, ctx_r799.subViewTable.table_name, ctx_r799.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r806); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("change", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r806); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r808 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r808.insideSubValueChange(i_r679, ctx_r808.subViewTable.table_name, ctx_r808.subViewTable.name, sub_r681.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r678[sub_r681.name]);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r814 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r814);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r814, " ");
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r817); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r815.insideSubValueChange(i_r679, ctx_r815.subViewTable.table_name, ctx_r815.subViewTable.name, sub_r681.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", subdata_r678[sub_r681.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r681.option_list);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r826 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r826); const option_r823 = ctx.$implicit; const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r824 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r824.insideSubValueChange(i_r679, ctx_r824.subViewTable.table_name, ctx_r824.subViewTable.name, sub_r681.name, option_r823.id); return ctx_r824.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r823 = ctx.$implicit;
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r823[sub_r681.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r823[sub_r681.parent_table_field], " ");
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r831 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r831); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r678[sub_r681.name] = $event); })("input", function CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r831); const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r833 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r833.getDropdownValues(sub_r681, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r699 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r821)("value", subdata_r678[sub_r681.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r699.dropdownSearch);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template, 4, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_9_Template, 2, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_10_Template, 2, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template, 3, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template, 5, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r681 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "select" && sub_r681.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r681.field_sub_type == "select" && sub_r681.parent_table_id != 0);
} }
function CreateViewComponent_ng_template_4_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_ng_template_4_div_13_div_1_div_4_Template, 19, 18, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r679 = ctx.index;
    const ctx_r677 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r679 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r677.subViewTableInfo[ctx_r677.subViewTable.name]);
} }
function CreateViewComponent_ng_template_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_ng_template_4_div_13_div_1_Template, 5, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r675 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r675.subViewData[ctx_r675.subViewTable.table_name][ctx_r675.subViewTable.name][ctx_r675.insideSubIndex]);
} }
function CreateViewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r838 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_ng_template_4_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r838); const ctx_r837 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r837.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateViewComponent_ng_template_4_div_11_Template, 2, 1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateViewComponent_ng_template_4_div_12_Template, 1, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateViewComponent_ng_template_4_div_13_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateViewComponent_ng_template_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r838); const ctx_r839 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r839.insideSubRow(ctx_r839.subViewTable.table_name, ctx_r839.subViewTable.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.subViewTable.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.subViewTableInfo[ctx_r5.subViewTable.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.subViewData[ctx_r5.subViewTable.table_name][ctx_r5.subViewTable.name][ctx_r5.insideSubIndex].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.subViewData[ctx_r5.subViewTable.table_name][ctx_r5.subViewTable.name][ctx_r5.insideSubIndex].length);
} }
class CreateViewComponent {
    constructor(route, aRouter, CommonService, dialog) {
        this.route = route;
        this.aRouter = aRouter;
        this.CommonService = CommonService;
        this.dialog = dialog;
        this.metaData = [];
        this.loaded = 1;
        this.values = {};
        this.valuesTemp = {};
        this.dropdownSearch = [];
        this.userSearch = [];
        this.storeFile = {};
        this.storeSubFile = {};
        this.subFieldInfo = {};
        this.mandatoryField = [];
        this.mandatoryIsTrue = 0;
        this.createIsTrue = 0;
        this.sequenceNo = [];
        this.sequence = '';
        this.subValues = {};
        this.checkList = {};
        this.checkListName = {};
        this.numberSelect = {};
        this.uniqueField = {};
        this.dependedField = {};
        this.depended = {};
        this.subViewTableInfo = {};
        this.subViewData = {};
        this.emailValidate = true;
        this.d_advanced = {};
        this.d_advanced_option = {};
        this.userPassword = "";
        this.PasswordName = "";
        this.sameas = [];
        this.master = [];
        this.advanced_field = [];
        this.advancedsub_field = {};
        this.mergedsub_field = {};
        this.editValues = {};
        this.editsubValues = {};
        this.mergedFields = [];
        this.advancedSameAs = {};
        this.subdro = [];
        this.dateDifference = {};
        this.computationRel = {};
        this.computationSta = {};
        this.computationStaField = {};
        this.checkListSub = {};
        this.isDarkEnable = this.CommonService.darkEnable.getValue();
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.user_data);
        this.userData.designation += "_access";
        console.log("user", this.userData);
        this.aRouter.queryParams.subscribe((params) => {
            this.routeInfo = params;
            if (!!this.routeInfo) {
                this.getGroupInfo();
            }
        });
    }
    getTempMetaData(id) {
        let value = { table_name: this.routeInfo.tablename };
        let access = this.userData.designation;
        let field = "id,computation_relative,computation_status,advanced_option,default_value,depended_field,depended_id,field_position,grid,group_id,group_name,is_disabled,is_hidden,is_sub_table,is_unique,last_seq_no,mandatory,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,row_no,seq_count,seq_id_code,seq_start_no,table_view_position,field_sub_type,field_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name," + access;
        this.CommonService.getMetaDataFields(value, field).subscribe((response) => {
            if (response.statusCode == 200) {
                _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tempCache.rowMeta[this.routeInfo.tablename] = response.info;
                this.redirectEditView(id);
            }
        });
    }
    redirectEditView(value) {
        this.route.navigate(['edit-view', this.routeInfo.displayname], { queryParams: { id: this.routeInfo.id, tablename: this.routeInfo.tablename, displayname: this.routeInfo.displayname, rowid: value } });
    }
    ngAfterViewInit() {
        this.sidecreate.changes.subscribe(({ first: elm }) => {
            if (this.CommonService.darkEnable.getValue()) {
                if (elm.nativeElement) {
                    // elm.nativeElement.style.filter = 'invert(1) hue-rotate(180deg)';
                }
            }
            else {
                if (elm === null || elm === void 0 ? void 0 : elm.nativeElement) { }
                // elm.nativeElement.style.filter = 'unset';
            }
        });
    }
    // redirectCreateView() {
    //   this.route.navigate(['create-view', "BROKER MASTER"], { queryParams: { id: 249, tablename: "broker_master", displayname: "BROKER MASTER" } });
    // }
    scrollGroup(id) {
        var elmnt = document.getElementById('group_' + id);
        if (!!elmnt) {
            elmnt.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
    createDialog(templateName) {
        this.loaded = 1;
        this.dialogRef = this.dialog.open(templateName, {
            width: '300px',
        });
    }
    createSubTableView(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '900px',
        });
    }
    closeDialog() {
        this.loaded = 1;
        this.dialogRef.close();
    }
    getInsideSubTable(templateName, item) {
        let value = { table_name: item.name };
        this.subViewTable = item;
        // let body = {
        //   "limit": 100,
        //   "page": 0,
        //   "db_name": item.db_name,
        //   "table_name": "meta_field_data",
        //   "sort_type": "ASC",
        //   "sort_field": "id",
        //   "filter": [{ "table_name": item.name }]
        // }
        this.CommonService.getMetaData(value).subscribe((response) => {
            this.subViewTableInfo[item.name] = response.info;
            for (let i = 0; i < response.info.length; i++) {
                response.info[i].option_list = response.info[i].option_list.split(",");
            }
            if (!this.subViewData.hasOwnProperty(item.table_name)) {
                this.subViewData[item.table_name] = {};
            }
            if (!this.subViewData[item.table_name].hasOwnProperty(item.name)) {
                this.subViewData[item.table_name][item.name] = {};
                this.subViewData[item.table_name][item.name][this.insideSubIndex] = [];
            }
            if (!this.subViewData[item.table_name][item.name].hasOwnProperty(this.insideSubIndex)) {
                this.subViewData[item.table_name][item.name][this.insideSubIndex] = [];
            }
            this.createSubTableView(templateName);
        });
    }
    deleteFile(value, i) {
        this.storeFile[value].splice(i, 1);
        if (i == 0) {
            if (!!this.storeFile[value].length) {
                this.storeFile[value][0]["append_file"] = false;
            }
        }
        if (!this.storeFile[value].length) {
            delete this.storeFile[value];
        }
    }
    deleteSubFile(name, i, tablename, j) {
        this.storeSubFile[tablename][i][name].splice(j, 1);
        if (j == 0) {
            if (!!this.storeSubFile[tablename][i][name].length) {
                this.storeSubFile[tablename][i][name][0]["append_file"] = false;
            }
        }
        if (!this.storeSubFile[tablename][i][name].length) {
            delete this.storeSubFile[tablename][i][name];
        }
    }
    radioValueChange(name, value, e) {
        var _a, _b, _c;
        this.valueChanges(name, value);
        if (this.d_advanced[name] == value) {
            this.d_advanced[name] = "";
        }
        else {
            this.d_advanced[name] = value;
        }
        this.metaData = [];
        let spl = [];
        for (let l = 0; l < this.tempresponse.length; l++) {
            this.metaData.push(this.tempresponse[l]);
        }
        let d_adv = Object.keys(this.d_advanced_option);
        for (let l = 0; l < d_adv.length; l++) {
            for (let n = 0; n < ((_c = (_b = (_a = this.tempresponse[d_adv[l]]) === null || _a === void 0 ? void 0 : _a.advanced_option) === null || _b === void 0 ? void 0 : _b.depended_field) === null || _c === void 0 ? void 0 : _c.data.length); n++) {
                if (this.d_advanced[this.tempresponse[d_adv[l]].name] == this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].item_name) {
                    for (let ch = 0; ch < this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_hiden.length; ch++) {
                        for (let t = 0; t < this.metaData.length; t++) {
                            if (this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_hiden[ch] == this.tempresponse[t].name) {
                                // this.metaData.splice(t, 1);
                                spl.push(t);
                            }
                        }
                    }
                    for (let cd = 0; cd < this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_locked.length; cd++) {
                        for (let t = 0; t < this.metaData.length; t++) {
                            if (this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_locked[cd] == this.tempresponse[t].name) {
                                this.metaData[t].is_disabled = 1;
                            }
                        }
                    }
                }
                else {
                    for (let uh = 0; uh < this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_hiden.length; uh++) {
                        for (let t = 0; t < this.metaData.length; t++) {
                            if (this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_hiden[uh] == this.tempresponse[t].name) {
                                // this.metaData.splice(t, 1);
                                spl.push(t);
                            }
                        }
                    }
                    for (let ud = 0; ud < this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_locked.length; ud++) {
                        for (let t = 0; t < this.metaData.length; t++) {
                            if (this.tempresponse[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_locked[ud] == this.tempresponse[t].name) {
                                this.metaData[t].is_disabled = 1;
                            }
                        }
                    }
                }
            }
        }
        for (let s = 0; s < spl.length; s++) {
            this.metaData.splice(spl[s], 1);
            for (let e = 0; e < spl.length; e++) {
                spl[e] = (spl[e] - 1);
            }
        }
        let temp = {};
        for (let i = 0; i < this.groupInfo.length; i++) {
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
                    // this.metaData[j].option_list = this.metaData[j].option_list.split(",")
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
                let p0, p1, p2, p3;
                for (let s = 0; s < temp2[j].length; s++) {
                    if (temp2[j][s].field_position == 0) {
                        p0 = temp2[j][s];
                    }
                    if (temp2[j][s].field_position == 1) {
                        p1 = temp2[j][s];
                    }
                    if (temp2[j][s].field_position == 2) {
                        p2 = temp2[j][s];
                    }
                    if (temp2[j][s].field_position == 3) {
                        p3 = temp2[j][s];
                    }
                }
                let temp3 = [];
                for (let s = 0; s < temp2[j].length; s++) {
                    if (s == 0) {
                        temp3.push(p0);
                    }
                    if (s == 1) {
                        temp3.push(p1);
                    }
                    if (s == 2) {
                        temp3.push(p2);
                    }
                    if (s == 3) {
                        temp3.push(p3);
                    }
                }
                temp2[j] = temp3;
                temp[this.groupInfo[i].id].push(temp2[j]);
            }
        }
        this.metaDataTemp = temp;
    }
    getMetaData() {
        var _a, _b, _c;
        let value = { table_name: this.routeInfo.tablename };
        let spl = [];
        // this.CommonService.getMetaData(value).subscribe((response: any) => {
        //   if (response.statusCode == 200) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tempCache.rowMeta.hasOwnProperty(this.routeInfo.tablename)) {
            let response = { info: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tempCache.rowMeta[this.routeInfo.tablename] };
            for (let m = 0; m < response.info.length; m++) {
                this.computationStaField[response.info[m].name] = 0;
                if (response.info[m].computation_relative !== "" && response.info[m].field_sub_type != "duplicate") {
                    this.computationRel[response.info[m].name] = "";
                    response.info[m].computation_relative = JSON.parse(response.info[m].computation_relative);
                    this.computationRel[response.info[m].name] = response.info[m].computation_relative;
                }
                if (response.info[m].computation_status !== "" && response.info[m].field_sub_type != "duplicate") {
                    response.info[m].computation_status = JSON.parse(response.info[m].computation_status);
                    this.computationSta[response.info[m].name] = response.info[m].computation_status;
                }
                if (response.info[m].is_sub_table !== "") {
                    response.info[m].is_sub_table = JSON.parse(response.info[m].is_sub_table);
                }
                if (response.info[m].parent_table_id != 0 && response.info[m].field_sub_type !== "duplicate" && response.info[m].is_sub_table === "") {
                    this.editValues[response.info[m].name] = "";
                    this.advanced_field.push(response.info[m]);
                }
                if (response.info[m].field_sub_type == 'date-difference') {
                    response.info[m].advanced_option = JSON.parse(response.info[m].advanced_option);
                    this.dateDifference[response.info[m].name] = [];
                    this.dateDifference[response.info[m].name].push(response.info[m].advanced_option.date_a);
                    this.dateDifference[response.info[m].name].push(response.info[m].advanced_option.date_b);
                    this.dateDifference[response.info[m].name].push(response.info[m].advanced_option);
                }
                if (response.info[m].field_sub_type == 'merge_fields' && response.info[m].merge_fields.length !== 0) {
                    response.info[m].merge_fields = JSON.parse(response.info[m].merge_fields);
                    this.mergedFields.push(response.info[m]);
                }
                if (response.info[m].relative_fields != "" && response.info[m].field_sub_type != "duplicate") {
                    response.info[m].relative_fields = JSON.parse(response.info[m].relative_fields);
                    if (response.info[m].relative_fields.hasOwnProperty("sameasautofill")) {
                        this.sameas.push(response.info[m].name);
                    }
                    if (response.info[m].relative_fields.hasOwnProperty("masterautofill")) {
                        this.master.push(response.info[m].name);
                    }
                }
                if (response.info[m].field_sub_type == 'password') {
                    this.generatePassword(response.info[m].name);
                    this.PasswordName = response.info[m].name;
                }
                this.values[response.info[m].name] = "";
                this.valuesTemp[response.info[m].name] = "";
                if (response.info[m][this.userData.designation] != 3 && response.info[m].is_hidden == 0) {
                    this.metaData.push(response.info[m]);
                    if (response.info[m].advanced_option != "" && response.info[m].field_sub_type != 'date-difference') {
                        response.info[m].advanced_option = JSON.parse(response.info[m].advanced_option);
                        this.d_advanced[response.info[m].name] = "";
                        this.d_advanced_option[m] = response.info[m].name;
                    }
                }
            }
            this.tempresponse = response.info;
            let d_adv = Object.keys(this.d_advanced_option);
            for (let l = 0; l < d_adv.length; l++) {
                for (let n = 0; n < ((_c = (_b = (_a = response.info[d_adv[l]]) === null || _a === void 0 ? void 0 : _a.advanced_option) === null || _b === void 0 ? void 0 : _b.depended_field) === null || _c === void 0 ? void 0 : _c.data.length); n++) {
                    if (this.d_advanced[this.tempresponse[d_adv[l]].name] == response.info[d_adv[l]].advanced_option.depended_field.data[n].item_name) {
                        for (let ch = 0; ch < response.info[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_hiden.length; ch++) {
                            for (let t = 0; t < this.metaData.length; t++) {
                                if (response.info[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_hiden[ch] == this.metaData[t].name) {
                                    // this.metaData.splice(t, 1);
                                    spl.push(t);
                                }
                            }
                        }
                        for (let cd = 0; cd < response.info[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_locked.length; cd++) {
                            for (let t = 0; t < this.metaData.length; t++) {
                                if (response.info[d_adv[l]].advanced_option.depended_field.data[n].checked.depended_locked[cd] == this.metaData[t].name) {
                                    this.metaData[t].is_disabled = 1;
                                }
                            }
                        }
                    }
                    else {
                        for (let uh = 0; uh < response.info[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_hiden.length; uh++) {
                            for (let t = 0; t < this.metaData.length; t++) {
                                if (response.info[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_hiden[uh] == this.metaData[t].name) {
                                    // this.metaData.splice(t, 1);
                                    spl.push(t);
                                }
                            }
                        }
                        for (let ud = 0; ud < response.info[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_locked.length; ud++) {
                            for (let t = 0; t < this.metaData.length; t++) {
                                if (response.info[d_adv[l]].advanced_option.depended_field.data[n].unchecked.depended_locked[ud] == this.metaData[t].name) {
                                    this.metaData[t].is_disabled = 1;
                                }
                            }
                        }
                    }
                }
            }
            for (let s = 0; s < spl.length; s++) {
                this.metaData.splice(spl[s], 1);
                for (let e = 0; e < spl.length; e++) {
                    spl[e] = (spl[e] - 1);
                }
            }
            let col = [];
            for (let m = 0; m < this.metaData.length; m++) {
                if (this.metaData[m].depended_id != "") {
                    this.depended[this.metaData[m].name] = 'false';
                    this.dependedField[this.metaData[m].name] = this.metaData[m].depended_field;
                }
                if (this.metaData[m].is_unique == '1') {
                    this.uniqueField[this.metaData[m].name] = 0;
                }
                if (this.metaData[m].field_sub_type == 'number_select') {
                    this.numberSelect[this.metaData[m].name] = [];
                    let startno = parseInt(this.metaData[m].seq_start_no);
                    let count = parseInt(this.metaData[m].seq_count);
                    let endno = parseInt(this.metaData[m].last_seq_no);
                    for (let n = startno; n <= endno; n = n + count) {
                        this.numberSelect[this.metaData[m].name].push(n);
                    }
                }
                if (this.metaData[m].mandatory == 1) {
                    this.mandatoryField.push(this.metaData[m].name);
                }
                col.push(this.metaData[m].name);
                if (this.metaData[m].field_sub_type == 'sequence') {
                    this.sequenceNo.push(this.metaData[m]);
                    if (this.sequenceNo[0].last_seq_no == "") {
                        let temp = parseInt(this.sequenceNo[0].seq_start_no) - 1;
                        this.sequenceNo[0].last_seq_no = temp.toString();
                    }
                }
            }
            const numberOfDigits = (n) => {
                let result = 0;
                while (n > 0) {
                    n = Math.floor(n / 10);
                    result++;
                }
                return result;
            };
            if (!!this.sequenceNo.length) {
                let seqtemp = numberOfDigits(parseInt(this.sequenceNo[0].last_seq_no));
                if (seqtemp == 0) {
                    seqtemp = 1;
                }
                let seqtemp2 = parseInt(this.sequenceNo[0].seq_count) - seqtemp;
                let seqtemp3 = '';
                if (this.sequenceNo[0].seq_id_code != '') {
                    seqtemp3 = this.sequenceNo[0].seq_id_code;
                }
                for (let i = 0; i < seqtemp2; i++) {
                    seqtemp3 = seqtemp3 + '0';
                }
                let seqtemp4 = parseInt(this.sequenceNo[0].last_seq_no) + 1;
                seqtemp3 = seqtemp3 + seqtemp4.toString();
                this.sequence = seqtemp3;
                this.values[this.sequenceNo[0].name] = this.sequence;
                this.valuesTemp[this.sequenceNo[0].name] = this.sequence;
            }
            let temp = {};
            for (let i = 0; i < this.groupInfo.length; i++) {
                if (i == 0) {
                    this.groupId = this.groupInfo[i].id;
                }
                let groupField = [];
                let rowno = 0;
                for (let j = 0; j < this.metaData.length; j++) {
                    if (this.metaData[j].group_id == this.groupInfo[i].id) {
                        if (this.metaData[j].default_value != '') {
                            this.values[this.metaData[j].name] = this.metaData[j].default_value;
                            this.valuesTemp[this.metaData[j].name] = this.metaData[j].default_value;
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
                    let p0, p1, p2, p3;
                    for (let s = 0; s < temp2[j].length; s++) {
                        if (temp2[j][s].field_position == 0) {
                            p0 = temp2[j][s];
                        }
                        if (temp2[j][s].field_position == 1) {
                            p1 = temp2[j][s];
                        }
                        if (temp2[j][s].field_position == 2) {
                            p2 = temp2[j][s];
                        }
                        if (temp2[j][s].field_position == 3) {
                            p3 = temp2[j][s];
                        }
                    }
                    let temp3 = [];
                    for (let s = 0; s < temp2[j].length; s++) {
                        if (s == 0) {
                            temp3.push(p0);
                        }
                        if (s == 1) {
                            temp3.push(p1);
                        }
                        if (s == 2) {
                            temp3.push(p2);
                        }
                        if (s == 3) {
                            temp3.push(p3);
                        }
                    }
                    temp2[j] = temp3;
                    temp[this.groupInfo[i].id].push(temp2[j]);
                }
            }
            this.metaDataTemp = temp;
            this.getSubTable();
            // this.createDateTime('created_on');
            this.createDateTime('last_modified_on');
            this.values['last_modified_by'] = this.userData.id;
            this.valuesTemp['last_modified_by'] = this.userData.id;
            this.values['created_by'] = this.userData.id;
            this.valuesTemp['created_by'] = this.userData.id;
            this.editValues['last_modified_by'] = this.userData.user_name;
            this.editValues['created_by'] = this.userData.user_name;
            console.log("ffff", this.valuesTemp, this.userData.id);
            this.relativeFunction();
            //   }
            // });
        }
        else {
            this.redirectDashBoard();
        }
    }
    relativeFunction() {
        // console.log("sta", this.computationSta)
        let comr = Object.keys(this.computationRel);
        let coms = Object.keys(this.computationSta);
        console.log("Rel", this.computationRel, this.values, this.valuesTemp);
        let temp = {};
        for (let i = 0; i < comr.length; i++) {
            let checkConstant = 0;
            if (this.computationRel[comr[i]].hasOwnProperty("constants")) {
                for (let c = 0; c < this.computationRel[comr[i]].constants.length; c++) {
                    if (this.values[comr[i]] != "" && this.values[comr[i]] != null) {
                        if (this.computationRel[comr[i]].constants[c].value == this.values[comr[i]] || this.computationRel[comr[i]].constants[c].id == this.values[comr[i]]) {
                            checkConstant = 1;
                        }
                    }
                }
            }
            if (checkConstant == 0) {
                let tem10 = 0;
                let tem9;
                for (let j = 0; j < this.computationRel[comr[i]].priority.length; j++) {
                    if (tem10 == 0) {
                        // console.log("111111", this.computationRel[comr[i]].priority[j])
                        // let tem2 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]].length;
                        let tem8 = 0;
                        let tem7 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]].length;
                        for (let k = 0; k < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]].length; k++) {
                            if (tem8 == 0) {
                                tem9 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].changed_value;
                                // console.log("2222222", this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k], tem8, tem10, tem9,)
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "equal_to") {
                                    // console.log("33333333333", this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id !== "") {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    // console.log("enterrrr")
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "not_equal_to") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id !== "") {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (l == 0) {
                                                        tem8 = 1;
                                                    }
                                                    if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                        tem10 = 1;
                                                    }
                                                    if ((tem1 - 1) == l) {
                                                        tem8 = 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "is_empty") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                    }
                                }
                                // console.log("nnnnn", this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition, tem8, tem10, tem9,)
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "is_not_empty") {
                                    // console.log("fffffff")
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                        // console.log("is not", this.values)
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "greater_than") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "less_than") {
                                    // console.log("4444444444", this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "greater_than_or_equal_to") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "less_than_or_equal_to") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.values.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (l == 0) {
                                                    tem8 = 1;
                                                }
                                                if (Array.isArray(this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.values[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem1 - 1) == l) && (tem8 == 0)) {
                                                    tem10 = 1;
                                                }
                                                if ((tem1 - 1) == l) {
                                                    tem8 = 0;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (tem10 == 1) {
                    // console.log("enterrrdddddd",tem9,comr[i])
                    if (tem9.id == "") {
                        this.editValues[comr[i]] = tem9.value;
                        this.values[comr[i]] = tem9.value;
                        this.valuesTemp[comr[i]] = tem9.value;
                    }
                    else {
                        // console.log("enterrrddddddffffffffd")
                        this.editValues[comr[i]] = tem9.value;
                        this.values[comr[i]] = tem9.id;
                        this.valuesTemp[comr[i]] = tem9.id;
                    }
                }
            }
        }
        for (let i = 0; i < coms.length; i++) {
            for (let l = 0; l < this.computationSta[coms[i]].length; l++) {
                if (!temp.hasOwnProperty(this.computationSta[coms[i]][l].name)) {
                    temp[this.computationSta[coms[i]][l].name] = 0;
                }
                if (temp[this.computationSta[coms[i]][l].name] == 0) {
                    if (this.computationSta[coms[i]][l].condition === "equal_to") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].id != "") {
                                    if (this.computationSta[coms[i]][l].depended_value[j].id === this.values[coms[i]]) {
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                        }
                                        else {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                    else {
                                        temp[this.computationSta[coms[i]][l].name] = 1;
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                }
                                else {
                                    if (this.computationSta[coms[i]][l].depended_value[j].value === this.values[coms[i]]) {
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                        }
                                        else {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                    else {
                                        temp[this.computationSta[coms[i]][l].name] = 1;
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "not_equal_to") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].id != "") {
                                    if (this.computationSta[coms[i]][l].depended_value[j].id !== this.values[coms[i]]) {
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                        }
                                        else {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                    else {
                                        temp[this.computationSta[coms[i]][l].name] = 1;
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                }
                                else {
                                    if (this.computationSta[coms[i]][l].depended_value[j].value !== this.values[coms[i]]) {
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                        }
                                        else {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                    else {
                                        temp[this.computationSta[coms[i]][l].name] = 1;
                                        if (this.computationSta[coms[i]][l].status === "Enable") {
                                            this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "is_empty") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] == "") {
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                            }
                            else {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "is_not_empty") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                            }
                            else {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "greater_than") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value > this.values[coms[i]]) {
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                    }
                                    else {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                                else {
                                    temp[this.computationSta[coms[i]][l].name] = 1;
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "less_than") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value < this.values[coms[i]]) {
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                    }
                                    else {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                                else {
                                    temp[this.computationSta[coms[i]][l].name] = 1;
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "greater_than_or_equal_to") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value >= this.values[coms[i]]) {
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                    }
                                    else {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                                else {
                                    temp[this.computationSta[coms[i]][l].name] = 1;
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                    if (this.computationSta[coms[i]][l].condition === "less_than_or_equal_to") {
                        if (this.values.hasOwnProperty(coms[i]) && this.values[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value <= this.values[coms[i]]) {
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 0;
                                    }
                                    else {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                                else {
                                    temp[this.computationSta[coms[i]][l].name] = 1;
                                    if (this.computationSta[coms[i]][l].status === "Enable") {
                                        this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                                    }
                                }
                            }
                        }
                        else {
                            temp[this.computationSta[coms[i]][l].name] = 1;
                            if (this.computationSta[coms[i]][l].status === "Enable") {
                                this.computationStaField[this.computationSta[coms[i]][l].name] = 1;
                            }
                        }
                    }
                }
            }
        }
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
        if (this.dependedField[item.name] && !this.values[this.dependedField[item.name]]) {
            this.depended[item.name] = 'empty';
        }
        else {
            this.depended[item.name] = 'true';
        }
        if (item.depended_id == "" || this.depended[item.name] == 'true') {
            if (this.dependedField[item.name]) {
                body["filter"] = [{
                        [item.depended_id]: this.values[item.depended_field]
                    }];
            }
            this.CommonService.getValues(body).subscribe((response) => {
                this.dropdownSearch = response.info;
            });
        }
    }
    getTable(item) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": "meta_table_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { "table_name": item.master_table }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = [];
            this.subdro = [];
            this.getDropdownSubValues(item, response.info[0].id);
        });
    }
    getDropdownSubValues(item, id) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": item.db_name,
            "table_name": item.master_table,
            "data_table_id": id,
            "sort_type": "ASC",
            "sort_field": "id",
        };
        let temp2 = {
            condition: "Equal to",
            fields: "row_id",
            operator: "AND",
            type: "VARCHAR",
        };
        temp2[1] = this.values[item.is_sub_table.field];
        body["filter"] = [];
        body["filter"].push(temp2);
        if (this.dependedField[item.name] && !this.values[this.dependedField[item.name]]) {
            this.depended[item.name] = 'empty';
        }
        else {
            this.depended[item.name] = 'true';
        }
        if (item.depended_id == "" || this.depended[item.name] == 'true') {
            if (this.dependedField[item.name]) {
                body["filter"] = [{
                        [item.depended_id]: this.values[item.depended_field]
                    }];
            }
            this.CommonService.getFiterTableValues(body).subscribe((response) => {
                this.subdro = [];
                this.dropdownSearch = [];
                for (let i = 0; i < response.info.length; i++) {
                    let tem = Object.keys(response.info[i]);
                    let tem1 = {};
                    let tem2 = {};
                    for (let j = 0; j < tem.length; j++) {
                        if (Array.isArray(response.info[i][tem[j]])) {
                            tem1[tem[j]] = response.info[i][tem[j]][0].id;
                            tem2[tem[j]] = response.info[i][tem[j]][0][item.parent_table_field];
                        }
                        else {
                            tem1[tem[j]] = response.info[i].id;
                            tem2[tem[j]] = response.info[i][tem[j]];
                        }
                    }
                    this.subdro.push(tem1);
                    this.dropdownSearch.push(tem2);
                }
            });
        }
    }
    getUserValues(item, value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": item.db_name,
            "table_name": "user",
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { "user_name": value }
            ]
        };
        if (this.dependedField[item.name] && !this.values[this.dependedField[item.name]]) {
            this.depended[item.name] = 'empty';
        }
        else {
            this.depended[item.name] = 'true';
        }
        if (item.depended_id == "" || this.depended[item.name] == 'true') {
            if (this.dependedField[item.name]) {
                body["filter"] = [{
                        [item.depended_id]: this.values[item.depended_field]
                    }];
            }
            this.CommonService.getValues(body).subscribe((response) => {
                if (response.statusCode == 200) {
                    for (let i = 0; i < response.info.length; i++) {
                        if (response.info[i].photo != "") {
                            response.info[i].photo = JSON.parse(response.info[i].photo);
                        }
                    }
                    this.userSearch = response.info;
                }
            });
        }
    }
    checkUniqueValues(item, value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": "tracking_db",
            "table_name": this.routeInfo.tablename,
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { [item]: value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            if (!response.info.length) {
                this.valueChanges(item, value);
                this.uniqueField[item] = 0;
            }
            else {
                this.uniqueField[item] = 1;
                delete this.values[item];
                delete this.valuesTemp[item];
            }
        });
    }
    getGroupInfo() {
        let access = this.userData.designation;
        let field = "id,group_name,is_hide,position,table_id,table_name," + access;
        let getBody = { table_name: "meta_field_group", fields: field, limit: 20, page: 0, sort_type: "ASC", sort_field: "position", filter: [] };
        let temp = { table_id: this.routeInfo.id };
        getBody.filter.push(temp);
        this.CommonService.getValues(getBody).subscribe((response) => {
            this.groupInfo = response.info;
            this.getMetaData();
        });
    }
    getSubTable() {
        let access = this.userData.designation;
        let field = "id,display_name,table_name,group_id,row_no,is_sub_table," + access;
        // let field = "id,advanced_option,default_value,depended_field,depended_id,field_position,is_disabled,is_hidden,is_sub_table,is_unique,last_seq_no,mandatory,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,seq_count,seq_id_code,seq_start_no,field_sub_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name," + access
        let body = {
            "limit": 90,
            "page": 0,
            "fields": field,
            "db_name": "tracking_tb",
            "table_name": "meta_table_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { "is_sub_table": 1 }, { "parent_table_id": this.routeInfo.id }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.subTableInfo = response.info;
                let temp2 = this.subTableInfo.length;
                if (temp2 != 0) {
                    temp2 -= 1;
                }
                for (let i = 0; i < this.subTableInfo.length; i++) {
                    this.subTableInfo[i]["row_count"] = [];
                    let temp = [];
                    temp.push(this.subTableInfo[i]);
                    this.metaDataTemp[this.subTableInfo[i].group_id].splice(this.subTableInfo[i].row_no, 0, temp);
                    // if (temp2 == i) {
                    //   this.metaDataField = this.metaDataTemp;
                    // }
                    this.getSubFields(this.subTableInfo[i].table_name);
                }
            }
        });
    }
    getSubFields(tablename) {
        let body = { table_name: tablename };
        let access = this.userData.designation;
        let field = "id,advanced_option,default_value,depended_field,depended_id,field_position,is_disabled,is_hidden,is_sub_table,is_unique,last_seq_no,mandatory,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,seq_count,seq_id_code,seq_start_no,table_view_position,field_sub_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name," + access;
        this.CommonService.getMetaDataFields(body, field).subscribe((response) => {
            if (response.statusCode == 200) {
                // this.editsubValues[tablename] = {};
                this.advancedsub_field[tablename] = [];
                this.mergedsub_field[tablename] = [];
                this.checkListSub[tablename] = {};
                if (response['info'].length !== 0)
                    response['info'].sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.field_position) - (b === null || b === void 0 ? void 0 : b.field_position); });
                for (let j = 0; j < response.info.length; j++) {
                    if (response.info[j].field_sub_type == "merge_fields") {
                        response.info[j].merge_fields = JSON.parse(response.info[j].merge_fields);
                        this.mergedsub_field[tablename].push(response.info[j]);
                    }
                    if (response.info[j].parent_table_id != 0 && response.info[j].field_sub_type == "select") {
                        // this.editValues[response.info[j].name] = "";
                        this.advancedsub_field[tablename].push(response.info[j]);
                    }
                    response.info[j].option_list = response.info[j].option_list.split(",");
                    if ((response.info[j].field_sub_type == "checklist" || response.info[j].field_sub_type == "user") && (response.info[j].name != 'created_by' && response.info[j].name != 'last_modified_by')) {
                        this.checkListSub[tablename][response.info[j].name] = [];
                    }
                }
                this.subFieldInfo[tablename] = response.info;
            }
        });
    }
    updteSequence() {
        let temp2 = parseInt(this.sequenceNo[0].last_seq_no) + 1;
        let temp = { id: this.sequenceNo[0].id, last_seq_no: '' };
        temp.last_seq_no = temp2.toString();
        // let body = [];x
        // body.push(temp);
        this.CommonService.commonPut(temp, 'meta_field_data').subscribe((response) => {
            // this.subFieldInfo = response.info;
            if (response.statusCode == 200) {
            }
            else {
                this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    updatePasswordUser(id) {
        let body = {
            "id": id,
            "password": this.userPassword
        };
        this.CommonService.updateUserPassword(body).subscribe((response) => {
            if (response.statusCode == 200) {
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    createValues(mandatoryDia) {
        this.loaded += 1;
        // console.log("ll", this.loaded)
        if (this.loaded == 2) {
            setTimeout(() => {
                let cheKeys = Object.keys(this.checkList);
                let tempvalues = Object.keys(this.valuesTemp);
                // console.log("vdsssssssds", this.valuesTemp)
                for (let i = 0; i < tempvalues.length; i++) {
                    if (this.valuesTemp[tempvalues[i]] === "") {
                        delete this.valuesTemp[tempvalues[i]];
                    }
                }
                if (!!cheKeys.length) {
                    for (let i = 0; i < cheKeys.length; i++) {
                        this.valuesTemp[cheKeys[i]] = this.checkList[cheKeys[i]].toString();
                    }
                }
                if (this.userPassword != "") {
                    this.valuesTemp[this.PasswordName] = this.userPassword;
                }
                this.createIsTrue = 1;
                this.mandatoryIsTrue = this.mandatoryField.length;
                for (let i = 0; i < this.mandatoryField.length; i++) {
                    if (this.valuesTemp.hasOwnProperty(this.mandatoryField[i])) {
                        if (this.valuesTemp[this.mandatoryField[i]] != "") {
                            this.mandatoryIsTrue--;
                        }
                    }
                }
                if (this.mandatoryIsTrue == 0) {
                    if (!!this.sequenceNo.length) {
                        this.valuesTemp[this.sequenceNo[0].name] = this.sequence;
                    }
                    // console.log("vdssssssss", this.valuesTemp)
                    if (this.routeInfo.tablename == 'user') {
                        this.valuesTemp[this.PasswordName] = "";
                    }
                    console.log("aaaaa", this.values, this.valuesTemp);
                    this.CommonService.createValues(this.valuesTemp, this.routeInfo.tablename).subscribe((response) => {
                        if (response.statusCode == 200) {
                            this.rowId = response.last_insert_id[0];
                            if (this.routeInfo.tablename == 'user') {
                                this.updatePasswordUser(this.rowId);
                            }
                            this.createSubValues(response.last_insert_id[0]);
                            if (!!this.sequenceNo.length) {
                                this.updteSequence();
                            }
                            // if (response?.statusCode === 200) {
                            //   this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
                            // } else {
                            //   this.CommonService.showSnackbarUnhide('Item Not Updated, please Try Again', ['red-growl']);
                            // }
                            setTimeout(() => {
                                // Add tasks to do
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
                                        temp["file_data"] = this.storeFile[temp1[i]][j].file_data;
                                        temp["file_name"] = this.storeFile[temp1[i]][j].file_name + myDate;
                                        temp["file_display"] = this.storeFile[temp1[i]][j].file_name;
                                        temp["file_extension"] = this.storeFile[temp1[i]][j].file_extension;
                                        temp["table_name"] = this.routeInfo.tablename;
                                        temp["field_id"] = response.last_insert_id[0];
                                        temp["field_name"] = temp1[i];
                                        this.createFile(temp);
                                    }
                                }
                                // this.redirectDashBoard();
                            }, 10);
                            setTimeout(() => {
                                this.getTempMetaData(this.rowId);
                            }, 20);
                        }
                        else {
                            this.CommonService.showSnackbarUnhide('Item Not Updated, please Try Again', ['red-growl']);
                        }
                    }, (error) => {
                        this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                    });
                }
                else {
                    this.createDialog(mandatoryDia);
                    this.loaded = 1;
                }
            }, 10);
        }
    }
    createSubValues(rowid) {
        let temp = Object.keys(this.subValues);
        for (let i = 0; i < temp.length; i++) {
            let chec = Object.keys(this.checkListSub[temp[i]]);
            for (let j = 0; j < this.subValues[temp[i]].length; j++) {
                for (let k = 0; k < chec.length; k++) {
                    if (this.subValues[temp[i]][j][chec[k]].length) {
                        if (this.subValues[temp[i]][j][chec[k]][0].hasOwnProperty("id")) {
                            let temp2 = [];
                            for (let m = 0; m < this.subValues[temp[i]][j][chec[k]].length; m++) {
                                temp2.push(this.subValues[temp[i]][j][chec[k]][m].id);
                            }
                            this.subValues[temp[i]][j][chec[k]] = temp2.toString();
                        }
                        else {
                            this.subValues[temp[i]][j][chec[k]] = this.subValues[temp[i]][j][chec[k]].toString();
                        }
                    }
                    else {
                        this.subValues[temp[i]][j][chec[k]] = "";
                    }
                }
                this.subValues[temp[i]][j]["row_id"] = rowid;
                this.subValues[temp[i]][j]["last_modified_by"] = this.userData.id;
                let temp2 = [];
                temp2.push(this.subValues[temp[i]][j]);
                this.CommonService.createSubValues(temp2, temp[i]).subscribe((response) => {
                    if (response.statusCode == 200) {
                        setTimeout(() => {
                            if (this.storeSubFile.hasOwnProperty(temp[i])) {
                                if (this.storeSubFile[temp[i]].hasOwnProperty(j)) {
                                    let tempn = Object.keys(this.storeSubFile[temp[i]][j]);
                                    for (let l = 0; l < tempn.length; l++) {
                                        for (let m = 0; m < this.storeSubFile[temp[i]][j][tempn[l]].length; m++) {
                                            let temps = {};
                                            let myDate = new Date();
                                            if (m === 0) {
                                                temps["append_file"] = false;
                                            }
                                            else {
                                                temps["append_file"] = true;
                                            }
                                            temps["file_data"] = this.storeSubFile[temp[i]][j][tempn[l]][m].file_data;
                                            temps["file_name"] = this.storeSubFile[temp[i]][j][tempn[l]][m].file_name + myDate;
                                            temps["file_display"] = this.storeSubFile[temp[i]][j][tempn[l]][m].file_name;
                                            temps["file_extension"] = this.storeSubFile[temp[i]][j][tempn[l]][m].file_extension;
                                            temps["table_name"] = temp[i];
                                            temps["field_id"] = response.last_insert_id[0];
                                            temps["field_name"] = tempn[l];
                                            this.createFile(temps);
                                        }
                                    }
                                }
                            }
                        }, 10);
                        let t1 = Object.keys(this.subViewData);
                        for (let a = 0; a < t1.length; a++) {
                            if (t1[a] == temp[i]) {
                                let t2 = Object.keys(this.subViewData[t1[a]]);
                                for (let b = 0; b < t2.length; b++) {
                                    if (this.subViewData[t1[a]][t2[b]].hasOwnProperty(j)) {
                                        let t3 = this.subViewData[t1[a]][t2[b]][j];
                                        for (let c = 0; c < t3.length; c++) {
                                            t3[c].row_id = response.last_insert_id[0];
                                        }
                                        if (this.subViewData[t1[a]][t2[b]][j].length) {
                                            this.CommonService.createSubValues(t3, t2[b]).subscribe((res) => {
                                                if (response.statusCode == 200) {
                                                }
                                                else {
                                                    this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                                                }
                                            }, (error) => {
                                                this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                    }
                }, (error) => {
                    this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                });
            }
        }
    }
    insideSubRow(parentTable, subTable) {
        if (!this.subViewData.hasOwnProperty(parentTable)) {
            this.subViewData[parentTable] = {};
        }
        if (!this.subViewData[parentTable].hasOwnProperty(subTable)) {
            this.subViewData[parentTable][subTable] = {};
        }
        if (!this.subViewData[parentTable][subTable].hasOwnProperty(this.insideSubIndex)) {
            this.subViewData[parentTable][subTable][this.insideSubIndex] = [];
        }
        let temp = {};
        for (let i = 0; i < this.subViewTableInfo[subTable].length; i++) {
            temp[this.subViewTableInfo[subTable][i].name] = "";
        }
        temp["row_id"] = this.insideSubIndex;
        this.subViewData[parentTable][subTable][this.insideSubIndex].push(temp);
    }
    insideSubValueChange(ind, parentTable, subTable, name, value) {
        this.subViewData[parentTable][subTable][this.insideSubIndex][ind][name] = value;
    }
    createFile(value) {
        this.CommonService.createFile(value).subscribe((response) => {
            if (response.status == 200) {
            }
            else {
                this.CommonService.showSnackbarUnhide('Something Went Wrong, File Not Update', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, File Not Update', ['red-growl']);
        });
    }
    fileUpload(event, name) {
        this.CommonService.uploadFile(event).then((response) => {
            if (!!this.storeFile[name]) {
                response[0]["append_file"] = true;
                this.storeFile[name].push(response[0]);
            }
            else {
                this.storeFile[name] = [];
                response[0]["append_file"] = false;
                this.storeFile[name].push(response[0]);
            }
        });
    }
    fileSubUpload(event, name, tablename, i) {
        this.CommonService.uploadFile(event).then((response) => {
            if (!this.storeSubFile.hasOwnProperty(tablename)) {
                this.storeSubFile[tablename] = {};
                this.storeSubFile[tablename][i] = {};
                this.storeSubFile[tablename][i][name] = [];
            }
            if (!this.storeSubFile[tablename].hasOwnProperty(i)) {
                this.storeSubFile[tablename][i] = {};
            }
            if (!this.storeSubFile[tablename][i].hasOwnProperty(name)) {
                this.storeSubFile[tablename][i][name] = [];
            }
            if (this.storeSubFile[tablename][i][name].length) {
                response[0]["append_file"] = true;
                this.storeSubFile[tablename][i][name].push(response[0]);
            }
            else {
                response[0]["append_file"] = false;
                this.storeSubFile[tablename][i][name].push(response[0]);
            }
        });
    }
    checkListValueChanges(name, value, item) {
        if (!!this.checkList[name]) {
            const index = this.checkList[name].findIndex((a) => { return a === value; });
            if (index === -1) {
                this.checkList[name].push(value.id);
                this.checkListName[name].push(value);
                this.valuesTemp[name].push(value.id);
                this.values[name].push(value.id);
            }
            else {
                this.CommonService.showSnackbar('Value Already Choosen', ['warning-growl']);
            }
        }
        else {
            this.checkList[name] = [];
            this.valuesTemp[name] = [];
            this.values[name] = [];
            this.checkList[name].push(value.id);
            this.valuesTemp[name].push(value.id);
            this.values[name].push(value.id);
            this.checkListName[name] = [];
            this.checkListName[name].push(value);
        }
        this.relativeFunction();
    }
    checkListForSelect(name, value) {
        if (!!this.checkList[name]) {
            const index = this.checkList[name].findIndex((a) => { return a === value; });
            if (index === -1) {
                this.checkList[name].push(value);
                this.valuesTemp[name].push(value);
                this.values[name].push(value);
            }
            else {
                this.CommonService.showSnackbar('Value Already Choosen', ['warning-growl']);
            }
        }
        else {
            this.checkList[name] = [];
            this.checkList[name].push(value);
            this.valuesTemp[name] = [];
            this.valuesTemp[name].push(value);
            this.values[name] = [];
            this.values[name].push(value);
        }
        this.relativeFunction();
    }
    // checkListForItem(name, value) {
    //   if (this.checkList[name].length) {
    //     const index: any = this.checkList[name].findIndex((a: any) => { return a === value });
    //     if (index === -1)
    //       this.checkList[name].push(value);
    //     else
    //       this.CommonService.showSnackbar('Value Already Choosen', ['warning-growl']);
    //   } else {
    //     this.checkList[name] = [];
    //     this.checkList[name].push(value);
    //   }
    // }
    removeCheckListForValue(name, i) {
        this.checkList[name].splice(i, 1);
        this.valuesTemp[name].splice(i, 1);
        this.values[name].splice(i, 1);
        this.relativeFunction();
    }
    removeCheckList(name, i) {
        this.checkListName[name].splice(i, 1);
        this.checkList[name].splice(i, 1);
        this.valuesTemp[name].splice(i, 1);
        this.values[name].splice(i, 1);
        this.relativeFunction();
    }
    // ------------------------------Sub Table CheckList----------------------------------------
    SubcheckListValueChanges(tablename, name, value, i) {
        console.log("defs", tablename, name, value, i, this.subValues);
        this.subValues[tablename][i][name].push(value);
    }
    SubcheckListForSelect(name, value, table, i) {
        const index = this.subValues[table][i][name].findIndex((a) => { return a === value; });
        if (index === -1) {
            this.subValues[table][i][name].push(value);
        }
        else {
            this.CommonService.showSnackbar('Value Already Choosen', ['warning-growl']);
        }
    }
    SubremoveCheckListForValue(name, i, table, j) {
        this.subValues[table][i][name].splice(j, 1);
    }
    // --------------------------------------------------Sub Table CheckList End-----------------------------------------
    valueChanges(name, value) {
        var _a, _b, _c, _d, _e, _f;
        this.values[name] = value;
        this.valuesTemp[name] = value;
        // console.log("tetttt", this.values)
        let temp = Object.keys(this.dateDifference);
        for (let i = 0; i < temp.length; i++) {
            if (this.dateDifference[temp[i]].includes(name)) {
                if (this.values[this.dateDifference[temp[i]][0]] !== "" && this.values[this.dateDifference[temp[i]][1]] !== "") {
                    let date1 = new Date(this.values[this.dateDifference[temp[i]][0]]);
                    let date2 = new Date(this.values[this.dateDifference[temp[i]][1]]);
                    let diffTime = Math.abs(date1 - date2);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (date1 < date2) {
                        this.values[temp[i]] = diffDays + " " + ((_a = this.dateDifference[temp[i]][2]) === null || _a === void 0 ? void 0 : _a.delay_status);
                        this.valuesTemp[temp[i]] = diffDays + " " + ((_b = this.dateDifference[temp[i]][2]) === null || _b === void 0 ? void 0 : _b.delay_status);
                    }
                    else if (date1 > date2) {
                        this.values[temp[i]] = diffDays + " " + ((_c = this.dateDifference[temp[i]][2]) === null || _c === void 0 ? void 0 : _c.early_status);
                        this.valuesTemp[temp[i]] = diffDays + " " + ((_d = this.dateDifference[temp[i]][2]) === null || _d === void 0 ? void 0 : _d.early_status);
                    }
                    else {
                        this.values[temp[i]] = (_e = this.dateDifference[temp[i]][2]) === null || _e === void 0 ? void 0 : _e.on_time_status;
                        this.valuesTemp[temp[i]] = (_f = this.dateDifference[temp[i]][2]) === null || _f === void 0 ? void 0 : _f.on_time_status;
                    }
                }
            }
        }
        this.relativeFunction();
    }
    valueForUser(name, value) {
        var _a;
        if ((_a = this.checkList[name]) === null || _a === void 0 ? void 0 : _a.length) {
            const index = this.checkList[name].findIndex((a) => { return a === value; });
            if (index === -1)
                this.checkList[name].push(value);
        }
        else {
            this.checkList[name] = [];
            this.checkList[name].push(value);
        }
        // console.log(this.checkList[name], 'checkingg');
    }
    switchvalueChanges(name, value, item) {
        this.values[name] = value;
        this.valuesTemp[name] = value;
        if (value == 1) {
            if (this.sameas.includes(name)) {
                for (let i = 0; i < item.relative_fields.sameasautofill.length; i++) {
                    for (let j = 0; j < item.relative_fields.sameasautofill[i].paste_name.length; j++) {
                        if (this.advancedSameAs.hasOwnProperty(item.relative_fields.sameasautofill[i].name)) {
                            this.values[item.relative_fields.sameasautofill[i].paste_name[j]] = this.advancedSameAs[item.relative_fields.sameasautofill[i].name];
                            this.valuesTemp[item.relative_fields.sameasautofill[i].paste_name[j]] = this.advancedSameAs[item.relative_fields.sameasautofill[i].name];
                        }
                        else {
                            this.values[item.relative_fields.sameasautofill[i].paste_name[j]] = this.values[item.relative_fields.sameasautofill[i].name];
                            this.valuesTemp[item.relative_fields.sameasautofill[i].paste_name[j]] = this.values[item.relative_fields.sameasautofill[i].name];
                        }
                    }
                }
            }
        }
        this.relativeFunction();
    }
    dropDownvalueChanges(name, value, item) {
        this.values[name] = value;
        this.valuesTemp[name] = value;
        let tempvalue;
        let temp = { id: value, tableId: item.parent_table_id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if (response.statusCode = 200) {
                tempvalue = response.info[0];
                let keysv = Object.keys(tempvalue);
                for (let i = 0; i < this.advanced_field.length; i++) {
                    if ((tempvalue.hasOwnProperty(this.advanced_field[i].parent_table_field) && this.advanced_field[i].name != name && this.advanced_field[i].parent_table_name == item.parent_table_name && this.advanced_field[i].merge_fields == '')) {
                        this.values[this.advanced_field[i].name] = value;
                        this.valuesTemp[this.advanced_field[i].name] = value;
                        if (typeof tempvalue[this.advanced_field[i].parent_table_field] == 'object') {
                            if (tempvalue[this.advanced_field[i].parent_table_field].value != "") {
                                tempvalue[this.advanced_field[i].parent_table_field].value = JSON.parse(tempvalue[this.advanced_field[i].parent_table_field].value);
                            }
                            this.editValues[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].parent_table_field].value[0];
                        }
                        else {
                            this.editValues[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].parent_table_field];
                        }
                    }
                    if (tempvalue.hasOwnProperty(this.advanced_field[i].master_field) && this.advanced_field[i].name != name && this.advanced_field[i].master_table == item.parent_table_name && this.advanced_field[i].merge_fields == '') {
                        if (typeof tempvalue[this.advanced_field[i].master_field] == 'object') {
                            if (tempvalue[this.advanced_field[i].master_field].value != "") {
                                tempvalue[this.advanced_field[i].master_field].value = JSON.parse(tempvalue[this.advanced_field[i].master_field].value);
                                this.editValues[(_a = this.advanced_field[i]) === null || _a === void 0 ? void 0 : _a.name] = (_c = tempvalue[(_b = this.advanced_field[i]) === null || _b === void 0 ? void 0 : _b.master_field]) === null || _c === void 0 ? void 0 : _c.value[0][(_d = this.advanced_field[i]) === null || _d === void 0 ? void 0 : _d.parent_table_field];
                                this.values[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].master_field].value[0].id;
                                this.valuesTemp[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].master_field].value[0].id;
                            }
                            else {
                                this.editValues[(_e = this.advanced_field[i]) === null || _e === void 0 ? void 0 : _e.name] = "";
                                this.values[this.advanced_field[i].name] = "";
                                this.valuesTemp[this.advanced_field[i].name] = "";
                            }
                        }
                        else {
                            this.editValues[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].master_field];
                        }
                    }
                }
                for (let i = 0; i < this.mergedFields.length; i++) {
                    if (this.mergedFields[i].parent_table_name == item.parent_table_name) {
                        this.editValues[this.mergedFields[i].name] = [];
                        for (let j = 0; j < this.mergedFields[i].merge_fields.length; j++) {
                            if (tempvalue.hasOwnProperty(this.mergedFields[i].merge_fields[j].name)) {
                                if (typeof tempvalue[this.mergedFields[i].merge_fields[j].name] == 'object') {
                                    if (tempvalue[this.mergedFields[i].merge_fields[j].name].value != "") {
                                        if (!Array.isArray(tempvalue[this.mergedFields[i].merge_fields[j].name].value)) {
                                            tempvalue[this.mergedFields[i].merge_fields[j].name].value = JSON.parse(tempvalue[this.mergedFields[i].merge_fields[j].name].value);
                                        }
                                        this.editValues[this.mergedFields[i].name].push(tempvalue[this.mergedFields[i].merge_fields[j].name].value[0][this.mergedFields[i].merge_fields[j].parent_table_field]);
                                        // this.values[this.mergedFields[i].name].push(tempvalue[this.mergedFields[i].merge_fields[j].name].value);
                                    }
                                }
                                else if (tempvalue[this.mergedFields[i].merge_fields[j].name] != '') {
                                    this.editValues[this.mergedFields[i].name].push(tempvalue[this.mergedFields[i].merge_fields[j].name]);
                                    // this.values[this.mergedFields[i].name].push(tempvalue[this.mergedFields[i].merge_fields[j].name]);
                                }
                            }
                        }
                        this.editValues[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name].join(', ');
                        this.values[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name];
                        this.valuesTemp[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name];
                    }
                }
                this.relativeFunction();
                // console.log("vvvvvvvvvvvvv", this.values, this.editValues)
            }
        });
    }
    dropDownSubvalueChanges(tablename, name, value, i, item) {
        this.subValues[tablename][i][name] = value;
        let tempvalue;
        let temp = { id: value, tableId: item.parent_table_id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            if (response.statusCode = 200) {
                tempvalue = response.info[0];
                let keysv = Object.keys(tempvalue);
                for (let k = 0; k < this.advancedsub_field[tablename].length; k++) {
                    if ((tempvalue.hasOwnProperty(this.advancedsub_field[tablename][k].parent_table_field) && this.advancedsub_field[tablename][k].name != name && this.advancedsub_field[tablename][k].parent_table_name == item.parent_table_name && this.advancedsub_field[tablename][k].field_sub_type != "merge_fields")) {
                        this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = value;
                        if (typeof tempvalue[this.advancedsub_field[tablename][k].parent_table_field] == 'object') {
                            if (tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value != "") {
                                tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value = JSON.parse(tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value);
                            }
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value[0][this.advancedsub_field[tablename][k].parent_table_field];
                        }
                        else {
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].parent_table_field];
                        }
                    }
                    if (tempvalue.hasOwnProperty(this.advancedsub_field[tablename][k].master_field) && this.advancedsub_field[tablename][k].name != name && this.advancedsub_field[tablename][k].master_table == item.parent_table_name && this.advancedsub_field[tablename][k].field_sub_type != "merge_fields") {
                        if (typeof tempvalue[this.advancedsub_field[tablename][k].master_field] == 'object') {
                            if (tempvalue[this.advancedsub_field[tablename][k].master_field].value != "") {
                                tempvalue[this.advancedsub_field[tablename][k].master_field].value = JSON.parse(tempvalue[this.advancedsub_field[tablename][k].master_field].value);
                            }
                            this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].master_field].value[0].id;
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].master_field].value[0][this.advancedsub_field[tablename][k].parent_table_field];
                        }
                        else {
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].master_field];
                        }
                    }
                }
                for (let k = 0; k < this.mergedsub_field[tablename].length; k++) {
                    if (this.mergedsub_field[tablename][k].parent_table_name == item.parent_table_name) {
                        this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name] = [];
                        for (let j = 0; j < this.mergedsub_field[tablename][k].merge_fields.length; j++) {
                            if (tempvalue.hasOwnProperty(this.mergedsub_field[tablename][k].merge_fields[j].name)) {
                                if (typeof tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name] == 'object') {
                                    if (tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value != "") {
                                        if (!Array.isArray(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value)) {
                                            tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value = JSON.parse(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value);
                                        }
                                        this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].push(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value[0][this.mergedsub_field[tablename][k].merge_fields[j].parent_table_field]);
                                    }
                                }
                                else if (tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name] != '') {
                                    this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].push(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name]);
                                }
                            }
                        }
                        this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name] = this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].toString();
                        this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name];
                    }
                }
            }
        });
    }
    subValueChanges(tablename, name, value, i) {
        this.subValues[tablename][i][name] = value;
    }
    subValueAutoChanges(tablename, name, value, i) {
        this.subValues[tablename][i][name] = value;
    }
    subValueAdd(tablename, value) {
        let temp = {};
        let tempv = {};
        if (!!this.subValues[tablename]) {
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number') {
                    if (value[i].default_value == "") {
                        temp[value[i].name] = 0;
                        tempv[value[i].name] = 0;
                    }
                    else {
                        temp[value[i].name] = value[i].default_value;
                        tempv[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                    if (value[i].default_value != "") {
                        temp[value[i].name] = value[i].default_value;
                        tempv[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'checklist') {
                    temp[value[i].name] = [];
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                    tempv[value[i].name] = value[i].default_value;
                }
            }
            this.subValues[tablename].push(temp);
            this.editsubValues[tablename].push(tempv);
        }
        else {
            this.subValues[tablename] = [];
            this.editsubValues[tablename] = [];
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number') {
                    if (value[i].default_value == "") {
                        temp[value[i].name] = 0;
                        tempv[value[i].name] = 0;
                    }
                    else {
                        temp[value[i].name] = value[i].default_value;
                        tempv[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                    if (value[i].default_value != "") {
                        temp[value[i].name] = value[i].default_value;
                        tempv[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'checklist') {
                    temp[value[i].name] = [];
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                    tempv[value[i].name] = value[i].default_value;
                }
            }
            // let tempv = temp;
            this.subValues[tablename].push(temp);
            this.editsubValues[tablename].push(tempv);
        }
    }
    test(e) {
    }
    formatDate(name, date) {
        // console.log("ddd", date)
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        // console.log("ggggggg", d)
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
    createDateTime(name) {
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = '' + d.getFullYear(), hours = '' + d.getHours(), minites = '' + d.getMinutes();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (hours.length < 2)
            hours = '0' + hours;
        if (minites.length < 2)
            minites = '0' + minites;
        let dformat = [year, month, day].join('-') + 'T' + [hours, minites].join(':');
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
    generatePassword(item) {
        let passwordLength = 8;
        let numberChars = "0123456789";
        let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerChars = "abcdefghijklmnopqrstuvwxyz";
        let specialChars = "~!@#$%^&*_+";
        let allChars = numberChars + upperChars + lowerChars + specialChars;
        let randPasswordArray = Array(passwordLength);
        randPasswordArray[0] = numberChars;
        randPasswordArray[1] = upperChars;
        randPasswordArray[2] = lowerChars;
        randPasswordArray[2] = specialChars;
        randPasswordArray = randPasswordArray.fill(allChars, 3);
        this.values[item] = this.shuffleArray(randPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)]; })).join('');
        this.valuesTemp[item] = this.shuffleArray(randPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)]; })).join('');
        this.userPassword = this.values[item];
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    getWidth(grid, item, row) {
        if (!!item) {
            if (row.length == 4) {
                return `calc( ${grid}% - 30px)`;
            }
            else {
                return `calc( ${grid}% - 50px)`;
            }
        }
    }
    redirectDashBoard() {
        this.route.navigate(['/dashboard/view', this.routeInfo.tablename], { queryParams: { id: this.routeInfo.id, tablename: this.routeInfo.tablename } });
    }
    validateEmail(value) {
        this.emailValidate = this.CommonService.validateEmail(value);
    }
}
CreateViewComponent.ɵfac = function CreateViewComponent_Factory(t) { return new (t || CreateViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
CreateViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateViewComponent, selectors: [["app-create-view"]], viewQuery: function CreateViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidecreate = _t);
    } }, decls: 6, vars: 2, consts: [["class", "container-b", 4, "ngIf"], ["class", "full-height", "style", "display: flex;align-items: center;justify-content: center;", 4, "ngIf"], ["mandatoryDia", ""], ["subTableView", ""], [1, "container-b"], [1, "container"], [1, "header-r"], [1, "arrow-div", 3, "click"], [1, "arrow-icon"], [1, "header-text"], [1, "body-c"], ["id", "sidecreate", 1, "group-c"], ["sidecreate", ""], ["matRipple", "", "matRippleColor", "'#ffffff'", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "footer-c"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "can-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 3, "click"], [1, "group-text"], [1, "content-group"], [1, "header-g", "position-r", 3, "id"], [1, "section-card"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], [3, "width", "class", 4, "ngFor", "ngForOf"], [1, "field-h", 3, "ngClass", "matTooltip"], [4, "ngIf"], ["style", "color: red;", 4, "ngIf"], ["class", "switch-f", 4, "ngIf"], ["class", "created-on", 4, "ngIf"], ["class", "mat-multi-select-chip", 4, "ngIf"], ["class", "created-by", 4, "ngIf"], ["style", "display: grid;", 4, "ngIf"], [2, "color", "red"], ["class", "radio-input", 4, "ngFor", "ngForOf"], [1, "radio-input"], [3, "checked", "click"], [3, "class", 4, "ngIf"], ["type", "text", 3, "value", "placeholder", "class", "disabled", "change", 4, "ngIf"], ["class", "man-f-c", 4, "ngIf"], [2, "width", "92%"], [1, "lock-icon"], ["type", "text", 3, "value", "placeholder", "disabled", "change"], [1, "man-f-c"], ["class", "duplicate-icon", 4, "ngIf"], [1, "duplicate-icon"], [1, "switch-f"], ["style", "width: 92%;", 4, "ngIf"], ["style", "color: red;font-size: 12px;", 4, "ngIf"], [2, "color", "red", "font-size", "12px"], ["name", "email", 3, "value", "placeholder", "class", "disabled", "change", "input", 4, "ngIf"], ["name", "email", 3, "value", "placeholder", "disabled", "change", "input"], ["matInput", "", 2, "width", "0px", 3, "matDatepicker", "value", "placeholder", "disabled", "click", "dateChange"], [1, "date-icon-d", 3, "click"], ["picker", ""], [1, "created-on"], ["type", "datetime-local", 3, "class", "placeholder", "disabled", "change", 4, "ngIf"], ["type", "datetime-local", 3, "placeholder", "disabled", "change"], ["type", "time", 3, "value", "placeholder", "class", "disabled", "change", 4, "ngIf"], ["type", "time", 3, "value", "placeholder", "disabled", "change"], ["rows", "3", 3, "value", "disabled", "change"], [1, "attachment", "position-r"], ["class", "file-link", 4, "ngFor", "ngForOf"], ["matTooltip", "Please Create the Record After Add File", 1, "att-btn"], [1, "file-link"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "close-icon", 3, "click"], ["matTooltip", "Please Create the Record After Add Image", 1, "att-btn"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "disabled", "change"], ["color", "primary", 3, "disabled", "change"], ["type", "number", 3, "value", "placeholder", "class", "disabled", "change", 4, "ngIf"], ["type", "number", 3, "value", "placeholder", "disabled", "change"], [3, "class", "placeholder", "disabled", "selectionChange", 4, "ngIf"], [3, "placeholder", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "placeholder", "class", "matAutocomplete", "value", "disabled", "focus", "input", 4, "ngIf"], ["autosetect", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["type", "text", 3, "placeholder", "matAutocomplete", "value", "disabled", "focus", "input"], [3, "value", "onSelectionChange"], [1, "mat-multi-select-chip"], [1, "mat-chip-flex"], ["class", "mat-chip-div", 3, "click", 4, "ngFor", "ngForOf"], ["type", "text", 1, "enter-key-chip", 3, "placeholder", "keyup.enter"], [1, "mat-chip-div", 3, "click"], [1, "matchip-close"], [3, "placeholder"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["type", "text", 1, "enter-key-chip", 3, "matAutocomplete", "placeholder", "disabled", "focus", "input"], [3, "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "onSelectionChange"], [1, "created-by"], [1, "mat-chip-div", 2, "margin", "0px"], [1, "user-opt"], ["src", "https://storage.googleapis.com/airlift-images/default_photoMon May 24 2021 14:56:12 GMT+0530 (India Standard Time).jpg", 1, "user-pro"], ["class", "user-pro", "src", "https://storage.googleapis.com/airlift-images/default_photoMon May 24 2021 14:56:12 GMT+0530 (India Standard Time).jpg", 4, "ngIf"], ["class", "user-pro", 3, "src", 4, "ngIf"], [1, "user-pro", 3, "src"], ["type", "text", "class", "enter-key-chip", 3, "placeholder", "matAutocomplete", "disabled", "value", "input", 4, "ngIf"], ["type", "text", 1, "enter-key-chip", 3, "placeholder", "matAutocomplete", "disabled", "value", "input"], [2, "display", "grid"], [1, "sub-table"], [1, "sub-t-h-c"], [1, "sub-t-h-n"], ["class", "sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "sub-e-r", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "matTooltip", "Please Create The Record After Add New Row", 1, "add-btn"], [1, "sub-t-h-t"], [1, "sub-e-r"], [1, "sub-t-r"], [1, "sub-t-r-n"], ["class", "sub-t-r-f", 4, "ngFor", "ngForOf"], [1, "sub-t-r-f"], ["class", "sub-v-a", 4, "ngIf"], ["class", "mat-multi-select-chip-sub", 4, "ngIf"], [1, "sub-v-a"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "valueChange", "change"], ["type", "password", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "valueChange", "change"], ["matInput", "", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "placeholder", "click", "dateChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "change"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "change"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 3, "change"], ["file", ""], ["type", "text", 1, "sub-input", "sub-input-off"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "valueChange", "change"], [1, "sub-input", "sub-input-off", 3, "placeholder", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "disabled", "input"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "disabled", "value", "input", "valueChange"], [1, "mat-multi-select-chip-sub"], ["type", "text", 1, "enter-key-chip", 3, "matAutocomplete", "placeholder", "focus", "input"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "disabled", "valueChange"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "sub-create-btn", 3, "click"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "85px", "width", "85px"], [1, "s-o-g"], [1, "s-s-g"], [1, "s-c-g"], [1, "s-h-c", 3, "click"], [1, "s-b-h"], [1, "s-font"], [1, "inside-sub-h"], [1, "inside-sub-t"], [1, "inside-sub-t-h"], [1, "inside-sub-t-h-n"], ["class", "inside-sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "inside-sub-e-r", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "add-btn", 3, "click"], [1, "inside-sub-t-h-t"], [1, "inside-sub-e-r"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "change"], ["type", "password", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "change"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "value", "click", "valueChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "change"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "value", "valueChange", "input"]], template: function CreateViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateViewComponent_div_0_Template, 19, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateViewComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateViewComponent_ng_template_2_Template, 9, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateViewComponent_ng_template_4_Template, 17, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container-b[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.container[_ngcontent-%COMP%] {\n  background: rgba(70, 80, 90, .1);\n  display: grid;\n  grid-template-rows: 44.5px calc( 100vh - 93px) 48.5px;\n}\n\n.header-r[_ngcontent-%COMP%] {\n  z-index: 9999999;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 50px calc( 100% - 50px);\n  align-items: center;\n  height: 44.5px;\n  margin: 0 0 0.5px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);\n  \n  background: linear-gradient( 1deg, rgba(48, 57, 84, 1) 32%, rgb(95 103 127) 100%);\n  opacity: 1;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  padding: 7px 5px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 16px;\n  font-weight: 500;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n\n.arrow-div[_ngcontent-%COMP%] {\n  width: 51.5px;\n  height: 44.5px;\n  margin: 0 14.3px 0 0;\n  padding: 0px 6px;\n  \n  background: linear-gradient( 46deg, rgb(97 108 142) 32%, rgb(135 143 171) 100%);\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.arrow-icon[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  color: var(--white);\n}\n\n.arrow-icon[_ngcontent-%COMP%]:hover, .group-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  transition: all 0.3s ease-in-out 0.1s;\n}\n\n.body-c[_ngcontent-%COMP%] {\n  height: calc( 100vh - 44.5px);\n  width: 100%;\n  z-index: 999;\n  display: grid;\n  grid-template-columns: 200px auto;\n  background-color: #eceeef8c;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 28px 22px 28px 10px;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgb(224 227 231 / 70%);\n}\n\n.group-c[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.2);\n  \n  padding: 20px 12px;\n  background: #fff;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--white);\n  font-size: 14px;\n  height: 37px;\n  text-transform: capitalize;\n  border-radius: 5px;\n  \n  background: linear-gradient( 1deg, rgba(48, 57, 84, 1) 32%, rgb(95 103 127) 100%);\n  font-weight: 600;\n  padding: 6px;\n}\n\n.group-btn-o[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  \n  font-size: 13px;\n  height: 34px;\n  text-transform: capitalize;\n  color: rgba(47, 58, 87, .95);\n  padding: 6px;\n  margin: 2px 0;\n}\n\n.btn-b[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 18px;\n  \n  display: flex;\n  border-radius: 4px;\n  margin-right: 8px;\n  background-color: var(--white);\n}\n\n.btn-b-o[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 18px;\n  \n  display: flex;\n  border-radius: 4px;\n  margin-right: 8px;\n}\n\n.content-c[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: flex;\n  overflow: auto;\n  height: 87vh;\n  grid-gap: 20px;\n  margin: 10px 0px;\n  flex-direction: column;\n}\n\n.content-group[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g[_ngcontent-%COMP%] {\n  padding: 6px 25px;\n  display: grid;\n  grid-template-rows: 25px auto;\n  grid-gap: 5px;\n}\n\n.switch-f[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 28px;\n  padding: 2px 2px;\n}\n\n.field-h[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: flex-end;\n  \n  color: rgb(40 48 72);\n  font-weight: 500;\n}\n\n.input-f[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 28px;\n  padding: 2px 8px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  border: solid 1px #cacaca94;\n  color: #40474E;\n  font-family: 'Roboto';\n}\n\n.input-date-disabled[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border-radius: 4px !important;\n  font-size: 13px;\n  background-color: #efefef8a;\n  height: -webkit-max-content;\n  height: max-content;\n  min-height: 28px;\n  padding: 2px 8px;\n  border: solid 1px #cacaca94;\n  align-items: center;\n  color: #40474E;\n  \n  font-family: 'Roboto';\n}\n\n.input-textarea-dis[_ngcontent-%COMP%] {\n  border: solid 1px #cacaca94;\n  border-radius: 4px !important;\n  font-size: 13px;\n  padding: 6px 8px;\n  width: 100%;\n  display: flex;\n  background-color: #efefef8a;\n  align-items: center;\n  color: #40474E;\n  font-family: 'Roboto';\n}\n\n.input-select[_ngcontent-%COMP%] {\n  border: solid 1px #cacaca94;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 28px;\n  padding: 2px 8px;\n  display: grid;\n  align-items: center;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.input-date[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 28px;\n  padding: 2px 8px;\n  border: solid 1px #cacaca94;\n  align-items: center;\n  color: #40474E;\n  font-family: 'Roboto';\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n  border: solid 1px #cacaca94;\n  border-radius: 4px !important;\n  font-size: 13px;\n  padding: 2px 8px;\n  width: 100%;\n  display: flex;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.duplicate-icon[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  display: grid !important;\n  color: #F13333;\n  background-color: rgb(255 158 158 / 18%) !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px !important;\n  border-radius: 50% !important;\n}\n\n.header-g[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgb(26 38 74 / 95%);\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n\n.row-f[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  position: unset;\n}\n\n.group-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.footer-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 6px 24px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 99999999999;\n  background-color: var(--white);\n}\n\n.cre-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 10px 20px;\n  margin-left: 10px;\n}\n\n.can-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 10px 20px;\n  margin-left: 10px;\n}\n\n#tableViewFileLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.spin-class[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.red-c[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.border-c-r[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.man-f-c[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 12px;\n}\n\n.dialog-h[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: right;\n  align-items: center;\n}\n\n.dialog-c[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  font-size: 20px;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.sub-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid var(--greyish) !important;\n}\n\n.sub-input-off[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  display: grid;\n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-input-off-d[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  \n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-table[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: overlay;\n  width: 100%;\n}\n\n.sub-t-h-c[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n  background-color: #f5f6fa !important;\n}\n\n.sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-r[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-r-f[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n}\n\n.sub-t-r-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  color: var(--warm-grey);\n  align-items: center;\n  justify-content: center;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  border: 0px;\n  color: var(--white);\n  background-color: var(--blue);\n  margin-top: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n\n.sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.sub-v-a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.che-close-i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  color: var(--warm-grey);\n  cursor: pointer;\n  height: 18px !important;\n  width: 18px !important;\n}\n\n.che-f[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border-radius: 2px;\n  padding: 2px 4px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  color: var(--warm-grey);\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.che[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sub-create-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  color: var(--white);\n  border-radius: 2px;\n  padding: 3px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.inside-sub-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\n.inside-sub-t[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.inside-sub-t-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n  background-color: #f5f6fa !important;\n}\n\n.inside-sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.radio-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.radio-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.border-dash[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.border-dash-u[_ngcontent-%COMP%] {\n  background-color: var(--greyish);\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sec-head[_ngcontent-%COMP%] {\n  margin: 10px 22px;\n}\n\ninput[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-date[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-date[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-select[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-textarea[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n\n\n.dark-text-black[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.matchip-close[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 16px;\n  width: 16px;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n.mat-chip-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  height: 16px;\n  padding: 4px 4px;\n  background-color: #d6d6d6d4;\n  border-radius: 2px;\n  color: var(--black);\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.mat-chip-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-multi-select-chip[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 100%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.mat-multi-select-chip-sub[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 92%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.created-by[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  height: 28px;\n  padding: 2px 8px;\n  display: grid;\n  align-items: center;\n  width: 100%;\n  background-color: #f6f6f6;\n  color: #40474E;\n}\n\n.created-on[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 2px 8px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: #f6f6f6;\n  font-size: 13px;\n  color: #40474E;\n  height: 28px;\n}\n\n.enter-key-chip[_ngcontent-%COMP%] {\n  min-height: 20px !important;\n}\n\n.enter-key-chip[_ngcontent-%COMP%]:hover {\n  border: none !important;\n}\n\n.enter-key-chip[_ngcontent-%COMP%]:focus {\n  border: none !important;\n}\n\n.user-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--charcoal-grey);\n  font-size: 15px;\n}\n\n.user-pro[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.group-btn-o[_ngcontent-%COMP%]:hover {\n  background-color: var(--pale-blue);\n  transition: background-color 1s ease, font-weight 1s ease;\n  font-weight: 600;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #157ffb;\n}\n\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: 23px !important;\n}\n\n.date-icon-d[_ngcontent-%COMP%] {\n  display: grid !important;\n  align-items: center !important;\n  cursor: pointer !important;\n  color: #0971cc !important;\n  background-color: #0971cc2b !important;\n  border-radius: 50% !important;\n  justify-content: center !important;\n  font-size: 16px !important;\n  height: 24px !important;\n  width: 24px !important;\n}\n\n.lock-icon[_ngcontent-%COMP%] {\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n  color: #FF9031 !important;\n  background-color: rgb(255 234 216) !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px !important;\n  border-radius: 50% !important;\n  display: flex;\n}\n\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: #40474E !important;\n}\n\n.t1[_ngcontent-%COMP%] {\n  background-color: #c3e8db;\n  height: 158px;\n  border-radius: 0px 4px 140px 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.s-i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: var(--white);\n  font-weight: 600;\n  font-family: 'Goblin One', cursive;\n  margin-right: 35px;\n}\n\n.s-font[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: right;\n  color: #353535e0;\n  font-size: 14px;\n  margin-right: 10px;\n  height: 26px;\n}\n\n.s-b-h[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: end;\n  justify-content: right;\n  color: var(--charcoal-grey);\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: 10px;\n  height: 30px;\n}\n\n.s-c-g[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: right;\n}\n\n.s-h-c[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: grid !important;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 18px;\n  color: #51525d;\n}\n\n.s-s-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXZpZXcvY3JlYXRlLXZpZXcvY3JlYXRlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QywrQkFBK0I7RUFDL0IsaUZBQWlGO0VBQ2pGLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLCtFQUErRTtFQUMvRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1Qyx3RkFBd0Y7RUFDeEYsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxpRkFBaUY7RUFDakYsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNERBQTREO0VBQzVELG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELG9DQUFvQztFQUNwQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxvQ0FBb0M7RUFDcEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELG9DQUFvQztFQUNwQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDViwyQkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5REFBeUQ7RUFDekQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3MCwgODAsIDkwLCAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDQuNXB4IGNhbGMoIDEwMHZoIC0gOTNweCkgNDguNXB4O1xufVxuXG4uaGVhZGVyLXIge1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggY2FsYyggMTAwJSAtIDUwcHgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQ0LjVweDtcbiAgbWFyZ2luOiAwIDAgMC41cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDEwJSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNDY7ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMWRlZywgcmdiYSg0OCwgNTcsIDg0LCAxKSAzMiUsIHJnYig5NSAxMDMgMTI3KSAxMDAlKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgcGFkZGluZzogN3B4IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmFycm93LWRpdiB7XG4gIHdpZHRoOiA1MS41cHg7XG4gIGhlaWdodDogNDQuNXB4O1xuICBtYXJnaW46IDAgMTQuM3B4IDAgMDtcbiAgcGFkZGluZzogMHB4IDZweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10d28pOyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDQ2ZGVnLCByZ2IoOTcgMTA4IDE0MikgMzIlLCByZ2IoMTM1IDE0MyAxNzEpIDEwMCUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5hcnJvdy1pY29uOmhvdmVyLCAuZ3JvdXAtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMC4xcztcbn1cblxuLmJvZHktYyB7XG4gIGhlaWdodDogY2FsYyggMTAwdmggLSA0NC41cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY4Yztcbn1cblxuLnNlY3Rpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDI4cHggMjJweCAyOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYigyMjQgMjI3IDIzMSAvIDcwJSk7XG59XG5cbi5ncm91cC1jIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsICMzMzY1YzggMzglLCAjOGE2ZmY0IDExMSUsICNhMDcxZmYgMTMwJSk7ICovXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmdyb3VwLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspOyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDFkZWcsIHJnYmEoNDgsIDU3LCA4NCwgMSkgMzIlLCByZ2IoOTUgMTAzIDEyNykgMTAwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmdyb3VwLWJ0bi1vIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogY29sb3I6IHZhcigtLWRhcmstdHdvKTsgKi9cbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpO1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbi5idG4tYiB7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgLyogYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS13aGl0ZSk7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmJ0bi1iLW8ge1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jb250ZW50LWMge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDg3dmg7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC1ncm91cCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLmZpZWxkLWcge1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IGF1dG87XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5zd2l0Y2gtZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMnB4IDJweDtcbn1cblxuLmZpZWxkLWgge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAvKiBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpOyAqL1xuICBjb2xvcjogcmdiKDQwIDQ4IDcyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0LWYge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhOTQ7XG4gIGNvbG9yOiAjNDA0NzRFO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5pbnB1dC1kYXRlLWRpc2FibGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY4YTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQwNDc0RTtcbiAgLyogY29sb3I6ICM3Nzc3NzdmYzsgKi9cbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uaW5wdXQtdGV4dGFyZWEtZGlzIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjhhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQwNDc0RTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3Nzc3ZmM7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLmlucHV0LWRhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhOTQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDA0NzRFO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5pbnB1dC10ZXh0YXJlYSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E5NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjNzc3Nzc3ZmM7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLmR1cGxpY2F0ZS1pY29uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0YxMzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTggMTU4IC8gMTglKSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMjYgMzggNzQgLyA5NSUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucm93LWYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHVuc2V0O1xufVxuXG4uZ3JvdXAtdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZm9vdGVyLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQsIDAgLTJweCA2cHggcmdiYSgwLCAwLCAwLCAuMDcpO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uY3JlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FuLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaC10d28pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jdGFibGVWaWV3RmlsZUxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF0dGFjaG1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4uYXR0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA3MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWJsdWUpO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGlzaC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3Bpbi1jbGFzcyB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnJlZC1jIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWMtciB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5tYW4tZi1jIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaWFsb2ctaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctYyB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59ICovXG5cbi5zdWItaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmV5aXNoKSAhaW1wb3J0YW50O1xufVxuXG4uc3ViLWlucHV0LW9mZiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uc3ViLWlucHV0LW9mZi1kIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG59XG5cbi5zdWItdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWItdC1oLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItdC1oLXQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdWItdC1oLW4ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdC1yLWYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Yi10LXItbiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWJ0biB7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Yi1lLXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdi1hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaGUtY2xvc2UtaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlLWYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jaGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zdWItY3JlYXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5zaWRlLXN1Yi1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5zaWRlLXN1Yi10IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5zaWRlLXN1Yi10LWgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhICFpbXBvcnRhbnQ7XG59XG5cbi5pbnNpZGUtc3ViLXQtaC1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluc2lkZS1zdWItdC1oLXQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbnNpZGUtc3ViLWUtciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbn1cblxuLnJhZGlvLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmFkaW8tYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYm9yZGVyLWRhc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYm9yZGVyLWRhc2gtdSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXlpc2gpO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWMtaGVhZCB7XG4gIG1hcmdpbjogMTBweCAyMnB4O1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFhN2JlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSkgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWRhdGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA3JSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC1kYXRlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gNSUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICMxYTdiZWQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1zZWxlY3Q6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFhN2JlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSkgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LXRleHRhcmVhOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gNSUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICMxYTdiZWQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1zZWxlY3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA3JSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC10ZXh0YXJlYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLyogLmlucHV0LWRhdGUtZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA3JSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59ICovXG5cbi5kYXJrLXRleHQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXRjaGlwLWNsb3NlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWNoaXAtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1hdC1jaGlwLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5tYXQtbXVsdGktc2VsZWN0LWNoaXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4ubWF0LW11bHRpLXNlbGVjdC1jaGlwLXN1YiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDkyJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuLmNyZWF0ZWQtYnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNDA0NzRFO1xufVxuXG4uY3JlYXRlZC1vbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0MDQ3NEU7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmVudGVyLWtleS1jaGlwIHtcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZW50ZXIta2V5LWNoaXA6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmVudGVyLWtleS1jaGlwOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLW9wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udXNlci1wcm8ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmdyb3VwLWJ0bi1vOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLCBmb250LXdlaWdodCAxcyBlYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTdmZmI7XG59XG5cbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDIzcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGUtaWNvbi1kIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogIzA5NzFjYyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk3MWNjMmIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLmxvY2staWNvbiB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgY29sb3I6ICNGRjkwMzEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyMzQgMjE2KSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNDA0NzRFICFpbXBvcnRhbnQ7XG59XG4udDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlOGRiO1xuICBoZWlnaHQ6IDE1OHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDE0MHB4IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zLWkge1xuICBmb250LXNpemU6IDkwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnR29ibGluIE9uZScsIGN1cnNpdmU7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuLnMtZm9udCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGNvbG9yOiAjMzUzNTM1ZTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDI2cHg7XG59XG5cbi5zLWItaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnMtYy1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLnMtaC1jIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNTE1MjVkO1xufVxuXG4ucy1zLWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-view',
                templateUrl: './create-view.component.html',
                styleUrls: ['./create-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { sidecreate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['sidecreate']
        }] }); })();


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
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




























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
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"]
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
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"]] }); })();
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
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=create-view-create-view-module.js.map