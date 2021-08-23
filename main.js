(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+n7K":
/*!**************************************************************!*\
  !*** ./src/app/main-view/table-view/table-view.component.ts ***!
  \**************************************************************/
/*! exports provided: TableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewComponent", function() { return TableViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_transfer_data_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-transfer/data-transfer.component */ "whUY");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../atoms/send-mail/send-mail.component */ "1FZ8");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");


























const _c0 = ["menuFilterTrigger"];
function TableViewComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.redirectCreateView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r21.launchIcon == 0 ? true : false);
} }
function TableViewComponent_div_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.goToProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.gotToReports(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_20_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_20_mat_option_13_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const item_r64 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r65.selectSummarizeCountField(item_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r64.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r64 == null ? null : item_r64.field_title, " ");
} }
function TableViewComponent_div_0_div_20_div_14_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const lastcall_r70 = ctx_r72.last;
    const i_r69 = ctx_r72.index;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.testt(lastcall_r70, i_r69));
} }
function TableViewComponent_div_0_div_20_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_14_div_1_span_1_Template, 2, 1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.lastLoop == 1);
} }
function TableViewComponent_div_0_div_20_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_14_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.summarizeCountInfo);
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function TableViewComponent_div_0_div_20_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_20_div_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r74 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r77.selectSummarizeCountValue(item_r74.value, item_r74.value_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r74.value == "" ? "sum-dd-h" : "", " cursor sum-c-v-f");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r73.sumColor[i_r75]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r74.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r74.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r74.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r74.value == ctx_r73.summarizeCountValue || item_r74.value_id == ctx_r73.summarizeCountValue ? "sum-radio-i-s" : "sum-radio-i");
} }
function TableViewComponent_div_0_div_20_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_15_div_1_Template, 11, 12, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.summarizeCountInfo);
} }
function TableViewComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "format_list_numbered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Summarize Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_0_div_20_Template_input_input_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.getSumFields($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", null, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_div_0_div_20_mat_option_13_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_0_div_20_div_14_Template, 2, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_div_0_div_20_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r24.tableInfo == null ? null : ctx_r24.tableInfo.summarize_count[ctx_r24.userData.id] == null ? null : ctx_r24.tableInfo.summarize_count[ctx_r24.userData.id].f_title)("matAutocomplete", _r60)("value", ctx_r24.tableInfo == null ? null : ctx_r24.tableInfo.summarize_count[ctx_r24.userData.id] == null ? null : ctx_r24.tableInfo.summarize_count[ctx_r24.userData.id].f_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.filterAddField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.summarizeCountInfo.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.summarizeCountInfo.length && ctx_r24.sumlength == ctx_r24.summarizeCountInfo.length);
} }
function TableViewComponent_div_0_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 112);
} }
function TableViewComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_33_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r81.open(); })("dateChange", function TableViewComponent_div_0_div_33_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r84.formatDateSearch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_33_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return !!_r81 ? _r81.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx_r27.selectSearchValue, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r27.selectedSearchField == null ? null : ctx_r27.selectedSearchField.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r81);
} }
function TableViewComponent_div_0_mat_select_34_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_select_34_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const option_r87 = ctx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r88.selectSearchValue = option_r87; return ctx_r88.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r87, " ");
} }
function TableViewComponent_div_0_mat_select_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_mat_select_34_mat_option_1_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r28.selectSearchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.selectedSearchField.option_list);
} }
function TableViewComponent_div_0_input_35_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 119, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_input_35_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r91.selectedSearchField ? _r90.openMenu() : _r90.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
} }
function TableViewComponent_div_0_input_36_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_0_input_36_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.getSearchValues($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r30.selectSearchValue == "" ? "" : ctx_r30.selectedSearchField.parent_table_field == "" ? ctx_r30.selectSearchValue[ctx_r30.selectedSearchField == null ? null : ctx_r30.selectedSearchField.name] : ctx_r30.selectSearchValue[ctx_r30.selectedSearchField == null ? null : ctx_r30.selectedSearchField.parent_table_field])("matAutocomplete", _r32);
} }
function TableViewComponent_div_0_mat_icon_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_option_40_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const items_r95 = ctx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r96.selectSearchValue = items_r95; return ctx_r96.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r95 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", items_r95[ctx_r33.selectedSearchField == null ? null : ctx_r33.selectedSearchField.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r33.selectedSearchField == null ? null : ctx_r33.selectedSearchField.parent_table_id) == 0 ? items_r95[ctx_r33.selectedSearchField == null ? null : ctx_r33.selectedSearchField.name] : items_r95[ctx_r33.selectedSearchField == null ? null : ctx_r33.selectedSearchField.parent_table_field], " ");
} }
function TableViewComponent_div_0_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_43_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r98.selectedSearchField = ""; ctx_r98.selectSearchValue = ""; return ctx_r98.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.selectedSearchField == null ? null : ctx_r34.selectedSearchField.field_title);
} }
function TableViewComponent_div_0_mat_icon_45_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_icon_45_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r100.summarizeCountHide(ctx_r100.tableInfo == null ? null : ctx_r100.tableInfo.summarize_count[ctx_r100.userData.id] == null ? null : ctx_r100.tableInfo.summarize_count[ctx_r100.userData.id].hide); return ctx_r100.sumCountHide = "yes"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_mat_icon_46_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_icon_46_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r102.summarizeCountHide(ctx_r102.tableInfo == null ? null : ctx_r102.tableInfo.summarize_count[ctx_r102.userData.id] == null ? null : ctx_r102.tableInfo.summarize_count[ctx_r102.userData.id].hide); return ctx_r102.sumCountHide = "no"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [5, 10, 25, 50, 100, 150, 200]; };
function TableViewComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-paginator", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TableViewComponent_div_0_div_47_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r104.pageSize = $event.pageSize; ctx_r104.page = $event.pageIndex; ctx_r104.getBody.limit = $event.pageSize; ctx_r104.getBody.page = $event.pageIndex; return ctx_r104.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r37.count)("pageSize", ctx_r37.pageSize)("pageIndex", ctx_r37.getBody.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
} }
function TableViewComponent_div_0_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_48_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.transferData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transfer Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_53_th_3_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r116.selectAll == true ? ctx_r116.selectAll = false : ctx_r116.selectAll = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_td_4_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_53_td_4_mat_icon_3_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const row_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r123.redirectEditView(row_r118.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_td_4_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_53_td_4_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const row_r118 = ctx_r127.$implicit; const i_r119 = ctx_r127.index; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r126.UpdateBookMark(row_r118.id, row_r118.bookmarks, i_r119); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_td_4_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_53_td_4_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const row_r118 = ctx_r130.$implicit; const i_r119 = ctx_r130.index; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r129.UpdateBookMark(row_r118.id, row_r118.bookmarks, i_r119); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_53_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const row_r118 = ctx.$implicit; return row_r118.checked = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_53_td_4_mat_icon_3_Template, 2, 0, "mat-icon", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_53_td_4_mat_icon_4_Template, 2, 0, "mat-icon", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_53_td_4_mat_icon_5_Template, 2, 0, "mat-icon", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r118 = ctx.$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", row_r118.checked || ctx_r109.selectAll == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.launchIcon == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r109.bookmark.includes(row_r118.id) && ctx_r109.routeId.id == 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r109.bookmark.includes(row_r118.id) && ctx_r109.routeId.id == 307);
} }
function TableViewComponent_div_0_div_53_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", column_r134 == null ? null : column_r134.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mat-sort-header", column_r134 == null ? null : column_r134.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r134 == null ? null : column_r134.field_title, " ");
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r139[column_r134 == null ? null : column_r134.name], "");
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r139[column_r134 == null ? null : column_r134.name], "MMM d,y"));
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r139[column_r134 == null ? null : column_r134.name], "MMM d, y, h:mm:ss a"));
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "********");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r139[column_r134 == null ? null : column_r134.name] == 1 ? "Yes" : "No");
} }
function TableViewComponent_div_0_div_53_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_53_ng_container_5_td_2_span_1_Template, 2, 1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_53_ng_container_5_td_2_span_2_Template, 3, 4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_53_ng_container_5_td_2_span_3_Template, 3, 4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_53_ng_container_5_td_2_span_4_Template, 2, 0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_53_ng_container_5_td_2_span_5_Template, 2, 1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r134 == null ? null : column_r134.field_sub_type) != "date" && (column_r134 == null ? null : column_r134.field_sub_type) != "datetime-local" && (column_r134 == null ? null : column_r134.field_sub_type) != "password" && (column_r134 == null ? null : column_r134.field_sub_type) != "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r134 == null ? null : column_r134.field_sub_type) == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r134 == null ? null : column_r134.field_sub_type) == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r134 == null ? null : column_r134.field_sub_type) == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r134 == null ? null : column_r134.field_sub_type) == "switch");
} }
function TableViewComponent_div_0_div_53_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_53_ng_container_5_th_1_Template, 2, 3, "th", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_53_ng_container_5_td_2_Template, 6, 5, "td", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r134 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r134 == null ? null : column_r134.name);
} }
function TableViewComponent_div_0_div_53_ng_container_6_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", column_r154 == null ? null : column_r154.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mat-sort-header", column_r154 == null ? null : column_r154.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r154 == null ? null : column_r154.display_name, "");
} }
function TableViewComponent_div_0_div_53_ng_container_6_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_53_ng_container_6_td_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const row_r159 = ctx.$implicit; const column_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return ctx_r160.subTableEdit(_r17, column_r154, row_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_53_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_53_ng_container_6_th_1_Template, 2, 3, "th", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_53_ng_container_6_td_2_Template, 4, 0, "td", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r154 == null ? null : column_r154.display_name);
} }
function TableViewComponent_div_0_div_53_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 165);
} }
function TableViewComponent_div_0_div_53_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_53_td_9_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r165); const row_r163 = ctx.$implicit; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r164.rowId = row_r163.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function TableViewComponent_div_0_div_53_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 167);
} }
function TableViewComponent_div_0_div_53_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 168);
} }
function TableViewComponent_div_0_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TableViewComponent_div_0_div_53_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r167.getBody.sort_type = $event.direction; ctx_r167.getBody.sort_field = $event.active; return ctx_r167.getFilterValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_53_th_3_Template, 3, 0, "th", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_53_td_4_Template, 6, 4, "td", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_53_ng_container_5_Template, 3, 1, "ng-container", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_0_div_53_ng_container_6_Template, 3, 1, "ng-container", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_div_0_div_53_th_8_Template, 1, 0, "th", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_div_0_div_53_td_9_Template, 4, 1, "td", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_div_0_div_53_tr_10_Template, 1, 0, "tr", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_div_0_div_53_tr_11_Template, 1, 0, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r40.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.metaData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.subTableInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r40.columnsToDisplay1)("matHeaderRowDefSticky", ctx_r40.itsSticky);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r40.columnsToDisplay1);
} }
function TableViewComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "circle", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "ellipse", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_57_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_57_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r169.ExportA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_58_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_58_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r171.BookMarkA = 0; return ctx_r171.deleteBookMarkFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_59_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_59_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r173.NotesA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_60_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_60_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r175.TaskA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_61_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_61_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r177.MailA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_62_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_62_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r179.ExportA = 1; return ctx_r179.ExportTOExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_63_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_63_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r182); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r181.BookMarkA = 1; return ctx_r181.bookMarkFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_64_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_64_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r183.NotesA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_65_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_65_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r185.TaskA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_66_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_66_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r187.MailA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_67_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_67_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r189.MoreMenuA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_68_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_68_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r191.MoreMenuA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_div_0_button_12_Template, 4, 1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_0_button_14_Template, 2, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_div_0_div_15_Template, 3, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableViewComponent_div_0_div_20_Template, 16, 6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r193.openFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TableViewComponent_div_0_span_27_Template, 1, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r195.OpenDialog(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "border_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TableViewComponent_div_0_div_33_Template, 9, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TableViewComponent_div_0_mat_select_34_Template, 2, 2, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TableViewComponent_div_0_input_35_Template, 2, 1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TableViewComponent_div_0_input_36_Template, 1, 2, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TableViewComponent_div_0_mat_icon_37_Template, 2, 0, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-autocomplete", null, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TableViewComponent_div_0_mat_option_40_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TableViewComponent_div_0_div_43_Template, 5, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableViewComponent_div_0_mat_icon_45_Template, 2, 0, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TableViewComponent_div_0_mat_icon_46_Template, 2, 0, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TableViewComponent_div_0_div_47_Template, 2, 5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TableViewComponent_div_0_div_48_Template, 4, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TableViewComponent_div_0_div_49_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TableViewComponent_div_0_div_53_Template, 12, 6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TableViewComponent_div_0_div_54_Template, 53, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TableViewComponent_div_0_span_57_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TableViewComponent_div_0_span_58_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TableViewComponent_div_0_span_59_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TableViewComponent_div_0_span_60_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TableViewComponent_div_0_span_61_Template, 2, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TableViewComponent_div_0_span_62_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TableViewComponent_div_0_span_63_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TableViewComponent_div_0_span_64_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TableViewComponent_div_0_span_65_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TableViewComponent_div_0_span_66_Template, 2, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TableViewComponent_div_0_span_67_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, TableViewComponent_div_0_span_68_Template, 3, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tableInfo.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tableInfo.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tableInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.processPermission == null ? null : ctx_r0.processPermission.create_item) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.processPermission == null ? null : ctx_r0.processPermission.edit_process) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.processPermission == null ? null : ctx_r0.processPermission.reports) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sumCountHide == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filtercount && ctx_r0.filtercount.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.field_sub_type) == "date" && !!ctx_r0.selectedSearchField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.selectedSearchField && (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.field_sub_type) != "date" && (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.option_list) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selectedSearchField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.field_sub_type) != "date" && (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.option_list) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.field_sub_type) != "date" && (ctx_r0.selectedSearchField == null ? null : ctx_r0.selectedSearchField.option_list) == "" || !ctx_r0.selectedSearchField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.selectedSearchField && ctx_r0.selectedSearchField != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sumCountHide == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sumCountHide == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.metaData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.showTransferBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tableSniper == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnsToDisplay1.length && !!ctx_r0.metaData1 && ctx_r0.tableSniper == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnsToDisplay1.length && !!ctx_r0.metaData1 && ctx_r0.tableSniper == 1 && !ctx_r0.data1.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("r-4 cursor ", ctx_r0.MoreMenuA == 0 ? "r4u" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ExportA == 1 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MoreMenuA == 1 && ctx_r0.booKmarkAdd == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.NotesA == 1 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.TaskA == 1 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MailA == 1 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ExportA == 0 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MoreMenuA == 1 && ctx_r0.booKmarkAdd == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.NotesA == 0 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.TaskA == 0 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MailA == 0 && ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MoreMenuA == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.MoreMenuA == 0);
} }
function TableViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_mat_option_12_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const item_r196 = ctx.$implicit; const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.selectField(item_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r196.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r196 == null ? null : item_r196.field_title, " ");
} }
function TableViewComponent_ng_template_13_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 266);
} }
function TableViewComponent_ng_template_13_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_13_div_9_div_1_Template, 1, 0, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_13_div_9_Template_mat_checkbox_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); const col_r201 = ctx.$implicit; const i_r202 = ctx.index; const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r204.setColHide(col_r201, i_r202); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r201.field_title);
} }
function TableViewComponent_ng_template_13_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 266);
} }
function TableViewComponent_ng_template_13_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_13_div_13_div_1_Template, 1, 0, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_13_div_13_Template_mat_checkbox_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r210); const col_r206 = ctx.$implicit; const i_r207 = ctx.index; const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r209.setColSelect(col_r206, i_r207); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r206.field_title);
} }
function TableViewComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_13_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r211.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_13_Template_div_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_13_div_9_Template, 10, 1, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TableViewComponent_ng_template_13_Template_div_cdkDropListDropped_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r214.drop($event); })("click", function TableViewComponent_ng_template_13_Template_div_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_ng_template_13_div_13_Template, 10, 2, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_13_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r216.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_13_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r217.putColumns(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.hideColumnsTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.columnsOrderTemp);
} }
function TableViewComponent_span_20_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_span_20_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222); const item_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r220.searchFieldSelected(item_r218); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r218 == null ? null : item_r218.field_title, " ");
} }
function TableViewComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_span_20_button_1_Template, 2, 1, "button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r218 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(item_r218 == null ? null : item_r218.name));
} }
function TableViewComponent_div_45_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_45_mat_option_9_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228); const item_r226 = ctx.$implicit; const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r227.filterSelectSubTable = item_r226.table_name; ctx_r227.filterSelectSubTableId = item_r226.id; return ctx_r227.filterSelectSubTableTemp = item_r226.table_name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r226 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r226.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r226 == null ? null : item_r226.display_name, " ");
} }
function TableViewComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Subtable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_45_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r229.getSubTable($event.target.value); })("focus", function TableViewComponent_div_45_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r231.filterSubTable = []; })("ngModelChange", function TableViewComponent_div_45_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r232.filterSelectSubTable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", null, 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_div_45_mat_option_9_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r224)("ngModel", ctx_r12.filterSelectSubTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.filterSubTable);
} }
function TableViewComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_mat_option_55_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const item_r233 = ctx.$implicit; const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r234.selectField(item_r233); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r233 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r233.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r233 == null ? null : item_r233.field_title, " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_8_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemvalue_r253 = ctx.$implicit;
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemvalue_r253[ctx_r252.filterValueTemp[item_r237] == null ? null : ctx_r252.filterValueTemp[item_r237].fields]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemvalue_r253[ctx_r252.filterValueTemp[item_r237] == null ? null : ctx_r252.filterValueTemp[item_r237].fields], " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_56_div_1_div_1_div_8_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r255.getAddValues(ctx_r255.filterValueTemp[item_r237] == null ? null : ctx_r255.filterValueTemp[item_r237].fields, $event.target.value); })("focus", function TableViewComponent_div_56_div_1_div_1_div_8_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r258.filterAddValue = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 286, 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_56_div_1_div_1_div_8_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r259.selectValue($event.option.value, item_r237); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_56_div_1_div_1_div_8_mat_option_6_Template, 2, 2, "mat-option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r240.filterAddValue);
} }
function TableViewComponent_div_56_div_1_div_1_div_9_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_9_mat_option_2_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const option_r262 = ctx.$implicit; const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r263.selectValue(option_r262, item_r237); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r262, " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_56_div_1_div_1_div_9_mat_option_2_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r241.filterValueTemp[item_r237].option);
} }
function TableViewComponent_div_56_div_1_div_1_div_10_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_10_mat_option_6_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const option_r269 = ctx.$implicit; const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r270.selectAdvancedValue(option_r269[ctx_r270.filterValueTemp[item_r237] == null ? null : ctx_r270.filterValueTemp[item_r237].item == null ? null : ctx_r270.filterValueTemp[item_r237].item.parent_table_field], item_r237, option_r269.id, ctx_r270.filterValueTemp[item_r237] == null ? null : ctx_r270.filterValueTemp[item_r237].item == null ? null : ctx_r270.filterValueTemp[item_r237].item.parent_table_field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r269 = ctx.$implicit;
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r269[ctx_r268.filterValueTemp[item_r237] == null ? null : ctx_r268.filterValueTemp[item_r237].item == null ? null : ctx_r268.filterValueTemp[item_r237].item.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r269[ctx_r268.filterValueTemp[item_r237] == null ? null : ctx_r268.filterValueTemp[item_r237].item == null ? null : ctx_r268.filterValueTemp[item_r237].item.parent_table_field], " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_56_div_1_div_1_div_10_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r274.getDropdownValues(ctx_r274.filterValueTemp[item_r237], $event.target.value); })("focus", function TableViewComponent_div_56_div_1_div_1_div_10_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r277.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_56_div_1_div_1_div_10_mat_option_6_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r242.dropdownSearch);
} }
function TableViewComponent_div_56_div_1_div_1_div_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemvalue_r280 = ctx.$implicit;
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemvalue_r280[ctx_r279.filterValueTemp[item_r237] == null ? null : ctx_r279.filterValueTemp[item_r237].fields]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemvalue_r280[ctx_r279.filterValueTemp[item_r237] == null ? null : ctx_r279.filterValueTemp[item_r237].fields], " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_56_div_1_div_1_div_11_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r282.getAddValues(ctx_r282.filterValueTemp[item_r237] == null ? null : ctx_r282.filterValueTemp[item_r237].fields, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 286, 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_56_div_1_div_1_div_11_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r285.selectValue($event.option.value, item_r237); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_56_div_1_div_1_div_11_mat_option_4_Template, 2, 2, "mat-option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r243.filterAddValue);
} }
function TableViewComponent_div_56_div_1_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function TableViewComponent_div_56_div_1_div_1_div_12_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r288.formatDate(item_r237, $event.target.value); })("click", function TableViewComponent_div_56_div_1_div_1_div_12_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290); const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r287.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_12_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290); const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return !!_r287 ? _r287.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r287);
} }
function TableViewComponent_div_56_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_56_div_1_div_1_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r295); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r293.formatDateTime(item_r237, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_56_div_1_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_56_div_1_div_1_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r296.selectValue($event.target.value, item_r237); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_56_div_1_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_16_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303); const i_r300 = ctx.index; const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r301.deleteFieldValues(item_r237, i_r300); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r299 = ctx.$implicit;
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (val_r299 == null ? null : val_r299.id) ? val_r299[ctx_r247.filterValueTemp[item_r237] == null ? null : ctx_r247.filterValueTemp[item_r237].item == null ? null : ctx_r247.filterValueTemp[item_r237].item.parent_table_field] : val_r299, " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_23_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_23_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const itemc_r306 = ctx.$implicit; const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r307.filterValueTemp[item_r237].condition = itemc_r306.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r306 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r306.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r306.field, " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_56_div_1_div_1_div_23_mat_option_1_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r249.operation);
} }
function TableViewComponent_div_56_div_1_div_1_div_24_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_div_24_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const itemc_r311 = ctx.$implicit; const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r312.filterValueTemp[item_r237].condition = itemc_r311.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r311.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r311.field, " ");
} }
function TableViewComponent_div_56_div_1_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_56_div_1_div_1_div_24_mat_option_1_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r250.operationNum);
} }
function TableViewComponent_div_56_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_div_56_div_1_div_1_div_8_Template, 7, 2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_div_56_div_1_div_1_div_9_Template, 3, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_div_56_div_1_div_1_div_10_Template, 7, 2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_div_56_div_1_div_1_div_11_Template, 5, 2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_div_56_div_1_div_1_div_12_Template, 6, 1, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_div_56_div_1_div_1_div_13_Template, 2, 0, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_56_div_1_div_1_div_14_Template, 2, 0, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_div_56_div_1_div_1_div_16_Template, 4, 1, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 281, 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableViewComponent_div_56_div_1_div_1_div_23_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TableViewComponent_div_56_div_1_div_1_div_24_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r316); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r315.filterValueTemp[item_r237].operator = "OR"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r316); const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r318.filterValueTemp[item_r237].operator = "AND"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "AND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_56_div_1_div_1_Template_mat_icon_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r316); const filterIndex_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r320.deleteFilterRow(filterIndex_r238); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "TEXT" || (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "VARCHAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "SELECT" && (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].table_id) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "SELECT" && (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].table_id) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "INT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "DATETIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].type) == "TIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r239.filterValueTemp[item_r237].condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.fieldType == "VARCHAR" || ctx_r239.fieldType == "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.fieldType != "VARCHAR" && ctx_r239.fieldType != "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].operator) == "OR" ? "f-or-and-btn-c" : "f-or-and-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx_r239.filterValueTemp[item_r237] == null ? null : ctx_r239.filterValueTemp[item_r237].operator) == "AND" ? "f-or-and-btn-c" : "f-or-and-btn");
} }
function TableViewComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_56_div_1_div_1_Template, 34, 18, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r237 = ctx.$implicit;
    const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.filterSelectSubTableTemp == ctx_r236.filterValueTemp[item_r237].is_sub);
} }
function TableViewComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_56_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.filtercount);
} }
function TableViewComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-send-mail", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMail", function TableViewComponent_div_62_Template_app_send_mail_closeMail_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r323.sendMailAtom = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataTableInfo", ctx_r16.routeId)("isAddField", false)("airliftDomains", true)("header", "Report Mail")("isFrom", "table-report")("fileList", ctx_r16.table_record_xlsx);
} }
function TableViewComponent_ng_template_63_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r328 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r328.field_title);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r333.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "spna", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_2_Template_spna_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r358); const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r357.sub_pass_visible = !ctx_r357.sub_pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r334.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r334.sub_pass_visible ? "visibility" : "visibility_off", " ");
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r335.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r336.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r337.subValues[i_r330][sub_r332 == null ? null : sub_r332.name], "MMM d, y"));
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r338.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r339.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r340.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 323);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 323);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-slider", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r343.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-slide-toggle", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r344.subValues[i_r330][sub_r332 == null ? null : sub_r332.name] == 1);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r345.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r346.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r347.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r348.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r349.subValues[i_r330][sub_r332 == null ? null : sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r350.subValues[i_r330][sub_r332 == null ? null : sub_r332.name] != null && ctx_r350.subValues[i_r330][sub_r332 == null ? null : sub_r332.name] != "" && ctx_r350.subValues[i_r330][sub_r332 == null ? null : sub_r332.name].length ? ctx_r350.subValues[i_r330][sub_r332 == null ? null : sub_r332.name][0][sub_r332 == null ? null : sub_r332.parent_table_field] : "", " ");
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.subValues[i_r330][sub_r332 == null ? null : sub_r332.name] != null && ctx_r351.subValues[i_r330][sub_r332 == null ? null : sub_r332.name] != "" ? ctx_r351.subValues[i_r330][sub_r332 == null ? null : sub_r332.name][0][sub_r332.parent_table_field] : "", " ");
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r392 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r392);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_20_div_2_Template, 5, 1, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r352.subValues[i_r330][sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r397 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r397);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_21_div_2_Template, 5, 1, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r353.subValues[i_r330][sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r402 = ctx.$implicit;
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r402[sub_r332.parent_table_field]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_22_div_3_Template, 5, 1, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r354.subValues[i_r330][sub_r332.name]);
} }
function TableViewComponent_ng_template_63_div_9_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_1_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_2_Template, 5, 2, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_3_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_4_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_5_Template, 4, 4, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_6_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_7_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_8_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_9_Template, 1, 0, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_10_Template, 1, 0, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_11_Template, 2, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_12_Template, 2, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_13_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_14_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_15_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_16_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_17_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_18_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_19_Template, 3, 1, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_20_Template, 3, 1, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_21_Template, 3, 1, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableViewComponent_ng_template_63_div_9_div_5_div_8_div_22_Template, 4, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r332 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "select" && sub_r332.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "select" && sub_r332.parent_table_id != 0 && sub_r332.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r332.field_sub_type == "select" && sub_r332.parent_table_id != 0 && sub_r332.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r332 == null ? null : sub_r332.field_sub_type) == "checklist" && !(sub_r332 == null ? null : sub_r332.parent_table_id) && sub_r332.option_list == "" && !(sub_r332 == null ? null : sub_r332.parent_table_field) && !(sub_r332 == null ? null : sub_r332.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r332 == null ? null : sub_r332.field_sub_type) == "checklist" && !(sub_r332 == null ? null : sub_r332.parent_table_id) && sub_r332.option_list != "" && !(sub_r332 == null ? null : sub_r332.parent_table_field) && !(sub_r332 == null ? null : sub_r332.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r332 == null ? null : sub_r332.field_sub_type) == "checklist" && (sub_r332 == null ? null : sub_r332.parent_table_id) && (sub_r332 == null ? null : sub_r332.parent_table_field) && (sub_r332 == null ? null : sub_r332.parent_table_name));
} }
function TableViewComponent_ng_template_63_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_63_div_9_div_5_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r408); const i_r330 = ctx.index; const ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66); ctx_r407.SubIndex = ctx_r407.subValues[i_r330].id; return ctx_r407.subTableInsideEdit(_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_template_63_div_9_div_5_div_8_Template, 23, 22, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r329 = ctx.$implicit;
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r327.subFieldInfo);
} }
function TableViewComponent_ng_template_63_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_63_div_9_div_4_Template, 2, 1, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_ng_template_63_div_9_div_5_Template, 9, 2, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r325.subFieldInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r325.rowcount);
} }
function TableViewComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_63_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r410); const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r409.closeSub(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_63_div_9_Template, 6, 2, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_63_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r410); const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r411.rowcount.push(ctx_r411.rowcount.length + 1); return ctx_r411.createSubValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.subTableTemp == null ? null : ctx_r18.subTableTemp.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r18.subFieldInfo);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r415.field_title);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r442); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r440.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r417.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r444.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "spna", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_3_Template_spna_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446); const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r447.sub_pass_visible = !ctx_r447.sub_pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r418.sub_pass_visible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r418.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r418.sub_pass_visible ? "visibility" : "visibility_off", " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r451); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r449.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r419.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r455); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r453.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r420.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_6_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const _r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r457.open(); })("dateChange", function TableViewComponent_ng_template_65_div_0_div_9_div_6_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r460.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_6_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459); const _r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return !!_r457 ? _r457.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r421.subValuesRow[sub_r415 == null ? null : sub_r415.name], "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r457)("value", ctx_r421.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r466); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r464.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r422.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_8_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r469); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r468.subformatDateTime(ctx_r468.subitem.table_name, sub_r415.name, $event.target.value, ctx_r468.subin); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r423.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_9_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r472.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r424.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r480 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_12_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r480); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r478.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r427.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_13_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r484); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r482 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r482.subValueChanges(sub_r415, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r428.subValuesRow[sub_r415 == null ? null : sub_r415.name] == 1);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r488); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r486.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r429.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r492 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r492); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r490.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r430.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r496); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r494.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r431.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_9_div_17_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r500); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r498.subValueChanges(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r432.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_18_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r503 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r503);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r503, " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_9_div_18_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r506); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_r415.default_value = $event; })("selectionChange", function TableViewComponent_ng_template_65_div_0_div_9_div_18_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r506); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r507.subValueChanges(sub_r415, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_9_div_18_mat_option_2_Template, 2, 2, "mat-option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r415.default_value)("placeholder", ctx_r433.subValuesRow[sub_r415 == null ? null : sub_r415.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r415.option_list);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_19_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_19_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r515); const option_r512 = ctx.$implicit; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r513.subValueChanges(sub_r415, option_r512.id); return ctx_r513.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r512 = ctx.$implicit;
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r512[sub_r415.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r512[sub_r415.parent_table_field], " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_ng_template_65_div_0_div_9_div_19_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r519); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r517.getDropdownValues(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_9_div_19_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r510)("value", ctx_r434.subValuesRow[sub_r415 == null ? null : sub_r415.name] != null && ctx_r434.subValuesRow[sub_r415 == null ? null : sub_r415.name] != "" && ctx_r434.subValuesRow[sub_r415 == null ? null : sub_r415.name].length ? ctx_r434.subValuesRow[sub_r415 == null ? null : sub_r415.name][0][sub_r415 == null ? null : sub_r415.parent_table_field] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r434.dropdownSearch);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_20_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_20_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r526); const option_r523 = ctx.$implicit; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r524.subValueChanges(sub_r415, option_r523.id); return ctx_r524.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r523 = ctx.$implicit;
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r523[sub_r415.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r523[sub_r415.parent_table_field], " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_ng_template_65_div_0_div_9_div_20_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r530); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r528.getDropdownValues(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_9_div_20_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r521)("value", ctx_r435.subValuesRow[sub_r415 == null ? null : sub_r415.name] != null && ctx_r435.subValuesRow[sub_r415 == null ? null : sub_r415.name] != "" ? ctx_r435.subValuesRow[sub_r415 == null ? null : sub_r415.name][0][sub_r415.parent_table_field] : "")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r435.dropdownSearch);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r537 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_21_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r537); const j_r534 = ctx.index; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r535.SubremoveCheckListForValue(sub_r415.name, ctx_r535.subin, sub_r415.table_name, j_r534); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r533 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r533);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r540 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_9_div_21_div_2_Template, 5, 1, "div", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TableViewComponent_ng_template_65_div_0_div_9_div_21_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r540); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r538 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r538.SubcheckListForSelect(sub_r415.name, $event.target.value, sub_r415.table_name, ctx_r538.subin); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r436.subValuesRow[sub_r415.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_22_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r548); const j_r545 = ctx.index; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r546.SubremoveCheckListForValue(sub_r415.name, ctx_r546.subin, sub_r415.table_name, j_r545); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r544 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r544);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_22_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_22_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r552); const option_r549 = ctx.$implicit; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r550.SubcheckListForSelect(sub_r415.name, option_r549, sub_r415.table_name, ctx_r550.subin); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r549 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r549);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r549, " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_9_div_22_div_2_Template, 5, 1, "div", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_9_div_22_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r437.subValuesRow[sub_r415.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r415.option_list);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r562 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_9_div_23_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r562); const j_r559 = ctx.index; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r560 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r560.SubremoveCheckListForValue(sub_r415.name, ctx_r560.subin, sub_r415.table_name, j_r559); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r558 = ctx.$implicit;
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r558[sub_r415.parent_table_field]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_23_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function TableViewComponent_ng_template_65_div_0_div_9_div_23_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r567); const option_r564 = ctx.$implicit; const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r565.SubcheckListValueChanges(sub_r415.name, option_r564, sub_r415.table_name, ctx_r565.subin); return ctx_r565.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r564 = ctx.$implicit;
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r564[sub_r415.parent_table_field], " ");
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_23_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_ng_template_65_div_0_div_9_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r570 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_65_div_0_div_9_div_23_div_3_Template, 5, 1, "div", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableViewComponent_ng_template_65_div_0_div_9_div_23_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r570); const ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r569.subdro = []; return ctx_r569.dropdownSearch = []; })("input", function TableViewComponent_ng_template_65_div_0_div_9_div_23_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r570); const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r571 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r571.getDropdownValues(sub_r415, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_template_65_div_0_div_9_div_23_mat_option_8_Template, 2, 1, "mat-option", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_65_div_0_div_9_div_23_span_9_Template, 2, 0, "span", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const sub_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r438.subValuesRow[sub_r415.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r415 == null ? null : sub_r415.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r555);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r438.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r438.mandatoryField.includes(ctx_r438.subitem.name) && ctx_r438.createIsTrue == 1 && !ctx_r438.values[ctx_r438.subitem.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_65_div_0_div_9_div_1_Template, 2, 1, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_9_div_2_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_65_div_0_div_9_div_3_Template, 4, 4, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_9_div_4_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_ng_template_65_div_0_div_9_div_5_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_ng_template_65_div_0_div_9_div_6_Template, 9, 7, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableViewComponent_ng_template_65_div_0_div_9_div_7_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_template_65_div_0_div_9_div_8_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_65_div_0_div_9_div_9_Template, 2, 2, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_ng_template_65_div_0_div_9_div_10_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_ng_template_65_div_0_div_9_div_11_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_ng_template_65_div_0_div_9_div_12_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_ng_template_65_div_0_div_9_div_13_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_ng_template_65_div_0_div_9_div_14_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_ng_template_65_div_0_div_9_div_15_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_ng_template_65_div_0_div_9_div_16_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableViewComponent_ng_template_65_div_0_div_9_div_17_Template, 2, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableViewComponent_ng_template_65_div_0_div_9_div_18_Template, 3, 3, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableViewComponent_ng_template_65_div_0_div_9_div_19_Template, 5, 4, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableViewComponent_ng_template_65_div_0_div_9_div_20_Template, 5, 5, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableViewComponent_ng_template_65_div_0_div_9_div_21_Template, 4, 2, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableViewComponent_ng_template_65_div_0_div_9_div_22_Template, 5, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableViewComponent_ng_template_65_div_0_div_9_div_23_Template, 10, 5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r415 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type != "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "select" && sub_r415.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "select" && sub_r415.parent_table_id != 0 && sub_r415.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r415.field_sub_type == "select" && sub_r415.parent_table_id != 0 && sub_r415.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r415 == null ? null : sub_r415.field_sub_type) == "checklist" && !(sub_r415 == null ? null : sub_r415.parent_table_id) && sub_r415.option_list == "" && !(sub_r415 == null ? null : sub_r415.parent_table_field) && !(sub_r415 == null ? null : sub_r415.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r415 == null ? null : sub_r415.field_sub_type) == "checklist" && !(sub_r415 == null ? null : sub_r415.parent_table_id) && sub_r415.option_list != "" && !(sub_r415 == null ? null : sub_r415.parent_table_field) && !(sub_r415 == null ? null : sub_r415.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r415 == null ? null : sub_r415.field_sub_type) == "checklist" && (sub_r415 == null ? null : sub_r415.parent_table_id) && (sub_r415 == null ? null : sub_r415.parent_table_field) && (sub_r415 == null ? null : sub_r415.parent_table_name));
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r578 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r578.field_title, " ");
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r604 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_1_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r604); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_1_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r604); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r607.index; const subdata_r580 = ctx_r607.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r606 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r606.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r614 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_2_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r614); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_2_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r614); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r617 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r617.index; const subdata_r580 = ctx_r617.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r616 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r616.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "spna", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_2_Template_spna_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r614); const ctx_r620 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r620.sub_view_pass_visible = !ctx_r620.sub_view_pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r585 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r585.sub_view_pass_visible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r585.sub_view_pass_visible ? "visibility" : "visibility_off", " ");
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_3_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r625); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_3_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r625); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r628.index; const subdata_r580 = ctx_r628.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r627.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r635 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_4_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r635); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_4_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r635); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r638.index; const subdata_r580 = ctx_r638.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r637.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r645 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r645); const _r643 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r643.open(); })("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_5_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r645); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("dateChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_5_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r645); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r650 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r650.index; const subdata_r580 = ctx_r650.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r649 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r649.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r643 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r643)("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r657 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_6_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r657); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_7_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r663); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r669 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_8_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r669); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_8_Template_textarea_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r669); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r672 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r672.index; const subdata_r580 = ctx_r672.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r671 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r671.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r679 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_11_Template_mat_slider_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r679); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("change", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r679); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r682 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r682.index; const subdata_r580 = ctx_r682.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r681.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r689 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r689); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r688.index; const subdata_r580 = ctx_r688.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r687 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r687.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.checked ? 1 : 0, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", subdata_r580[sub_r583.name] == 1);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r696 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_13_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r696); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_13_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r696); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r699 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r699.index; const subdata_r580 = ctx_r699.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r698 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r698.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r706 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_14_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r706); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_14_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r706); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r709 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r709.index; const subdata_r580 = ctx_r709.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r708 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r708.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r716 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_15_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_15_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r719 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r719.index; const subdata_r580 = ctx_r719.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r718 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r718.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r726 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_16_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r726); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r580[sub_r583.name] = $event); })("focusout", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_16_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r726); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r729 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r729.index; const subdata_r580 = ctx_r729.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r728 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r728.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.target.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r580[sub_r583.name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r735 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r735);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r735, " ");
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r738 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r738); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r737 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r737.index; const subdata_r580 = ctx_r737.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r736 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r736.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, $event.value, subdata_r580.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", subdata_r580[sub_r583.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r583.option_list);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r748 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r748); const option_r745 = ctx.$implicit; const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r747 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r581 = ctx_r747.index; const subdata_r580 = ctx_r747.$implicit; const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r746 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r746.insideSubValueChangeAll(i_r581, subViewTableI_r575.table_name, sub_r583, option_r745.id, subdata_r580.id); return ctx_r746.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r745 = ctx.$implicit;
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r745[sub_r583.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r745[sub_r583.parent_table_field], " ");
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r754 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r754); const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r752 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r752.getDropdownValues(sub_r583, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r743 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r601 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", subdata_r580[sub_r583.name] != null && subdata_r580[sub_r583.name] != "" ? subdata_r580[sub_r583.name][0][sub_r583.parent_table_field] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r743);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r601.dropdownSearch);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_1_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_2_Template, 4, 3, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_3_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_4_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_5_Template, 4, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_6_Template, 2, 1, "div", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_7_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_8_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_9_Template, 2, 0, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_10_Template, 2, 0, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_11_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_12_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_13_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_14_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_15_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_16_Template, 2, 1, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_17_Template, 3, 2, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_div_18_Template, 5, 3, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r583 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "select" && sub_r583.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r583.field_sub_type == "select" && sub_r583.parent_table_id != 0);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_div_4_Template, 19, 18, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r581 = ctx.index;
    const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r579 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r581 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r579.insidesubFieldInfo[subViewTableI_r575 == null ? null : subViewTableI_r575.table_name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_div_1_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subViewTableI_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r577.insidesubValueInfo[subViewTableI_r575.table_name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r760 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_10_Template, 2, 1, "div", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_ng_template_65_div_0_div_10_div_1_div_11_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_div_10_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r760); const subViewTableI_r575 = ctx.$implicit; const ctx_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r759.createSubInsideValues(subViewTableI_r575.table_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subViewTableI_r575 = ctx.$implicit;
    const ctx_r574 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subViewTableI_r575.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r574.insidesubFieldInfo[subViewTableI_r575.table_name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r574.insidesubValueInfo[subViewTableI_r575 == null ? null : subViewTableI_r575.table_name]);
} }
function TableViewComponent_ng_template_65_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_template_65_div_0_div_10_div_1_Template, 15, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r414.insidesubTableInfo);
} }
function TableViewComponent_ng_template_65_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r762 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_ng_template_65_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r762); const ctx_r761 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r761.closeSubIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_ng_template_65_div_0_div_9_Template, 24, 23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_ng_template_65_div_0_div_10_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r412.subTableTemp.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r412.subFieldInfoEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r412.insideLoad == 1 && ctx_r412.outsideLoda != 0);
} }
function TableViewComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableViewComponent_ng_template_65_div_0_Template, 11, 3, "div", 334);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.insideLoad == 1 && !!ctx_r20.subValuesRow);
} }
class TableViewComponent {
    constructor(CommonService, aRouter, route, dialog) {
        this.CommonService = CommonService;
        this.aRouter = aRouter;
        this.route = route;
        this.dialog = dialog;
        // baseUrl = environment.testlog;
        this.itsSticky = true;
        this.displayedColumns = [];
        // selectedSearchField: any;
        this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"];
        this.metaData1 = [];
        this.data1 = [];
        this.columnsToDisplay1 = ["select"];
        this.pageSize = 10;
        this.page = 0;
        this.getBody = { table_name: "", limit: this.pageSize, page: 0, sort_type: "DESC", sort_field: "id", data_table_id: '' };
        this.columnsChange = 0;
        this.columnsOrder = [];
        this.hideColumns = [];
        this.columnsOrderTemp = [];
        this.hideColumnsTemp = [];
        this.selectSearchValue = '';
        this.selectAll = false;
        this.operation = [
            { field: 'Equal to', fieldValue: 'equal_to' },
            { field: 'Not equal to', fieldValue: 'not_equal_to' },
            { field: 'Is Empty', fieldValue: 'is_empty' },
            { field: 'Is Not Empty', fieldValue: 'is_not_empty' }
        ];
        this.operationNum = [
            { field: 'Equal to', fieldValue: 'equal_to' },
            { field: 'Not equal to', fieldValue: 'not_equal_to' },
            { field: 'Is Empty', fieldValue: 'is_empty' },
            { field: 'Is Not Empty', fieldValue: 'is_not_empty' },
            { field: 'Greater Than', fieldValue: 'greater_than' },
            { field: 'Less Than', fieldValue: 'less_than' },
            { field: 'Greater Than or Equal To', fieldValue: 'greater_than_or_equal_to' },
            { field: 'Less Than or Equal To', fieldValue: 'less_than_or_equal_to' },
        ];
        this.filter = {
            "user_id": 2,
            "table_id": 105,
            "filter_json": [{ "user_name": "surya,ajith", "condition": "Equal to", "operator": "OR" }, { "email": "aajith@airliftusa.com", "condition": "Equal to", "operator": "AND" }]
        };
        this.filterSubId = [];
        this.filtercount = [];
        this.filterSelectSubTable = "";
        this.filterSelectSubTableTemp = "";
        this.filterSelectSubTableId = "";
        this.filterSelectSub = 0;
        this.filterFieldSelect = "";
        this.loaded = "false";
        this.fieldType = '';
        this.dropDown = [];
        this.dropDownKey = [];
        this.checkListKey = {};
        this.workFlow = [];
        this.user_fields = [];
        this.dropdownSearch = [];
        this.selectFields = [];
        this.tableSniper = 0;
        this.summarizeCountInfo = [];
        this.summarizeCountValue = "##";
        this.lastLoop = 1;
        this.sumCont = 0;
        this.sumColor = {};
        this.sumCountHide = 'no';
        this.NotesA = 0;
        this.MailA = 0;
        this.ExportA = 0;
        this.TaskA = 0;
        this.BookMarkA = 0;
        this.MoreMenuA = 0;
        this.bookmark = [];
        this.booKmarkAdd = 0;
        this.sendMailAtom = false;
        this.hideForExport = true;
        this.table_record_xlsx = [];
        this.showTransferBtn = false;
        this.launchIcon = 0;
        this.metaDataTemp = [];
        this.columnsNotCreate = 0;
        this.subTableInfo = [];
        this.subload = 0;
        this.subFieldInfo = [];
        this.subFieldInfoEdit = [];
        this.subValues = [];
        this.insidesubTableInfo = [];
        this.insidesubFieldInfo = {};
        this.insidesubValueInfo = {};
        this.rowcount = [];
        this.rowcountInside = {};
        this.insideLoad = 0;
        this.outsideLoda = 1;
    }
    ngOnInit() {
        // environment.testlog = environment.testlog + 1;
        this.userData = JSON.parse(localStorage.user_data);
        this.designationId = this.userData.designation;
        this.userData.designation += "_access";
        // console.log("userdata", this.userData)
        this.aRouter.queryParams.subscribe((params) => {
            this.routeId = params;
            if (!!this.routeId) {
                this.summarizeCountInfo = [];
                this.summarizeCountValue = "##";
                this.lastLoop = 1;
                this.sumCont = 0;
                this.sumColor = {};
                this.sumlength = '';
                this.subTableInfo = [];
                this.columnsOrder = [];
                this.hideColumns = [];
                this.columnsNotCreate = 0;
                this.subload = 0;
                this.metaData1 = [];
                this.tableId = this.routeId.id;
                this.getBody.table_name = this.routeId.tablename;
                this.getBody.data_table_id = this.routeId.id;
                // this.getSubTableColumns();
                // this.getColumns();
                this.getAllDataLoad();
                // this.getAllData();
                // this.getProcessPermission(); ddddd
                // this.getTableData(); dddddd
                // this.getMetaData();
                // this.getTempMetaData()
                // this.getFilter()
                // this.getWorkFlow();
                this.showTransferBtn = this.routeId.id === '416' || this.routeId.tablename === 'data_transfer_log_master' ? true : false;
            }
        });
        // this.CommonService.gettest();
        // const str = "ASDF1234$";
        // const [word, digits] = str.match(/\D+|\d+/g);
        // console.log("ssssss",word);    // "ASDF"
        // console.log("eeeeeeee",digits);  // "1234"
        // let tee=parseInt(digits)+5
        // console.log("FFFffff",tee)
    }
    getAllDataLoad() {
        let tempkey = ["ColumnsOrder", "FilterData", "Permission", "SubTableData", "TableData", "WorkflowProcess"];
        let getBody = { data_table_id: this.routeId.id, designation_id: this.designationId, table_fields: this.userData.designation, table_name: this.routeId.tablename, user_id: this.userData.id };
        // console.log("wwwwwwwwwww", environment.tempCache)
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData.hasOwnProperty(this.routeId.tablename)) {
            this.CommonService.getAllValues(getBody).subscribe((response) => {
                if (response.statusCode == 200) {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename] = {};
                    _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename] = response;
                    let temp = { ColumnsOrder: response.ColumnsOrder, FilterData: response.FilterData, Permission: response.Permission, SubTableData: response.SubTableData, TableData: response.TableData, WorkflowProcess: response.WorkflowProcess };
                    // for (let i = 0; i < tempkey.length; i++) {
                    //   temp[tempkey[i]] = response[tempkey[i]]
                    // }
                    // temp["ColumnsOrder"] = response["ColumnsOrder"]
                    // temp["FilterData"] = response["FilterData"]
                    // temp["Permission"] = response["Permission"]
                    // temp["SubTableData"] = response["SubTableData"]
                    // temp["TableData"] = response["TableData"]
                    // temp["WorkflowProcess"] = response["WorkflowProcess"]
                    this.getAllData(temp);
                }
            });
        }
        else {
            // temp["ColumnsOrder"] = environment.tempCache.allData[this.routeId.tablename]["ColumnsOrder"]
            // temp["FilterData"] = environment.tempCache.allData[this.routeId.tablename]["FilterData"]
            // temp["Permission"] = environment.tempCache.allData[this.routeId.tablename]["Permission"]
            // temp["SubTableData"] = environment.tempCache.allData[this.routeId.tablename]["SubTableData"]
            // temp["TableData"] = environment.tempCache.allData[this.routeId.tablename]["TableData"]
            // temp["WorkflowProcess"] = environment.tempCache.allData[this.routeId.tablename]["WorkflowProcess"]
            // for (let i = 0; i < tempkey.length; i++) {
            //   temp[tempkey[i]] = environment.tempCache.allData[this.routeId.tablename][tempkey[i]]
            // }
            let response = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename];
            let temp = { ColumnsOrder: response.ColumnsOrder, FilterData: response.FilterData, Permission: response.Permission, SubTableData: response.SubTableData, TableData: response.TableData, WorkflowProcess: response.WorkflowProcess };
            this.getAllData(temp);
        }
        // console.log("rrrrrrrrrrrrrrrrrrrrr", environment.tempCache)
    }
    getAllData(response) {
        this.subTableInfo = [];
        this.columnsOrder = [];
        this.columnsOrderTemp = [];
        this.hideColumns = [];
        this.columnsNotCreate = 0;
        this.subload = 0;
        this.metaData1 = [];
        this.subTableInfo = [];
        this.columnsOrder = [];
        this.hideColumns = [];
        this.columnsNotCreate = 0;
        this.subload = 0;
        this.metaData1 = [];
        let getBody = { data_table_id: this.routeId.id, designation_id: this.designationId, table_fields: this.userData.designation, table_name: this.routeId.tablename, user_id: this.userData.id };
        // this.CommonService.getAllValues(getBody).subscribe((response: any) => {
        //   if (response.statusCode == 200) {
        // console.log("wwwwwwwwww", response)
        this.processPermission = response.Permission[0];
        this.subTableInfo = response.SubTableData;
        this.subload = 1;
        this.tableInfo = response.TableData[0];
        if (this.tableInfo.summarize_count != "") {
            if (typeof this.tableInfo.summarize_count != "object") {
                this.tableInfo.summarize_count = JSON.parse(this.tableInfo.summarize_count);
            }
            if (this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
                this.sumCountHide = this.tableInfo.summarize_count[this.userData.id].hide;
                if (this.tableInfo.summarize_count[this.userData.id].value != "")
                    this.summarizeCountValue = this.tableInfo.summarize_count[this.userData.id].value;
                if (this.tableInfo.summarize_count[this.userData.id].value != "")
                    this.summarizeCountValue = this.tableInfo.summarize_count[this.userData.id].value;
            }
        }
        else {
            this.tableInfo.summarize_count = {};
        }
        this.getBody.table_name = this.tableInfo.table_name;
        if (!!response.ColumnsOrder.length) {
            this.columnsInfo = response.ColumnsOrder[0];
            if (response.ColumnsOrder[0].fields != "") {
                if (Array.isArray(response.ColumnsOrder[0].fields)) {
                    this.columnsOrder = response.ColumnsOrder[0].fields;
                }
                else {
                    this.columnsOrder = response.ColumnsOrder[0].fields.split(',');
                }
            }
            // if (response.ColumnsOrder[0].hide_fields != "") {
            //   if (Array.isArray(response.ColumnsOrder[0].hide_fields)) {
            //     this.hideColumns = response.ColumnsOrder[0].hide_fields.split(',');
            //   } else {
            //     this.hideColumns = response.ColumnsOrder[0].hide_fields;
            //   }
            // }
            if (!!response.WorkflowProcess.length) {
                this.workFlow.push(response.WorkflowProcess[0]);
                if (this.workFlow[0].fields != "") {
                    if (typeof this.workFlow[0].fields != "object") {
                        this.workFlow[0].fields = JSON.parse(this.workFlow[0].fields);
                    }
                }
                this.filterValue = '';
                this.tableLoaded = true;
                this.loaded = "false";
                this.filtercount = [];
                this.filterValueTemp = '';
                if (!!response.FilterData.length && response.FilterData[0].filter_json != "") {
                    let len = response.FilterData.length;
                    if (typeof response.FilterData[(len - 1)].filter_json != "object") {
                        this.filterValue = JSON.parse(response.FilterData[(len - 1)].filter_json);
                    }
                    else {
                        this.filterValue = response.FilterData[(len - 1)].filter_json;
                    }
                    if (response.FilterData[(len - 1)].sub_filter != "")
                        if (typeof response.FilterData[(len - 1)].sub_filter != "object") {
                            this.filterSubId = JSON.parse(response.FilterData[(len - 1)].sub_filter);
                        }
                        else {
                            this.filterSubId = response.FilterData[(len - 1)].sub_filter;
                        }
                    this.filterId = response.FilterData[(len - 1)].id;
                    this.filterValueTemp = this.filterValue;
                    let countKey = Object.keys(this.filterValueTemp).length;
                    this.getFilterValues();
                    for (let i = 0; i < countKey; i++) {
                        this.filtercount.push(i);
                    }
                    for (let i = 0; i < countKey; i++) {
                        let keyslen = Object.keys(this.filterValueTemp[i]).length;
                        keyslen = keyslen - 8;
                        this.filterValueTemp[i]['value'] = [];
                        for (let j = 1; j <= keyslen; j++) {
                            if (this.filterValueTemp[i].fields == "bookmarks") {
                                this.booKmarkAdd = 1;
                            }
                            this.filterValueTemp[i].value.push(this.filterValueTemp[i][j]);
                            delete this.filterValueTemp[i][j];
                        }
                    }
                }
                else {
                    this.getFilterValues();
                }
            }
            else {
                this.tableSniper = 1;
            }
        }
        else {
            this.columnsNotCreate = 1;
            if (!!response.WorkflowProcess.length) {
                this.workFlow.push(response.WorkflowProcess[0]);
                if (this.workFlow[0].fields != "") {
                    if (typeof this.workFlow[0].fields != "object") {
                        this.workFlow[0].fields = JSON.parse(this.workFlow[0].fields);
                    }
                }
                this.filterValue = '';
                this.tableLoaded = true;
                this.loaded = "false";
                this.filtercount = [];
                this.filterValueTemp = '';
                if (!!response.FilterData.length && response.FilterData[0].filter_json != "") {
                    let len = response.FilterData.length;
                    if (typeof response.FilterData[(len - 1)].filter_json != "object") {
                        this.filterValue = JSON.parse(response.FilterData[(len - 1)].filter_json);
                    }
                    else {
                        this.filterValue = response.FilterData[(len - 1)].filter_json;
                    }
                    if (response.FilterData[(len - 1)].sub_filter != "")
                        if (typeof response.FilterData[(len - 1)].sub_filter != "object") {
                            this.filterSubId = JSON.parse(response.FilterData[(len - 1)].sub_filter);
                        }
                        else {
                            this.filterSubId = response.FilterData[(len - 1)].sub_filter;
                        }
                    this.filterId = response.FilterData[(len - 1)].id;
                    this.filterValueTemp = this.filterValue;
                    let countKey = Object.keys(this.filterValueTemp).length;
                    this.getFilterValues();
                    for (let i = 0; i < countKey; i++) {
                        this.filtercount.push(i);
                    }
                    for (let i = 0; i < countKey; i++) {
                        let keyslen = Object.keys(this.filterValueTemp[i]).length;
                        keyslen = keyslen - 8;
                        this.filterValueTemp[i]['value'] = [];
                        for (let j = 1; j <= keyslen; j++) {
                            if (this.filterValueTemp[i].fields == "bookmarks") {
                                this.booKmarkAdd = 1;
                            }
                            this.filterValueTemp[i].value.push(this.filterValueTemp[i][j]);
                            delete this.filterValueTemp[i][j];
                        }
                    }
                }
                else {
                    this.getFilterValues();
                }
            }
            else {
                this.tableSniper = 1;
            }
        }
        if (this.tableInfo.summarize_count != "") {
            if (this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
                this.getSumarizeCount(this.tableInfo.summarize_count[this.userData.id]);
            }
        }
        //   }
        // });
    }
    getTempMetaDataLoad() {
        this.hideColumnsTemp = [];
        this.hideColumns = [];
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.rowMeta.hasOwnProperty(this.routeId.tablename)) {
            this.getTempMetaData();
        }
        else {
            this.metaDataTemp = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.rowMeta[this.routeId.tablename];
            this.launchIcon = 1;
            for (let i = 0; i < this.metaDataTemp.length; i++) {
                if (this.metaDataTemp[i].field_sub_type != "duplicate") {
                    let idInt = this.metaDataTemp[i].id.toString();
                    if (!this.columnsOrder.includes(idInt)) {
                        this.hideColumnsTemp.push(this.metaDataTemp[i]);
                        this.hideColumns.push(this.metaDataTemp[i].id);
                    }
                }
            }
        }
    }
    getTempMetaData() {
        this.hideColumnsTemp = [];
        this.hideColumns = [];
        let value = { table_name: this.routeId.tablename };
        let access = this.userData.designation;
        let field = "id,computation_relative,computation_status,advanced_option,default_value,depended_field,depended_id,field_position,grid,group_id,group_name,is_disabled,is_hidden,is_sub_table,is_unique,last_seq_no,mandatory,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,row_no,seq_count,seq_id_code,seq_start_no,table_view_position,field_sub_type,field_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name," + access;
        this.CommonService.getMetaDataFields(value, field).subscribe((response) => {
            if (response.statusCode == 200) {
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.rowMeta[this.routeId.tablename] = response.info;
                this.metaDataTemp = response.info;
                this.launchIcon = 1;
                console.log("saaaaaaaa", this.hideColumnsTemp, this.metaDataTemp, this.columnsOrder, this.columnsOrderTemp);
                for (let i = 0; i < this.metaDataTemp.length; i++) {
                    if (this.metaDataTemp[i].field_sub_type != "duplicate") {
                        let idInt = this.metaDataTemp[i].id.toString();
                        if (!this.columnsOrder.includes(idInt)) {
                            if (this.metaDataTemp[i].name == "etd" || this.metaDataTemp[i].name == "eta") {
                                console.log("dddddddddd", this.metaDataTemp[i].name);
                            }
                            this.hideColumnsTemp.push(this.metaDataTemp[i]);
                            this.hideColumns.push(this.metaDataTemp[i].id);
                        }
                    }
                }
            }
        });
    }
    getProcessPermission() {
        let field = "id,designation,designation_id,edit_process,reports,table_id,create_item";
        let body = { table_name: "process_permission", fields: field, limit: 1, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ "designation_id": this.designationId }, { "table_id": this.routeId.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.processPermission = response.info[0];
        });
    }
    subTableEdit(templateName, item, row) {
        this.subTableTemp = item;
        this.mainRowIndex = row;
        this.getSubTableField(item, row);
        this.dialogSub = this.dialog.open(templateName, {
            width: '1300px',
            height: '570px'
        });
    }
    subTableInsideEdit(templateName) {
        this.getSubMetaData();
        this.dialogSubIn = this.dialog.open(templateName, {
            width: '1300px',
            height: '570px'
        });
    }
    closeSub() {
        this.dialogSub.close();
    }
    closeSubIn() {
        this.dialogSubIn.close();
        this.getSubTableField(this.subTableTemp, this.mainRowIndex);
    }
    getSubTableField(item, row) {
        this.subFieldInfo = [];
        this.subValues = [];
        this.rowcount = [];
        let getBody = { table_name: item.table_name, data_table_id: item.id, limit: 100, page: 0, sort_type: "DESC", sort_field: "id", "tD": { "tn": item.table_name } };
        let temp = [{
                1: row.id,
                condition: "Equal to",
                fields: "row_id",
                operator: "AND",
                type: "VARCHAR",
                is_sub: "",
                is_sub_id: "",
                option: []
            }];
        getBody["filter"] = temp;
        this.CommonService.getFiterTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                this.subFieldInfo = response.meta;
                this.subValues = response.info;
                for (let i = 0; i < this.subValues.length; i++) {
                    this.rowcount.push(i + 1);
                }
            }
        });
    }
    getSubMetaData() {
        let value = { table_name: this.subTableTemp.table_name };
        let field = "id,advanced_option,default_value,depended_field,depended_id,is_sub_table,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,field_sub_type,field_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name";
        this.CommonService.getMetaDataFields(value, field).subscribe((response) => {
            if (response.statusCode == 200) {
                for (let i = 0; i < response.info.length; i++) {
                    if (response.info[i].field_sub_type == "select" && response.info[i].option_list != "") {
                        response.info[i].option_list = response.info[i].option_list.split(",");
                    }
                }
                this.subFieldInfoEdit = response.info;
                this.getInsideTableData();
                this.getSubTableFieldRow();
            }
        });
    }
    getSubTableFieldRow() {
        let getBody = { table_name: this.subTableTemp.table_name, zz: 1, data_table_id: this.subTableTemp.id, limit: 1, page: 0, sort_type: "DESC", sort_field: "id", "tD": { "tn": this.subTableTemp.table_name } };
        let temp = [{
                1: this.SubIndex,
                condition: "Equal to",
                fields: "id",
                operator: "AND",
                type: "VARCHAR",
                is_sub: "1",
                is_sub_id: "",
                option: []
            }];
        getBody["filter"] = temp;
        this.CommonService.getFiterTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                this.subValuesRow = response.info[0];
            }
        });
    }
    getInsideTableData() {
        let field = "id,display_name,table_name";
        let body = { table_name: "meta_table_data", fields: field, limit: 100, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ "parent_table_id": this.subTableTemp.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.outsideLoda = response.info.length;
                this.insidesubTableInfo = response.info;
                if (response.info.length) {
                    for (let i = 0; i < response.info.length; i++) {
                        this.getInsideMetaData(response.info[i], i);
                    }
                }
                else {
                    this.insideLoad = 1;
                }
            }
        });
    }
    getInsideMetaData(item, ind) {
        let value = { table_name: item.table_name };
        let field = "id,master_field,master_table,max_length,merge_fields,option_list,placeholder,relative_fields,field_sub_type,field_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name";
        this.CommonService.getMetaDataFields(value, field).subscribe((response) => {
            if (response.statusCode == 200) {
                for (let i = 0; i < response.info.length; i++) {
                    if (response.info[i].field_sub_type == "select" && response.info[i].option_list != "") {
                        response.info[i].option_list = response.info[i].option_list.split(",");
                    }
                }
                this.insidesubFieldInfo[item.table_name] = response.info;
                // this.insidesubValueInfo = {};
                this.getInsideValue(item, ind);
            }
        });
    }
    getInsideValue(item, ind) {
        let getBody = { table_name: item.table_name, data_table_id: item.id, limit: 100, page: 0, sort_type: "DESC", sort_field: "id", "tD": { "tn": item.table_name } };
        let temp = [{
                1: this.SubIndex,
                condition: "Equal to",
                fields: "row_id",
                operator: "AND",
                type: "VARCHAR",
                is_sub: "1",
                is_sub_id: "",
                option: []
            }];
        getBody["filter"] = temp;
        this.CommonService.getFiterTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                this.insidesubValueInfo[item.table_name] = response.info;
                this.rowcountInside[item.table_name] = [];
                for (let i = 0; i < this.subValues.length; i++) {
                    this.rowcountInside[item.table_name].push(i + 1);
                }
                if (ind == (this.outsideLoda - 1)) {
                    this.insideLoad = 1;
                }
                // console.log("qqqqq", this.insidesubValueInfo, this.insideLoad, this.outsideLoda)
            }
        });
    }
    subValueChanges(item, value) {
        let values = value;
        if (item.field_sub_type == "date") {
            let d = new Date(value), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            values = [year, month, day].join('-');
        }
        let temp = { "id": this.SubIndex, [item.name]: values };
        this.CommonService.commonPut(temp, this.subTableTemp.table_name).subscribe((res) => {
            if (res.statusCode == 200) {
                this.subValuesRow[item.name] = values;
            }
        });
    }
    insideSubValueChangeAll(ind, parentTable, item, value, id) {
        // console.log("sssssssss", item, ind, parentTable, item, value, id)
        let values = value;
        if (item.field_sub_type == "date") {
            let d = new Date(value), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            values = [year, month, day].join('-');
        }
        let temp = { "id": id, [item.name]: values };
        this.CommonService.commonPut(temp, parentTable).subscribe((res) => {
            if (res.statusCode == 200) {
                this.insidesubValueInfo[parentTable][ind][item.name] = values;
            }
        });
    }
    createSubValues() {
        let temp = {};
        let value = this.subFieldInfo;
        if (this.subValues.length) {
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number' || value[i].field_sub_type == 'switch') {
                    temp[value[i].name] = 0;
                    // if (value[i].default_value == "") {
                    //   temp[value[i].name] = 0;
                    // } else {
                    //   temp[value[i].name] = value[i].default_value
                    // }
                }
                else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                    // if (value[i].default_value != "") {
                    //   temp[value[i].name] = value[i].default_value
                    // }
                }
                else if (value[i].field_sub_type == 'checklist') {
                    // temp[value[i].name] = [];
                }
                else {
                    // temp[value[i].name] = value[i].default_value
                    temp[value[i].name] = "";
                }
            }
        }
        temp["row_id"] = this.mainRowIndex.id;
        temp["last_modified_by"] = this.userData.id;
        let temp2 = [];
        temp2.push(temp);
        this.subValues.push(temp);
        this.CommonService.createSubValues(temp2, this.subTableTemp.table_name).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp3;
                temp3 = this.subValues.length;
                this.subValues[temp3 - 1]["id"] = response.last_insert_id[0];
                this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbarUnhide('Item Not Updated, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    createSubInsideValues(tableName) {
        let temp = {};
        let value = this.insidesubFieldInfo[tableName];
        if (!this.insidesubValueInfo.hasOwnProperty(tableName)) {
            this.insidesubValueInfo[tableName] = [];
        }
        for (let i = 0; i < value.length; i++) {
            if (value[i].field_sub_type == 'number' || value[i].field_sub_type == 'switch') {
                temp[value[i].name] = 0;
                // if (value[i].default_value == "") {
                //   temp[value[i].name] = 0;
                // } else {
                //   temp[value[i].name] = value[i].default_value
                // }
            }
            else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                // if (value[i].default_value != "") {
                //   temp[value[i].name] = value[i].default_value
                // }
            }
            else if (value[i].field_sub_type == 'checklist') {
                // temp[value[i].name] = [];
            }
            else {
                // temp[value[i].name] = value[i].default_value
                temp[value[i].name] = "";
            }
        }
        temp["row_id"] = this.mainRowIndex.id;
        temp["last_modified_by"] = this.userData.id;
        let temp2 = [];
        temp2.push(temp);
        this.insidesubValueInfo[tableName].push(temp);
        this.CommonService.createSubValues(temp2, tableName).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp3;
                temp3 = this.insidesubValueInfo[tableName].length;
                this.insidesubValueInfo[tableName][temp3 - 1]["id"] = response.last_insert_id[0];
                this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbarUnhide('Item Not Updated, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    getTableData() {
        let access = this.userData.designation;
        let field = "id,description,display_name,icon,summarize_count,table_name," + access;
        let body = { table_name: "meta_table_data", fields: field, limit: 1, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ id: this.tableId }] };
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.getSubTableColumns();
                this.tableInfo = response.info[0];
                if (this.tableInfo.summarize_count != "") {
                    this.tableInfo.summarize_count = JSON.parse(this.tableInfo.summarize_count);
                    if (this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
                        this.sumCountHide = this.tableInfo.summarize_count[this.userData.id].hide;
                        if (this.tableInfo.summarize_count[this.userData.id].value != "")
                            this.summarizeCountValue = this.tableInfo.summarize_count[this.userData.id].value;
                        this.getSumarizeCount(this.tableInfo.summarize_count[this.userData.id]);
                        if (this.tableInfo.summarize_count[this.userData.id].value != "")
                            this.summarizeCountValue = this.tableInfo.summarize_count[this.userData.id].value;
                    }
                }
                else {
                    this.tableInfo.summarize_count = {};
                }
                this.getBody.table_name = this.tableInfo.table_name;
            }
        });
    }
    getSubTableColumns() {
        this.subTableInfo = [];
        this.columnsOrder = [];
        this.hideColumns = [];
        this.columnsNotCreate = 0;
        this.subload = 0;
        this.metaData1 = [];
        let field = "id,display_name,table_name,is_sub_table";
        this.subTableInfo = [];
        this.columnsOrder = [];
        this.hideColumns = [];
        this.columnsNotCreate = 0;
        this.subload = 0;
        this.metaData1 = [];
        let body = {
            "limit": 90,
            "page": 0,
            "fields": field,
            "db_name": "tracking_tb",
            "table_name": "meta_table_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { "is_sub_table": 1 }, { "parent_table_id": this.tableId }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.subTableInfo = response.info;
                this.subload = 1;
                this.getColumns();
            }
            // this.subTableInfo[0].hasOwnProperty
        });
    }
    getColumns() {
        // this.workFlow = [];
        let value = { table_name: this.routeId.tablename, "user_id": this.userData.id };
        this.CommonService.getColumns(value).subscribe((response) => {
            if (response.statusCode == 200) {
                if (!!response.info.length) {
                    this.columnsInfo = response.info[0];
                    if (response.info[0].fields != "") {
                        // this.getFilter()
                        this.columnsOrder = response.info[0].fields.split(',');
                    }
                    if (response.info[0].hide_fields != "") {
                        this.hideColumns = response.info[0].hide_fields.split(',');
                    }
                    this.getWorkFlow();
                    // this.getMetaData();
                }
                else {
                    this.columnsNotCreate = 1;
                    this.getWorkFlow();
                }
            }
        });
    }
    setCol(condition, value) {
        if (condition == true) {
            for (let i = 0; i < this.hideColumns.length; i++) {
                if (this.hideColumns[i] == value) {
                    this.hideColumns.splice(i, 1);
                }
            }
        }
        if (condition == false) {
            this.hideColumns.push(value);
        }
    }
    setColHide(value, ind) {
        this.columnsOrderTemp.push(value);
        this.columnsOrder.push(value.id);
        this.hideColumnsTemp.splice(ind, 1);
    }
    setColSelect(value, ind) {
        this.hideColumnsTemp.push(value);
        this.columnsOrderTemp.splice(ind, 1);
        this.columnsOrder.splice(ind, 1);
    }
    getColumnsAll() {
        // delete environment.tempCache.allData[this.routeId.tablename]
        let getBody = { data_table_id: this.routeId.id, designation_id: this.designationId, table_fields: this.userData.designation, table_name: this.routeId.tablename, user_id: this.userData.id };
        this.CommonService.getAllValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                this.columnsChange = 1;
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename] = {};
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename] = response;
                let temp = { ColumnsOrder: response.ColumnsOrder, FilterData: response.FilterData, Permission: response.Permission, SubTableData: response.SubTableData, TableData: response.TableData, WorkflowProcess: response.WorkflowProcess };
                this.getAllData(temp);
                this.getTempMetaData();
            }
        });
    }
    putColumns() {
        if (this.columnsNotCreate == 0) {
            let col = this.columnsOrder.toString();
            let hideCol = this.hideColumns.toString();
            let tableName = "table_columns_ordering";
            // , "hide_fields": hideCol
            let value = { "id": this.columnsInfo.id, "fields": col };
            this.CommonService.putColumns(value, tableName).subscribe((response) => {
                if (response.statusCode == 200) {
                    // this.getMetaData();
                    // this.getFilter();
                    this.getColumnsAll();
                }
            });
        }
        else {
            this.createColumns();
        }
    }
    createColumns() {
        let col = this.columnsOrder.toString();
        // let hideCol = this.hideColumns.toString();
        let tableName = "table_columns_ordering";
        // , "hide_fields": hideCol
        let value = { "fields": col, "user_id": this.userData.id, "table_name": this.routeId.tablename, "table_id": this.routeId.id };
        this.CommonService.createValues(value, tableName).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp = [];
                value["id"] = response.last_insert_id[0];
                temp.push(value);
                this.columnsInfo = temp;
                this.columnsNotCreate = 0;
                // this.getFilter();
                this.getColumnsAll();
            }
            // this.getMetaData();
        });
    }
    getMetaData() {
        this.selectSearchValue = "";
        this.selectedSearchField = "";
        this.tableSniper = 0;
        this.metaData1 = [];
        this.columnsToDisplay1 = ["select"];
        let value = { table_name: this.routeId.tablename };
        let access = this.userData.designation;
        let field = "id,field_sub_type,field_type,field_title,name,db_name,parent_table_field,parent_table_id,parent_table_name," + access;
        this.CommonService.getMetaFields(value, field).subscribe((response) => {
            // // this.metaData1 = response.info;
            // let access = this.userData.id + "_access"
            // for (let j = 0; j < response.info.length; j++) {
            //   if (response.info[j].field_sub_type != "duplicate" && response.info[j][access] != 3) {
            //     this.metaData1.push(response.info[j])
            //   }
            // }
            // for (let j = 0; j < this.metaData1.length; j++) {
            //   if (this.metaData1[j].field_sub_type === "user") {
            //     this.user_fields.push(this.metaData1[j].name)
            //   }
            //   if (this.metaData1[j].field_sub_type == "select" && this.metaData1[j].parent_table_field != "") {
            //     this.dropDown.push(this.metaData1[j].parent_table_field);
            //     this.dropDownKey.push(this.metaData1[j].name)
            //   }
            //   if (this.metaData1[j].field_sub_type == "checklist" && this.metaData1[j].parent_table_field != "") {
            //     this.checkListKey[this.metaData1[j].name] = this.metaData1[j].parent_table_field;
            //   }
            // }
            // this.getWorkFlow();
            // let temp = []
            // // for (let i = 0; i < this.columnsOrder.length; i++) {
            // //   for (let j = 0; j < this.metaData1.length; j++) {
            // //     if (this.columnsOrder[i] == this.metaData1[j].name && !this.hideColumns.includes(this.metaData1[j].name)) {
            // //       temp.push(this.metaData1[j])
            // //     }
            // //   }
            // // }
            // // this.metaData1 = temp;
            // for (let i = 0; i < this.metaData1.length; i++) {
            //   this.columnsToDisplay1.push(this.metaData1[i].name)
            // }
            // this.columnsToDisplay1.push("menuIcon")
        });
        // console.log("meta", this.metaData1)
    }
    getWorkFlow() {
        let body = { table_name: "workflow_process", fields: "id,fields,decision", limit: 2, page: 0, user_id: this.userData.id, sort_type: "ASC", sort_field: "id", filter: [{ "table_id": this.routeId.id }] };
        this.CommonService.getWorkFlow(body).subscribe((response) => {
            if (response.statusCode == 200) {
                if (!!response.info.length) {
                    this.workFlow.push(response.info[0]);
                    if (this.workFlow[0].fields != "") {
                        this.workFlow[0].fields = JSON.parse(this.workFlow[0].fields);
                    }
                    // if (this.workFlow[0].action != "") {
                    //   this.workFlow[0].action = JSON.parse(this.workFlow[0].action)
                    // }
                    // if (this.workFlow[0].decision != "") {
                    //   // console.log("enter", this.workFlow[0].decision)
                    //   this.workFlow[0].decision = JSON.parse(this.workFlow[0].decision)
                    // }
                    this.getFilter();
                }
                else {
                    this.tableSniper = 1;
                }
            }
        });
    }
    getFilter() {
        this.filterValue = '';
        this.tableLoaded = true;
        this.loaded = "false";
        this.filtercount = [];
        let body = { table_name: "filter_data", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", filter: [{ "user_id": this.userData.id }, { "table_id": this.routeId.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterValueTemp = '';
            if (!!response.info.length && response.info[0].filter_json != "") {
                let len = response.info.length;
                this.filterValue = JSON.parse(response.info[(len - 1)].filter_json);
                if (response.info[(len - 1)].sub_filter != "")
                    this.filterSubId = JSON.parse(response.info[(len - 1)].sub_filter);
                this.filterId = response.info[(len - 1)].id;
                this.filterValueTemp = this.filterValue;
                let countKey = Object.keys(this.filterValueTemp).length;
                this.getFilterValues();
                for (let i = 0; i < countKey; i++) {
                    this.filtercount.push(i);
                }
                for (let i = 0; i < countKey; i++) {
                    let keyslen = Object.keys(this.filterValueTemp[i]).length;
                    keyslen = keyslen - 8;
                    this.filterValueTemp[i]['value'] = [];
                    for (let j = 1; j <= keyslen; j++) {
                        if (this.filterValueTemp[i].fields == "bookmarks") {
                            this.booKmarkAdd = 1;
                        }
                        this.filterValueTemp[i].value.push(this.filterValueTemp[i][j]);
                        delete this.filterValueTemp[i][j];
                    }
                }
            }
            else {
                this.getFilterValues();
            }
            _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.allData[this.routeId.tablename].FilterData = response.info;
        });
    }
    deleteFieldValues(item, i) {
        this.filterValueTemp[item].value.splice(i, 1);
    }
    deleteFilterRow(item) {
        delete this.filterValueTemp[item];
        this.filtercount.splice(item, 1);
    }
    deleteRow() {
        this.tableLoaded = true;
        let temp = { "id": this.rowId, "tablename": this.routeId.tablename };
        this.CommonService.commonDelete(temp).subscribe((response) => {
            if (response.statusCode == 200) {
                this.getFilter();
            }
        });
    }
    getSumarizeCount(item) {
        let body = {
            "field_name": item.name,
            "table_name": item.table,
            "parent_table_field": item.t_field,
            "parent_table_name": item.t_name,
            "field_sub_type": item.sub_type,
            "db_name": "tracking_db",
            "parent_db": item.d_name
        };
        this.CommonService.getSummarizeCount(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.summarizeCountInfo = response.info;
                let temp = this.summarizeCountInfo.length;
                for (let i = 0; i < this.summarizeCountInfo.length; i++) {
                    if (temp == (i + 1)) {
                        this.testt('true', i);
                    }
                    else {
                        this.testt('false', i);
                    }
                }
            }
        });
    }
    selectSummarizeCountField(item) {
        if (this.tableInfo.summarize_count == "") {
            this.tableInfo.summarize_count = {};
        }
        if (!this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
            this.tableInfo.summarize_count[this.userData.id] = {};
        }
        this.tableInfo.summarize_count[this.userData.id]["id"] = item.id;
        this.tableInfo.summarize_count[this.userData.id]["name"] = item.name;
        this.tableInfo.summarize_count[this.userData.id]["table"] = item.table_name;
        this.tableInfo.summarize_count[this.userData.id]["f_title"] = item.field_title;
        this.tableInfo.summarize_count[this.userData.id]["t_name"] = item.parent_table_name;
        this.tableInfo.summarize_count[this.userData.id]["t_id"] = item.parent_table_id;
        this.tableInfo.summarize_count[this.userData.id]["t_field"] = item.parent_table_field;
        if (item.db_name == "") {
            this.tableInfo.summarize_count[this.userData.id]["d_name"] = "tracking_db";
        }
        else {
            this.tableInfo.summarize_count[this.userData.id]["d_name"] = item.db_name;
        }
        this.tableInfo.summarize_count[this.userData.id]["sub_type"] = item.field_sub_type;
        this.tableInfo.summarize_count[this.userData.id]["type"] = item.field_type;
        this.tableInfo.summarize_count[this.userData.id]["value"] = "";
        this.tableInfo.summarize_count[this.userData.id]["hide"] = "no";
        this.summarizeCountUpdate(this.tableInfo.summarize_count);
    }
    summarizeCountUpdate(item) {
        let body = {
            id: this.tableInfo.id,
            summarize_count: JSON.stringify(item)
        };
        this.CommonService.commonPut(body, "meta_table_data").subscribe((response) => {
            if (response.statusCode == 200) {
                this.getSumarizeCount(this.tableInfo.summarize_count[this.userData.id]);
                this.getFilter();
            }
        });
    }
    summarizeCountHide(item) {
        if (this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
            if (item == 'no') {
                this.sumCountHide = 'yes';
                this.tableInfo.summarize_count[this.userData.id].hide = 'yes';
            }
            else {
                this.sumCountHide = 'no';
                this.tableInfo.summarize_count[this.userData.id].hide = 'no';
            }
            let body = {
                id: this.tableInfo.id,
                summarize_count: JSON.stringify(this.tableInfo.summarize_count)
            };
            this.CommonService.commonPut(body, "meta_table_data").subscribe((response) => {
                if (response.statusCode == 200) {
                }
            });
        }
    }
    selectSummarizeCountValue(item, id) {
        this.summarizeCountValue = item;
        if ((this.tableInfo.summarize_count[this.userData.id].value == id || this.tableInfo.summarize_count[this.userData.id].value == item) && this.tableInfo.summarize_count[this.userData.id].value != "") {
            this.tableInfo.summarize_count[this.userData.id].value = "";
            this.summarizeCountValue = "##";
        }
        else {
            if (id != "") {
                this.tableInfo.summarize_count[this.userData.id].value = id;
            }
            else {
                this.tableInfo.summarize_count[this.userData.id].value = item;
            }
        }
        let body = {
            id: this.tableInfo.id,
            summarize_count: JSON.stringify(this.tableInfo.summarize_count)
        };
        this.CommonService.commonPut(body, "meta_table_data").subscribe((response) => {
            if (response.statusCode == 200) {
                this.getFilter();
            }
        });
    }
    bookMarkFilter() {
        if (!this.filterValueTemp) {
            this.filterValueTemp = {};
        }
        let len = 0;
        if (this.filtercount.length) {
            len = this.filtercount.length;
        }
        this.filtercount.push(len);
        this.filterValueTemp[len] = { condition: "Find In Set", fields: "bookmarks", operator: "AND", value: "", type: "VARCHAR", item: "", option: "", table_id: "307", is_sub: "", is_sub_id: "" };
        this.filterValueTemp[len].value = [];
        this.filterValueTemp[len].value.push(this.userData.id);
        this.booKmarkAdd = 1;
        if (this.filtercount.length) {
            this.deleteFilter('apply');
        }
        else {
            this.filterValueTemp = '';
            this.filterValue = '';
            this.deleteFilter('reset');
        }
    }
    deleteBookMarkFilter() {
        let keyslen = Object.keys(this.filterValueTemp);
        for (let i = 0; i < keyslen.length; i++) {
            if (this.filterValueTemp[keyslen[i]].fields == "bookmarks") {
                delete this.filterValueTemp[keyslen[i]];
                this.filtercount.splice(i, 1);
                this.booKmarkAdd = 0;
                if (this.filtercount.length) {
                    this.deleteFilter('apply');
                }
                else {
                    this.filterValueTemp = '';
                    this.filterValue = '';
                    this.deleteFilter('reset');
                }
            }
        }
    }
    deleteFilter(value) {
        this.loaded = "false";
        this.tableLoaded = true;
        this.CommonService.deleteFilter(this.filterId).subscribe((response) => {
            var _a;
            if (value == "reset") {
                let temp;
                this.filtercount = [];
                this.filterValue = temp;
                this.filterValueTemp = temp;
                this.filterSubId = [];
                this.getFilter();
            }
            else {
                this.filterValue = this.filterValueTemp;
                for (let i = 0; i < this.filtercount.length; i++) {
                    if (this.filterValue[this.filtercount[i]].hasOwnProperty("value")) {
                        for (let j = 1; j <= this.filterValue[this.filtercount[i]].value.length; j++) {
                            // console.log("nn", this.filterValue[this.filtercount[i]], this.filtercount[i], this.filterValue[this.filtercount[i]].value)
                            if (this.filterValue[this.filtercount[i]].item != "" && ((_a = this.filterValue[this.filtercount[i]].item) === null || _a === void 0 ? void 0 : _a.parent_table_id) != 0 && this.filterValue[this.filtercount[i]].value[(j - 1)].hasOwnProperty("id")) {
                                this.filterValue[this.filtercount[i]][j] = this.filterValue[this.filtercount[i]].value[(j - 1)].id;
                            }
                            else {
                                this.filterValue[this.filtercount[i]][j] = this.filterValue[this.filtercount[i]].value[(j - 1)];
                                // console.log(j, this.filterValue[this.filtercount[i]][j])
                            }
                        }
                        delete this.filterValue[this.filtercount[i]]["value"];
                        delete this.filterValue[this.filtercount[i]]["item"];
                    }
                }
                let tempsub = [];
                for (let i = 0; i < this.filtercount.length; i++) {
                    if (this.filterValue[this.filtercount[i]].is_sub != "") {
                        tempsub.push(this.filterValue[this.filtercount[i]]);
                    }
                }
                if (tempsub.length) {
                    this.getSubFilter(tempsub);
                }
                else {
                    let id = [];
                    this.filterApply(id);
                }
            }
        });
        this.closeFilter();
    }
    getSubFilter(value) {
        let getBody = { table_name: value[0].is_sub, fields: "row_id", data_table_id: value[0].is_sub_id, limit: 10000, page: 0, sort_type: "DESC", sort_field: "id", filter: value };
        this.CommonService.getFiterSubTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                let tempId = [];
                for (let i = 0; i < response.info.length; i++) {
                    if (!tempId.includes(response.info[i].row_id)) {
                        tempId.push(response.info[i].row_id);
                    }
                    if (i == (response.info.length - 1)) {
                        this.filterApply(tempId);
                    }
                }
            }
        });
    }
    filterApply(id) {
        this.loaded = "false";
        this.putFilter(this.filterValue, id);
    }
    putFilter(value, id) {
        let tempkey = Object.keys(value);
        let tempValue = {};
        for (let i = 0; i < tempkey.length; i++) {
            tempValue[i] = value[tempkey[i]];
        }
        this.loaded = "false";
        let temp2 = tempValue;
        let temp3 = JSON.stringify(temp2);
        let subid = JSON.stringify(id);
        let temp = {
            "user_id": this.userData.id,
            "table_id": this.routeId.id,
            "filter_json": temp3,
            "sub_filter": subid
        };
        this.CommonService.putFiterValues(temp).subscribe((response) => {
            if (response.statusCode == 200) {
                this.getFilter();
            }
        });
    }
    testt(item, i) {
        if (this.sumCont == 0)
            this.sumColor[i] = "#706ae9";
        if (this.sumCont == 1)
            this.sumColor[i] = "#e48453";
        if (this.sumCont == 2)
            this.sumColor[i] = "#db558e";
        if (this.sumCont == 3)
            this.sumColor[i] = "#56b27b";
        if (this.sumCont == 4)
            this.sumColor[i] = "#5280c4";
        if (this.sumCont == 5)
            this.sumColor[i] = "#b5b5b5";
        if (this.sumCont == 6)
            this.sumColor[i] = "#df7171";
        this.sumCont = (1 + this.sumCont);
        if (this.sumCont == 7) {
            this.sumCont = 0;
        }
        if (item) {
            this.lastLoop = 2;
            this.sumlength = this.summarizeCountInfo.length;
        }
    }
    getSubTableMeta() {
        if (this.filterSelectSubTableTemp != "") {
            let value = { table_name: this.filterSelectSubTableTemp };
            this.CommonService.getMetaData(value).subscribe((response) => {
                if (response.statusCode == 200) {
                    this.subMetaInfo = response.info;
                }
            });
        }
    }
    getFilterValues(from) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        this.columnsOrderTemp = [];
        this.columnsToDisplay1 = [];
        let cot = "COUNT(*)";
        if (!!this.selectedSearchField && this.selectedSearchField != '') {
            if (this.selectedSearchField.parent_table_name != "") {
                // this.getBody["search"] = [{ [this.selectedSearchField.name]: this.selectSearchValue["id"] }]
                this.getBody["filters"] = this.selectedSearchField.name;
                this.getBody["filtersv"] = this.selectSearchValue["id"];
            }
            else if (((_a = this.selectedSearchField) === null || _a === void 0 ? void 0 : _a.field_sub_type) == 'date') {
                this.getBody["filters"] = this.selectedSearchField.name;
                this.getBody["filtersv"] = this.selectSearchValue;
            }
            else if (((_b = this.selectedSearchField) === null || _b === void 0 ? void 0 : _b.option_list) != "") {
                this.getBody["filters"] = this.selectedSearchField.name;
                this.getBody["filtersv"] = this.selectSearchValue;
            }
            else {
                // this.getBody["search"] = [{ [this.selectedSearchField.name]: this.selectSearchValue[this.selectedSearchField.name] }]
                this.getBody["filters"] = this.selectedSearchField.name;
                this.getBody["filtersv"] = this.selectSearchValue[this.selectedSearchField.name];
            }
        }
        if (!!this.filterValue) {
            let len = Object.keys(this.filterValue).length;
            let temp = [];
            for (let i = 0; i < len; i++) {
                if (this.filterValue[i].is_sub == "") {
                    temp.push(this.filterValue[i]);
                }
                else {
                    this.filterSelectSubTable = this.filterValue[i].is_sub;
                    this.filterSelectSubTableTemp = this.filterValue[i].is_sub;
                }
            }
            if (temp.length)
                this.getBody["filter"] = temp;
        }
        if (this.filterSubId.length) {
            if (!this.getBody.hasOwnProperty("filter")) {
                this.getBody["filter"] = [];
            }
            let temp2 = {
                condition: "Equal to",
                fields: "id",
                operator: "AND",
                option: [],
                table_id: "",
                type: "INT",
                is_sub: "",
                is_sub_id: ""
            };
            for (let i = 0; i < this.filterSubId.length; i++) {
                temp2[i] = this.filterSubId[i];
            }
            this.getBody["filter"].push(temp2);
        }
        // console.log("tttttttttt", this.tableInfo)
        if (this.tableInfo.summarize_count != "") {
            if (this.tableInfo.summarize_count.hasOwnProperty(this.userData.id)) {
                if (this.tableInfo.summarize_count[this.userData.id].value != "" || this.summarizeCountValue == "") {
                    if (!this.getBody.hasOwnProperty("filter")) {
                        this.getBody["filter"] = [];
                    }
                    let temp2 = {
                        condition: "Equal to",
                        fields: this.tableInfo.summarize_count[this.userData.id].name,
                        operator: "AND",
                        option: [],
                        table_id: "",
                        type: this.tableInfo.summarize_count[this.userData.id].type,
                        is_sub: "",
                        is_sub_id: ""
                    };
                    temp2[1] = this.tableInfo.summarize_count[this.userData.id].value;
                    this.getBody["filter"].push(temp2);
                }
            }
        }
        if (((_c = this.workFlow[0]) === null || _c === void 0 ? void 0 : _c.fields.length) !== 0) {
            if (!this.getBody.hasOwnProperty("filter")) {
                this.getBody["filter"] = [];
            }
            for (let i = 0; i < ((_d = this.workFlow[0]) === null || _d === void 0 ? void 0 : _d.fields.length); i++) {
                // this.workFlow[0].fields[i].condition
                let temp2 = {
                    condition: this.workFlow[0].fields[i].criteria,
                    fields: this.workFlow[0].fields[i].name,
                    operator: this.workFlow[0].fields[i].operation,
                    option: [],
                    table_id: "",
                    type: this.workFlow[0].fields[i].type,
                    is_sub: "",
                    is_sub_id: ""
                };
                if (this.workFlow[0].fields[i].value != "") {
                    temp2[1] = this.workFlow[0].fields[i].value;
                }
                else {
                    temp2[1] = '';
                    temp2[2] = null;
                }
                delete this.workFlow[0].fields[i].value;
                this.getBody["filter"].push(temp2);
            }
        }
        if (((_e = this.workFlow[0]) === null || _e === void 0 ? void 0 : _e.decision) != "" && !this.workFlow[0].hasOwnProperty("decision")) {
            if (!this.getBody.hasOwnProperty("filter")) {
                this.getBody["filter"] = [];
            }
            if ((_f = this.workFlow[0]) === null || _f === void 0 ? void 0 : _f.decision.hasOwnProperty(this.userData.id)) {
                let keys = Object.keys((_g = this.workFlow[0]) === null || _g === void 0 ? void 0 : _g.decision[this.userData.id]);
                for (let i = 0; i < keys.length; i++) {
                    let temp2 = {
                        condition: (_h = this.workFlow[0]) === null || _h === void 0 ? void 0 : _h.decision[this.userData.id][keys[i]].condition,
                        fields: (_j = this.workFlow[0]) === null || _j === void 0 ? void 0 : _j.decision[this.userData.id][keys[i]].fields,
                        operator: (_k = this.workFlow[0]) === null || _k === void 0 ? void 0 : _k.decision[this.userData.id][keys[i]].operator,
                        option: [],
                        table_id: "",
                        type: (_l = this.workFlow[0]) === null || _l === void 0 ? void 0 : _l.decision[this.userData.id][keys[i]].type,
                        is_sub: "",
                        is_sub_id: ""
                    };
                    if ((_o = (_m = this.workFlow[0]) === null || _m === void 0 ? void 0 : _m.decision[this.userData.id][keys[i]]) === null || _o === void 0 ? void 0 : _o.value_id.length) {
                        for (let j = 0; j < ((_p = this.workFlow[0]) === null || _p === void 0 ? void 0 : _p.decision[this.userData.id][keys[i]].value_id.length); j++) {
                            temp2[j] = (_q = this.workFlow[0]) === null || _q === void 0 ? void 0 : _q.decision[this.userData.id][keys[i]].value_id[j];
                        }
                        (_r = this.workFlow[0]) === null || _r === void 0 ? true : delete _r.decision[this.userData.id][keys[i]].value_id;
                        (_s = this.workFlow[0]) === null || _s === void 0 ? true : delete _s.decision[this.userData.id][keys[i]].value;
                    }
                    else if ((_t = this.workFlow[0]) === null || _t === void 0 ? void 0 : _t.decision[this.userData.id][keys[i]].value.length) {
                        for (let j = 0; j < ((_u = this.workFlow[0]) === null || _u === void 0 ? void 0 : _u.decision[this.userData.id][keys[i]].value.length); j++) {
                            temp2[j] = (_v = this.workFlow[0]) === null || _v === void 0 ? void 0 : _v.decision[this.userData.id][keys[i]].value[j];
                        }
                        (_w = this.workFlow[0]) === null || _w === void 0 ? true : delete _w.decision[this.userData.id][keys[i]].value_id;
                        (_x = this.workFlow[0]) === null || _x === void 0 ? true : delete _x.decision[this.userData.id][keys[i]].value;
                    }
                    else {
                        temp2[1] = '';
                        temp2[2] = null;
                        (_y = this.workFlow[0]) === null || _y === void 0 ? true : delete _y.decision[this.userData.id][keys[i]].value_id;
                        (_z = this.workFlow[0]) === null || _z === void 0 ? true : delete _z.decision[this.userData.id][keys[i]].value;
                    }
                    this.getBody["filter"].push(temp2);
                }
            }
        }
        // if (this.workFlow[0].action != "") {
        //   if (!this.getBody.hasOwnProperty("filter")) {
        //     this.getBody["filter"] = []
        //   }
        // }
        if (this.getBody.sort_type == "") {
            this.getBody.sort_type = "DESC";
            this.getBody.sort_field = "id";
        }
        // this.getBody["metaData"] = this.metaData1;
        this.getBody["tD"] = { tn: this.routeId.tablename };
        if (!!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse.hasOwnProperty(this.routeId.tablename) && this.columnsChange == 0) {
            this.getBody["is_sub"] = 1;
        }
        this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"];
        this.metaData1 = [];
        this.data1 = [];
        this.columnsToDisplay1 = ["select"];
        this.getBody["colId"] = this.columnsOrder.toString();
        // this.CommonService.getJsonDataValues(this.getBody).subscribe((response: any) => {
        //   if (response.statusCode == 200) {
        //     console.log("rrrrrrrrrrrrrrr",response)
        //   }
        // });
        if (!!this.columnsOrder.length) {
            this.CommonService.getFiterMainTableValues(this.getBody).subscribe((response) => {
                if (response.statusCode == 200) {
                    // if (!!this.columnsOrder.length) {
                    //   let chars = this.columnsOrder;
                    //   this.columnsOrder = chars.filter((c, index) => {
                    //     return chars.indexOf(c) === index;
                    //   });
                    // }
                    this.columnsChange = 0;
                    this.getBody = { table_name: this.routeId.tablename, data_table_id: this.routeId.id, limit: this.pageSize, page: this.page, sort_type: "DESC", sort_field: "id" };
                    // this.filterValue = '';
                    // this.filterValueTemp = '';
                    let access = this.userData.designation;
                    if (!!response.hasOwnProperty("meta")) {
                        _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename] = response.meta;
                        for (let j = 0; j < _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename].length; j++) {
                            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j].field_sub_type != "duplicate" && _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j][access] != 3) {
                                this.metaData1.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j]);
                            }
                        }
                    }
                    if (!!_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse.hasOwnProperty(this.routeId.tablename) && !response.hasOwnProperty("meta")) {
                        for (let j = 0; j < _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename].length; j++) {
                            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j].field_sub_type != "duplicate" && _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j][access] != 3) {
                                this.metaData1.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tempCache.metaParse[this.routeId.tablename][j]);
                            }
                        }
                    }
                    else {
                        // environment.tempCache.metaParse[this.routeId.tablename] = response.meta;
                        // for (let j = 0; j < environment.tempCache.metaParse[this.routeId.tablename].length; j++) {
                        //   if (environment.tempCache.metaParse[this.routeId.tablename][j].field_sub_type != "duplicate" && environment.tempCache.metaParse[this.routeId.tablename][j][access] != 3) {
                        //     this.metaData1.push(environment.tempCache.metaParse[this.routeId.tablename][j])
                        //   }
                        // }
                    }
                    for (let j = 0; j < this.metaData1.length; j++) {
                        if (this.metaData1[j].field_sub_type === "user") {
                            this.user_fields.push(this.metaData1[j].name);
                        }
                        if (this.metaData1[j].field_sub_type == "select" && this.metaData1[j].parent_table_field != "") {
                            this.dropDown.push(this.metaData1[j].parent_table_field);
                            this.dropDownKey.push(this.metaData1[j].name);
                        }
                        if (this.metaData1[j].field_sub_type == "checklist" && this.metaData1[j].parent_table_field != "") {
                            this.checkListKey[this.metaData1[j].name] = this.metaData1[j].parent_table_field;
                        }
                    }
                    // this.getWorkFlow();
                    // let temp = []
                    // if (!!this.columnsOrder.length) {
                    // for (let j = 0; j < this.metaData1.length; j++) {
                    //   if (!this.columnsOrder.includes(this.metaData1[j].name)) {
                    //     this.columnsOrder.push(this.metaData1[j].name)
                    //   }
                    // }
                    // }
                    // for (let j = 0; j < this.subTableInfo.length; j++) {
                    //   if (!this.columnsOrder.includes(this.subTableInfo[j].display_name)) {
                    //     this.columnsOrder.push(this.subTableInfo[j].display_name)
                    //   }
                    // }
                    // for (let i = 0; i < this.columnsOrder.length; i++) {
                    //   for (let j = 0; j < this.metaData1.length; j++) {
                    //     if (this.columnsOrder[i] == this.metaData1[j].name && !this.hideColumns.includes(this.metaData1[j].name)) {
                    //       temp.push(this.metaData1[j])
                    //     }
                    //   }
                    // }
                    // if (!this.columnsOrder.length) {
                    //   for (let j = 0; j < this.metaData1.length; j++) {
                    //     this.columnsOrder.push(this.metaData1[j].name)
                    //   }
                    //   for (let j = 0; j < this.subTableInfo.length; j++) {
                    //     this.columnsOrder.push(this.subTableInfo[j].display_name)
                    //   }
                    // } else {
                    //   this.metaData1 = temp;
                    // }
                    // for (let i = 0; i < this.columnsOrder.length; i++) {
                    //   this.columnsToDisplay1.push(this.columnsOrder[i])
                    // }
                    console.log("stsssssssssssssddddd", this.metaData1);
                    for (let i = 0; i < this.columnsOrder.length; i++) {
                        for (let j = 0; j < this.metaData1.length; j++) {
                            if (this.columnsOrder[i] == this.metaData1[j].id) {
                                this.columnsOrderTemp.push(this.metaData1[j]);
                                this.columnsToDisplay1.push(this.metaData1[j].name);
                            }
                        }
                    }
                    // for (let i = 0; i < this.columnsOrderTemp.length; i++) {
                    //   this.columnsToDisplay1.push(this.columnsOrderTemp[i].name)
                    // }
                    this.columnsToDisplay1.push("menuIcon");
                    // console.log("ddddddddddddddd", this.columnsToDisplay1, this.metaData1)
                    // -----------------------Values Info-------------------------
                    this.data1 = response.info;
                    let check = Object.keys(this.checkListKey);
                    for (let i = 0; i < this.data1.length; i++) {
                        if (this.data1[i].bookmarks != null && this.data1[i].bookmarks != '') {
                            this.data1[i].bookmarks = this.data1[i].bookmarks.split(",");
                            if (Array.isArray(this.data1[i].bookmarks)) {
                                // this.data1[i].bookmarks = this.data1[i].bookmarks.split("");
                            }
                            let temp = '' + this.userData.id;
                            if (this.data1[i].bookmarks.includes(temp)) {
                                this.bookmark.push(this.data1[i].id);
                            }
                            this.data1[i].bookmarks = this.data1[i].bookmarks.toString();
                        }
                        for (let k = 0; k < this.user_fields.length; k++) {
                            if (!!this.data1[i][this.user_fields[k]]) {
                                this.data1[i][this.user_fields[k]] = this.data1[i][this.user_fields[k]][0].user_name;
                            }
                        }
                        for (let k = 0; k < check.length; k++) {
                            if (this.data1[i].hasOwnProperty(check[k]) && this.data1[i][check[k]] != null) {
                                let val = [];
                                for (let l = 0; l < this.data1[i][check[k]].length; l++) {
                                    val.push(this.data1[i][check[k]][l][this.checkListKey[check[k]]]);
                                }
                                this.data1[i][check[k]] = val.toString();
                            }
                        }
                        for (let j = 0; j < this.dropDownKey.length; j++) {
                            if (this.data1[i].hasOwnProperty(this.dropDownKey[j])) {
                                if (this.data1[i][this.dropDownKey[j]] != null) {
                                    if (!!this.data1[i][this.dropDownKey[j]].length) {
                                        for (let k = 0; k < this.dropDown.length; k++) {
                                            if (Array.isArray(this.data1[i][this.dropDownKey[j]])) {
                                                if (this.data1[i][this.dropDownKey[j]][0].hasOwnProperty(this.dropDown[k])) {
                                                    this.data1[i][this.dropDownKey[j]] = this.data1[i][this.dropDownKey[j]][0][this.dropDown[k]];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data1);
                    this.loaded = "true";
                    this.count = response.total_count[0][cot];
                    if (this.getBody.hasOwnProperty("filter")) {
                        delete this.getBody["filter"];
                    }
                    this.tableLoaded = false;
                    this.tableSniper = 1;
                    this.getTempMetaDataLoad();
                    this.getSubTableMeta();
                }
            });
        }
        else {
            this.getTempMetaDataLoad();
            this.tableSniper = 1;
        }
    }
    UpdateBookMark(rid, value, i) {
        if (this.bookmark.includes(rid)) {
            value = value.split(",");
            // console.log("sssss", rid, value, i, this.bookmark)
            let tempp = [];
            for (let j = 0; j < value.length; j++) {
                if (value[j] != this.userData.id) {
                    tempp.push(value[j]);
                }
            }
            value = tempp;
            for (let j = 0; j < this.bookmark.length; j++) {
                if (this.bookmark[j] == rid) {
                    this.bookmark.splice(j, 1);
                }
            }
            value = value.toString();
            this.data1[i].bookmarks = value;
            // delete this.bookmark[this.data1[i].id]
        }
        else {
            if (value == null || value == '') {
                value = this.userData.id;
                this.data1[i].bookmarks = this.userData.id;
                this.bookmark.push(rid);
            }
            else {
                value = value.split(",");
                value.push(this.userData.id);
                value = value.toString();
                this.data1[i].bookmarks = value;
                this.bookmark.push(rid);
            }
        }
        let temp = { "id": rid, "bookmarks": value };
        // console.log("rrrr", temp)
        this.CommonService.commonPut(temp, this.routeId.tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data1);
            }
        });
    }
    getAddFields(value) {
        let body = { table_name: "meta_field_data", limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ "field_title": value }], "filter": [{ "table_name": this.routeId.tablename }] };
        if (this.filterSelectSubTableTemp != "") {
            body.filter[0].table_name = this.filterSelectSubTable;
        }
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.filterAddField = response.info;
                this.filterAddField = this.filterAddField.filter((c, index) => {
                    return this.filterAddField[index].field_sub_type != 'duplicate';
                });
            }
        });
    }
    getSumFields(value) {
        let body = { table_name: "meta_field_data", limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ "field_title": value }], "filter": [{ "table_name": this.routeId.tablename }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterAddField = response.info;
        });
    }
    addSubTable() {
        let len = Object.keys(this.filterValueTemp);
        for (let i = 0; i < len.length; i++) {
            if (this.filterValueTemp[i].is_sub != "") {
                delete this.filterValueTemp[i].is_sub;
            }
        }
        let len2 = Object.keys(this.filterValueTemp);
        let temp = {};
        for (let i = 0; i < len2.length; i++) {
            temp[i] = this.filterValueTemp[len2[i]];
        }
        this.filterValueTemp = temp;
    }
    getSubTable(value) {
        let body = { table_name: "meta_table_data", limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ "display_name": value }], "filter": [{ "is_sub_table": 1 }, { "parent_table_id": this.routeId.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterSubTable = response.info;
        });
    }
    getAddValues(fields, value) {
        // console.log("ddd", fields, value, this.filterValueTemp)
        let body = { table_name: this.routeId.tablename, limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ [fields]: value }] };
        if (this.filterSelectSubTableTemp != "") {
            body.table_name = this.filterSelectSubTable;
        }
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterAddValue = response.info;
        });
    }
    getSearchValues(value) {
        let body = { table_name: this.routeId.tablename, limit: 10, page: 0, sort_type: "ASC", sort_field: "id", db_name: this.selectedSearchField.db_name };
        if (this.selectedSearchField.parent_table_name != "") {
            body.table_name = this.selectedSearchField.parent_table_name;
            // body.fields = this.selectedSearchField.parent_table_field;
            body["search"] = [{ [this.selectedSearchField.parent_table_field]: value }];
        }
        else {
            body["search"] = [{ [this.selectedSearchField.name]: value }];
        }
        this.CommonService.getValues(body).subscribe((response) => {
            this.searchValue = response.info;
        });
    }
    getDropdownValues(data, value) {
        // console.log("ddddd", data, value)
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": data.item.db_name,
            "table_name": data.item.parent_table_name,
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { [data.item.parent_table_field]: value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = response.info;
        });
    }
    selectValue(e, index) {
        if (!!e) {
            this.filterValueTemp[index].value.push(e);
        }
        // console.log("eeeeeee", this.filterValueTemp, index)
        this.filterAddValue = [];
    }
    selectAdvancedValue(e, index, i, field) {
        if (!!e && !!i) {
            let temp = { id: i, [field]: e };
            this.filterValueTemp[index].value.push(temp);
        }
        // console.log("eeeeeee", this.filterValueTemp, index)
        this.dropdownSearch = [];
    }
    selectField(e) {
        if (!this.filterValueTemp) {
            let temp = 0;
            this.filtercount.push(temp);
            if (!!e) {
                this.filterValueTemp = {};
                if (this.filterSelectSubTableTemp != "") {
                    this.filterValueTemp["0"] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id, is_sub: this.filterSelectSubTable, is_sub_id: this.filterSelectSubTableId };
                }
                else {
                    this.filterValueTemp["0"] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id, is_sub: "", is_sub_id: "" };
                }
                this.filterFieldSelect = '';
            }
        }
        else {
            if (!!e) {
                let len = this.filtercount.length;
                this.filtercount.push(len);
                if (this.filterSelectSubTableTemp != "") {
                    this.filterValueTemp[len] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id, is_sub: this.filterSelectSubTable, is_sub_id: this.filterSelectSubTableId };
                }
                else {
                    this.filterValueTemp[len] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id, is_sub: "", is_sub_id: "" };
                }
                this.filterFieldSelect = '';
            }
        }
        // console.log("sssssss", this.filterValueTemp)
        this.filterAddField = [];
    }
    formatDateSearch(date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        this.selectSearchValue = formatdate;
        // console.log("WWwwwwwww", this.selectSearchValue)
        this.getFilter();
    }
    formatDate(index, date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        this.selectValue(formatdate, index);
    }
    formatDateTime(index, date) {
        let d = new Date(date), dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.selectValue(dformat, index);
    }
    searchFieldSelected(item) {
        // console.log("fffffff", item, this.selectSearchValue)
        if (item.option_list != "") {
            item.option_list = item.option_list.split(",");
        }
        this.selectedSearchField = item;
    }
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.columnsOrder, event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.columnsOrderTemp, event.previousIndex, event.currentIndex);
    }
    openFilter() {
        this.filterSelectSubTableTemp = this.filterSelectSubTable;
        if (!!this.filterValueTemp) {
            let temp = Object.keys(this.filterValueTemp);
            if (!this.filterValueTemp[temp[0]].hasOwnProperty("item")) {
                for (let i = 0; i < temp.length; i++) {
                    for (let j = 0; j < this.metaData1.length; j++) {
                        if (this.metaData1[j].name == this.filterValueTemp[temp[i]].fields) {
                            this.filterValueTemp[temp[i]]["item"] = this.metaData1[j];
                            if (this.metaData1[j].parent_table_id != 0) {
                                let tempvalue = [];
                                for (let k = 0; k < this.filterValueTemp[temp[i]].value.length; k++) {
                                    let body = {
                                        "limit": 10,
                                        "page": 0,
                                        "db_name": this.metaData1[j].db_name,
                                        "table_name": this.metaData1[j].parent_table_name,
                                        "sort_type": "ASC",
                                        "sort_field": "id",
                                        "filter": [
                                            { id: this.filterValueTemp[temp[i]].value[k] }
                                        ]
                                    };
                                    this.CommonService.getValues(body).subscribe((response) => {
                                        var _a, _b;
                                        if (response.statusCode == 200) {
                                            let temp2 = { id: response.info[0].id, [(_a = this.filterValueTemp[temp[i]]) === null || _a === void 0 ? void 0 : _a.item.parent_table_field]: response.info[0][(_b = this.filterValueTemp[temp[i]]) === null || _b === void 0 ? void 0 : _b.item.parent_table_field] };
                                            tempvalue.push(temp2);
                                        }
                                    });
                                }
                                this.filterValueTemp[temp[i]].value = tempvalue;
                            }
                        }
                    }
                    if (this.filterSelectSubTableTemp != "") {
                        for (let j = 0; j < this.subMetaInfo.length; j++) {
                            if (this.subMetaInfo[j].name == this.filterValueTemp[temp[i]].fields) {
                                this.filterValueTemp[temp[i]]["item"] = this.subMetaInfo[j];
                                if (this.subMetaInfo[j].parent_table_id != 0) {
                                    let tempvalue = [];
                                    for (let k = 0; k < this.filterValueTemp[temp[i]].value.length; k++) {
                                        let body = {
                                            "limit": 10,
                                            "page": 0,
                                            "db_name": this.subMetaInfo[j].db_name,
                                            "table_name": this.subMetaInfo[j].parent_table_name,
                                            "sort_type": "ASC",
                                            "sort_field": "id",
                                            "filter": [
                                                { id: this.filterValueTemp[temp[i]].value[k] }
                                            ]
                                        };
                                        this.CommonService.getValues(body).subscribe((response) => {
                                            var _a, _b;
                                            if (response.statusCode == 200) {
                                                let temp2 = { id: response.info[0].id, [(_a = this.filterValueTemp[temp[i]]) === null || _a === void 0 ? void 0 : _a.item.parent_table_field]: response.info[0][(_b = this.filterValueTemp[temp[i]]) === null || _b === void 0 ? void 0 : _b.item.parent_table_field] };
                                                tempvalue.push(temp2);
                                            }
                                        });
                                    }
                                    this.filterValueTemp[temp[i]].value = tempvalue;
                                }
                            }
                        }
                    }
                }
            }
        }
        // console.log("fff", this.filterValueTemp)
        this.menuFilterTrigger.openMenu();
    }
    closeFilter() {
        this.menuFilterTrigger.closeMenu();
        this.filterSelectSubTableTemp = "";
    }
    OpenDialog(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '700px',
            height: '800px'
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
    redirectCreateView() {
        this.route.navigate(['create-view', this.tableInfo.display_name], { queryParams: { id: this.tableInfo.id, tablename: this.tableInfo.table_name, displayname: this.tableInfo.display_name } });
    }
    redirectEditView(value) {
        this.route.navigate(['edit-view', this.tableInfo.display_name], { queryParams: { id: this.tableInfo.id, tablename: this.tableInfo.table_name, displayname: this.tableInfo.display_name, rowid: value } });
    }
    goToProcess() {
        var _a;
        this.tableInfo["process"] = "table-view";
        this.route.navigate(['/edit-process', (_a = this.tableInfo) === null || _a === void 0 ? void 0 : _a.table_name], { queryParams: this.tableInfo, });
    }
    ExportTOExcel() {
        var _a, _b, _c;
        // this.getBody.limit = 1000;
        // this.getBody.page = 0;
        // this.getFilterValues('table_report');
        const element = document.getElementById('dashboard-table');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].table_to_sheet(element);
        ws['!cols'] = [];
        ws['!cols'][0] = { hidden: true };
        if ((_a = this.columnsToDisplay1) === null || _a === void 0 ? void 0 : _a.length) {
            for (let header = 0; header < this.columnsToDisplay1.length; header++) {
                ws['!cols'].push({ wch: (((_b = this.columnsToDisplay1[header]) === null || _b === void 0 ? void 0 : _b.length) ? (_c = this.columnsToDisplay1[header]) === null || _c === void 0 ? void 0 : _c.length : 0) + 7 });
            }
        }
        // if (this.metaData1?.length)
        //   ws['!cols'][ this.metaData1?.length + 2 ] = { hidden: true };
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(wb, ws, 'Records');
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](wb, { bookType: 'xlsx', type: 'base64' });
        const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        this.table_record_xlsx = [{
                fileName: this.tableInfo.display_name + '.xlsx',
                file: 'data:' + EXCEL_TYPE + ';base64,' + excelBuffer,
                fileType: EXCEL_TYPE
            }];
        this.sendMailAtom = true;
    }
    gotToReports() {
        var _a, _b;
        if ((_a = this.routeId) === null || _a === void 0 ? void 0 : _a.id) {
            this.route.navigate(['/reports', (_b = this.tableInfo) === null || _b === void 0 ? void 0 : _b.display_name], { queryParams: this.tableInfo, });
        }
    }
    transferData() {
        this.transferRef = this.dialog.open(_data_transfer_data_transfer_component__WEBPACK_IMPORTED_MODULE_4__["DataTransferComponent"], {
            width: '40vw',
            height: '30vh',
            maxHeight: '23vh',
            maxWidth: '40vw',
        });
        this.transferRef.afterClosed().subscribe((res) => { });
    }
}
TableViewComponent.ɵfac = function TableViewComponent_Factory(t) { return new (t || TableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
TableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableViewComponent, selectors: [["app-table-view"]], viewQuery: function TableViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuFilterTrigger = _t.first);
    } }, decls: 67, vars: 17, consts: [["class", "container", 4, "ngIf"], ["class", "full-height", "style", "display: flex;\nalign-items: center;\njustify-content: center;", 4, "ngIf"], ["menuMore", "matMenu"], ["menuSummarizeCount", "matMenu"], [3, "click"], ["type", "text", 3, "matAutocomplete", "click", "focus", "input"], ["addSummarizeCount", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["menuSearch", ""], ["search", "matMenu"], [2, "overflow", "scroll", "max-height", "600px"], [1, "search-select-hint"], [4, "ngFor", "ngForOf"], ["moreicon", "matMenu"], [1, "btn"], [1, "icon"], [1, "btn", 3, "click"], ["menuFilter", "matMenu"], [1, "filter-container", 3, "click"], [1, "filter-header"], [1, "f-close-icon", 3, "click"], [1, "filter-body"], [1, "f-s-b-g"], ["class", "filter-add-fields", 4, "ngIf"], [1, "filter-add-fields"], [1, "filter-text"], [1, "filter-add-input"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "ngModel", "input", "ngModelChange", "focus"], [1, "f-close-icon", "f-input-icon"], ["addField", "matAutocomplete"], ["class", "filter-max-h", 4, "ngIf"], [1, "filter-footer"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "filter-reset-btn", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "filter-apply-btn", 3, "click"], ["class", "mail-atom ", 4, "ngIf"], ["SubTableView", ""], ["SubTableEdit", ""], [1, "container"], [1, "header-table-view"], [1, "process-icon"], [1, "icon-alignment", "h-icon"], [1, "heading"], [1, "description"], [1, "action-btn"], [2, "width", "87px"], ["class", "new-btn cursor", "matRipple", "", "matRippleColor", "'#ffffff'", 3, "disabled", "click", 4, "ngIf"], [1, "action-btn-m", 2, "width", "87px"], ["class", "edit-process-btn cursor", "matRipple", "", "matRippleColor", "'#ffffff'", 3, "click", 4, "ngIf"], ["style", "width: 87px;", "class", "action-btn-m", 4, "ngIf"], [1, "action-btn-m", 2, "width", "30px"], [1, "more-btn", "cursor", 3, "matMenuTriggerFor"], [1, "icon-alignment", "f-size"], ["class", "sum-d", 4, "ngIf"], [1, "utils"], [1, "position-r"], ["matRipple", "", "matRippleColor", "'#ffffff'", "matTooltip", "Filter", "matTooltipPosition", "above", 1, "col-btn", "cursor", 3, "matMenuTriggerFor", "click"], ["menuFilterTrigger", "matMenuTrigger"], [1, "icon-alignment", "col-icon"], ["class", "red-dot", 4, "ngIf"], [1, "col-btn", "cursor", 3, "click"], [1, "search"], ["class", "ser-date", 4, "ngIf"], ["class", "ser-input ser-sl", 3, "placeholder", 4, "ngIf"], ["type", "text", "placeholder", "Search", "class", "ser-input", 3, "matMenuTriggerFor", "click", 4, "ngIf"], ["type", "text", "placeholder", "Search", "class", "ser-input", 3, "value", "matAutocomplete", "input", 4, "ngIf"], ["class", "search-icon icon-alignment", 4, "ngIf"], ["addSearchField", "matAutocomplete"], [1, "sum-c-hi-d"], ["class", "chip-flex", 4, "ngIf"], [1, "sum-c-sh-i-d"], ["class", "sum-c-sh-i cursor", "matTooltip", "Hide Summarize Count", 3, "click", 4, "ngIf"], ["class", "sum-c-sh-i-v cursor", "matTooltip", "Show Summarize Count", 3, "click", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "transfer-block d-flex", 4, "ngIf"], ["class", "full-height", "style", "display: flex;align-items: center;justify-content: center;height: 55vh;", 4, "ngIf"], [1, "table-data-info-container"], [1, "container-t"], [1, "table-container", "position-r"], ["class", "example-container", 4, "ngIf"], ["style", "display: flex;align-items: center;justify-content: center;margin-top: 90px;", 4, "ngIf"], ["class", "im-1", 3, "click", 4, "ngIf"], ["class", "im-2", 3, "click", 4, "ngIf"], ["class", "im-3", 3, "click", 4, "ngIf"], ["class", "im-4", 3, "click", 4, "ngIf"], ["class", "im-5", 3, "click", 4, "ngIf"], ["class", "r-3 r3a", 3, "click", 4, "ngIf"], ["class", "r-3 r3u", 3, "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "new-btn", "cursor", 3, "disabled", "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "edit-process-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "report-btn", "cursor", 3, "click"], [1, "sum-d"], [1, "sum-d-f"], [1, "sum-a-f"], [1, "sum-a-f-h"], [1, "sum-a-f-i"], [1, "sum-c-in-s"], ["type", "text", "placeholder", "Select Field", 1, "sum-c-in", 3, "matTooltip", "matAutocomplete", "value", "input"], [1, "sum-c-in-i", "cursor"], ["addSumField", "matAutocomplete"], ["class", "sum-c-l-t", 4, "ngIf"], ["class", "sum-c-v-if", 4, "ngIf"], [3, "value", "click"], [1, "sum-c-l-t"], [4, "ngIf"], [1, "sum-c-v-if"], [3, "ngStyle", "class", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], [1, "sum-c-v-s"], [1, "sum-c-v-e", 3, "matTooltip"], [1, "sum-c-v-i"], [1, "sum-c-c"], [1, "sum-c-r", "cursor"], [1, "red-dot"], [1, "ser-date"], [1, "ser-d-f"], ["matInput", "", 2, "width", "0px", 3, "matDatepicker", "placeholder", "click", "dateChange"], [1, "ser-d-i", 3, "click"], ["picker", ""], [1, "ser-input", "ser-sl", 3, "placeholder"], ["type", "text", "placeholder", "Search", 1, "ser-input", 3, "matMenuTriggerFor", "click"], ["menuTrigger", "matMenuTrigger"], ["type", "text", "placeholder", "Search", 1, "ser-input", 3, "value", "matAutocomplete", "input"], [1, "search-icon", "icon-alignment"], [1, "chip-flex"], [1, "chip-close", 3, "click"], ["matTooltip", "Hide Summarize Count", 1, "sum-c-sh-i", "cursor", 3, "click"], ["matTooltip", "Show Summarize Count", 1, "sum-c-sh-i-v", "cursor", 3, "click"], [1, "pagination"], [2, "background", "none", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "transfer-block", "d-flex"], [1, "tr-container", "d-flex"], [1, "mat-ripple", "new-btn", "cursor", 3, "click"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "55vh"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "80px", "width", "80px"], [1, "example-container"], ["mat-table", "", "id", "dashboard-table", "matSort", "", 1, "table-m", 3, "dataSource", "matSortChange"], ["matColumnDef", "select"], ["mat-header-cell", "", "class", "static-lfet-p-h", "style", "color: #FFF; background-color: #475275; font-weight: 500;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "static-lfet-p", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "menuIcon"], ["mat-header-cell", "", "style", "color: #FFF;background-color: #475275;font-weight: 500;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "static-lfet-p-h", 2, "color", "#FFF", "background-color", "#475275", "font-weight", "500"], [1, "select-column-container"], ["color", "primary", 2, "color", "#FFF", 3, "change"], ["mat-cell", "", 1, "static-lfet-p"], [1, "select-column-container", "select-column-container-td"], ["color", "primary", 1, "select-column-list", "select-item", 3, "checked", "change"], ["class", "lanuch-icon", "matTooltip", "Edit", 3, "click", 4, "ngIf"], ["class", "lanuch-icon", "style", "color: #fbbd2c;", "matTooltip", "Remove BookMark", 3, "click", 4, "ngIf"], ["class", "lanuch-icon", "style", "color: #697179;", "matTooltip", "Add BookMark", 3, "click", 4, "ngIf"], ["matTooltip", "Edit", 1, "lanuch-icon", 3, "click"], ["matTooltip", "Remove BookMark", 1, "lanuch-icon", 2, "color", "#fbbd2c", 3, "click"], ["matTooltip", "Add BookMark", 1, "lanuch-icon", 2, "color", "#697179", 3, "click"], [3, "matColumnDef"], ["mat-header-cell", "", "style", "color: #FFF; background-color: #475275;font-weight: 500;", 3, "id", "mat-sort-header", 4, "matHeaderCellDef"], ["mat-cell", "", "tabindex", "-1", "fields", "", 4, "matCellDef"], ["mat-header-cell", "", 2, "color", "#FFF", "background-color", "#475275", "font-weight", "500", 3, "id", "mat-sort-header"], ["mat-cell", "", "tabindex", "-1", "fields", ""], ["mat-cell", ""], [2, "display", "flex", "justify-content", "center"], [1, "sub-create-btn", "sub-create-btn-bg", 3, "click"], ["mat-header-cell", "", 2, "color", "#FFF", "background-color", "#475275", "font-weight", "500"], [1, "more-icon", 3, "matMenuTriggerFor", "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "align-items", "center", "justify-content", "center", "margin-top", "90px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "500.5", "height", "390.334", "viewBox", "0 0 524.5 407.334"], ["id", "Group_12146", "data-name", "Group 12146", "transform", "translate(-538.5 -242)"], ["id", "undraw_noted_pc9f", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 929.967, 334.376)"], ["id", "Path_12085", "data-name", "Path 12085", "d", "M649.3,131.334l38.245,19.228a1.808,1.808,0,0,1,.992,1.738l-2.222,32.913a.9.9,0,0,1-1.3.739L645.9,165.989l2.008-33.853a.962.962,0,0,1,1.392-.8Z", "transform", "translate(-550.965 -131.22)", "fill", "#d0cde1"], ["id", "Path_12086", "data-name", "Path 12086", "d", "M654.852,138.581l37.305,18.756a1.764,1.764,0,0,1,.968,1.695l-2.167,32.1a.874.874,0,0,1-1.266.721l-38.156-19.473,1.959-33.021a.938.938,0,0,1,1.358-.783Z", "transform", "translate(-556.08 -137.796)", "fill", "#3f3d56"], ["id", "Path_12087", "data-name", "Path 12087", "d", "M675.49,165.5l33.816,17a1.6,1.6,0,0,1,.877,1.536l-1.965,29.1a.792.792,0,0,1-1.148.654l-34.587-17.652,1.776-29.933a.85.85,0,0,1,1.231-.71Z", "transform", "translate(-575.083 -162.224)", "fill", "#fff"], ["id", "Path_12088", "data-name", "Path 12088", "d", "M323.373,518.96l38.294,19.285a2.55,2.55,0,0,0,2.3,0l28.328-14.38a1.189,1.189,0,0,0,.18-1.194,2.661,2.661,0,0,0-.209-.516l-3.86-2.03-32.457-16.194-1.939-1.029a3.591,3.591,0,0,0-3.335-.013l-27.31,14.186a1.06,1.06,0,0,0,.012,1.89Z", "transform", "translate(-257.859 -467.995)", "fill", "#d0cde1"], ["id", "Path_12089", "data-name", "Path 12089", "d", "M323.368,669.033l38.294,19.285a2.55,2.55,0,0,0,2.3,0l28.328-14.38a1.189,1.189,0,0,0,.18-1.194l-28.244,14.681a2.464,2.464,0,0,1-2.235.019L322.8,667.916A1.056,1.056,0,0,0,323.368,669.033Z", "transform", "translate(-257.854 -618.069)", "opacity", "0.1"], ["id", "Path_12090", "data-name", "Path 12090", "d", "M510.724,679.128l-12.4-6.267a1.743,1.743,0,0,0-1.607.018l-7.194,3.843a.515.515,0,0,0,.011.913l12.645,6.376a1.432,1.432,0,0,0,1.348-.031l7.223-4.069a.443.443,0,0,0-.023-.784Z", "transform", "translate(-408.864 -622.385)", "opacity", "0.1"], ["id", "Path_12091", "data-name", "Path 12091", "d", "M523.133,538.325l-13.345,7.09a1.086,1.086,0,0,1-1,.01l-37.706-19.068a.641.641,0,0,1,0-1.147l13.032-6.45a1.413,1.413,0,0,1,1.263,0l37.744,19.017a.306.306,0,0,1,.006.543Z", "transform", "translate(-392.066 -482.63)", "opacity", "0.1"], ["id", "Group_12145", "data-name", "Group 12145"], ["id", "undraw_Location_search_re_ttoj", "transform", "translate(538.5 242)"], ["id", "Ellipse_88", "data-name", "Ellipse 88", "cx", "21.37", "cy", "21.37", "r", "21.37", "transform", "translate(277.283 156.434)", "fill", "#e6e6e6"], ["id", "Path_12062", "data-name", "Path 12062", "d", "M708.769,401.694l-22.332-22.332a23.652,23.652,0,1,0-7.1,7.1L701.665,408.8a5.023,5.023,0,0,0,7.1-7.1ZM678.5,378.528a16.915,16.915,0,1,1,4.954-11.96A16.915,16.915,0,0,1,678.5,378.528Z", "transform", "translate(-357.743 -196.428)", "fill", "#3f3d56"], ["id", "Path_12063", "data-name", "Path 12063", "d", "M644.039,306.7c57.111,63.159-108.445,154.18-242.218,154.18S175.5,390.354,159.6,306.7C121.065,103.865,487.962-25.055,401.822,152.52,276.261,411.355,599.063,256.96,644.039,306.7Z", "transform", "translate(-131.132 -68.493)", "fill", "#e6e6e6"], ["id", "Path_12064", "data-name", "Path 12064", "d", "M596.039,334.7c57.111,63.159-108.445,154.18-242.218,154.18S127.5,418.354,111.6,334.7C73.065,131.865,439.962,2.945,353.822,180.52,228.261,439.355,551.063,284.96,596.039,334.7Z", "transform", "translate(-108.756 -81.545)", "fill", "#3f3d56"], ["id", "Path_12065", "data-name", "Path 12065", "d", "M196.578,237.423c-40.075-1.764-71.147-10.409-70.739-19.68.245-5.558,11.586-10.028,31.116-12.262a.534.534,0,1,1,.121,1.061c-18.4,2.1-29.958,6.415-30.171,11.248-.369,8.384,31.558,16.886,69.719,18.566s70.711-3.983,71.081-12.367c.214-4.854-11-10.178-29.254-13.9a.534.534,0,1,1,.213-1.046c19.379,3.945,30.353,9.409,30.107,14.988C268.365,233.308,236.653,239.188,196.578,237.423Z", "transform", "translate(-116.718 -132.348)", "fill", "#329cfd"], ["id", "Path_12066", "data-name", "Path 12066", "d", "M191.679,268.227a41.1,41.1,0,0,0,71.021,2.948,647.011,647.011,0,0,1-71.021-2.948Z", "transform", "translate(-147.411 -161.599)", "fill", "#329cfd"], ["id", "Path_12067", "data-name", "Path 12067", "d", "M263.075,205.468a41.1,41.1,0,1,0-78.876-3.046,305.486,305.486,0,0,0,78.876,3.046Z", "transform", "translate(-143.352 -107.123)", "fill", "#329cfd"], ["id", "Ellipse_89", "data-name", "Ellipse 89", "cx", "4.805", "cy", "4.805", "r", "4.805", "transform", "translate(85.327 61.18)", "fill", "#fff"], ["id", "Ellipse_90", "data-name", "Ellipse 90", "cx", "8.008", "cy", "8.008", "r", "8.008", "transform", "translate(57.396 73.453)", "fill", "#fff"], ["id", "Ellipse_91", "data-name", "Ellipse 91", "cx", "5.338", "cy", "5.338", "r", "5.338", "transform", "translate(180.924 70.948)", "fill", "#329cfd"], ["id", "Ellipse_92", "data-name", "Ellipse 92", "cx", "3.203", "cy", "3.203", "r", "3.203", "transform", "translate(62.41 238.576)", "fill", "#e6e6e6"], ["id", "Ellipse_93", "data-name", "Ellipse 93", "cx", "3.203", "cy", "3.203", "r", "3.203", "transform", "translate(286.626 348.549)", "fill", "#e6e6e6"], ["id", "Ellipse_94", "data-name", "Ellipse 94", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(79.493 179.853)", "fill", "#e6e6e6"], ["id", "Ellipse_95", "data-name", "Ellipse 95", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(211.887 299.435)", "fill", "#e6e6e6"], ["id", "Ellipse_96", "data-name", "Ellipse 96", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(452.653 283.953)", "fill", "#e6e6e6"], ["id", "Ellipse_97", "data-name", "Ellipse 97", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(377.38 331.466)", "fill", "#e6e6e6"], ["id", "Ellipse_98", "data-name", "Ellipse 98", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(298.905 273.81)", "fill", "#e6e6e6"], ["id", "Ellipse_99", "data-name", "Ellipse 99", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(197.473 115.791)", "fill", "#e6e6e6"], ["id", "Ellipse_100", "data-name", "Ellipse 100", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(210.286 36.781)", "fill", "#e6e6e6"], ["id", "Ellipse_101", "data-name", "Ellipse 101", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(202.812 369.369)", "fill", "#e6e6e6"], ["id", "Ellipse_102", "data-name", "Ellipse 102", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(123.802 335.736)", "fill", "#e6e6e6"], ["id", "Ellipse_103", "data-name", "Ellipse 103", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(374.177 278.081)", "fill", "#e6e6e6"], ["id", "Ellipse_104", "data-name", "Ellipse 104", "cx", "4.805", "cy", "4.805", "r", "4.805", "transform", "translate(74.405 115.204)", "fill", "#fff"], ["id", "Path_12069", "data-name", "Path 12069", "d", "M38.144,3a5.621,5.621,0,0,0-.342.816L12.293,10.907l-4.6-4.5L0,12.459l7.364,8.755a4.271,4.271,0,0,0,4.993,1.158L39.912,10.208A5.6,5.6,0,1,0,38.144,3Z", "transform", "translate(411.173 159.211) rotate(47)", "fill", "#ffb8b8"], ["id", "Path_12070", "data-name", "Path 12070", "d", "M857.612,389.293l-9.575,7.452a2.4,2.4,0,0,1-3.567-.714L838.52,385.5a6.672,6.672,0,0,1,10.554-8.165l8.722,8.325a2.4,2.4,0,0,1-.184,3.633Z", "transform", "translate(-448.286 -211.253)", "fill", "#329cfd"], ["id", "Path_12072", "data-name", "Path 12072", "d", "M0,11.251l.035,1.7c0,.176.008-.032.01-.464L.065,8.209.071,6.728.086,2.862c0-.433,0-.926,0-1.1L.071,1.224.047.062C.043-.113.039.1.037.529L.023,4.267.007,8.522,0,10.147c0,.433,0,.926,0,1.1Z", "transform", "matrix(-0.141, -0.888, 0.724, -0.394, 258.247, 51.628)", "fill", "#e6e6e6"], ["id", "Path_12073", "data-name", "Path 12073", "d", "M773.576,518.4h6.545l3.114-25.245h-9.66Z", "transform", "translate(-360.603 -229.884)", "fill", "#ffb8b8"], ["id", "Path_12074", "data-name", "Path 12074", "d", "M879.207,604.933H892.1a8.214,8.214,0,0,1,8.214,8.214v.267h-21.1Z", "transform", "translate(-467.903 -318.555)", "fill", "#2f2e41"], ["id", "Path_12075", "data-name", "Path 12075", "d", "M805.576,515.4h6.545l3.114-25.245h-9.66Z", "transform", "translate(-375.52 -228.486)", "fill", "#ffb8b8"], ["id", "Path_12076", "data-name", "Path 12076", "d", "M911.207,601.932H924.1a8.214,8.214,0,0,1,8.214,8.214v.267h-21.1Z", "transform", "translate(-482.82 -317.156)", "fill", "#2f2e41"], ["id", "Path_12077", "data-name", "Path 12077", "d", "M826.215,476.617a21.039,21.039,0,0,0,19.7,14.313l.331.005c3.379.1,7.346-.993,11.237-2.557a95.712,95.712,0,0,0,17.03-9.4l-3.32,31.919-1.345,12.94a2.41,2.41,0,0,0,2.392,2.653h8.291a2.4,2.4,0,0,0,2.327-1.794l13.688-52.13a10.16,10.16,0,0,0-10.522-12.722l-28.433,1.949,1.986-7.944L834.2,452.161l-.075.053c-.609.443-1.2.908-1.767,1.393a21.5,21.5,0,0,0-3.732,4.089A20.547,20.547,0,0,0,826.215,476.617Z", "transform", "translate(-442.6 -247.34)", "fill", "#2f2e41"], ["id", "Path_12078", "data-name", "Path 12078", "d", "M826.215,481.451a21.039,21.039,0,0,0,19.7,14.313,104.724,104.724,0,0,0,12.049-7.148l-.48,4.6L853.3,533.474a2.41,2.41,0,0,0,2.392,2.653h8.291a2.4,2.4,0,0,0,2.327-1.794l4.885-18.6L880,482.2a10.16,10.16,0,0,0-10.522-12.722L841.04,471.43l1.986-7.944-14.4-.956A20.547,20.547,0,0,0,826.215,481.451Z", "transform", "translate(-442.6 -252.174)", "fill", "#2f2e41"], ["id", "Path_12079", "data-name", "Path 12079", "d", "M834.221,411.18l-.191-.023L829.6,389.384c-.038-.189-3.658-18.969,7.44-28.787l.193-1.344a2.4,2.4,0,0,1,3.089-1.953l10.455,3.243a2.4,2.4,0,0,1,1.612,2.905l-1.016,3.866c1.409,1.655,18,21.627,12.22,37.015l-2.588,10.117Z", "transform", "translate(-444.503 -203.07)", "fill", "#329cfd"], ["id", "Path_12080", "data-name", "Path 12080", "d", "M887.215,415.535a5.622,5.622,0,0,0-.71.529l-25.57-6.864-1.672-6.211-9.7,1.3,1.891,11.283a4.271,4.271,0,0,0,3.711,3.535l29.913,3.534a5.6,5.6,0,1,0,2.14-7.1Z", "transform", "matrix(0.951, 0.309, -0.309, 0.951, -287.838, -468.768)", "fill", "#ffb8b8"], ["id", "Path_12081", "data-name", "Path 12081", "d", "M856.149,396.555l-12.033,1.55a2.4,2.4,0,0,1-2.709-2.428l.23-12.094a6.672,6.672,0,1,1,13.239-1.666l3.279,11.6a2.4,2.4,0,0,1-2.005,3.035Z", "transform", "translate(-450.282 -211.874)", "fill", "#329cfd"], ["id", "Ellipse_107", "data-name", "Ellipse 107", "cx", "13.112", "cy", "13.112", "r", "13.112", "transform", "translate(389.368 125.05)", "fill", "#ffb8b8"], ["id", "Path_12082", "data-name", "Path 12082", "d", "M836.759,312.421l-1.642-2.989a35.815,35.815,0,0,0,2.383,23.155l-21.318-9.93.2-3.523-2.109,2.394-3.031-1.67-.4-2.285-2.288.567,8.351-15.155c8.105-14.421,19.889-8.915,19.889-8.915,18.746-.891,16.457,17.6,16.457,17.6Z", "transform", "translate(-434.97 -173.164)", "fill", "#2f2e41"], ["id", "Ellipse_108", "data-name", "Ellipse 108", "cx", "6.502", "cy", "25.358", "rx", "6.502", "ry", "25.358", "transform", "matrix(0.842, -0.54, 0.54, 0.842, 219.686, 197.78)", "fill", "#3f3d56"], ["id", "Path_12092", "data-name", "Path 12092", "d", "M973.834,225.9c2.817,4.11,2.194,9.434,2.194,9.434s-5.19-1.339-8.007-5.449-2.194-9.434-2.194-9.434S971.017,221.788,973.834,225.9Z", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 153.403, -79.249)", "fill", "#2f2e41"], ["id", "Path_12093", "data-name", "Path 12093", "d", "M1030.575,197.364c.33,4.972,4.113,8.769,4.113,8.769s3.249-4.263,2.92-9.235-4.113-8.769-4.113-8.769S1030.246,192.393,1030.575,197.364Z", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 89.049, -66.14)", "fill", "#329cfd"], [1, "im-1", 3, "click"], ["src", "../../../assets/img/ExportTableActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-2", 3, "click"], ["src", "../../../assets/img/BookmarkActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-3", 3, "click"], ["src", "../../../assets/img/NotesActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-4", 3, "click"], ["src", "../../../assets/img/TaskActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-5", 3, "click"], ["src", "../../../assets/img/MailActive.svg", 1, "im-active", "im-b", "cursor"], ["src", "../../../assets/img/ExportTable.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Bookmark.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Notes.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Tasks.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Mail.svg", 1, "im-unactive", "im-b", "cursor"], [1, "r-3", "r3a", 3, "click"], [1, "r-2", "r2a"], [1, "r-1", "r1a"], [1, "r-3", "r3u", 3, "click"], [1, "r-2", "r2u"], [1, "r-1", "r1u"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "85px", "width", "85px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "10px", "box-shadow", "0 0 0 transparent, 0 2px 6px rgb(0 0 0 / 7%)"], [1, "cursor", 3, "click"], [2, "display", "flex", "height", "705px"], [2, "width", "330px", "padding", "10px", "border-right", "3px solid #70707057", "height", "685px"], [2, "overflow", "scroll", "max-height", "680px"], ["cdkDropList", "", 3, "click"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [2, "width", "327px", "padding", "10px", "height", "685px"], ["cdkDropList", "", 3, "cdkDropListDropped", "click"], [1, "col-order-footer"], [1, "col-cancel-btn", 3, "click"], [1, "col-apply-btn", 3, "click"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "check-box-g"], [3, "change"], [1, "text-wrap"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "18px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "example-custom-placeholder"], [3, "checked", "change"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "ngModel", "input", "focus", "ngModelChange"], ["addSubField", "matAutocomplete"], [1, "filter-max-h"], ["class", "filter-row-c", 4, "ngIf"], [1, "filter-row-c"], [1, "filter-row-g"], [1, "f-list-icon"], ["class", "filter-add-input", 4, "ngIf"], ["class", "filter-add-input", "style", "background-color: #fff;\n              border: 1px solid var(--pinkish-grey);\n              border-radius: 4px;\n              height: 25px;padding: 0px 6px;", 4, "ngIf"], [1, "filter-value-f"], ["class", "filter-value-c-f", 4, "ngFor", "ngForOf"], [1, "select-p", 3, "placeholder"], ["select", ""], [1, "f-o-a-g"], [1, "filter-delete-icon", 3, "click"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "input", "focus"], [3, "optionSelected"], ["addValue", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "f-mat-s"], ["type", "number", 1, "filter-field-input", 3, "matAutocomplete", "input"], [1, "filter-add-input", 2, "background-color", "#fff", "border", "1px solid var(--pinkish-grey)", "border-radius", "4px", "height", "25px", "padding", "0px 6px"], ["matInput", "", "placeholder", "Choose a date", 1, "date-filter", 3, "matDatepicker", "dateChange", "click"], [1, "date-icon-d", "cursor", 3, "click"], ["type", "datetime-local", 1, "filter-field-input", 3, "change"], ["type", "time", 1, "filter-field-input", 3, "change"], [1, "filter-value-c-f"], [1, "filter-v-v-icon", 3, "click"], [1, "mail-atom"], [3, "dataTableInfo", "isAddField", "airliftDomains", "header", "isFrom", "fileList", "closeMail"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "10px", "padding", "12px 24px", "align-items", "center", "box-shadow", "0 1px 6px 0 rgb(0 0 0 / 10%)"], [2, "font-size", "16px", "color", "var(--dark)"], [2, "cursor", "pointer", 3, "click"], [2, "display", "grid", "padding", "12px 24px"], ["class", "sub-table", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "add-btn", 3, "click"], [1, "sub-table"], [1, "sub-t-h"], [1, "sub-t-h-n"], ["class", "sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "sub-r", 4, "ngFor", "ngForOf"], [1, "sub-t-h-t"], [1, "sub-r"], [1, "sub-t-r"], [1, "sub-t-r-n"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "color", "var(--blue)", "cursor", "pointer", "font-size", "18px", "width", "18px", "height", "18px", 3, "click"], ["class", "sub-t-r-f", 4, "ngFor", "ngForOf"], [1, "sub-t-r-f"], ["class", "sub-v-ta", 4, "ngIf"], ["class", "sub-v-ta position-r", 4, "ngIf"], ["class", "mat-multi-select-chip-subb", 4, "ngIf"], [1, "sub-v-ta"], [1, "sub-input", "sub-input-off"], [1, "sub-v-ta", "position-r"], [1, "material-icons", "view-pass", "view-pass-sub", "cursor", 3, "click"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value"], ["color", "primary", 3, "checked"], [1, "mat-multi-select-chip-subb"], [1, "mat-chip-flex"], ["class", "mat-chip-div", 4, "ngFor", "ngForOf"], [1, "mat-chip-div"], [1, "matchip-close"], ["style", "overflow: hidden;\n  display: grid;\n  max-height: 560px;", 4, "ngIf"], [2, "overflow", "hidden", "display", "grid", "max-height", "560px"], [1, "header-r"], [1, "arrow-div", 3, "click"], [1, "arrow-icon"], [1, "header-text", "animate__animated", "animate__bounce"], [2, "overflow", "auto", "max-height", "510px"], [1, "sub-t-e-g"], ["class", "sub-field-h", 4, "ngIf"], ["class", "sub-v-a", 4, "ngIf"], ["class", "sub-v-a position-r", 4, "ngIf"], ["class", "sub-v-a sub-text-a", 4, "ngIf"], ["class", "mat-multi-select-chip-sub", 4, "ngIf"], [1, "sub-field-h"], [1, "sub-v-a"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "change"], [1, "sub-v-a", "position-r"], [1, "sub-input", "sub-input-off", 3, "type", "value", "placeholder", "change"], [2, "width", "92%"], ["matInput", "", 1, "sub-input", "sub-input-off-d", 2, "width", "0px", 3, "matDatepicker", "placeholder", "value", "click", "dateChange"], [1, "date-icon", 3, "click"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "value", "change"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "value", "change"], [1, "sub-v-a", "sub-text-a"], ["type", "text", "row", "3", 1, "sub-input", "sub-input-off", 2, "width", "100%", 3, "placeholder", "value", "change"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "change"], [1, "sub-input", "sub-input-off", 2, "max-width", "100%", 3, "value", "placeholder", "valueChange", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "value", "input"], ["autosetect", "matAutocomplete"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "value", "disabled", "input"], [1, "mat-multi-select-chip-sub"], ["class", "mat-chip-div", 3, "click", 4, "ngFor", "ngForOf"], ["type", "text", 1, "enter-key-chip", 3, "placeholder", "keyup.enter"], [1, "mat-chip-div", 3, "click"], [3, "placeholder"], ["type", "text", 1, "enter-key-chip", 3, "matAutocomplete", "placeholder", "focus", "input"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "man-f-c", 4, "ngIf"], [3, "value", "onSelectionChange"], [1, "man-f-c"], [2, "padding", "0px 30px 30px 30px"], [1, "inside-sub-h"], [1, "inside-sub-t"], [1, "inside-sub-t-h"], [1, "inside-sub-t-h-n", "inside-sub-ttn"], ["class", "inside-sub-t-h-t inside-sub-tti", 4, "ngFor", "ngForOf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "on", "", 1, "add-btn", 3, "click"], [1, "inside-sub-t-h-t", "inside-sub-tti"], ["class", " sub-v-a", 4, "ngIf"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], [1, "sub-input", "sub-input-off", 3, "type", "value", "valueChange", "focusout"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "value", "click", "valueChange", "dateChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "text", 1, "sub-input", "sub-input-off"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "valueChange", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], [1, "sub-input", "sub-input-off", 2, "max-width", "100%", 3, "placeholder", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "value", "input"]], template: function TableViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableViewComponent_div_0_Template, 69, 39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_6_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_input_click_9_listener($event) { return $event.stopPropagation(); })("focus", function TableViewComponent_Template_input_focus_9_listener() { return ctx.filterAddField = []; })("input", function TableViewComponent_Template_input_input_9_listener($event) { return ctx.getSumFields($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_mat_option_12_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_ng_template_13_Template, 21, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select the field, for searching on it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableViewComponent_span_20_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View/Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_27_listener() { return ctx.deleteRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_33_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_mat_icon_click_37_listener() { return ctx.closeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_41_listener() { ctx.filterSelectSubTableTemp = ""; return ctx.filterSelectSub = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Main Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_43_listener() { ctx.filterSelectSub = 1; return ctx.filterSelectSubTableTemp = ctx.filterSelectSubTable; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sub Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableViewComponent_div_45_Template, 10, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Add Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_Template_input_input_50_listener($event) { return ctx.getAddFields($event.target.value); })("ngModelChange", function TableViewComponent_Template_input_ngModelChange_50_listener($event) { return ctx.filterFieldSelect = $event; })("focus", function TableViewComponent_Template_input_focus_50_listener() { return ctx.filterAddField = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-autocomplete", null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TableViewComponent_mat_option_55_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TableViewComponent_div_56_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_58_listener() { ctx.deleteFilter("reset"); ctx.filterSelectSubTable = ""; return ctx.filterSelectSubTableTemp = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_60_listener() { return ctx.deleteFilter("apply"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TableViewComponent_div_62_Template, 2, 6, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TableViewComponent_ng_template_63_Template, 13, 2, "ng-template", 4, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_ng_template_click_63_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TableViewComponent_ng_template_65_Template, 1, 1, "ng-template", 4, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_ng_template_click_65_listener($event) { return $event.stopPropagation(); });
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.tableInfo && ctx.subload == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metaDataTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.filterSelectSubTableTemp == "" && ctx.filterSelectSub == 0 ? "f-s-b-a" : "f-s-b-u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.filterSelectSubTableTemp == "" && ctx.filterSelectSub == 0 ? "f-s-b-u" : "f-s-b-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterSelectSubTableTemp != "" || ctx.filterSelectSub == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r13)("ngModel", ctx.filterFieldSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtercount.length && !!ctx.filterValueTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendMailAtom);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRipple"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__["SendMailComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  \n  margin-bottom: 0;\n  box-sizing: border-box;\n  height: auto;\n}\n\n.header-table-view[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px calc(100% - 381px) 321px;\n  grid-gap: 10px;\n  \n  align-items: center;\n  \n  padding: 25px 20px 25px;\n  \n  background-color: var(--silver);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.sum-radio-i-s[_ngcontent-%COMP%] {\n  width: 8px;\n  display: grid;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #56b27b;\n}\n\n.sum-radio-i[_ngcontent-%COMP%] {\n  width: 8px;\n  display: grid;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.sum-d[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 99%;\n  margin: 15px 0px;\n  padding: 0px 20px 0px 20px;\n}\n\n.sum-d-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sum-a-f[_ngcontent-%COMP%] {\n  display: grid;\n  width: 200px;\n  height: 78px;\n  border-radius: 5px;\n  margin-right: 20px;\n  border: solid 1px #e2e2e263;\n  margin-bottom: 3px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n}\n\n.sum-a-f-h[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #e2e2e2;\n  display: flex;\n  padding: 5px;\n  color: #253542d1;\n  align-items: center;\n}\n\n.sum-a-f-i[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  margin-right: 5px;\n}\n\n.sum-c-in-s[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 9px;\n  align-items: center;\n  justify-content: center;\n}\n\n.sum-c-in[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.sum-c-in-i[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: var(--warm-grey);\n}\n\n.sum-c-l-t[_ngcontent-%COMP%] {\n  display: flex;\n  width: 0px;\n  display: none;\n}\n\n.sum-c-v-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  min-width: 130px;\n  max-width: 130px;\n  justify-content: space-between;\n  padding: 0px 10px;\n  font-size: 11px;\n  font-family: 'Roboto';\n}\n\n.sum-c-r[_ngcontent-%COMP%] {\n  width: 10px;\n  display: grid;\n  height: 10px;\n  padding: 2px;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #cccccc;\n  border-radius: 50%;\n}\n\n.sum-c-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 10px;\n  font-size: 16px;\n  background-color: #fff;\n}\n\n.sum-c-v-f[_ngcontent-%COMP%] {\n  display: grid;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n  margin-right: 20px;\n  grid-template-rows: 42px 36px;\n}\n\n.ser-date[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--pinkish-grey-two);\n  border-radius: 2px;\n  padding: 2px 8px;\n  align-items: center;\n  width: 100%;\n}\n\n.ser-d-f[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--warm-grey);\n  font-size: 13px;\n}\n\n.ser-sl[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n  border-radius: 4px;\n  display: grid;\n  align-items: center;\n}\n\n.ser-d-i[_ngcontent-%COMP%] {\n  color: var(--greyish-two);\n  font-size: 18px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  height: 18px;\n  width: 18px;\n}\n\n.sum-c-v-e[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  max-width: 200px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  font-size: 12px;\n}\n\n.sum-c-v-i[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5px;\n}\n\n.sum-c-v-if[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  display: flex;\n  padding-bottom: 10px;\n  overflow: auto;\n  width: calc( 100% - 220px);\n}\n\n.sum-c-hi-d[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n\n.sum-c-sh-i-d[_ngcontent-%COMP%] {\n  \n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n}\n\n.sum-c-sh-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 20px;\n  width: 20px;\n  display: grid;\n  align-items: center;\n  background-color: #5eb27c;\n  color: #fff;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n}\n\n.sum-c-sh-i-v[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 20px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n  width: 20px;\n  display: grid;\n  align-items: center;\n  background-color: #3a95f8;\n  color: #fff;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.sum-dd-h[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n.action-btn-m[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n  .mat-menu-panel {\n  max-width: 100% !important;\n  max-height: 75vh !important;\n}\n\n.sub-create-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  color: var(--white);\n  border-radius: 2px;\n  padding: 3px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.new-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0px;\n  background-image: linear-gradient( 30deg, rgb(47, 131, 241) -5%, rgb(71, 168, 255) 128%);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.new-btn[_ngcontent-%COMP%]:hover, .edit-process-btn[_ngcontent-%COMP%]:hover, .report-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  transition: all 0.3s ease;\n}\n\n.edit-process-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.f-size[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.h-icon[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 24px;\n  height: 35px !important;\n  width: 35px !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  font-size: 12px;\n}\n\n.date-filter[_ngcontent-%COMP%]:hover {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4a4949f0;\n}\n\n.process-icon[_ngcontent-%COMP%] {\n  display: grid;\n  background-image: linear-gradient( 30deg, rgb(47, 131, 241) -5%, rgb(71, 168, 255) 128%);\n  border-radius: 2px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.utils[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 40px 420px calc(100% - 975px) 415px;\n  grid-gap: 15px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px;\n}\n\n.filter-container[_ngcontent-%COMP%] {\n  min-height: 225px;\n  position: relative;\n  padding-bottom: 45px;\n}\n\n.filter-max-h[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: scroll;\n}\n\n.filter-header[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  padding: 2px 10px 10px 15px;\n  color: var(--warm-grey);\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.f-close-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.filter-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  grid-gap: 15px;\n}\n\n.filter-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--warm-grey);\n}\n\n.filter-field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid var(--pinkish-grey);\n  padding: 2px 5px;\n}\n\n.filter-add-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  width: 640px;\n}\n\n.filter-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-top: 1px solid var(--silver);\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  width: 640px;\n  justify-content: flex-end;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--greyish-two);\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--white);\n  cursor: pointer;\n}\n\n.filter-row-c[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 70px;\n  max-height: 200px;\n  grid-gap: 15px;\n}\n\n.filter-value-f[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.filter-value-c-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid var(--pinkish-grey-two);\n  border-radius: 2px;\n  margin-right: 10px;\n  margin-top: 10px;\n  background-color: var(--silver);\n  color: var(--warm-grey);\n  font-size: 12px;\n  align-items: center;\n  padding: 2px 2px;\n}\n\n.filter-v-v-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 16px;\n  height: 18px !important;\n  width: 18px !important;\n  align-items: center;\n  cursor: pointer;\n  justify-content: right;\n}\n\n.filter-row-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 250px 150px 180px;\n  grid-gap: 10px;\n  align-items: flex-start;\n}\n\n.f-list-icon[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  margin-top: 24px;\n}\n\n.filter-delete-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--warm-grey);\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n\n.f-or-and-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--pinkish-grey-three);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.f-or-and-btn-c[_ngcontent-%COMP%] {\n  background-color: var(--pale-blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.select-p[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid var(--pinkish-grey);\n  padding: 2px 5px;\n  border-radius: 4px;\n  align-items: center;\n  display: grid;\n  height: 24px;\n}\n\n.f-o-a-g[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: grid;\n  align-items: center;\n  grid-gap: 10px;\n  grid-auto-flow: column;\n}\n\n.filter-add-input[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 2px;\n  align-items: center;\n  \n  color: var(--warm-grey);\n  position: relative;\n}\n\n.filter-condition[_ngcontent-%COMP%] {\n  border: 1px solid var(--pinkish-grey);\n  padding: 0px 2px 2px 6px;\n  height: 24px;\n  border-radius: 2px;\n  display: grid;\n  align-items: center;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  height: 345px;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 10px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px !important;\n  width: 20px !important;\n  color: var(--warm-grey);\n  position: absolute;\n  right: 14px;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-right: 4px;\n  padding-left: 4px;\n  border-radius: 2px;\n}\n\n.search-select-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  padding: 2px 21px 0px 12px;\n  color: red;\n}\n\n.chip-close[_ngcontent-%COMP%] {\n  color: var(--warm-grey) !important;\n  font-size: 18px;\n  height: 18px !important;\n  width: 18px !important;\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n}\n\n.chip-flex[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--pinkish-grey-two);\n  width: -webkit-max-content;\n  width: max-content;\n  font-size: 12px;\n  padding: 2px 10px;\n  color: var(--black);\n  align-items: center;\n  border-radius: 10px;\n}\n\n.ser-input[_ngcontent-%COMP%] {\n  height: 28px !important;\n  border: 1px solid var(--greyish);\n  padding: 2px 10px;\n  color: var(--warm-grey);\n  font-size: 13px;\n  font-family: 'Roboto';\n}\n\n.col-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #d8d8d8;\n  border-radius: 2px;\n  height: 30px !important;\n}\n\n.col-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--warm-grey);\n}\n\n.container-t[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  min-width: 128vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-spacing: 0px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-radius: 3px;\n  min-height: 10%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  \n  color: #797979;\n  height: 44px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 44px !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  font-weight: 400;\n  color: rgba(47, 58, 87, .95);\n  border-bottom-width: 0.5px !important;\n  max-width: 210px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  border-bottom: 1px solid #f2efef;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\n.select-column-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 4px;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  padding-left: 10px;\n  min-width: 70px;\n  max-width: 70px;\n}\n\n.select-column-container-td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.select-column-list[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.table-data-info-container[_ngcontent-%COMP%] {\n  height: 52vh;\n  overflow: auto;\n  padding: 0px 20px 20px 20px;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: solid 1px #ccc;\n  color: var(--black);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  \n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  display: grid;\n  position: absolute;\n  right: 5px;\n  margin-left: 10px;\n  cursor: move;\n}\n\n.check-box-g[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  max-width: 210px;\n  margin-right: 25px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: var(--blue) !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n}\n\n.col-order-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid var(--pinkish-grey);\n  position: sticky;\n  bottom: 0;\n  height: 49px;\n  background: #fff;\n  align-items: center;\n}\n\n.col-cancel-btn[_ngcontent-%COMP%] {\n  background-color: #99999936;\n  color: var(--black);\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  padding: 8px 14px;\n  margin-right: 12px;\n}\n\n.col-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  color: var(--white);\n  padding: 8px 14px;\n  margin-right: 12px;\n}\n\n.lanuch-icon[_ngcontent-%COMP%] {\n  color: var(--blue);\n  cursor: pointer;\n  font-size: 22px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: none;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  \n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover, .col-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.3s;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 50%;\n  font-size: 20px;\n  color: var(--warm-grey);\n  display: grid;\n  width: 30px !important;\n  height: 30px !important;\n  align-items: center;\n  justify-content: center;\n}\n\n.more-icon[_ngcontent-%COMP%]:hover {\n  background-color: #eceeefad;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: var(--white);\n  border: 0px;\n  color: var(--warm-grey);\n  width: 100%;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--silver);\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: grid;\n  margin-right: 4px;\n  align-items: center;\n  justify-content: center;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: var(--error);\n  position: absolute;\n  border-radius: 50%;\n  right: -2px;\n  top: -6px;\n}\n\n.f-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  \n  background: var(--silver);\n}\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #FFF\n}\n\ntr[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\nth[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.r-1[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-2[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-3[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-4[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #ffffff;\n  width: 50px;\n  position: absolute;\n  right: 35px;\n  bottom: 60px;\n  border-radius: 50%;\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r1a[_ngcontent-%COMP%] {\n  background-color: #e8eaee;\n}\n\n.r2a[_ngcontent-%COMP%] {\n  background-color: #cfd3dc;\n}\n\n.r3a[_ngcontent-%COMP%] {\n  background-color: #545f75;\n}\n\n.r1u[_ngcontent-%COMP%] {\n  background-color: #f7f7f9;\n}\n\n.r2u[_ngcontent-%COMP%] {\n  background-color: #e8ebf1;\n}\n\n.r3u[_ngcontent-%COMP%] {\n  background-color: #545f757a;\n}\n\n.r4u[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.im-5[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -40px;\n}\n\n.im-4[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -26px;\n  right: 52px;\n}\n\n.im-3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 68px;\n}\n\n.im-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 52px;\n  right: 52px;\n}\n\n.im-1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n}\n\n.im-b[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #545f75;\n  border-radius: 50%;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 16px;\n  width: 16px;\n}\n\n.im-active[_ngcontent-%COMP%] {\n  background-color: #545f75;\n}\n\n.im-unactive[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.f-s-b-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n}\n\n.f-mat-s[_ngcontent-%COMP%] {\n  width: 95%;\n  background-color: #fff;\n  border: 1px solid var(--pinkish-grey);\n  padding: 2px 5px;\n  height: 23px;\n  display: grid;\n  align-items: center;\n  border-radius: 4px;\n}\n\n.f-s-b-a[_ngcontent-%COMP%] {\n  padding: 2px 5px;\n  border: 1px solid var(--blue);\n  cursor: pointer;\n  background-color: var(--blue);\n  color: var(--white);\n}\n\n.f-s-b-u[_ngcontent-%COMP%] {\n  padding: 2px 5px;\n  border: 1px solid var(--pinkish-grey-two);\n  cursor: pointer;\n  background-color: var(--white);\n}\n\n  .mat-sort-header-arrow {\n  color: #fff;\n}\n\n  .mat-sort-header-content {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n}\n\n\n\n\n\n  .mat-progress-bar-fill::after {\n  background-color: #3f9cfa !important;\n}\n\n  .mat-progress-bar {\n  height: 5px !important;\n}\n\n  .mat-checkbox-frame {\n  border-color: rgb(196 196 196 / 90%);\n}\n\n.bot-50[_ngcontent-%COMP%] {\n  bottom: 50px;\n}\n\n.transfer-block[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.tr-container[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 30px;\n  justify-content: flex-end;\n  margin-right: 50px;\n  margin-bottom: 5px;\n}\n\n.sub-r[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFF !important;\n}\n\n.sub-r[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eceeef !important;\n}\n\n.sub-input[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: rgba(47, 58, 87, .95);\n  max-width: -webkit-max-content;\n  max-width: max-content;\n  font-size: 12px;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sub-input[_ngcontent-%COMP%]:focus {\n  \n  border: none !important;\n}\n\n.sub-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border: none !important;\n  box-shadow: none !important;\n  background-color: none !important;\n}\n\n.sub-input-off[_ngcontent-%COMP%] {\n  \n  border: none !important;\n}\n\n.sub-input-off-d[_ngcontent-%COMP%] {\n  \n  border: none !important;\n}\n\n.sub-table[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  overflow: overlay;\n  width: 100%;\n}\n\n.sub-t-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #f2f2f2;\n  background-color: var(--dodger-blue);\n}\n\n.sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  display: grid;\n  padding: 6px 10px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: flex-start;\n  color: var(--white);\n  font-size: 14px;\n  font-weight: 500;\n  height: 30px;\n  align-items: center;\n}\n\n.sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  padding: 6px 2px;\n  justify-content: center;\n  color: var(--white);\n  font-size: 14px;\n  font-weight: 500;\n  min-width: 50px;\n  align-items: center;\n  display: flex;\n  height: 30px;\n  align-items: center;\n}\n\n.sub-t-r[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #f2f2f2;\n}\n\n.sub-t-r-f[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  display: grid;\n  padding: 6px 8px;\n  width: 100%;\n}\n\n.sub-t-r-n[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  padding: 6px 2px;\n  min-width: 50px;\n  color: var(--warm-grey);\n  align-items: center;\n  justify-content: center;\n  grid-gap: 10px;\n  display: flex;\n}\n\n.inside-sub-tti[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  color: var(--white);\n  font-size: 14px;\n  font-weight: 500;\n  height: 30px;\n  align-items: center;\n}\n\n.inside-sub-ttn[_ngcontent-%COMP%] {\n  padding: 6px 2px;\n  justify-content: center;\n  min-width: 50px;\n  display: flex;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  border: 0px;\n  color: var(--white);\n  background-color: var(--blue);\n  margin-top: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n\n.sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.sub-v-ta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 26px;\n  padding: 2px 8px;\n  align-items: center;\n  justify-content: flex-start;\n  \n  \n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.sub-text-a[_ngcontent-%COMP%] {\n  height: 36px !important;\n}\n\n.sub-v-a[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 24px;\n  padding: 2px 8px;\n  align-items: center;\n  border: solid 1px #cacaca94;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.sub-v-a[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.inside-sub-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n\n.col-ser-in[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--warm-grey);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n\n.inside-sub-t[_ngcontent-%COMP%] {\n  \n  display: grid;\n  border-top: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  overflow: overlay;\n  width: 100%;\n}\n\n.inside-sub-t-h[_ngcontent-%COMP%] {\n  \n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #f2f2f2;\n  background-color: var(--dodger-blue);\n}\n\n.inside-sub-t-h-n[_ngcontent-%COMP%] {\n  \n  border-left: 1px solid #f2f2f2;\n  color: var(--white);\n  font-size: 14px;\n  font-weight: 500;\n  height: 30px;\n  align-items: center;\n}\n\n.inside-sub-t-h-t[_ngcontent-%COMP%] {\n  \n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n}\n\n.inside-sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.header-r[_ngcontent-%COMP%] {\n  z-index: 999;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 50px calc( 100% - 50px);\n  align-items: center;\n  height: 44.5px;\n  margin: 0 0 0.5px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);\n  opacity: 0.92;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  padding: 7px 5px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--dark);\n  letter-spacing: 0.5px;\n}\n\n.arrow-div[_ngcontent-%COMP%] {\n  width: 51.5px;\n  height: 44.5px;\n  margin: 0 14.3px 0 0;\n  padding: 0px 6px;\n  background-color: #12202594;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.arrow-icon[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  color: var(--white);\n}\n\n.sub-t-e-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 285px 285px 285px 285px;\n  grid-gap: 25px;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 0px;\n}\n\n.sub-field-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: flex-end;\n  color: rgba(47, 58, 87, .95);\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.matchip-close[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: grid !important;\n  align-items: center;\n  justify-content: center;\n  height: 16px !important;\n  width: 16px !important;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n.mat-chip-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  height: 16px;\n  padding: 4px 4px;\n  background-color: var(--pinkish-grey-two);\n  border-radius: 2px;\n  color: var(--black);\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.mat-chip-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-multi-select-chip[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 100%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.mat-multi-select-chip-sub[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 92%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.mat-multi-select-chip-subb[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 0px 8px;\n  display: grid;\n  width: 92%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.enter-key-chip[_ngcontent-%COMP%] {\n  min-height: 20px !important;\n  border: none !important;\n}\n\n.enter-key-chip[_ngcontent-%COMP%]:hover {\n  border: none !important;\n}\n\n.enter-key-chip[_ngcontent-%COMP%]:focus {\n  border: none !important;\n}\n\n  .mat-dialog-container {\n  padding: 0px !important;\n}\n\n.sub-create-btn-bg[_ngcontent-%COMP%] {\n  background-color: unset;\n  color: #8e8e8e;\n  border: 1px solid #aaa;\n}\n\n.sub-create-btn-bg[_ngcontent-%COMP%]:hover {\n  background-color: #f1f8ff;\n  border: solid 1px #1a7bed;\n  color: #368bef;\n  line-height: 1.42;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi12aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtFQUN4RSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRzs7QUFFSDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3RkFBd0Y7RUFDeEYsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3RkFBd0Y7RUFDeEYsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6QywwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7UUFDTTtFQUNOLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOERBQThDO0VBQTlDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQSx3R0FBd0c7O0FBRXhHOztHQUVHOztBQUVIO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsOEJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7Ozs7OzRCQUswQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTs7Ozs0QkFJMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzs7O2dCQUljO0VBQ2QsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFOzs7OEJBRzRCO0VBQzVCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFOzs7Ozs7O3FCQU9tQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7Ozs7OztxQkFRbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDJCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4tdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAvKiBtYXJnaW46IDIwcHg7ICovXG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlci10YWJsZS12aWV3IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGNhbGMoMTAwJSAtIDM4MXB4KSAzMjFweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIC8qIHBhZGRpbmctYm90dG9tOiAxNXB4OyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTsgKi9cbiAgcGFkZGluZzogMjVweCAyMHB4IDI1cHg7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggOTlkZWcsICNkNmRkZTkgNCUsICNmNWY1ZjUgOTglKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3VtLXJhZGlvLWktcyB7XG4gIHdpZHRoOiA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmIyN2I7XG59XG5cbi5zdW0tcmFkaW8taSB7XG4gIHdpZHRoOiA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zdW0tZCB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDk5JTtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5zdW0tZC1mIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1bS1hLWYge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMmUyZTI2MztcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA2JSk7XG59XG5cbi5zdW0tYS1mLWgge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2UyZTJlMjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI1MzU0MmQxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3VtLWEtZi1pIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdW0tYy1pbi1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdW0tYy1pbiB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3VtLWMtaW4taSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uc3VtLWMtbC10IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1bS1jLXYtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLnN1bS1jLXIge1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdW0tYy1jIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc3VtLWMtdi1mIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA2JSk7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MnB4IDM2cHg7XG59XG5cbi5zZXItZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VyLWQtZiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2VyLXNsIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyLWQtaSB7XG4gIGNvbG9yOiB2YXIoLS1ncmV5aXNoLXR3byk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5zdW0tYy12LWUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3VtLWMtdi1pIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnN1bS1jLXYtaWYge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMjBweCk7XG59XG5cbi5zdW0tYy1oaS1kIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xufVxuXG4uc3VtLWMtc2gtaS1kIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2FybS1ncmV5KTsgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3VtLWMtc2gtaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlYjI3YztcbiAgY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDYlKTtcbn1cblxuLnN1bS1jLXNoLWktdiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA2JSk7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5NWY4O1xuICBjb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnN1bS1kZC1oIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiAuc3RhdGljLWxmZXQtcCB7XG4gIGxlZnQ6IDcwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xufVxuXG4uc3RhdGljLWxmZXQtcC1oIHtcbiAgbGVmdDogNzBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OSBpbSAhaW1wb3J0YW50O1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2lsdmVyKTtcbiAgaGVpZ2h0OiA1N3B4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMjUxcHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLW0ge1xuICBtYXJnaW4tbGVmdDogMTEzcHggIWltcG9ydGFudDtcbn0gKi9cblxuLmFjdGlvbi1idG4tbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDc1dmggIWltcG9ydGFudDtcbn1cblxuLnN1Yi1jcmVhdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5uZXctYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMzBkZWcsIHJnYig0NywgMTMxLCAyNDEpIC01JSwgcmdiKDcxLCAxNjgsIDI1NSkgMTI4JSk7XG4gIGNvbG9yOiAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmV3LWJ0bjpob3ZlciwgLmVkaXQtcHJvY2Vzcy1idG46aG92ZXIsIC5yZXBvcnQtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmVkaXQtcHJvY2Vzcy1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmVwb3J0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tb3JlLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mLXNpemUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oLWljb24ge1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kYXRlLWZpbHRlcjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzRhNDk0OWYwO1xufVxuXG4ucHJvY2Vzcy1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAzMGRlZywgcmdiKDQ3LCAxMzEsIDI0MSkgLTUlLCByZ2IoNzEsIDE2OCwgMjU1KSAxMjglKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXRpbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggNDBweCA0MjBweCBjYWxjKDEwMCUgLSA5NzVweCkgNDE1cHg7XG4gIGdyaWQtZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5maWx0ZXItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMjI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG59XG5cbi5maWx0ZXItbWF4LWgge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmZpbHRlci1oZWFkZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBwYWRkaW5nOiAycHggMTBweCAxMHB4IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mLWNsb3NlLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uZmlsdGVyLWZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi5maWx0ZXItYWRkLWZpZWxkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIHdpZHRoOiA2NDBweDtcbn1cblxuLmZpbHRlci1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDY0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZmlsdGVyLXJlc2V0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgY29sb3I6IHZhcigtLWdyZXlpc2gtdHdvKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYXBwbHktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLXJvdy1jIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuXG4uZmlsdGVyLXZhbHVlLWYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5maWx0ZXItdmFsdWUtYy1mIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXktdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAycHg7XG59XG5cbi5maWx0ZXItdi12LWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbi5maWx0ZXItcm93LWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMjUwcHggMTUwcHggMTgwcHg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmYtbGlzdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5maWx0ZXItZGVsZXRlLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZi1vci1hbmQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXktdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHBhZGRpbmc6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZi1vci1hbmQtYnRuLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdC1wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uZi1vLWEtZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uZmlsdGVyLWFkZC1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogcGFkZGluZzogMHB4IDJweCAycHggNnB4OyAqL1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsdGVyLWNvbmRpdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIHBhZGRpbmc6IDBweCAycHggMnB4IDZweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzNDVweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbn1cblxuLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc2VhcmNoLXNlbGVjdC1oaW50IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCAyMXB4IDBweCAxMnB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2hpcC1jbG9zZSB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jaGlwLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdHdvKTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VyLWlucHV0IHtcbiAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uY29sLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uY29udGFpbmVyLXQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxMjh2aDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLWhlaWdodDogMTAlO1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIC8qIGJhY2tncm91bmQ6ICNmN2Y3Zjc7ICovXG4gIGNvbG9yOiAjNzk3OTc5O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdywgdHIubWF0LWZvb3Rlci1yb3cge1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJlZmVmO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5zZWxlY3QtY29sdW1uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG59XG5cbi5zZWxlY3QtY29sdW1uLWNvbnRhaW5lci10ZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWxlY3QtY29sdW1uLWxpc3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFibGUtZGF0YS1pbmZvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTJ2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtaGFuZGxlIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmNoZWNrLWJveC1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LXdyYXAge1xuICBtYXgtd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG5cbi5jb2wtb3JkZXItZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29sLWNhbmNlbC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5MzY7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5jb2wtYXBwbHktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5sYW51Y2gtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xufVxuXG50YWJsZSB0ZDpmaXJzdC1jaGlsZCwgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxudGFibGUgdGQ6bGFzdC1jaGlsZCwgdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxudGFibGUgdGQ6aG92ZXIsIC5jb2wtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5tb3JlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9yZS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVlZmFkO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVkLWRvdCB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiAtMnB4O1xuICB0b3A6IC02cHg7XG59XG5cbi5mLWlucHV0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIC8qICM4OGJhZmEzNlxuICAjQ0NDICovXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpbHZlcik7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI0ZGRlxufVxuXG50ciB7XG4gIGhlaWdodDogNDRweDtcbn1cblxudGgge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnItMSB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnItMiB7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnItMyB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnItNCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGJvdHRvbTogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnIxYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWU7XG59XG5cbi5yMmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkM2RjO1xufVxuXG4ucjNhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWY3NTtcbn1cblxuLnIxdSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XG59XG5cbi5yMnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmYxO1xufVxuXG4ucjN1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWY3NTdhO1xufVxuXG4ucjR1IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaW0tNSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDBweDtcbn1cblxuLmltLTQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI2cHg7XG4gIHJpZ2h0OiA1MnB4O1xufVxuXG4uaW0tMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNHB4O1xuICByaWdodDogNjhweDtcbn1cblxuLmltLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTJweDtcbiAgcmlnaHQ6IDUycHg7XG59XG5cbi5pbS0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwcHg7XG59XG5cbi5pbS1iIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWY3NTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uaW0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWY3NTtcbn1cblxuLmltLXVuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmYtcy1iLWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xufVxuXG4uZi1tYXQtcyB7XG4gIHdpZHRoOiA5NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGhlaWdodDogMjNweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZi1zLWItYSB7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZi1zLWItdSB7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi8qIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAqL1xuXG4vKiA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwOWVmYiAhaW1wb3J0YW50O1xufSAqL1xuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5Y2ZhICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTk2IDE5NiAxOTYgLyA5MCUpO1xufVxuXG4uYm90LTUwIHtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4udHJhbnNmZXItYmxvY2sge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udHItY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zdWItcjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItcjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWYgIWltcG9ydGFudDtcbn1cblxuLnN1Yi1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDQ3LCA1OCwgODcsIC45NSk7XG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3ViLWlucHV0OmZvY3VzIHtcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleWlzaCkgIWltcG9ydGFudDsgKi9cbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItaW5wdXQgaW5wdXQ6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItaW5wdXQtb2ZmIHtcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7ICovXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3ViLWlucHV0LW9mZi1kIHtcbiAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7ICovXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3ViLXRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Yi10LWgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvZGdlci1ibHVlKTtcbn1cblxuLnN1Yi10LWgtdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3ViLXQtaC1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1Yi10LXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG59XG5cbi5zdWItdC1yLWYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViLXQtci1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnNpZGUtc3ViLXR0aSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnNpZGUtc3ViLXR0biB7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtYnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ViLWUtciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbn1cblxuLnN1Yi12LXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhOTQ7ICovXG4gIGNvbG9yOiAjNzc3Nzc3ZmM7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLnN1Yi10ZXh0LWEge1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cblxuLnN1Yi12LWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E5NDtcbiAgY29sb3I6ICM3Nzc3NzdmYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uc3ViLXYtYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmluc2lkZS1zdWItaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uY29sLXNlci1pbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdhcm0tZ3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbn1cblxuLmluc2lkZS1zdWItdCB7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluc2lkZS1zdWItdC1oIHtcbiAgLyogZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2RnZXItYmx1ZSk7XG59XG5cbi5pbnNpZGUtc3ViLXQtaC1uIHtcbiAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgKi9cbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluc2lkZS1zdWItdC1oLXQge1xuICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluc2lkZS1zdWItZS1yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xufVxuXG4uaGVhZGVyLXIge1xuICB6LWluZGV4OiA5OTk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBjYWxjKCAxMDAlIC0gNTBweCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDQuNXB4O1xuICBtYXJnaW46IDAgMCAwLjVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcbiAgb3BhY2l0eTogMC45Mjtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgcGFkZGluZzogN3B4IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWRhcmspO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5hcnJvdy1kaXYge1xuICB3aWR0aDogNTEuNXB4O1xuICBoZWlnaHQ6IDQ0LjVweDtcbiAgbWFyZ2luOiAwIDE0LjNweCAwIDA7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjIwMjU5NDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFycm93LWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc3ViLXQtZS1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODVweCAyODVweCAyODVweCAyODVweDtcbiAgZ3JpZC1nYXA6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbn1cblxuLnN1Yi1maWVsZC1oIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYXRjaGlwLWNsb3NlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWNoaXAtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWF0LWNoaXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm1hdC1tdWx0aS1zZWxlY3QtY2hpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cbi5tYXQtbXVsdGktc2VsZWN0LWNoaXAtc3ViIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTIlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4ubWF0LW11bHRpLXNlbGVjdC1jaGlwLXN1YmIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA5MiU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cbi5lbnRlci1rZXktY2hpcCB7XG4gIG1pbi1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lbnRlci1rZXktY2hpcDpob3ZlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZW50ZXIta2V5LWNoaXA6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLnN1Yi1jcmVhdGUtYnRuLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGNvbG9yOiAjOGU4ZThlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xufVxuLnN1Yi1jcmVhdGUtYnRuLWJnOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFhN2JlZDtcbiAgY29sb3I6ICMzNjhiZWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-view',
                templateUrl: './table-view.component.html',
                styleUrls: ['./table-view.component.css']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { menuFilterTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menuFilterTrigger']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/poornima/Poornima/Tracking_process/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1FZ8":
/*!********************************************************!*\
  !*** ./src/app/atoms/send-mail/send-mail.component.ts ***!
  \********************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var src_app_process_flow_editor_process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/process-flow-editor/process-dashboard/process-dashboard.service */ "8eSw");
/* harmony import */ var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common.service */ "gbi4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















const _c0 = ["subjectArea"];
const _c1 = ["bodyArea"];
function SendMailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ISF Mailed Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r0.todaydate, "MMM dd, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.mailCount, " ");
} }
function SendMailComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function SendMailComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const data_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.fieldFrom === "subject" ? ctx_r21.insertFieldinSubject(data_r20) : ctx_r21.insertFieldinBody(data_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r20.field_title, " ");
} }
function SendMailComponent_mat_chip_24_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_mat_chip_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function SendMailComponent_mat_chip_24_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r24 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.removesendmail(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendMailComponent_mat_chip_24_mat_icon_2_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r23 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r6.selectable)("removable", ctx_r6.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r23, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.removable);
} }
function SendMailComponent_mat_chip_31_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_mat_chip_31_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function SendMailComponent_mat_chip_31_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r29 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.removeccmail(i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendMailComponent_mat_chip_31_mat_icon_2_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r28 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r8.selectable)("removable", ctx_r8.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r28, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.removable);
} }
function SendMailComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SendMailComponent_div_33_Template_button_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.fieldFrom = "body"; })("click", function SendMailComponent_div_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.fieldFrom = "body"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function SendMailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_37_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const row_r37 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.removeFile(row_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", file_r36.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r36.fileName, " ");
} }
function SendMailComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_39_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.dontsendmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Undo " + ctx_r11.mailTimer, " ");
} }
function SendMailComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_53_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.isTemplate = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_54_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return ctx_r47.openTemplate(_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_54_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.saveTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_div_54_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_54_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return ctx_r51.openTemplate(_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save As ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SendMailComponent_div_54_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendMailComponent_div_54_div_2_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SendMailComponent_div_54_div_3_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.templateChosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.templateChosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.templateChosed);
} }
function SendMailComponent_div_55_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_div_55_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const temp_r55 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.chosedTemplate(temp_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const temp_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", temp_r55.name, " ");
} }
function SendMailComponent_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SendMailComponent_div_55_div_2_div_1_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.templateList);
} }
function SendMailComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SendMailComponent_div_55_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.searchTemplate($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendMailComponent_div_55_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.templateList == null ? null : ctx_r15.templateList.length);
} }
function SendMailComponent_ng_template_56_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Taken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SendMailComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Template Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SendMailComponent_ng_template_56_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.searchTemplate($event.target.value, "new_name"); })("ngModelChange", function SendMailComponent_ng_template_56_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.templateName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SendMailComponent_ng_template_56_div_4_Template, 2, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_ng_template_56_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.createTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.templateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.templateNameTaken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", "yes");
} }
function SendMailComponent_ng_template_58_mat_chip_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r70 = ctx.$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r66.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r70, " ");
} }
function SendMailComponent_ng_template_58_mat_chip_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r72 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r68.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r72, " ");
} }
function SendMailComponent_ng_template_58_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", file_r74.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r74.fileName, " ");
} }
function SendMailComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Preview Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sub ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip-list", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SendMailComponent_ng_template_58_mat_chip_16_Template, 2, 2, "mat-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-chip-list", 16, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SendMailComponent_ng_template_58_mat_chip_22_Template, 2, 2, "mat-chip", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "quill-view-html", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SendMailComponent_ng_template_58_div_26_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r19.yes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.mailPayload.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.toList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.ccList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r19.mailPayload.message)("theme", "bubble");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.mailFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", "confirm");
} }
class SendMailComponent {
    constructor(processDashboard, CommonService, cd, dialog) {
        this.processDashboard = processDashboard;
        this.CommonService = CommonService;
        this.cd = cd;
        this.dialog = dialog;
        this.header = 'Send ISF Document';
        this.toList = [];
        this.ccList = [];
        this.bccList = [];
        this.fieldValues = [];
        this.airliftDomains = false;
        this.isAddField = true;
        this.isFrom = '';
        this.fileList = [];
        this.isarrivalInvoice = false;
        this.isAdditionInvoice = 0;
        this.closeMail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toMail = [];
        this.todaydate = new Date();
        this.mailBody = { message: '', subject: '' };
        this.fieldList = [];
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fieldFrom = '';
        this.addOnBlur = true;
        this.quillConfiguration = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ 'align': [] }],
                [{ 'font': [] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                ['clean'],
            ],
        };
        this.mailFile = [];
        this.isTemplate = false;
        this.templateList = [];
        this.templateName = '';
        this.addedSubjectField = [];
        this.addedBodyField = [];
        this.mailPayload = {};
        this.mailTimer = -1;
        this.templateChosed = false;
        this.templateValue = {};
        this.templateNameTaken = false;
        this.mailCount = 0;
    }
    ngOnInit() {
        var _a, _b;
        this.userData = JSON.parse(localStorage.user_data);
        console.log(this.dataTableInfo, 'table info');
        if ((_a = this.toList) === null || _a === void 0 ? void 0 : _a.length) {
            this.toList.forEach((element) => {
                let data = element.split(',');
                if ((data === null || data === void 0 ? void 0 : data.length) > 1) {
                    data.forEach(element => {
                        this.toMail.push(element);
                    });
                }
                else {
                    this.toMail.push(element);
                }
            });
            this.toList = JSON.parse(JSON.stringify(this.toMail));
        }
        // this.getFields('');
        console.log(this.fieldValues, 'field value');
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        const today_date = [year, month, day].join('-');
        if (this.isFrom !== 'table-report')
            this.getMailCount(today_date);
        if (this.isFrom === 'table-report') {
            if ((_b = this.fileList) === null || _b === void 0 ? void 0 : _b.length)
                this.mailFile = this.fileList;
        }
        if (this.isFrom === 'send_static') {
            this.toList = [];
            this.ccList = [];
            this.bccList = [];
        }
        if (this.isFrom === 'send_arrival')
            this.header = 'Send Arrival Notice';
        if (this.isFrom === 'send_arrival' && this.isarrivalInvoice)
            this.header = 'Send Arrival Invoice Notice';
        if (this.isFrom === 'send_arrival' && this.isAdditionInvoice)
            this.header = 'Send Additional Invoice';
    }
    getMailCount(date) {
        const filter = {
            table_name: 'import_shipment',
            filter: [{ 'isf_sent_on': date }]
        };
        this.CommonService.commonGetCount(filter).subscribe((response) => {
            var _a;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.mailCount = (_a = response['info'][0]) === null || _a === void 0 ? void 0 : _a.count;
            }
        });
    }
    getFields(value) {
        let body = {
            "limit": 5,
            "page": 0,
            "db_name": 'tracking_db',
            "table_name": 'meta_field_data',
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                { table_name: this.dataTableInfo.tablename }
            ],
            "search": [
                { 'field_title': value.toLowerCase() }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            var _a;
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.fieldList = response['info'];
                if ((_a = this.fieldList) === null || _a === void 0 ? void 0 : _a.length) {
                    this.fieldList = this.fieldList.filter((data) => data.field_sub_type !== 'duplicate');
                }
            }
        });
        // clearTimeout(this.clearFieldTimer);
        // this.clearFieldTimer = setTimeout(() => {
        //   let body = {
        //     "limit": 10,
        //     "page": 0,
        //     "db_name": 'tracking_db',
        //     "table_name": 'meta_field_data',
        //     "sort_type": "ASC",
        //     "sort_field": "id",
        //     "filter": [
        //       { table_name: this.dataTableInfo.tablename }
        //     ],
        //     "search": [
        //       { 'field_title': value }
        //     ]
        //   };
        //   this.CommonService.getValues(body).subscribe((response: any) => {
        //     if (response?.statusCode === 200) {
        //       this.fieldList = response['info'];
        //     }
        //   });
        // }, 500);
    }
    insertFieldinSubject(item) {
        let startPos, endPos, value;
        startPos = this.subjectArea.nativeElement.selectionStart;
        endPos = this.subjectArea.nativeElement.selectionEnd;
        value = this.subjectArea.nativeElement.value;
        let before = value.substring(0, startPos);
        let after = value.substring(endPos, value.length);
        let newText = '';
        if (item.table_name) {
            newText = " {{" + item.table_name + "." + item.name + "}} ";
        }
        else {
            newText = " {{" + item.table_name + "." + item.name + "}} ";
        }
        this.subjectArea.nativeElement.value = before + newText + after;
        this.mailBody.subject = this.subjectArea.nativeElement.value;
        this.subjectArea.nativeElement.selectionEnd = this.subjectArea.nativeElement.selectionStart = startPos + newText.length;
        this.subjectArea.nativeElement.focus();
        this.addedSubjectField.push(item);
        this.fieldList = [];
        return false;
    }
    insertFieldinBody(item) {
        if (this.indexOfCursor >= 0) {
            this.editorEvent.editor.insertText(this.indexOfCursor, " {{" + item.table_name + "." + item.name + "}} ");
            // if (this.editorEvent.editor.getContents()?.ops[0]?.insert)
            //   this.mailBody.message =  new DOMParser().parseFromString(this.editorEvent.editor.getContents()?.ops[0]?.insert, "text/xml");
            this.addedBodyField.push(item);
        }
        else {
            // console.log(this.editorEvent, 'editor');
            // this.editorEvent.editor.focus();
            // this.insertFieldinBody(item);
        }
        this.fieldList = [];
    }
    removesendmail(i) {
        this.toList.splice(i, 1);
    }
    removeccmail(i) {
        this.ccList.splice(i, 1);
    }
    add(event, param) {
        const input = event.input;
        const value = event.value;
        let isValid = false;
        if ((value || '').trim()) {
            isValid = this.CommonService.validateEmail(value.trim());
            if (isValid) {
                if (this.airliftDomains && !value.endsWith('@airliftusa.com'))
                    return;
                this[param].push(value.trim());
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    documentSelection() {
        this.getSelect = document.getSelection();
        this.focusOffset = this.getSelect.focusOffset;
    }
    onSelectionChanged(event) {
        var _a, _b, _c, _d;
        this.editorEvent = event;
        if (((_a = event === null || event === void 0 ? void 0 : event.oldRange) === null || _a === void 0 ? void 0 : _a.index) >= 0)
            this.indexOfCursor = (_b = event === null || event === void 0 ? void 0 : event.oldRange) === null || _b === void 0 ? void 0 : _b.index;
        else if (((_c = event === null || event === void 0 ? void 0 : event.range) === null || _c === void 0 ? void 0 : _c.index) >= 0)
            this.indexOfCursor = (_d = event === null || event === void 0 ? void 0 : event.range) === null || _d === void 0 ? void 0 : _d.index;
    }
    contentUpdate(event) {
        if (event === null || event === void 0 ? void 0 : event.html)
            this.mailBody.message = event.html;
    }
    uploadFile(event) {
        this.CommonService.uploadFile(event).then((response) => {
            response.forEach(element => {
                const json = {
                    fileName: element.file_name + '.' + element.file_extension,
                    file: element.file_data,
                    fileType: element.file_type
                };
                this.mailFile.push(json);
            });
        });
    }
    removeFile(index) {
        this.mailFile.splice(index, 1);
    }
    searchTemplate(value, from) {
        clearTimeout(this.clearSearchTemplate);
        this.clearSearchTemplate = setTimeout(() => {
            var _a;
            let body = {
                "limit": 5,
                "page": 0,
                "table_name": 'email_template_master',
                "sort_type": "ASC",
                "sort_field": "id",
                "search": [
                    { name: value.toLowerCase().trim() }
                ],
                "filter": [
                    { data_table_name: (_a = this.dataTableInfo) === null || _a === void 0 ? void 0 : _a.tablename }
                ]
            };
            if (from === 'new_name') {
                body.limit = 1;
                delete body.search;
                body.filter.push({ name: value });
            }
            this.templateNameTaken = false;
            this.CommonService.getValues(body).subscribe((response) => {
                var _a;
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    if (from === 'new_name') {
                        if ((_a = response['info']) === null || _a === void 0 ? void 0 : _a.length) {
                            this.templateNameTaken = true;
                        }
                    }
                    else
                        this.templateList = response['info'];
                }
            });
        }, 200);
    }
    openTemplate(templatename) {
        this.templateName = '';
        this.dialogref = this.dialog.open(templatename, {
            width: '400px'
        });
        this.dialogref.afterClosed().subscribe((result) => {
            if (result === 'confirm') {
            }
        });
    }
    openMailpreview(templatename) {
        var _a;
        if (!((_a = this.toList) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const dialogref = this.dialog.open(templatename, {
            width: '700px'
        });
        dialogref.afterClosed().subscribe((result) => {
            if (result === 'confirm') {
                this.mailTimer = 5;
                this.mailInterval = setInterval(() => {
                    var _a, _b, _c, _d, _e, _f;
                    this.mailTimer--;
                    if (this.mailTimer === 0) {
                        clearInterval(this.mailInterval);
                        if (this.isFrom === 'table-report') {
                            const mailPayload = {
                                "to": this.toList,
                                "cc": this.ccList.length ? this.ccList : [],
                                "replyTo": [
                                    this.userData.email
                                ],
                                "subject": this.mailBody.subject,
                                "message": this.mailBody.message
                            };
                            if (this.mailFile && this.mailFile.length) {
                                mailPayload["attachments"] = this.mailFile;
                            }
                            ;
                            this.mailSendApi(mailPayload);
                        }
                        else if (this.isFrom === 'send_isf') {
                            const mailPayload = {
                                "to": this.toList,
                                "cc": this.ccList.length ? this.ccList : [],
                                "replyTo": [
                                    this.userData.email, "isf@airliftusa.com"
                                ],
                                "id": (_a = this.fieldValues) === null || _a === void 0 ? void 0 : _a.id
                            };
                            if (((_c = (_b = this.mailPayload) === null || _b === void 0 ? void 0 : _b.subject) === null || _c === void 0 ? void 0 : _c.length) && ((_e = (_d = this.mailPayload) === null || _d === void 0 ? void 0 : _d.message) === null || _e === void 0 ? void 0 : _e.length)) {
                                mailPayload['subject'] = this.mailPayload.subject;
                                mailPayload["message"] = this.mailPayload.message;
                            }
                            if (this.mailFile && this.mailFile.length) {
                                mailPayload["attachments"] = this.mailFile;
                            }
                            ;
                            this.CommonService.isfMail(mailPayload).subscribe((response) => {
                                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                                    this.mailFile = [];
                                    this.ccList = [];
                                    this.toList = [];
                                    this.mailBody = {};
                                    this.mailPayload = {};
                                    this.CommonService.showSnackbar('Successfully Mail Sended', ['green-growl']);
                                    this.closeMail.emit('send_isf');
                                }
                                else {
                                    this.mailFile = [];
                                    this.ccList = [];
                                    this.toList = [];
                                    this.mailBody = {};
                                    this.mailPayload = {};
                                    this.CommonService.showSnackbar('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
                                }
                            });
                        }
                        else if (this.isFrom === 'send_arrival') {
                            console.log(this.mailPayload, 'mail payload');
                            this.mailPayload.id = (_f = this.fieldValues) === null || _f === void 0 ? void 0 : _f.id;
                            if (this.isarrivalInvoice)
                                this.mailPayload.invoice = "true";
                            if (this.isAdditionInvoice) {
                                this.mailPayload.additional_invoice_id = this.isAdditionInvoice;
                                this.mailPayload.invoice = "false";
                            }
                            this.CommonService.sendArrival(this.mailPayload).subscribe((response) => {
                                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                                    this.mailFile = [];
                                    this.ccList = [];
                                    this.toList = [];
                                    this.mailBody = {};
                                    this.mailPayload = {};
                                    this.CommonService.showSnackbar('Successfully Arrival Notice Sent', ['green-growl']);
                                }
                                else {
                                    this.mailFile = [];
                                    this.ccList = [];
                                    this.toList = [];
                                    this.mailBody = {};
                                    this.mailPayload = {};
                                    this.CommonService.showSnackbar('Failure,  Arrival Notice Not Sent, please Try Again', ['red-growl']);
                                }
                            });
                        }
                        else {
                            this.mailSendApi(this.mailPayload);
                        }
                    }
                }, 900);
            }
        });
    }
    createTemplate() {
        var _a, _b, _c, _d, _e;
        if (this.templateNameTaken)
            return;
        if (((_a = this.templateName) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return;
        const value = {
            'name': this.templateName,
            'content': this.mailBody.message,
            'data_table_id': (_b = this.dataTableInfo) === null || _b === void 0 ? void 0 : _b.id,
            'subject': this.mailBody.subject,
            'field_list': '',
            'data_table_name': (_c = this.dataTableInfo) === null || _c === void 0 ? void 0 : _c.tablename,
            "created_by": (_d = this.userData) === null || _d === void 0 ? void 0 : _d.id,
            "created_on": this.CommonService.modifiedDate(new Date()),
            "last_modified_by": (_e = this.userData) === null || _e === void 0 ? void 0 : _e.id,
            "last_modified_on": this.CommonService.modifiedDate(new Date())
        };
        const payload = {
            "table_name": 'email_template_master',
            "values": [value]
        };
        this.CommonService.commonInsert(payload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.dialogref.close();
                this.CommonService.showSnackbar('Successfully Template Created', ['green-growl']);
            }
        });
    }
    getListofFields(string) {
        const regExp = /{{(.*?)}}/g;
        return string.match(regExp);
    }
    sendMail() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.mailPayload = {
            "to": this.toList,
            "cc": this.ccList.length ? this.ccList : [],
            "replyTo": [
                this.userData.email
            ],
            "subject": this.mailBody.subject,
            "message": this.mailBody.message
        };
        if (this.mailFile && this.mailFile.length) {
            this.mailPayload["attachments"] = this.mailFile;
        }
        ;
        let fieldList = ((_a = this.mailPayload) === null || _a === void 0 ? void 0 : _a.subject) ? this.getListofFields((_b = this.mailPayload) === null || _b === void 0 ? void 0 : _b.subject.toString()) : [];
        if (fieldList === null || fieldList === void 0 ? void 0 : fieldList.length) {
            fieldList.forEach((element) => {
                const val = element.replace('{{', '').replace('}}', '').replace(this.dataTableInfo.tablename + '.', '');
                this.mailPayload.subject = this.mailPayload.subject.replace(element, this.getFieldValue(val) ? this.getFieldValue(val) : '');
            });
        }
        fieldList = ((_c = this.mailPayload) === null || _c === void 0 ? void 0 : _c.message) ? this.getListofFields((_d = this.mailPayload) === null || _d === void 0 ? void 0 : _d.message.toString()) : [];
        if (fieldList === null || fieldList === void 0 ? void 0 : fieldList.length) {
            fieldList.forEach((element) => {
                const val = element.replace('{{', '').replace('}}', '').replace(this.dataTableInfo.tablename + '.', '');
                this.mailPayload.message = this.mailPayload.message.replace(element, this.getFieldValue(val) ? this.getFieldValue(val) : '');
            });
        }
        if (this.isFrom === 'send_arrival' && !((_e = this.mailBody.subject) === null || _e === void 0 ? void 0 : _e.length) && !((_f = this.mailBody.message) === null || _f === void 0 ? void 0 : _f.length)) {
            let container_no = '';
            if ((_h = (_g = this.subFieldValues) === null || _g === void 0 ? void 0 : _g.container_details) === null || _h === void 0 ? void 0 : _h.length) {
                console.log((_j = this.subFieldValues) === null || _j === void 0 ? void 0 : _j.container_details, 'container details in send');
                container_no = [...new Set((_k = this.subFieldValues) === null || _k === void 0 ? void 0 : _k.container_details.map((data) => data === null || data === void 0 ? void 0 : data.container_number))].join(', ');
            }
            console.log(container_no, 'container no');
            let arrival_notice_executive_contact = '';
            let customer_service_exe_contact = '';
            const eta = this.getFieldValue('eta');
            const consignee_name = this.getFieldValue('consignee_name');
            const shipper_name = this.getFieldValue('shipper_name');
            const ams_hbl_number = this.getFieldValue('ams_hbl_number');
            const shipper_po = this.getFieldValue('shipper_po');
            const customer_service_exe = this.getFieldValue('customer_service_exe');
            const arrival_notice_executive = this.getFieldValue('arrival_notice_executive');
            const user_detail = { "table_name": "user", "data_table_id": "253", "limit": 10, "page": 0, "sort_type": "DESC", "sort_field": "id", "filter": [{ "1": arrival_notice_executive, "2": customer_service_exe, "condition": "Equal to", "fields": "user_name", "operator": "AND", "type": "VARCHAR", "option": [""], "table_id": 0, "is_sub": "", "is_sub_id": "" }] };
            this.mailPayload.subject = 'Arrival Notice for Container No ' + ((container_no === null || container_no === void 0 ? void 0 : container_no.length) ? container_no : '');
            this.CommonService.getFiterTableValues(user_detail).subscribe((response) => {
                if (response.info[0].user_name === arrival_notice_executive) {
                    arrival_notice_executive_contact = response.info[0].contact_number;
                    customer_service_exe_contact = response.info[1].contact_number;
                }
                else {
                    customer_service_exe_contact = response.info[0].contact_number;
                    arrival_notice_executive_contact = response.info[1].contact_number;
                }
                this.mailPayload.message = `<div style="line-height: 1.5">
        <div>Dear Sir/Madam, </div>
        <div style="margin:5px 0">Please find Arrival Notice attached for customs clearance purpose and the ETA is ${(eta === null || eta === void 0 ? void 0 : eta.length) ? eta : ''}. </div>
         <div>Consignee Name: ${(consignee_name === null || consignee_name === void 0 ? void 0 : consignee_name.length) ? consignee_name : ''} </div>
         <div>Shipper Name: ${(shipper_name === null || shipper_name === void 0 ? void 0 : shipper_name.length) ? shipper_name : ''} </div>
         <div>AMS HBL No: ${(ams_hbl_number === null || ams_hbl_number === void 0 ? void 0 : ams_hbl_number.length) ? ams_hbl_number : ''} </div>
         <div>PO No: ${(shipper_po === null || shipper_po === void 0 ? void 0 : shipper_po.length) ? shipper_po : ''} </div>
         <div>Container No: ${(container_no === null || container_no === void 0 ? void 0 : container_no.length) ? container_no : ''} </div>
        <div style="margin:5px 0; line-height: 1.5">Please call your Arrival Notice Executive ${(arrival_notice_executive === null || arrival_notice_executive === void 0 ? void 0 : arrival_notice_executive.length) ? arrival_notice_executive : ''} at ${arrival_notice_executive_contact}. or Customer Service representative ${(customer_service_exe === null || customer_service_exe === void 0 ? void 0 : customer_service_exe.length) ? customer_service_exe : ''} at ${customer_service_exe_contact} If you have any questions concerning this Arrival Notice. Please confirm receipt of this arrival notice.</div>
        <div>Thanks & Regards , </div>
        <div>Airlift USA </div>
        </div>`;
            });
        }
    }
    getFieldValue(field) {
        var _a, _b, _c, _d, _e;
        if (this.fieldValues.hasOwnProperty(field)) {
            let value_field = field;
            if (((_a = this.fieldValues[field]) === null || _a === void 0 ? void 0 : _a.parent_table_field) && ((_b = this.fieldValues[field]) === null || _b === void 0 ? void 0 : _b.parent_table))
                value_field = (_c = this.fieldValues[field]) === null || _c === void 0 ? void 0 : _c.parent_table_field;
            if (Array.isArray(this.fieldValues[field])) {
                return ((_d = this.fieldValues[field]) === null || _d === void 0 ? void 0 : _d.length) ? this.fieldValues[field].map((data) => data[field]).join('') : '';
            }
            else if (typeof this.fieldValues[field] === 'object') {
                if ((_e = this.fieldValues[field].value) === null || _e === void 0 ? void 0 : _e.length) {
                    return this.fieldValues[field].value.map((data) => data[value_field]).join('');
                }
                return '';
            }
            else if (typeof this.fieldValues[field] === 'string' || typeof this.fieldValues[field] === 'number') {
                return this.fieldValues[field];
            }
        }
        return '';
    }
    clearMail() {
        this.mailBody = { subject: '', message: [] };
        this.mailFile = [];
        this.mailPayload = {};
        this.templateList = [];
        this.toList = [];
        this.ccList = [];
        this.bccList = [];
        this.isTemplate = false;
        this.templateName = '';
        this.templateChosed = false;
    }
    dontsendmail() {
        this.mailTimer = -1;
        clearInterval(this.mailInterval);
    }
    chosedTemplate(template) {
        var _a, _b;
        this.templateName = (template === null || template === void 0 ? void 0 : template.name) ? template.name : '';
        this.templateValue = template;
        this.mailBody.message = ((_a = template === null || template === void 0 ? void 0 : template.content) === null || _a === void 0 ? void 0 : _a.length) ? template.content : '';
        this.mailBody.subject = ((_b = template === null || template === void 0 ? void 0 : template.subject) === null || _b === void 0 ? void 0 : _b.length) ? template.subject : '';
        this.isTemplate = false;
        this.templateChosed = true;
    }
    saveTemplate() {
        var _a, _b;
        if ((_a = this.templateValue) === null || _a === void 0 ? void 0 : _a.id) {
            const value = {
                'name': this.templateValue.name,
                'content': this.mailBody.message,
                'subject': this.mailBody.subject,
                "last_modified_by": (_b = this.userData) === null || _b === void 0 ? void 0 : _b.id,
                "last_modified_on": this.CommonService.modifiedDate(new Date()),
                "id": this.templateValue.id
            };
            this.CommonService.commonPut(value, 'email_template_master').subscribe((response) => {
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    this.CommonService.showSnackbar('Successfully Template Saved', ['green-growl']);
                }
            });
        }
    }
    mailSendApi(mailPayload) {
        this.CommonService.mailFileSend(mailPayload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.mailFile = [];
                this.ccList = [];
                this.toList = [];
                this.mailBody = {};
                this.mailPayload = {};
                this.CommonService.showSnackbar('Successfully Mail Sended', ['green-growl']);
            }
            else {
                this.mailFile = [];
                this.ccList = [];
                this.toList = [];
                this.mailBody = {};
                this.mailPayload = {};
                this.CommonService.showSnackbar('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
            }
        });
    }
}
SendMailComponent.ɵfac = function SendMailComponent_Factory(t) { return new (t || SendMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_process_flow_editor_process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
SendMailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendMailComponent, selectors: [["app-send-mail"]], viewQuery: function SendMailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subjectArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyArea = _t.first);
    } }, inputs: { dataTableInfo: "dataTableInfo", header: "header", toList: "toList", ccList: "ccList", bccList: "bccList", fieldValues: "fieldValues", airliftDomains: "airliftDomains", isAddField: "isAddField", isFrom: "isFrom", fileList: "fileList", subFieldValues: "subFieldValues", isarrivalInvoice: "isarrivalInvoice", isAdditionInvoice: "isAdditionInvoice" }, outputs: { closeMail: "closeMail" }, decls: 60, vars: 24, consts: [["cdkDrag", "", 1, "email-card"], ["cdkDragHandle", "", 1, "email-header", "fw-500", "cursor-move"], [1, "text-center", 2, "letter-spacing", "0.5px"], [1, "material-icons", "text-center", "cursor", 3, "click"], ["class", "date-col text-center align-center fw-500", 4, "ngIf"], [1, "d-flex", "position-r", "sub-to-cc", "align-center"], [1, "sub-to-cc-text", "fw-500"], ["type", "text", "placeholder", "Subject", 1, "border-none", "mail-sub", 3, "ngModel", "ngModelChange", "click"], ["subjectArea", ""], ["class", "material-icons cursor mail-add-btn", "matRipple", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["yPosition", "below"], ["fieldMenu", "matMenu"], [1, "mail-field-search", 3, "click"], ["placeholder", "search fields ...", 1, "field-search", 3, "input"], [1, "mail-field-mat"], ["style", "user-select: none;", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["aria-label", "Mail selection", 1, "mail-chip-area"], ["mailchipList", ""], ["class", "chip-area", 3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add Mail...", "type", "email", 1, "border-none", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["mailccchipList", ""], ["class", "d-flex position-r height-30", 4, "ngIf"], [1, "mail-body", "position-r"], [1, "content-editor", 3, "ngModel", "placeholder", "theme", "modules", "click", "ngModelChange", "onContentChanged", "onSelectionChanged"], [1, "file-list-mail", "d-flex", "d-flex-wrap"], ["class", "file-chip", 4, "ngFor", "ngForOf"], [1, "footer-mail", "position-r"], ["class", "undo-timer cursor", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "plus-template", "material-icons", "cursor", 3, "matMenuTriggerFor", "menuClosed"], ["for", "dynmailfile", "matRipple", "", 1, "material-icons", "cursor", "mail-attc", "text-center"], ["id", "dynmailfile", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], [1, "footer-btn"], ["matRipple", "", 1, "mail-clear", "cursor", 3, "click"], ["matRipple", "", 1, "mail-send", "cursor", 3, "click"], ["plusMenu", "matMenu"], [3, "click"], ["class", "template-option cursor", "matRipple", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "template-option", 4, "ngIf"], ["templatename", ""], ["previewmail", ""], [1, "date-col", "text-center", "align-center", "fw-500"], [1, "border-btw"], [1, "mail-total"], ["matRipple", "", 1, "material-icons", "cursor", "mail-add-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 2, "user-select", "none", 3, "click"], [1, "chip-area", 3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "d-flex", "position-r", "height-30"], ["matRipple", "", 1, "add-field-mail", "cursor", 3, "matMenuTriggerFor", "focus", "click"], [1, "material-icons", "add-mail-btn"], [1, "file-chip"], [1, "file-label", "fw-500", 3, "matTooltip"], [1, "material-icons", "file-close", "cursor", "fw-500", 3, "click"], [1, "undo-timer", "cursor", 3, "click"], ["matRipple", "", 1, "template-option", "cursor", 3, "click"], ["matRipple", "", "class", "template-option cursor", 3, "click", 4, "ngIf"], [1, "template-option"], ["type", "text", "placeholder", "Search Template", 1, "border-none", "mail-sub", 3, "input"], ["class", "template-option cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "template-option", "cursor", 3, "click"], [1, "template-outer", "template-option"], [1, "template-name", "fw-500"], ["type", "text", "placeholder", "Enter Template Name", 3, "ngModel", "input", "ngModelChange"], ["class", "name-taken-template", 4, "ngIf"], [1, "footer-btn", "template-footer"], [1, "mail-clear", "cursor", 3, "mat-dialog-close"], [1, "mail-send", "button", "cursor", 3, "click"], [1, "name-taken-template"], [1, "email-card", "position-r", 2, "height", "550px", "box-shadow", "none"], [1, "email-header", "fw-500", "cursor-move"], [1, "material-icons", "text-center", "cursor", 3, "mat-dialog-close"], ["class", "chip-area", 3, "selectable", 4, "ngFor", "ngForOf"], [3, "content", "theme"], [1, "footer-btn", "preview-footer"], ["matRipple", "", 1, "mail-clear", "cursor", 3, "mat-dialog-close"], ["matRipple", "", 1, "mail-send", "cursor", 3, "mat-dialog-close"], [1, "chip-area", 3, "selectable"]], template: function SendMailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_div_click_4_listener() { return ctx.closeMail.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SendMailComponent_div_6_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendMailComponent_Template_input_ngModelChange_10_listener($event) { return ctx.mailBody.subject = $event; })("click", function SendMailComponent_Template_input_click_10_listener() { return ctx.fieldFrom = "subject"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SendMailComponent_button_12_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_div_click_15_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SendMailComponent_Template_input_input_16_listener($event) { return ctx.getFields($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SendMailComponent_button_18_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-chip-list", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SendMailComponent_mat_chip_24_Template, 3, 4, "mat-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function SendMailComponent_Template_input_matChipInputTokenEnd_25_listener($event) { return ctx.add($event, "toList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-chip-list", 16, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SendMailComponent_mat_chip_31_Template, 3, 4, "mat-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function SendMailComponent_Template_input_matChipInputTokenEnd_32_listener($event) { return ctx.add($event, "ccList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SendMailComponent_div_33_Template, 5, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "quill-editor", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_quill_editor_click_35_listener() { return ctx.fieldFrom = "body"; })("ngModelChange", function SendMailComponent_Template_quill_editor_ngModelChange_35_listener($event) { return ctx.mailBody.message = $event; })("onContentChanged", function SendMailComponent_Template_quill_editor_onContentChanged_35_listener($event) { return ctx.contentUpdate($event); })("onSelectionChanged", function SendMailComponent_Template_quill_editor_onSelectionChanged_35_listener($event) { return ctx.onSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SendMailComponent_div_37_Template, 5, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SendMailComponent_div_39_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuClosed", function SendMailComponent_Template_div_menuClosed_40_listener() { return ctx.isTemplate = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " attach_file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SendMailComponent_Template_input_change_44_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_div_click_46_listener() { return ctx.clearMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Clear All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_div_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); ctx.sendMail(); return ctx.openMailpreview(_r18); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-menu", 10, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendMailComponent_Template_div_click_52_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SendMailComponent_div_53_Template, 2, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SendMailComponent_div_54_Template, 4, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SendMailComponent_div_55_Template, 3, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SendMailComponent_ng_template_56_Template, 10, 3, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SendMailComponent_ng_template_58_Template, 32, 9, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.templateChosed && (ctx.templateValue == null ? null : ctx.templateValue.name) ? ctx.templateValue.name : ctx.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFrom !== "table-report" && ctx.isFrom !== "send_arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mailBody.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r5)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ccList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r7)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mailBody.message)("placeholder", "Body...")("theme", "bubble")("modules", ctx.quillConfiguration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mailFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mailTimer > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTemplate);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragHandle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipInput"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillEditorComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipRemove"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillViewHTMLComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".email-card {\n   height: 100%;\n   width: 100%;\n   box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n   background: #fff;\n   z-index: 999;\n}\n.email-header {\n    background: #211c3b;\n    display: grid;\n    grid-template-columns: 94% 6%;\n    color: #f2f2f2;\n    height: 40px;\n    align-items: center;\n}\n.cursor-move {\n    cursor: move;\n}\n.date-col {\n    background: #7d7a8d;   \n    color: #f2f2f2;\n    height: 40px;\n    justify-content: center;\n}\n.border-btw {\n    margin: 0 10px;\n    height: 30px;\n    border: 1px solid #bfbfbf;\n}\n.mail-total {\n    padding: 4px 10px;\n    background: #cccccc;\n    margin: 0 10px;\n    border-radius: 5px;\n    color: #211c3b;\n}\n.mail-sub {\n    box-shadow: none !important;\n    color: var(--dark-two);\n}\n.mail-sub:focus, .mail-sub:hover, .mail-chip-area input:focus, .mail-chip-area input:hover {\n    border: none !important;\n}\n.mail-field-mat {\n    max-height: 400px;\n    overflow: auto;\n}\n.mail-field-search {\n    margin: 0 4px;\n}\n.field-search {\n    min-width: 200px;\n    padding: 0 4px;\n    color: var(--dark-two);\n    border: 1px solid #cacaca;\n}\n.sub-to-cc {\n    padding: 7px 0;\n    border-bottom: 1px solid #c7c7c7;\n    margin: 0 5px;\n}\n.sub-to-cc-text {\n   color: #8b8b8b;\n   border-right: 1px solid #bfbfbf;\n   padding-right: 10px;\n   margin-right: 10px;\n   width: 20px;\n}\n.chip-area {\n    min-height: 23px !important;\n    font-size: 11px !important;\n    padding: 6px !important;\n  }\n.mail-chip-area .mat-chip-list-wrapper {\n    border: none;\n    margin: 0 !important;  \n }\n.add-field-mail {\n    padding: 5px 10px;\n    border-radius: 5px;\n    position: absolute;\n    right: 0;\n    margin: 4px;\n    border: 1px solid #cccccc;\n    color: #5e5e5e;\n    font-size: 12px;\n    display: flex;\n    align-items: center;\n }\n.mail-body {\n    margin: 10px 8px;\n    height: 225px;\n }\n.content-editor {\n     overflow: auto;\n }\n.ql-mention-list-container {\n    width: 270px;\n    border: 1px solid #F0F0F0;\n    border-radius: 4px;\n    background-color: #FFFFFF;\n    box-shadow: 0 2px 12px 0 rgba(30, 30, 30, 0.08);\n  }\n.ql-mention-list {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n  }\n.ql-mention-list-item {\n    cursor: pointer;\n    height: 44px;\n    line-height: 44px;\n    font-size: 16px;\n    padding: 0 20px;\n    vertical-align: middle;\n  }\n.ql-mention-list-item.selected {\n    background-color: #D3E1EB;\n    text-decoration: none;\n  }\n.mention {\n    height: 24px;\n    width: 65px;\n    border-radius: 6px;\n    background-color: #D3E1EB;\n    padding: 3px 0;\n  }\n.mention>span {\n    margin: 0 3px;\n  }\n.footer-mail {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 10% 88%;\n    margin-bottom: 4px;\n    border-top: 1px solid #f2f2f2;\n    padding-top: 8px;\n  }\n.footer-btn {\n    display: flex;\n    justify-content: flex-end;\n  }\n.mail-clear, .mail-send {\n    margin: 4px;\n    padding: 5px 0px;\n    width: 80px;\n    text-align: center;\n    border-radius: 4px;\n  }\n.mail-clear {\n    background-color: var(--silver);\n    color: var(--greyish-two);\n  }\n.mail-send {\n      background-color: var(--cerulean);\n      color: #fff;\n  }\n.mail-attc {\n    color: #8b8b8b;\n  }\n.file-chip {\n    white-space: nowrap;\n    width: 120px;\n    font-size: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    border: solid 1px #c3c3c3;\n    background-color: #fcfcfc;\n    padding: 1px 4px;\n    border-radius: 4px;\n    display: flex;\n    opacity: 0.75;\n    height: 20px;\n    align-items: center;\n  }\n.file-label {\n    width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--dark-two);\n  }\n.file-close {\n    color: #51606d;\n    font-size: 18px;\n  }\n.file-list-mail {\n    height: 60px;\n    overflow: auto;\n    margin: 2px 4px;\n  }\n.mail-add-btn {\n      background: none;\n      border: none;\n  }\n.plus-template {\n    top: 3px;\n    padding: 8px;\n    position: absolute;\n    left: 85px;\n    display: flex;\n    align-items: center;\n    box-shadow: 0 3px 6px 0 rgba(7, 7, 7, 0.38);\n    background-color: var(--cerulean);\n    border-radius: 50%;\n    color: #fff;\n    font-weight: 600;\n  }\n.undo-timer {\n      position: absolute;\n      left: 50%;\n      background: var(--dark-two);\n      color: #fff;\n      padding: 10px;\n      border-radius: 5px;\n  }\n.preview-footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n  }\n.template-option {\n      padding: 5px 10px;\n  }\n.template-name{ \n      margin-bottom: 5px;\n  }\n.template-outer input {\n      padding: 0 4px;\n      color: var(--charcoal-grey);\n      border: 1px solid #cacaca;\n  }\n.template-footer {\n      margin-top: 10px;\n  }\n.name-taken-template {\n      color: var(--error);\n      margin-left: 5px;\n      font-size: 11px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRvbXMvc2VuZC1tYWlsL3NlbmQtbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtHQUNaLFdBQVc7R0FDWCxxSEFBcUg7R0FDckgsZ0JBQWdCO0dBQ2hCLFlBQVk7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsYUFBYTtBQUNqQjtBQUNBO0dBQ0csY0FBYztHQUNkLCtCQUErQjtHQUMvQixtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLFdBQVc7QUFDZDtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix1QkFBdUI7RUFDekI7QUFDRjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDQTtJQUNHLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7QUFDQTtLQUNJLGNBQWM7Q0FDbEI7QUFDQTtJQUNHLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQ0FBK0M7RUFDakQ7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLCtCQUErQjtJQUMvQix5QkFBeUI7RUFDM0I7QUFDQTtNQUNJLGlDQUFpQztNQUNqQyxXQUFXO0VBQ2Y7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsWUFBWTtFQUNoQjtBQUNBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLGFBQWE7TUFDYixrQkFBa0I7RUFDdEI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0E7TUFDSSxpQkFBaUI7RUFDckI7QUFDQTtNQUNJLGtCQUFrQjtFQUN0QjtBQUNBO01BQ0ksY0FBYztNQUNkLDJCQUEyQjtNQUMzQix5QkFBeUI7RUFDN0I7QUFDQTtNQUNJLGdCQUFnQjtFQUNwQjtBQUNBO01BQ0ksbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXRvbXMvc2VuZC1tYWlsL3NlbmQtbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNhcmQge1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgei1pbmRleDogOTk5O1xufVxuLmVtYWlsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzIxMWMzYjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTQlIDYlO1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmN1cnNvci1tb3ZlIHtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG4uZGF0ZS1jb2wge1xuICAgIGJhY2tncm91bmQ6ICM3ZDdhOGQ7ICAgXG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJvcmRlci1idHcge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xufVxuLm1haWwtdG90YWwge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMjExYzNiO1xufVxuLm1haWwtc3ViIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWRhcmstdHdvKTtcbn1cbi5tYWlsLXN1Yjpmb2N1cywgLm1haWwtc3ViOmhvdmVyLCAubWFpbC1jaGlwLWFyZWEgaW5wdXQ6Zm9jdXMsIC5tYWlsLWNoaXAtYXJlYSBpbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFpbC1maWVsZC1tYXQge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLm1haWwtZmllbGQtc2VhcmNoIHtcbiAgICBtYXJnaW46IDAgNHB4O1xufVxuLmZpZWxkLXNlYXJjaCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwIDRweDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay10d28pO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG59XG4uc3ViLXRvLWNjIHtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzdjNztcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuLnN1Yi10by1jYy10ZXh0IHtcbiAgIGNvbG9yOiAjOGI4YjhiO1xuICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JmYmZiZjtcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB3aWR0aDogMjBweDtcbn1cbi5jaGlwLWFyZWEge1xuICAgIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA2cHggIWltcG9ydGFudDtcbiAgfVxuLm1haWwtY2hpcC1hcmVhIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgIFxuIH1cbiAuYWRkLWZpZWxkLW1haWwge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBjb2xvcjogIzVlNWU1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cbiAubWFpbC1ib2R5IHtcbiAgICBtYXJnaW46IDEwcHggOHB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gfVxuIC5jb250ZW50LWVkaXRvciB7XG4gICAgIG92ZXJmbG93OiBhdXRvO1xuIH1cbiAucWwtbWVudGlvbi1saXN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRjA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMzAsIDMwLCAzMCwgMC4wOCk7XG4gIH1cbiAgXG4gIC5xbC1tZW50aW9uLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnFsLW1lbnRpb24tbGlzdC1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnFsLW1lbnRpb24tbGlzdC1pdGVtLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNFMUVCO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLm1lbnRpb24ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRTFFQjtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgfVxuICBcbiAgLm1lbnRpb24+c3BhbiB7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgfVxuICAuZm9vdGVyLW1haWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA4OCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgLmZvb3Rlci1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAubWFpbC1jbGVhciwgLm1haWwtc2VuZCB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5tYWlsLWNsZWFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5aXNoLXR3byk7XG4gIH1cbiAgLm1haWwtc2VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZXJ1bGVhbik7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAubWFpbC1hdHRjIHtcbiAgICBjb2xvcjogIzhiOGI4YjtcbiAgfVxuICAuZmlsZS1jaGlwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYzNjM2MzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gICAgcGFkZGluZzogMXB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5maWxlLWxhYmVsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogdmFyKC0tZGFyay10d28pO1xuICB9XG4gIC5maWxlLWNsb3NlIHtcbiAgICBjb2xvcjogIzUxNjA2ZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmZpbGUtbGlzdC1tYWlsIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luOiAycHggNHB4O1xuICB9XG4gIC5tYWlsLWFkZC1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAucGx1cy10ZW1wbGF0ZSB7XG4gICAgdG9wOiAzcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDcsIDcsIDcsIDAuMzgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlcnVsZWFuKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAudW5kby10aW1lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXR3byk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnByZXZpZXctZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC50ZW1wbGF0ZS1vcHRpb24ge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cbiAgLnRlbXBsYXRlLW5hbWV7IFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC50ZW1wbGF0ZS1vdXRlciBpbnB1dCB7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIH1cbiAgLnRlbXBsYXRlLWZvb3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5uYW1lLXRha2VuLXRlbXBsYXRlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICB9Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendMailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-send-mail',
                templateUrl: './send-mail.component.html',
                styleUrls: ['./send-mail.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_process_flow_editor_process_dashboard_process_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["ProcessDashboardService"] }, { type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { subjectArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subjectArea']
        }], bodyArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bodyArea']
        }], dataTableInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ccList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bccList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fieldValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], airliftDomains: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAddField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFrom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subFieldValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isarrivalInvoice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAdditionInvoice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeMail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3c2O":
/*!*********************************************!*\
  !*** ./src/app/side-nav/side-nav.module.ts ***!
  \*********************************************/
/*! exports provided: SideNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavModule", function() { return SideNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main-view/main-view.module */ "C1jn");








class SideNavModule {
}
SideNavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavModule });
SideNavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavModule_Factory(t) { return new (t || SideNavModule)(); }, imports: [[_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_6__["MainViewModule"]], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavModule, { imports: [_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_6__["MainViewModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_main_view_main_view_module__WEBPACK_IMPORTED_MODULE_6__["MainViewModule"]],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common.service */ "gbi4");






class ProcessDashboardService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        this.processData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    createFormsGroup(value) {
        const payload = {
            'values': [value]
        };
        return this.http.post(this.baseUrl + 'createFormsGroup/', payload, this.commonService.httpOptions);
    }
    getFormsGroup(value, process_id) {
        const payload = {
            "limit": 100,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "position",
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
        // value = value.replace(/[^a-zA-Z ]/g, "");
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
            "limit": 100,
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
            "limit": 300,
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
        if ((data === null || data === void 0 ? void 0 : data.is_sub_table) || (data === null || data === void 0 ? void 0 : data.parent_table_id)) {
            payload.filter = [];
            if (data === null || data === void 0 ? void 0 : data.is_sub_table)
                payload.filter.push({ 'is_sub_table': 1 });
            if (data === null || data === void 0 ? void 0 : data.parent_table_id)
                payload.filter.push({ 'parent_table_id': data.parent_table_id });
        }
        if (data === null || data === void 0 ? void 0 : data.db_name)
            payload.db_name = data.db_name;
        if (data === null || data === void 0 ? void 0 : data.name)
            payload.table_name = data === null || data === void 0 ? void 0 : data.name;
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getProcess(filter) {
        const payload = {
            "limit": 300,
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
            "limit": 300,
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
            "limit": 300,
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
            "limit": 300,
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
            "limit": 300,
            "page": 0,
            "db_name": filter === null || filter === void 0 ? void 0 : filter.db,
            "table_name": filter === null || filter === void 0 ? void 0 : filter.table_name,
            "sort_type": "ASC",
            "sort_field": "id",
        };
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.table_field) && (filter === null || filter === void 0 ? void 0 : filter.value)) {
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
        ``;
        const payload = {
            "limit": 300,
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
    insertWorkflowProcess(value) {
        const payload = {
            "table_name": "workflow_process",
            values: [value]
        };
        return this.http.post(this.baseUrl + 'workFlowInsert/', payload, this.commonService.httpOptions);
    }
    getUserList(filter) {
        const payload = {
            "limit": 500,
            "page": 0,
            "db_name": 'tracking_db',
            "table_name": 'user',
            "sort_type": "ASC",
            "sort_field": "id",
            "fields": "id,user_name,designation"
        };
        if (filter) {
            payload.filter = [];
            payload.filter.push({ designation: filter.value });
        }
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    getFieldByType(type, table_id) {
        const payload = {
            "limit": 300,
            "page": 0,
            "db_name": 'tracking_db',
            "table_name": 'meta_field_data',
            "sort_type": "ASC",
            "sort_field": "id",
            "fields": "id,field_title,name,field_sub_type"
        };
        payload.filter = [];
        payload.filter.push({ field_sub_type: type });
        payload.filter.push({ 'table_id': table_id });
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
    updateWorkflowProcess(value) {
        const payload = {
            "table_name": "workflow_process",
            values: [value]
        };
        return this.http.put(this.baseUrl + 'workFlowUpdate/', payload, this.commonService.httpOptions);
    }
    getWorkflowList(filter) {
        const payload = {
            "limit": 300,
            "page": 0,
            "db_name": filter === null || filter === void 0 ? void 0 : filter.db,
            "table_name": filter === null || filter === void 0 ? void 0 : filter.table_name,
            "sort_type": "ASC",
            "sort_field": "id",
        };
        if (filter && (filter === null || filter === void 0 ? void 0 : filter.table_field)) {
            payload.filter = [];
            payload.filter.push({ [filter.table_field]: filter.value });
        }
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.commonService.httpOptions);
    }
}
ProcessDashboardService.ɵfac = function ProcessDashboardService_Factory(t) { return new (t || ProcessDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
ProcessDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessDashboardService, factory: ProcessDashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // url: 'https://api.airliftnet.com/tracking/',
    url: 'http://localhost:8586/tracking/',
    fileUrl: 'https://api.airliftnet.com/trackingfiles/insert/',
    tempCache: { rowMeta: { testmeta: '' }, metaParse: { testmeta: '' }, allData: { testmeta: '' }, tableData: '' }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C1jn":
/*!***********************************************!*\
  !*** ./src/app/main-view/main-view.module.ts ***!
  \***********************************************/
/*! exports provided: MainViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewModule", function() { return MainViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _main_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-view-routing.module */ "Dpvb");
/* harmony import */ var _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-view/table-view.component */ "+n7K");
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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../atoms/send-mail/send-mail.module */ "r7r6");
/* harmony import */ var _data_transfer_data_transfer_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../data-transfer/data-transfer.module */ "ajet");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");




























class MainViewModule {
}
MainViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewModule });
MainViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewModule_Factory(t) { return new (t || MainViewModule)(); }, providers: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _main_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainViewRoutingModule"],
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
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"],
            _data_transfer_data_transfer_module__WEBPACK_IMPORTED_MODULE_25__["DataTransferModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainViewModule, { declarations: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _main_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainViewRoutingModule"],
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
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
        _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"],
        _data_transfer_data_transfer_module__WEBPACK_IMPORTED_MODULE_25__["DataTransferModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]], exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _main_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainViewRoutingModule"],
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
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                    _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"],
                    _data_transfer_data_transfer_module__WEBPACK_IMPORTED_MODULE_25__["DataTransferModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]
                ],
                exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]],
                providers: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Dpvb":
/*!*******************************************************!*\
  !*** ./src/app/main-view/main-view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MainViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewRoutingModule", function() { return MainViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-view/table-view.component */ "+n7K");





const routes = [
    {
        path: '',
        component: _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_2__["TableViewComponent"]
    }
];
class MainViewRoutingModule {
}
MainViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewRoutingModule });
MainViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewRoutingModule_Factory(t) { return new (t || MainViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KWBv":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "gbi4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");












function SideNavComponent_div_0_a_45_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_a_45_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.isSelectMenu = item_r4.table_name; return ctx_r5.goToProcess(item_r4.id, item_r4.table_name, item_r4.summarize_count); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "menu-select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, item_r4.display_name));
} }
const _c0 = function (a0) { return { nightClass: a0 }; };
function SideNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.sideNavbtn(_r2); return ctx_r7.isToogleMenu == "menu" ? ctx_r7.isToogleMenu = "" : ctx_r7.isToogleMenu = "menu"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Airlift ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Welcomes you, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-sidenav-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-sidenav", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideNavComponent_div_0_Template_mat_sidenav_mouseover_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sideNavHover("over"); })("mouseout", function SideNavComponent_div_0_Template_mat_sidenav_mouseout_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sideNavHover("out"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.sideNavbtn(_r2); return ctx_r11.isToogleMenu == "menu" ? ctx_r11.isToogleMenu = "" : ctx_r11.isToogleMenu = "menu"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SideNavComponent_div_0_a_45_Template, 6, 7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-nav-list", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.redirectViewAllProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " select_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "View All Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-sidenav-content", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "menu-icon-c" : "menu-icon-u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.userData == null ? null : ctx_r0.userData.user_name) ? ctx_r0.userData.user_name : "User!", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 14, ctx_r0.dateHead, "MMM dd, EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r0.curHr > 18))("src", ctx_r0.light, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.isNavOnClickOpen || ctx_r0.isNavOpen ? "200px" : "50px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "menu-select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://storage.googleapis.com/airlift-images/AirliftLogoSVGFinal.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sidnavList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "side-nav-margin-1" : "side-nav-margin-2");
} }
let onDarkMode = false;
class SideNavComponent {
    constructor(route, CommonService, aRouter) {
        this.route = route;
        this.CommonService = CommonService;
        this.aRouter = aRouter;
        this.isNavOnClickOpen = false;
        this.isNavOpen = false;
        this.isToogleMenu = '';
        this.time = '';
        this.curHr = '';
        this.htmlDark = onDarkMode;
        this.light = '';
    }
    ngOnInit() {
        if (localStorage.getItem('user_data'))
            this.userData = JSON.parse(localStorage.getItem('user_data'));
        this.dashboard = this.route.url;
        this.aRouter.queryParams.subscribe((params) => {
            var _a;
            this.routeInfo = params;
            if ((_a = this.routeInfo) === null || _a === void 0 ? void 0 : _a.tablename) {
                this.isSelectMenu = this.routeInfo.tablename;
            }
        });
        this.getTableData();
        this.setTime();
        setInterval((() => this.setTime()), 1000);
        setInterval((() => this.setDate()), 1000);
    }
    getTableData() {
        // console.log("side", this.sidnavList)
        let access = this.userData.designation + "_access";
        let field = "id,display_name,icon,table_name," + access;
        let body = { table_name: "meta_table_data", fields: field, limit: 100, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ show_on_side_nav: "yes" }, { is_delete: 0 }] };
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tempCache.tableData == '') {
            this.CommonService.getValues(body).subscribe((response) => {
                _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tempCache.tableData = response.info;
                this.sidnavList = response.info;
                // if (!!this.sidnavList) {
                //   this.isSelectMenu = this.sidnavList[0].table_name;
                //   this.goToProcess(this.sidnavList[0].id,this.sidnavList[0].table_name)
                // }
                // console.log("side", this.sidnavList)
            });
        }
        else {
            this.sidnavList = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tempCache.tableData;
        }
    }
    goToProcess(t_id, t_name, item) {
        this.route.navigate(['/dashboard/view', t_name], { queryParams: { id: t_id, tablename: t_name, info: item } });
    }
    redirectViewAllProcess() {
        this.route.navigate(['view-all-process']);
    }
    setTime() {
        this.time = moment__WEBPACK_IMPORTED_MODULE_1__().format('hh:mm A');
        this.curHr = moment__WEBPACK_IMPORTED_MODULE_1__().hours();
        if (this.curHr < 12) {
            this.light = '../../assets/img/Morning.png';
        }
        else if (this.curHr < 18) {
            this.light = '../../assets/img/Noon.png';
        }
        else {
            this.light = '../../assets/img/Night.png';
        }
    }
    setDate() {
        this.dateHead = new Date();
    }
    sideNavbtn(temp) {
        if (!this.isNavOnClickOpen) {
            this.isNavOnClickOpen = true;
            temp.open();
        }
        else {
            this.isNavOnClickOpen = false;
            temp.close();
            setTimeout(() => { temp.open(); this.isToogleMenu = ''; }, 50);
        }
    }
    sideNavHover(val) {
        if (val === 'over' && !this.isNavOnClickOpen) {
            this.isNavOpen = true;
        }
        else {
            this.isNavOpen = false;
        }
    }
    logout() {
        localStorage.clear();
        this.route.navigate(['/login']);
    }
    darkMode() {
        onDarkMode = !onDarkMode;
        this.htmlDark = onDarkMode;
        this.CommonService.darkEnable.next(onDarkMode);
        if (onDarkMode) {
            const htmlelement = document.getElementsByTagName('html')[0];
            htmlelement.style.filter = 'invert(1) hue-rotate(180deg)';
            let css = document.createElement('style');
            css.type = 'text/css';
            if (css.styleSheet)
                css.styleSheet.cssText = ' img { filter: invert(1) hue-rotate(180deg)  } ';
            else
                css.appendChild(document.createTextNode(' img { filter: invert(1) hue-rotate(180deg)  } '));
            /* Append style to the tag name */
            document.getElementsByTagName("head")[0].appendChild(css);
        }
        else {
            const htmlelement = document.getElementsByTagName('html')[0];
            htmlelement.style.filter = 'unset';
            let css = document.createElement('style');
            css.type = 'text/css';
            if (css.styleSheet)
                css.styleSheet.cssText = ' img { filter: unset  } ';
            else
                css.appendChild(document.createTextNode(' img { filter: unset  } '));
            /* Append style to the tag name */
            document.getElementsByTagName("head")[0].appendChild(css);
        }
        // window.location.reload();
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 7, vars: 1, consts: [["class", "container header-row-c", 4, "ngIf"], ["matMenuContent", ""], ["profile", "matMenu"], ["mat-menu-item", "", 1, "mat-menu-list-custom"], ["mat-menu-item", "", 1, "mat-menu-list-custom", 3, "click"], [1, "container", "header-row-c"], [1, "mat-toolbar-container"], [1, "logo"], [1, "menu-icon", "cursor", 3, "ngClass", "click"], ["href", "https://www.airliftusa.com/", "target", "_blank", 1, "link-text"], [1, "border-line-right"], [1, "welcome-grid"], [1, "align-center"], [1, "greeting"], [1, "user-container"], [1, "date-time"], [1, "border-h-t"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["alt", "Greetings", 1, "gif-i", 3, "ngClass", "src"], [1, "toolbar-secound"], [1, "adminbtn-grid"], [1, "time-container"], [1, "toolbar-secound-child-1"], ["src", "../../assets/img/Messagess.svg"], ["src", "../../assets/img/Notificationss.svg"], [1, "toolbar-avator", 3, "matMenuTriggerFor"], ["src", "../../assets/img/ProfileIconss.svg", 1, "avator"], [1, "sidenav-container"], ["mode", "side", "opened", "", 1, "bottom-button-open", "side-nav", 3, "mouseover", "mouseout"], ["sidenav", ""], ["mat-list-item", "", 1, "side-nav-toogle", "logo-bg", 3, "ngClass", "click"], [1, "side-nav-t-icon", 3, "ngClass"], ["href", "https://www.airliftusa.com/", "target", "_blank"], [1, "img-logo", 3, "src"], ["mat-list-item", "", "class", "menu-h", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "bottom-list"], ["mat-list-item", "", 1, "view-more", 3, "click"], [1, "side-nav-icon"], [1, "side-nav-text"], [3, "ngClass"], ["mat-list-item", "", 1, "menu-h", 3, "ngClass", "click"], [1, "side-nav-icon", 3, "ngClass"], [1, "side-nav-text", 3, "ngClass"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_div_0_Template, 54, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_button_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.sidnavList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.side-nav-icon[_ngcontent-%COMP%] {\n  color: var(--pinkish-grey-two) !important;\n  font-size: 20px !important;\n}\n\n.side-nav-text[_ngcontent-%COMP%] {\n  color: var(--white) !important;\n  font-size: 12px !important;\n}\n\n.side-nav-toogle[_ngcontent-%COMP%] {\n  background-color: var(--pinkish-grey-two) !important;\n}\n\n.side-nav-t-icon[_ngcontent-%COMP%] {\n  color: var(--black) !important;\n  font-size: 20px !important;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  border-right: 0px !important;\n  \n  \n  background: #303954;\n  \n  \n  height: 100% !important;\n  position: fixed !important;\n  z-index: 9999 !important;\n}\n\n.side-nav-margin-1[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\n\n.side-nav-margin-2[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\n\n.mat-toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  width: 100%;\n  height: 100%;\n  background: #303954;\n  color: #fff;\n  letter-spacing: 0.5px;\n  opacity: 0.92;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 50px;\n  color: var(--white);\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n\n.menu-icon-u[_ngcontent-%COMP%] {\n  background-color: #6f799b;\n}\n\n.menu-icon-c[_ngcontent-%COMP%] {\n  background-color: #2f3a46;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  height: 45px;\n  display: flex;\n  margin-left: 14px;\n}\n\n.welcome-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px -webkit-max-content;\n  grid-template-columns: 40px max-content;\n  justify-content: left;\n  grid-gap: 5px;\n  width: -webkit-max-content;\n  width: max-content;\n  margin-left: 8px;\n}\n\n.date-time[_ngcontent-%COMP%] {\n  display: flex;\n  width: 78%;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  \n}\n\n.align-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.greeting[_ngcontent-%COMP%] {\n  \n  text-transform: capitalize;\n  font-size: 18px;\n  padding-right: 5px;\n  font-weight: 400;\n  \n}\n\n.user-container[_ngcontent-%COMP%] {\n  \n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n\n.toolbar-secound[_ngcontent-%COMP%] {\n  display: grid;\n  \n  grid-template-columns: 1% calc( 16% - 36px) 21% auto auto -webkit-max-content -webkit-max-content -webkit-max-content;\n  grid-template-columns: 1% calc( 16% - 36px) 21% auto auto max-content max-content max-content;\n  grid-gap: 20px;\n  position: absolute;\n  align-items: center;\n  right: 42px;\n  top: 6px;\n}\n\n.adminbtn-grid[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n}\n\n.time-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n}\n\n.time[_ngcontent-%COMP%] {\n  border: 1px solid #c3c3c3;\n  padding: 0px 5px;\n  margin: 0px;\n  line-height: 20px;\n  border-radius: 2px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.nightClass[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n\n.gif-i[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: bold;\n  margin-left: 8px;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n}\n\n.border-h-t[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 16px;\n  background-color: #fff;\n  margin: 10px;\n}\n\n.toolbar-secound-child-1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.toolbar-avator[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-right: 4px;\n  margin-top: 1px;\n}\n\n.avator[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 33px;\n  height: 33px;\n  margin-left: 5px;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bottom-button-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50px;\n  transition: width .2s;\n}\n\n.bottom-button-open[_ngcontent-%COMP%]:hover {\n  width: 200px;\n}\n\n.menu-select[_ngcontent-%COMP%] {\n  \n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  color: #1e88e5;\n  background: linear-gradient(to bottom, #2b72fc, #2c97e9) !important;\n}\n\n.isactive-list-icon[_ngcontent-%COMP%] {\n  color: var(--white) !important;\n}\n\n.bottom-list[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #6f799b;\n}\n\n.view-more[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n\n.mat-menu-list-custom[_ngcontent-%COMP%] {\n  line-height: 12px;\n  height: 35px;\n}\n\n.menu-h[_ngcontent-%COMP%]:hover {\n  background-color: var(--blue);\n  transition: background-color 1s ease;\n}\n\n\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0px;\n  background: #fff;\n  z-index: 9;\n  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);\n}\n\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  overflow: hidden;\n  overflow-y: overlay;\n  font-weight: 500;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: rgba(86, 84, 84, 0.87);\n  align-items: center;\n  display: flex;\n  font-size: 16px;\n  height: 40px;\n  font-weight: 600;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n\n  .cdk-overlay-pane {\n  max-width: 99vw !important;\n}\n\n  .mat-menu-panel {\n  min-width: 112px;\n  max-width: 350px;\n}\n\n  .mat-tab-label-active {\n  color: #1e88e5 !important;\n  opacity: 1 !important;\n}\n\n  .mat-menu-content:not(:empty) {\n  padding-bottom: 0px !important;\n}\n\n  .mat-menu-panel-custom-class {\n  min-width: 450px !important;\n  max-width: 450px !important;\n}\n\n  .mat-drawer-content {\n  overflow: hidden !important;\n}\n\n  .api-list {\n  height: calc(100% - 100px);\n  overflow-y: auto;\n}\n\n.logo-bg[_ngcontent-%COMP%] {\n  background: #fff !important;\n}\n\n.logo-bg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  left: -12px;\n}\n\n.dark-mode[_ngcontent-%COMP%] {\n  color: #efa647;\n}\n\n.link-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  text-decoration: none;\n  margin-left: 20px;\n}\n\n.border-line-right[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  border-right: 2px solid;\n}\n\n.mat-drawer-inner-container[_ngcontent-%COMP%] {\n  background: rgba(67, 78, 113, 0.92);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUF1QztFQUF2Qyx1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYjttQkFDaUI7RUFDakIscUhBQTZGO0VBQTdGLDZGQUE2RjtFQUM3RixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFFWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBLG1IQUFtSDs7QUFFbkg7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2lkZS1uYXYtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdHdvKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LXRleHQge1xuICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtdG9vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGlua2lzaC1ncmV5LXR3bykgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLW5hdiB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1NDViNzAgIWltcG9ydGFudDsgKi9cbiAgLyogYmFja2dyb3VuZDogcmdiYSg2NywgNzgsIDExMywgMC45Mik7ICovXG4gIGJhY2tncm91bmQ6ICMzMDM5NTQ7XG4gIC8qICMyZjNhNDYgIWltcG9ydGFudCAqL1xuICAvKiBvcGFjaXR5OiAwLjkyICFpbXBvcnRhbnQ7ICovXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtbWFyZ2luLTEge1xuICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LW1hcmdpbi0yIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggYXV0byAzMCUgMjMwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMDM5NTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG9wYWNpdHk6IDAuOTI7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogcGFkZGluZy1sZWZ0OiAzOXB4OyAqL1xufVxuXG4ubWVudS1pY29uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1lbnUtaWNvbi11IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNzk5Yjtcbn1cblxuLm1lbnUtaWNvbi1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2E0Njtcbn1cblxuLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cblxuLndlbGNvbWUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBtYXgtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBncmlkLWdhcDogNXB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5kYXRlLXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNzglO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAvKiBjb2xvcjogdmFyKC0td2FybS1ncmV5KTsgKi9cbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncmVldGluZyB7XG4gIC8qIGNvbG9yOiAjNzk3OTc5Yzc7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyAqL1xufVxuXG4udXNlci1jb250YWluZXIge1xuICAvKiBjb2xvcjogIzVkNWQ1ZDsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udG9vbGJhci1zZWNvdW5kIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxJSBjYWxjKCAzNCUgLSA1MHB4KSAzMCUgYXV0byBhdXRvIG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMTBweDsgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxJSBjYWxjKCAxNiUgLSAzNnB4KSAyMSUgYXV0byBhdXRvIG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogNDJweDtcbiAgdG9wOiA2cHg7XG59XG5cbi5hZG1pbmJ0bi1ncmlkIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2MTYxNjE7XG59XG5cbi50aW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmlnaHRDbGFzcyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi5naWYtaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xufVxuXG4uYm9yZGVyLWgtdCB7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udG9vbGJhci1zZWNvdW5kLWNoaWxkLTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udG9vbGJhci1hdmF0b3Ige1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5hdmF0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvdHRvbS1idXR0b24tb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4ycztcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xufVxuXG4uYm90dG9tLWJ1dHRvbi1vcGVuOmhvdmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubWVudS1zZWxlY3Qge1xuICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZmY7ICovXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBjb2xvcjogIzFlODhlNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJiNzJmYywgIzJjOTdlOSkgIWltcG9ydGFudDtcbn1cblxuLmlzYWN0aXZlLWxpc3QtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cblxuLmJvdHRvbS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY3OTliO1xufVxuXG4udmlldy1tb3JlIHtcbiAgY29sb3I6ICMxZTg4ZTU7XG59XG5cbi5tYXQtbWVudS1saXN0LWN1c3RvbSB7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5tZW51LWg6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5O1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2IoMCAwIDAgLyAxMCUpO1xufVxuXG4ubWF0LWxpc3QtYmFzZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDg2LCA4NCwgODQsIDAuODcpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1hdC1saXN0LWJhc2Ugc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XG4gIG1heC13aWR0aDogOTl2dyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMWU4OGU1ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1jb250ZW50Om5vdCg6ZW1wdHkpIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLWN1c3RvbS1jbGFzcyB7XG4gIG1pbi13aWR0aDogNDUwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hcGktbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubG9nby1iZyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmxvZ28tYmcgc3BhbiBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTJweDtcbn1cblxuLmRhcmstbW9kZSB7XG4gIGNvbG9yOiAjZWZhNjQ3O1xufVxuXG4ubGluay10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5ib3JkZXItbGluZS1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xufVxuXG4ubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCA3OCwgMTEzLCAwLjkyKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "M9um":
/*!**************************!*\
  !*** ./src/app/error.ts ***!
  \**************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalErrorHandler {
    handleError(error) {
        console.log(error);
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(route) {
        this.route = route;
        this.title = 'Tracking';
        console.log(location.pathname, 'path name');
        if (location.pathname === '/') {
            this.route.navigate(['/dashboard']);
        }
        else if (location.pathname === '/login') {
            const user = JSON.parse(localStorage.getItem('user_data'));
            if (user) {
                let hours = 48; // Reset when storage is more than 48hours
                let now = new Date().getTime();
                let setupTime = localStorage.getItem('setupTime');
                if (setupTime == null) {
                }
                else {
                    if (now - setupTime > hours * 60 * 60 * 1000) {
                    }
                    else {
                        this.route.navigate(['/dashboard']);
                    }
                }
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "TCIz":
/*!********************************************************!*\
  !*** ./src/app/data-transfer/data-transfer.service.ts ***!
  \********************************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DataTransferService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'https://transfer.airliftnet.com/api/';
    }
    getRateData(body) {
        return this.http.post(this.baseURL + `getHblNumber/`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    postCrmtoTracking(body) {
        return this.http.post(this.baseURL + `crmtotracking/`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
}
DataTransferService.ɵfac = function DataTransferService_Factory(t) { return new (t || DataTransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataTransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataTransferService, factory: DataTransferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "KWBv");
/* harmony import */ var _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-nav/side-nav.module */ "3c2O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-view/main-view.module */ "C1jn");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error */ "M9um");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quill */ "CzEO");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _error__WEBPACK_IMPORTED_MODULE_10__["GlobalErrorHandler"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"].forRoot()
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _error__WEBPACK_IMPORTED_MODULE_10__["GlobalErrorHandler"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a8Uh":
/*!**************************************!*\
  !*** ./src/app/gaurds/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const user = JSON.parse(localStorage.getItem('user_data'));
        // console.log(route, 'router');
        // console.log(state, 'router state snapeshot');
        if (user) {
            let hours = 48; // Reset when storage is more than 24hours
            let now = new Date().getTime();
            let setupTime = localStorage.getItem('setupTime');
            if (setupTime == null) {
                localStorage.setItem('setupTime', now);
            }
            else {
                if (now - setupTime > hours * 60 * 60 * 1000) {
                    localStorage.clear();
                    this.router.navigate(['/login']);
                    return false;
                }
                else {
                    if (state.url === '/login') {
                        this.router.navigate(['/dashboard']);
                        return false;
                    }
                }
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ajet":
/*!*******************************************************!*\
  !*** ./src/app/data-transfer/data-transfer.module.ts ***!
  \*******************************************************/
/*! exports provided: DataTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferModule", function() { return DataTransferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _data_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-transfer.component */ "whUY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class DataTransferModule {
}
DataTransferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTransferModule });
DataTransferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTransferModule_Factory(t) { return new (t || DataTransferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTransferModule, { declarations: [_data_transfer_component__WEBPACK_IMPORTED_MODULE_2__["DataTransferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"]], exports: [_data_transfer_component__WEBPACK_IMPORTED_MODULE_2__["DataTransferComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTransferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_data_transfer_component__WEBPACK_IMPORTED_MODULE_2__["DataTransferComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                ],
                exports: [
                    _data_transfer_component__WEBPACK_IMPORTED_MODULE_2__["DataTransferComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "gbi4":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");








class CommonService {
    constructor(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.fileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fileUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('user_data') && JSON.parse(localStorage.getItem('user_data')).token ? JSON.parse(localStorage.getItem('user_data')).token : '',
                'current-time': this.formatDate()
                // ,
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
            })
        };
        this.darkEnable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    workFlowUpdates(value) {
        const payload = {
            "table_name": "workflow_process",
            values: [value]
        };
        return this.http.put(this.baseUrl + 'workFlowUpdate/', payload, this.httpOptions);
    }
    //Get values for dashboard grid component
    getValues(value) {
        return this.http.post(this.baseUrl + 'commonGet/', value, this.httpOptions);
    }
    getWorkFlow(value) {
        return this.http.post(this.baseUrl + 'commonWorkflow/', value, this.httpOptions);
    }
    getSummarizeCount(value) {
        return this.http.post(this.baseUrl + 'getTotalCount/', value, this.httpOptions);
    }
    // data1 = this.http.get(this.baseUrl + 'process/getFieldData/307/59982/', this.httpOptions);
    // data2 = this.http.get(this.baseUrl + 'process/getFieldData/307/59979/', this.httpOptions);
    // data3 = this.http.get(this.baseUrl + 'process/getFieldData/307/59980/', this.httpOptions);
    // data4 = this.http.get(this.baseUrl + 'process/getFieldData/307/59981/', this.httpOptions);
    // arr = [this.data1, this.data2, this.data3, this.data4]
    // multicall = forkJoin(this.arr)
    // somedata: any
    // gettest() {
    //   this.multicall.subscribe(
    //     data => {
    //       this.somedata = data
    //       console.log("sssxxxxxxxxxxxxxxx", this.somedata)
    //     }, err => {
    //     }, () => console.log("done")
    //   )
    // }
    getRowValues(value) {
        return this.http.get(this.baseUrl + 'process/getFieldData/' + value.tableId + '/' + value.id + '/', this.httpOptions);
    }
    getRowData(value) {
        return this.http.post(this.baseUrl + 'getFieldData/', value, this.httpOptions);
    }
    getIsfMail(id) {
        return this.http.get(this.baseUrl + 'isf/getEmailData/' + id, this.httpOptions);
    }
    deleteFilter(value) {
        const payload = {
            "id": value
        };
        return this.http.post(this.baseUrl + 'deleteFilter/', payload, this.httpOptions);
    }
    commonDelete(value) {
        const payload = {
            "id": value.id,
            "tablename": value.tablename
        };
        return this.http.post(this.baseUrl + 'commonDelete/', payload, this.httpOptions);
    }
    getFiterValues(value) {
        return this.http.post(this.baseUrl + 'commonFilter/', value, this.httpOptions);
    }
    // getFiterTableValues(value) {
    //   return this.http.post(this.baseUrl + 'process/getTableData/', value, this.httpOptions);
    // }
    getFiterTableValues(value) {
        return this.http.post(this.baseUrl + 'commonTableData/', value, this.httpOptions);
    }
    getFiterMainTableValues(value) {
        return this.http.post(this.baseUrl + 'commonMainTableData/', value, this.httpOptions);
    }
    getAllValues(value) {
        return this.http.post(this.baseUrl + 'commonAllData/', value, this.httpOptions);
    }
    getJsonDataValues(value) {
        return this.http.post(this.baseUrl + 'commonJsonData/', value, this.httpOptions);
    }
    getFiterSubTableValues(value) {
        return this.http.post(this.baseUrl + 'process/getTableDataSub/', value, this.httpOptions);
    }
    putFiterValues(value) {
        return this.http.post(this.baseUrl + 'insertFilter/', value, this.httpOptions);
    }
    //Get Column list for main dashboard-Based on user
    getColumns(value) {
        const payload = {
            "limit": 1,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": "table_columns_ordering",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [{ "table_name": value.table_name }, { "user_id": value.user_id }]
        };
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.httpOptions);
    }
    //Column list storage in database based on selection
    putColumns(value, tableName) {
        const payload = {
            "limit": 1,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": tableName,
            "sort_type": "ASC",
            "sort_field": "id",
            "values": [value]
        };
        return this.http.put(this.baseUrl + 'commonPut/', payload, this.httpOptions);
    }
    putSubValues(value, tableName) {
        const payload = {
            "limit": 1,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": tableName,
            "sort_type": "ASC",
            "sort_field": "id",
            "values": value
        };
        return this.http.put(this.baseUrl + 'commonPut/', payload, this.httpOptions);
    }
    commonPut(value, tableName) {
        const payload = {
            "limit": 1,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": tableName,
            "sort_type": "ASC",
            "sort_field": "id",
            "values": [value]
        };
        return this.http.put(this.baseUrl + 'commonPut/', payload, this.httpOptions);
    }
    //Get meta date values-for grid
    getMetaData(value) {
        const payload = {
            "limit": 300,
            "page": 0,
            "db_name": "tracking_tb",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                {
                    "table_name": value.table_name
                }
            ]
        };
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.httpOptions);
    }
    getMetaDataFields(value, field) {
        const payload = {
            "limit": 300,
            "page": 0,
            "fields": field,
            "db_name": "tracking_tb",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                {
                    "table_name": value.table_name
                }
            ]
        };
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.httpOptions);
    }
    getMetaFields(value, field) {
        const payload = {
            "limit": 300,
            "page": 0,
            "fields": field,
            "db_name": "tracking_tb",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [
                {
                    "table_name": value.table_name
                }
            ]
        };
        return this.http.post(this.baseUrl + 'commonGetMeta/', payload, this.httpOptions);
    }
    createSubValues(value, tableName) {
        const payload = {
            "table_name": tableName,
            "values": value
        };
        return this.http.post(this.baseUrl + 'commonInsert/', payload, this.httpOptions);
    }
    createValues(value, tableName) {
        const payload = {
            "table_name": tableName,
            "values": [value]
        };
        return this.http.post(this.baseUrl + 'commonInsert/', payload, this.httpOptions);
    }
    createWorkFlow(value, tableName) {
        const payload = {
            "table_name": tableName,
            "values": [value]
        };
        return this.http.post(this.baseUrl + 'workFlowInsert/', payload, this.httpOptions);
    }
    createFile(value) {
        return this.http.post(this.fileUrl, value, this.httpOptions);
    }
    sendMail(id) {
        console.log("rrrrrrrrrrrrrrrrr");
        return this.http.get("https://api.airliftnet.com/tracking/booking_file/40215?action=mail&file_type=isf", this.httpOptions);
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
    //upload File function
    uploadFile(event) {
        return new Promise((resolve, reject) => {
            if (event.target.files) {
                const toBase64 = file => new Promise((resolve, reject) => {
                    let response = {
                        file_name: file.name.split('.').shift(),
                        file_extension: file.name.split('.').pop(),
                        file_data: '',
                        file_type: file.type
                    };
                    const fsize = file.size;
                    const round_fileSize = Math.round((fsize / 1024));
                    if (round_fileSize > 5120) {
                        this.showSnackbar('Plese Upload File under 5Mb', ['warning-growl']);
                        reject('size error');
                    }
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        response.file_data = reader.result;
                        resolve(response);
                    };
                    reader.onerror = error => reject(error);
                });
                const promiseArray = [];
                for (let i = 0; i < event.target.files.length; i++) {
                    const file = event.target.files[i];
                    const type = file.type;
                    promiseArray.push(toBase64(file));
                }
                Promise.all(promiseArray).then((response) => {
                    resolve(response);
                });
            }
        });
    }
    //Snack bar -Show alerts
    showSnackbar(messages, classes) {
        const message = messages || 'Snack Bar opened.';
        const actionButtonLabel = 'Close';
        const action = true;
        const setAutoHide = true;
        const autoHide = 2000;
        const horizontalPosition = 'end';
        const verticalPosition = 'top';
        const addExtraClass = true;
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        config.panelClass = classes ? classes : undefined;
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    }
    showSnackbarUnhide(messages, classes) {
        const message = messages || 'Snack Bar opened.';
        const actionButtonLabel = 'Close';
        const action = true;
        const setAutoHide = true;
        // const autoHide: number = 2000;
        const horizontalPosition = 'end';
        const verticalPosition = 'top';
        const addExtraClass = true;
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        // config.duration = setAutoHide ? autoHide : 0;
        config.panelClass = classes ? classes : undefined;
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    }
    //Update password -Encryption
    updateUserPassword(value) {
        return this.http.post(this.baseUrl + 'login/update-password/', value, this.httpOptions);
    }
    checkColumnExists(field_name, table_name) {
        const payload = {
            "limit": 5,
            "page": 0,
            "db_name": "tracking_db",
            "fields": "name",
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": []
        };
        payload.filter.push({ 'name': field_name });
        payload.filter.push({ "table_name": table_name });
        return this.http.post(this.baseUrl + 'commonGet/', payload, this.httpOptions);
    }
    commonInsert(payload) {
        return this.http.post(this.baseUrl + 'commonInsert/', payload, this.httpOptions);
    }
    login(value) {
        return this.http.post(this.baseUrl + 'login/', value);
    }
    generateOtp(user_id) {
        return this.http.get(this.baseUrl + 'login/generate-otp/' + user_id);
    }
    verifyOtp(user_id, otp) {
        return this.http.get(this.baseUrl + 'login/verify-otp/' + user_id + '/' + otp);
    }
    validateEmail(value) {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(value);
    }
    previewForm(value) {
        return this.http.get(this.baseUrl + 'booking_file/' + value + '?action=preview&file_type=isf', this.httpOptions);
    }
    downLoadForm(value) {
        return this.http.get(this.baseUrl + 'booking_file/' + value + '?action=download&file_type=isf', this.httpOptions);
    }
    mailFileSend(payload) {
        return this.http.post(this.baseUrl + 'mail/sendMail/', payload, this.httpOptions);
    }
    isfMail(payload) {
        return this.http.post(this.baseUrl + 'isf_mail/', payload, this.httpOptions);
    }
    modifiedDate(date) {
        let d = date, dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        return dformat;
    }
    commonGetCount(data) {
        const payload = {
            "table_name": data.table_name,
            "limit": 1,
            "page": 0,
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": data.filter
        };
        return this.http.post(this.baseUrl + 'commonGetCount/', payload, this.httpOptions);
    }
    blobtoBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = error => reject(error);
        });
    }
    previewArrivalForm(value) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=preview', this.httpOptions);
    }
    downloadArrivalForm(value) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=download', this.httpOptions);
    }
    sendArrival(payload) {
        return this.http.post(this.baseUrl + 'arrival_notice/send_mail/', payload, this.httpOptions);
    }
    previewArrivalInvoiceForm(value) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=preview&invoice=true', this.httpOptions);
    }
    downloadArrivalInvoiceForm(value) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=download&invoice=true', this.httpOptions);
    }
    previewAdditionalInvoice(value, id) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=preview&invoice=false&additional_invoice_id=' + id, this.httpOptions);
    }
    downloadAdditionalInvoice(value, id) {
        return this.http.get(this.baseUrl + 'arrival_notice/' + value + '?action=download&invoice=false&additional_invoice_id=' + id, this.httpOptions);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "r7r6":
/*!*****************************************************!*\
  !*** ./src/app/atoms/send-mail/send-mail.module.ts ***!
  \*****************************************************/
/*! exports provided: SendMailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailModule", function() { return SendMailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _send_mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-mail.component */ "1FZ8");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");













class SendMailModule {
}
SendMailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SendMailModule });
SendMailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SendMailModule_Factory(t) { return new (t || SendMailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SendMailModule, { declarations: [_send_mail_component__WEBPACK_IMPORTED_MODULE_2__["SendMailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]], exports: [_send_mail_component__WEBPACK_IMPORTED_MODULE_2__["SendMailComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendMailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_send_mail_component__WEBPACK_IMPORTED_MODULE_2__["SendMailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
                ],
                exports: [_send_mail_component__WEBPACK_IMPORTED_MODULE_2__["SendMailComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "KWBv");
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaurds/auth.guard */ "a8Uh");






const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule),
    },
    {
        path: 'dashboard',
        component: _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"],
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: 'view/:',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main-view/main-view.module */ "C1jn")).then(m => m.MainViewModule),
            },
        ]
    },
    {
        path: 'view-all-process',
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | process-flow-editor-view-all-process-process-flow-module */[__webpack_require__.e("default~process-flow-editor-process-dashboard-process-dashboard-module~process-flow-editor-view-all-~d74b813e"), __webpack_require__.e("process-flow-editor-view-all-process-process-flow-module")]).then(__webpack_require__.bind(null, /*! ./process-flow-editor/view-all-process/process-flow.module */ "uzBL")).then(m => m.ProcessFlowModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'create-view/:',
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | create-view-create-view-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("create-view-create-view-module")]).then(__webpack_require__.bind(null, /*! ./create-view/create-view.module */ "TE7Q")).then(m => m.CreateViewModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'edit-view/:',
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | edit-view-edit-view-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("default~edit-view-edit-view-module~process-flow-editor-process-dashboard-process-dashboard-module"), __webpack_require__.e("edit-view-edit-view-module")]).then(__webpack_require__.bind(null, /*! ./edit-view/edit-view.module */ "/mxY")).then(m => m.EditViewModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'edit-process',
        redirectTo: 'view-all-process',
        pathMatch: 'full'
    },
    {
        path: 'edit-process/:',
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | process-flow-editor-process-dashboard-process-dashboard-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("default~edit-view-edit-view-module~process-flow-editor-process-dashboard-process-dashboard-module"), __webpack_require__.e("default~process-flow-editor-process-dashboard-process-dashboard-module~process-flow-editor-view-all-~d74b813e"), __webpack_require__.e("process-flow-editor-process-dashboard-process-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./process-flow-editor/process-dashboard/process-dashboard.module */ "o7Oj")).then(m => m.ProcessDashboardModule)
    },
    {
        path: 'reports/:',
        canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | reports-reports-module */ "reports-reports-module").then(__webpack_require__.bind(null, /*! ./reports/reports.module */ "uHdG")).then(m => m.ReportsModule)
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "whUY":
/*!**********************************************************!*\
  !*** ./src/app/data-transfer/data-transfer.component.ts ***!
  \**********************************************************/
/*! exports provided: DataTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferComponent", function() { return DataTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-transfer.service */ "TCIz");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "gbi4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function DataTransferComponent_div_4_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function DataTransferComponent_div_4_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const option_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onChange(option_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4.hbl_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.hbl_number, " ");
} }
function DataTransferComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hbl Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTransferComponent_div_4_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.focus(); })("input", function DataTransferComponent_div_4_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.getData($event.target.value); })("ngModelChange", function DataTransferComponent_div_4_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.value.hbl_number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataTransferComponent_div_4_mat_option_8_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTransferComponent_div_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.transferData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Transfer Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2)("ngModel", ctx_r0.value.hbl_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hblList);
} }
function DataTransferComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTransferComponent {
    constructor(dataTransferService, CommonService) {
        this.dataTransferService = dataTransferService;
        this.CommonService = CommonService;
        this.hblList = [];
        this.value = {
            id: '',
            hbl_number: ''
        };
        this.user = JSON.parse(localStorage.getItem('user_data'));
        this.loader = false;
    }
    ngOnInit() {
        // this.getData('CHN5');
    }
    getData(val) {
        console.log('HERE');
        const res = {
            hbl: val
        };
        this.dataTransferService.getRateData(res).subscribe((resp) => {
            this.hblList = resp;
        });
    }
    onChange(val) {
        console.log(val);
        this.value = val;
    }
    focus() { }
    transferData() {
        this.loader = true;
        console.log(this.user);
        if (!!this.user) {
            this.value.user_id = this.user.id;
        }
        setTimeout(() => {
            this.dataTransferService.postCrmtoTracking(this.value).subscribe((resp) => {
                this.loader = false;
                if (resp.code == 200) {
                    this.CommonService.showSnackbar('Data Transfered successfully', ['green-growl']);
                }
                else {
                    this.CommonService.showSnackbarUnhide('Failure,Data not Transfered, Please Try Again or Contact Admin', ['red-growl']);
                }
            }, (error) => {
                this.CommonService.showSnackbarUnhide('Failure,Data not Transfered, Please Try Again or Contact Admin', ['red-growl']);
            });
        }, 10);
    }
}
DataTransferComponent.ɵfac = function DataTransferComponent_Factory(t) { return new (t || DataTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_transfer_service__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
DataTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTransferComponent, selectors: [["app-data-transfer"]], decls: 6, vars: 2, consts: [[1, "wrapper"], [1, "header"], ["class", "container", 4, "ngIf"], ["class", "btn-container", 4, "ngIf"], [1, "container"], [1, "form-container"], [1, "label"], [1, "form-g"], ["type", "text", "placeholder", "Enter HBL NO", 1, "input-t", 3, "matAutocomplete", "ngModel", "focus", "input", "ngModelChange"], ["autosetect", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "btn-container"], [1, "mat-ripple", "btn", "cursor", 3, "click"], [3, "value", "onSelectionChange"], ["src", "/assets/img/Loading_gif.gif", 2, "height", "85px", "width", "85px"]], template: function DataTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTransferComponent_div_4_Template, 12, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataTransferComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: ["input[_ngcontent-%COMP%]{\n  padding: 2px 8px;\n  border: solid 1px #cacaca94;\n}\ninput[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n.input-t[_ngcontent-%COMP%] {\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 3px;\n  padding: 7px;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 32px !important;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.header[_ngcontent-%COMP%]{\n    padding: 0px 0px 2px 0px;\n    color: #707070;\n    font-size: 16px;\n    font-weight: 500;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  }\n.label[_ngcontent-%COMP%] {\n    margin-top:5px;\n    color: var(--charcoal-grey);\n}\n.btn-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  }\n.btn[_ngcontent-%COMP%] {\n    border: 0px;\n    background-image: linear-gradient(to bottom, #00a865, #1c9a91);\n    color: #fff;\n    float: right;\n    border-radius: 2px;\n    width: 24%;\n    font-size: 12px;\n    padding: 10px;\n    margin: 5px;\n}\n.loader[_ngcontent-%COMP%]{\n    display: flex;align-items: center;justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10cmFuc2Zlci9kYXRhLXRyYW5zZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixpREFBaUQ7QUFDbkQ7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7RUFDN0M7QUFDQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUVGO0lBQ0ksV0FBVztJQUNYLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUI7QUFDN0QiLCJmaWxlIjoic3JjL2FwcC9kYXRhLXRyYW5zZmVyL2RhdGEtdHJhbnNmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXR7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E5NDtcbn1cbmlucHV0OmhvdmVyIHtcbiAgLyogYm94LXNoYWRvdzogMHB4IDBweCAwNXB4ICM0NjVkZWY7ICovXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5pbnB1dC10IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbi5oZWFkZXJ7XG4gICAgcGFkZGluZzogMHB4IDBweCAycHggMHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSk7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4uYnRuIHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDBhODY1LCAjMWM5YTkxKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAyNCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4ubG9hZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-transfer',
                templateUrl: './data-transfer.component.html',
                styleUrls: ['./data-transfer.component.css']
            }]
    }], function () { return [{ type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map