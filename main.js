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
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");




















const _c0 = ["menuFilterTrigger"];
function TableViewComponent_div_0_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r17[ctx_r13.selectedSearchField.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17[ctx_r13.selectedSearchField.name], " ");
} }
function TableViewComponent_div_0_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_44_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r18.selectedSearchField.name = ""; ctx_r18.selectSearchValue = ""; return ctx_r18.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.selectedSearchField.display_value);
} }
const _c1 = function () { return [5, 10, 25, 50, 100, 150, 200]; };
function TableViewComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-paginator", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TableViewComponent_div_0_div_45_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r20.pageSize = $event.pageSize; ctx_r20.page = $event.pageIndex; ctx_r20.getBody.limit = $event.pageSize; ctx_r20.getBody.page = $event.pageIndex; return ctx_r20.getFilterValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r15.count)("pageSize", ctx_r15.pageSize)("pageIndex", ctx_r15.getBody.page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
function TableViewComponent_div_0_div_49_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_49_th_3_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.selectAll == true ? ctx_r27.selectAll = false : ctx_r27.selectAll = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableViewComponent_div_0_div_49_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_0_div_49_td_4_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const row_r29 = ctx.$implicit; return row_r29.checked = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_div_49_td_4_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const row_r29 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.redirectEditView(row_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", row_r29.checked || ctx_r23.selectAll == true);
} }
function TableViewComponent_div_0_div_49_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", column_r34 == null ? null : column_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mat-sort-header", column_r34 == null ? null : column_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r34 == null ? null : column_r34.name, " ");
} }
function TableViewComponent_div_0_div_49_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 80);
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    const column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", row_r39[column_r34 == null ? null : column_r34.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TableViewComponent_div_0_div_49_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_0_div_49_ng_container_5_th_1_Template, 2, 3, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_div_0_div_49_ng_container_5_td_2_Template, 1, 1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r34 == null ? null : column_r34.name);
} }
function TableViewComponent_div_0_div_49_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 81);
} }
function TableViewComponent_div_0_div_49_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 82);
} }
function TableViewComponent_div_0_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TableViewComponent_div_0_div_49_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r42.getBody.sort_type = $event.direction; ctx_r42.getBody.sort_field = $event.active; return ctx_r42.getFilterValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_div_0_div_49_th_3_Template, 3, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableViewComponent_div_0_div_49_td_4_Template, 5, 1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableViewComponent_div_0_div_49_ng_container_5_Template, 3, 1, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableViewComponent_div_0_div_49_tr_6_Template, 1, 0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableViewComponent_div_0_div_49_tr_7_Template, 1, 0, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r16.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sticky", ctx_r16.itsSticky);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.metaData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r16.columnsToDisplay1)("matHeaderRowDefSticky", ctx_r16.itsSticky);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r16.columnsToDisplay1);
} }
function TableViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.redirectCreateView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.goToProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.openFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "border_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableViewComponent_div_0_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.selectSearchValue = $event; })("input", function TableViewComponent_div_0_Template_input_input_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.getSearchValues($event.target.value); })("click", function TableViewComponent_div_0_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.selectedSearchField.name == "" ? _r11.openMenu() : _r11.closeMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", 12, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_0_Template_mat_autocomplete_optionSelected_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r51.selectSearchValue = $event.option.value; return ctx_r51.getFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TableViewComponent_div_0_mat_option_42_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TableViewComponent_div_0_div_44_Template, 5, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableViewComponent_div_0_div_45_Template, 2, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TableViewComponent_div_0_div_49_Template, 8, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tableInfo.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tableInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8)("ngModel", ctx_r0.selectSearchValue)("matAutocomplete", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedSearchField.name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.metaData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnsToDisplay1.length && !!ctx_r0.metaData1 && ctx_r0.loaded == "true" && !!ctx_r0.data1);
} }
function TableViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
function TableViewComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_mat_option_20_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const item_r52 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.fieldType = item_r52.field_type; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r52 == null ? null : item_r52.field_title, " ");
} }
function TableViewComponent_div_21_div_1_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemvalue_r63 = ctx.$implicit;
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemvalue_r63[ctx_r58.filterValueTemp[item_r56].fields]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemvalue_r63[ctx_r58.filterValueTemp[item_r56].fields], " ");
} }
function TableViewComponent_div_21_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_div_16_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const i_r66 = ctx.index; const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.deleteFieldValues(item_r56, i_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", val_r65, " ");
} }
function TableViewComponent_div_21_div_1_div_26_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_div_26_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const itemc_r71 = ctx.$implicit; const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.filterValueTemp[item_r56].condition = itemc_r71.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r71.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r71.field, " ");
} }
function TableViewComponent_div_21_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_21_div_1_div_26_mat_option_1_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.operation);
} }
function TableViewComponent_div_21_div_1_div_27_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_div_27_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const itemc_r76 = ctx.$implicit; const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.filterValueTemp[item_r56].condition = itemc_r76.field; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemc_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemc_r76.fieldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemc_r76.field, " ");
} }
function TableViewComponent_div_21_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_21_div_1_div_27_mat_option_1_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.operationNum);
} }
function TableViewComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_div_21_div_1_Template_input_input_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.getAddValues(ctx_r80.filterValueTemp[item_r56].fields, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 12, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_div_21_div_1_Template_mat_autocomplete_optionSelected_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.selectValue($event.option.value, item_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_div_21_div_1_mat_option_14_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableViewComponent_div_21_div_1_div_16_Template, 4, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableViewComponent_div_21_div_1_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.filterValueTemp[item_r56].condition = $event; })("click", function TableViewComponent_div_21_div_1_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return _r60.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TableViewComponent_div_21_div_1_div_26_Template, 2, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TableViewComponent_div_21_div_1_div_27_Template, 2, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.filterValueTemp[item_r56].operator = "OR"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.filterValueTemp[item_r56].operator = "AND"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "AND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_div_21_div_1_Template_mat_icon_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const item_r56 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.deleteFilterRow(item_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.filterValueTemp[item_r56].fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.filterAddValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.filterValueTemp[item_r56].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r55.filterValueTemp[item_r56].condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.fieldType == "VARCHAR" || ctx_r55.fieldType == "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.fieldType != "VARCHAR" && ctx_r55.fieldType != "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r55.filterValueTemp[item_r56].operator == "OR" ? "f-or-and-btn-c" : "f-or-and-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r55.filterValueTemp[item_r56].operator == "AND" ? "f-or-and-btn-c" : "f-or-and-btn");
} }
function TableViewComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_21_div_1_Template, 37, 13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.filtercount);
} }
function TableViewComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 113);
} }
function TableViewComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_31_div_1_Template, 1, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableViewComponent_div_31_Template_mat_checkbox_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const col_r88 = ctx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.setCol($event.checked, col_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r88 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r7.hideColumns.includes(col_r88) ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r88);
} }
function TableViewComponent_span_43_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_span_43_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.searchFieldSelected(item_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r92 == null ? null : item_r92.field_title, " ");
} }
function TableViewComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_span_43_button_1_Template, 2, 1, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(item_r92 == null ? null : item_r92.name));
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
        this.columnsToDisplay1 = ["select"];
        this.pageSize = 10;
        this.page = 0;
        this.getBody = { table_name: "", limit: this.pageSize, page: 0, sort_type: "ASC", sort_field: "id" };
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
    }
    ngOnInit() {
        this.aRouter.queryParams.subscribe((params) => {
            this.routeId = params;
            if (!!this.routeId) {
                this.tableId = this.routeId.id;
                this.getBody.table_name = this.routeId.tablename;
                this.getTableData();
                this.getColumns();
                this.getFilter();
            }
        });
    }
    getTableData() {
        let body = { table_name: "meta_table_data", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ id: this.tableId }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.tableInfo = response.info[0];
            this.getBody.table_name = this.tableInfo.table_name;
        });
    }
    getColumns() {
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
        this.metaData1 = [];
        this.columnsToDisplay1 = ["select"];
        let value = { table_name: this.routeId.tablename };
        this.CommonService.getMetaData(value).subscribe((response) => {
            this.metaData1 = response.info;
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
        });
    }
    getFilter() {
        // this.filterValue = '';
        // this.filterValueTemp = '';
        this.tableLoaded = true;
        this.loaded = "false";
        this.filtercount = [];
        let body = { table_name: "filter_data", limit: 1, page: 0, sort_type: "ASC", sort_field: "id", filter: [{ "user_id": 2 }, { "table_id": this.routeId.id }] };
        this.CommonService.getValues(body).subscribe((response) => {
            if (!!response.info.length && response.info[0].filter_json != "") {
                let len = response.info.length;
                this.filterValue = JSON.parse(response.info[(len - 1)].filter_json);
                this.filterId = response.info[(len - 1)].id;
                this.filterValueTemp = this.filterValue;
                this.getFilterValues();
                let countKey = Object.keys(this.filterValueTemp).length;
                for (let i = 0; i < countKey; i++) {
                    this.filtercount.push(i);
                }
                for (let i = 0; i < countKey; i++) {
                    let keyslen = Object.keys(this.filterValueTemp[i]).length;
                    keyslen = keyslen - 3;
                    this.filterValueTemp[i]['value'] = [];
                    for (let j = 1; j <= keyslen; j++) {
                        this.filterValueTemp[i].value.push(this.filterValueTemp[i][j]);
                        delete this.filterValueTemp[i][j];
                    }
                }
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
        // delete this.filterValueTemp[item];
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
        this.loaded = "false";
        this.filterValue = this.filterValueTemp;
        for (let i = 0; i < this.filtercount.length; i++) {
            for (let j = 1; j <= this.filterValue[i].value.length; j++) {
                this.filterValue[i][j] = this.filterValue[i].value[(j - 1)];
            }
            delete this.filterValue[i]["value"];
        }
        // this.getFilterValues();
        this.putFilter(this.filterValue);
    }
    putFilter(value) {
        this.loaded = "false";
        let temp2 = value;
        let temp3 = JSON.stringify(temp2);
        let temp = {
            "user_id": 2,
            "table_id": this.routeId.id,
            "filter_json": temp3
        };
        this.CommonService.putFiterValues(temp).subscribe((response) => {
            this.getFilter();
        });
    }
    getFilterValues() {
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
        this.CommonService.getFiterValues(this.getBody).subscribe((response) => {
            this.getBody = { table_name: this.routeId.tablename, limit: this.pageSize, page: this.page, sort_type: "ASC", sort_field: "id" };
            // this.selectSearchValue='';
            this.data1 = response.info;
            console.log("getFilterValues()", this.data1);
            this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data1);
            this.loaded = "true";
            this.count = response.total_count[0][cot];
            if (this.getBody.hasOwnProperty("filter")) {
                delete this.getBody["filter"];
            }
            this.tableLoaded = false;
        });
    }
    getAddFields(value) {
        let body = { table_name: "meta_field_data", limit: 10, page: 0, sort_type: "ASC", sort_field: "id", "search": [{ "field_title": value }], "filter": [{ "table_name": this.routeId.tablename }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.filterAddField = response.info;
        });
    }
    getAddValues(fields, value) {
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
    selectValue(e, index) {
        if (!!e) {
            this.filterValueTemp[index].value.push(e);
        }
    }
    selectField(e) {
        if (!this.filterValueTemp) {
            let temp = 0;
            this.filtercount.push(temp);
            if (!!e) {
                this.filterValueTemp = {};
                this.filterValueTemp["0"] = { condition: "", fields: e, operator: "", value: [], type: this.fieldType };
                this.filterFieldSelect = '';
            }
        }
        else {
            if (!!e) {
                let len = this.filtercount.length;
                this.filtercount.push(len);
                this.filterValueTemp[len] = { condition: "", fields: e, operator: "", value: [], type: this.fieldType };
                this.filterFieldSelect = '';
            }
        }
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
}
TableViewComponent.ɵfac = function TableViewComponent_Factory(t) { return new (t || TableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableViewComponent, selectors: [["app-table-view"]], viewQuery: function TableViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuFilterTrigger = _t.first);
    } }, decls: 44, vars: 8, consts: [["class", "container", 4, "ngIf"], ["class", "position-r full-height", 4, "ngIf"], ["menuFilter", "matMenu"], [1, "filter-container", 3, "click"], [1, "filter-header"], [1, "f-close-icon", 3, "click"], [1, "filter-body"], [1, "filter-add-fields"], [1, "filter-text"], [1, "filter-add-input"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "ngModel", "input", "ngModelChange"], [1, "f-close-icon"], [3, "optionSelected"], ["addField", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "filter-max-h", 4, "ngIf"], [1, "filter-footer"], [1, "filter-reset-btn", 3, "click"], [1, "filter-apply-btn", 3, "click"], ["menuSearch", "matMenu"], ["cdkDropList", "", 3, "cdkDropListDropped", "click"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "col-order-footer"], [1, "col-cancel-btn"], [1, "col-apply-btn", 3, "click"], ["search", "matMenu"], [1, "search-select-hint"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "header"], [1, "process-icon"], [1, "icon-alignment", "h-icon"], [1, "heading"], [1, "description"], [1, "new-btn", "cursor", 3, "click"], [1, "icon-alignment", "f-size"], [1, "edit-process-btn", "cursor", 3, "click"], [1, "report-btn", "cursor"], [1, "more-btn", "cursor"], [1, "utils"], ["matTooltip", "Filter", "matTooltipPosition", "above", 1, "col-btn", "cursor", 3, "matMenuTriggerFor", "click"], ["menuFilterTrigger", "matMenuTrigger"], [1, "icon-alignment", "col-icon"], [1, "col-btn", "cursor", 3, "matMenuTriggerFor"], [1, "search"], ["type", "text", "placeholder", "Search", 1, "ser-input", 3, "matMenuTriggerFor", "ngModel", "matAutocomplete", "ngModelChange", "input", "click"], ["menuTrigger", "matMenuTrigger"], [1, "search-icon", "icon-alignment"], ["addSearchField", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "chip-flex", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "table-data-info-container"], [1, "container-t"], [1, "table-container", "position-r"], ["class", "example-container", 4, "ngIf"], [3, "value"], [1, "chip-flex"], [1, "chip-close", 3, "click"], [1, "pagination"], [2, "background", "none", 3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "example-container"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "select", 3, "sticky"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [1, "select-column-container"], ["color", "primary", 3, "change"], ["mat-cell", ""], [1, "select-column-container", "select-column-container-td"], ["color", "primary", 1, "select-column-list", "select-item", 3, "checked", "change"], ["matTooltip", "Edit", 1, "lanuch-icon", 3, "click"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "id", "mat-sort-header", 4, "matHeaderCellDef"], ["mat-cell", "", "tabindex", "-1", "fields", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-cell", "", 3, "id", "mat-sort-header"], ["mat-cell", "", "tabindex", "-1", "fields", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", ""], [1, "position-r", "full-height"], [1, "spinner", "spin-class", 3, "diameter"], [3, "value", "click"], [1, "filter-max-h"], ["class", "filter-row-c", 4, "ngFor", "ngForOf"], [1, "filter-row-c"], [1, "filter-row-g"], [1, "f-list-icon"], ["type", "text", 1, "filter-field-input", 3, "matAutocomplete", "input"], ["addValue", "matAutocomplete"], [1, "filter-value-f"], ["class", "filter-value-c-f", 4, "ngFor", "ngForOf"], ["type", "text", 1, "filter-field-input", 3, "ngModel", "ngModelChange", "click"], [1, "select-p"], ["select", ""], [4, "ngIf"], [1, "f-o-a-g"], [3, "click"], [1, "filter-delete-icon", 3, "click"], [1, "filter-value-c-f"], [1, "filter-v-v-icon", 3, "click"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "check-box-g"], [3, "checked", "change"], [1, "text-wrap"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "18px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "example-custom-placeholder"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]], template: function TableViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableViewComponent_div_0_Template, 50, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_div_click_4_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_mat_icon_click_8_listener() { return ctx.closeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableViewComponent_Template_input_input_15_listener($event) { return ctx.getAddFields($event.target.value); })("ngModelChange", function TableViewComponent_Template_input_ngModelChange_15_listener($event) { return ctx.filterFieldSelect = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TableViewComponent_Template_mat_autocomplete_optionSelected_18_listener($event) { return ctx.selectField($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableViewComponent_mat_option_20_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableViewComponent_div_21_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_23_listener() { return ctx.deleteFilter("reset"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_25_listener() { return ctx.deleteFilter("apply"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-menu", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TableViewComponent_Template_div_cdkDropListDropped_30_listener($event) { return ctx.drop($event); })("click", function TableViewComponent_Template_div_click_30_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TableViewComponent_div_31_Template, 10, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_Template_button_click_37_listener() { return ctx.putColumns(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-menu", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Select the field, for searching on it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TableViewComponent_span_43_Template, 2, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.tableInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r3)("ngModel", ctx.filterFieldSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterAddField);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.filtercount.length && !!ctx.filterValueTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metaData1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n  margin-bottom: 0;\n  box-sizing: border-box;\n  height: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px calc(100% - 381px) 87px 87px 87px 30px;\n  grid-gap: 10px;\n  padding-bottom: 15px;\n  align-items: center;\n  border-bottom: 1px solid var(--pinkish-grey);\n}\n\n  .mat-menu-panel {\n  max-width: 100% !important;\n}\n\n.new-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0px;\n  background-color: var(--blue);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.edit-process-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.more-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--greyish);\n  background-color: var(--pale-grey);\n  color: var(--black);\n  align-items: center;\n  height: 26px;\n  justify-content: center;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 12px;\n}\n\n.f-size[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.h-icon[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 32px;\n  height: 32px !important;\n  width: 32px !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  font-size: 12px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--charcoal-grey);\n}\n\n.process-icon[_ngcontent-%COMP%] {\n  display: grid;\n  background-color: var(--blue);\n  border-radius: 2px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.utils[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 40px 240px calc(100% - 782px) 400px;\n  grid-gap: 15px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n  justify-content: center;\n  align-items: center;\n}\n\n.filter-container[_ngcontent-%COMP%] {\n  min-height: 225px;\n  position: relative;\n  padding-bottom: 45px;\n}\n\n.filter-max-h[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: scroll;\n}\n\n.filter-header[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  padding: 2px 10px 10px 15px;\n  color: var(--warm-grey);\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.f-close-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.filter-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  grid-gap: 15px;\n}\n\n.filter-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--warm-grey);\n}\n\n.filter-field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  z-index: 999999;\n}\n\n.filter-add-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  width: 640px;\n}\n\n.filter-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-top: 1px solid var(--silver);\n  position: absolute;\n  display: flex;\n  bottom: 0;\n  width: 640px;\n  justify-content: flex-end;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--greyish-two);\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  border-radius: 2px;\n  padding: 6px 12px;\n  color: var(--white);\n  cursor: pointer;\n}\n\n.filter-row-c[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 70px;\n  max-height: 200px;\n  grid-gap: 15px;\n}\n\n.filter-value-f[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.filter-value-c-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid var(--pinkish-grey-two);\n  border-radius: 2px;\n  margin-right: 10px;\n  margin-top: 10px;\n  background-color: var(--silver);\n  color: var(--warm-grey);\n  font-size: 12px;\n  align-items: center;\n  padding: 2px 2px;\n}\n\n.filter-v-v-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 16px;\n  height: 18px !important;\n  width: 18px !important;\n  align-items: center;\n  cursor: pointer;\n  justify-content: right;\n}\n\n.filter-row-g[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 250px 150px 180px;\n  grid-gap: 10px;\n  align-items: flex-start;\n}\n\n.f-list-icon[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  margin-top: 24px;\n}\n\n.filter-delete-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--warm-grey);\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n\n.f-or-and-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--pinkish-grey-three);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.f-or-and-btn-c[_ngcontent-%COMP%] {\n  background-color: var(--pale-blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  font-size: 12px;\n  color: var(--warm-grey);\n  padding: 6px;\n  cursor: pointer;\n}\n\n.select-p[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n}\n\n.f-o-a-g[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: grid;\n  align-items: center;\n  grid-gap: 10px;\n  grid-auto-flow: column;\n}\n\n.filter-add-input[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 2px;\n  align-items: center;\n  padding: 0px 2px 2px 6px;\n  color: var(--warm-grey);\n  position: relative;\n}\n\n.filter-condition[_ngcontent-%COMP%] {\n  border: 1px solid var(--pinkish-grey);\n  padding: 0px 2px 2px 6px;\n  height: 24px;\n  border-radius: 2px;\n  display: grid;\n  align-items: center;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  height: 345px;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 10px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px !important;\n  width: 20px !important;\n  color: var(--warm-grey);\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-right: 4px;\n  padding-left: 4px;\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n}\n\n.search-select-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  padding: 2px 21px 0px 12px;\n  color: red;\n}\n\n.chip-close[_ngcontent-%COMP%] {\n  color: var(--warm-grey) !important;\n  font-size: 18px;\n  height: 18px !important;\n  width: 18px !important;\n  display: grid;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n}\n\n.chip-flex[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--pinkish-grey-two);\n  width: -webkit-max-content;\n  width: max-content;\n  font-size: 12px;\n  padding: 2px 10px;\n  color: var(--black);\n  align-items: center;\n  border-radius: 10px;\n}\n\n.ser-input[_ngcontent-%COMP%] {\n  height: 28px !important;\n}\n\n.col-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid var(--pinkish-grey-three);\n  border-radius: 2px;\n  height: 30px !important;\n}\n\n.col-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--warm-grey);\n}\n\n\n\n.container-t[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n  min-width: 128vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-spacing: 0px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  border-radius: 3px;\n  min-height: 10%;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  color: #797979;\n}\n\ntd.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  font-weight: 400;\n  color: #5f5f5f;\n  border-bottom-width: 0.5px !important;\n  max-width: 210px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  border-bottom: 1px solid #f2efef;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border: none;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  height: 55px;\n}\n\n.select-column-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  padding-left: 10px;\n  min-width: 70px;\n  max-width: 70px;\n}\n\n.select-column-container-td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.select-column-list[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.table-data-info-container[_ngcontent-%COMP%] {\n  height: 77vh;\n  overflow: auto;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: solid 1px #ccc;\n  color: var(--black);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  \n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  color: var(--warm-grey);\n  display: grid;\n  position: absolute;\n  right: 5px;\n  margin-left: 10px;\n  cursor: move;\n}\n\n.check-box-g[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.text-wrap[_ngcontent-%COMP%] {\n  max-width: 210px;\n  margin-right: 25px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: var(--blue) !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n}\n\n.col-order-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px;\n  border-top: 1px solid var(--pinkish-grey);\n}\n\n.col-cancel-btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  background-color: #99999936;\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 2px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--black);\n  padding: 3px 8px;\n}\n\n.col-apply-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--pinkish-grey);\n  border-radius: 2px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--white);\n  padding: 3px 8px;\n}\n\n.lanuch-icon[_ngcontent-%COMP%] {\n  color: var(--blue);\n  cursor: pointer;\n  font-size: 22px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  border:none;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi12aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtFQUFrRTtFQUNsRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUlBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFJQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7c0NBRW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0NBQXdDO0FBQzFDOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4tdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBjYWxjKDEwMCUgLSAzODFweCkgODdweCA4N3B4IDg3cHggMzBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubmV3LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lZGl0LXByb2Nlc3MtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJlcG9ydC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubW9yZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZi1zaXplIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaC1pY29uIHtcbiAgY29sb3I6ICNmZmZmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpO1xufVxuXG4ucHJvY2Vzcy1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnV0aWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDQwcHggMjQwcHggY2FsYygxMDAlIC0gNzgycHgpIDQwMHB4O1xuICBncmlkLWdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMjI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG59XG5cbi5maWx0ZXItbWF4LWgge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmZpbHRlci1oZWFkZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBwYWRkaW5nOiAycHggMTBweCAxMHB4IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mLWNsb3NlLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uZmlsdGVyLWZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmZpbHRlci1hZGQtZmllbGRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDVweDtcbiAgd2lkdGg6IDY0MHB4O1xufVxuXG4uZmlsdGVyLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNpbHZlcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5maWx0ZXItcmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjb2xvcjogdmFyKC0tZ3JleWlzaC10d28pO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlci1hcHBseS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItcm93LWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG59XG5cbi5maWx0ZXItdmFsdWUtZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlci12YWx1ZS1jLWYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDJweDtcbn1cblxuLmZpbHRlci12LXYtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmZpbHRlci1yb3ctZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAyNTBweCAxNTBweCAxODBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZi1saXN0LWljb24ge1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuXG5cbi5maWx0ZXItZGVsZXRlLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZi1vci1hbmQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXktdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHBhZGRpbmc6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZi1vci1hbmQtYnRuLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdC1wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbn1cblxuLmYtby1hLWcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbn1cblxuLmZpbHRlci1hZGQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAycHggMnB4IDZweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbHRlci1jb25kaXRpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBwYWRkaW5nOiAwcHggMnB4IDJweCA2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzQ1cHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG59XG5cbi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zZWFyY2gtc2VsZWN0LWhpbnQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4IDIxcHggMHB4IDEycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jaGlwLWNsb3NlIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmNoaXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXItaW5wdXQge1xuICBoZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua2lzaC1ncmV5LXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbn1cblxuLyogLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDc3dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZS1zdGlja3kge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuXG4ubWF0LWNvbHVtbi1maWxsZXIge1xuIFxuIFxufVxuXG4ubWF0LWhlYWRlci1jZWxsLFxuLm1hdC1mb290ZXItY2VsbCxcbi5tYXQtY2VsbCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtpc2gtZ3JleS10d28pO1xufVxuLm1hdC1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLm1hdC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5tYXQtaGVhZGVyLXJvdyxcbi5tYXQtZm9vdGVyLXJvdyxcbi5tYXQtcm93IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSAqL1xuXG4uY29udGFpbmVyLXQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxMjh2aDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLWhlaWdodDogMTAlO1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNzk3OTc5O1xufVxuXG50ZC5tYXQtY2VsbCxcbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZWZlZjtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5zZWxlY3QtY29sdW1uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1heC13aWR0aDogNzBweDtcbn1cblxuLnNlbGVjdC1jb2x1bW4tY29udGFpbmVyLXRkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlbGVjdC1jb2x1bW4tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG4udGFibGUtZGF0YS1pbmZvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNzd2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtaGFuZGxlIHtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmNoZWNrLWJveC1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LXdyYXAge1xuICBtYXgtd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMDMgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4uY29sLW9yZGVyLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xufVxuXG4uY29sLWNhbmNlbC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTM2O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG4uY29sLWFwcGx5LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG4ubGFudWNoLWljb24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxudGFibGUge1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG50YWJsZSB0ZDpmaXJzdC1jaGlsZCwgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxudGFibGUgdGQ6bGFzdC1jaGlsZCwgdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-view',
                templateUrl: './table-view.component.html',
                styleUrls: ['./table-view.component.css']
            }]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { menuFilterTrigger: [{
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
    url: 'https://api.myairliftusa.com/tracking/'
    // url: 'http://localhost:8586/tracking/'
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





















class MainViewModule {
}
MainViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainViewModule });
MainViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainViewModule_Factory(t) { return new (t || MainViewModule)(); }, imports: [[
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
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"]
        ]] });
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
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"]], exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"]] }); })();
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
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"]
                ],
                exports: [_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_4__["TableViewComponent"]]
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
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function SideNavComponent_div_0_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.isSelectMenu = item_r4.table_name; return ctx_r5.goToProcess(item_r4.id, item_r4.table_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "menu-select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.isSelectMenu == item_r4.table_name ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.display_name);
} }
function SideNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome Back, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " User! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideNavComponent_div_0_Template_mat_sidenav_mouseover_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sideNavHover("over"); })("mouseout", function SideNavComponent_div_0_Template_mat_sidenav_mouseout_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sideNavHover("out"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r10.sideNavbtn(_r2); return ctx_r10.isToogleMenu == "menu" ? ctx_r10.isToogleMenu = "" : ctx_r10.isToogleMenu = "menu"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SideNavComponent_div_0_a_29_Template, 5, 5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-nav-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.redirectViewAllProcess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " select_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View All Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-sidenav-content", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.isNavOnClickOpen || ctx_r0.isNavOpen ? "200px" : "50px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "menu-select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "isactive-list-icon" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sidnavList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isToogleMenu == "menu" ? "side-nav-margin-1" : "side-nav-margin-2");
} }
class SideNavComponent {
    constructor(route, CommonService, aRouter) {
        this.route = route;
        this.CommonService = CommonService;
        this.aRouter = aRouter;
        this.isNavOnClickOpen = false;
        this.isNavOpen = false;
        this.isToogleMenu = '';
        this.time = '';
    }
    ngOnInit() {
        this.dashboard = this.route.url;
        this.getTableData();
        this.setTime();
        setInterval((() => this.setTime()), 1000);
    }
    getTableData() {
        console.log("side", this.sidnavList);
        let body = { table_name: "meta_table_data", limit: 100, page: 0, sort_type: "ASC", sort_field: "id", "filter": [{ show_on_side_nav: "yes" }, { is_delete: 0 }] };
        this.CommonService.getValues(body).subscribe((response) => {
            this.sidnavList = response.info;
            // if (!!this.sidnavList) {
            //   this.isSelectMenu = this.sidnavList[0].table_name;
            //   this.goToProcess(this.sidnavList[0].id,this.sidnavList[0].table_name)
            // }
            console.log("side", this.sidnavList);
        });
    }
    goToProcess(t_id, t_name) {
        this.route.navigate(['/dashboard/view', t_name], { queryParams: { id: t_id, tablename: t_name } });
    }
    redirectViewAllProcess() {
        this.route.navigate(['view-all-process']);
    }
    setTime() {
        this.time = moment__WEBPACK_IMPORTED_MODULE_1__().format('hh:mm:ss A');
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
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 7, vars: 1, consts: [["class", "container header-row-c", 4, "ngIf"], ["matMenuContent", ""], ["profile", "matMenu"], ["mat-menu-item", "", 1, "mat-menu-list-custom"], [1, "container", "header-row-c"], [1, "mat-toolbar-container"], [1, "logo"], ["href", "https://www.airliftusa.com/", "target", "_blank"], ["src", "../../assets/img/logo.png", 1, "img-logo"], [1, "welcome-grid"], [1, "align-center"], [1, "greeting"], [1, "user-container"], [1, "toolbar-secound"], [1, "adminbtn-grid"], [1, "time-container"], ["id", "time", 1, "time"], [1, "toolbar-secound-child-1"], [1, "toolbar-avator", 3, "matMenuTriggerFor"], ["src", "../../assets/img/usre-logo.jpg", 1, "avator"], [1, "sidenav-container"], ["mode", "side", "opened", "", 1, "bottom-button-open", "side-nav", 3, "mouseover", "mouseout"], ["sidenav", ""], ["mat-list-item", "", 1, "side-nav-toogle", 3, "ngClass", "click"], [1, "side-nav-t-icon", 3, "ngClass"], ["mat-list-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "bottom-list"], ["mat-list-item", "", 1, "view-more", 3, "click"], [1, "side-nav-icon"], [1, "side-nav-text"], [3, "ngClass"], ["mat-list-item", "", 3, "ngClass", "click"], [1, "side-nav-icon", 3, "ngClass"], [1, "side-nav-text", 3, "ngClass"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_div_0_Template, 38, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.sidnavList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.side-nav-icon[_ngcontent-%COMP%] {\n  color: var(--pinkish-grey-two) !important;\n  font-size: 20px !important;\n}\n\n.side-nav-text[_ngcontent-%COMP%] {\n  color: var(--pinkish-grey-two) !important;\n  font-size: 15px !important;\n}\n\n.side-nav-toogle[_ngcontent-%COMP%] {\n  background-color: var(--pinkish-grey-two) !important;\n}\n\n.side-nav-t-icon[_ngcontent-%COMP%] {\n  color: var(--black) !important;\n  font-size: 20px !important;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  border-right: 0px !important;\n  background-color: var(--black) !important;\n  opacity: 0.92 !important;\n  height: 100% !important;\n  position: fixed !important;\n  z-index: 9999 !important;\n}\n\n.side-nav-margin-1[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\n\n.side-nav-margin-2[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\n\n.mat-toolbar-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 40% 30%;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 39px;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  height: 32px;\n  display: flex;\n}\n\n.welcome-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px -webkit-max-content;\n  grid-template-columns: 40px max-content;\n  justify-content: center;\n  grid-gap: 5px;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.greeting[_ngcontent-%COMP%] {\n  color: #797979;\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 18px;\n  padding-right: 5px;\n}\n\n.user-container[_ngcontent-%COMP%] {\n  color: #797979;\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.toolbar-secound[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1% 40% auto auto -webkit-max-content;\n  grid-template-columns: 1% 40% auto auto max-content;\n  grid-gap: 10px;\n}\n\n.adminbtn-grid[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n}\n\n.time-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #616161;\n}\n\n.time[_ngcontent-%COMP%] {\n  border: 1px solid #c3c3c3;\n  padding: 0px 5px;\n  margin: 0px;\n  line-height: 20px;\n  border-radius: 2px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.toolbar-secound-child-1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.toolbar-avator[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-right: 10px;\n}\n\n.avator[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  box-shadow: 0 2px 5px rgba(224, 227, 231, .7);\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bottom-button-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 50px;\n  transition: width .2s;\n}\n\n.bottom-button-open[_ngcontent-%COMP%]:hover {\n  width: 200px;\n}\n\n.menu-select[_ngcontent-%COMP%] {\n  border-left: 3px solid #1e88e5;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  color: #1e88e5;\n}\n\n.isactive-list-icon[_ngcontent-%COMP%] {\n  color: var(--blue) !important;\n}\n\n.bottom-list[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.view-more[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n\n.mat-menu-list-custom[_ngcontent-%COMP%] {\n  line-height: 12px;\n  height: 35px;\n}\n\n\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0px 12px;\n  background: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  z-index: 0;\n}\n\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: rgba(86, 84, 84, 0.87);\n  align-items: center;\n  display: flex;\n  font-size: 16px;\n  height: 40px;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 13px;\n}\n\n  .cdk-overlay-pane {\n  max-width: 99vw !important;\n}\n\n.avator[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  border-radius: 50%;\n  padding: 10px;\n  text-align: center;\n  width: 15px;\n  height: 15px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: 5px;\n}\n\n  .mat-menu-panel {\n  min-width: 112px;\n  max-width: 350px;\n}\n\n  .mat-tab-label-active {\n  color: #1e88e5 !important;\n  opacity: 1 !important;\n}\n\n  .mat-menu-content:not(:empty) {\n  padding-bottom: 0px !important;\n}\n\n  .mat-menu-panel-custom-class {\n  min-width: 450px !important;\n  max-width: 450px !important;\n\n}\n\n  .mat-drawer-content {\n  overflow: hidden !important;\n}\n\n  .api-list {\n  height: calc(100% - 100px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQW1EO0VBQW5ELG1EQUFtRDtFQUNuRCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0EsbUhBQW1IOztBQUduSDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjs7QUFFN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnNpZGUtbmF2LWljb24ge1xuICBjb2xvcjogdmFyKC0tcGlua2lzaC1ncmV5LXR3bykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLW5hdi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXBpbmtpc2gtZ3JleS10d28pICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtdG9vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGlua2lzaC1ncmV5LXR3bykgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLW5hdiB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjkyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1uYXYtbWFyZ2luLTEge1xuICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbmF2LW1hcmdpbi0yIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDQwJSAzMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzOXB4O1xufVxuXG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53ZWxjb21lLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggbWF4LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdyZWV0aW5nIHtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b29sYmFyLXNlY291bmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDElIDQwJSBhdXRvIGF1dG8gbWF4LWNvbnRlbnQ7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG4uYWRtaW5idG4tZ3JpZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNjE2MTYxO1xufVxuXG4udGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRvb2xiYXItc2Vjb3VuZC1jaGlsZC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRvb2xiYXItYXZhdG9yIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5hdmF0b3Ige1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgyMjQsIDIyNywgMjMxLCAuNyk7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvdHRvbS1idXR0b24tb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4ycztcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xufVxuXG4uYm90dG9tLWJ1dHRvbi1vcGVuOmhvdmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubWVudS1zZWxlY3Qge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxZTg4ZTU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBjb2xvcjogIzFlODhlNTtcbn1cblxuLmlzYWN0aXZlLWxpc3QtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKSAhaW1wb3J0YW50O1xufVxuXG4uYm90dG9tLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aWV3LW1vcmUge1xuICBjb2xvcjogIzFlODhlNTtcbn1cblxuLm1hdC1tZW51LWxpc3QtY3VzdG9tIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgei1pbmRleDogMDtcbn1cblxuLm1hdC1saXN0LWJhc2Uge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWljb24ge1xuICBjb2xvcjogcmdiYSg4NiwgODQsIDg0LCAwLjg3KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5tYXQtbGlzdC1iYXNlIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgbWF4LXdpZHRoOiA5OXZ3ICFpbXBvcnRhbnQ7XG59XG5cblxuLmF2YXRvciB7XG4gIGJhY2tncm91bmQ6ICMxZTg4ZTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBjb2xvcjogIzFlODhlNSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudDpub3QoOmVtcHR5KSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbC1jdXN0b20tY2xhc3Mge1xuICBtaW4td2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDUwcHggIWltcG9ydGFudDtcblxufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hcGktbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html',
                styleUrls: ['./side-nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"]] }); })();
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
                    _side_nav_side_nav_module__WEBPACK_IMPORTED_MODULE_6__["SideNavModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _main_view_main_view_module__WEBPACK_IMPORTED_MODULE_9__["MainViewModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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







class CommonService {
    constructor(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).token : '',
                'current-time': this.formatDate()
                // ,
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
            })
        };
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
    deleteFilter(value) {
        const payload = {
            "id": value
        };
        return this.http.post(this.baseUrl + 'deleteFilter/', payload, this.httpOptions);
    }
    getFiterValues(value) {
        return this.http.post(this.baseUrl + 'commonFilter/', value, this.httpOptions);
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
    //Get meta date values-for grid
    getMetaData(value) {
        const payload = {
            "limit": 100,
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
    createValues(value, tableName) {
        const payload = {
            "table_name": tableName,
            "values": [value]
        };
        return this.http.post(this.baseUrl + 'commonInsert/', payload, this.httpOptions);
    }
    createFile(value) {
        return this.http.post(this.baseUrl + 'file/insert/', value, this.httpOptions);
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





const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module~process-flow-ed~e14fe25c"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule),
    },
    {
        path: 'dashboard',
        component: _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"],
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'view/:',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main-view/main-view.module */ "C1jn")).then(m => m.MainViewModule),
            },
        ]
    },
    {
        path: 'view-all-process',
        loadChildren: () => Promise.all(/*! import() | process-flow-editor-view-all-process-process-flow-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module~process-flow-ed~e14fe25c"), __webpack_require__.e("process-flow-editor-view-all-process-process-flow-module")]).then(__webpack_require__.bind(null, /*! ./process-flow-editor/view-all-process/process-flow.module */ "uzBL")).then(m => m.ProcessFlowModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'create-view/:',
        loadChildren: () => Promise.all(/*! import() | create-view-create-view-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module~process-flow-ed~e14fe25c"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module"), __webpack_require__.e("create-view-create-view-module")]).then(__webpack_require__.bind(null, /*! ./create-view/create-view.module */ "TE7Q")).then(m => m.CreateViewModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'edit-view/:',
        loadChildren: () => Promise.all(/*! import() | edit-view-edit-view-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module~process-flow-ed~e14fe25c"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module"), __webpack_require__.e("edit-view-edit-view-module")]).then(__webpack_require__.bind(null, /*! ./edit-view/edit-view.module */ "/mxY")).then(m => m.EditViewModule)
        // component: GeneralProcessComponent
    },
    {
        path: 'edit-process',
        redirectTo: 'view-all-process',
        pathMatch: 'full'
    },
    {
        path: 'edit-process/:',
        loadChildren: () => Promise.all(/*! import() | process-flow-editor-process-dashboard-process-dashboard-module */[__webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~login-login-module~process-flow-ed~e14fe25c"), __webpack_require__.e("default~create-view-create-view-module~edit-view-edit-view-module~process-flow-editor-process-dashbo~6df9324e"), __webpack_require__.e("process-flow-editor-process-dashboard-process-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./process-flow-editor/process-dashboard/process-dashboard.module */ "o7Oj")).then(m => m.ProcessDashboardModule)
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