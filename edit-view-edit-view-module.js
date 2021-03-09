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
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


























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
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"]
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
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"]] }); })();
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
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"]
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");















function EditViewComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const group_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.groupId = group_r8.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.groupId == group_r8.id ? "group-btn" : "group-btn-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.groupId == group_r8.id ? "btn-b" : "btn-b-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r8.group_name, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r43.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_4_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r17.mandatoryField.includes(item_r15.name) && ctx_r17.createIsTrue == 1 && ctx_r17.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r17.editValues[item_r15.name])("disabled", item_r15[ctx_r17.userData.designation] == 1 || item_r15[ctx_r17.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r17.mandatoryField.includes(item_r15.name) && ctx_r17.createIsTrue == 1 && ctx_r17.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r49.checkUniqueValues(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_5_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r18.mandatoryField.includes(item_r15.name) && ctx_r18.createIsTrue == 1 && ctx_r18.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r18.editValues[item_r15.name])("disabled", item_r15[ctx_r18.userData.designation] == 1 || item_r15[ctx_r18.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.uniqueField[item_r15.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r18.mandatoryField.includes(item_r15.name) && ctx_r18.createIsTrue == 1 && ctx_r18.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r55.valueChanges(item_r15.name, $event.target.value); })("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r58.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_6_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_6_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r19.mandatoryField.includes(item_r15.name) && ctx_r19.createIsTrue == 1 && ctx_r19.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.editValues[item_r15.name])("disabled", item_r15[ctx_r19.userData.designation] == 1 || item_r15[ctx_r19.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r19.mandatoryField.includes(item_r15.name) && ctx_r19.createIsTrue == 1 && ctx_r19.editValues[item_r15.name] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.emailValidate);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r63.checkUniqueValues(item_r15.name, $event.target.value); })("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r66.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_7_span_4_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r20.mandatoryField.includes(item_r15.name) && ctx_r20.createIsTrue == 1 && ctx_r20.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.editValues[item_r15.name])("disabled", item_r15[ctx_r20.userData.designation] == 1 || item_r15[ctx_r20.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.uniqueField[item_r15.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r20.mandatoryField.includes(item_r15.name) && ctx_r20.createIsTrue == 1 && ctx_r20.editValues[item_r15.name] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.emailValidate);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r69.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_8_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r21.mandatoryField.includes(item_r15.name) && ctx_r21.createIsTrue == 1 && ctx_r21.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r21.editValues[item_r15.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r21.mandatoryField.includes(item_r15.name) && ctx_r21.createIsTrue == 1 && ctx_r21.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r74.valueChanges(item_r15.name, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r77.editValues[item_r15.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_9_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r22.mandatoryField.includes(item_r15.name) && ctx_r22.createIsTrue == 1 && ctx_r22.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r22.editValues[item_r15.name])("disabled", item_r15[ctx_r22.userData.designation] == 1 || item_r15[ctx_r22.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r22.mandatoryField.includes(item_r15.name) && ctx_r22.createIsTrue == 1 && ctx_r22.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r81.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_10_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r23.mandatoryField.includes(item_r15.name) && ctx_r23.createIsTrue == 1 && ctx_r23.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r23.editValues[item_r15.name])("disabled", item_r15[ctx_r23.userData.designation] == 1 || item_r15[ctx_r23.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r23.mandatoryField.includes(item_r15.name) && ctx_r23.createIsTrue == 1 && ctx_r23.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_11_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r85.open(); })("dateChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r89.formatDate(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return !!_r85 ? _r85.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_11_span_7_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r24.mandatoryField.includes(item_r15.name) && ctx_r24.createIsTrue == 1 && ctx_r24.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r85)("value", ctx_r24.editValues[item_r15.name])("disabled", item_r15[ctx_r24.userData.designation] == 1 || item_r15[ctx_r24.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r24.mandatoryField.includes(item_r15.name) && ctx_r24.createIsTrue == 1 && ctx_r24.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r94.formatDateTime(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_12_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r25.mandatoryField.includes(item_r15.name) && ctx_r25.createIsTrue == 1 && ctx_r25.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r25.editValues[item_r15.name])("disabled", item_r15[ctx_r25.userData.designation] == 1 || item_r15[ctx_r25.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r25.mandatoryField.includes(item_r15.name) && ctx_r25.createIsTrue == 1 && ctx_r25.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r99.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_13_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r26.mandatoryField.includes(item_r15.name) && ctx_r26.createIsTrue == 1 && ctx_r26.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r26.editValues[item_r15.name])("disabled", item_r15[ctx_r26.userData.designation] == 1 || item_r15[ctx_r26.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r26.mandatoryField.includes(item_r15.name) && ctx_r26.createIsTrue == 1 && ctx_r26.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r104.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_14_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r27.mandatoryField.includes(item_r15.name) && ctx_r27.createIsTrue == 1 && ctx_r27.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.editValues[item_r15.name])("disabled", item_r15[ctx_r27.userData.designation] == 1 || item_r15[ctx_r27.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r27.mandatoryField.includes(item_r15.name) && ctx_r27.createIsTrue == 1 && ctx_r27.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r109.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_15_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea ", !!ctx_r28.mandatoryField.includes(item_r15.name) && ctx_r28.createIsTrue == 1 && ctx_r28.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r28.editValues[item_r15.name])("disabled", item_r15[ctx_r28.userData.designation] == 1 || item_r15[ctx_r28.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r28.mandatoryField.includes(item_r15.name) && ctx_r28.createIsTrue == 1 && ctx_r28.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const i_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r118.deleteFile(item_r15.name, i_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_mat_icon_4_Template, 2, 0, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r116 = ctx.index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r113.editValues[item_r15.name] != "" ? ctx_r113.editValues[item_r15.name][i_r116] == null ? null : ctx_r113.editValues[item_r15.name][i_r116].file_url : ctx_r113.storeFileUrl[item_r15.name][i_r116], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r113.editValues[item_r15.name] != "" ? ctx_r113.editValues[item_r15.name][i_r116] == null ? null : ctx_r113.editValues[item_r15.name][i_r116].file_name : ctx_r113.storeFile[item_r15.name][i_r116] == null ? null : ctx_r113.storeFile[item_r15.name][i_r116].file_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r113.storeFile[item_r15.name] || !!ctx_r113.editValues[item_r15.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_16_div_2_Template, 5, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r114.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r125.fileUpload($event, item_r15.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.editValues[item_r15.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r29.editValues[item_r15.name])("disabled", item_r15[ctx_r29.userData.designation] == 1 || item_r15[ctx_r29.userData.designation] == 2 ? true : false);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_17_div_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_17_div_2_mat_icon_3_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const i_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r133.deleteFile(item_r15.name, i_r131); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_17_div_2_mat_icon_3_Template, 2, 0, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r131 = ctx.index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r128.editValues[item_r15.name][i_r131] != "" ? ctx_r128.editValues[item_r15.name][i_r131] == null ? null : ctx_r128.editValues[item_r15.name][i_r131].file_url : ctx_r128.storeFileUrl[item_r15.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r128.editValues[item_r15.name][i_r131] != "" ? ctx_r128.editValues[item_r15.name][i_r131] == null ? null : ctx_r128.editValues[item_r15.name][i_r131].file_url : ctx_r128.storeFile[item_r15.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r128.storeFile[item_r15.name] || !!ctx_r128.editValues[item_r15.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_17_div_2_Template, 4, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r129.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r140.fileUpload($event, item_r15.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.editValues[item_r15.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r15[ctx_r30.userData.designation] == 1 || item_r15[ctx_r30.userData.designation] == 2 ? true : false);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r143.valueChanges(item_r15.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r31.editValues[item_r15.name])("disabled", item_r15[ctx_r31.userData.designation] == 1 || item_r15[ctx_r31.userData.designation] == 2 ? true : false);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r147.valueChanges(item_r15.name, $event.checked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r32.editValues[item_r15.name] == 1)("disabled", item_r15[ctx_r32.userData.designation] == 1 || item_r15[ctx_r32.userData.designation] == 2 ? true : false);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r152.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_20_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r33.mandatoryField.includes(item_r15.name) && ctx_r33.createIsTrue == 1 && ctx_r33.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r33.editValues[item_r15.name])("disabled", item_r15[ctx_r33.userData.designation] == 1 || item_r15[ctx_r33.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r33.mandatoryField.includes(item_r15.name) && ctx_r33.createIsTrue == 1 && ctx_r33.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r157.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_21_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r34.mandatoryField.includes(item_r15.name) && ctx_r34.createIsTrue == 1 && ctx_r34.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r34.editValues[item_r15.name])("disabled", item_r15[ctx_r34.userData.designation] == 1 || item_r15[ctx_r34.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r34.mandatoryField.includes(item_r15.name) && ctx_r34.createIsTrue == 1 && ctx_r34.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r162.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_22_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r35.mandatoryField.includes(item_r15.name) && ctx_r35.createIsTrue == 1 && ctx_r35.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r35.editValues[item_r15.name])("disabled", item_r15[ctx_r35.userData.designation] == 1 || item_r15[ctx_r35.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r35.mandatoryField.includes(item_r15.name) && ctx_r35.createIsTrue == 1 && ctx_r35.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r167.valueChanges(item_r15.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_23_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r36.mandatoryField.includes(item_r15.name) && ctx_r36.createIsTrue == 1 && ctx_r36.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r36.editValues[item_r15.name])("disabled", item_r15[ctx_r36.userData.designation] == 1 || item_r15[ctx_r36.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r36.mandatoryField.includes(item_r15.name) && ctx_r36.createIsTrue == 1 && ctx_r36.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r173, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r174.valueChanges(item_r15.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_24_mat_option_2_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_24_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r37.mandatoryField.includes(item_r15.name) && ctx_r37.createIsTrue == 1 && ctx_r37.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r37.editValues[item_r15.name])("disabled", item_r15[ctx_r37.userData.designation] == 1 || item_r15[ctx_r37.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r15.option_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r37.mandatoryField.includes(item_r15.name) && ctx_r37.createIsTrue == 1 && ctx_r37.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r180, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r181.valueChanges(item_r15.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_25_mat_option_2_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_25_span_3_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r38.mandatoryField.includes(item_r15.name) && ctx_r38.createIsTrue == 1 && ctx_r38.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r38.editValues[item_r15.name])("disabled", item_r15[ctx_r38.userData.designation] == 1 || item_r15[ctx_r38.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.numberSelect[item_r15.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r38.mandatoryField.includes(item_r15.name) && ctx_r38.createIsTrue == 1 && ctx_r38.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const option_r189 = ctx.$implicit; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r190.valueChanges(item_r15.name, option_r189.id); return ctx_r190.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r189 = ctx.$implicit;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r189[item_r15.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r189[item_r15.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r15.depended_field, "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r195.getDropdownValues(item_r15, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ((ctx_r198.editValues[item_r15.name] == null ? null : ctx_r198.editValues[item_r15.name].value[0])[ctx_r198.selectField[item_r15.name]] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_26_mat_option_4_Template, 2, 2, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_26_span_5_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_26_span_6_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r39.mandatoryField.includes(item_r15.name) && ctx_r39.createIsTrue == 1 && ctx_r39.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r185)("value", ctx_r39.editValues[item_r15.name] == null ? null : ctx_r39.editValues[item_r15.name].value[0][ctx_r39.selectField[item_r15.name]])("disabled", item_r15[ctx_r39.userData.designation] == 1 || item_r15[ctx_r39.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.depended[item_r15.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r39.mandatoryField.includes(item_r15.name) && ctx_r39.createIsTrue == 1 && ctx_r39.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_27_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_27_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208); const option_r205 = ctx.$implicit; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r206.checkValueChanges(item_r15.name, option_r205); return ctx_r206.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r205 = ctx.$implicit;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r205[item_r15.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_27_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const che_r211 = ctx.$implicit;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", che_r211[item_r15.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_27_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_27_div_6_div_1_Template, 4, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r203.checkList[item_r15.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_27_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_27_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r215.getDropdownValues(item_r15, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_27_mat_option_5_Template, 2, 1, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_27_div_6_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_27_span_7_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r40.mandatoryField.includes(item_r15.name) && ctx_r40.createIsTrue == 1 && ctx_r40.editValues[item_r15.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r201)("disabled", item_r15[ctx_r40.userData.designation] == 1 || item_r15[ctx_r40.userData.designation] == 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r40.checkList[item_r15.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r40.mandatoryField.includes(item_r15.name) && ctx_r40.createIsTrue == 1 && ctx_r40.editValues[item_r15.name] == "");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r223 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r223.field_title);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 88);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r249); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r247.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r228.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r255.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r229.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r263.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r230.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r271.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r231.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r279.open(); })("dateChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_5_Template_input_dateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r282.subformatDate(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r279);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r286.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r293); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r291.subformatDateTime(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_8_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r296.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r235.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r304.subValueChanges(item_r15.table_name, sub_r227.name, $event.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r227.default_value)("value", ctx_r238.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r312.subValueChanges(item_r15.table_name, sub_r227.name, $event.checked ? 1 : 0, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r239.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name] == 1);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r322); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r320.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r240.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r330); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r328.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r241.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r338); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r336.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r242.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r346); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r344.subValueChanges(item_r15.table_name, sub_r227.name, $event.target.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r243.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r353 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r353);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r353, " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r356); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_r227.default_value = $event; })("selectionChange", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r356); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r357.subValueChanges(item_r15.table_name, sub_r227.name, $event.value, i_r225); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r227.default_value)("placeholder", ctx_r244.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r227.option_list);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r369); const option_r366 = ctx.$implicit; const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r367.subValueChanges(item_r15.table_name, sub_r227.name, option_r366.id, i_r225); return ctx_r367.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r366 = ctx.$implicit;
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r366[sub_r227.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r366[sub_r227.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r375); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r373.getDropdownValues(sub_r227, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r364)("value", ctx_r245.subValues[item_r15.table_name][i_r225][sub_r227 == null ? null : sub_r227.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r245.dropdownSearch);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r380); const sub_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); ctx_r379.getInsideSubTable(_r2, sub_r227); return ctx_r379.insideSubIndex = ctx_r379.subValues[item_r15.table_name][i_r225].id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_1_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_2_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_3_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_4_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_5_Template, 4, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_6_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_7_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_8_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_9_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_10_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_11_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_12_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_13_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_14_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_15_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_16_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_17_Template, 3, 3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_18_Template, 5, 3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_div_19_Template, 3, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r227 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "select" && sub_r227.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "select" && sub_r227.parent_table_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r227.field_sub_type == "table");
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_div_4_Template, 20, 19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r224 = ctx.$implicit;
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r222.subFieldInfo[item_r15.table_name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_4_Template, 2, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_5_Template, 1, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_div_6_Template, 5, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r219.subFieldInfo[item_r15.table_name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r15.row_count.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r15.row_count);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_div_28_div_1_Template, 7, 3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_12_div_3_div_1_div_28_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r388); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); item_r15.row_count.push(item_r15.row_count.length + 1); return ctx_r386.createSubValues(item_r15.table_name, ctx_r386.subFieldInfo[item_r15.table_name]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r41.subFieldInfo[item_r15.table_name]);
} }
function EditViewComponent_div_0_div_12_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_div_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_12_div_3_div_1_div_4_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_12_div_3_div_1_div_5_Template, 4, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_12_div_3_div_1_div_6_Template, 4, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_12_div_3_div_1_div_7_Template, 5, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_12_div_3_div_1_div_8_Template, 3, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_12_div_3_div_1_div_9_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_12_div_3_div_1_div_10_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_12_div_3_div_1_div_11_Template, 8, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_div_3_div_1_div_12_Template, 4, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_12_div_3_div_1_div_13_Template, 4, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_12_div_3_div_1_div_14_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_12_div_3_div_1_div_15_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_12_div_3_div_1_div_16_Template, 7, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_12_div_3_div_1_div_17_Template, 7, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_12_div_3_div_1_div_18_Template, 2, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_12_div_3_div_1_div_19_Template, 2, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_12_div_3_div_1_div_20_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_div_0_div_12_div_3_div_1_div_21_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_12_div_3_div_1_div_22_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_div_0_div_12_div_3_div_1_div_23_Template, 3, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditViewComponent_div_0_div_12_div_3_div_1_div_24_Template, 4, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditViewComponent_div_0_div_12_div_3_div_1_div_25_Template, 4, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditViewComponent_div_0_div_12_div_3_div_1_div_26_Template, 7, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditViewComponent_div_0_div_12_div_3_div_1_div_27_Template, 8, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditViewComponent_div_0_div_12_div_3_div_1_div_28_Template, 5, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r14.getWidth(item_r15.grid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", !!item_r15.is_sub_table ? item_r15.display_name : item_r15.field_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.mandatory == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "text" && item_r15.is_unique == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "text" && item_r15.is_unique == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "email" && item_r15.is_unique == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "email" && item_r15.is_unique == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "select" && item_r15.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "number_select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "select" && item_r15.parent_table_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.field_sub_type == "checklist" && item_r15.parent_table_id != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.is_sub_table == 1);
} }
function EditViewComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_12_div_3_div_1_Template, 29, 29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r13);
} }
function EditViewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_12_div_3_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r11.group_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.metaDataTemp[group_r11.id]);
} }
function EditViewComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseout", function EditViewComponent_div_0_div_19_Template_div_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r391); const ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r390.openSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi am Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseout", function EditViewComponent_div_0_div_20_Template_div_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r393); const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r392.openSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi am note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r395); const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r394.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_button_10_Template, 3, 7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_12_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r395); const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r396.openSidebar = true; return ctx_r396.bar = "task"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " toc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r395); const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r397.openSidebar = true; return ctx_r397.bar = "note"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " folder_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_19_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_20_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r395); const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r398.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r395); const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r399.updateValues(); return ctx_r399.updateSubValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openSidebar && ctx_r0.bar === "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openSidebar && ctx_r0.bar === "note");
} }
function EditViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
function EditViewComponent_ng_template_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r403 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r403.field_title, " ");
} }
function EditViewComponent_ng_template_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 117);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_1_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_1_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r432.index; const subdata_r405 = ctx_r432.$implicit; const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r431.insideSubValueChange(i_r406, ctx_r431.subViewTable.table_name, ctx_r431.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_2_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r438); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_2_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r438); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r441.index; const subdata_r405 = ctx_r441.$implicit; const ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r440.insideSubValueChange(i_r406, ctx_r440.subViewTable.table_name, ctx_r440.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_3_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r447); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_3_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r447); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r450.index; const subdata_r405 = ctx_r450.$implicit; const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r449.insideSubValueChange(i_r406, ctx_r449.subViewTable.table_name, ctx_r449.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_4_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r456); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_4_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r456); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r459.index; const subdata_r405 = ctx_r459.$implicit; const ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r458.insideSubValueChange(i_r406, ctx_r458.subViewTable.table_name, ctx_r458.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465); const _r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r463.open(); })("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_5_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r463)("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_6_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r473); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r479 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_7_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r479); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_8_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r485); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_8_Template_textarea_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r485); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r488 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r488.index; const subdata_r405 = ctx_r488.$implicit; const ctx_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r487.insideSubValueChange(i_r406, ctx_r487.subViewTable.table_name, ctx_r487.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_11_Template_mat_slider_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r494); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r405[sub_r408.name] = $event); })("change", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r494); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r497.index; const subdata_r405 = ctx_r497.$implicit; const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r496.insideSubValueChange(i_r406, ctx_r496.subViewTable.table_name, ctx_r496.subViewTable.name, sub_r408.name, $event.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r405[sub_r408.name]);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r503); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r502.index; const subdata_r405 = ctx_r502.$implicit; const ctx_r501 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r501.insideSubValueChange(i_r406, ctx_r501.subViewTable.table_name, ctx_r501.subViewTable.name, sub_r408.name, $event.checked ? 1 : 0, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_13_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r507); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r506.index; const subdata_r405 = ctx_r506.$implicit; const ctx_r505 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r505.insideSubValueChange(i_r406, ctx_r505.subViewTable.table_name, ctx_r505.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_14_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r511); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r510.index; const subdata_r405 = ctx_r510.$implicit; const ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r509.insideSubValueChange(i_r406, ctx_r509.subViewTable.table_name, ctx_r509.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_15_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r515); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r514 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r514.index; const subdata_r405 = ctx_r514.$implicit; const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r513.insideSubValueChange(i_r406, ctx_r513.subViewTable.table_name, ctx_r513.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_16_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r519); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r518.index; const subdata_r405 = ctx_r518.$implicit; const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r517.insideSubValueChange(i_r406, ctx_r517.subViewTable.table_name, ctx_r517.subViewTable.name, sub_r408.name, $event.target.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r522 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r522);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r522, " ");
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r525 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r525); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_r408.default_value = $event; })("selectionChange", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r525); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r527.index; const subdata_r405 = ctx_r527.$implicit; const ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r526.insideSubValueChange(i_r406, ctx_r526.subViewTable.table_name, ctx_r526.subViewTable.name, sub_r408.name, $event.value, subdata_r405.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r408.default_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r408.option_list);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r535 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r535); const option_r532 = ctx.$implicit; const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r406 = ctx_r534.index; const subdata_r405 = ctx_r534.$implicit; const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r533.insideSubValueChange(i_r406, ctx_r533.subViewTable.table_name, ctx_r533.subViewTable.name, sub_r408.name, option_r532.id, subdata_r405.id); return ctx_r533.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r532 = ctx.$implicit;
    const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r532[sub_r408.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r532[sub_r408.parent_table_field], " ");
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r540 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r540); const sub_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r538 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r538.getDropdownValues(sub_r408, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r530);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r426.dropdownSearch);
} }
function EditViewComponent_ng_template_2_div_13_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_1_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_2_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_3_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_4_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_5_Template, 4, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_6_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_7_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_8_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_9_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_10_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_11_Template, 2, 1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_12_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_13_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_14_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_15_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_16_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_17_Template, 3, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_ng_template_2_div_13_div_1_div_4_div_18_Template, 5, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r408 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "select" && sub_r408.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r408.field_sub_type == "select" && sub_r408.parent_table_id != 0);
} }
function EditViewComponent_ng_template_2_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_2_div_13_div_1_div_4_Template, 19, 18, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r406 = ctx.index;
    const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r406 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r404.subViewTableInfo[ctx_r404.subViewTable.name]);
} }
function EditViewComponent_ng_template_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_ng_template_2_div_13_div_1_Template, 5, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r402.subViewData[ctx_r402.subViewTable.table_name][ctx_r402.subViewTable.name][ctx_r402.insideSubIndex]);
} }
function EditViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r542 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r542); const ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r541.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_ng_template_2_div_11_Template, 2, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_ng_template_2_div_12_Template, 1, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_ng_template_2_div_13_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r542); const ctx_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r543.insideSubRow(ctx_r543.subViewTable.table_name, ctx_r543.subViewTable.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.subViewTable.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.subViewTableInfo[ctx_r3.subViewTable.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.subViewData[ctx_r3.subViewTable.table_name][ctx_r3.subViewTable.name][ctx_r3.insideSubIndex].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.subViewData[ctx_r3.subViewTable.table_name][ctx_r3.subViewTable.name][ctx_r3.insideSubIndex].length);
} }
class EditViewComponent {
    constructor(route, aRouter, CommonService, dialog) {
        this.route = route;
        this.aRouter = aRouter;
        this.CommonService = CommonService;
        this.dialog = dialog;
        this.metaData = [];
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
        this.subFieldInfo = {};
        this.subValues = {};
        this.dateTimeSub = [];
        this.fileChange = 0;
        this.tempStoreFile = {};
        this.numberSelect = {};
        this.uniqueField = {};
        this.dependedField = {};
        this.depended = {};
        this.subViewTableInfo = {};
        this.subViewData = {};
        this.selectField = {};
        this.openSidebar = false;
        this.bar = '';
        this.emailValidate = true;
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.user_data);
        this.userData.designation += "_access";
        this.aRouter.queryParams.subscribe((params) => {
            this.routeInfo = params;
            if (!!this.routeInfo) {
                this.getGroupInfo();
            }
        });
    }
    createSubTableView(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '900px',
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
    getInsideSubTable(templateName, item) {
        this.subViewTable = item;
        console.log("111", this.subViewTable);
        let body = {
            "limit": 100,
            "page": 0,
            "db_name": item.db_name,
            "table_name": "meta_field_data",
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [{ "table_name": item.name }]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.subViewTableInfo[item.name] = response.info;
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
            this.getInsideSubTableValue(templateName, item);
        });
    }
    getInsideSubTableValue(templateName, item) {
        // this.subViewTable = item;
        // console.log("111", this.subViewTable)
        let body = {
            "limit": 100,
            "page": 0,
            "db_name": item.db_name,
            "table_name": item.name,
            "sort_type": "ASC",
            "sort_field": "id",
            "filter": [{ "row_id": this.insideSubIndex }]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.subViewData[item.table_name][item.name][this.insideSubIndex] = response.info;
            this.createSubTableView(templateName);
        });
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
        let t3 = [{ "row_id": this.insideSubIndex }];
        this.CommonService.createSubValues(t3, subTable).subscribe((res) => {
            if (res.statusCode == 200) {
                temp["id"] = res.last_insert_id[0];
                this.subViewData[parentTable][subTable][this.insideSubIndex].push(temp);
            }
        });
    }
    insideSubValueChange(ind, parentTable, subTable, name, value, id) {
        let temp = { "id": id, [name]: value };
        this.CommonService.commonPut(temp, subTable).subscribe((res) => {
            if (res.statusCode == 200) {
                this.subViewData[parentTable][subTable][this.insideSubIndex][ind][name] = value;
            }
        });
    }
    createinsideSubValue() {
    }
    getMetaData() {
        let value = { table_name: this.routeInfo.tablename };
        this.CommonService.getMetaData(value).subscribe((response) => {
            // this.metaData = response.info;
            for (let m = 0; m < response.info.length; m++) {
                if (response.info[m][this.userData.designation] != 3) {
                    this.metaData.push(response.info[m]);
                }
            }
            let col = [];
            for (let m = 0; m < this.metaData.length; m++) {
                if (this.metaData[m].field_sub_type == "select" && this.metaData[m].parent_table_name != "") {
                    this.selectField[this.metaData[m].name] = this.metaData[m].parent_table_field;
                }
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
                if (this.metaData[m].field_sub_type == "checklist") {
                    this.checkList[this.metaData[m].name] = [];
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
            let temp = {};
            for (let i = 0; i < this.groupInfo.length; i++) {
                if (i == 0) {
                    this.groupId = this.groupInfo[i].id;
                }
                let groupField = [];
                let rowno = 0;
                for (let j = 0; j < this.metaData.length; j++) {
                    if (this.metaData[j].group_id == this.groupInfo[i].id) {
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
        console.log(this.editValues, this.storeFile, this.tempStoreFile);
        if (!!this.storeFile[value]) {
            for (let i = 0; i < this.editValues[value].length; i++) {
                for (let j = 0; j < this.storeFile[value].length; j++) {
                    if (this.editValues[value][i].file_name == this.storeFile[value][j].file_name) {
                        this.storeFile[value].splice(j, 1);
                    }
                }
            }
        }
        if (!!this.editValues[value]) {
            this.editValues[value].splice(i, 1);
        }
        if (!!this.tempStoreFile[value]) {
            this.tempStoreFile[value].splice(i, 1);
        }
        if (i == 0) {
            if (!!this.storeFile[value].length) {
                this.storeFile[value][0]["append_file"] = true;
            }
        }
        if (!this.editValues[value].length) {
            delete this.editValues[value];
            this.values[value] = "";
        }
        if (!this.tempStoreFile[value].length) {
            this.tempStoreFile[value] = "";
            // this.values[value] = "";
        }
        if (!!this.storeFile[value]) {
            if (!this.storeFile[value].length) {
                delete this.storeFile[value];
            }
        }
        console.log(this.editValues, this.storeFile, this.tempStoreFile);
        let temp2 = JSON.stringify(this.tempStoreFile[value]);
        let temp = { "id": this.routeInfo.rowid, [value]: temp2 };
        if (this.tempStoreFile[value] != "") {
            this.CommonService.commonPut(temp, this.routeInfo.tablename).subscribe((response) => {
                if (response.statusCode == 200) {
                    this.tempStoreFile[value] = JSON.parse(this.editValues[value]);
                }
            });
        }
    }
    getValues() {
        let temp = { id: this.routeInfo.rowid, tableId: this.routeInfo.id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            let check = Object.keys(this.checkList);
            let selectF = Object.keys(this.selectField);
            for (let i = 0; i < selectF.length; i++) {
                response.info[0][selectF[i]].value = JSON.parse(response.info[0][selectF[i]].value);
            }
            for (let i = 0; i < check.length; i++) {
                if (response.info[0][check[i]].value != "") {
                    this.checkList[check[i]] = JSON.parse(response.info[0][check[i]].value);
                }
                else {
                    this.checkList[check[i]] = [];
                }
            }
            for (let i = 0; i < this.attachFile.length; i++) {
                if (response.info[0].hasOwnProperty(this.attachFile[i])) {
                    if (response.info[0][this.attachFile[i]] != "") {
                        response.info[0][this.attachFile[i]] = JSON.parse(response.info[0][this.attachFile[i]]);
                        this.tempStoreFile[this.attachFile[i]] = response.info[0][this.attachFile[i]];
                    }
                }
            }
            for (let i = 0; i < this.dateTime.length; i++) {
                if (response.info[0].hasOwnProperty(this.dateTime[i])) {
                    if (response.info[0][this.dateTime[i]] != "") {
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
            console.log("eeeee", this.editValues);
            this.values["id"] = this.editValues.id;
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
        console.log("store", this.storeFile);
        let temp1 = Object.keys(this.storeFile);
        for (let i = 0; i < temp1.length; i++) {
            for (let j = 0; j < this.storeFile[temp1[i]].length; j++) {
                let temp = {};
                let myDate = new Date();
                // if (j == 0) {
                //   temp["append_file"] = false;
                // } else {
                //   temp["append_file"] = true;
                // }
                temp["file_data"] = this.storeFile[temp1[i]][j].file_data;
                temp["file_name"] = this.storeFile[temp1[i]][j].file_name + myDate;
                temp["file_extension"] = this.storeFile[temp1[i]][j].file_extension;
                temp["table_name"] = this.routeInfo.tablename;
                temp["field_id"] = this.routeInfo.rowid;
                temp["field_name"] = temp1[i];
                temp["append_file"] = this.storeFile[temp1[i]][j].append_file;
                temp["file_display"] = this.storeFile[temp1[i]][j].file_name;
                console.log("tem", temp);
                this.CommonService.createFile(temp).subscribe((response) => {
                });
            }
        }
    }
    fileUpload(event, name) {
        this.fileChange = 1;
        this.CommonService.uploadFile(event).then((response) => {
            if (!!this.editValues[name]) {
                response[0]["append_file"] = true;
                this.editValues[name].push(response[0]);
            }
            else {
                this.editValues[name] = [];
                response[0]["append_file"] = false;
                this.editValues[name].push(response[0]);
            }
            if (!!this.storeFile[name]) {
                // response[0]["append_file"] = true;
                this.storeFile[name].push(response[0]);
            }
            else {
                // response[0]["append_file"] = false;
                this.storeFile[name] = [];
                this.storeFile[name].push(response[0]);
            }
            this.storeFileUrl[name] = event.target.value;
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
        if (this.mandatoryIsTrue == 0) {
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
        this.CommonService.createSubValues(temp2, tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp3;
                temp3 = this.subValues[tablename].length;
                this.subValues[tablename][temp3 - 1]["id"] = response.last_insert_id[0];
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
    }
    valueChanges(name, value) {
        this.values[name] = value;
        this.editValues[name] = value;
        console.log("value", this.values);
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
                console.log("enter");
                this.valueChanges(item, value);
                this.uniqueField[item] = 0;
            }
            else {
                this.uniqueField[item] = 1;
                delete this.values[item];
            }
        });
    }
    checkValueChanges(name, value) {
        this.checkList[name].push(value);
        let temp = [];
        for (let i = 0; i < this.checkList[name].length; i++) {
            temp.push(this.checkList[name][i].id);
        }
        this.values[name] = temp.toString();
        console.log("value", this.values);
    }
    subValueChanges(tablename, name, value, i) {
        this.subValues[tablename][i][name] = value;
    }
    getDropdownValues(item, value) {
        var _a;
        console.log(this.editValues, this.values);
        console.log(this.dependedField, this.depended);
        console.log("enterrrrrrrr");
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
        if (this.dependedField[item.name] && (((_a = this.editValues[this.dependedField[item.name]]) === null || _a === void 0 ? void 0 : _a.value) == "" || !this.values[this.dependedField[item.name]])) {
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
        console.log(this.editValues, this.values);
        console.log(this.dependedField, this.depended);
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
    validateEmail(value) {
        this.emailValidate = this.CommonService.validateEmail(value);
    }
}
EditViewComponent.ɵfac = function EditViewComponent_Factory(t) { return new (t || EditViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
EditViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditViewComponent, selectors: [["app-edit-view"]], decls: 4, vars: 2, consts: [["class", "container-b", 4, "ngIf"], ["class", "position-r full-height", 4, "ngIf"], ["subTableView", ""], [1, "container-b"], [1, "container"], [1, "header-r"], [1, "header-text"], [1, "icon-alignment", "cursor", 3, "click"], [1, "body-c"], [1, "group-c"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "group-c", "position-r"], [1, "side-bg", "full-height"], ["matTooltip", "Task", 1, "mat-tooltip-trigger", "material-icons", "side-icon", 3, "click"], ["matTooltip", "Notes", 1, "mat-tooltip-trigger", "material-icons", "side-icon", 3, "click"], ["class", "side-bg full-height side-bar", 3, "mouseout", 4, "ngIf"], [1, "footer-c"], [1, "can-btn", "cursor", 3, "click"], [1, "cre-btn", "cursor", 3, "click"], [3, "click"], [1, "content-group"], [1, "header-g"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], ["class", "field-g", 3, "width", 4, "ngFor", "ngForOf"], [1, "field-g"], [1, "field-h"], ["style", "color: red;", 4, "ngIf"], [4, "ngIf"], ["style", "display: grid;", 4, "ngIf"], [2, "color", "red"], ["type", "text", 3, "value", "disabled", "change"], ["class", "man-f-c", 4, "ngIf"], [1, "man-f-c"], ["style", "color: red;font-size: 12px;", 4, "ngIf"], [2, "color", "red", "font-size", "12px"], ["type", "text", 3, "value", "disabled", "change", "input"], ["type", "text", "disabled", "true", 3, "value", "change"], ["type", "password", 3, "value", "disabled", "change", "valueChange"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "value", "disabled", "click", "dateChange"], [1, "date-icon", 3, "click"], ["picker", ""], ["type", "datetime-local", "placeholder", "Choose a date", 3, "value", "disabled", "change"], ["type", "time", "placeholder", "Choose a time", 3, "value", "disabled", "change"], ["rows", "3", 3, "value", "disabled", "change"], [1, "attachment"], ["class", "file-link-f", 4, "ngFor", "ngForOf"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 1, "input-f", 3, "value", "disabled", "change"], ["file", ""], [1, "file-link-f"], ["target", "_blank", 3, "href"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "close-icon", 3, "click"], ["style", "display: flex;", 4, "ngFor", "ngForOf"], ["type", "file", "id", "tableViewFileLabel", "accept", "image/*", 3, "disabled", "change"], ["image", ""], [2, "display", "flex"], ["target", "_blank", 1, "image-b", 3, "href"], ["alt", "Image", 1, "image-h", 3, "src"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "disabled", "change"], ["color", "primary", 3, "checked", "disabled", "change"], ["type", "number", 3, "value", "disabled", "change"], [3, "placeholder", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "matAutocomplete", "value", "disabled", "input", "valueChange"], ["autosetect", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["type", "text", "placeholder", "Search", 3, "matAutocomplete", "disabled", "input"], ["class", "che", 4, "ngIf"], [1, "che"], ["class", "che-f", 4, "ngFor", "ngForOf"], [1, "che-f"], [1, "che-close-i"], [2, "display", "grid"], ["class", "sub-table", 4, "ngIf"], [1, "add-btn", 3, "click"], [1, "sub-table"], [1, "sub-t-h"], [1, "sub-t-h-n"], ["class", "sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "sub-e-r", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "sub-t-h-t"], [1, "sub-e-r"], [1, "sub-t-r"], [1, "sub-t-r-n"], ["class", "sub-t-r-f", 4, "ngFor", "ngForOf"], [1, "sub-t-r-f"], ["class", "sub-v-a", 4, "ngIf"], [1, "sub-v-a"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "change"], ["type", "password", 1, "sub-input", "sub-input-off", 3, "value", "change"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "click", "dateChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "change"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "change"], ["type", "text", 1, "sub-input", "sub-input-off"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "value", "change"], [1, "sub-input", "sub-input-off", 3, "value", "placeholder", "valueChange", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "value", "input"], [1, "sub-create-btn", 3, "click"], [1, "side-bg", "full-height", "side-bar", 3, "mouseout"], [1, "position-r", "full-height"], [1, "spinner", "spin-class", 3, "diameter"], [1, "inside-sub-h"], [1, "inside-sub-t"], [1, "inside-sub-t-h"], [1, "inside-sub-t-h-n"], ["class", "inside-sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "inside-sub-e-r", 4, "ngIf"], [1, "inside-sub-t-h-t"], [1, "inside-sub-e-r"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], ["type", "password", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "value", "click", "valueChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "valueChange", "change"], ["color", "primary", 3, "change"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "focusout"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "focusout"], [1, "sub-input", "sub-input-off", 3, "value", "valueChange", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "input"]], template: function EditViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditViewComponent_div_0_Template, 26, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_Template, 17, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp && !!ctx.editValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp && ctx.editValues));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [".container-b[_ngcontent-%COMP%] {\n  background: #04040487;\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  background: #fff;\n  position: fixed;\n  left: 10px;\n  top: 10px;\n}\n\n.header-r[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 transparent, 0 3px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n  color: #495264;\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto -webkit-max-content;\n  grid-template-columns: auto max-content;\n  align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  padding: 7px 5px;\n\n}\n\n.body-c[_ngcontent-%COMP%] {\n  height: 87vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 200px auto 40px;\n}\n\n.group-c[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  border: 1px solid var(--silver);\n  background-color: #b0b0b00f;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  \n  \n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--blue);\n  background-color: var(--white);\n}\n\n.group-btn-o[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #495264;\n}\n\n.btn-b[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid var(--blue);\n  display: flex;\n  border-radius: 2px;\n}\n\n.btn-b-o[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n  border-left: 5px solid transparent;\n  display: flex;\n  border-radius: 2px;\n}\n\n.content-c[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-sizing: border-box;\n  display: grid;\n  overflow: auto;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 20px;\n  margin: 10px 0px;\n}\n\n.content-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-gap: 5px;\n}\n\n.field-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2b2b2be3;\n}\n\n.input-f[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n}\n\n.input-select[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 4px 5px;\n}\n\n.input-date[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n  border: 1px solid var(--greyish);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  font-size: 14px;\n  padding: 2px 5px;\n  width: 100%;\n  display: flex;\n}\n\n.date-icon[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-g[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed var(--pinkish-grey);\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: var(--blue);\n  padding-bottom: 5px;\n}\n\n.row-f[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 12px 10px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 9;\n}\n\n.cre-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n.can-btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 5px 10px;\n  margin-left: 10px;\n}\n\n  .mat-select-placeholder {\n  color: var(--warm-grey) !important;\n}\n\n#tableViewFileLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#datetime[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#times[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: grid;\n  height: 28px;\n  align-items: center;\n\n}\n\n.file-link-f[_ngcontent-%COMP%] {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: flex;\n  height: 28px;\n  align-items: center;\n\n}\n\n.image-b[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-h[_ngcontent-%COMP%] {\n  width: 35px !important;\n  height: 30px !important;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.red-c[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.border-c-r[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.man-f-c[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 12px;\n}\n\n.che-close-i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  color: var(--warm-grey);\n  cursor: pointer;\n  height: 18px !important;\n  width: 18px !important;\n}\n\n.che-f[_ngcontent-%COMP%] {\n  background-color: var(--silver);\n  border-radius: 2px;\n  padding: 2px 4px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  color: var(--warm-grey);\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.che[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sub-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid var(--greyish) !important;\n\n}\n\n.sub-input-off[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  display: grid;\n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-input-off-d[_ngcontent-%COMP%] {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  \n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-table[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.sub-t-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-r[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-r-f[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  width: 100%;\n}\n\n.sub-t-r-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  min-width: 35px;\n  color: var(--warm-grey);\n  align-items: center;\n  justify-content: center;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  border: 0px;\n  color: var(--white);\n  background-color: var(--blue);\n  margin-top: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n\n.sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.sub-v-a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-bg[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n  text-align: center;\n}\n\n.side-icon[_ngcontent-%COMP%] {\n  color: #d1d1d1;\n  font-size: 28px;\n  margin: 15px 0px;\n  cursor: pointer;\n}\n\n.side-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 300px;\n  right: 0;\n}\n\n.sub-create-btn[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  border: none;\n  color: var(--white);\n  border-radius: 2px;\n  padding: 3px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.inside-sub-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\n.inside-sub-t[_ngcontent-%COMP%] {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.inside-sub-t-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.inside-sub-t-h-n[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-t-h-t[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-e-r[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRGQUE0RjtFQUM1Rix3RUFBd0U7RUFDeEUsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDOztBQUU3Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYiB7XG4gIGJhY2tncm91bmQ6ICMwNDA0MDQ4NztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5oZWFkZXItciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50LCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMDcpO1xuICB6LWluZGV4OiA5O1xuICBjb2xvcjogIzQ5NTI2NDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1heC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDdweCA1cHg7XG5cbn1cblxuLmJvZHktYyB7XG4gIGhlaWdodDogODd2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byA0MHB4O1xufVxuXG4uZ3JvdXAtYyB7XG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2lsdmVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDBmO1xufVxuXG4uZ3JvdXAtYnRuIHtcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMwLCAxMzYsIDIyOSwgMSkgMCwgcmdiYSgxLCAxOTIsIDE5MiwgMSkgMTAwJSk7ICovXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIHJnYigzMCAxMzUgMjI5KSwgMCA2cHggN3B4IHJnYigzMCAxMzUgMjI5IC8gMzIlKTsgKi9cbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmdyb3VwLWJ0bi1vIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0OTUyNjQ7XG59XG5cbi5idG4tYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1iLW8ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb250ZW50LWMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5jb250ZW50LWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG59XG5cbi5maWVsZC1nIHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCBhdXRvO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4uZmllbGQtaCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyYjJiMmJlMztcbn1cblxuLmlucHV0LWYge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNHB4IDVweDtcbn1cblxuLmlucHV0LWRhdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXRlLWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlci1nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1waW5raXNoLWdyZXkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucm93LWYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9vdGVyLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50LCAwIC0ycHggNnB4IHJnYmEoMCwgMCwgMCwgLjA3KTtcbiAgei1pbmRleDogOTtcbn1cblxuLmNyZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FuLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaC10d28pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpICFpbXBvcnRhbnQ7XG59XG5cbiN0YWJsZVZpZXdGaWxlTGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZGF0ZXRpbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGltZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXR0YWNobWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbi5hdHQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZS1saW5rIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0aXNoLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5maWxlLWxpbmstZiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGlzaC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uaW1hZ2UtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS1oIHtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5yZWQtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1jLXIge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4ubWFuLWYtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2hlLWNsb3NlLWkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZS1mIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2hlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc3ViLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleWlzaCkgIWltcG9ydGFudDtcblxufVxuXG4uc3ViLWlucHV0LW9mZiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uc3ViLWlucHV0LW9mZi1kIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG59XG5cbi5zdWItdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWItdC1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbn1cblxuLnN1Yi10LWgtdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtaC1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdC1yLWYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViLXQtci1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC1idG4ge1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItZS1yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xufVxuXG4uc3ViLXYtYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGUtYmcge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlLWljb24ge1xuICBjb2xvcjogI2QxZDFkMTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDE1cHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDMwMHB4O1xuICByaWdodDogMDtcbn1cblxuLnN1Yi1jcmVhdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pbnNpZGUtc3ViLWgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbnNpZGUtc3ViLXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnNpZGUtc3ViLXQtaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5pbnNpZGUtc3ViLXQtaC1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5zaWRlLXN1Yi10LWgtdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5zaWRlLXN1Yi1lLXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-view',
                templateUrl: './edit-view.component.html',
                styleUrls: ['./edit-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-view-edit-view-module.js.map