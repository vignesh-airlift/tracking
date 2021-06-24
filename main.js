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
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../atoms/send-mail/send-mail.component */ "1FZ8");






















const _c0 = ["menuFilterTrigger"];
function TableViewComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.redirectCreateView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.goToProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.gotToReports(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_20_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_20_mat_option_13_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const item_r54 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.selectSummarizeCountField(item_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r54.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r54 == null ? null : item_r54.field_title, " ");
} }
function TableViewComponent_div_0_div_20_div_14_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const lastcall_r60 = ctx_r62.last;
    const i_r59 = ctx_r62.index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r61.testt(lastcall_r60, i_r59));
} }
function TableViewComponent_div_0_div_20_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_14_div_1_span_1_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.lastLoop == 1);
} }
function TableViewComponent_div_0_div_20_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_14_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.summarizeCountInfo);
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function TableViewComponent_div_0_div_20_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_20_div_15_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const item_r64 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r67.selectSummarizeCountValue(item_r64.value, item_r64.value_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    const i_r65 = ctx.index;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r64.value == "" ? "sum-dd-h" : "", " cursor sum-c-v-f");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r63.sumColor[i_r65]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r64.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r64.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r64.value == ctx_r63.summarizeCountValue || item_r64.value_id == ctx_r63.summarizeCountValue ? "sum-radio-i-s" : "sum-radio-i");
} }
function TableViewComponent_div_0_div_20_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_20_div_15_div_1_Template, 11, 12, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.summarizeCountInfo);
} }
function TableViewComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "format_list_numbered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Summarize Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_0_div_20_Template_input_input_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.getAddFields($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", null, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_div_0_div_20_mat_option_13_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_0_div_20_div_14_Template, 2, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableViewComponent_div_0_div_20_div_15_Template, 2, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r19.tableInfo == null ? null : ctx_r19.tableInfo.summarize_count[ctx_r19.userData.id] == null ? null : ctx_r19.tableInfo.summarize_count[ctx_r19.userData.id].f_title)("matAutocomplete", _r50)("value", ctx_r19.tableInfo == null ? null : ctx_r19.tableInfo.summarize_count[ctx_r19.userData.id] == null ? null : ctx_r19.tableInfo.summarize_count[ctx_r19.userData.id].f_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.filterAddField);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.summarizeCountInfo.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.summarizeCountInfo.length && ctx_r19.sumlength == ctx_r19.summarizeCountInfo.length);
} }
function TableViewComponent_div_0_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 111);
} }
function TableViewComponent_div_0_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r71[ctx_r24.selectedSearchField.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r71[ctx_r24.selectedSearchField.name], " ");
} }
function TableViewComponent_div_0_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_42_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r72.selectedSearchField.name = ""; ctx_r72.selectSearchValue = ""; return ctx_r72.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.selectedSearchField.display_value);
} }
function TableViewComponent_div_0_mat_icon_44_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_icon_44_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r74.summarizeCountHide(ctx_r74.tableInfo == null ? null : ctx_r74.tableInfo.summarize_count[ctx_r74.userData.id] == null ? null : ctx_r74.tableInfo.summarize_count[ctx_r74.userData.id].hide); return ctx_r74.sumCountHide = "yes"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_mat_icon_45_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_mat_icon_45_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r76.summarizeCountHide(ctx_r76.tableInfo == null ? null : ctx_r76.tableInfo.summarize_count[ctx_r76.userData.id] == null ? null : ctx_r76.tableInfo.summarize_count[ctx_r76.userData.id].hide); return ctx_r76.sumCountHide = "no"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [5, 10, 25, 50, 100, 150, 200]; };
function TableViewComponent_div_0_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-paginator", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TableViewComponent_div_0_div_46_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r78.pageSize = $event.pageSize; ctx_r78.page = $event.pageIndex; ctx_r78.getBody.limit = $event.pageSize; ctx_r78.getBody.page = $event.pageIndex; return ctx_r78.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r28.count)("pageSize", ctx_r28.pageSize)("pageIndex", ctx_r28.getBody.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
} }
function TableViewComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_51_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_51_th_3_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.selectAll == true ? ctx_r87.selectAll = false : ctx_r87.selectAll = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_51_td_4_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_51_td_4_mat_icon_5_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const row_r89 = ctx_r94.$implicit; const i_r90 = ctx_r94.index; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r93.UpdateBookMark(row_r89.id, row_r89.bookmarks, i_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_51_td_4_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_51_td_4_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const row_r89 = ctx_r97.$implicit; const i_r90 = ctx_r97.index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r96.UpdateBookMark(row_r89.id, row_r89.bookmarks, i_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_51_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_51_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const row_r89 = ctx.$implicit; return row_r89.checked = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_51_td_4_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const row_r89 = ctx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r101.redirectEditView(row_r89.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_51_td_4_mat_icon_5_Template, 2, 0, "mat-icon", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_0_div_51_td_4_mat_icon_6_Template, 2, 0, "mat-icon", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", row_r89.checked || ctx_r81.selectAll == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.bookmark.includes(row_r89.id) && ctx_r81.routeId.id == 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r81.bookmark.includes(row_r89.id) && ctx_r81.routeId.id == 307);
} }
function TableViewComponent_div_0_div_51_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", column_r102 == null ? null : column_r102.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mat-sort-header", column_r102 == null ? null : column_r102.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r102 == null ? null : column_r102.field_title, " ");
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r107[column_r102 == null ? null : column_r102.name], "");
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r107[column_r102 == null ? null : column_r102.name], "MMM d,y"));
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r107[column_r102 == null ? null : column_r102.name], "MMM d, y, h:mm:ss a"));
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "********");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r107[column_r102 == null ? null : column_r102.name] == 1 ? "Yes" : "No");
} }
function TableViewComponent_div_0_div_51_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_51_ng_container_5_td_2_span_1_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_51_ng_container_5_td_2_span_2_Template, 3, 4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_51_ng_container_5_td_2_span_3_Template, 3, 4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_51_ng_container_5_td_2_span_4_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_51_ng_container_5_td_2_span_5_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r102 == null ? null : column_r102.field_sub_type) != "date" && (column_r102 == null ? null : column_r102.field_sub_type) != "datetime-local" && (column_r102 == null ? null : column_r102.field_sub_type) != "password" && (column_r102 == null ? null : column_r102.field_sub_type) != "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r102 == null ? null : column_r102.field_sub_type) == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r102 == null ? null : column_r102.field_sub_type) == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r102 == null ? null : column_r102.field_sub_type) == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (column_r102 == null ? null : column_r102.field_sub_type) == "switch");
} }
function TableViewComponent_div_0_div_51_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_51_ng_container_5_th_1_Template, 2, 3, "th", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_51_ng_container_5_td_2_Template, 6, 5, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r102 == null ? null : column_r102.name);
} }
function TableViewComponent_div_0_div_51_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 148);
} }
function TableViewComponent_div_0_div_51_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_51_td_8_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const row_r122 = ctx.$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r123.rowId = row_r122.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function TableViewComponent_div_0_div_51_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 151);
} }
function TableViewComponent_div_0_div_51_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 152);
} }
function TableViewComponent_div_0_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TableViewComponent_div_0_div_51_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r126.getBody.sort_type = $event.direction; ctx_r126.getBody.sort_field = $event.active; return ctx_r126.getFilterValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_51_th_3_Template, 3, 0, "th", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_51_td_4_Template, 7, 3, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_51_ng_container_5_Template, 3, 1, "ng-container", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableViewComponent_div_0_div_51_th_7_Template, 1, 0, "th", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_div_0_div_51_td_8_Template, 4, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_div_0_div_51_tr_9_Template, 1, 0, "tr", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_div_0_div_51_tr_10_Template, 1, 0, "tr", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r30.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.metaData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r30.columnsToDisplay1)("matHeaderRowDefSticky", ctx_r30.itsSticky);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r30.columnsToDisplay1);
} }
function TableViewComponent_div_0_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "circle", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "circle", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "ellipse", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_55_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_55_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r128.ExportA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_56_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_56_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r130.BookMarkA = 0; return ctx_r130.deleteBookMarkFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_57_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_57_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r132.NotesA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_58_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_58_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r134.TaskA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_59_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_59_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r136.MailA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_60_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_60_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r138.ExportA = 1; return ctx_r138.ExportTOExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_61_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_61_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r140.BookMarkA = 1; return ctx_r140.bookMarkFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_62_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_62_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r142.NotesA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_63_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_63_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r144.TaskA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_64_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_64_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r146.MailA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_65_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_65_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r148.MoreMenuA = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_span_66_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_span_66_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r150.MoreMenuA = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_div_0_button_12_Template, 4, 0, "button", 45);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r152.openFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TableViewComponent_div_0_span_27_Template, 1, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "border_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableViewComponent_div_0_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r154.selectSearchValue = $event; })("input", function TableViewComponent_div_0_Template_input_input_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.getSearchValues($event.target.value); })("click", function TableViewComponent_div_0_Template_input_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r156.selectedSearchField.name == "" ? _r22.openMenu() : _r22.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-autocomplete", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_0_Template_mat_autocomplete_optionSelected_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r157.selectSearchValue = $event.option.value; return ctx_r157.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TableViewComponent_div_0_mat_option_39_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TableViewComponent_div_0_div_42_Template, 5, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TableViewComponent_div_0_mat_icon_44_Template, 2, 0, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableViewComponent_div_0_mat_icon_45_Template, 2, 0, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TableViewComponent_div_0_div_46_Template, 2, 5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TableViewComponent_div_0_div_47_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TableViewComponent_div_0_div_51_Template, 11, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TableViewComponent_div_0_div_52_Template, 53, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TableViewComponent_div_0_span_55_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TableViewComponent_div_0_span_56_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TableViewComponent_div_0_span_57_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TableViewComponent_div_0_span_58_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TableViewComponent_div_0_span_59_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TableViewComponent_div_0_span_60_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TableViewComponent_div_0_span_61_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TableViewComponent_div_0_span_62_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TableViewComponent_div_0_span_63_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TableViewComponent_div_0_span_64_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TableViewComponent_div_0_span_65_Template, 3, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TableViewComponent_div_0_span_66_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8)("ngModel", ctx_r0.selectSearchValue)("matAutocomplete", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedSearchField.name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sumCountHide == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sumCountHide == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.metaData1);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_mat_option_14_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const item_r158 = ctx.$implicit; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.selectField(item_r158); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r158.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r158 == null ? null : item_r158.field_title, " ");
} }
function TableViewComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 238);
} }
function TableViewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_19_div_1_Template, 1, 0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_19_Template_mat_checkbox_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const col_r161 = ctx.$implicit; const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.setCol($event.checked, col_r161); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r161 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r7.hideColumns.includes(col_r161) ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r161);
} }
function TableViewComponent_span_31_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_span_31_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169); const item_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r167.searchFieldSelected(item_r165); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r165 == null ? null : item_r165.field_title, " ");
} }
function TableViewComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_span_31_button_1_Template, 2, 1, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r165 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(item_r165 == null ? null : item_r165.name));
} }
function TableViewComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_mat_option_56_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173); const item_r171 = ctx.$implicit; const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r172.selectField(item_r171); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r171.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r171 == null ? null : item_r171.field_title, " ");
} }
function TableViewComponent_div_57_div_1_div_8_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemvalue_r190 = ctx.$implicit;
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemvalue_r190[ctx_r189.filterValueTemp[item_r175] == null ? null : ctx_r189.filterValueTemp[item_r175].fields]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemvalue_r190[ctx_r189.filterValueTemp[item_r175] == null ? null : ctx_r189.filterValueTemp[item_r175].fields], " ");
} }
function TableViewComponent_div_57_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_57_div_1_div_8_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r192.getAddValues(ctx_r192.filterValueTemp[item_r175] == null ? null : ctx_r192.filterValueTemp[item_r175].fields, $event.target.value); })("focus", function TableViewComponent_div_57_div_1_div_8_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r195.filterAddValue = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 64, 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_57_div_1_div_8_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r196.selectValue($event.option.value, item_r175); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_57_div_1_div_8_mat_option_6_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r177.filterAddValue);
} }
function TableViewComponent_div_57_div_1_div_9_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_9_mat_option_2_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202); const option_r199 = ctx.$implicit; const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r200.selectValue(option_r199, item_r175); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r199 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r199, " ");
} }
function TableViewComponent_div_57_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_57_div_1_div_9_mat_option_2_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r178.filterValueTemp[item_r175].option);
} }
function TableViewComponent_div_57_div_1_div_10_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_10_mat_option_6_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208); const option_r206 = ctx.$implicit; const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r207.selectAdvancedValue(option_r206[ctx_r207.filterValueTemp[item_r175] == null ? null : ctx_r207.filterValueTemp[item_r175].item == null ? null : ctx_r207.filterValueTemp[item_r175].item.parent_table_field], item_r175, option_r206.id, ctx_r207.filterValueTemp[item_r175] == null ? null : ctx_r207.filterValueTemp[item_r175].item == null ? null : ctx_r207.filterValueTemp[item_r175].item.parent_table_field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r206 = ctx.$implicit;
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r206[ctx_r205.filterValueTemp[item_r175] == null ? null : ctx_r205.filterValueTemp[item_r175].item == null ? null : ctx_r205.filterValueTemp[item_r175].item.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r206[ctx_r205.filterValueTemp[item_r175] == null ? null : ctx_r205.filterValueTemp[item_r175].item == null ? null : ctx_r205.filterValueTemp[item_r175].item.parent_table_field], " ");
} }
function TableViewComponent_div_57_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_57_div_1_div_10_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r211.getDropdownValues(ctx_r211.filterValueTemp[item_r175], $event.target.value); })("focus", function TableViewComponent_div_57_div_1_div_10_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r214.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_57_div_1_div_10_mat_option_6_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r179.dropdownSearch);
} }
function TableViewComponent_div_57_div_1_div_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemvalue_r217 = ctx.$implicit;
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemvalue_r217[ctx_r216.filterValueTemp[item_r175] == null ? null : ctx_r216.filterValueTemp[item_r175].fields]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemvalue_r217[ctx_r216.filterValueTemp[item_r175] == null ? null : ctx_r216.filterValueTemp[item_r175].fields], " ");
} }
function TableViewComponent_div_57_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_57_div_1_div_11_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r219.getAddValues(ctx_r219.filterValueTemp[item_r175] == null ? null : ctx_r219.filterValueTemp[item_r175].fields, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", 64, 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_57_div_1_div_11_Template_mat_autocomplete_optionSelected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r222.selectValue($event.option.value, item_r175); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_57_div_1_div_11_mat_option_4_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r180.filterAddValue);
} }
function TableViewComponent_div_57_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function TableViewComponent_div_57_div_1_div_12_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r225.formatDate(item_r175, $event.target.value); })("click", function TableViewComponent_div_57_div_1_div_12_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r224.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_12_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return !!_r224 ? _r224.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r224);
} }
function TableViewComponent_div_57_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_57_div_1_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r232); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r230.formatDateTime(item_r175, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_57_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_57_div_1_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r233.selectValue($event.target.value, item_r175); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_57_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_16_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const i_r237 = ctx.index; const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r238.deleteFieldValues(item_r175, i_r237); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r236 = ctx.$implicit;
    const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (val_r236 == null ? null : val_r236.id) ? val_r236[ctx_r184.filterValueTemp[item_r175] == null ? null : ctx_r184.filterValueTemp[item_r175].item == null ? null : ctx_r184.filterValueTemp[item_r175].item.parent_table_field] : val_r236, " ");
} }
function TableViewComponent_div_57_div_1_div_26_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_26_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245); const itemc_r243 = ctx.$implicit; const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r244.filterValueTemp[item_r175].condition = itemc_r243.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r243 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r243.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r243.field, " ");
} }
function TableViewComponent_div_57_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_57_div_1_div_26_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r186.operation);
} }
function TableViewComponent_div_57_div_1_div_27_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_div_27_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const itemc_r248 = ctx.$implicit; const item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r249.filterValueTemp[item_r175].condition = itemc_r248.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r248 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r248.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r248.field, " ");
} }
function TableViewComponent_div_57_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_57_div_1_div_27_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r187.operationNum);
} }
function TableViewComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_div_57_div_1_div_8_Template, 7, 2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableViewComponent_div_57_div_1_div_9_Template, 3, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_div_57_div_1_div_10_Template, 7, 2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_div_57_div_1_div_11_Template, 5, 2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_div_57_div_1_div_12_Template, 6, 1, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_div_57_div_1_div_13_Template, 2, 0, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_57_div_1_div_14_Template, 2, 0, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_div_57_div_1_div_16_Template, 4, 1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableViewComponent_div_57_div_1_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const item_r175 = ctx.$implicit; const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r252.filterValueTemp[item_r175].condition = $event; })("click", function TableViewComponent_div_57_div_1_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return _r185.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 252, 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TableViewComponent_div_57_div_1_div_26_Template, 2, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TableViewComponent_div_57_div_1_div_27_Template, 2, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const item_r175 = ctx.$implicit; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r255.filterValueTemp[item_r175].operator = "OR"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const item_r175 = ctx.$implicit; const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r256.filterValueTemp[item_r175].operator = "AND"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "AND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_57_div_1_Template_mat_icon_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const filterIndex_r176 = ctx.index; const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r257.deleteFilterRow(filterIndex_r176); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r175 = ctx.$implicit;
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "TEXT" || (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "VARCHAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "SELECT" && (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].table_id) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "SELECT" && (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].table_id) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "INT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "DATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "DATETIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].type) == "TIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r174.filterValueTemp[item_r175].condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r174.fieldType == "VARCHAR" || ctx_r174.fieldType == "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r174.fieldType != "VARCHAR" && ctx_r174.fieldType != "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].operator) == "OR" ? "f-or-and-btn-c" : "f-or-and-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx_r174.filterValueTemp[item_r175] == null ? null : ctx_r174.filterValueTemp[item_r175].operator) == "AND" ? "f-or-and-btn-c" : "f-or-and-btn");
} }
function TableViewComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_57_div_1_Template, 37, 18, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.filtercount);
} }
function TableViewComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-send-mail", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMail", function TableViewComponent_div_63_Template_app_send_mail_closeMail_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r258.sendMailAtom = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataTableInfo", ctx_r15.routeId)("isAddField", false)("airliftDomains", true)("header", "Report Mail")("isFrom", "table-report")("fileList", ctx_r15.table_record_xlsx);
} }
class TableViewComponent {
    constructor(CommonService, aRouter, route) {
        this.CommonService = CommonService;
        this.aRouter = aRouter;
        this.route = route;
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
        this.columnsOrder = [];
        this.hideColumns = [];
        this.selectedSearchField = { name: '', display_value: '' };
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
        this.filtercount = [];
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
    }
    ngOnInit() {
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
                // console.log("dddddddd", this.routeId)
                this.tableId = this.routeId.id;
                this.getBody.table_name = this.routeId.tablename;
                this.getBody.data_table_id = this.routeId.id;
                this.getProcessPermission();
                this.getTableData();
                this.getColumns();
                // this.getFilter()
            }
        });
    }
    getProcessPermission() {
        let body = { table_name: "process_permission", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ "designation_id": this.designationId }, { "table_id": this.routeId.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.processPermission = response.info[0];
        });
    }
    getTableData() {
        let body = { table_name: "meta_table_data", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ id: this.tableId }] };
        this.CommonService.getValues(body).subscribe((response) => {
            if (response.statusCode == 200) {
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
    getColumns() {
        this.workFlow = [];
        let value = { table_name: this.routeId.tablename, "user_id": 2 };
        this.CommonService.getColumns(value).subscribe((response) => {
            if (!!response.info.length) {
                this.columnsInfo = response.info[0];
                if (response.info[0].fields != "") {
                    this.columnsOrder = response.info[0].fields.split(',');
                }
                if (response.info[0].hide_fields != "") {
                    this.hideColumns = response.info[0].hide_fields.split(',');
                }
                this.getMetaData();
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
    putColumns() {
        let col = this.columnsOrder.toString();
        let hideCol = this.hideColumns.toString();
        let tableName = "table_columns_ordering";
        let value = { "id": this.columnsInfo.id, "fields": col, "hide_fields": hideCol };
        this.CommonService.putColumns(value, tableName).subscribe((response) => {
            this.getMetaData();
        });
    }
    getMetaData() {
        this.tableSniper = 0;
        this.metaData1 = [];
        this.columnsToDisplay1 = ["select"];
        let value = { table_name: this.routeId.tablename };
        this.CommonService.getMetaData(value).subscribe((response) => {
            // this.metaData1 = response.info;
            let access = this.userData.id + "_access";
            for (let j = 0; j < response.info.length; j++) {
                if (response.info[j].field_sub_type != "duplicate" && response.info[j][access] != 3) {
                    this.metaData1.push(response.info[j]);
                }
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
            this.getWorkFlow();
            let temp = [];
            for (let i = 0; i < this.columnsOrder.length; i++) {
                for (let j = 0; j < this.metaData1.length; j++) {
                    if (this.columnsOrder[i] == this.metaData1[j].name && !this.hideColumns.includes(this.metaData1[j].name)) {
                        temp.push(this.metaData1[j]);
                    }
                }
            }
            this.metaData1 = temp;
            for (let i = 0; i < this.metaData1.length; i++) {
                this.columnsToDisplay1.push(this.metaData1[i].name);
            }
            this.columnsToDisplay1.push("menuIcon");
        });
        // console.log("meta", this.metaData1)
    }
    getWorkFlow() {
        let body = { table_name: "workflow_process", limit: 2, page: 0, user_id: this.userData.id, sort_type: "ASC", sort_field: "id", filter: [{ "table_id": this.routeId.id }] };
        this.CommonService.getWorkFlow(body).subscribe((response) => {
            if (response.statusCode == 200) {
                if (!!response.info.length) {
                    this.workFlow.push(response.info[0]);
                    if (this.workFlow[0].fields != "") {
                        this.workFlow[0].fields = JSON.parse(this.workFlow[0].fields);
                    }
                    if (this.workFlow[0].action != "") {
                        this.workFlow[0].action = JSON.parse(this.workFlow[0].action);
                    }
                    if (this.workFlow[0].decision != "") {
                        // console.log("enter", this.workFlow[0].decision)
                        this.workFlow[0].decision = JSON.parse(this.workFlow[0].decision);
                    }
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
                this.filterId = response.info[(len - 1)].id;
                this.filterValueTemp = this.filterValue;
                console.log("fffffffff", this.filterId);
                let countKey = Object.keys(this.filterValueTemp).length;
                this.getFilterValues();
                for (let i = 0; i < countKey; i++) {
                    this.filtercount.push(i);
                }
                for (let i = 0; i < countKey; i++) {
                    let keyslen = Object.keys(this.filterValueTemp[i]).length;
                    keyslen = keyslen - 6;
                    this.filterValueTemp[i]['value'] = [];
                    for (let j = 1; j <= keyslen; j++) {
                        if (this.filterValueTemp[i].fields == "bookmarks") {
                            this.booKmarkAdd = 1;
                        }
                        this.filterValueTemp[i].value.push(this.filterValueTemp[i][j]);
                        delete this.filterValueTemp[i][j];
                    }
                }
                // console.log("filter", this.filtercount, this.filterValueTemp)
            }
            else {
                this.getFilterValues();
            }
        });
    }
    deleteFieldValues(item, i) {
        this.filterValueTemp[item].value.splice(i, 1);
    }
    deleteFilterRow(item) {
        delete this.filterValueTemp[item];
        this.filtercount.splice(item, 1);
    }
    // deleteRow() {
    //   this.tableLoaded = true;
    //   let temp = { "id": this.rowId, "tablename": this.routeId.tablename }
    //   this.CommonService.commonDelete(temp).subscribe((response: any) => {
    //     if (response.statusCode == 200) {
    //       this.getFilterValues();
    //     }
    //   });
    // }
    getSumarizeCount(item) {
        let body = {
            "field_name": item.name,
            "table_name": item.table,
            "parent_table_field": item.t_field,
            "parent_table_name": item.t_name,
            "field_sub_type": item.sub_type,
            "db_name": item.d_name
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
                // this.getFilterValues();
                // console.log("sum", response)
            }
        });
    }
    selectSummarizeCountField(item) {
        // console.log("enter", item)
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
        // }
    }
    summarizeCountUpdate(item) {
        let body = {
            id: this.tableInfo.id,
            summarize_count: JSON.stringify(item)
        };
        this.CommonService.commonPut(body, "meta_table_data").subscribe((response) => {
            if (response.statusCode == 200) {
                // this.getFilterValues();
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
            // console.log("ssssssss", this.tableInfo.summarize_count[this.userData.id])
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
        // console.log("sss", item, id)
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
        this.filterValueTemp[len] = { condition: "Find In Set", fields: "bookmarks", operator: "AND", value: "", type: "VARCHAR", item: "", option: "", table_id: "307" };
        this.filterValueTemp[len].value = [];
        this.filterValueTemp[len].value.push(this.userData.id);
        this.booKmarkAdd = 1;
        if (this.filtercount.length) {
            console.log("zzzzzz");
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
            if (value == "reset") {
                let temp;
                this.filtercount = [];
                this.filterValue = temp;
                this.filterValueTemp = temp;
                this.getFilter();
            }
            else {
                this.filterApply();
            }
        });
        this.closeFilter();
    }
    filterApply() {
        var _a;
        this.loaded = "false";
        this.filterValue = this.filterValueTemp;
        for (let i = 0; i < this.filtercount.length; i++) {
            if (this.filterValue[this.filtercount[i]].hasOwnProperty("value")) {
                for (let j = 1; j <= this.filterValue[this.filtercount[i]].value.length; j++) {
                    console.log("nn", this.filterValue[this.filtercount[i]], this.filtercount[i]);
                    if (this.filterValue[this.filtercount[i]].item != "" && ((_a = this.filterValue[this.filtercount[i]].item) === null || _a === void 0 ? void 0 : _a.parent_table_id) != 0 && this.filterValue[this.filtercount[i]].value[(j - 1)].hasOwnProperty("id")) {
                        this.filterValue[this.filtercount[i]][j] = this.filterValue[this.filtercount[i]].value[(j - 1)].id;
                    }
                    else {
                        this.filterValue[this.filtercount[i]][j] = this.filterValue[this.filtercount[i]].value[(j - 1)];
                        console.log(j, this.filterValue[this.filtercount[i]][j]);
                    }
                }
                delete this.filterValue[this.filtercount[i]]["value"];
                delete this.filterValue[this.filtercount[i]]["item"];
            }
        }
        console.log("ooooo", this.filterValue, this.filterValueTemp);
        // this.getFilterValues();
        this.putFilter(this.filterValue);
    }
    putFilter(value) {
        let tempkey = Object.keys(value);
        let tempValue = {};
        for (let i = 0; i < tempkey.length; i++) {
            tempValue[i] = value[tempkey[i]];
        }
        this.loaded = "false";
        let temp2 = tempValue;
        let temp3 = JSON.stringify(temp2);
        let temp = {
            "user_id": this.userData.id,
            "table_id": this.routeId.id,
            "filter_json": temp3
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
            // console.log("enterwwwww", item, this.sumColor)
            this.lastLoop = 2;
            this.sumlength = this.summarizeCountInfo.length;
        }
    }
    getFilterValues(from) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        console.log("gettsss", this.getBody);
        // this.tableSniper = 0;
        // console.log("workflow", this.workFlow[0])
        let cot = "COUNT(*)";
        if (this.selectedSearchField.name != '') {
            this.getBody["search"] = [{ [this.selectedSearchField.name]: this.selectSearchValue }];
        }
        if (!!this.filterValue) {
            let len = Object.keys(this.filterValue).length;
            let temp = [];
            for (let i = 0; i < len; i++) {
                temp.push(this.filterValue[i]);
            }
            this.getBody["filter"] = temp;
        }
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
                    };
                    temp2[1] = this.tableInfo.summarize_count[this.userData.id].value;
                    this.getBody["filter"].push(temp2);
                }
            }
        }
        if (((_a = this.workFlow[0]) === null || _a === void 0 ? void 0 : _a.fields.length) !== 0) {
            if (!this.getBody.hasOwnProperty("filter")) {
                this.getBody["filter"] = [];
            }
            for (let i = 0; i < ((_b = this.workFlow[0]) === null || _b === void 0 ? void 0 : _b.fields.length); i++) {
                // this.workFlow[0].fields[i].condition
                let temp2 = {
                    condition: this.workFlow[0].fields[i].criteria,
                    fields: this.workFlow[0].fields[i].name,
                    operator: this.workFlow[0].fields[i].operation,
                    option: [],
                    table_id: "",
                    type: this.workFlow[0].fields[i].type,
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
        if (((_c = this.workFlow[0]) === null || _c === void 0 ? void 0 : _c.decision) != "" && !this.workFlow[0].hasOwnProperty("decision")) {
            if (!this.getBody.hasOwnProperty("filter")) {
                this.getBody["filter"] = [];
            }
            if ((_d = this.workFlow[0]) === null || _d === void 0 ? void 0 : _d.decision.hasOwnProperty(this.userData.id)) {
                let keys = Object.keys((_e = this.workFlow[0]) === null || _e === void 0 ? void 0 : _e.decision[this.userData.id]);
                for (let i = 0; i < keys.length; i++) {
                    let temp2 = {
                        condition: (_f = this.workFlow[0]) === null || _f === void 0 ? void 0 : _f.decision[this.userData.id][keys[i]].condition,
                        fields: (_g = this.workFlow[0]) === null || _g === void 0 ? void 0 : _g.decision[this.userData.id][keys[i]].fields,
                        operator: (_h = this.workFlow[0]) === null || _h === void 0 ? void 0 : _h.decision[this.userData.id][keys[i]].operator,
                        option: [],
                        table_id: "",
                        type: (_j = this.workFlow[0]) === null || _j === void 0 ? void 0 : _j.decision[this.userData.id][keys[i]].type,
                    };
                    if ((_l = (_k = this.workFlow[0]) === null || _k === void 0 ? void 0 : _k.decision[this.userData.id][keys[i]]) === null || _l === void 0 ? void 0 : _l.value_id.length) {
                        for (let j = 0; j < ((_m = this.workFlow[0]) === null || _m === void 0 ? void 0 : _m.decision[this.userData.id][keys[i]].value_id.length); j++) {
                            temp2[j] = (_o = this.workFlow[0]) === null || _o === void 0 ? void 0 : _o.decision[this.userData.id][keys[i]].value_id[j];
                        }
                        (_p = this.workFlow[0]) === null || _p === void 0 ? true : delete _p.decision[this.userData.id][keys[i]].value_id;
                        (_q = this.workFlow[0]) === null || _q === void 0 ? true : delete _q.decision[this.userData.id][keys[i]].value;
                    }
                    else if ((_r = this.workFlow[0]) === null || _r === void 0 ? void 0 : _r.decision[this.userData.id][keys[i]].value.length) {
                        for (let j = 0; j < ((_s = this.workFlow[0]) === null || _s === void 0 ? void 0 : _s.decision[this.userData.id][keys[i]].value.length); j++) {
                            temp2[j] = (_t = this.workFlow[0]) === null || _t === void 0 ? void 0 : _t.decision[this.userData.id][keys[i]].value[j];
                        }
                        (_u = this.workFlow[0]) === null || _u === void 0 ? true : delete _u.decision[this.userData.id][keys[i]].value_id;
                        (_v = this.workFlow[0]) === null || _v === void 0 ? true : delete _v.decision[this.userData.id][keys[i]].value;
                    }
                    else {
                        temp2[1] = '';
                        temp2[2] = null;
                        (_w = this.workFlow[0]) === null || _w === void 0 ? true : delete _w.decision[this.userData.id][keys[i]].value_id;
                        (_x = this.workFlow[0]) === null || _x === void 0 ? true : delete _x.decision[this.userData.id][keys[i]].value;
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
        this.CommonService.getFiterTableValues(this.getBody).subscribe((response) => {
            this.getBody = { table_name: this.routeId.tablename, data_table_id: this.routeId.id, limit: this.pageSize, page: this.page, sort_type: "DESC", sort_field: "id" };
            // this.filterValue = '';
            // this.filterValueTemp = '';
            this.data1 = response.info;
            let check = Object.keys(this.checkListKey);
            for (let i = 0; i < this.data1.length; i++) {
                if (this.data1[i].bookmarks != null && this.data1[i].bookmarks != '') {
                    this.data1[i].bookmarks = this.data1[i].bookmarks.split(",");
                    if (Array.isArray(this.data1[i].bookmarks)) {
                        console.log("enterww", this.data1[i].bookmarks);
                        // this.data1[i].bookmarks = this.data1[i].bookmarks.split("");
                    }
                    let temp = '' + this.userData.id;
                    if (this.data1[i].bookmarks.includes(temp)) {
                        console.log("enter");
                        this.bookmark.push(this.data1[i].id);
                    }
                    this.data1[i].bookmarks = this.data1[i].bookmarks.toString();
                    console.log("ssssssssss", this.data1[i], this.bookmark);
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
        });
        // console.log("filter", this.filtercount, this.filterValueTemp)
    }
    UpdateBookMark(rid, value, i) {
        if (this.bookmark.includes(rid)) {
            value = value.split(",");
            console.log("sssss", rid, value, i, this.bookmark);
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
        console.log("rrrr", temp);
        this.CommonService.commonPut(temp, this.routeId.tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data1);
            }
        });
    }
    getAddFields(value) {
        let body = { table_name: "meta_field_data", limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ "field_title": value }], "filter": [{ "table_name": this.routeId.tablename }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterAddField = response.info;
        });
    }
    getAddValues(fields, value) {
        // console.log("ddd", fields, value, this.filterValueTemp)
        let body = { table_name: this.routeId.tablename, limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ [fields]: value }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterAddValue = response.info;
        });
    }
    getSearchValues(value) {
        let body = { table_name: this.routeId.tablename, limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "fields": this.selectedSearchField.name, "search": [{ [this.selectedSearchField.name]: value }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.searchValue = response.info;
        });
    }
    getDropdownValues(data, value) {
        // let temp: any;
        // for (let i = 0; i < this.selectFields.length; i++) {
        //   if (item == this.selectFields[i].name) {
        //     temp = this.selectFields[i];
        //   }
        // }
        // console.log("ddddd", data)
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
                this.filterValueTemp["0"] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id };
                this.filterFieldSelect = '';
            }
        }
        else {
            if (!!e) {
                let len = this.filtercount.length;
                this.filtercount.push(len);
                this.filterValueTemp[len] = { condition: "", fields: e.name, operator: "", value: [], type: e.field_type, item: e, option: e.option_list.split(","), table_id: e.parent_table_id };
                this.filterFieldSelect = '';
            }
        }
        // console.log("sssssss", this.filterValueTemp)
        this.filterAddField = [];
    }
    formatDate(index, date) {
        // console.log("rrrrr", date)
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        // console.log("aaaaa", d)
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        // console.log("ffff", formatdate)
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
        this.selectedSearchField.name = item.name;
        this.selectedSearchField.display_value = item.field_title;
    }
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.columnsOrder, event.previousIndex, event.currentIndex);
    }
    openFilter() {
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
                }
            }
        }
        // console.log("fff", this.filterValueTemp)
        this.menuFilterTrigger.openMenu();
    }
    closeFilter() {
        this.menuFilterTrigger.closeMenu();
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
}
TableViewComponent.ɵfac = function TableViewComponent_Factory(t) { return new (t || TableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableViewComponent, selectors: [["app-table-view"]], viewQuery: function TableViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuFilterTrigger = _t.first);
    } }, decls: 64, vars: 12, consts: [["class", "container", 4, "ngIf"], ["class", "full-height", "style", "display: flex;\nalign-items: center;\njustify-content: center;", 4, "ngIf"], ["menuMore", "matMenu"], [3, "matMenuTriggerFor", "click"], ["menuSummarizeCount", "matMenu"], [3, "click"], ["type", "text", 3, "matAutocomplete", "click", "focus", "input"], ["addSummarizeCount", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["menuSearch", "matMenu"], ["cdkDropList", "", 3, "cdkDropListDropped", "click"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "col-order-footer"], [1, "col-cancel-btn"], [1, "col-apply-btn", 3, "click"], ["search", "matMenu"], [1, "search-select-hint"], [4, "ngFor", "ngForOf"], ["moreicon", "matMenu"], [1, "btn"], [1, "icon"], ["menuFilter", "matMenu"], [1, "filter-container", 3, "click"], [1, "filter-header"], [1, "f-close-icon", 3, "click"], [1, "filter-body"], [1, "filter-add-fields"], [1, "filter-text"], [1, "filter-add-input"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "ngModel", "input", "ngModelChange", "focus"], [1, "f-close-icon", "f-input-icon"], ["addField", "matAutocomplete"], ["class", "filter-max-h", 4, "ngIf"], [1, "filter-footer"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "filter-reset-btn", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "filter-apply-btn", 3, "click"], ["class", "mail-atom ", 4, "ngIf"], [1, "container"], [1, "header-table-view"], [1, "process-icon"], [1, "icon-alignment", "h-icon"], [1, "heading"], [1, "description"], [1, "action-btn"], [2, "width", "87px"], ["class", "new-btn cursor", "matRipple", "", "matRippleColor", "'#ffffff'", 3, "click", 4, "ngIf"], [1, "action-btn-m", 2, "width", "87px"], ["class", "edit-process-btn cursor", "matRipple", "", "matRippleColor", "'#ffffff'", 3, "click", 4, "ngIf"], ["style", "width: 87px;", "class", "action-btn-m", 4, "ngIf"], [1, "action-btn-m", 2, "width", "30px"], [1, "more-btn", "cursor", 3, "matMenuTriggerFor"], [1, "icon-alignment", "f-size"], ["class", "sum-d", 4, "ngIf"], [1, "utils"], [1, "position-r"], ["matRipple", "", "matRippleColor", "'#ffffff'", "matTooltip", "Filter", "matTooltipPosition", "above", 1, "col-btn", "cursor", 3, "matMenuTriggerFor", "click"], ["menuFilterTrigger", "matMenuTrigger"], [1, "icon-alignment", "col-icon"], ["class", "red-dot", 4, "ngIf"], [1, "col-btn", "cursor", 3, "matMenuTriggerFor"], [1, "search"], ["type", "text", "placeholder", "Search", 1, "ser-input", 3, "matMenuTriggerFor", "ngModel", "matAutocomplete", "ngModelChange", "input", "click"], ["menuTrigger", "matMenuTrigger"], [1, "search-icon", "icon-alignment"], [3, "optionSelected"], ["addSearchField", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "sum-c-hi-d"], ["class", "chip-flex", 4, "ngIf"], [1, "sum-c-sh-i-d"], ["class", "sum-c-sh-i cursor", "matTooltip", "Hide Summarize Count", 3, "click", 4, "ngIf"], ["class", "sum-c-sh-i-v cursor", "matTooltip", "Show Summarize Count", 3, "click", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "full-height", "style", "display: flex;align-items: center;justify-content: center;height: 55vh;", 4, "ngIf"], [1, "table-data-info-container"], [1, "container-t"], [1, "table-container", "position-r"], ["class", "example-container", 4, "ngIf"], ["style", "display: flex;align-items: center;justify-content: center;margin-top: 90px;", 4, "ngIf"], ["class", "im-1", 3, "click", 4, "ngIf"], ["class", "im-2", 3, "click", 4, "ngIf"], ["class", "im-3", 3, "click", 4, "ngIf"], ["class", "im-4", 3, "click", 4, "ngIf"], ["class", "im-5", 3, "click", 4, "ngIf"], ["class", "r-3 r3a", 3, "click", 4, "ngIf"], ["class", "r-3 r3u", 3, "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "new-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "edit-process-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "report-btn", "cursor", 3, "click"], [1, "sum-d"], [1, "sum-d-f"], [1, "sum-a-f"], [1, "sum-a-f-h"], [1, "sum-a-f-i"], [1, "sum-c-in-s"], ["type", "text", "placeholder", "Select Field", 1, "sum-c-in", 3, "matTooltip", "matAutocomplete", "value", "input"], [1, "sum-c-in-i", "cursor"], ["addSumField", "matAutocomplete"], ["class", "sum-c-l-t", 4, "ngIf"], ["class", "sum-c-v-if", 4, "ngIf"], [3, "value", "click"], [1, "sum-c-l-t"], [4, "ngIf"], [1, "sum-c-v-if"], [3, "ngStyle", "class", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"], [1, "sum-c-v-s"], [1, "sum-c-v-e", 3, "matTooltip"], [1, "sum-c-v-i"], [1, "sum-c-c"], [1, "sum-c-r", "cursor"], [1, "red-dot"], [3, "value"], [1, "chip-flex"], [1, "chip-close", 3, "click"], ["matTooltip", "Hide Summarize Count", 1, "sum-c-sh-i", "cursor", 3, "click"], ["matTooltip", "Show Summarize Count", 1, "sum-c-sh-i-v", "cursor", 3, "click"], [1, "pagination"], [2, "background", "none", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "55vh"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "80px", "width", "80px"], [1, "example-container"], ["mat-table", "", "id", "dashboard-table", "matSort", "", 1, "table-m", 3, "dataSource", "matSortChange"], ["matColumnDef", "select"], ["mat-header-cell", "", "class", "static-lfet-p-h", "style", "color: #FFF; background-color: rgb(47 58 70 / 78%);opacity: 0.92; font-weight: 500;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "static-lfet-p", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "menuIcon"], ["mat-header-cell", "", "style", "color: #FFF;background-color: rgb(47 58 70 / 78%);opacity: 0.92;font-weight: 500;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "static-lfet-p-h", 2, "color", "#FFF", "background-color", "rgb(47 58 70 / 78%)", "opacity", "0.92", "font-weight", "500"], [1, "select-column-container"], ["color", "primary", 2, "color", "#FFF", 3, "change"], ["mat-cell", "", 1, "static-lfet-p"], [1, "select-column-container", "select-column-container-td"], ["color", "primary", 1, "select-column-list", "select-item", 3, "checked", "change"], ["matTooltip", "Edit", 1, "lanuch-icon", 3, "click"], ["class", "lanuch-icon", "style", "color: #fbbd2c;", "matTooltip", "Remove BookMark", 3, "click", 4, "ngIf"], ["class", "lanuch-icon", "style", "color: #697179;", "matTooltip", "Add BookMark", 3, "click", 4, "ngIf"], ["matTooltip", "Remove BookMark", 1, "lanuch-icon", 2, "color", "#fbbd2c", 3, "click"], ["matTooltip", "Add BookMark", 1, "lanuch-icon", 2, "color", "#697179", 3, "click"], [3, "matColumnDef"], ["mat-header-cell", "", "style", "color: #FFF; background-color: rgb(47 58 70 / 78%);opacity: 0.92;font-weight: 500;", 3, "id", "mat-sort-header", 4, "matHeaderCellDef"], ["mat-cell", "", "tabindex", "-1", "fields", "", 4, "matCellDef"], ["mat-header-cell", "", 2, "color", "#FFF", "background-color", "rgb(47 58 70 / 78%)", "opacity", "0.92", "font-weight", "500", 3, "id", "mat-sort-header"], ["mat-cell", "", "tabindex", "-1", "fields", ""], ["mat-header-cell", "", 2, "color", "#FFF", "background-color", "rgb(47 58 70 / 78%)", "opacity", "0.92", "font-weight", "500"], ["mat-cell", ""], [1, "more-icon", 3, "matMenuTriggerFor", "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "align-items", "center", "justify-content", "center", "margin-top", "90px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "500.5", "height", "390.334", "viewBox", "0 0 524.5 407.334"], ["id", "Group_12146", "data-name", "Group 12146", "transform", "translate(-538.5 -242)"], ["id", "undraw_noted_pc9f", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 929.967, 334.376)"], ["id", "Path_12085", "data-name", "Path 12085", "d", "M649.3,131.334l38.245,19.228a1.808,1.808,0,0,1,.992,1.738l-2.222,32.913a.9.9,0,0,1-1.3.739L645.9,165.989l2.008-33.853a.962.962,0,0,1,1.392-.8Z", "transform", "translate(-550.965 -131.22)", "fill", "#d0cde1"], ["id", "Path_12086", "data-name", "Path 12086", "d", "M654.852,138.581l37.305,18.756a1.764,1.764,0,0,1,.968,1.695l-2.167,32.1a.874.874,0,0,1-1.266.721l-38.156-19.473,1.959-33.021a.938.938,0,0,1,1.358-.783Z", "transform", "translate(-556.08 -137.796)", "fill", "#3f3d56"], ["id", "Path_12087", "data-name", "Path 12087", "d", "M675.49,165.5l33.816,17a1.6,1.6,0,0,1,.877,1.536l-1.965,29.1a.792.792,0,0,1-1.148.654l-34.587-17.652,1.776-29.933a.85.85,0,0,1,1.231-.71Z", "transform", "translate(-575.083 -162.224)", "fill", "#fff"], ["id", "Path_12088", "data-name", "Path 12088", "d", "M323.373,518.96l38.294,19.285a2.55,2.55,0,0,0,2.3,0l28.328-14.38a1.189,1.189,0,0,0,.18-1.194,2.661,2.661,0,0,0-.209-.516l-3.86-2.03-32.457-16.194-1.939-1.029a3.591,3.591,0,0,0-3.335-.013l-27.31,14.186a1.06,1.06,0,0,0,.012,1.89Z", "transform", "translate(-257.859 -467.995)", "fill", "#d0cde1"], ["id", "Path_12089", "data-name", "Path 12089", "d", "M323.368,669.033l38.294,19.285a2.55,2.55,0,0,0,2.3,0l28.328-14.38a1.189,1.189,0,0,0,.18-1.194l-28.244,14.681a2.464,2.464,0,0,1-2.235.019L322.8,667.916A1.056,1.056,0,0,0,323.368,669.033Z", "transform", "translate(-257.854 -618.069)", "opacity", "0.1"], ["id", "Path_12090", "data-name", "Path 12090", "d", "M510.724,679.128l-12.4-6.267a1.743,1.743,0,0,0-1.607.018l-7.194,3.843a.515.515,0,0,0,.011.913l12.645,6.376a1.432,1.432,0,0,0,1.348-.031l7.223-4.069a.443.443,0,0,0-.023-.784Z", "transform", "translate(-408.864 -622.385)", "opacity", "0.1"], ["id", "Path_12091", "data-name", "Path 12091", "d", "M523.133,538.325l-13.345,7.09a1.086,1.086,0,0,1-1,.01l-37.706-19.068a.641.641,0,0,1,0-1.147l13.032-6.45a1.413,1.413,0,0,1,1.263,0l37.744,19.017a.306.306,0,0,1,.006.543Z", "transform", "translate(-392.066 -482.63)", "opacity", "0.1"], ["id", "Group_12145", "data-name", "Group 12145"], ["id", "undraw_Location_search_re_ttoj", "transform", "translate(538.5 242)"], ["id", "Ellipse_88", "data-name", "Ellipse 88", "cx", "21.37", "cy", "21.37", "r", "21.37", "transform", "translate(277.283 156.434)", "fill", "#e6e6e6"], ["id", "Path_12062", "data-name", "Path 12062", "d", "M708.769,401.694l-22.332-22.332a23.652,23.652,0,1,0-7.1,7.1L701.665,408.8a5.023,5.023,0,0,0,7.1-7.1ZM678.5,378.528a16.915,16.915,0,1,1,4.954-11.96A16.915,16.915,0,0,1,678.5,378.528Z", "transform", "translate(-357.743 -196.428)", "fill", "#3f3d56"], ["id", "Path_12063", "data-name", "Path 12063", "d", "M644.039,306.7c57.111,63.159-108.445,154.18-242.218,154.18S175.5,390.354,159.6,306.7C121.065,103.865,487.962-25.055,401.822,152.52,276.261,411.355,599.063,256.96,644.039,306.7Z", "transform", "translate(-131.132 -68.493)", "fill", "#e6e6e6"], ["id", "Path_12064", "data-name", "Path 12064", "d", "M596.039,334.7c57.111,63.159-108.445,154.18-242.218,154.18S127.5,418.354,111.6,334.7C73.065,131.865,439.962,2.945,353.822,180.52,228.261,439.355,551.063,284.96,596.039,334.7Z", "transform", "translate(-108.756 -81.545)", "fill", "#3f3d56"], ["id", "Path_12065", "data-name", "Path 12065", "d", "M196.578,237.423c-40.075-1.764-71.147-10.409-70.739-19.68.245-5.558,11.586-10.028,31.116-12.262a.534.534,0,1,1,.121,1.061c-18.4,2.1-29.958,6.415-30.171,11.248-.369,8.384,31.558,16.886,69.719,18.566s70.711-3.983,71.081-12.367c.214-4.854-11-10.178-29.254-13.9a.534.534,0,1,1,.213-1.046c19.379,3.945,30.353,9.409,30.107,14.988C268.365,233.308,236.653,239.188,196.578,237.423Z", "transform", "translate(-116.718 -132.348)", "fill", "#329cfd"], ["id", "Path_12066", "data-name", "Path 12066", "d", "M191.679,268.227a41.1,41.1,0,0,0,71.021,2.948,647.011,647.011,0,0,1-71.021-2.948Z", "transform", "translate(-147.411 -161.599)", "fill", "#329cfd"], ["id", "Path_12067", "data-name", "Path 12067", "d", "M263.075,205.468a41.1,41.1,0,1,0-78.876-3.046,305.486,305.486,0,0,0,78.876,3.046Z", "transform", "translate(-143.352 -107.123)", "fill", "#329cfd"], ["id", "Ellipse_89", "data-name", "Ellipse 89", "cx", "4.805", "cy", "4.805", "r", "4.805", "transform", "translate(85.327 61.18)", "fill", "#fff"], ["id", "Ellipse_90", "data-name", "Ellipse 90", "cx", "8.008", "cy", "8.008", "r", "8.008", "transform", "translate(57.396 73.453)", "fill", "#fff"], ["id", "Ellipse_91", "data-name", "Ellipse 91", "cx", "5.338", "cy", "5.338", "r", "5.338", "transform", "translate(180.924 70.948)", "fill", "#329cfd"], ["id", "Ellipse_92", "data-name", "Ellipse 92", "cx", "3.203", "cy", "3.203", "r", "3.203", "transform", "translate(62.41 238.576)", "fill", "#e6e6e6"], ["id", "Ellipse_93", "data-name", "Ellipse 93", "cx", "3.203", "cy", "3.203", "r", "3.203", "transform", "translate(286.626 348.549)", "fill", "#e6e6e6"], ["id", "Ellipse_94", "data-name", "Ellipse 94", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(79.493 179.853)", "fill", "#e6e6e6"], ["id", "Ellipse_95", "data-name", "Ellipse 95", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(211.887 299.435)", "fill", "#e6e6e6"], ["id", "Ellipse_96", "data-name", "Ellipse 96", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(452.653 283.953)", "fill", "#e6e6e6"], ["id", "Ellipse_97", "data-name", "Ellipse 97", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(377.38 331.466)", "fill", "#e6e6e6"], ["id", "Ellipse_98", "data-name", "Ellipse 98", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(298.905 273.81)", "fill", "#e6e6e6"], ["id", "Ellipse_99", "data-name", "Ellipse 99", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(197.473 115.791)", "fill", "#e6e6e6"], ["id", "Ellipse_100", "data-name", "Ellipse 100", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(210.286 36.781)", "fill", "#e6e6e6"], ["id", "Ellipse_101", "data-name", "Ellipse 101", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(202.812 369.369)", "fill", "#e6e6e6"], ["id", "Ellipse_102", "data-name", "Ellipse 102", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(123.802 335.736)", "fill", "#e6e6e6"], ["id", "Ellipse_103", "data-name", "Ellipse 103", "cx", "1.602", "cy", "1.602", "r", "1.602", "transform", "translate(374.177 278.081)", "fill", "#e6e6e6"], ["id", "Ellipse_104", "data-name", "Ellipse 104", "cx", "4.805", "cy", "4.805", "r", "4.805", "transform", "translate(74.405 115.204)", "fill", "#fff"], ["id", "Path_12069", "data-name", "Path 12069", "d", "M38.144,3a5.621,5.621,0,0,0-.342.816L12.293,10.907l-4.6-4.5L0,12.459l7.364,8.755a4.271,4.271,0,0,0,4.993,1.158L39.912,10.208A5.6,5.6,0,1,0,38.144,3Z", "transform", "translate(411.173 159.211) rotate(47)", "fill", "#ffb8b8"], ["id", "Path_12070", "data-name", "Path 12070", "d", "M857.612,389.293l-9.575,7.452a2.4,2.4,0,0,1-3.567-.714L838.52,385.5a6.672,6.672,0,0,1,10.554-8.165l8.722,8.325a2.4,2.4,0,0,1-.184,3.633Z", "transform", "translate(-448.286 -211.253)", "fill", "#329cfd"], ["id", "Path_12072", "data-name", "Path 12072", "d", "M0,11.251l.035,1.7c0,.176.008-.032.01-.464L.065,8.209.071,6.728.086,2.862c0-.433,0-.926,0-1.1L.071,1.224.047.062C.043-.113.039.1.037.529L.023,4.267.007,8.522,0,10.147c0,.433,0,.926,0,1.1Z", "transform", "matrix(-0.141, -0.888, 0.724, -0.394, 258.247, 51.628)", "fill", "#e6e6e6"], ["id", "Path_12073", "data-name", "Path 12073", "d", "M773.576,518.4h6.545l3.114-25.245h-9.66Z", "transform", "translate(-360.603 -229.884)", "fill", "#ffb8b8"], ["id", "Path_12074", "data-name", "Path 12074", "d", "M879.207,604.933H892.1a8.214,8.214,0,0,1,8.214,8.214v.267h-21.1Z", "transform", "translate(-467.903 -318.555)", "fill", "#2f2e41"], ["id", "Path_12075", "data-name", "Path 12075", "d", "M805.576,515.4h6.545l3.114-25.245h-9.66Z", "transform", "translate(-375.52 -228.486)", "fill", "#ffb8b8"], ["id", "Path_12076", "data-name", "Path 12076", "d", "M911.207,601.932H924.1a8.214,8.214,0,0,1,8.214,8.214v.267h-21.1Z", "transform", "translate(-482.82 -317.156)", "fill", "#2f2e41"], ["id", "Path_12077", "data-name", "Path 12077", "d", "M826.215,476.617a21.039,21.039,0,0,0,19.7,14.313l.331.005c3.379.1,7.346-.993,11.237-2.557a95.712,95.712,0,0,0,17.03-9.4l-3.32,31.919-1.345,12.94a2.41,2.41,0,0,0,2.392,2.653h8.291a2.4,2.4,0,0,0,2.327-1.794l13.688-52.13a10.16,10.16,0,0,0-10.522-12.722l-28.433,1.949,1.986-7.944L834.2,452.161l-.075.053c-.609.443-1.2.908-1.767,1.393a21.5,21.5,0,0,0-3.732,4.089A20.547,20.547,0,0,0,826.215,476.617Z", "transform", "translate(-442.6 -247.34)", "fill", "#2f2e41"], ["id", "Path_12078", "data-name", "Path 12078", "d", "M826.215,481.451a21.039,21.039,0,0,0,19.7,14.313,104.724,104.724,0,0,0,12.049-7.148l-.48,4.6L853.3,533.474a2.41,2.41,0,0,0,2.392,2.653h8.291a2.4,2.4,0,0,0,2.327-1.794l4.885-18.6L880,482.2a10.16,10.16,0,0,0-10.522-12.722L841.04,471.43l1.986-7.944-14.4-.956A20.547,20.547,0,0,0,826.215,481.451Z", "transform", "translate(-442.6 -252.174)", "fill", "#2f2e41"], ["id", "Path_12079", "data-name", "Path 12079", "d", "M834.221,411.18l-.191-.023L829.6,389.384c-.038-.189-3.658-18.969,7.44-28.787l.193-1.344a2.4,2.4,0,0,1,3.089-1.953l10.455,3.243a2.4,2.4,0,0,1,1.612,2.905l-1.016,3.866c1.409,1.655,18,21.627,12.22,37.015l-2.588,10.117Z", "transform", "translate(-444.503 -203.07)", "fill", "#329cfd"], ["id", "Path_12080", "data-name", "Path 12080", "d", "M887.215,415.535a5.622,5.622,0,0,0-.71.529l-25.57-6.864-1.672-6.211-9.7,1.3,1.891,11.283a4.271,4.271,0,0,0,3.711,3.535l29.913,3.534a5.6,5.6,0,1,0,2.14-7.1Z", "transform", "matrix(0.951, 0.309, -0.309, 0.951, -287.838, -468.768)", "fill", "#ffb8b8"], ["id", "Path_12081", "data-name", "Path 12081", "d", "M856.149,396.555l-12.033,1.55a2.4,2.4,0,0,1-2.709-2.428l.23-12.094a6.672,6.672,0,1,1,13.239-1.666l3.279,11.6a2.4,2.4,0,0,1-2.005,3.035Z", "transform", "translate(-450.282 -211.874)", "fill", "#329cfd"], ["id", "Ellipse_107", "data-name", "Ellipse 107", "cx", "13.112", "cy", "13.112", "r", "13.112", "transform", "translate(389.368 125.05)", "fill", "#ffb8b8"], ["id", "Path_12082", "data-name", "Path 12082", "d", "M836.759,312.421l-1.642-2.989a35.815,35.815,0,0,0,2.383,23.155l-21.318-9.93.2-3.523-2.109,2.394-3.031-1.67-.4-2.285-2.288.567,8.351-15.155c8.105-14.421,19.889-8.915,19.889-8.915,18.746-.891,16.457,17.6,16.457,17.6Z", "transform", "translate(-434.97 -173.164)", "fill", "#2f2e41"], ["id", "Ellipse_108", "data-name", "Ellipse 108", "cx", "6.502", "cy", "25.358", "rx", "6.502", "ry", "25.358", "transform", "matrix(0.842, -0.54, 0.54, 0.842, 219.686, 197.78)", "fill", "#3f3d56"], ["id", "Path_12092", "data-name", "Path 12092", "d", "M973.834,225.9c2.817,4.11,2.194,9.434,2.194,9.434s-5.19-1.339-8.007-5.449-2.194-9.434-2.194-9.434S971.017,221.788,973.834,225.9Z", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 153.403, -79.249)", "fill", "#2f2e41"], ["id", "Path_12093", "data-name", "Path 12093", "d", "M1030.575,197.364c.33,4.972,4.113,8.769,4.113,8.769s3.249-4.263,2.92-9.235-4.113-8.769-4.113-8.769S1030.246,192.393,1030.575,197.364Z", "transform", "matrix(0.966, 0.259, -0.259, 0.966, 89.049, -66.14)", "fill", "#329cfd"], [1, "im-1", 3, "click"], ["src", "../../../assets/img/ExportTableActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-2", 3, "click"], ["src", "../../../assets/img/BookmarkActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-3", 3, "click"], ["src", "../../../assets/img/NotesActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-4", 3, "click"], ["src", "../../../assets/img/TaskActive.svg", 1, "im-active", "im-b", "cursor"], [1, "im-5", 3, "click"], ["src", "../../../assets/img/MailActive.svg", 1, "im-active", "im-b", "cursor"], ["src", "../../../assets/img/ExportTable.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Bookmark.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Notes.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Tasks.svg", 1, "im-unactive", "im-b", "cursor"], ["src", "../../../assets/img/Mail.svg", 1, "im-unactive", "im-b", "cursor"], [1, "r-3", "r3a", 3, "click"], [1, "r-2", "r2a"], [1, "r-1", "r1a"], [1, "r-3", "r3u", 3, "click"], [1, "r-2", "r2u"], [1, "r-1", "r1u"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "85px", "width", "85px"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "check-box-g"], [3, "checked", "change"], [1, "text-wrap"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "18px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "example-custom-placeholder"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "filter-max-h"], ["class", "filter-row-c", 4, "ngFor", "ngForOf"], [1, "filter-row-c"], [1, "filter-row-g"], [1, "f-list-icon"], ["class", "filter-add-input", 4, "ngIf"], ["class", "filter-add-input", "style", "background-color: #fff;\n              border: 1px solid var(--pinkish-grey);\n              border-radius: 4px;\n              height: 25px;padding: 0px 6px;", 4, "ngIf"], [1, "filter-value-f"], ["class", "filter-value-c-f", 4, "ngFor", "ngForOf"], ["type", "text", 1, "filter-field-input", 3, "ngModel", "ngModelChange", "click"], [1, "f-close-icon"], [1, "select-p"], ["select", ""], [1, "f-o-a-g"], [1, "filter-delete-icon", 3, "click"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "input", "focus"], ["addValue", "matAutocomplete"], [2, "width", "95%", "background-color", "#fff", "border", "1px solid var(--pinkish-grey)", "padding", "2px 5px", "height", "23px", "display", "grid", "align-items", "center", "border-radius", "4px"], ["type", "number", 1, "filter-field-input", 3, "matAutocomplete", "input"], [1, "filter-add-input", 2, "background-color", "#fff", "border", "1px solid var(--pinkish-grey)", "border-radius", "4px", "height", "25px", "padding", "0px 6px"], ["matInput", "", "placeholder", "Choose a date", 1, "date-filter", 3, "matDatepicker", "dateChange", "click"], [1, "date-icon-d", "cursor", 3, "click"], ["picker", ""], ["type", "datetime-local", 1, "filter-field-input", 3, "change"], ["type", "time", 1, "filter-field-input", 3, "change"], [1, "filter-value-c-f"], [1, "filter-v-v-icon", 3, "click"], [1, "mail-atom"], [3, "dataTableInfo", "isAddField", "airliftDomains", "header", "isFrom", "fileList", "closeMail"]], template: function TableViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableViewComponent_div_0_Template, 67, 37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_4_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Summarize Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_8_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_input_click_11_listener($event) { return $event.stopPropagation(); })("focus", function TableViewComponent_Template_input_focus_11_listener() { return ctx.filterAddField = []; })("input", function TableViewComponent_Template_input_input_11_listener($event) { return ctx.getAddFields($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_mat_option_14_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TableViewComponent_Template_div_cdkDropListDropped_18_listener($event) { return ctx.drop($event); })("click", function TableViewComponent_Template_div_click_18_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableViewComponent_div_19_Template, 10, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_25_listener() { return ctx.putColumns(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select the field, for searching on it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TableViewComponent_span_31_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-menu", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View/Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-menu", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_40_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_mat_icon_click_44_listener() { return ctx.closeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Add Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_Template_input_input_51_listener($event) { return ctx.getAddFields($event.target.value); })("ngModelChange", function TableViewComponent_Template_input_ngModelChange_51_listener($event) { return ctx.filterFieldSelect = $event; })("focus", function TableViewComponent_Template_input_focus_51_listener() { return ctx.filterAddField = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-autocomplete", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TableViewComponent_mat_option_56_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TableViewComponent_div_57_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_59_listener() { return ctx.deleteFilter("reset"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_61_listener() { return ctx.deleteFilter("apply"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TableViewComponent_div_63_Template, 2, 6, "div", 36);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.tableInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metaData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r12)("ngModel", ctx.filterFieldSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtercount.length && !!ctx.filterValueTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendMailAtom);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_18__["SendMailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  \n  margin-bottom: 0;\n  box-sizing: border-box;\n  height: auto;\n}\n\n.header-table-view[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px calc(100% - 381px) 321px;\n  grid-gap: 10px;\n  \n  align-items: center;\n  \n  padding: 25px 20px 25px;\n  \n  background-color: var(--silver);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.sum-radio-i-s[_ngcontent-%COMP%] {\n  width: 8px;\n  display: grid;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #56b27b;\n}\n\n.sum-radio-i[_ngcontent-%COMP%] {\n  width: 8px;\n  display: grid;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.sum-d[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 99%;\n  margin: 15px 0px;\n  padding: 0px 20px 0px 20px;\n}\n\n.sum-d-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sum-a-f[_ngcontent-%COMP%] {\n  display: grid;\n  width: 200px;\n  height: 70px;\n  border-radius: 5px;\n  margin-right: 20px;\n  border: solid 1px #e2e2e263;\n  margin-bottom: 3px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n}\n\n.sum-a-f-h[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #e2e2e2;\n  display: flex;\n  padding: 5px;\n  color: #253542d1;\n  align-items: center;\n}\n\n.sum-a-f-i[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  margin-right: 5px;\n}\n\n.sum-c-in-s[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 9px;\n  align-items: center;\n  justify-content: center;\n}\n\n.sum-c-in[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.sum-c-in-i[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: var(--warm-grey);\n}\n\n.sum-c-l-t[_ngcontent-%COMP%] {\n  display: flex;\n  width: 0px;\n  display: none;\n}\n\n.sum-c-v-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  min-width: 130px;\n  max-width: 130px;\n  justify-content: space-between;\n  padding: 0px 10px;\n  font-size: 11px;\n  font-family: 'Roboto';\n}\n\n.sum-c-r[_ngcontent-%COMP%] {\n  width: 10px;\n  display: grid;\n  height: 10px;\n  padding: 2px;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #cccccc;\n  border-radius: 50%;\n}\n\n.sum-c-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 10px;\n  font-size: 16px;\n  background-color: #fff;\n}\n\n.sum-c-v-f[_ngcontent-%COMP%] {\n  display: grid;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n  margin-right: 20px;\n  grid-template-rows: 43px 40px;\n}\n\n.sum-c-v-e[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  }\n\n.sum-c-v-i[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5px;\n}\n\n.sum-c-v-if[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  display: flex;\n  padding-bottom: 10px;\n  overflow: auto;\n  width: calc( 100% - 220px);\n}\n\n.sum-c-hi-d[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n\n.sum-c-sh-i-d[_ngcontent-%COMP%] {\n  \n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n}\n\n.sum-c-sh-i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 20px;\n  width: 20px;\n  display: grid;\n  align-items: center;\n  background-color: #5eb27c;\n  color: #fff;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n}\n\n.sum-c-sh-i-v[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 20px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 6%);\n  width: 20px;\n  display: grid;\n  align-items: center;\n  background-color: #3a95f8;\n  color: #fff;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.sum-dd-h[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n.action-btn-m[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n  .mat-menu-panel {\n  max-width: 100% !important;\n}\n\n.new-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0px;\n  background-image: linear-gradient( 30deg, rgb(47, 131, 241) -5%, rgb(71, 168, 255) 128%);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.new-btn[_ngcontent-%COMP%]:hover, .edit-process-btn[_ngcontent-%COMP%]:hover, .report-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  transition: all 0.3s ease;\n}\n\n.edit-process-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.f-size[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.h-icon[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 24px;\n  height: 35px !important;\n  width: 35px !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  font-size: 12px;\n}\n\n.date-filter[_ngcontent-%COMP%]:hover {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4a4949f0;\n}\n\n.process-icon[_ngcontent-%COMP%] {\n  display: grid;\n  background-image: linear-gradient( 30deg, rgb(47, 131, 241) -5%, rgb(71, 168, 255) 128%);\n  border-radius: 2px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.utils[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 40px 420px calc(100% - 975px) 415px;\n  grid-gap: 15px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 20px;\n}\n\n.filter-container[_ngcontent-%COMP%] {\n  min-height: 225px;\n  position: relative;\n  padding-bottom: 45px;\n}\n\n.filter-max-h[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: scroll;\n}\n\n.filter-header[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  padding: 2px 10px 10px 15px;\n  color: var(--warm-grey);\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.f-close-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.filter-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  grid-gap: 15px;\n}\n\n.filter-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--warm-grey);\n}\n\n.filter-field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid var(--pinkish-grey);\n  padding: 2px 5px;\n}\n\n.filter-add-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  width: 640px;\n}\n\n.filter-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-top: 1px solid var(--silver);\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  width: 640px;\n  justify-content: flex-end;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--greyish-two);\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--white);\n  cursor: pointer;\n}\n\n.filter-row-c[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 70px;\n  max-height: 200px;\n  grid-gap: 15px;\n}\n\n.filter-value-f[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.filter-value-c-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid var(--pinkish-grey-two);\n  border-radius: 2px;\n  margin-right: 10px;\n  margin-top: 10px;\n  background-color: var(--silver);\n  color: var(--warm-grey);\n  font-size: 12px;\n  align-items: center;\n  padding: 2px 2px;\n}\n\n.filter-v-v-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 16px;\n  height: 18px !important;\n  width: 18px !important;\n  align-items: center;\n  cursor: pointer;\n  justify-content: right;\n}\n\n.filter-row-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 250px 150px 180px;\n  grid-gap: 10px;\n  align-items: flex-start;\n}\n\n.f-list-icon[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  margin-top: 24px;\n}\n\n.filter-delete-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--warm-grey);\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n\n.f-or-and-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--pinkish-grey-three);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.f-or-and-btn-c[_ngcontent-%COMP%] {\n  background-color: var(--pale-blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.select-p[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n}\n\n.f-o-a-g[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: grid;\n  align-items: center;\n  grid-gap: 10px;\n  grid-auto-flow: column;\n}\n\n.filter-add-input[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 2px;\n  align-items: center;\n  \n  color: var(--warm-grey);\n  position: relative;\n}\n\n.filter-condition[_ngcontent-%COMP%] {\n  border: 1px solid var(--pinkish-grey);\n  padding: 0px 2px 2px 6px;\n  height: 24px;\n  border-radius: 2px;\n  display: grid;\n  align-items: center;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  height: 345px;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 10px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px !important;\n  width: 20px !important;\n  color: var(--warm-grey);\n  position: absolute;\n  right: 14px;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-right: 4px;\n  padding-left: 4px;\n  border-radius: 2px;\n}\n\n.search-select-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  padding: 2px 21px 0px 12px;\n  color: red;\n}\n\n.chip-close[_ngcontent-%COMP%] {\n  color: var(--warm-grey) !important;\n  font-size: 18px;\n  height: 18px !important;\n  width: 18px !important;\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n}\n\n.chip-flex[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--pinkish-grey-two);\n  width: -webkit-max-content;\n  width: max-content;\n  font-size: 12px;\n  padding: 2px 10px;\n  color: var(--black);\n  align-items: center;\n  border-radius: 10px;\n}\n\n.ser-input[_ngcontent-%COMP%] {\n  height: 28px !important;\n  border: 1px solid var(--greyish);\n  padding: 2px 10px;\n  color: var(--warm-grey);\n  font-size: 13px;\n  font-family: 'Roboto';\n}\n\n.col-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #d8d8d8;\n  border-radius: 2px;\n  height: 30px !important;\n}\n\n.col-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--warm-grey);\n}\n\n.container-t[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  min-width: 128vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-spacing: 0px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-radius: 3px;\n  min-height: 10%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  \n  color: #797979;\n  height: 44px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 44px !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  font-weight: 400;\n  color: rgba(47, 58, 87, .95);\n  border-bottom-width: 0.5px !important;\n  max-width: 210px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  border-bottom: 1px solid #f2efef;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\n.select-column-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 4px;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  padding-left: 10px;\n  min-width: 70px;\n  max-width: 70px;\n}\n\n.select-column-container-td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.select-column-list[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.table-data-info-container[_ngcontent-%COMP%] {\n  height: 52vh;\n  overflow: auto;\n  padding: 0px 20px 20px 20px;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: solid 1px #ccc;\n  color: var(--black);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  \n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  display: grid;\n  position: absolute;\n  right: 5px;\n  margin-left: 10px;\n  cursor: move;\n}\n\n.check-box-g[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  max-width: 210px;\n  margin-right: 25px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: var(--blue) !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n}\n\n.col-order-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px;\n  border-top: 1px solid var(--pinkish-grey);\n  position: sticky;\n  bottom: 0;\n  background: #fff;\n}\n\n.col-cancel-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  background-color: #99999936;\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 2px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--black);\n  padding: 3px 8px;\n}\n\n.col-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 2px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--white);\n  padding: 3px 8px;\n}\n\n.lanuch-icon[_ngcontent-%COMP%] {\n  color: var(--blue);\n  cursor: pointer;\n  font-size: 22px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: none;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  \n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover, .col-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.3s;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 50%;\n  font-size: 20px;\n  color: var(--warm-grey);\n  display: grid;\n  width: 30px !important;\n  height: 30px !important;\n  align-items: center;\n  justify-content: center;\n}\n\n.more-icon[_ngcontent-%COMP%]:hover {\n  background-color: #eceeefad;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: var(--white);\n  border: 0px;\n  color: var(--warm-grey);\n  width: 100%;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--silver);\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: grid;\n  margin-right: 4px;\n  align-items: center;\n  justify-content: center;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: var(--error);\n  position: absolute;\n  border-radius: 50%;\n  right: -2px;\n  top: -6px;\n}\n\n.f-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  \n  background: var(--silver);\n}\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #FFF\n}\n\ntr[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\nth[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.r-1[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-2[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-3[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  z-index: 999999999999999999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r-4[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #ffffff;\n  width: 50px;\n  position: absolute;\n  right: 35px;\n  bottom: 60px;\n  border-radius: 50%;\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.r1a[_ngcontent-%COMP%] {\n  background-color: #e8eaee;\n}\n\n.r2a[_ngcontent-%COMP%] {\n  background-color: #cfd3dc;\n}\n\n.r3a[_ngcontent-%COMP%] {\n  background-color: #545f75;\n}\n\n.r1u[_ngcontent-%COMP%] {\n  background-color: #f7f7f9;\n}\n\n.r2u[_ngcontent-%COMP%] {\n  background-color: #e8ebf1;\n}\n\n.r3u[_ngcontent-%COMP%] {\n  background-color: #545f757a;\n}\n\n.r4u[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.im-5[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -40px;\n}\n\n.im-4[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -26px;\n  right: 52px;\n}\n\n.im-3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 68px;\n}\n\n.im-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 52px;\n  right: 52px;\n}\n\n.im-1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n}\n\n.im-b[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #545f75;\n  border-radius: 50%;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 16px;\n  width: 16px;\n}\n\n.im-active[_ngcontent-%COMP%] {\n  background-color: #545f75;\n}\n\n.im-unactive[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n  .mat-sort-header-arrow {\n  color: #fff;\n}\n\n  .mat-sort-header-content {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n}\n\n\n\n\n\n  .mat-progress-bar-fill::after {\n  background-color: #3f9cfa !important;\n}\n\n  .mat-progress-bar {\n  height: 5px !important;\n}\n\n  .mat-checkbox-frame {\n  border-color: rgb(196 196 196 / 90%);\n}\n\n.bot-50[_ngcontent-%COMP%] {\n  bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi12aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsdUJBQXVCO0VBQ3ZCLHdFQUF3RTtFQUN4RSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCOztBQUVGO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7O0FBRUg7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHdGQUF3RjtFQUN4RixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdGQUF3RjtFQUN4RixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLDBCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFBcUg7QUFDdkg7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7UUFDTTtFQUNOLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBLHdHQUF3Rzs7QUFFeEc7O0dBRUc7O0FBRUg7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLXZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgLyogbWFyZ2luOiAyMHB4OyAqL1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oZWFkZXItdGFibGUtdmlldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBjYWxjKDEwMCUgLSAzODFweCkgMzIxcHg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTVweDsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleSk7ICovXG4gIHBhZGRpbmc6IDI1cHggMjBweCAyNXB4O1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDk5ZGVnLCAjZDZkZGU5IDQlLCAjZjVmNWY1IDk4JSk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnN1bS1yYWRpby1pLXMge1xuICB3aWR0aDogOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiMjdiO1xufVxuXG4uc3VtLXJhZGlvLWkge1xuICB3aWR0aDogOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc3VtLWQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA5OSU7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uc3VtLWQtZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdW0tYS1mIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTJlMmUyNjM7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gNiUpO1xufVxuXG4uc3VtLWEtZi1oIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlMmUyZTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNTM1NDJkMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1bS1hLWYtaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3VtLWMtaW4tcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCA5cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VtLWMtaW4ge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN1bS1jLWluLWkge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbn1cblxuLnN1bS1jLWwtdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdW0tYy12LXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5zdW0tYy1yIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3VtLWMtYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnN1bS1jLXYtZiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gNiUpO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDNweCA0MHB4O1xufVxuXG4uc3VtLWMtdi1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuLnN1bS1jLXYtaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zdW0tYy12LWlmIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjIwcHgpO1xufVxuXG4uc3VtLWMtaGktZCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbn1cblxuLnN1bS1jLXNoLWktZCB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdhcm0tZ3JleSk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLnN1bS1jLXNoLWkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZWIyN2M7XG4gIGNvbG9yOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA2JSk7XG59XG5cbi5zdW0tYy1zaC1pLXYge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gNiUpO1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhOTVmODtcbiAgY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdW0tZGQtaCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogLnN0YXRpYy1sZmV0LXAge1xuICBsZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2lsdmVyKTtcbn1cblxuLnN0YXRpYy1sZmV0LXAtaCB7XG4gIGxlZnQ6IDcwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTkgaW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpbHZlcik7XG4gIGhlaWdodDogNTdweCAhaW1wb3J0YW50O1xuICB0b3A6IDI1MXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1tIHtcbiAgbWFyZ2luLWxlZnQ6IDExM3B4ICFpbXBvcnRhbnQ7XG59ICovXG5cbi5hY3Rpb24tYnRuLW0ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubmV3LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDMwZGVnLCByZ2IoNDcsIDEzMSwgMjQxKSAtNSUsIHJnYig3MSwgMTY4LCAyNTUpIDEyOCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5ldy1idG46aG92ZXIsIC5lZGl0LXByb2Nlc3MtYnRuOmhvdmVyLCAucmVwb3J0LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5lZGl0LXByb2Nlc3MtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJlcG9ydC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubW9yZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZi1zaXplIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaC1pY29uIHtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGF0ZS1maWx0ZXI6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0YTQ5NDlmMDtcbn1cblxuLnByb2Nlc3MtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMzBkZWcsIHJnYig0NywgMTMxLCAyNDEpIC01JSwgcmdiKDcxLCAxNjgsIDI1NSkgMTI4JSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnV0aWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDQwcHggNDIwcHggY2FsYygxMDAlIC0gOTc1cHgpIDQxNXB4O1xuICBncmlkLWdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZmlsdGVyLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xufVxuXG4uZmlsdGVyLW1heC1oIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5maWx0ZXItaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMnB4IDEwcHggMTBweCAxNXB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZi1jbG9zZS1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbn1cblxuLmZpbHRlci1maWVsZC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4uZmlsdGVyLWFkZC1maWVsZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNXB4O1xuICB3aWR0aDogNjQwcHg7XG59XG5cbi5maWx0ZXItZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc2lsdmVyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA2NDBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZpbHRlci1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5aXNoLXR3byk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLWFwcGx5LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlci1yb3ctYyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBncmlkLWdhcDogMTVweDtcbn1cblxuLmZpbHRlci12YWx1ZS1mIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLXZhbHVlLWMtZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5LXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4O1xufVxuXG4uZmlsdGVyLXYtdi1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4uZmlsdGVyLXJvdy1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDI1MHB4IDE1MHB4IDE4MHB4O1xuICBncmlkLWdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5mLWxpc3QtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uZmlsdGVyLWRlbGV0ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmYtb3ItYW5kLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5LXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmYtb3ItYW5kLWJ0bi1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgcGFkZGluZzogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3QtcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5mLW8tYS1nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi5maWx0ZXItYWRkLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBwYWRkaW5nOiAwcHggMnB4IDJweCA2cHg7ICovXG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWx0ZXItY29uZGl0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgcGFkZGluZzogMHB4IDJweCAycHggNnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBoZWlnaHQ6IDM0NXB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zZWFyY2gtc2VsZWN0LWhpbnQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4IDIxcHggMHB4IDEycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jaGlwLWNsb3NlIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmNoaXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXItaW5wdXQge1xuICBoZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5jb2wtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG59XG5cbi5jb250YWluZXItdCB7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEyOHZoO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4taGVpZ2h0OiAxMCU7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgLyogYmFja2dyb3VuZDogI2Y3ZjdmNzsgKi9cbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93LCB0ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xufVxuXG50ZC5tYXQtY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDQ3LCA1OCwgODcsIC45NSk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDAuNXB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmVmZWY7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLnNlbGVjdC1jb2x1bW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1heC13aWR0aDogNzBweDtcbn1cblxuLnNlbGVjdC1jb2x1bW4tY29udGFpbmVyLXRkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlbGVjdC1jb2x1bW4tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWJsZS1kYXRhLWluZm8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MnZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1oYW5kbGUge1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uY2hlY2stYm94LWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtd3JhcCB7XG4gIG1heC13aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgb3BhY2l0eTogMC4wMyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLmNvbC1vcmRlci1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29sLWNhbmNlbC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTM2O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG4uY29sLWFwcGx5LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG4ubGFudWNoLWljb24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxudGFibGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRhYmxlIHRkLCB0YWJsZSB0aCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YyZjJmMjtcbiAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjsgKi9cbn1cblxudGFibGUgdGQ6Zmlyc3QtY2hpbGQsIHRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbnRhYmxlIHRkOmxhc3QtY2hpbGQsIHRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbnRhYmxlIHRkOmhvdmVyLCAuY29sLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4ubW9yZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vcmUtaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWZhZDtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlZC1kb3Qge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICByaWdodDogLTJweDtcbiAgdG9wOiAtNnB4O1xufVxuXG4uZi1pbnB1dC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAvKiAjODhiYWZhMzZcbiAgI0NDQyAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWx2ZXIpO1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNGRkZcbn1cblxudHIge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbnRoIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yLTEge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yLTIge1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yLTMge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yLTQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBib3R0b206IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yMWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWVlO1xufVxuXG4ucjJhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDNkYztcbn1cblxuLnIzYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVmNzU7XG59XG5cbi5yMXUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xufVxuXG4ucjJ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJmMTtcbn1cblxuLnIzdSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVmNzU3YTtcbn1cblxuLnI0dSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmltLTUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwcHg7XG59XG5cbi5pbS00IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yNnB4O1xuICByaWdodDogNTJweDtcbn1cblxuLmltLTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTRweDtcbiAgcmlnaHQ6IDY4cHg7XG59XG5cbi5pbS0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUycHg7XG4gIHJpZ2h0OiA1MnB4O1xufVxuXG4uaW0tMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xufVxuXG4uaW0tYiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVmNzU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuLmltLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVmNzU7XG59XG5cbi5pbS11bmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4vKiAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgKi9cblxuLyogOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDllZmIgIWltcG9ydGFudDtcbn0gKi9cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmOWNmYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE5NiAxOTYgMTk2IC8gOTAlKTtcbn1cblxuLmJvdC01MCB7XG4gIGJvdHRvbTogNTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-view',
                templateUrl: './table-view.component.html',
                styleUrls: ['./table-view.component.css']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { menuFilterTrigger: [{
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
                console.log(data, 'data');
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
        console.log(this.airliftDomains, 'airlift domains');
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        const today_date = [year, month, day].join('-');
        console.log(today_date, 'today date');
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
        console.log(this.mailBody, 'body');
        if (this.indexOfCursor >= 0) {
            this.editorEvent.editor.insertText(this.indexOfCursor, " {{" + item.table_name + "." + item.name + "}} ");
            // if (this.editorEvent.editor.getContents()?.ops[0]?.insert)
            //   this.mailBody.message =  new DOMParser().parseFromString(this.editorEvent.editor.getContents()?.ops[0]?.insert, "text/xml");
            this.addedBodyField.push(item);
            console.log(this.editorEvent, 'editor');
            console.log(this.mailBody, 'body');
            console.log(this.addedSubjectField, 'added subeject');
            console.log(this.addedBodyField, 'added body');
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
        console.log(event, 'event');
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
        console.log(event, 'event');
        console.log(this.indexOfCursor, 'index');
    }
    contentUpdate(event) {
        console.log(event, 'event from content');
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
                console.log(this.mailFile, 'mail');
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
            console.log('result', result);
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
            console.log('result', result);
            if (result === 'confirm') {
                this.mailTimer = 5;
                this.mailInterval = setInterval(() => {
                    var _a, _b, _c, _d, _e;
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
                        else {
                            this.mailSendApi(this.mailPayload);
                        }
                    }
                }, 900);
                console.log(this.mailTimer, 'mail timer');
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
        console.log(this.mailPayload, 'this.mailPayload');
        let fieldList = this.getListofFields(this.mailPayload.subject.toString());
        console.log(fieldList, 'field list');
        console.log(this.getListofFields(this.mailPayload.subject), 'field funtction');
        if (fieldList === null || fieldList === void 0 ? void 0 : fieldList.length) {
            fieldList.forEach((element) => {
                const val = element.replace('{{', '').replace('}}', '').replace(this.dataTableInfo.tablename + '.', '');
                console.log(val, 'val');
                this.mailPayload.subject = this.mailPayload.subject.replace(element, this.getFieldValue(val) ? this.getFieldValue(val) : '');
                console.log(this.getFieldValue(val));
            });
        }
        fieldList = this.getListofFields(this.mailPayload.message.toString());
        console.log(fieldList, 'field list');
        console.log(this.getListofFields(this.mailPayload.message), 'field funtction');
        if (fieldList === null || fieldList === void 0 ? void 0 : fieldList.length) {
            fieldList.forEach((element) => {
                const val = element.replace('{{', '').replace('}}', '').replace(this.dataTableInfo.tablename + '.', '');
                console.log(val, 'val');
                console.log(this.getFieldValue(val));
                this.mailPayload.message = this.mailPayload.message.replace(element, this.getFieldValue(val) ? this.getFieldValue(val) : '');
            });
        }
        console.log(this.mailPayload, 'this.mailPayload check');
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
        console.log(template, 'template');
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
    } }, inputs: { dataTableInfo: "dataTableInfo", header: "header", toList: "toList", ccList: "ccList", bccList: "bccList", fieldValues: "fieldValues", airliftDomains: "airliftDomains", isAddField: "isAddField", isFrom: "isFrom", fileList: "fileList" }, outputs: { closeMail: "closeMail" }, decls: 60, vars: 24, consts: [["cdkDrag", "", 1, "email-card"], ["cdkDragHandle", "", 1, "email-header", "fw-500", "cursor-move"], [1, "text-center", 2, "letter-spacing", "0.5px"], [1, "material-icons", "text-center", "cursor", 3, "click"], ["class", "date-col text-center align-center fw-500", 4, "ngIf"], [1, "d-flex", "position-r", "sub-to-cc", "align-center"], [1, "sub-to-cc-text", "fw-500"], ["type", "text", "placeholder", "Subject", 1, "border-none", "mail-sub", 3, "ngModel", "ngModelChange", "click"], ["subjectArea", ""], ["class", "material-icons cursor mail-add-btn", "matRipple", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["yPosition", "below"], ["fieldMenu", "matMenu"], [1, "mail-field-search", 3, "click"], ["placeholder", "search fields ...", 1, "field-search", 3, "input"], [1, "mail-field-mat"], ["style", "user-select: none;", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["aria-label", "Mail selection", 1, "mail-chip-area"], ["mailchipList", ""], ["class", "chip-area", 3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add Mail...", "type", "email", 1, "border-none", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["mailccchipList", ""], ["class", "d-flex position-r height-30", 4, "ngIf"], [1, "mail-body", "position-r"], [1, "content-editor", 3, "ngModel", "placeholder", "theme", "modules", "click", "ngModelChange", "onContentChanged", "onSelectionChanged"], [1, "file-list-mail", "d-flex", "d-flex-wrap"], ["class", "file-chip", 4, "ngFor", "ngForOf"], [1, "footer-mail", "position-r"], ["class", "undo-timer cursor", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "plus-template", "material-icons", "cursor", 3, "matMenuTriggerFor", "menuClosed"], ["for", "dynmailfile", "matRipple", "", 1, "material-icons", "cursor", "mail-attc", "text-center"], ["id", "dynmailfile", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], [1, "footer-btn"], ["matRipple", "", 1, "mail-clear", "cursor", 3, "click"], ["matRipple", "", 1, "mail-send", "cursor", 3, "click"], ["plusMenu", "matMenu"], [3, "click"], ["class", "template-option cursor", "matRipple", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "template-option", 4, "ngIf"], ["templatename", ""], ["previewmail", ""], [1, "date-col", "text-center", "align-center", "fw-500"], [1, "border-btw"], [1, "mail-total"], ["matRipple", "", 1, "material-icons", "cursor", "mail-add-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 2, "user-select", "none", 3, "click"], [1, "chip-area", 3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "d-flex", "position-r", "height-30"], ["matRipple", "", 1, "add-field-mail", "cursor", 3, "matMenuTriggerFor", "focus", "click"], [1, "material-icons", "add-mail-btn"], [1, "file-chip"], [1, "file-label", "fw-500", 3, "matTooltip"], [1, "material-icons", "file-close", "cursor", "fw-500", 3, "click"], [1, "undo-timer", "cursor", 3, "click"], ["matRipple", "", 1, "template-option", "cursor", 3, "click"], ["matRipple", "", "class", "template-option cursor", 3, "click", 4, "ngIf"], [1, "template-option"], ["type", "text", "placeholder", "Search Template", 1, "border-none", "mail-sub", 3, "input"], ["class", "template-option cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "template-option", "cursor", 3, "click"], [1, "template-outer", "template-option"], [1, "template-name", "fw-500"], ["type", "text", "placeholder", "Enter Template Name", 3, "ngModel", "input", "ngModelChange"], ["class", "name-taken-template", 4, "ngIf"], [1, "footer-btn", "template-footer"], [1, "mail-clear", "cursor", 3, "mat-dialog-close"], [1, "mail-send", "button", "cursor", 3, "click"], [1, "name-taken-template"], [1, "email-card", "position-r", 2, "height", "550px", "box-shadow", "none"], [1, "email-header", "fw-500", "cursor-move"], [1, "material-icons", "text-center", "cursor", 3, "mat-dialog-close"], ["class", "chip-area", 3, "selectable", 4, "ngFor", "ngForOf"], [3, "content", "theme"], [1, "footer-btn", "preview-footer"], ["matRipple", "", 1, "mail-clear", "cursor", 3, "mat-dialog-close"], ["matRipple", "", 1, "mail-send", "cursor", 3, "mat-dialog-close"], [1, "chip-area", 3, "selectable"]], template: function SendMailComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFrom !== "table-report");
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
    url: 'https://api.airliftnet.com/tracking/',
    // url: 'http://localhost:8586/tracking/',
    fileUrl: 'https://api.airliftnet.com/trackingfiles/insert/'
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


























class MainViewModule {
}
MainViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewModule });
MainViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewModule_Factory(t) { return new (t || MainViewModule)(); }, providers: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]], imports: [[
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
            _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]] });
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
        _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"]], exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]] }); })();
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
                    _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_24__["SendMailModule"]
                ],
                exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]],
                providers: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "gbi4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");











function SideNavComponent_div_0_a_41_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_a_41_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.isSelectMenu = item_r4.table_name; return ctx_r5.goToProcess(item_r4.id, item_r4.table_name, item_r4.summarize_count); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.sideNavbtn(_r2); return ctx_r7.isToogleMenu == "menu" ? ctx_r7.isToogleMenu = "" : ctx_r7.isToogleMenu = "menu"; });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-sidenav-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-sidenav", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideNavComponent_div_0_Template_mat_sidenav_mouseover_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sideNavHover("over"); })("mouseout", function SideNavComponent_div_0_Template_mat_sidenav_mouseout_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sideNavHover("out"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.sideNavbtn(_r2); return ctx_r11.isToogleMenu == "menu" ? ctx_r11.isToogleMenu = "" : ctx_r11.isToogleMenu = "menu"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SideNavComponent_div_0_a_41_Template, 6, 7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-nav-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.redirectViewAllProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " select_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View All Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-sidenav-content", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "router-outlet");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
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
        let body = { table_name: "meta_table_data", limit: 100, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ show_on_side_nav: "yes" }, { is_delete: 0 }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.sidnavList = response.info;
            // if (!!this.sidnavList) {
            //   this.isSelectMenu = this.sidnavList[0].table_name;
            //   this.goToProcess(this.sidnavList[0].id,this.sidnavList[0].table_name)
            // }
            // console.log("side", this.sidnavList)
        });
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
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 7, vars: 1, consts: [["class", "container header-row-c", 4, "ngIf"], ["matMenuContent", ""], ["profile", "matMenu"], ["mat-menu-item", "", 1, "mat-menu-list-custom"], ["mat-menu-item", "", 1, "mat-menu-list-custom", 3, "click"], [1, "container", "header-row-c"], [1, "mat-toolbar-container"], [1, "logo"], [1, "menu-icon", "cursor", 3, "ngClass", "click"], ["href", "https://www.airliftusa.com/", "target", "_blank", 1, "link-text"], [1, "border-line-right"], [1, "welcome-grid"], [1, "align-center"], [1, "greeting"], [1, "user-container"], [1, "date-time"], [1, "border-h-t"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["alt", "Greetings", 1, "gif-i", 3, "ngClass", "src"], [1, "toolbar-secound"], [1, "adminbtn-grid"], [1, "time-container"], [1, "toolbar-secound-child-1"], [1, "toolbar-avator", 3, "matMenuTriggerFor"], ["src", "../../assets/img/usre-logo.jpg", 1, "avator"], [1, "sidenav-container"], ["mode", "side", "opened", "", 1, "bottom-button-open", "side-nav", 3, "mouseover", "mouseout"], ["sidenav", ""], ["mat-list-item", "", 1, "side-nav-toogle", "logo-bg", 3, "ngClass", "click"], [1, "side-nav-t-icon", 3, "ngClass"], ["href", "https://www.airliftusa.com/", "target", "_blank"], [1, "img-logo", 3, "src"], ["mat-list-item", "", "class", "menu-h", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "bottom-list"], ["mat-list-item", "", 1, "view-more", 3, "click"], [1, "side-nav-icon"], [1, "side-nav-text"], [3, "ngClass"], ["mat-list-item", "", 1, "menu-h", 3, "ngClass", "click"], [1, "side-nav-icon", 3, "ngClass"], [1, "side-nav-text", 3, "ngClass"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_div_0_Template, 50, 19, "div", 0);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.side-nav-icon[_ngcontent-%COMP%] {\n  color: var(--pinkish-grey-two) !important;\n  font-size: 20px !important;\n}\n\n.side-nav-text[_ngcontent-%COMP%] {\n  color: var(--white) !important;\n  font-size: 12px !important;\n}\n\n.side-nav-toogle[_ngcontent-%COMP%] {\n  background-color: var(--pinkish-grey-two) !important;\n}\n\n.side-nav-t-icon[_ngcontent-%COMP%] {\n  color: var(--black) !important;\n  font-size: 20px !important;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  border-right: 0px !important;\n  background-color: #545b70 !important;\n  \n  \n  height: 100% !important;\n  position: fixed !important;\n  z-index: 9999 !important;\n}\n\n.side-nav-margin-1[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\n\n.side-nav-margin-2[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\n\n.mat-toolbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  width: 100%;\n  height: 100%;\n  background: #545b70;\n  color: #fff;\n  letter-spacing: 0.5px;\n  opacity: 0.92;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 50px;\n  color: var(--white);\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n\n.menu-icon-u[_ngcontent-%COMP%] {\n  background-color: #929393;\n}\n\n.menu-icon-c[_ngcontent-%COMP%] {\n  background-color: #2f3a46;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  height: 45px;\n  display: flex;\n  margin-left: 14px;\n}\n\n.welcome-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px -webkit-max-content;\n  grid-template-columns: 40px max-content;\n  justify-content: left;\n  grid-gap: 5px;\n  width: -webkit-max-content;\n  width: max-content;\n  margin-left: 8px;\n}\n\n.date-time[_ngcontent-%COMP%] {\n  display: flex;\n  width: 78%;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  \n}\n\n.align-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.greeting[_ngcontent-%COMP%] {\n  \n  text-transform: capitalize;\n  font-size: 18px;\n  padding-right: 5px;\n  font-weight: 400;\n  \n}\n\n.user-container[_ngcontent-%COMP%] {\n  \n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n\n.toolbar-secound[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1% calc( 34% - 50px) 30% auto auto -webkit-max-content;\n  grid-template-columns: 1% calc( 34% - 50px) 30% auto auto max-content;\n  grid-gap: 10px;\n  position: absolute;\n  right: 42px;\n  top: 6px;\n}\n\n.adminbtn-grid[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n}\n\n.time-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n}\n\n.time[_ngcontent-%COMP%] {\n  border: 1px solid #c3c3c3;\n  padding: 0px 5px;\n  margin: 0px;\n  line-height: 20px;\n  border-radius: 2px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.nightClass[_ngcontent-%COMP%]{\n  filter: brightness(0) invert(1);\n}\n\n.gif-i[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: bold;\n  margin-left: 8px;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n}\n\n.border-h-t[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 16px;\n  background-color: #fff;\n  margin: 10px;\n}\n\n.toolbar-secound-child-1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.toolbar-avator[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-right: 17px;\n}\n\n.avator[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  box-shadow: 0 2px 5px rgba(224, 227, 231, .7);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bottom-button-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50px;\n  transition: width .2s;\n}\n\n.bottom-button-open[_ngcontent-%COMP%]:hover {\n  width: 200px;\n}\n\n.menu-select[_ngcontent-%COMP%] {\n  border-left: 3px solid #fff;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  color: #1e88e5;\n  background-color: var(--dark-two) !important;\n}\n\n.isactive-list-icon[_ngcontent-%COMP%] {\n  color: var(--white) !important;\n}\n\n.bottom-list[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #2f3a46;\n}\n\n.view-more[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n\n.mat-menu-list-custom[_ngcontent-%COMP%] {\n  line-height: 12px;\n  height: 35px;\n}\n\n.menu-h[_ngcontent-%COMP%]:hover {\n  background-color: var(--blue);\n  transition: background-color 1s ease;\n}\n\n\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0px;\n  background: #fff;\n  z-index: 9;\n  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);\n}\n\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  overflow: hidden;\n  overflow-y: auto;\n  font-weight: 500;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: rgba(86, 84, 84, 0.87);\n  align-items: center;\n  display: flex;\n  font-size: 16px;\n  height: 40px;\n  font-weight: 600;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n\n  .cdk-overlay-pane {\n  max-width: 99vw !important;\n}\n\n.avator[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  border-radius: 50%;\n  padding: 10px;\n  text-align: center;\n  width: 15px;\n  height: 15px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: 5px;\n}\n\n  .mat-menu-panel {\n  min-width: 112px;\n  max-width: 350px;\n}\n\n  .mat-tab-label-active {\n  color: #1e88e5 !important;\n  opacity: 1 !important;\n}\n\n  .mat-menu-content:not(:empty) {\n  padding-bottom: 0px !important;\n}\n\n  .mat-menu-panel-custom-class {\n  min-width: 450px !important;\n  max-width: 450px !important;\n}\n\n  .mat-drawer-content {\n  overflow: hidden !important;\n}\n\n  .api-list {\n  height: calc(100% - 100px);\n  overflow-y: auto;\n}\n\n.logo-bg[_ngcontent-%COMP%] {\n  background: #fff !important;\n}\n\n.logo-bg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  left: -12px;\n}\n\n.dark-mode[_ngcontent-%COMP%] {\n  color: #efa647;\n}\n\n.link-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  text-decoration: none;\n  margin-left: 20px;\n}\n\n.border-line-right[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  border-right: 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7RUFDakQsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkVBQXFFO0VBQXJFLHFFQUFxRTtFQUNyRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUVYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUEsbUhBQW1IOztBQUVuSDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlLW5hdi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXBpbmtpc2gtZ3JleS10d28pICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLW5hdi10b29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdHdvKSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2IHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI3MCAhaW1wb3J0YW50O1xuICAvKiAjMmYzYTQ2ICFpbXBvcnRhbnQgKi9cbiAgLyogb3BhY2l0eTogMC45MiAhaW1wb3J0YW50OyAqL1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LW1hcmdpbi0xIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLW5hdi1tYXJnaW4tMiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdG9vbGJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IGF1dG8gMzAlIDIzMHB4OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNTQ1YjcwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBvcGFjaXR5OiAwLjkyO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHBhZGRpbmctbGVmdDogMzlweDsgKi9cbn1cblxuLm1lbnUtaWNvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tZW51LWljb24tdSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MjkzOTM7XG59XG5cbi5tZW51LWljb24tYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNDY7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi53ZWxjb21lLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggbWF4LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZ3JpZC1nYXA6IDVweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZGF0ZS10aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDc4JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLyogY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7ICovXG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ3JlZXRpbmcge1xuICAvKiBjb2xvcjogIzc5Nzk3OWM3OyAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC8qIGxldHRlci1zcGFjaW5nOiAwLjVweDsgKi9cbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgLyogY29sb3I6ICM1ZDVkNWQ7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnRvb2xiYXItc2Vjb3VuZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMSUgY2FsYyggMzQlIC0gNTBweCkgMzAlIGF1dG8gYXV0byBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQycHg7XG4gIHRvcDogNnB4O1xufVxuXG4uYWRtaW5idG4tZ3JpZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjE2MTYxO1xufVxuXG4udGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5uaWdodENsYXNze1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xufVxuLmdpZi1pIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG59XG5cbi5ib3JkZXItaC10IHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50b29sYmFyLXNlY291bmQtY2hpbGQtMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50b29sYmFyLWF2YXRvciB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuXG4uYXZhdG9yIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMjI0LCAyMjcsIDIzMSwgLjcpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3R0b20tYnV0dG9uLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuMnM7XG4gIHRyYW5zaXRpb246IHdpZHRoIC4ycztcbn1cblxuLmJvdHRvbS1idXR0b24tb3Blbjpob3ZlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm1lbnUtc2VsZWN0IHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMxZTg4ZTU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdHdvKSAhaW1wb3J0YW50O1xufVxuXG4uaXNhY3RpdmUtbGlzdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuXG4uYm90dG9tLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNDY7XG59XG5cbi52aWV3LW1vcmUge1xuICBjb2xvcjogIzFlODhlNTtcbn1cblxuLm1hdC1tZW51LWxpc3QtY3VzdG9tIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1lbnUtaDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYigwIDAgMCAvIDEwJSk7XG59XG5cbi5tYXQtbGlzdC1iYXNlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1pY29uIHtcbiAgY29sb3I6IHJnYmEoODYsIDg0LCA4NCwgMC44Nyk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWF0LWxpc3QtYmFzZSBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgbWF4LXdpZHRoOiA5OXZ3ICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0b3Ige1xuICBiYWNrZ3JvdW5kOiAjMWU4OGU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwge1xuICBtaW4td2lkdGg6IDExMnB4O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6ICMxZTg4ZTUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LWNvbnRlbnQ6bm90KDplbXB0eSkge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwtY3VzdG9tLWNsYXNzIHtcbiAgbWluLXdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFwaS1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5sb2dvLWJnIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubG9nby1iZyBzcGFuIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMnB4O1xufVxuXG4uZGFyay1tb2RlIHtcbiAgY29sb3I6ICNlZmE2NDc7XG59XG5cbi5saW5rLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJvcmRlci1saW5lLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
        // const payload: any = {
        //   "limit": value.limit,
        //   "page": value.page,
        //   "db_name": "tracking_tb",
        //   "table_name": value.table_name,
        //   "sort_type": value.sort_type,
        //   "sort_field": value.sort_field
        // };
        return this.http.post(this.baseUrl + 'commonGet/', value, this.httpOptions);
    }
    getWorkFlow(value) {
        return this.http.post(this.baseUrl + 'commonWorkflow/', value, this.httpOptions);
    }
    getSummarizeCount(value) {
        return this.http.post(this.baseUrl + 'getTotalCount/', value, this.httpOptions);
    }
    getRowValues(value) {
        // const payload: any = {
        //   "limit": value.limit,
        //   "page": value.page,
        //   "db_name": "tracking_tb",
        //   "table_name": value.table_name,
        //   "sort_type": value.sort_type,
        //   "sort_field": value.sort_field
        // };
        return this.http.get(this.baseUrl + 'process/getFieldData/' + value.tableId + '/' + value.id + '/', this.httpOptions);
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
    getFiterTableValues(value) {
        return this.http.post(this.baseUrl + 'process/getTableData/', value, this.httpOptions);
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