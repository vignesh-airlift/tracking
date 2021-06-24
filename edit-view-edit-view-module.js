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
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../safe-html.pipe */ "ZJwn");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../atoms/send-mail/send-mail.module */ "r7r6");































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
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
            _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_29__["SendMailModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditViewModule, { declarations: [_edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_4__["EditViewComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__["SafeHtmlPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_29__["SendMailModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_edit_view_edit_view_component__WEBPACK_IMPORTED_MODULE_4__["EditViewComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__["SafeHtmlPipe"]],
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
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
                    _atoms_send_mail_send_mail_module__WEBPACK_IMPORTED_MODULE_29__["SendMailModule"]
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
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common.service */ "gbi4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../atoms/send-mail/send-mail.component */ "1FZ8");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../safe-html.pipe */ "ZJwn");
























const _c0 = ["sideedit"];
function EditViewComponent_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const group_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r29.groupId = group_r28.id; return ctx_r29.scrollGroup(group_r28.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r28 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r19.groupId == group_r28.id ? "group-btn" : "group-btn-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r19.groupId == group_r28.id ? "btn-b" : "btn-b-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r28.group_name);
} }
function EditViewComponent_div_0_div_13_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Port Of Loading And Port Of Discharge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_2_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const option_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r41.values["vessel_pickup_type"] = option_r40; ctx_r41.valuesTemp["vessel_pickup_type"] = option_r40; return (ctx_r41.editValues["vessel_pickup_type"] = option_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r40);
} }
function EditViewComponent_div_0_div_13_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_13_div_4_div_2_button_8_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r35.valuesTemp == null ? null : ctx_r35.valuesTemp.vessel_pickup_type) != "" ? ctx_r35.valuesTemp == null ? null : ctx_r35.valuesTemp.vessel_pickup_type : "Select Pickup Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r35.vesselpickuptype);
} }
function EditViewComponent_div_0_div_13_div_4_div_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_3_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const option_r45 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r46.createOrginVessel(option_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r45);
} }
function EditViewComponent_div_0_div_13_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Select Vessel Pickup Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_13_div_4_div_3_button_10_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r36.valuesTemp == null ? null : ctx_r36.valuesTemp.vessel_pickup_type) != "" ? ctx_r36.valuesTemp == null ? null : ctx_r36.valuesTemp.vessel_pickup_type : "Select Pickup Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.vesselpickuptype);
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r64.valuesTemp == null ? null : ctx_r64.valuesTemp.pickup_estimated_departure, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r65.valuesTemp == null ? null : ctx_r65.valuesTemp.pickup_actual_departure, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_47_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx_r73.VesselAddDialog(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Arrival : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r78.valuesTemp == null ? null : ctx_r78.valuesTemp.pickup_two_actual_arrival, "MMM d, y"));
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Departure : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r79.valuesTemp == null ? null : ctx_r79.valuesTemp.pickup_two_actual_departure, "MMM d, y"));
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Arrival : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r80.valuesTemp == null ? null : ctx_r80.valuesTemp.pickup_two_estimated_arrival, "MMM d, y"));
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Departure : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r81.valuesTemp == null ? null : ctx_r81.valuesTemp.pickup_two_estimated_departure, "MMM d, y"));
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_3_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_4_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_mat_icon_5_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx_r82.VesselAddDialog(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_14_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_15_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_16_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_span_17_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Load On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_arrival != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_arrival == "" && (ctx_r67.OrginbufferValue == 77 || ctx_r67.OrginbufferValue == 75));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_arrival == "" && (ctx_r67.OrginbufferValue != 77 && ctx_r67.OrginbufferValue != 75));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r67.editValues == null ? null : ctx_r67.editValues.port_of_loading == null ? null : ctx_r67.editValues.port_of_loading.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.editValues == null ? null : ctx_r67.editValues.pickup_two_location == null ? null : ctx_r67.editValues.pickup_two_location.value[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_arrival != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_arrival == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.valuesTemp.pickup_two_actual_departure == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r67.valuesTemp == null ? null : ctx_r67.valuesTemp.pickup_two_load_on);
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r71.vesselData[0] == null ? null : ctx_r71.vesselData[0].etd, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r72.vesselData[0] == null ? null : ctx_r72.vesselData[0].actual_departure, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Orgin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stuffing Address :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_25_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_26_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_27_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_1_Template_mat_icon_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r84.VesselAddDialog(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Empty Container Delivered :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_41_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_42_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Load On :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_47_Template, 3, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditViewComponent_div_0_div_13_div_4_div_4_div_1_div_48_Template, 22, 10, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_52_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_53_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditViewComponent_div_0_div_13_div_4_div_4_div_1_mat_icon_54_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_1_Template_mat_icon_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx_r86.VesselDialog(_r15, ctx_r86.v); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_63_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, EditViewComponent_div_0_div_13_div_4_div_4_div_1_span_64_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx_r48.mode)("value", ctx_r48.OrginProgressvalue)("bufferValue", ctx_r48.OrginbufferValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.valuesTemp == null ? null : ctx_r48.valuesTemp.stuffing_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.valuesTemp == null ? null : ctx_r48.valuesTemp.stuffing_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.valuesTemp.pickup_actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.valuesTemp.pickup_actual_departure == "" && (ctx_r48.OrginbufferValue == 34 || ctx_r48.OrginbufferValue == 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.valuesTemp.pickup_actual_departure == "" && (ctx_r48.OrginbufferValue != 34 && ctx_r48.OrginbufferValue != 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r48.editValues.port_of_loading == null ? null : ctx_r48.editValues.port_of_loading.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 22, ctx_r48.valuesTemp == null ? null : ctx_r48.valuesTemp.pickup_container_delivered, "MMM d, y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.valuesTemp.pickup_actual_departure == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.valuesTemp.pickup_actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r48.valuesTemp == null ? null : ctx_r48.valuesTemp.pickup_load_on, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.editValues.pickup_two_location.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.editValues.pickup_two_location.value != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.vesselData[0].actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.vesselData[0].actual_departure == "" && (ctx_r48.OrginbufferValue == 100 || ctx_r48.OrginbufferValue == 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r48.vesselData[0] == null ? null : ctx_r48.vesselData[0].actual_departure) == "" && (ctx_r48.OrginbufferValue != 100 || ctx_r48.OrginbufferValue != 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r48.editValues.port_of_loading == null ? null : ctx_r48.editValues.port_of_loading.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.editValues == null ? null : ctx_r48.editValues.port_of_loading == null ? null : ctx_r48.editValues.port_of_loading.value[0] == null ? null : ctx_r48.editValues.port_of_loading.value[0].location_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.vesselData[0].actual_departure == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.vesselData[0].actual_departure != "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_mat_icon_3_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ves_r87 == null ? null : ves_r87.actual_departure) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ves_r87 == null ? null : ves_r87.actual_departure) == "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ves_r87 == null ? null : ves_r87.etd, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ves_r87 == null ? null : ves_r87.actual_departure, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const v_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); ctx_r100.VesselDialog(_r15, v_r88); ctx_r100.editIndex = v_r88; return ctx_r100.editOrgin = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "POL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_span_10_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_span_11_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Load on :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Voyage No :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ves_r87 == null ? null : ves_r87.departure_port == null ? null : ves_r87.departure_port.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ves_r87 == null ? null : ves_r87.departure_port == null ? null : ves_r87.departure_port.value[0] == null ? null : ves_r87.departure_port.value[0].location_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ves_r87.actual_departure == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ves_r87.actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ves_r87 == null ? null : ves_r87.actual_vessel_name.value) != "" ? ves_r87 == null ? null : ves_r87.actual_vessel_name.value[0].vessel_name : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ves_r87 == null ? null : ves_r87.actual_voyage_number, "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_2_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_3_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_mat_icon_4_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r91.vesselData[v_r88 - 1] == null ? null : ctx_r91.vesselData[v_r88 - 1].actual_arrival_date) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r91.vesselData[v_r88 - 1] == null ? null : ctx_r91.vesselData[v_r88 - 1].actual_arrival_date) == "" && ctx_r91.veec * (v_r88 + 1) == ctx_r91.bufferValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r91.vesselData[v_r88 - 1] == null ? null : ctx_r91.vesselData[v_r88 - 1].actual_arrival_date) == "" && ctx_r91.veec * (v_r88 + 1) != ctx_r91.bufferValue);
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ves_r87 == null ? null : ves_r87.etd, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r109.vesselData[v_r88 - 1] == null ? null : ctx_r109.vesselData[v_r88 - 1].eta, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Departure :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ves_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ves_r87 == null ? null : ves_r87.actual_departure, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r111.vesselData[v_r88 - 1] == null ? null : ctx_r111.vesselData[v_r88 - 1].actual_arrival_date, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const v_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); ctx_r116.VesselDialog(_r15, v_r88); return ctx_r116.editIndex = v_r88; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_12_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_13_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_14_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_span_15_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Load on :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voyage No :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ves_r87 = ctx_r119.$implicit;
    const v_r88 = ctx_r119.index;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ves_r87 == null ? null : ves_r87.departure_port == null ? null : ves_r87.departure_port.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ves_r87 == null ? null : ves_r87.departure_port == null ? null : ves_r87.departure_port.value[0] == null ? null : ves_r87.departure_port.value[0].location_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ves_r87.actual_departure == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.vesselData[v_r88 - 1].actual_arrival_date == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ves_r87.actual_departure != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.vesselData[v_r88 - 1].actual_arrival_date != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ves_r87 == null ? null : ves_r87.actual_vessel_name.value) != "" ? ves_r87 == null ? null : ves_r87.actual_vessel_name.value[0].vessel_name : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ves_r87 == null ? null : ves_r87.actual_voyage_number, "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_1_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_2_Template, 20, 6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_3_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_4_div_4_div_11_div_4_Template, 24, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r88 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r88 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r88 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r88 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r88 != 0);
} }
function EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " directions_boat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estimated Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r53.vesselData[ctx_r53.vesselCount - 1] == null ? null : ctx_r53.vesselData[ctx_r53.vesselCount - 1].eta, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actual Arrival :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r54.vesselData[ctx_r54.vesselCount - 1] == null ? null : ctx_r54.vesselData[ctx_r54.vesselCount - 1].actual_arrival_date, "MMM d, y"), "");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Avilable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.TotalEstimatedTime, " Days");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Avilable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r58.TotalDelay, " Days");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Avilable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_4_div_4_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.TotalActualTime, " Days");
} }
function EditViewComponent_div_0_div_13_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_4_div_4_div_1_Template, 65, 25, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "On Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-progress-bar", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_13_div_4_div_4_div_11_Template, 5, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r120.VesselAddDialog(_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_18_Template, 2, 0, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_19_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_13_div_4_div_4_mat_icon_20_Template, 2, 0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_4_div_4_Template_mat_icon_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); ctx_r122.VesselDialog(_r15, ctx_r122.vesselCount - 1); ctx_r122.editIndex = ctx_r122.vesselCount - 1; return ctx_r122.editDestination = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "POD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditViewComponent_div_0_div_13_div_4_div_4_span_31_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditViewComponent_div_0_div_13_div_4_div_4_span_32_Template, 5, 4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total Estimated Transmit Time : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditViewComponent_div_0_div_13_div_4_div_4_span_36_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditViewComponent_div_0_div_13_div_4_div_4_span_37_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total Delay : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EditViewComponent_div_0_div_13_div_4_div_4_span_40_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditViewComponent_div_0_div_13_div_4_div_4_span_41_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total Actual Transmit Time : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditViewComponent_div_0_div_13_div_4_div_4_span_44_Template, 2, 0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EditViewComponent_div_0_div_13_div_4_div_4_span_45_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.valuesTemp.vessel_pickup_type == "Door to Door" || ctx_r37.valuesTemp.vessel_pickup_type == "Door to Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx_r37.mode)("value", ctx_r37.Progressvalue)("bufferValue", ctx_r37.bufferValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.vesselData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r37.vesselData[ctx_r37.vesselCount - 1] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].actual_arrival_date) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r37.vesselData[ctx_r37.vesselCount - 1] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].actual_arrival_date) == "" && ctx_r37.veec * (ctx_r37.v + 1) == ctx_r37.bufferValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r37.vesselData[ctx_r37.vesselCount - 1] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].actual_arrival_date) == "" && ctx_r37.veec * (ctx_r37.v + 1) != ctx_r37.bufferValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r37.vesselData[ctx_r37.vesselCount - 1] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].arrival_port == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].arrival_port.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r37.vesselData[ctx_r37.vesselCount - 1] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].arrival_port == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].arrival_port.value[0] == null ? null : ctx_r37.vesselData[ctx_r37.vesselCount - 1].arrival_port.value[0].location_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.vesselData[ctx_r37.vesselCount - 1].actual_arrival_date == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.vesselData[ctx_r37.vesselCount - 1].actual_arrival_date != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalEstimatedTime == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalEstimatedTime != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalDelay == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalDelay != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalActualTime == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.TotalActualTime != 0);
} }
function EditViewComponent_div_0_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_4_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_4_div_2_Template, 9, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_4_div_3_Template, 11, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_4_div_4_Template, 46, 18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_discharge) == "" && (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_loading) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_discharge) != "" && (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_loading) != "" && ctx_r32.vesselCount != 100 && ctx_r32.vesselCount == ctx_r32.vesselData.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.vessel_pickup_type) == "" && (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_discharge) != "" && (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_loading) != "" && ctx_r32.vesselCount == 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_discharge) != "" && (ctx_r32.valuesTemp == null ? null : ctx_r32.valuesTemp.port_of_loading) != "" && (ctx_r32.vesselData[0] == null ? null : ctx_r32.vesselData[0].departure_port == null ? null : ctx_r32.vesselData[0].departure_port.value) && ctx_r32.vesselCount != 100 && ctx_r32.vesselCount == ctx_r32.vesselData.length);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r126 == null ? null : item_r126.display_name);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r126 == null ? null : item_r126.field_title);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r170.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r170.createIsTrue == 1 && !ctx_r170.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r170.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r174.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r171.mandatoryField.includes(item_r126.name) && ctx_r171.createIsTrue == 1 && ctx_r171.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r171.editValues[item_r126.name])("disabled", item_r126[ctx_r171.userData.designation] == 1 || item_r126[ctx_r171.userData.designation] == 2 || ctx_r171.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_input_2_Template, 1, 6, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r130.userData.designation] == 1 || item_r126[ctx_r130.userData.designation] == 2 || ctx_r130.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r130.userData.designation] != 1 && item_r126[ctx_r130.userData.designation] != 2 && ctx_r130.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r130.mandatoryField.includes(item_r126.name) && ctx_r130.createIsTrue == 1 && ctx_r130.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_6_mat_icon_4_Template, 2, 0, "mat-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r131.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r131.createIsTrue == 1 && !ctx_r131.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r131.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_span_2_Template, 2, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_span_3_Template, 2, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_mat_icon_4_Template, 2, 0, "mat-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r132.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r132.createIsTrue == 1 && !ctx_r132.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r132.editValues[item_r126.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r132.editValues[item_r126.name] == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate_switch");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_8_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_8_mat_icon_4_Template, 2, 0, "mat-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r133.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r133.createIsTrue == 1 && !ctx_r133.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.editValues[item_r126.name].value != "" ? ctx_r133.editValues[item_r126.name] == null ? null : ctx_r133.editValues[item_r126.name].value[0][ctx_r133.selectField[item_r126.name]] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_9_div_1_Template_mat_checkbox_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191); const val_r188 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r189.radioValueChange(item_r126.name, val_r188); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r188 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r187.d_advanced[item_r126.name] === val_r188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r188, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_9_div_1_Template, 3, 2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r126 == null ? null : item_r126.option_list);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r194.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r194.createIsTrue == 1 && !ctx_r194.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r194.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r199.checkUniqueValues(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r195.mandatoryField.includes(item_r126.name) && ctx_r195.createIsTrue == 1 && ctx_r195.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r195.editValues[item_r126.name])("disabled", item_r126[ctx_r195.userData.designation] == 1 || item_r126[ctx_r195.userData.designation] == 2 || ctx_r195.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_input_2_Template, 1, 6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_span_3_Template, 2, 0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_span_4_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r135.userData.designation] == 1 || item_r126[ctx_r135.userData.designation] == 2 || ctx_r135.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r135.userData.designation] != 1 && item_r126[ctx_r135.userData.designation] != 2 && ctx_r135.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r135.uniqueField[item_r126.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r135.mandatoryField.includes(item_r126.name) && ctx_r135.createIsTrue == 1 && ctx_r135.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_11_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_11_span_6_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r136.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r136.createIsTrue == 1 && !ctx_r136.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r136.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r136.mandatoryField.includes(item_r126.name) && ctx_r136.createIsTrue == 1 && ctx_r136.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r206.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r206.createIsTrue == 1 && !ctx_r206.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r206.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r211.valueChanges(item_r126.name, $event.target.value); })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r213); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r214.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r207.mandatoryField.includes(item_r126.name) && ctx_r207.createIsTrue == 1 && ctx_r207.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r207.editValues[item_r126.name])("disabled", item_r126[ctx_r207.userData.designation] == 1 || item_r126[ctx_r207.userData.designation] == 2 || ctx_r207.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_input_2_Template, 1, 6, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_span_4_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r137.userData.designation] == 1 || item_r126[ctx_r137.userData.designation] == 2 || ctx_r137.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r137.userData.designation] != 1 && item_r126[ctx_r137.userData.designation] != 2 && ctx_r137.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r137.mandatoryField.includes(item_r126.name) && ctx_r137.createIsTrue == 1 && ctx_r137.editValues[item_r126.name] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r137.emailValidate);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r217.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r217.createIsTrue == 1 && !ctx_r217.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r217.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r223.checkUniqueValues(item_r126.name, $event.target.value); })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r226.validateEmail($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r218.mandatoryField.includes(item_r126.name) && ctx_r218.createIsTrue == 1 && ctx_r218.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r218.editValues[item_r126.name])("disabled", item_r126[ctx_r218.userData.designation] == 1 || item_r126[ctx_r218.userData.designation] == 2 || ctx_r218.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This value is already taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_input_2_Template, 1, 6, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_3_Template, 2, 0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_4_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_span_5_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r138.userData.designation] == 1 || item_r126[ctx_r138.userData.designation] == 2 || ctx_r138.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r138.userData.designation] != 1 && item_r126[ctx_r138.userData.designation] != 2 && ctx_r138.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.uniqueField[item_r126.name] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r138.mandatoryField.includes(item_r126.name) && ctx_r138.createIsTrue == 1 && ctx_r138.editValues[item_r126.name] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r138.emailValidate);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_14_span_6_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r139.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r139.createIsTrue == 1 && !ctx_r139.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r139.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r139.mandatoryField.includes(item_r126.name) && ctx_r139.createIsTrue == 1 && ctx_r139.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "********");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r231.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r231.createIsTrue == 1 && !ctx_r231.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r235.valueChanges(item_r126.name, $event.target.value); })("valueChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_input_2_Template_input_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return (ctx_r238.editValues[item_r126.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r232.mandatoryField.includes(item_r126.name) && ctx_r232.createIsTrue == 1 && ctx_r232.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r232.pass_visible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r232.editValues[item_r126.name])("disabled", item_r126[ctx_r232.userData.designation] == 1 || item_r126[ctx_r232.userData.designation] == 2 || ctx_r232.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_div_1_Template, 5, 3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_input_2_Template, 1, 7, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "spna", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_Template_spna_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242); const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r241.pass_visible = !ctx_r241.pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r140.userData.designation] == 1 || item_r126[ctx_r140.userData.designation] == 2 || ctx_r140.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r140.userData.designation] != 1 && item_r126[ctx_r140.userData.designation] != 2 && ctx_r140.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r140.mandatoryField.includes(item_r126.name) && ctx_r140.createIsTrue == 1 && ctx_r140.editValues[item_r126.name] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r140.pass_visible ? "visibility" : "visibility_off", " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r244.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r244.createIsTrue == 1 && !ctx_r244.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r244.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r248.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r245.mandatoryField.includes(item_r126.name) && ctx_r245.createIsTrue == 1 && ctx_r245.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r245.editValues[item_r126.name])("disabled", item_r126[ctx_r245.userData.designation] == 1 || item_r126[ctx_r245.userData.designation] == 2 || ctx_r245.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_input_2_Template, 1, 6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r141.userData.designation] == 1 || item_r126[ctx_r141.userData.designation] == 2 || ctx_r141.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r141.userData.designation] != 1 && item_r126[ctx_r141.userData.designation] != 2 && ctx_r141.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r141.mandatoryField.includes(item_r126.name) && ctx_r141.createIsTrue == 1 && ctx_r141.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r253.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r253.createIsTrue == 1 && !ctx_r253.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r253.editValues[item_r126.name], "MMM d, y"));
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_2_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r257.open(); })("dateChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_2_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r260.formatDate(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_2_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return !!_r257 ? _r257.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r254.mandatoryField.includes(item_r126.name) && ctx_r254.createIsTrue == 1 && ctx_r254.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, ctx_r254.editValues[item_r126.name], "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r257)("disabled", item_r126[ctx_r254.userData.designation] == 1 || item_r126[ctx_r254.userData.designation] == 2 || ctx_r254.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_1_Template, 6, 7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_div_2_Template, 9, 10, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r142.userData.designation] == 1 || item_r126[ctx_r142.userData.designation] == 2 || ctx_r142.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r142.userData.designation] != 1 && item_r126[ctx_r142.userData.designation] != 2 && ctx_r142.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r142.mandatoryField.includes(item_r126.name) && ctx_r142.createIsTrue == 1 && ctx_r142.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r143.editValues[item_r126.name], "MMM d, y, h:mm:ss a"), " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r266.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r266.createIsTrue == 1 && !ctx_r266.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r266.editValues[item_r126.name], "MMM d, y, h:mm:ss a"));
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r272.dateFocus = item_r126.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r270.editValues[item_r126.name], "MMM d, y, h:mm:ss a"));
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r278); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r276.formatDateTime(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r126[ctx_r271.userData.designation] == 1 || item_r126[ctx_r271.userData.designation] == 2 || ctx_r271.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_span_1_Template, 6, 4, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_input_2_Template, 1, 2, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r267.mandatoryField.includes(item_r126.name) && ctx_r267.createIsTrue == 1 && ctx_r267.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r267.dateFocus !== item_r126.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r267.dateFocus === item_r126.name);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_1_Template, 6, 7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_div_2_Template, 3, 5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r144.userData.designation] == 1 || item_r126[ctx_r144.userData.designation] == 2 || ctx_r144.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r144.userData.designation] != 1 && item_r126[ctx_r144.userData.designation] != 2 && ctx_r144.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r144.mandatoryField.includes(item_r126.name) && ctx_r144.createIsTrue == 1 && ctx_r144.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r282.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r282.createIsTrue == 1 && !ctx_r282.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r282.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r286.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date ", !!ctx_r283.mandatoryField.includes(item_r126.name) && ctx_r283.createIsTrue == 1 && ctx_r283.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r283.editValues[item_r126.name])("disabled", item_r126[ctx_r283.userData.designation] == 1 || item_r126[ctx_r283.userData.designation] == 2 || ctx_r283.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_div_2_Template, 2, 6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r145.userData.designation] == 1 || item_r126[ctx_r145.userData.designation] == 2 || ctx_r145.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r145.userData.designation] != 1 && item_r126[ctx_r145.userData.designation] != 2 && ctx_r145.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r145.mandatoryField.includes(item_r126.name) && ctx_r145.createIsTrue == 1 && ctx_r145.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_21_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r292.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_21_span_2_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r146.mandatoryField.includes(item_r126.name) && ctx_r146.createIsTrue == 1 && ctx_r146.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r146.editValues[item_r126.name])("disabled", item_r126[ctx_r146.userData.designation] == 1 || item_r126[ctx_r146.userData.designation] == 2 || (ctx_r146.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r146.mandatoryField.includes(item_r126.name) && ctx_r146.createIsTrue == 1 && ctx_r146.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_22_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r299); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r297.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_22_span_2_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea ", !!ctx_r147.mandatoryField.includes(item_r126.name) && ctx_r147.createIsTrue == 1 && ctx_r147.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r147.editValues[item_r126.name])("disabled", item_r126[ctx_r147.userData.designation] == 1 || item_r126[ctx_r147.userData.designation] == 2 || (ctx_r147.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r147.mandatoryField.includes(item_r126.name) && ctx_r147.createIsTrue == 1 && ctx_r147.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_div_2_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_div_2_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); const i_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r306.deleteFile(item_r126.name, i_r304); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_div_2_mat_icon_4_Template, 2, 0, "mat-icon", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r304 = ctx.index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r301.editValues[item_r126.name] != "" ? ctx_r301.editValues[item_r126.name][i_r304] == null ? null : ctx_r301.editValues[item_r126.name][i_r304].file_url : ctx_r301.storeFileUrl[item_r126.name][i_r304], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r301.editValues[item_r126.name] != "" ? ctx_r301.editValues[item_r126.name][i_r304] == null ? null : ctx_r301.editValues[item_r126.name][i_r304].file_name : ctx_r301.storeFile[item_r126.name][i_r304] == null ? null : ctx_r301.storeFile[item_r126.name][i_r304].file_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r301.storeFile[item_r126.name] || !!ctx_r301.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_div_2_Template, 5, 3, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312); const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r302.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 135, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r313.fileUpload($event, item_r126.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r148.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r148.editValues[item_r126.name])("disabled", item_r126[ctx_r148.userData.designation] == 1 || item_r126[ctx_r148.userData.designation] == 2 || (ctx_r148.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_div_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_div_2_mat_icon_3_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r323); const i_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r321.deleteFile(item_r126.name, i_r319); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_div_2_mat_icon_3_Template, 2, 0, "mat-icon", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r319 = ctx.index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r316.editValues[item_r126.name][i_r319] != "" ? ctx_r316.editValues[item_r126.name][i_r319] == null ? null : ctx_r316.editValues[item_r126.name][i_r319].file_url : ctx_r316.storeFileUrl[item_r126.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r316.editValues[item_r126.name][i_r319] != "" ? ctx_r316.editValues[item_r126.name][i_r319] == null ? null : ctx_r316.editValues[item_r126.name][i_r319].file_url : ctx_r316.storeFile[item_r126.name], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r316.storeFile[item_r126.name] || !!ctx_r316.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_div_2_Template, 4, 3, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327); const _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r317.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add file +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 142, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r328.fileUpload($event, item_r126.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r149.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r126[ctx_r149.userData.designation] == 1 || item_r126[ctx_r149.userData.designation] == 2 || (ctx_r149.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_25_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r333); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r331.valueChanges(item_r126.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r150.editValues[item_r126.name])("disabled", item_r126[ctx_r150.userData.designation] == 1 || item_r126[ctx_r150.userData.designation] == 2 || (ctx_r150.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_26_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r335.switchvalueChanges(item_r126.name, $event.checked ? 1 : 0, item_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r151.editValues[item_r126.name] == 1)("disabled", item_r126[ctx_r151.userData.designation] == 1 || item_r126[ctx_r151.userData.designation] == 2 || (ctx_r151.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false) || (item_r126 == null ? null : item_r126.is_disabled) == 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r339.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r339.createIsTrue == 1 && !ctx_r339.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r339.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r345); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r343.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r340.mandatoryField.includes(item_r126.name) && ctx_r340.createIsTrue == 1 && ctx_r340.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r340.editValues[item_r126.name])("disabled", item_r126[ctx_r340.userData.designation] == 1 || item_r126[ctx_r340.userData.designation] == 2 || ctx_r340.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_input_2_Template, 1, 6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r152.userData.designation] == 1 || item_r126[ctx_r152.userData.designation] == 2 || ctx_r152.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r152.userData.designation] != 1 && item_r126[ctx_r152.userData.designation] != 2 && ctx_r152.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r152.mandatoryField.includes(item_r126.name) && ctx_r152.createIsTrue == 1 && ctx_r152.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r348.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r348.createIsTrue == 1 && !ctx_r348.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r348.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r354); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r352.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r349.mandatoryField.includes(item_r126.name) && ctx_r349.createIsTrue == 1 && ctx_r349.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r349.editValues[item_r126.name])("disabled", item_r126[ctx_r349.userData.designation] == 1 || item_r126[ctx_r349.userData.designation] == 2 || ctx_r349.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_input_2_Template, 1, 6, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r153.userData.designation] == 1 || item_r126[ctx_r153.userData.designation] == 2 || ctx_r153.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r153.userData.designation] != 1 && item_r126[ctx_r153.userData.designation] != 2 && ctx_r153.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r153.mandatoryField.includes(item_r126.name) && ctx_r153.createIsTrue == 1 && ctx_r153.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r357.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r357.createIsTrue == 1 && !ctx_r357.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r357.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r363); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r361.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r358.mandatoryField.includes(item_r126.name) && ctx_r358.createIsTrue == 1 && ctx_r358.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r358.editValues[item_r126.name])("disabled", item_r126[ctx_r358.userData.designation] == 1 || item_r126[ctx_r358.userData.designation] == 2 || ctx_r358.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_input_2_Template, 1, 6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r154.userData.designation] == 1 || item_r126[ctx_r154.userData.designation] == 2 || ctx_r154.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r154.userData.designation] != 1 && item_r126[ctx_r154.userData.designation] != 2 && ctx_r154.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r154.mandatoryField.includes(item_r126.name) && ctx_r154.createIsTrue == 1 && ctx_r154.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r366.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r366.createIsTrue == 1 && !ctx_r366.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r366.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_input_2_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r372); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r370.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r367.mandatoryField.includes(item_r126.name) && ctx_r367.createIsTrue == 1 && ctx_r367.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r367.editValues[item_r126.name])("disabled", item_r126[ctx_r367.userData.designation] == 1 || item_r126[ctx_r367.userData.designation] == 2 || ctx_r367.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_input_2_Template, 1, 6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r155.userData.designation] == 1 || item_r126[ctx_r155.userData.designation] == 2 || ctx_r155.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r155.userData.designation] != 1 && item_r126[ctx_r155.userData.designation] != 2 && ctx_r155.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r155.mandatoryField.includes(item_r126.name) && ctx_r155.createIsTrue == 1 && ctx_r155.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r375.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r375.createIsTrue == 1 && !ctx_r375.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r375.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_mat_select_2_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r380 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r380);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r380, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_mat_select_2_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r381.valueChanges(item_r126.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_mat_select_2_mat_option_1_Template, 2, 2, "mat-option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r376.mandatoryField.includes(item_r126.name) && ctx_r376.createIsTrue == 1 && ctx_r376.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r376.editValues[item_r126.name])("disabled", item_r126[ctx_r376.userData.designation] == 1 || item_r126[ctx_r376.userData.designation] == 2 || ctx_r376.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r126.option_list);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_mat_select_2_Template, 2, 6, "mat-select", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r156.userData.designation] == 1 || item_r126[ctx_r156.userData.designation] == 2 || ctx_r156.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r156.userData.designation] != 1 && item_r126[ctx_r156.userData.designation] != 2 && ctx_r156.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r156.mandatoryField.includes(item_r126.name) && ctx_r156.createIsTrue == 1 && ctx_r156.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r386.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r386.createIsTrue == 1 && !ctx_r386.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r386.editValues[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_mat_select_2_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r391 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r391);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r391, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_mat_select_2_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r394); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r392.valueChanges(item_r126.name, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_mat_select_2_mat_option_1_Template, 2, 2, "mat-option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-select ", !!ctx_r387.mandatoryField.includes(item_r126.name) && ctx_r387.createIsTrue == 1 && ctx_r387.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r387.editValues[item_r126.name])("disabled", item_r126[ctx_r387.userData.designation] == 1 || item_r126[ctx_r387.userData.designation] == 2 || ctx_r387.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r387.numberSelect[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_mat_select_2_Template, 2, 6, "mat-select", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_span_3_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r157.userData.designation] == 1 || item_r126[ctx_r157.userData.designation] == 2 || ctx_r157.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r157.userData.designation] != 1 && item_r126[ctx_r157.userData.designation] != 2 && ctx_r157.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r157.mandatoryField.includes(item_r126.name) && ctx_r157.createIsTrue == 1 && ctx_r157.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r397.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r397.createIsTrue == 1 && !ctx_r397.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r397.editValues[item_r126.name].value != "" ? ctx_r397.editValues[item_r126.name] == null ? null : ctx_r397.editValues[item_r126.name].value[0][ctx_r397.selectField[item_r126.name]] : "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_input_2_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405); const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); ctx_r404.subdro = []; return ctx_r404.dropdownSearch = []; })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_input_2_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r406.getDropdownValues(item_r126, $event.target.value); })("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_input_2_Template_input_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r408.getDropdownValues(item_r126, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r398.mandatoryField.includes(item_r126.name) && ctx_r398.createIsTrue == 1 && ctx_r398.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r399)("value", ctx_r398.editValues[item_r126.name].value != "" ? ctx_r398.editValues[item_r126.name] == null ? null : ctx_r398.editValues[item_r126.name].value[0][ctx_r398.selectField[item_r126.name]] : "")("disabled", item_r126[ctx_r398.userData.designation] == 1 || item_r126[ctx_r398.userData.designation] == 2 || ctx_r398.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); const option_r411 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r412.dropDownvalueChanges(item_r126.name, option_r411.id, item_r126); ctx_r412.dropdownSearch = []; ctx_r412.advancedSameAs[item_r126.name] = option_r411[item_r126.parent_table_field]; return ctx_r412.relativeFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r411 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r411[item_r126.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r411[item_r126.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r126.depended_field, "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_input_2_Template, 1, 7, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_mat_option_5_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_span_6_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_span_7_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r158.userData.designation] == 1 || item_r126[ctx_r158.userData.designation] == 2 || ctx_r158.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r158.userData.designation] != 1 && item_r126[ctx_r158.userData.designation] != 2 && ctx_r158.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r158.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r158.depended[item_r126.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r158.mandatoryField.includes(item_r126.name) && ctx_r158.createIsTrue == 1 && ctx_r158.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r126.depended_field, "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_span_6_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_span_7_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r159.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r159.createIsTrue == 1 && !ctx_r159.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r159.editValues[item_r126.name] == null ? null : ctx_r159.editValues[item_r126.name].value.length) !== 0 ? ctx_r159.editValues[item_r126.name] == null ? null : ctx_r159.editValues[item_r126.name].value[0][ctx_r159.selectField[item_r126.name]] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r159.depended[item_r126.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r159.mandatoryField.includes(item_r126.name) && ctx_r159.createIsTrue == 1 && ctx_r159.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-date-disabled ", !!ctx_r422.mandatoryField.includes(item_r126 == null ? null : item_r126.name) && ctx_r422.createIsTrue == 1 && !ctx_r422.values[item_r126 == null ? null : item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r422.editValues[item_r126.name].value != "" ? ctx_r422.editValues[item_r126.name] == null ? null : ctx_r422.editValues[item_r126.name].value[0][ctx_r422.selectField[item_r126.name]] : "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_input_2_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r430); const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); ctx_r429.subdro = []; return ctx_r429.dropdownSearch = []; })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_input_2_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r430); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r431.getTable(item_r126); })("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_input_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r430); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r433.getTable(item_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-f ", !!ctx_r423.mandatoryField.includes(item_r126.name) && ctx_r423.createIsTrue == 1 && ctx_r423.editValues[item_r126.name] == "" ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r424)("value", ctx_r423.editValues[item_r126.name].value != "" ? ctx_r423.editValues[item_r126.name] == null ? null : ctx_r423.editValues[item_r126.name].value[0][ctx_r423.selectField[item_r126.name]] : "")("disabled", item_r126[ctx_r423.userData.designation] == 1 || item_r126[ctx_r423.userData.designation] == 2 || ctx_r423.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_mat_option_5_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r439); const s_r437 = ctx.index; const option_r436 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r438.values[item_r126.name] = ctx_r438.subdro[s_r437][item_r126.master_field]; ctx_r438.dropdownSearch = []; return (ctx_r438.advancedSameAs[item_r126.name] = option_r436[item_r126.parent_table_field]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r436 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r436[item_r126.master_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r436[item_r126.master_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r126.depended_field, "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_div_1_Template, 5, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_input_2_Template, 1, 7, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_mat_option_5_Template, 2, 2, "mat-option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_span_6_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_span_7_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r160.userData.designation] == 1 || item_r126[ctx_r160.userData.designation] == 2 || ctx_r160.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r160.userData.designation] != 1 && item_r126[ctx_r160.userData.designation] != 2 && ctx_r160.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r160.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r160.depended[item_r126.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r160.mandatoryField.includes(item_r126.name) && ctx_r160.createIsTrue == 1 && ctx_r160.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r449); const i_r446 = ctx.index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r447.removeCheckListForValue(item_r126.name, i_r446); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r445 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r445);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_div_2_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r452); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r450.checkListForSelect(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.checkList[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r460); const i_r457 = ctx.index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r458.removeCheckListForValue(item_r126.name, i_r457); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r456 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r456);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r464); const option_r461 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r462.checkListForSelect(item_r126.name, option_r461); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r461 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r461);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r461, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_div_2_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_mat_option_4_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r162.checkList[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r126.option_list);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474); const i_r471 = ctx.index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r472.removeCheckList(item_r126.name, i_r471); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r470 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r470[item_r126.parent_table_field]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r479 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r479); const option_r476 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r477.checkListValueChanges(item_r126.name, option_r476, item_r126); return ctx_r477.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r476 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r476[item_r126.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r482 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_div_3_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r482); const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); ctx_r481.subdro = []; return ctx_r481.dropdownSearch = []; })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r482); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r483.getDropdownValues(item_r126, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_mat_option_8_Template, 2, 1, "mat-option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_span_9_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r163.mandatoryField.includes(item_r126.name) && ctx_r163.createIsTrue == 1 && !ctx_r163.values[item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r163.checkListName[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r467)("disabled", item_r126[ctx_r163.userData.designation] == 1 || item_r126[ctx_r163.userData.designation] == 2 || ctx_r163.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r163.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r163.mandatoryField.includes(item_r126.name) && ctx_r163.createIsTrue == 1 && !ctx_r163.values[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 175);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 176);
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r489.editValues[item_r126.name].value[0].photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_img_3_Template, 1, 0, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_img_4_Template, 1, 1, "img", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r487.editValues[item_r126.name].value[0].photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r487.editValues[item_r126.name].value[0].photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r487.editValues[item_r126.name].value[0].user_name);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_1_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_div_2_Template, 8, 3, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r164.editValues[item_r126.name] == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r164.editValues[item_r126.name] != "0" && ctx_r164.editValues[item_r126.name] != "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 175);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 176);
} if (rf & 2) {
    const ches_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ches_r498.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r505 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r505); const i_r499 = ctx.index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r503.removeCheckList(item_r126.name, i_r499); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_img_2_Template, 1, 0, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_img_3_Template, 1, 1, "img", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r498 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r498.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r498.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r498[item_r126.parent_table_field]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_div_2_Template, 7, 3, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r493.mandatoryField.includes(item_r126.name) && ctx_r493.createIsTrue == 1 && !ctx_r493.values[item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r493.checkListName[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 175);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 176);
} if (rf & 2) {
    const ches_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ches_r512.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r519); const i_r513 = ctx.index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r517.removeCheckList(item_r126.name, i_r513); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_img_2_Template, 1, 0, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_img_3_Template, 1, 1, "img", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r512 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r512.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ches_r512.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r512[item_r126.parent_table_field]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_input_4_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r523); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r521.getUserValues(item_r126, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r510)("disabled", item_r126[ctx_r509.userData.designation] == 1 || item_r126[ctx_r509.userData.designation] == 2 || ctx_r509.computationStaField[item_r126 == null ? null : item_r126.name] == 1 ? true : false);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 175);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", option_r525 == null ? null : option_r525.photo[0] == null ? null : option_r525.photo[0].file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r531 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r531); const option_r525 = ctx.$implicit; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r529.checkListValueChanges(item_r126.name, option_r525, item_r126); return ctx_r529.userSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_img_2_Template, 1, 0, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r525 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r525.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r525.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r525.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r525.user_name, "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_div_2_Template, 7, 3, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_input_4_Template, 1, 3, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_mat_option_7_Template, 5, 4, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-multi-select-chip ", !!ctx_r494.mandatoryField.includes(item_r126.name) && ctx_r494.createIsTrue == 1 && !ctx_r494.values[item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r494.checkListName[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r494.userData.designation] != 1 && item_r126[ctx_r494.userData.designation] != 2 && ctx_r494.computationStaField[item_r126 == null ? null : item_r126.name] == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r494.userSearch);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field depended on ", item_r126.depended_field, "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_1_Template, 3, 4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_div_2_Template, 8, 6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_span_3_Template, 2, 1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_span_4_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r165.userData.designation] == 1 || item_r126[ctx_r165.userData.designation] == 2 || ctx_r165.computationStaField[item_r126 == null ? null : item_r126.name] == 1 || (item_r126 == null ? null : item_r126.is_disabled) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r126[ctx_r165.userData.designation] != 1 && item_r126[ctx_r165.userData.designation] != 2 && ctx_r165.computationStaField[item_r126 == null ? null : item_r126.name] == 0 && (item_r126 == null ? null : item_r126.is_disabled) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r165.depended[item_r126.name] == "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r165.mandatoryField.includes(item_r126.name) && ctx_r165.createIsTrue == 1 && ctx_r165.editValues[item_r126.name] == "");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r538 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_41_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r538); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r536.valueChanges(item_r126.name, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_41_span_2_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-textarea ", !!ctx_r166.mandatoryField.includes(item_r126.name) && ctx_r166.createIsTrue == 1 && !ctx_r166.values[item_r126.name] ? "border-c-r" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r126 == null ? null : item_r126.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r166.values[item_r126.name])("disabled", true)("value", ctx_r166.editValues[item_r126.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r166.mandatoryField.includes(item_r126.name) && ctx_r166.createIsTrue == 1 && !ctx_r166.values[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r544 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r544.field_title);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 190);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r574 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r574); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r572 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r572.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r549.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r582); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r580.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "spna", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_2_Template_spna_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r582); const ctx_r585 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](10); return ctx_r585.sub_pass_visible = !ctx_r585.sub_pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r550.sub_pass_visible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r550.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r550.sub_pass_visible ? "visibility" : "visibility_off", " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r591 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r591); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r589 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r589.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r551.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r599 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r599); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r597.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r552.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_5_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r607); const _r605 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r605.open(); })("dateChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_5_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r607); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r608.subformatDate(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_5_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r607); const _r605 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return !!_r605 ? _r605.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r605 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r553 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, ctx_r553.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name], "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r605)("value", ctx_r553.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r618 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r618); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r616 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r616.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r554 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r554.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r626); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r624.subformatDateTime(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r555.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r634 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_8_Template_textarea_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r634); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r632.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r556.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r644 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r644); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r642 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r642.subValueChanges(item_r126.table_name, sub_r548.name, $event.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r559 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r559.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r652 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r652); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r650 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r650.subValueChanges(item_r126.table_name, sub_r548.name, $event.checked ? 1 : 0, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r560 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r560.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name] == 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r660); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r658 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r658.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r561 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r561.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r668 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r668); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r666.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r562 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r562.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r676 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_15_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r676); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r674 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r674.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r563 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r563.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r684 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r684); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r682 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r682.subValueChanges(item_r126.table_name, sub_r548.name, $event.target.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r564 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r564.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r691 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r691);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r691, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r694 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r694); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return sub_r548.default_value = $event; })("selectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r694); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r695 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r695.subValueChanges(item_r126.table_name, sub_r548.name, $event.value, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r548.default_value)("placeholder", ctx_r565.subValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r548.option_list);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r707 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r707); const option_r704 = ctx.$implicit; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r705 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r705.dropDownSubvalueChanges(item_r126.table_name, sub_r548.name, option_r704.id, i_r546, sub_r548); return ctx_r705.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r704 = ctx.$implicit;
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r704[sub_r548.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r704[sub_r548.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r713 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r713); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r711 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9); return ctx_r711.getDropdownValues(sub_r548, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r702 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r702)("value", ctx_r566.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name] != null && ctx_r566.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name] != "" && ctx_r566.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name].length ? ctx_r566.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name][0][sub_r548 == null ? null : sub_r548.parent_table_field] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r566.dropdownSearch);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r722 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r722); const option_r719 = ctx.$implicit; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r720 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); ctx_r720.subValueChanges(item_r126.table_name, sub_r548.name, option_r719.id, i_r546); return ctx_r720.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r719 = ctx.$implicit;
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r719[sub_r548.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r719[sub_r548.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r728 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r728); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r726 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9); return ctx_r726.getDropdownValues(sub_r548, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_mat_option_4_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r717 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r717)("value", ctx_r567.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name] != null && ctx_r567.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name] != "" ? ctx_r567.editsubValues[item_r126.table_name][i_r546][sub_r548 == null ? null : sub_r548.name][0][sub_r548.parent_table_field] : "")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r567.dropdownSearch);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r737 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r737); const j_r734 = ctx.index; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r735 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r735.SubremoveCheckListForValue(sub_r548.name, i_r546, sub_r548.table_name, j_r734); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r733 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r733);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r741 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_div_2_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r741); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r739 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r739.SubcheckListForSelect(sub_r548.name, $event.target.value, sub_r548.table_name, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r568 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r568.subValues[sub_r548.table_name][i_r546][sub_r548.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r751 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r751); const j_r748 = ctx.index; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r749 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r749.SubremoveCheckListForValue(sub_r548.name, i_r546, sub_r548.table_name, j_r748); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r747 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r747);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r756 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r756); const option_r753 = ctx.$implicit; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r754 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r754.SubcheckListForSelect(sub_r548.name, option_r753, sub_r548.table_name, i_r546); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r753 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r753);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r753, " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_div_2_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_mat_option_4_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r569.subValues[sub_r548.table_name][i_r546][sub_r548.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r548.option_list);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r768 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r768); const j_r765 = ctx.index; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r766 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); return ctx_r766.SubremoveCheckListForValue(sub_r548.name, i_r546, sub_r548.table_name, j_r765); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ches_r764 = ctx.$implicit;
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ches_r764[sub_r548.parent_table_field]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r774 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_mat_option_8_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r774); const option_r771 = ctx.$implicit; const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r772 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8); ctx_r772.SubcheckListValueChanges(sub_r548.name, option_r771, sub_r548.table_name, i_r546); return ctx_r772.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r771 = ctx.$implicit;
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r771[sub_r548.parent_table_field], " ");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r778 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_div_3_Template, 5, 1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r778); const ctx_r777 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](10); ctx_r777.subdro = []; return ctx_r777.dropdownSearch = []; })("input", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r778); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r779 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9); return ctx_r779.getDropdownValues(sub_r548, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_mat_option_8_Template, 2, 1, "mat-option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_span_9_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r761 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r570 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r570.subValues[sub_r548.table_name][i_r546][sub_r548.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", sub_r548 == null ? null : sub_r548.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r761);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r570.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r570.mandatoryField.includes(item_r126.name) && ctx_r570.createIsTrue == 1 && !ctx_r570.values[item_r126.name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r785 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r785); const sub_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const i_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r784 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx_r784.getInsideSubTable(_r4, sub_r548); return ctx_r784.insideSubIndex = ctx_r784.subValues[item_r126.table_name][i_r546].id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_1_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_2_Template, 4, 4, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_3_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_4_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_5_Template, 9, 7, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_6_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_7_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_8_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_9_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_10_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_11_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_12_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_13_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_14_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_15_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_16_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_17_Template, 3, 3, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_18_Template, 5, 4, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_19_Template, 5, 5, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_20_Template, 4, 2, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_21_Template, 5, 3, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_22_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_div_23_Template, 3, 0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r548 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "select" && sub_r548.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "select" && sub_r548.parent_table_id != 0 && sub_r548.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "select" && sub_r548.parent_table_id != 0 && sub_r548.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r548 == null ? null : sub_r548.field_sub_type) == "checklist" && !(sub_r548 == null ? null : sub_r548.parent_table_id) && sub_r548.option_list == "" && !(sub_r548 == null ? null : sub_r548.parent_table_field) && !(sub_r548 == null ? null : sub_r548.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r548 == null ? null : sub_r548.field_sub_type) == "checklist" && !(sub_r548 == null ? null : sub_r548.parent_table_id) && sub_r548.option_list != "" && !(sub_r548 == null ? null : sub_r548.parent_table_field) && !(sub_r548 == null ? null : sub_r548.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (sub_r548 == null ? null : sub_r548.field_sub_type) == "checklist" && (sub_r548 == null ? null : sub_r548.parent_table_id) && (sub_r548 == null ? null : sub_r548.parent_table_field) && (sub_r548 == null ? null : sub_r548.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r548.field_sub_type == "table");
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_div_4_Template, 24, 23, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r545 = ctx.$implicit;
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](count_r545);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r543.subFieldInfo[item_r126.table_name]);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_4_Template, 2, 1, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_5_Template, 1, 0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_div_6_Template, 5, 2, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r540 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r540.subFieldInfo[item_r126.table_name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r126.row_count.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r126.row_count);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r793 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_div_2_Template, 7, 3, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r793); const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r791 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); item_r126.row_count.push(item_r126.row_count.length + 1); return ctx_r791.createSubValues(item_r126.table_name, ctx_r791.subFieldInfo[item_r126.table_name]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Row +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r167.subFieldInfo[item_r126.table_name]);
} }
const _c1 = function (a0) { return { "dark-text-black": a0 }; };
function EditViewComponent_div_0_div_13_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_5_div_1_div_1_span_4_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_5_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_6_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_7_Template, 5, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_8_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_9_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_10_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_11_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_12_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_13_Template, 6, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_14_Template, 7, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_15_Template, 6, 4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_16_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_17_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_18_Template, 3, 4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_19_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_20_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_21_Template, 3, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_22_Template, 3, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_23_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_24_Template, 7, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_25_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_26_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_27_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_28_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_29_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_30_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_31_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_32_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_33_Template, 8, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_34_Template, 8, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_35_Template, 8, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_36_Template, 4, 2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_37_Template, 5, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_38_Template, 10, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_39_Template, 3, 2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_40_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_41_Template, 3, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditViewComponent_div_0_div_13_div_5_div_1_div_1_div_42_Template, 6, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r126 = ctx.$implicit;
    const row_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!!item_r126 ? "field-g" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", !!(item_r126 == null ? null : item_r126.is_sub_table) && !!(item_r126 == null ? null : item_r126.display_name) ? "100%" : ctx_r125.getWidth(item_r126 == null ? null : item_r126.grid, row_r124));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", !!(item_r126 == null ? null : item_r126.is_sub_table) && !!(item_r126 == null ? null : item_r126.display_name) ? item_r126 == null ? null : item_r126.display_name : item_r126 == null ? null : item_r126.field_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx_r125.isDarkEnable === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r126 && !!(item_r126 == null ? null : item_r126.is_sub_table) && !!(item_r126 == null ? null : item_r126.display_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!item_r126 && !(item_r126 == null ? null : item_r126.display_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.mandatory) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "text" && (item_r126 == null ? null : item_r126.is_unique) == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate" && (item_r126 == null ? null : item_r126.parent_table_name) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate_switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "duplicate" && (item_r126 == null ? null : item_r126.parent_table_name) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "text" && (item_r126 == null ? null : item_r126.is_unique) == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "date-difference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "email" && (item_r126 == null ? null : item_r126.is_unique) == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "email" && (item_r126 == null ? null : item_r126.is_unique) == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.name) == "created_on" || (item_r126 == null ? null : item_r126.name) == "last_modified_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "datetime-local" && (item_r126 == null ? null : item_r126.name) != "created_on" && (item_r126 == null ? null : item_r126.name) != "last_modified_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "select" && item_r126.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "number_select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "select" && item_r126.parent_table_id != 0 && item_r126.is_sub_table == "" && item_r126.relative_fields != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "select" && item_r126.parent_table_id != 0 && item_r126.is_sub_table == "" && item_r126.relative_fields == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "select" && item_r126.parent_table_id != 0 && item_r126.is_sub_table != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "checklist" && !(item_r126 == null ? null : item_r126.parent_table_id) && item_r126.option_list == "" && !(item_r126 == null ? null : item_r126.parent_table_field) && !(item_r126 == null ? null : item_r126.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "checklist" && !(item_r126 == null ? null : item_r126.parent_table_id) && item_r126.option_list != "" && !(item_r126 == null ? null : item_r126.parent_table_field) && !(item_r126 == null ? null : item_r126.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "checklist" && (item_r126 == null ? null : item_r126.parent_table_id) && (item_r126 == null ? null : item_r126.parent_table_field) && (item_r126 == null ? null : item_r126.parent_table_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.name) == "created_by" || (item_r126 == null ? null : item_r126.name) == "last_modified_by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "user" && (item_r126 == null ? null : item_r126.name) != "created_by" && (item_r126 == null ? null : item_r126.name) != "last_modified_by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.field_sub_type) == "merge_fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r126 == null ? null : item_r126.is_sub_table) === 1);
} }
function EditViewComponent_div_0_div_13_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_div_1_Template, 43, 50, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r124);
} }
function EditViewComponent_div_0_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_0_div_13_div_5_div_1_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.metaDataTemp[group_r31.id]);
} }
function EditViewComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_div_0_div_13_div_4_Template, 5, 4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_div_0_div_13_div_5_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r31 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "group_", group_r31.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r20.groupId == group_r31.id ? "border-dash" : "border-dash-u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", group_r31.group_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r31.id == 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r31.id != 190);
} }
function EditViewComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r798 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function EditViewComponent_div_0_div_22_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r798); const ctx_r797 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r797.openSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi am Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r800 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function EditViewComponent_div_0_div_23_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r800); const ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r799.openSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi am note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r802 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function EditViewComponent_div_0_div_24_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r801 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r801.openSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ISF File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r803.isAirliftDomains = true; ctx_r803.isFrom = "send_static"; return ctx_r803.sendMailAtom = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r804 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx_r804.preview(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r805 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r805.downloadPreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Arrival Notice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r806.isAirliftDomains = true; ctx_r806.isFrom = "send_arrival"; return ctx_r806.sendMailAtom = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r807 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx_r807.previewArrival(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_div_24_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r802); const ctx_r808 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r808.downloadPreviewArrival(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r810 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r810); const ctx_r809 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r809.workFlowChanges(ctx_r809.workFlow[0].action.Submit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Please fill ", ctx_r24.submit.field, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r24.submit.view == 1);
} }
function EditViewComponent_div_0_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r811.workFlowChanges(ctx_r811.workFlow[0].action.Approved); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Please fill ", ctx_r25.approved.field, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r25.approved.view == 1);
} }
function EditViewComponent_div_0_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r814 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r814); const ctx_r813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r813.workFlowChanges(ctx_r813.workFlow[0].action.SendBack); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_0_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r816); const ctx_r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); ctx_r815.isAirliftDomains = false; ctx_r815.isFrom = "send_isf"; return ctx_r815.getIsfMail(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Please fill ", ctx_r27.send.field, "");
} }
function EditViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r818 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r817.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_div_0_button_11_Template, 4, 7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_0_div_13_Template, 6, 7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r819 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r819.openSidebar = true; return ctx_r819.bar = "task"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " toc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r820 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r820.openSidebar = true; return ctx_r820.bar = "note"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " folder_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r821.openSidebar = true; return ctx_r821.bar = "document"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " insert_drive_file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_div_0_div_22_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_div_0_div_23_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditViewComponent_div_0_div_24_Template, 24, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r822 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r822.redirectDashBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r818); const ctx_r823 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r823.updateValues("save"); return ctx_r823.updateSubValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditViewComponent_div_0_button_30_Template, 2, 2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditViewComponent_div_0_button_31_Template, 2, 2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditViewComponent_div_0_button_32_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditViewComponent_div_0_button_33_Template, 2, 1, "button", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openSidebar && ctx_r0.bar === "task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openSidebar && ctx_r0.bar === "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openSidebar && ctx_r0.bar === "document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.workFlow[0] == null ? null : ctx_r0.workFlow[0].action == null ? null : ctx_r0.workFlow[0].action.Submit == null ? null : ctx_r0.workFlow[0].action.Submit.hasOwnProperty(ctx_r0.userData.id)) && ctx_r0.submit.view == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.workFlow[0] == null ? null : ctx_r0.workFlow[0].action == null ? null : ctx_r0.workFlow[0].action.Approved == null ? null : ctx_r0.workFlow[0].action.Approved.hasOwnProperty(ctx_r0.userData.id)) && ctx_r0.approved.view == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.workFlow[0] == null ? null : ctx_r0.workFlow[0].action == null ? null : ctx_r0.workFlow[0].action.SendBack == null ? null : ctx_r0.workFlow[0].action.SendBack.hasOwnProperty(ctx_r0.userData.id)) && ctx_r0.sendback.view == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.routeInfo == null ? null : ctx_r0.routeInfo.id) === "307" && (ctx_r0.editValues == null ? null : ctx_r0.editValues.isf_filed_by == null ? null : ctx_r0.editValues.isf_filed_by.value[0] == null ? null : ctx_r0.editValues.isf_filed_by.value[0].isf_filed_by) === "Consignee" && (ctx_r0.editValues == null ? null : ctx_r0.editValues.isf_status) === "PENDING TO SEND ISF SHEET");
} }
function EditViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_mat_chip_10_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    const _r832 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditViewComponent_ng_template_2_mat_chip_10_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r832); const i_r829 = ctx.index; const ctx_r831 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r831.removesendmail(i_r829); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_mat_chip_10_mat_icon_2_Template, 2, 0, "mat-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r828 = ctx.$implicit;
    const ctx_r825 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r825.selectable)("removable", ctx_r825.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r828, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r825.removable);
} }
function EditViewComponent_ng_template_2_mat_chip_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_2_mat_chip_17_Template(rf, ctx) { if (rf & 1) {
    const _r837 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditViewComponent_ng_template_2_mat_chip_17_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r837); const mail_r833 = ctx.$implicit; const ctx_r836 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r836.removeSendCC(mail_r833); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_mat_chip_17_mat_icon_2_Template, 2, 0, "mat-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r833 = ctx.$implicit;
    const ctx_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r827.selectable)("removable", ctx_r827.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r833, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r827.removable);
} }
function EditViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r839 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Send Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r839); const ctx_r838 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r838.closeIsfMail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list", 233, 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_ng_template_2_mat_chip_10_Template, 3, 4, "mat-chip", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip-list", 233, 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_ng_template_2_mat_chip_17_Template, 3, 4, "mat-chip", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditViewComponent_ng_template_2_Template_input_matChipInputTokenEnd_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r839); const ctx_r840 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r840.addsendccmail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r839); const ctx_r841 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r841.closeIsfMail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_2_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r839); const ctx_r842 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r842.updateValues("send"); return ctx_r842.updateSubValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r824 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r826 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.sendMailList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r824)("matChipInputSeparatorKeyCodes", ctx_r3.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r3.addOnBlur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.sendCCMailList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r826)("matChipInputSeparatorKeyCodes", ctx_r3.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r3.addOnBlur);
} }
function EditViewComponent_ng_template_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r846 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r846.field_title, " ");
} }
function EditViewComponent_ng_template_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 253);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r872); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r872); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r875 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r875.index; const subdata_r848 = ctx_r875.$implicit; const ctx_r874 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r874.insideSubValueChange(i_r849, ctx_r874.subViewTable.table_name, ctx_r874.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r881 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r881); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r881); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r884 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r884.index; const subdata_r848 = ctx_r884.$implicit; const ctx_r883 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r883.insideSubValueChange(i_r849, ctx_r883.subViewTable.table_name, ctx_r883.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "spna", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template_spna_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r881); const ctx_r886 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r886.sub_view_pass_visible = !ctx_r886.sub_view_pass_visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r853 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r853.sub_view_pass_visible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r853.sub_view_pass_visible ? "visibility" : "visibility_off", " ");
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r891 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r891); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r891); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r894 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r894.index; const subdata_r848 = ctx_r894.$implicit; const ctx_r893 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r893.insideSubValueChange(i_r849, ctx_r893.subViewTable.table_name, ctx_r893.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r900); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r900); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r903 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r903.index; const subdata_r848 = ctx_r903.$implicit; const ctx_r902 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r902.insideSubValueChange(i_r849, ctx_r902.subViewTable.table_name, ctx_r902.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r909 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r909); const _r907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r907.open(); })("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r909); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker", null, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r907)("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r917 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r917); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r923 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r923); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template_textarea_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r929); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template_textarea_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r929); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r932.index; const subdata_r848 = ctx_r932.$implicit; const ctx_r931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r931.insideSubValueChange(i_r849, ctx_r931.subViewTable.table_name, ctx_r931.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r938 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slider", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template_mat_slider_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r938); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("change", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template_mat_slider_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r938); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r941 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r941.index; const subdata_r848 = ctx_r941.$implicit; const ctx_r940 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r940.insideSubValueChange(i_r849, ctx_r940.subViewTable.table_name, ctx_r940.subViewTable.name, sub_r851.name, $event.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template_mat_slide_toggle_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r947); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r946 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r946.index; const subdata_r848 = ctx_r946.$implicit; const ctx_r945 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r945.insideSubValueChange(i_r849, ctx_r945.subViewTable.table_name, ctx_r945.subViewTable.name, sub_r851.name, $event.checked ? 1 : 0, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", subdata_r848[sub_r851.name] == 1);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r953 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r953); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r953); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r956 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r956.index; const subdata_r848 = ctx_r956.$implicit; const ctx_r955 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r955.insideSubValueChange(i_r849, ctx_r955.subViewTable.table_name, ctx_r955.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r962 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r962); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r962); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r965 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r965.index; const subdata_r848 = ctx_r965.$implicit; const ctx_r964 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r964.insideSubValueChange(i_r849, ctx_r964.subViewTable.table_name, ctx_r964.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r971 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r971); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r971); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r974 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r974.index; const subdata_r848 = ctx_r974.$implicit; const ctx_r973 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r973.insideSubValueChange(i_r849, ctx_r973.subViewTable.table_name, ctx_r973.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r980 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r980); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("focusout", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r980); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r983 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r983.index; const subdata_r848 = ctx_r983.$implicit; const ctx_r982 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r982.insideSubValueChange(i_r849, ctx_r982.subViewTable.table_name, ctx_r982.subViewTable.name, sub_r851.name, $event.target.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subdata_r848[sub_r851.name]);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_17_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r988 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r988);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r988, " ");
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r991 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r991); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r990 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r990.index; const subdata_r848 = ctx_r990.$implicit; const ctx_r989 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r989.insideSubValueChange(i_r849, ctx_r989.subViewTable.table_name, ctx_r989.subViewTable.name, sub_r851.name, $event.value, subdata_r848.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_17_mat_option_2_Template, 2, 2, "mat-option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", subdata_r848[sub_r851.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r851.option_list);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r1000 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1000); const option_r997 = ctx.$implicit; const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r999 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r849 = ctx_r999.index; const subdata_r848 = ctx_r999.$implicit; const ctx_r998 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r998.insideSubValueChange(i_r849, ctx_r998.subViewTable.table_name, ctx_r998.subViewTable.name, sub_r851.name, option_r997.id, subdata_r848.id); return ctx_r998.dropdownSearch = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r997 = ctx.$implicit;
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r997[sub_r851.parent_table_field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r997[sub_r851.parent_table_field], " ");
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r1005 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template_input_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1005); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (subdata_r848[sub_r851.name] = $event); })("input", function EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1005); const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1007 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r1007.getDropdownValues(sub_r851, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_mat_option_4_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r995 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const sub_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const subdata_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r869 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r995)("value", subdata_r848[sub_r851.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r869.dropdownSearch);
} }
function EditViewComponent_ng_template_4_div_13_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_1_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_2_Template, 4, 3, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_3_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_4_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_5_Template, 4, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_6_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_7_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_8_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_9_Template, 2, 0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_10_Template, 2, 0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_11_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_12_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_13_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_14_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_15_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_16_Template, 2, 1, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_17_Template, 3, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_ng_template_4_div_13_div_1_div_4_div_18_Template, 5, 3, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r851 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "richtext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "select" && sub_r851.parent_table_id == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r851.field_sub_type == "select" && sub_r851.parent_table_id != 0);
} }
function EditViewComponent_ng_template_4_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_4_div_13_div_1_div_4_Template, 19, 18, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r849 = ctx.index;
    const ctx_r847 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r849 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r847.subViewTableInfo[ctx_r847.subViewTable.name]);
} }
function EditViewComponent_ng_template_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_ng_template_4_div_13_div_1_Template, 5, 2, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r845.subViewData[ctx_r845.subViewTable.table_name][ctx_r845.subViewTable.name][ctx_r845.insideSubIndex]);
} }
function EditViewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r1012 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_4_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1012); const ctx_r1011 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1011.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_ng_template_4_div_11_Template, 2, 1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditViewComponent_ng_template_4_div_12_Template, 1, 0, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_ng_template_4_div_13_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1012); const ctx_r1013 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1013.insideSubRow(ctx_r1013.subViewTable.table_name, ctx_r1013.subViewTable.name); });
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
function EditViewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inner-data ", ctx_r7.cssPreview, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r7.previewStr), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EditViewComponent_div_8_mat_chip_13_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_8_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    const _r1022 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditViewComponent_div_8_mat_chip_13_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1022); const mail_r1019 = ctx.$implicit; const ctx_r1021 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1021.remove(mail_r1019); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_8_mat_chip_13_mat_icon_2_Template, 2, 0, "mat-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r1019 = ctx.$implicit;
    const ctx_r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r1015.selectable)("removable", ctx_r1015.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r1019, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1015.removable);
} }
function EditViewComponent_div_8_mat_chip_27_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditViewComponent_div_8_mat_chip_27_Template(rf, ctx) { if (rf & 1) {
    const _r1026 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function EditViewComponent_div_8_mat_chip_27_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1026); const mail_r1023 = ctx.$implicit; const ctx_r1025 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1025.removeCC(mail_r1023); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_div_8_mat_chip_27_mat_icon_2_Template, 2, 0, "mat-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r1023 = ctx.$implicit;
    const ctx_r1017 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r1017.selectable)("removable", ctx_r1017.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r1023, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1017.removable);
} }
function EditViewComponent_div_8_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1027 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r1027.fileName);
} }
function EditViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r1029 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Send Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_8_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1028 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1028.mailForm = !ctx_r1028.mailForm; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip-list", 233, 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_div_8_mat_chip_13_Template, 3, 4, "mat-chip", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditViewComponent_div_8_Template_input_matChipInputTokenEnd_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1030 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1030.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditViewComponent_div_8_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1031 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1031.mailSubject = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-chip-list", 233, 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditViewComponent_div_8_mat_chip_27_Template, 3, 4, "mat-chip", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function EditViewComponent_div_8_Template_input_matChipInputTokenEnd_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1032 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1032.addCC($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Body ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "textarea", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditViewComponent_div_8_Template_textarea_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1033 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1033.mailBody = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Add Attachment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " attach_file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_div_8_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1034 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1034.uploadFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditViewComponent_div_8_div_41_Template, 5, 1, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_div_8_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1029); const ctx_r1035 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1035.sendDoc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Send Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " arrow_right_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1014 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r1016 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.toList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r1014)("matChipInputSeparatorKeyCodes", ctx_r8.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r8.addOnBlur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.mailSubject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.ccList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r1016)("matChipInputSeparatorKeyCodes", ctx_r8.separatorKeysCodes)("matChipInputAddOnBlur", ctx_r8.addOnBlur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.mailBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.mailFile);
} }
function EditViewComponent_ng_template_9_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    const _r1042 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_mat_option_50_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1042); const option_r1040 = ctx.$implicit; const ctx_r1041 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1041.valuesTemp.pickup_load_on = option_r1040; return (ctx_r1041.values["pickup_load_on"] = option_r1040); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1040 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1040);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1040, " ");
} }
function EditViewComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r1044 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1043 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1043.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Empty Container Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_input_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1036 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r1036.open(); })("dateChange", function EditViewComponent_ng_template_9_Template_input_dateChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1046 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1046.formatVesselDate("pickup_container_delivered", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_mat_icon_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1036 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return !!_r1036 ? _r1036.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-datepicker", null, 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r1037.open(); })("dateChange", function EditViewComponent_ng_template_9_Template_input_dateChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1049 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1049.formatVesselDate("pickup_estimated_departure", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_mat_icon_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return !!_r1037 ? _r1037.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_input_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1038 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return _r1038.open(); })("dateChange", function EditViewComponent_ng_template_9_Template_input_dateChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1052 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1052.formatVesselDate("pickup_actual_departure", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_mat_icon_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const _r1038 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return !!_r1038 ? _r1038.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-datepicker", null, 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Load On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EditViewComponent_ng_template_9_mat_option_50_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1054 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1054.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_9_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1044); const ctx_r1055 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1055.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1036 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r1037 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const _r1038 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r10.maxDateValue)("matDatepicker", _r1036);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 10, ctx_r10.valuesTemp.pickup_container_delivered, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1037);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 13, ctx_r10.valuesTemp.pickup_estimated_departure, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r10.maxDateValue)("matDatepicker", _r1038);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 16, ctx_r10.valuesTemp.pickup_actual_departure, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r10.valuesTemp.pickup_load_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.LoadOn);
} }
function EditViewComponent_ng_template_11_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    const _r1065 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_mat_option_14_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1065); const option_r1063 = ctx.$implicit; const ctx_r1064 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1064.dropdownSearch = []; return ctx_r1064.pickupTwo(option_r1063); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1063 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1063.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1063.name, " ");
} }
function EditViewComponent_ng_template_11_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    const _r1068 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_mat_option_70_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1068); const option_r1066 = ctx.$implicit; const ctx_r1067 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1067.valuesTemp.pickup_two_load_on = option_r1066; return (ctx_r1067.values["pickup_two_load_on"] = option_r1066); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1066 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1066);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1066, " ");
} }
function EditViewComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r1070 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1069 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1069.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_ng_template_11_Template_input_focus_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1071 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1071.dropdownSearch = []; })("input", function EditViewComponent_ng_template_11_Template_input_input_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1072 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1072.getDropdownVesselCities($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", null, 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_11_mat_option_14_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1058 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r1058.open(); })("dateChange", function EditViewComponent_ng_template_11_Template_input_dateChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1074 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1074.formatVesselDate("pickup_two_estimated_arrival", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_mat_icon_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1058 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return !!_r1058 ? _r1058.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_input_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1059 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return _r1059.open(); })("dateChange", function EditViewComponent_ng_template_11_Template_input_dateChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1077 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1077.formatVesselDate("pickup_two_actual_arrival", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_mat_icon_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1059 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return !!_r1059 ? _r1059.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-datepicker", null, 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_input_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1060 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r1060.open(); })("dateChange", function EditViewComponent_ng_template_11_Template_input_dateChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1080 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1080.formatVesselDate("pickup_two_estimated_departure", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_mat_icon_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1060 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return !!_r1060 ? _r1060.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", null, 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_input_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1061 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return _r1061.open(); })("dateChange", function EditViewComponent_ng_template_11_Template_input_dateChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1083 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1083.formatVesselDate("pickup_two_actual_departure", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_mat_icon_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const _r1061 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return !!_r1061 ? _r1061.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-datepicker", null, 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Load On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, EditViewComponent_ng_template_11_mat_option_70_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1085 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1085.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_11_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1070); const ctx_r1086 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1086.pickupClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1056 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r1058 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    const _r1059 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    const _r1060 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    const _r1061 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1056);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1058);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 14, ctx_r12.valuesTemp.pickup_two_estimated_arrival, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r12.maxDateValue)("matDatepicker", _r1059);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 17, ctx_r12.valuesTemp.pickup_two_actual_arrival, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 20, ctx_r12.valuesTemp.pickup_two_estimated_departure, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r12.maxDateValue)("matDatepicker", _r1061);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 23, ctx_r12.valuesTemp.pickup_two_actual_departure, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r12.valuesTemp.pickup_two_load_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.LoadOn);
} }
function EditViewComponent_ng_template_13_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    const _r1097 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_mat_option_14_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1097); const option_r1095 = ctx.$implicit; const ctx_r1096 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1096.dropdownSearch = []; return ctx_r1096.reviced.departure_port = option_r1095.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1095 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1095.location_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1095.location_name, " ");
} }
function EditViewComponent_ng_template_13_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    const _r1100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_mat_option_60_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1100); const option_r1098 = ctx.$implicit; const ctx_r1099 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1099.dropdownSearch = []; return ctx_r1099.reviced.actual_vessel_name = option_r1098.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1098 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1098.vessel_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1098.vessel_name, " ");
} }
function EditViewComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r1102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1101.VesselDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_ng_template_13_Template_input_focus_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1103.dropdownSearch = []; })("input", function EditViewComponent_ng_template_13_Template_input_input_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1104.getDropdownVesselValues($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", null, 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_13_mat_option_14_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1089.open(); })("dateChange", function EditViewComponent_ng_template_13_Template_input_dateChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1106.formatVesselDate("eta", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return !!_r1089 ? _r1089.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1090 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _r1090.open(); })("dateChange", function EditViewComponent_ng_template_13_Template_input_dateChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1109.formatVesselDate("etd", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_mat_icon_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1090 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return !!_r1090 ? _r1090.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker", null, 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_input_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1091 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r1091.open(); })("dateChange", function EditViewComponent_ng_template_13_Template_input_dateChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1112.formatVesselDate("actual_arrival_date", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_mat_icon_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1091 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return !!_r1091 ? _r1091.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-datepicker", null, 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_input_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return _r1092.open(); })("dateChange", function EditViewComponent_ng_template_13_Template_input_dateChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1115.formatVesselDate("actual_departure", $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_mat_icon_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const _r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return !!_r1092 ? _r1092.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", null, 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Est Load On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_ng_template_13_Template_input_focus_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1117.dropdownSearch = []; })("input", function EditViewComponent_ng_template_13_Template_input_input_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1118.getDropdownVesselName($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-autocomplete", null, 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, EditViewComponent_ng_template_13_mat_option_60_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Voyage No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_13_Template_input_change_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1119.reviced.actual_voyage_number = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Additional Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "textarea", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_13_Template_textarea_change_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1120.reviced.remarks = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1121.VesselDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_13_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1102); const ctx_r1122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1122.createVessel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1087 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r1089 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const _r1090 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r1091 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    const _r1092 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    const _r1093 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1087);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1089);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1090);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r14.maxDateValue)("matDatepicker", _r1091);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r14.maxDateValue)("matDatepicker", _r1092);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1093);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.dropdownSearch);
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rev_r1133.departure_port);
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rev_r1133.arrival_port);
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.eta, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_4_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.actual_arrival_date, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_15_mat_tab_7_div_4_span_6_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_15_mat_tab_7_div_4_span_14_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.eta != "NaN-NaN-NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.actual_arrival_date != "NaN-NaN-NaN");
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.actual_departure, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.etd, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_15_mat_tab_7_div_5_span_6_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_15_mat_tab_7_div_5_span_14_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.actual_departure != "NaN-NaN-NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.etd != "NaN-NaN-NaN");
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.eta, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_6_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.etd, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_15_mat_tab_7_div_6_span_6_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_15_mat_tab_7_div_6_span_14_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.eta != "NaN-NaN-NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.etd != "NaN-NaN-NaN");
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.actual_arrival_date, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_7_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, rev_r1133.actual_departure, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_15_mat_tab_7_div_7_span_6_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditViewComponent_ng_template_15_mat_tab_7_div_7_span_14_Template, 3, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.actual_arrival_date != "NaN-NaN-NaN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r1133.actual_departure != "NaN-NaN-NaN");
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Est Load On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rev_r1133.actual_vessel_name);
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voyage No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rev_r1133.actual_voyage_number);
} }
function EditViewComponent_ng_template_15_mat_tab_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Additional Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rev_r1133.remarks);
} }
function EditViewComponent_ng_template_15_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_15_mat_tab_7_div_2_Template, 5, 1, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditViewComponent_ng_template_15_mat_tab_7_div_3_Template, 5, 1, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_15_mat_tab_7_div_4_Template, 17, 2, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditViewComponent_ng_template_15_mat_tab_7_div_5_Template, 17, 2, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_15_mat_tab_7_div_6_Template, 17, 2, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_ng_template_15_mat_tab_7_div_7_Template, 17, 2, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_ng_template_15_mat_tab_7_div_8_Template, 5, 1, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_ng_template_15_mat_tab_7_div_9_Template, 11, 1, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditViewComponent_ng_template_15_mat_tab_7_div_10_Template, 5, 1, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ti_r1134 = ctx.index;
    const ctx_r1123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1123.TabReviced[ti_r1134]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editOrgin == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1 && ctx_r1123.editOrgin != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1 && ctx_r1123.editOrgin != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1123.editDestination != 1);
} }
function EditViewComponent_ng_template_15_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    const _r1171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_mat_option_17_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1171); const option_r1169 = ctx.$implicit; const ctx_r1170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1170.dropdownSearch = []; return ctx_r1170.reviced.departure_port = option_r1169.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1169.location_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1169.location_name, " ");
} }
function EditViewComponent_ng_template_15_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r1175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_18_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const _r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r1172.open(); })("dateChange", function EditViewComponent_ng_template_15_div_18_Template_input_dateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const ctx_r1176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1176.formatVesselDate("eta", $event.target.value); return ctx_r1176.vesselData[ctx_r1176.editIndex].eta = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_18_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const _r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r1177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1172 && ctx_r1177.vesD == 0 ? _r1172.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_18_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const _r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1173.open(); })("dateChange", function EditViewComponent_ng_template_15_div_18_Template_input_dateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const ctx_r1179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1179.formatVesselDate("actual_arrival_date", $event.target.value); return ctx_r1179.vesselData[ctx_r1179.editIndex].actual_arrival_date = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_18_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1175); const _r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const ctx_r1180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1173 && ctx_r1180.vesD == 0 ? _r1173.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r1126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r1126.vesselData[ctx_r1126.editIndex].eta, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1126.maxDateValue)("matDatepicker", _r1173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 8, ctx_r1126.vesselData[ctx_r1126.editIndex].actual_arrival_date, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r1184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_19_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const _r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r1181.open(); })("dateChange", function EditViewComponent_ng_template_15_div_19_Template_input_dateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const ctx_r1185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1185.formatVesselDate("actual_departure", $event.target.value); return ctx_r1185.vesselData[ctx_r1185.editIndex].actual_departure = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_19_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const _r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r1186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1181 && ctx_r1186.vesD == 0 ? _r1181.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_19_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const _r1182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1182.open(); })("dateChange", function EditViewComponent_ng_template_15_div_19_Template_input_dateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const ctx_r1188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1188.formatVesselDate("etd", $event.target.value); return ctx_r1188.vesselData[ctx_r1188.editIndex].etd = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_19_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1184); const _r1182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const ctx_r1189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1182 && ctx_r1189.vesD == 0 ? _r1182.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r1182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r1127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1127.maxDateValue)("matDatepicker", _r1181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r1127.vesselData[ctx_r1127.editIndex].actual_departure, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 8, ctx_r1127.vesselData[ctx_r1127.editIndex].etd, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r1193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Estimated Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_20_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const _r1190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r1190.open(); })("dateChange", function EditViewComponent_ng_template_15_div_20_Template_input_dateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const ctx_r1194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1194.formatVesselDate("eta", $event.target.value); return ctx_r1194.vesselData[ctx_r1194.editIndex - 1].eta = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_20_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const _r1190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r1195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1190 && ctx_r1195.vesD == 0 ? _r1190.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Estimated Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_20_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const _r1191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1191.open(); })("dateChange", function EditViewComponent_ng_template_15_div_20_Template_input_dateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const ctx_r1197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1197.formatVesselDate("etd", $event.target.value); return ctx_r1197.vesselData[ctx_r1197.editIndex].etd = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_20_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1193); const _r1191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const ctx_r1198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1191 && ctx_r1198.vesD == 0 ? _r1191.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r1191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r1128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx_r1128.vesselData[ctx_r1128.editIndex - 1].eta, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 7, ctx_r1128.vesselData[ctx_r1128.editIndex].etd, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r1202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Actual Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_21_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const _r1199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r1199.open(); })("dateChange", function EditViewComponent_ng_template_15_div_21_Template_input_dateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const ctx_r1203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1203.formatVesselDate("actual_arrival_date", $event.target.value); return ctx_r1203.vesselData[ctx_r1203.editIndex - 1].actual_arrival_date = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_21_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const _r1199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r1204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1199 && ctx_r1204.vesD == 0 ? _r1199.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Actual Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_21_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const _r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1200.open(); })("dateChange", function EditViewComponent_ng_template_15_div_21_Template_input_dateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const ctx_r1206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r1206.formatVesselDate("actual_departure", $event.target.value); return ctx_r1206.vesselData[ctx_r1206.editIndex].actual_departure = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_21_Template_mat_icon_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1202); const _r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); const ctx_r1207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !!_r1200 && ctx_r1207.vesD == 0 ? _r1200.open() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-datepicker", null, 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r1200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r1129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1129.maxDateValue)("matDatepicker", _r1199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx_r1129.vesselData[ctx_r1129.editIndex - 1].actual_arrival_date, "MMM d, y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1129.maxDateValue)("matDatepicker", _r1200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 9, ctx_r1129.vesselData[ctx_r1129.editIndex].actual_departure, "MMM d, y"));
} }
function EditViewComponent_ng_template_15_div_22_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r1212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_div_22_mat_option_7_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1212); const option_r1210 = ctx.$implicit; const ctx_r1211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r1211.dropdownSearch = []; return ctx_r1211.reviced.actual_vessel_name = option_r1210.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1210.vessel_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1210.vessel_name, " ");
} }
function EditViewComponent_ng_template_15_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r1214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Est Load On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_ng_template_15_div_22_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1214); const ctx_r1213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1213.dropdownSearch = []; })("input", function EditViewComponent_ng_template_15_div_22_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1214); const ctx_r1215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1215.getDropdownVesselName($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_ng_template_15_div_22_mat_option_7_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r1130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1208)("value", (ctx_r1130.vesselData[ctx_r1130.editIndex] == null ? null : ctx_r1130.vesselData[ctx_r1130.editIndex].actual_vessel_name.value) != "" ? ctx_r1130.vesselData[ctx_r1130.editIndex] == null ? null : ctx_r1130.vesselData[ctx_r1130.editIndex].actual_vessel_name.value[0].vessel_name : "")("disabled", ctx_r1130.vesD == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1130.dropdownSearch);
} }
function EditViewComponent_ng_template_15_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r1217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voyage No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_15_div_23_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1217); const ctx_r1216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1216.reviced.actual_voyage_number = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1131.vesselData[ctx_r1131.editIndex].actual_voyage_number)("disabled", ctx_r1131.vesD == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1131.vesD == 1);
} }
function EditViewComponent_ng_template_15_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r1219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Additional Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditViewComponent_ng_template_15_div_24_Template_textarea_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1219); const ctx_r1218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1218.reviced.remarks = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1132.vesselData[ctx_r1132.editIndex].remarks)("disabled", ctx_r1132.vesD == 1);
} }
function EditViewComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r1221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Vessel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1221); const ctx_r1220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1220.VesselDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditViewComponent_ng_template_15_mat_tab_7_Template, 11, 10, "mat-tab", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function EditViewComponent_ng_template_15_Template_input_focus_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1221); const ctx_r1222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1222.dropdownSearch = []; })("input", function EditViewComponent_ng_template_15_Template_input_input_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1221); const ctx_r1223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1223.getDropdownVesselValues($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-autocomplete", null, 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_ng_template_15_mat_option_17_Template, 2, 2, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditViewComponent_ng_template_15_div_18_Template, 25, 11, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditViewComponent_ng_template_15_div_19_Template, 25, 11, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditViewComponent_ng_template_15_div_20_Template, 25, 10, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditViewComponent_ng_template_15_div_21_Template, 25, 12, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditViewComponent_ng_template_15_div_22_Template, 8, 4, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditViewComponent_ng_template_15_div_23_Template, 11, 3, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditViewComponent_ng_template_15_div_24_Template, 5, 2, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1221); const ctx_r1224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1224.VesselDialogClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditViewComponent_ng_template_15_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1221); const ctx_r1225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1225.editVessel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.vesselData[ctx_r16.editIndex].reviced);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", ctx_r16.vesD == 1 ? "Actual" : ctx_r16.vesselData[ctx_r16.editIndex].reviced.length ? "Revised" + ctx_r16.vesselData[ctx_r16.editIndex].reviced.length : "Planned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1124)("value", ctx_r16.editDestination == 1 ? ctx_r16.vesselData[ctx_r16.editIndex].arrival_port.value[0].location_name : ctx_r16.vesselData[ctx_r16.editIndex].departure_port.value[0].location_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.dropdownSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editOrgin == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination != 1 && ctx_r16.editOrgin != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination != 1 && ctx_r16.editOrgin != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.editDestination != 1);
} }
function EditViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r1227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-send-mail", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMail", function EditViewComponent_div_17_Template_app_send_mail_closeMail_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1227); const ctx_r1226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1226.closeMail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataTableInfo", ctx_r17.routeInfo)("isFrom", ctx_r17.isFrom)("toList", ctx_r17.sendMailList)("ccList", ctx_r17.sendCCMailList)("bccList", ctx_r17.sendMailBccList)("airliftDomains", ctx_r17.isAirliftDomains)("fieldValues", ctx_r17.editValues);
} }
class EditViewComponent {
    constructor(route, aRouter, CommonService, dialog) {
        this.route = route;
        this.aRouter = aRouter;
        this.CommonService = CommonService;
        this.dialog = dialog;
        this.metaData = [];
        this.getBody = { table_name: "meta_field_group", limit: 20, page: 0, sort_type: "ASC", sort_field: "position", filter: [] };
        this.values = {};
        this.valuesTemp = {};
        this.dropdownSearch = [];
        this.userSearch = [];
        this.attachFile = [];
        this.storeFile = {};
        this.storeFileUrl = {};
        this.dateTime = [];
        this.date = [];
        this.mandatoryField = [];
        this.mandatoryIsTrue = 0;
        this.createIsTrue = 0;
        this.checkList = {};
        this.checkListName = {};
        this.subFieldInfo = {};
        this.subValues = {};
        this.editsubValues = {};
        this.dateTimeSub = [];
        this.dateSub = [];
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
        this.d_advanced = {};
        this.d_advanced_option = {};
        this.loaded = 0;
        this.workFlow = [];
        this.submit = { fields: "", view: 0 };
        this.approved = { fields: "", view: 0 };
        this.sendback = { fields: "", view: 0 };
        this.send = { fields: "", view: 0 };
        this.previewStr = '';
        this.mailForm = false;
        this.mailFile = [];
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.toList = [];
        this.ccList = [];
        this.mailSubject = '';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.user_fields = [];
        this.sendMailList = [];
        this.sendCCMailList = [];
        this.mailBody = '';
        this.sameas = [];
        this.master = [];
        this.advanced_field = [];
        this.mergedFields = [];
        this.advancedSameAs = {};
        this.advancedsub_field = {};
        this.mergedsub_field = {};
        this.dateDifference = {};
        this.dateFocus = "";
        this.subdro = [];
        this.computationRel = {};
        this.compurelField = {};
        this.computationSta = {};
        this.computationStaField = {};
        this.sendMailAtom = false;
        this.checkListSub = {};
        this.checkListNameSub = {};
        this.test = [1, 1, 1, 1];
        this.color = 'primary';
        this.mode = 'buffer';
        this.Progressvalue = 0;
        this.bufferValue = 0;
        this.OrginProgressvalue = 100;
        this.OrginbufferValue = 0;
        this.vesselField = [];
        this.vesselData = [];
        this.vesselCount = 100;
        this.TotalEstimatedTime = 0;
        this.TotalDelay = 0;
        this.TotalActualTime = 0;
        this.reviced = {
            arrival_port: "",
            departure_port: "",
            actual_arrival_date: "",
            actual_departure: "",
            actual_vessel_name: "",
            actual_voyage_number: "",
            eta: "",
            etd: "",
            remarks: "",
            delay: "",
            reviced: []
        };
        this.vesD = 0;
        this.picD = 0;
        this.editreviced = {};
        this.editArrival = {};
        this.editIndex = 100;
        this.editOrgin = 0;
        this.editDestination = 0;
        this.RevicedCon = [];
        this.TabReviced = ["Planned", "Revised 1", "Revised 2", "Revised 3", "Revised 4", "Revised 5", "Revised 6", "Revised 7", "Revised 8", "Revised 9", "Actual"];
        this.RevicedArr = [];
        this.vesselpickuptype = ["Door to Door", "Door to Port", "Port to Port", "Port to Door"];
        this.veec = 0;
        this.LoadOn = ["Truck", "Rail"];
        this.sendMailBccList = [];
        this.isAirliftDomains = false;
        this.isFrom = '';
        this.cssPreview = '';
        this.isDarkEnable = this.CommonService.darkEnable.getValue();
    }
    ngOnInit() {
        var _a;
        this.userData = JSON.parse(localStorage.user_data);
        this.userData.designation += "_access";
        this.aRouter.queryParams.subscribe((params) => {
            this.routeInfo = params;
            this.maxDateValue = new Date();
            if (!!this.routeInfo) {
                this.getGroupInfo();
            }
            if (params.id == 307) {
                // this.getVesselValues();
            }
        });
        if ((_a = this.userData) === null || _a === void 0 ? void 0 : _a.email)
            this.sendMailBccList.push(this.userData.email);
        // this.sendMailAtom = true;
    }
    getDropdownVesselValues(value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": "flow_pod",
            "table_name": "Port_locations",
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { "location_name": value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = response.info;
        });
    }
    getDropdownVesselName(value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": "flow_pod",
            "table_name": "Vessel_Master",
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { "vessel_name": value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = response.info;
        });
    }
    getDropdownVesselCities(value) {
        let body = {
            "limit": 10,
            "page": 0,
            "db_name": "flow_pod",
            "table_name": "cities",
            "sort_type": "ASC",
            "sort_field": "id",
            "search": [
                { "name": value }
            ]
        };
        this.CommonService.getValues(body).subscribe((response) => {
            this.dropdownSearch = response.info;
        });
    }
    formatVesselDate(name, date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        if (name == "pickup_container_delivered" || name == "pickup_two_actual_arrival" || name == "pickup_two_estimated_departure" || name == "pickup_two_estimated_arrival" || name == "pickup_two_actual_departure" || name == "pickup_actual_departure" || name == "pickup_estimated_departure") {
            this.values[name] = formatdate;
            this.valuesTemp[name] = formatdate;
        }
        else {
            this.reviced[name] = formatdate;
        }
        // if (name == "etd" || name == "actual_departure") {
        //   this.vesselData[this.editIndex][name] = formatdate;
        //   console.log("11111", formatdate, this.vesselData[this.editIndex][name])
        // }
        // if (name == "eta" || name == "actual_arrival_date") {
        //   this.vesselData[this.editIndex - 1][name] = formatdate;
        //   console.log("22222222", formatdate, this.vesselData[this.editIndex][name])
        // }
        console.log("cccc", this.vesselData);
        console.log("edddddddd", this.values, this.vesselData[this.editIndex], this.vesselData[this.editIndex - 1]);
    }
    createOrginVessel(value) {
        this.valuesTemp["vessel_pickup_type"] = value;
        this.values["vessel_pickup_type"] = value;
        this.editValues["vessel_pickup_type"] = value;
        let temp2;
        temp2 = this.valuesTemp;
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        let temp = {
            "row_id": this.routeInfo.rowid,
            "last_modified_by": this.userData.id,
            "created_by": this.userData.id,
            "last_modified_on": formatdate,
            "arrival_port": temp2.port_of_discharge,
            "departure_port": temp2.port_of_loading
        };
        if (temp2.eta != "")
            temp["eta"] = temp2.eta;
        if (temp2.etd != "")
            temp["etd"] = temp2.etd;
        // let temp3 = []
        // temp3.push(temp)
        // temp["reviced"] = JSON.stringify(temp3)
        this.CommonService.createValues(temp, "vessel_schedule_and_tracking").subscribe((response) => {
            if (response.statusCode == 200) {
                setTimeout(() => {
                    this.getVesselValues();
                }, 100);
            }
        });
    }
    createVessel() {
        let vl = this.vesselData.length;
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        let temp = {
            "row_id": this.routeInfo.rowid,
            "last_modified_by": this.userData.id,
            "created_by": this.userData.id,
            "last_modified_on": formatdate,
            "arrival_port": this.vesselData[vl - 1].arrival_port.value[0].id
        };
        if (this.vesselData[vl - 1].actual_arrival_date != "") {
            temp["actual_arrival_date"] = this.vesselData[vl - 1].actual_arrival_date;
        }
        else {
            temp["actual_arrival_date"] = null;
        }
        if (this.vesselData[vl - 1].eta != "") {
            temp["eta"] = this.vesselData[vl - 1].eta;
        }
        else {
            temp["eta"] = null;
        }
        let tempkey = Object.keys(this.reviced);
        for (let i = 0; i < tempkey.length; i++) {
            if (this.reviced[tempkey[i]] != "" && tempkey[i] != "arrival_port" && tempkey[i] != "actual_arrival_date" && tempkey[i] != "eta") {
                temp[tempkey[i]] = this.reviced[tempkey[i]];
            }
        }
        // let temp3 = []
        // temp3.push(temp)
        // temp["reviced"] = JSON.stringify(temp3)
        this.CommonService.createValues(temp, "vessel_schedule_and_tracking").subscribe((response) => {
            if (response.statusCode == 200) {
                let tempev = { "id": this.vesselData[vl - 1].id, "arrival_port": this.reviced.departure_port };
                if (this.reviced.actual_arrival_date != "") {
                    tempev["actual_arrival_date"] = this.reviced.actual_arrival_date;
                }
                else {
                    tempev["actual_arrival_date"] = null;
                }
                if (this.reviced.actual_arrival_date != "") {
                    tempev["eta"] = this.reviced.eta;
                }
                else {
                    tempev["eta"] = null;
                }
                this.CommonService.putColumns(tempev, "vessel_schedule_and_tracking").subscribe((response) => {
                    if (response.statusCode == 200) {
                        this.VesselDialogClose();
                    }
                });
            }
        });
    }
    pickupTwo(option) {
        this.editValues.pickup_two_location.value = [];
        this.editValues.pickup_two_location.value.push(option);
        this.valuesTemp['pickup_two_location'] = option.id;
        this.values['pickup_two_location'] = option.id;
    }
    VesselAddDialog(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '700px',
        });
    }
    VesselDialog(templateName, i) {
        this.vesD = 0;
        this.editIndex = i;
        console.log("iiiiii", i, this.editIndex, this.vesselCount);
        if (i == 0 && this.vesselCount != 1) {
            if (this.vesselData[i]['actual_departure'] != "")
                this.vesD = 1;
        }
        else if (i != 0 && this.vesselCount != 1 && this.vesselCount != (i + 1)) {
            if (this.vesselData[i]['actual_departure'] != "" && this.vesselData[i - 1]['actual_arrival_date'] != "")
                this.vesD = 1;
        }
        else if (i != 0 && this.vesselCount != 1 && this.vesselCount == (i + 1)) {
            if (this.vesselData[i]['actual_arrival_date'] != "")
                this.vesD = 1;
        }
        else if (i == 0 && this.vesselCount == 1) {
            if (this.vesselData[i]['actual_arrival_date'] != "")
                this.vesD = 1;
        }
        this.dialogRef = this.dialog.open(templateName, {
            width: '700px',
        });
    }
    pickupClose() {
        this.dialogRef.close();
    }
    VesselDialogClose() {
        this.reviced = {
            arrival_port: "",
            departure_port: "",
            actual_arrival_date: "",
            actual_departure: "",
            actual_vessel_name: "",
            actual_voyage_number: "",
            eta: "",
            etd: "",
            remarks: "",
            delay: "",
            reviced: []
        };
        this.editIndex = 100;
        this.editOrgin = 0;
        this.editDestination = 0;
        this.dialogRef.close();
        this.getVesselValues();
    }
    editVesselValue(name, value) {
        this.editreviced[name] = value;
    }
    editVessel() {
        // let d = new Date(),
        //   month = '' + (d.getMonth() + 1),
        //   day = '' + d.getDate(),
        //   year = d.getFullYear();
        // if (month.length < 2)
        //   month = '0' + month;
        // if (day.length < 2)
        //   day = '0' + day;
        // let formatdate = [year, month, day].join('-');
        // this.editreviced["last_modified_by"] = this.userData.id;
        // this.editreviced["last_modified_on"] = formatdate;
        // if (this.vesselData[i].reviced != "") {
        //   this.editreviced["reviced"] = this.vesselData[i].reviced;
        // } else {
        //   this.editreviced["reviced"] = [];
        // }
        // delete this.vesselData[i]["reviced"]
        // this.editreviced["reviced"].push(this.vesselData[i])
        // this.editreviced["reviced"] = JSON.stringify(this.editreviced["reviced"])
        // let vl = this.vesselData.length;
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        let temp = {
            "last_modified_by": this.userData.id,
            "last_modified_on": formatdate,
            "id": this.vesselData[this.editIndex].id
        };
        // if (this.vesselData[vl - 1].actual_arrival_date != "") {
        //   temp["actual_arrival_date"] = this.vesselData[vl - 1].actual_arrival_date;
        // } else {
        //   temp["actual_arrival_date"] = null;
        // }
        // if (this.vesselData[vl - 1].eta != "") {
        //   temp["eta"] = this.vesselData[vl - 1].eta;
        // } else {
        //   temp["eta"] = null;
        // }
        // this.reviced['reviced'] = [];
        // delete this.vesselData[this.editIndex].reviced;
        console.log("xxx", this.vesselData[this.editIndex]);
        if (this.editOrgin == 1) {
            let tempr = {
                "departure_port": "",
                "actual_departure": this.vesselData[this.editIndex].actual_departure,
                "etd": this.vesselData[this.editIndex].etd,
                "actual_vessel_name": "",
                "actual_voyage_number": this.vesselData[this.editIndex].actual_voyage_number,
                "remarks": this.vesselData[this.editIndex].remarks
            };
            if (this.vesselData[this.editIndex].actual_vessel_name.value != '')
                tempr.actual_vessel_name = this.vesselData[this.editIndex].actual_vessel_name.value[0].vessel_name;
            if (this.vesselData[this.editIndex].departure_port.value != '')
                tempr.departure_port = this.vesselData[this.editIndex].departure_port.value[0].location_name;
            this.reviced.reviced = this.vesselData[this.editIndex].reviced;
            this.reviced.reviced.push(tempr);
        }
        else if (this.editDestination == 1) {
            let tempr2 = {
                "arrival_port": "",
                "eta": this.vesselData[this.editIndex].eta,
                "actual_arrival_date": this.vesselData[this.editIndex].actual_arrival_date
            };
            if (this.vesselData[this.editIndex].arrival_port.value != '')
                tempr2.arrival_port = this.vesselData[this.editIndex].arrival_port.value[0].location_name;
            this.reviced.reviced = this.vesselData[this.editIndex].reviced;
            this.reviced.reviced.push(tempr2);
        }
        else {
            let tempr3 = {
                "departure_port": "",
                "actual_departure": this.vesselData[this.editIndex].actual_departure,
                "etd": this.vesselData[this.editIndex].etd,
                "eta": this.vesselData[this.editIndex - 1].eta,
                "actual_arrival_date": this.vesselData[this.editIndex - 1].actual_arrival_date,
                "actual_vessel_name": "",
                "actual_voyage_number": this.vesselData[this.editIndex].actual_voyage_number,
                "remarks": this.vesselData[this.editIndex].remarks
            };
            if (this.vesselData[this.editIndex].actual_vessel_name.value != '')
                tempr3.actual_vessel_name = this.vesselData[this.editIndex].actual_vessel_name.value[0].vessel_name;
            if (this.vesselData[this.editIndex].departure_port.value != '')
                tempr3.departure_port = this.vesselData[this.editIndex].departure_port.value[0].location_name;
            this.reviced.reviced = this.vesselData[this.editIndex].reviced;
            this.reviced.reviced.push(tempr3);
            console.log("RRRRRR", tempr3, this.vesselData[this.editIndex - 1].actual_arrival_date);
        }
        let rel = this.reviced.reviced.length;
        if (this.reviced.reviced.length) {
            let rek = Object.keys(this.reviced.reviced[rel - 1]);
            for (let h = 0; h < rek.length; h++) {
                if (rek[h] == "etd" || rek[h] == "eta" || rek[h] == "actual_arrival_date" || rek[h] == "actual_departure") {
                    if (rek[h] != "") {
                        let d2 = new Date(this.reviced.reviced[rel - 1][rek[h]]), month2 = '' + (d2.getMonth() + 1), day2 = '' + d2.getDate(), year2 = d2.getFullYear();
                        if (month2.length < 2)
                            month2 = '0' + month2;
                        if (day2.length < 2)
                            day2 = '0' + day2;
                        let formatdate2 = [year2, month2, day2].join('-');
                        this.reviced.reviced[rel - 1][rek[h]] = [year2, month2, day2].join('-');
                    }
                }
            }
        }
        // this.reviced['reviced']=this.
        let tempkey = Object.keys(this.reviced);
        for (let i = 0; i < tempkey.length; i++) {
            if (this.reviced[tempkey[i]] != "" && tempkey[i] != "arrival_port" && tempkey[i] != "reviced" && tempkey[i] != "actual_arrival_date" && tempkey[i] != "eta") {
                temp[tempkey[i]] = this.reviced[tempkey[i]];
            }
            if (this.reviced[tempkey[i]] != "" && this.reviced[tempkey[i]] != "NaN-NaN-NaN" && tempkey[i] != "arrival_port" && tempkey[i] != "reviced" && (tempkey[i] != "actual_arrival_date" || tempkey[i] != "eta") && this.editDestination == 1) {
                temp[tempkey[i]] = this.reviced[tempkey[i]];
            }
        }
        temp['reviced'] = JSON.stringify(this.reviced.reviced);
        this.CommonService.putColumns(temp, "vessel_schedule_and_tracking").subscribe((response) => {
            if (response.statusCode == 200) {
                if (this.editOrgin != 1 && this.editDestination != 1) {
                    let tempevv = { "id": this.vesselData[this.editIndex - 1].id };
                    if (this.reviced.actual_arrival_date != "") {
                        tempevv["actual_arrival_date"] = this.reviced.actual_arrival_date;
                    }
                    if (this.reviced.eta != "") {
                        tempevv["eta"] = this.reviced.eta;
                    }
                    // this.editArrival["id"] = this.vesselData[this.editIndex - 1].id;
                    this.CommonService.putColumns(tempevv, "vessel_schedule_and_tracking").subscribe((response) => {
                        if (response.statusCode == 200) {
                            this.VesselDialogClose();
                        }
                    });
                }
                else {
                    this.VesselDialogClose();
                }
            }
        });
    }
    ngAfterViewInit() {
        this.sideedit.changes.subscribe(({ first: elm }) => {
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
    scrollGroup(id) {
        var elmnt = document.getElementById('group_' + id);
        if (!!elmnt) {
            elmnt.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
    functioOrder() {
        let temp;
        let t;
        this.getGroupInfo();
        this.getMetaData();
        this.getValues();
        this.getSubTable();
        this.getSubFields(t, t);
        this.getSubValues(t, t);
        this.getInsideSubTable(temp, temp);
        this.getInsideSubTableValue(temp, temp);
        this.createSubTableView(temp);
        this.createSubValues(t, t);
        this.createinsideSubValue();
        this.valueChanges(t, t);
        this.subValueChanges(t, t, t, t);
        this.insideSubRow(temp, temp);
        this.insideSubValueChange(t, t, t, t, t, t);
        this.getDropdownValues(t, t);
        this.checkUniqueValues(t, t);
        // this.checkValueChanges(t, t)
        this.updateValues('save');
        this.updateSubValues();
        this.formatDate(t, t);
        this.formatDateTime(t, t);
        this.subformatDate(t, t, t, t);
        this.subformatDateTime(t, t, t, t);
        this.radioValueChange(t, t);
        this.fileUpload(t, t);
        this.createFile();
        this.deleteFile(t, t);
        this.closeDialog();
        this.getWidth(t, t);
        this.redirectDashBoard();
        this.validateEmail(t);
    }
    getGroupInfo() {
        let temp = { table_id: this.routeInfo.id };
        this.getBody.filter.push(temp);
        this.CommonService.getValues(this.getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                this.groupInfo = response.info;
                this.getMetaData();
            }
        });
    }
    workFlowChanges(item) {
        for (let i = 0; i < item.changed.length; i++) {
            this.values[item.changed[i].name] = item.changed[i].value;
            this.valuesTemp[item.changed[i].name] = item.changed[i].value;
            this.editValues[item.changed[i].name] = item.changed[i].value;
        }
        this.updateValues('save');
        this.updateSubValues();
    }
    getWorkFlow(info) {
        let body = { table_name: "workflow_process", limit: 2, page: 0, user_id: this.userData.id, sort_type: "ASC", sort_field: "id", filter: [{ "table_id": this.routeInfo.id }] };
        this.CommonService.getWorkFlow(body).subscribe((response) => {
            if (response.statusCode == 200) {
                if (!!response.info.length) {
                    this.workFlow.push(response.info[0]);
                    if (this.workFlow[0].fields != "") {
                        this.workFlow[0].fields = JSON.parse(this.workFlow[0].fields);
                    }
                    if (this.workFlow[0].action != "") {
                        this.workFlow[0].action = JSON.parse(this.workFlow[0].action);
                        if (this.workFlow[0].action.hasOwnProperty("Submit")) {
                            let ts = [];
                            for (let i = 0; i < this.workFlow[0].action.Submit.depended.length; i++) {
                                ts.push(this.workFlow[0].action.Submit.depended[i].name);
                                if (info[this.workFlow[0].action.Submit.depended[i].name] == null) {
                                    info[this.workFlow[0].action.Submit.depended[i].name] = "";
                                }
                                if (info[this.workFlow[0].action.Submit.depended[i].name] != null) {
                                    if (this.workFlow[0].action.Submit.depended[i].value != info[this.workFlow[0].action.Submit.depended[i].name]) {
                                        this.submit.view = 1;
                                    }
                                }
                            }
                            this.submit.fields = ts.toString();
                        }
                        if (this.workFlow[0].action.hasOwnProperty("Approved")) {
                            let ts = [];
                            for (let i = 0; i < this.workFlow[0].action.Approved.depended.length; i++) {
                                ts.push(this.workFlow[0].action.Approved.depended[i].name);
                                if (info[this.workFlow[0].action.Approved.depended[i].name] == null) {
                                    info[this.workFlow[0].action.Approved.depended[i].name] = "";
                                }
                                if (info[this.workFlow[0].action.Approved.depended[i].name] != null) {
                                    if (this.workFlow[0].action.Approved.depended[i].value != info[this.workFlow[0].action.Approved.depended[i].name]) {
                                        this.approved.view = 1;
                                        this.sendback.view = 1;
                                    }
                                }
                            }
                            this.approved.fields = ts.toString();
                        }
                        if (this.workFlow[0].action.hasOwnProperty("Send")) {
                            let ts = [];
                            for (let i = 0; i < this.workFlow[0].action.Send.depended.length; i++) {
                                ts.push(info[this.workFlow[0].action.Send.depended[i].name]);
                                if (info[this.workFlow[0].action.Send.depended[i].name] == null) {
                                    info[this.workFlow[0].action.Send.depended[i].name] = "";
                                }
                                if (this.workFlow[0].action.Send.depended[i].value != info[this.workFlow[0].action.Send.depended[i].name]) {
                                    this.send.view = 1;
                                }
                            }
                            this.send.fields = ts.toString();
                        }
                    }
                }
            }
        });
    }
    // test() {
    //   console.log("enterrr")
    // }
    getMetaData() {
        let value = { table_name: this.routeInfo.tablename };
        let spl = [];
        this.CommonService.getMetaData(value).subscribe((response) => {
            var _a, _b, _c;
            if (response.statusCode == 200) {
                for (let m = 0; m < response.info.length; m++) {
                    this.computationStaField[response.info[m].name] = 0;
                    if (response.info[m].computation_relative !== "" && response.info[m].field_sub_type != "duplicate") {
                        this.computationRel[response.info[m].name] = "";
                        this.compurelField[response.info[m].name] = response.info[m];
                        response.info[m].computation_relative = JSON.parse(response.info[m].computation_relative);
                        this.computationRel[response.info[m].name] = response.info[m].computation_relative;
                    }
                    if (response.info[m].computation_status !== "" && response.info[m].field_sub_type != "duplicate") {
                        response.info[m].computation_status = JSON.parse(response.info[m].computation_status);
                        this.computationSta[response.info[m].name] = response.info[m].computation_status;
                        // for(let z=0;z<this.computationSta[response.info[m].name].length;z++){
                        //   this.computationDep[this.computationSta[response.info[m].name][z].name]={response.info[m].name}
                        // }
                    }
                    if (response.info[m].is_sub_table !== "") {
                        response.info[m].is_sub_table = JSON.parse(response.info[m].is_sub_table);
                    }
                    if (response.info[m].parent_table_id != 0 && response.info[m].field_sub_type !== "duplicate" && response.info[m].is_sub_table === "") {
                        // this.editValues[response.info[m].name] = "";
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
                    if (response.info[m][this.userData.designation] !== 3 && response.info[m].is_hidden == 0) {
                        if (response.info[m].field_sub_type === 'user') {
                            this.user_fields.push(response.info[m].name);
                        }
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
                    if (this.metaData[m].field_sub_type === "select" && this.metaData[m].parent_table_name != "") {
                        this.selectField[this.metaData[m].name] = this.metaData[m].parent_table_field;
                    }
                    // if (this.metaData[m].field_sub_type === "select" && this.metaData[m].master_table != "") {
                    //   this.selectField[this.metaData[m].name] = this.metaData[m].master_field;
                    // }
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
                    if ((this.metaData[m].field_sub_type == "checklist" || this.metaData[m].field_sub_type == "user") && (this.metaData[m].name != 'created_by' && this.metaData[m].name != 'last_modified_by')) {
                        this.checkList[this.metaData[m].name] = [];
                        this.checkListName[this.metaData[m].name] = [];
                    }
                    if (this.metaData[m].mandatory == 1) {
                        this.mandatoryField.push(this.metaData[m].name);
                    }
                    col.push(this.metaData[m].name);
                    if (this.metaData[m].field_type == "DATETIME") {
                        this.dateTime.push(this.metaData[m].name);
                    }
                    if (this.metaData[m].field_type == "DATE") {
                        this.date.push(this.metaData[m].name);
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
                this.getValues();
            }
            console.log("meta", this.metaDataTemp);
        });
    }
    getValues() {
        let temp = { id: this.routeInfo.rowid, tableId: this.routeInfo.id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            var _a, _b, _c;
            if (response.statusCode == 200) {
                if (response.info[0].created_by != 0 && response.info[0].created_by != "") {
                    response.info[0].created_by.value = JSON.parse(response.info[0].created_by.value);
                    if (response.info[0].created_by.value[0].photo != '') {
                        response.info[0].created_by.value[0].photo = JSON.parse(response.info[0].created_by.value[0].photo);
                    }
                }
                if (response.info[0].last_modified_by != '0' && response.info[0].last_modified_by != "") {
                    response.info[0].last_modified_by.value = JSON.parse(response.info[0].last_modified_by.value);
                    if (response.info[0].last_modified_by.value[0].photo != '') {
                        response.info[0].last_modified_by.value[0].photo = JSON.parse(response.info[0].last_modified_by.value[0].photo);
                    }
                }
                let radio_d = Object.keys(this.d_advanced);
                let infokeys = Object.keys(response.info[0]);
                for (let i = 0; i < radio_d.length; i++) {
                    this.d_advanced[radio_d[i]] = response.info[0][radio_d[i]];
                }
                let spl = [];
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
                            if (this.metaData[j].option_list != "") {
                                // this.metaData[j].option_list = this.metaData[j].option_list.split(",")
                            }
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
                let selectF = Object.keys(this.selectField);
                for (let i = 0; i < selectF.length; i++) {
                    if (response.info[0][selectF[i]].value != "") {
                        response.info[0][selectF[i]].value = JSON.parse(response.info[0][selectF[i]].value);
                    }
                }
                for (let i = 0; i < radio_d.length; i++) {
                    this.d_advanced[radio_d[i]] = response.info[0][radio_d[i]];
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
                // for (let i = 0; i < this.user_fields.length; i++) {
                //   if (response.info[0][this.user_fields[i]].length !== 0) {
                //     if (response.info[0][this.user_fields[i]]?.value) {
                //       response.info[0][this.user_fields[i]].value = JSON.parse(response.info[0][this.user_fields[i]].value)
                //       // response.info[0][this.user_fields[i]] = response.info[0][this.user_fields[i]].value[0].user_name;
                //     }
                //   }
                // }
                this.editValues = response.info[0];
                this.getWorkFlow(this.editValues);
                this.values["id"] = this.editValues.id;
                this.valuesTemp["id"] = this.editValues.id;
                let tempe = Object.keys(response.info[0]);
                for (let z = 0; z < tempe.length; z++) {
                    if (typeof response.info[0][tempe[z]] == 'object' && !Array.isArray(response.info[0][tempe[z]])) {
                        if (response.info[0][tempe[z]].value === "") {
                            this.valuesTemp[tempe[z]] = response.info[0][tempe[z]].value;
                        }
                        else {
                            this.valuesTemp[tempe[z]] = response.info[0][tempe[z]].value[0].id;
                        }
                    }
                    else {
                        this.valuesTemp[tempe[z]] = response.info[0][tempe[z]];
                    }
                }
                let check = Object.keys(this.checkList);
                for (let i = 0; i < check.length; i++) {
                    if (response.info[0][check[i]].hasOwnProperty("value")) {
                        if (response.info[0][check[i]].value != "") {
                            this.checkList[check[i]] = [];
                            this.valuesTemp[check[i]] = [];
                            response.info[0][check[i]].value = JSON.parse(response.info[0][check[i]].value);
                            if (response.info[0][check[i]].value[0].hasOwnProperty("photo")) {
                                for (let m = 0; m < response.info[0][check[i]].value.length; m++) {
                                    if (response.info[0][check[i]].value[m].photo != "") {
                                        response.info[0][check[i]].value[m].photo = JSON.parse(response.info[0][check[i]].value[m].photo);
                                    }
                                }
                            }
                            this.checkListName[check[i]] = response.info[0][check[i]].value;
                            for (let z = 0; z < this.checkListName[check[i]].length; z++) {
                                this.checkList[check[i]].push(this.checkListName[check[i]][z].id);
                                this.valuesTemp[check[i]].push(this.checkListName[check[i]][z].id);
                            }
                        }
                        else {
                            this.checkList[check[i]] = [];
                            this.valuesTemp[check[i]] = [];
                        }
                    }
                    else {
                        if (response.info[0][check[i]] != '') {
                            this.checkList[check[i]] = response.info[0][check[i]].split(",");
                            this.valuesTemp[check[i]] = response.info[0][check[i]].split(",");
                        }
                        else {
                            this.checkList[check[i]] = [];
                            this.valuesTemp[check[i]] = [];
                        }
                    }
                }
                console.log("eeeeeeeee", this.editValues, this.valuesTemp, this.checkListName, this.checkList);
                // this.createDateTime('last_modified_on');
                // this.values['last_modified_by'] = this.userData.id;
                // this.editValues['last_modified_by'] = this.userData.user_name;
                // this.editValues['created_by'] = this.userData.user_name;
                this.getSubTable();
                this.relativeFunction();
                setTimeout(() => {
                    let tempve;
                    tempve = this.valuesTemp;
                    if (tempve.port_of_discharge != "" && tempve.port_of_loading != "") {
                        this.getVesselValues();
                    }
                }, 200);
            }
        });
    }
    relativeFunction() {
        // console.log("sta", this.computationSta)
        let comr = Object.keys(this.computationRel);
        let coms = Object.keys(this.computationSta);
        console.log("Rel", this.computationRel, this.valuesTemp, comr);
        let temp = {};
        for (let i = 0; i < comr.length; i++) {
            let checkConstant = 0;
            if (this.computationRel[comr[i]].hasOwnProperty("constants")) {
                for (let c = 0; c < this.computationRel[comr[i]].constants.length; c++) {
                    if (this.valuesTemp[comr[i]] != "" && this.valuesTemp[comr[i]] != null) {
                        if (this.computationRel[comr[i]].constants[c].value == this.valuesTemp[comr[i]] || this.computationRel[comr[i]].constants[c].id == this.valuesTemp[comr[i]]) {
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
                        let tem8 = 0;
                        let tem7 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]].length;
                        for (let k = 0; k < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]].length; k++) {
                            if (tem8 == 0) {
                                tem9 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].changed_value;
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "equal_to") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id !== "") {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id !== "") {
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].id) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                    if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                        tem8 = 1;
                                                        tem10 = 1;
                                                    }
                                                }
                                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 1;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                                    if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                        for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                            if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
                                                                tem8 = 0;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) {
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
                                    if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] != "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
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
                                if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].condition === "is_not_empty") {
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (((tem7 - 1) == k) && tem8 == 0) {
                                                tem8 = 1;
                                                tem10 = 1;
                                            }
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                    tem8 = 1;
                                                }
                                            }
                                            if (tem8 == 0) {
                                                tem10 = 1;
                                            }
                                            tem8 = 0;
                                        }
                                        if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "OR" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                            if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                    if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] == "") {
                                                        tem8 = 1;
                                                    }
                                                }
                                            }
                                            else {
                                                if (this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
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
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                    let tem1 = this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length;
                                    for (let l = 0; l < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value.length; l++) {
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
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
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] < this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] >= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value)) {
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
                                        if (this.valuesTemp.hasOwnProperty(this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name)) {
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "AND") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                        tem8 = 0;
                                                    }
                                                }
                                                if (((tem7 - 1) == k) && ((tem1 - 1) == l) && tem8 == 0) {
                                                    tem8 = 1;
                                                    tem10 = 1;
                                                }
                                            }
                                            if (this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_operator == "AND" && this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].operator == "OR") {
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
                                                            tem8 = 1;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] > this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) || this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] == "") {
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
                                                if (Array.isArray(this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name])) {
                                                    for (let m = 0; m < this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name].length; m++) {
                                                        if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name][m] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
                                                            tem8 = 0;
                                                        }
                                                    }
                                                }
                                                else {
                                                    if ((this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] <= this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].depended_value[l].value) && this.valuesTemp[this.computationRel[comr[i]][this.computationRel[comr[i]].priority[j]][k].name] != "") {
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
                    if (tem9.id == "") {
                        this.editValues[comr[i]] = tem9.value;
                        this.values[comr[i]] = tem9.value;
                        this.valuesTemp[comr[i]] = tem9.value;
                    }
                    else {
                        let tempp = { value: [] };
                        let tempp1 = { [this.compurelField[comr[i]].parent_table_field]: tem9.value, id: tem9.id };
                        tempp.value.push(tempp1);
                        this.editValues[comr[i]] = tempp;
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].id != "") {
                                    if (this.computationSta[coms[i]][l].depended_value[j].id === this.valuesTemp[coms[i]]) {
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
                                    if (this.computationSta[coms[i]][l].depended_value[j].value === this.valuesTemp[coms[i]]) {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].id != "") {
                                    if (this.computationSta[coms[i]][l].depended_value[j].id !== this.valuesTemp[coms[i]]) {
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
                                    if (this.computationSta[coms[i]][l].depended_value[j].value !== this.valuesTemp[coms[i]]) {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] == "") {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value > this.valuesTemp[coms[i]]) {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value < this.valuesTemp[coms[i]]) {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value >= this.valuesTemp[coms[i]]) {
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
                        if (this.valuesTemp.hasOwnProperty(coms[i]) && this.valuesTemp[coms[i]] !== "") {
                            for (let j = 0; j < this.computationSta[coms[i]][l].depended_value.length; j++) {
                                if (this.computationSta[coms[i]][l].depended_value[j].value <= this.valuesTemp[coms[i]]) {
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
            if (response.statusCode == 200) {
                let temp2 = response.info.length;
                temp2 -= 1;
                this.subTableInfo = response.info;
                for (let i = 0; i < this.subTableInfo.length; i++) {
                    this.subTableInfo[i]["row_count"] = [];
                    let temp = [];
                    temp.push(this.subTableInfo[i]);
                    this.metaDataTemp[this.subTableInfo[i].group_id].splice(this.subTableInfo[i].row_no, 0, temp);
                    this.getSubFields(this.subTableInfo[i], i);
                    if (temp2 == i) {
                        this.loaded = 1;
                    }
                }
            }
        });
    }
    getSubFields(item, ind) {
        let body = { table_name: item.table_name };
        this.CommonService.getMetaData(body).subscribe((response) => {
            if (response.statusCode == 200) {
                this.advancedsub_field[item.table_name] = [];
                this.checkListSub[item.table_name] = {};
                this.checkListNameSub[item.table_name] = {};
                this.mergedsub_field[item.table_name] = [];
                if (response['info'].length !== 0)
                    response['info'].sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.field_position) - (b === null || b === void 0 ? void 0 : b.field_position); });
                for (let j = 0; j < response.info.length; j++) {
                    if (response.info[j].field_sub_type == "merge_fields") {
                        response.info[j].merge_fields = JSON.parse(response.info[j].merge_fields);
                        this.mergedsub_field[item.table_name].push(response.info[j]);
                    }
                    if (response.info[j].parent_table_id != 0 && response.info[j].field_sub_type == "select") {
                        // this.editValues[response.info[j].name] = "";
                        this.advancedsub_field[item.table_name].push(response.info[j]);
                    }
                    if (response.info[j].field_type == "DATETIME") {
                        this.dateTimeSub.push(response.info[j].name);
                    }
                    if (response.info[j].field_type == "DATE") {
                        this.dateSub.push(response.info[j].name);
                    }
                    response.info[j].option_list = response.info[j].option_list.split(",");
                    if ((response.info[j].field_sub_type == "checklist" || response.info[j].field_sub_type == "user") && (response.info[j].name != 'created_by' && response.info[j].name != 'last_modified_by')) {
                        this.checkListSub[item.table_name][response.info[j].name] = [];
                    }
                }
                if (item.id != 251) {
                    this.subFieldInfo[item.table_name] = response.info;
                }
                else {
                    this.vesselField = response.info;
                    console.log("vf", this.vesselField);
                }
                this.getSubValues(item, ind);
            }
        });
    }
    getSubValues(item, ind) {
        let getBody = { table_name: item.table_name, data_table_id: item.id, limit: 100, page: 0, sort_type: "ASC", sort_field: "id" };
        let temp2 = {
            condition: "Equal to",
            fields: "row_id",
            operator: "AND",
            type: "VARCHAR",
        };
        temp2[1] = this.routeInfo.rowid;
        getBody["filter"] = [];
        getBody["filter"].push(temp2);
        this.CommonService.getFiterTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                // for (let i = 0; i < this.dateTimeSub.length; i++) {
                //   for (let j = 0; j < response.info.length; j++) {
                //     if (response.info[j].hasOwnProperty(this.dateTimeSub[i])) {
                //       if (response.info[j][this.dateTimeSub[i]] != "") {
                //         let d = new Date(response.info[j][this.dateTimeSub[i]]),
                //           month = '' + (d.getMonth() + 1),
                //           day = '' + d.getDate(),
                //           year = '' + d.getFullYear(),
                //           hours = '' + d.getHours(),
                //           minites = '' + d.getMinutes()
                //         if (month.length < 2)
                //           month = '0' + month;
                //         if (day.length < 2)
                //           day = '0' + day;
                //         if (hours.length < 2)
                //           hours = '0' + hours
                //         if (minites.length < 2)
                //           minites = '0' + minites
                //         response.info[j][this.dateTimeSub[i]] = [year, month, day].join('-') + 'T' + [hours, minites].join(':');
                //       }
                //     }
                //   }
                // }
                // for (let i = 0; i < this.dateTimeSub.length; i++) {
                //   for (let j = 0; j < response.info.length; j++) {
                //     if (response.info[j].hasOwnProperty(this.dateTimeSub[i])) {
                //       if (response.info[j][this.dateTimeSub[i]] != "") {
                //         let d = new Date(response.info[j][this.dateTimeSub[i]]),
                //           month = '' + (d.getMonth() + 1),
                //           day = '' + d.getDate(),
                //           year = '' + d.getFullYear(),
                //           hours = '' + d.getHours(),
                //           minites = '' + d.getMinutes()
                //         if (month.length < 2)
                //           month = '0' + month;
                //         if (day.length < 2)
                //           day = '0' + day;
                //         if (hours.length < 2)
                //           hours = '0' + hours
                //         if (minites.length < 2)
                //           minites = '0' + minites
                //         response.info[j][this.dateTimeSub[i]] = [year, month, day].join('-') + 'T' + [hours, minites].join(':');
                //       }
                //     }
                //   }
                // }
                if (item.id != 251) {
                    this.subValues[item.table_name] = response.info;
                    this.editsubValues[item.table_name] = response.info;
                    for (let j = 0; j < this.subValues[item.table_name].length; j++) {
                        this.subTableInfo[ind].row_count.push(j + 1);
                        let check = Object.keys(this.checkListSub[item.table_name]);
                        for (let i = 0; i < check.length; i++) {
                            if (Array.isArray(response.info[j][check[i]])) {
                                for (let m = 0; m < response.info[j][check[i]].length; m++) {
                                    if (response.info[j][check[i]][m].hasOwnProperty("photo")) {
                                        if (response.info[j][check[i]][m].photo != "") {
                                            this.subValues[item.table_name][j][check[i]][m].photo = JSON.parse(response.info[j][check[i]][m].photo);
                                        }
                                    }
                                }
                            }
                            else {
                                if (response.info[j][check[i]] != '' && response.info[j][check[i]] != null) {
                                    this.subValues[item.table_name][j][check[i]] = response.info[j][check[i]].split(",");
                                }
                                else {
                                    this.subValues[item.table_name][j][check[i]] = [];
                                }
                            }
                        }
                    }
                }
                // this.loaded = 1;
            }
        });
    }
    getVesselValues() {
        this.vesselField = [];
        this.vesselData = [];
        this.vesselCount = 100;
        let tempvalue;
        tempvalue = this.valuesTemp;
        let getBody = { table_name: "vessel_schedule_and_tracking", data_table_id: 251, limit: 100, page: 0, sort_type: "ASC", sort_field: "id" };
        let temp2 = {
            condition: "Equal to",
            fields: "row_id",
            operator: "AND",
            type: "VARCHAR",
        };
        temp2[1] = this.routeInfo.rowid;
        getBody["filter"] = [];
        getBody["filter"].push(temp2);
        this.CommonService.getFiterTableValues(getBody).subscribe((response) => {
            if (response.statusCode == 200) {
                let tempve = [];
                let rowTemp = [];
                // this.vesselData = response.info
                let count = 0;
                let count2 = response.info.length;
                for (let v = 0; v < response.info.length; v++) {
                    let temp = { id: 0, tableId: 251 };
                    temp.id = response.info[v].id;
                    this.CommonService.getRowValues(temp).subscribe((response) => {
                        if (response.statusCode == 200) {
                            let check = 0;
                            if (response.info[0].reviced != "") {
                                response.info[0].reviced = JSON.parse(response.info[0].reviced);
                            }
                            if (response.info[0].actual_vessel_name.value != "") {
                                response.info[0].actual_vessel_name.value = JSON.parse(response.info[0].actual_vessel_name.value);
                            }
                            if (response.info[0].departure_port.value != "") {
                                response.info[0].departure_port.value = JSON.parse(response.info[0].departure_port.value);
                            }
                            if (response.info[0].arrival_port.value != "") {
                                response.info[0].arrival_port.value = JSON.parse(response.info[0].arrival_port.value);
                            }
                            rowTemp.push(response.info[0]);
                            if (response.info[0].hasOwnProperty("id") && response.info.length) {
                                count = v + 1;
                            }
                            console.log("Ggggggggg", response.info[0]);
                            if (count == count2 && response.info[0].hasOwnProperty("id") && response.info.length) {
                                setTimeout(() => {
                                    // console.log("ccccc", count, count2, rowTemp)
                                    // this.vesselData = rowTemp;
                                    // if()
                                    for (let v = 0; v < rowTemp.length; v++) {
                                        this.Progressvalue = 0;
                                        this.bufferValue = 0;
                                        // console.log("eeeeeeee", tempvalue)
                                        if (rowTemp[v].departure_port.value[0].id == tempvalue.port_of_loading) {
                                            tempve.push(rowTemp[v]);
                                            // console.log("enter111")
                                        }
                                        check = check + 1;
                                        // console.log("11111", rowTemp[v])
                                        for (let z = 0; tempve.length < (rowTemp.length - 1) && tempve.length != 0 && z < 100; z++) {
                                            for (let v1 = 0; v1 < rowTemp.length; v1++) {
                                                if (rowTemp[v1].arrival_port.value[0].id != tempvalue.port_of_discharge && rowTemp[v1].departure_port.value[0].id != tempvalue.port_of_loading && rowTemp.length > 2 && tempve.length != 0) {
                                                    if (tempve.length == 1) {
                                                        if (tempve[0].arrival_port.value[0].id == rowTemp[v1].departure_port.value[0].id) {
                                                            tempve.push(rowTemp[v1]);
                                                            // console.log("222222", rowTemp[v])
                                                        }
                                                    }
                                                    else if (tempve[tempve.length - 1].arrival_port.value[0].id == rowTemp[v1].departure_port.value[0].id) {
                                                        tempve.push(rowTemp[v1]);
                                                        // console.log("222222", rowTemp[v])
                                                    }
                                                }
                                            }
                                        }
                                        if (tempve.length == (rowTemp.length - 1)) {
                                            for (let v2 = 0; v2 < rowTemp.length; v2++) {
                                                if (rowTemp[v2].arrival_port.value[0].id == tempvalue.port_of_discharge) {
                                                    tempve.push(rowTemp[v2]);
                                                    check = 1;
                                                    console.log("3333333", rowTemp[v2]);
                                                }
                                            }
                                        }
                                        if (rowTemp.length == tempve.length) {
                                            this.vesselData = tempve;
                                            this.vesselCount = this.vesselData.length;
                                            let veel = (this.vesselData.length + 1);
                                            this.veec = (100 / veel);
                                            let veep = 0;
                                            let d = new Date();
                                            if (this.vesselData[0].etd != '' && this.vesselData[this.vesselCount - 1].eta != '') {
                                                let d = new Date(this.vesselData[0].etd);
                                                let d2 = new Date(this.vesselData[this.vesselCount - 1].eta);
                                                let diffTime = Math.abs(d - d2);
                                                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                this.TotalEstimatedTime = diffDays;
                                            }
                                            if (this.vesselData[0].actual_departure != '' && this.vesselData[this.vesselCount - 1].actual_arrival_date != '') {
                                                let d = new Date(this.vesselData[0].actual_departure);
                                                let d2 = new Date(this.vesselData[this.vesselCount - 1].actual_arrival_date);
                                                let diffTime = Math.abs(d - d2);
                                                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                this.TotalActualTime = diffDays;
                                            }
                                            if (this.TotalEstimatedTime < this.TotalActualTime)
                                                this.TotalDelay = this.TotalEstimatedTime - this.TotalActualTime;
                                            for (let p = 0; p < this.vesselData.length; p++) {
                                                if (p == 0 && this.vesselData[0].actual_departure != "") {
                                                    // console.log("sssss", this.veec, this.vesselCount)
                                                    this.Progressvalue = this.Progressvalue + this.veec;
                                                }
                                                if (p == 0 && this.vesselData[0].actual_arrival_date != "") {
                                                    this.Progressvalue = this.Progressvalue + this.veec;
                                                    // console.log("ssssseeee", this.Progressvalue)
                                                }
                                                if (p != 0 && this.vesselData[p].actual_arrival_date != "") {
                                                    this.Progressvalue = this.Progressvalue + this.veec;
                                                }
                                            }
                                            if (this.Progressvalue < 90) {
                                                this.bufferValue = this.Progressvalue + this.veec;
                                            }
                                            let orgintemp = 0;
                                            if (this.editValues.pickup_two_location.value == "") {
                                                orgintemp = 34;
                                                this.OrginProgressvalue = 34;
                                            }
                                            else {
                                                orgintemp = 25;
                                                this.OrginProgressvalue = 25;
                                            }
                                            if (this.valuesTemp['pickup_actual_departure'] != '' && this.OrginProgressvalue == 34) {
                                                this.OrginProgressvalue = this.OrginProgressvalue + 33;
                                                if (this.vesselData[0].actual_arrival_date != "")
                                                    this.OrginProgressvalue = this.OrginProgressvalue + 33;
                                            }
                                            else if (this.valuesTemp['pickup_actual_departure'] != '' && this.OrginProgressvalue == 25) {
                                                this.OrginProgressvalue = this.OrginProgressvalue + 25;
                                                if (this.valuesTemp['pickup_two_actual_arrival'] != "") {
                                                    this.OrginProgressvalue = this.OrginProgressvalue + 25;
                                                    if (this.vesselData[0].actual_arrival_date != "")
                                                        this.OrginProgressvalue = this.OrginProgressvalue + 25;
                                                }
                                            }
                                            if (orgintemp == 34)
                                                this.OrginbufferValue = this.OrginProgressvalue + orgintemp;
                                            else
                                                this.OrginbufferValue = this.OrginProgressvalue + orgintemp;
                                            // console.log("pp", this.Progressvalue, this.bufferValue, this.veec)
                                            // console.log("vd", this.vesselData, tempve)
                                        }
                                    }
                                    // console.log("bbbbbbb", rowTemp, tempve, rowTemp.length, tempve.length)
                                    for (let z = 0; z < this.vesselData.length; z++) {
                                        if (this.vesselData[z].reviced == '') {
                                            this.vesselData[z].reviced = [];
                                        }
                                        else if (!Array.isArray(this.vesselData[z].reviced)) {
                                            this.vesselData[z].reviced = JSON.parse(this.vesselData[z].reviced);
                                        }
                                    }
                                }, 100);
                            }
                        }
                    });
                }
            }
        });
    }
    getInsideSubTable(templateName, item) {
        this.subViewTable = item;
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
    createSubTableView(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '900px',
        });
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
                else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                    if (value[i].default_value != "") {
                        temp[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'checklist') {
                    temp[value[i].name] = [];
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                }
            }
        }
        else {
            this.subValues[tablename] = [];
            // this.editsubValues[tablename] = [];
            for (let i = 0; i < value.length; i++) {
                if (value[i].field_sub_type == 'number') {
                    if (value[i].default_value == "") {
                        temp[value[i].name] = 0;
                    }
                    else {
                        temp[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'date' || value[i].field_sub_type == 'time' || value[i].field_sub_type == 'datetime-local') {
                    if (value[i].default_value != "") {
                        temp[value[i].name] = value[i].default_value;
                    }
                }
                else if (value[i].field_sub_type == 'checklist') {
                    temp[value[i].name] = [];
                }
                else {
                    temp[value[i].name] = value[i].default_value;
                }
            }
        }
        temp["row_id"] = this.routeInfo.rowid;
        temp["last_modified_by"] = this.userData.id;
        let temp2 = [];
        temp2.push(temp);
        this.subValues[tablename].push(temp);
        this.CommonService.createSubValues(temp2, tablename).subscribe((response) => {
            if (response.statusCode == 200) {
                let temp3;
                temp3 = this.subValues[tablename].length;
                this.subValues[tablename][temp3 - 1]["id"] = response.last_insert_id[0];
                // this.editsubValues[tablename].push(this.subValues[tablename][temp3 - 1])
                this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbarUnhide('Item Not Updated, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    createinsideSubValue() {
    }
    valueChanges(name, value) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.values[name] = value;
        this.valuesTemp[name] = value;
        this.editValues[name] = value;
        console.log("ddddddd", this.values, this.editValues);
        let temp = Object.keys(this.dateDifference);
        for (let i = 0; i < temp.length; i++) {
            if (this.dateDifference[temp[i]].includes(name)) {
                if (this.editValues[this.dateDifference[temp[i]][0]] !== "" && this.editValues[this.dateDifference[temp[i]][1]] !== "") {
                    let date1 = new Date(this.editValues[this.dateDifference[temp[i]][0]]);
                    let date2 = new Date(this.editValues[this.dateDifference[temp[i]][1]]);
                    let diffTime = Math.abs(date1 - date2);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (date1 < date2) {
                        this.values[temp[i]] = diffDays + " " + ((_a = this.dateDifference[temp[i]][2]) === null || _a === void 0 ? void 0 : _a.delay_status);
                        this.valuesTemp[temp[i]] = diffDays + " " + ((_b = this.dateDifference[temp[i]][2]) === null || _b === void 0 ? void 0 : _b.delay_status);
                        this.editValues[temp[i]] = diffDays + " " + ((_c = this.dateDifference[temp[i]][2]) === null || _c === void 0 ? void 0 : _c.delay_status);
                    }
                    else if (date1 > date2) {
                        this.values[temp[i]] = diffDays + " " + ((_d = this.dateDifference[temp[i]][2]) === null || _d === void 0 ? void 0 : _d.early_status);
                        this.valuesTemp[temp[i]] = diffDays + " " + ((_e = this.dateDifference[temp[i]][2]) === null || _e === void 0 ? void 0 : _e.early_status);
                        this.editValues[temp[i]] = diffDays + " " + ((_f = this.dateDifference[temp[i]][2]) === null || _f === void 0 ? void 0 : _f.early_status);
                    }
                    else {
                        this.values[temp[i]] = (_g = this.dateDifference[temp[i]][2]) === null || _g === void 0 ? void 0 : _g.on_time_status;
                        this.valuesTemp[temp[i]] = (_h = this.dateDifference[temp[i]][2]) === null || _h === void 0 ? void 0 : _h.on_time_status;
                        this.editValues[temp[i]] = (_j = this.dateDifference[temp[i]][2]) === null || _j === void 0 ? void 0 : _j.on_time_status;
                    }
                }
            }
        }
        this.relativeFunction();
    }
    uservalueChanges(name, value, id) {
        this.values[name] = id;
        this.valuesTemp[name] = id;
        this.editValues[name] = value;
        this.relativeFunction();
    }
    switchvalueChanges(name, value, item) {
        this.values[name] = value;
        this.valuesTemp[name] = value;
        this.editValues[name] = value;
        if (value == 1) {
            if (this.sameas.includes(name)) {
                for (let i = 0; i < item.relative_fields.sameasautofill.length; i++) {
                    for (let j = 0; j < item.relative_fields.sameasautofill[i].paste_name.length; j++) {
                        if (this.advancedSameAs.hasOwnProperty(item.relative_fields.sameasautofill[i].name)) {
                            this.values[item.relative_fields.sameasautofill[i].paste_name[j]] = this.advancedSameAs[item.relative_fields.sameasautofill[i].name];
                            this.valuesTemp[item.relative_fields.sameasautofill[i].paste_name[j]] = this.advancedSameAs[item.relative_fields.sameasautofill[i].name];
                            this.editValues[item.relative_fields.sameasautofill[i].paste_name[j]] = this.advancedSameAs[item.relative_fields.sameasautofill[i].name];
                        }
                        else {
                            this.values[item.relative_fields.sameasautofill[i].paste_name[j]] = this.values[item.relative_fields.sameasautofill[i].name];
                            this.valuesTemp[item.relative_fields.sameasautofill[i].paste_name[j]] = this.values[item.relative_fields.sameasautofill[i].name];
                            this.editValues[item.relative_fields.sameasautofill[i].paste_name[j]] = this.values[item.relative_fields.sameasautofill[i].name];
                        }
                    }
                }
            }
        }
        this.relativeFunction();
    }
    advancedvalueChanges(name, value) {
        this.values[name] = value;
        this.valuesTemp[name] = value;
        this.relativeFunction();
    }
    dropDownvalueChanges(name, value, item) {
        console.log("enter", name, value, item);
        this.values[name] = value;
        this.valuesTemp[name] = value;
        let tempvalue;
        let temp = { id: value, tableId: item.parent_table_id };
        console.log("wwww", temp);
        this.CommonService.getRowValues(temp).subscribe((response) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (response.statusCode =  true && response.info.length) {
                console.log("wwwww", response.info);
                tempvalue = response.info[0];
                let keysv = Object.keys(tempvalue);
                for (let i = 0; i < this.advanced_field.length; i++) {
                    if ((tempvalue.hasOwnProperty(this.advanced_field[i].parent_table_field) && this.advanced_field[i].name == name && this.advanced_field[i].parent_table_name == item.parent_table_name && this.advanced_field[i].merge_fields == '')) {
                        // this.values[this.advanced_field[i].name] = value;
                        if (typeof tempvalue[this.advanced_field[i].parent_table_field] == 'object') {
                            if (tempvalue[this.advanced_field[i].parent_table_field].value != "") {
                                tempvalue[this.advanced_field[i].parent_table_field].value = JSON.parse(tempvalue[this.advanced_field[i].parent_table_field].value);
                            }
                            this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].parent_table_field].value[0];
                        }
                        else {
                            this.editValues[this.advanced_field[i].name] = { value: [] };
                            let tem = { id: value, [this.advanced_field[i].parent_table_field]: tempvalue[this.advanced_field[i].parent_table_field] };
                            // this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].parent_table_field];
                            this.editValues[this.advanced_field[i].name].value.push(tem);
                        }
                    }
                    if ((tempvalue.hasOwnProperty(this.advanced_field[i].parent_table_field) && this.advanced_field[i].name != name && this.advanced_field[i].parent_table_name == item.parent_table_name && this.advanced_field[i].merge_fields == '')) {
                        this.values[this.advanced_field[i].name] = value;
                        this.valuesTemp[this.advanced_field[i].name] = value;
                        if (typeof tempvalue[this.advanced_field[i].parent_table_field] == 'object') {
                            if (tempvalue[this.advanced_field[i].parent_table_field].value != "") {
                                tempvalue[this.advanced_field[i].parent_table_field].value = JSON.parse(tempvalue[this.advanced_field[i].parent_table_field].value);
                            }
                            this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].parent_table_field].value[0];
                        }
                        else {
                            this.editValues[this.advanced_field[i].name] = { value: [] };
                            let tem = { id: value, [this.advanced_field[i].parent_table_field]: tempvalue[this.advanced_field[i].parent_table_field] };
                            // this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].parent_table_field];
                            this.editValues[this.advanced_field[i].name].value.push(tem);
                        }
                    }
                    if (tempvalue.hasOwnProperty(this.advanced_field[i].master_field) && this.advanced_field[i].name != name && this.advanced_field[i].master_table == item.parent_table_name && this.advanced_field[i].merge_fields == '') {
                        if (typeof tempvalue[this.advanced_field[i].master_field] == 'object') {
                            if (tempvalue[this.advanced_field[i].master_field].value != "") {
                                tempvalue[this.advanced_field[i].master_field].value = JSON.parse(tempvalue[this.advanced_field[i].master_field].value);
                                if (this.editValues[(_a = this.advanced_field[i]) === null || _a === void 0 ? void 0 : _a.name].value === "") {
                                    this.editValues[(_b = this.advanced_field[i]) === null || _b === void 0 ? void 0 : _b.name].value = [];
                                    let tem = { id: tempvalue[this.advanced_field[i].master_field].value[0].id, [this.advanced_field[i].parent_table_field]: (_d = tempvalue[(_c = this.advanced_field[i]) === null || _c === void 0 ? void 0 : _c.master_field]) === null || _d === void 0 ? void 0 : _d.value[0][(_e = this.advanced_field[i]) === null || _e === void 0 ? void 0 : _e.parent_table_field] };
                                    this.editValues[(_f = this.advanced_field[i]) === null || _f === void 0 ? void 0 : _f.name].value.push(tem);
                                }
                                else {
                                    this.editValues[(_g = this.advanced_field[i]) === null || _g === void 0 ? void 0 : _g.name].value[0][this.advanced_field[i].parent_table_field] = (_j = tempvalue[(_h = this.advanced_field[i]) === null || _h === void 0 ? void 0 : _h.master_field]) === null || _j === void 0 ? void 0 : _j.value[0][(_k = this.advanced_field[i]) === null || _k === void 0 ? void 0 : _k.parent_table_field];
                                }
                                this.values[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].master_field].value[0].id;
                                this.valuesTemp[this.advanced_field[i].name] = tempvalue[this.advanced_field[i].master_field].value[0].id;
                            }
                            else {
                                this.editValues[(_l = this.advanced_field[i]) === null || _l === void 0 ? void 0 : _l.name].value[0][this.advanced_field[i].parent_table_field] = "";
                                this.values[this.advanced_field[i].name] = "";
                                this.valuesTemp[this.advanced_field[i].name] = "";
                            }
                        }
                        else {
                            this.editValues[this.advanced_field[i].name] = { value: [] };
                            let tem = { id: value, [this.advanced_field[i].parent_table_field]: tempvalue[this.advanced_field[i].master_field] };
                            // this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].parent_table_field];
                            this.editValues[this.advanced_field[i].name].value.push(tem);
                            // this.editValues[this.advanced_field[i].name].value[0][this.advanced_field[i].parent_table_field] = tempvalue[this.advanced_field[i].master_field];
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
                        this.editValues[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name].toString();
                        this.values[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name];
                        this.valuesTemp[this.mergedFields[i].name] = this.editValues[this.mergedFields[i].name];
                    }
                }
                console.log("vvvvvvvvvvvvvssssssss", this.values, this.editValues, this.valuesTemp);
                console.log("editValues", this.editValues);
                this.relativeFunction();
            }
        });
    }
    dropDownSubvalueChanges(tablename, name, value, i, item) {
        this.subValues[tablename][i][name] = value;
        let tempvalue;
        let temp = { id: value, tableId: item.parent_table_id };
        this.CommonService.getRowValues(temp).subscribe((response) => {
            var _a;
            if (response.statusCode = 200) {
                tempvalue = response.info[0];
                let keysv = Object.keys(tempvalue);
                for (let k = 0; k < this.advancedsub_field[tablename].length; k++) {
                    if ((tempvalue.hasOwnProperty(this.advancedsub_field[tablename][k].parent_table_field) && this.advancedsub_field[tablename][k].name == name && this.advancedsub_field[tablename][k].parent_table_name == item.parent_table_name && this.advancedsub_field[tablename][k].field_sub_type != "merge_fields")) {
                        if (typeof tempvalue[this.advancedsub_field[tablename][k].parent_table_field] == 'object') {
                            if (tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value != "") {
                                tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value = JSON.parse(tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value);
                            }
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value;
                        }
                        else {
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = [];
                            let tem = { id: value, [this.advancedsub_field[tablename][k].parent_table_field]: tempvalue[this.advancedsub_field[tablename][k].parent_table_field] };
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name].push(tem);
                        }
                    }
                    if ((tempvalue.hasOwnProperty(this.advancedsub_field[tablename][k].parent_table_field) && this.advancedsub_field[tablename][k].name != name && this.advancedsub_field[tablename][k].parent_table_name == item.parent_table_name && this.advancedsub_field[tablename][k].field_sub_type != "merge_fields")) {
                        this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = value;
                        if (typeof tempvalue[this.advancedsub_field[tablename][k].parent_table_field] == 'object') {
                            if (tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value != "") {
                                tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value = JSON.parse(tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value);
                            }
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].parent_table_field].value;
                        }
                        else {
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = [];
                            let tem = { id: value, [this.advancedsub_field[tablename][k].parent_table_field]: tempvalue[this.advancedsub_field[tablename][k].parent_table_field] };
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name].push(tem);
                        }
                    }
                    if (tempvalue.hasOwnProperty(this.advancedsub_field[tablename][k].master_field) && this.advancedsub_field[tablename][k].name != name && this.advancedsub_field[tablename][k].master_table == item.parent_table_name && this.advancedsub_field[tablename][k].field_sub_type != "merge_fields") {
                        if (typeof tempvalue[this.advancedsub_field[tablename][k].master_field] == 'object') {
                            if (tempvalue[this.advancedsub_field[tablename][k].master_field].value != "") {
                                tempvalue[this.advancedsub_field[tablename][k].master_field].value = JSON.parse(tempvalue[this.advancedsub_field[tablename][k].master_field].value);
                            }
                            this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = (_a = tempvalue[this.advancedsub_field[tablename][k].master_field].value[0]) === null || _a === void 0 ? void 0 : _a.id;
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = tempvalue[this.advancedsub_field[tablename][k].master_field].value;
                        }
                        else {
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name] = [];
                            let tem = { id: value, [this.advancedsub_field[tablename][k].master_field]: tempvalue[this.advancedsub_field[tablename][k].master_field] };
                            this.editsubValues[tablename][i][this.advancedsub_field[tablename][k].name].push(tem);
                        }
                    }
                }
                // for (let k = 0; k < this.mergedsub_field[tablename].length; k++) {
                //   if (this.mergedsub_field[tablename][k].parent_table_name == item.parent_table_name) {
                //     this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name] = []
                //     for (let j = 0; j < this.mergedsub_field[tablename][k].merge_fields.length; j++) {
                //       if (tempvalue.hasOwnProperty(this.mergedsub_field[tablename][k].merge_fields[j].name)) {
                //         if (typeof tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name] == 'object') {
                //           if (tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value != "") {
                //             if (!Array.isArray(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value)) {
                //               tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value = JSON.parse(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value)
                //             }
                //             this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].push(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name].value[0][this.mergedsub_field[tablename][k].merge_fields[j].parent_table_field])
                //           }
                //         } else if (tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name] != '') {
                //           this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].push(tempvalue[this.mergedsub_field[tablename][k].merge_fields[j].name])
                //         }
                //       }
                //     }
                //     this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name] = this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name].toString();
                //     this.subValues[tablename][i][this.advancedsub_field[tablename][k].name] = this.editsubValues[tablename][i][this.mergedsub_field[tablename][k].name]
                //   }
                // }
            }
        });
    }
    subValueChanges(tablename, name, value, i) {
        this.subValues[tablename][i][name] = value;
    }
    SubcheckListValueChanges(name, value, table, i) {
        this.subValues[table][i][name].push(value);
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
    getDropdownValues(item, value) {
        var _a;
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
    }
    getUserValues(item, value) {
        var _a;
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
            }
        });
    }
    // checkValueChanges(name, value) {
    //   this.checkList[name].push(value)
    //   let temp = [];
    //   for (let i = 0; i < this.checkList[name].length; i++) {
    //     temp.push(this.checkList[name][i].id)
    //   }
    //   this.values[name] = temp.toString();
    //   this.valuesTemp[name] = temp.toString();
    //   this.relativeFunction();
    // }
    checkListValueChanges(name, value, item) {
        if (!!this.checkList[name]) {
            const index = this.checkList[name].findIndex((a) => { return a === value; });
            if (index === -1) {
                this.checkList[name].push(value.id);
                this.valuesTemp[name].push(value.id);
                this.checkListName[name].push(value);
            }
            else {
                this.CommonService.showSnackbar('Value Already Choosen', ['warning-growl']);
            }
        }
        else {
            this.checkList[name] = [];
            this.valuesTemp[name] = [];
            this.checkList[name].push(value.id);
            this.valuesTemp[name].push(value.id);
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
        console.log("fffff", this.checkList, name);
    }
    removeCheckList(name, i) {
        this.checkListName[name].splice(i, 1);
        this.checkList[name].splice(i, 1);
        this.valuesTemp[name].splice(i, 1);
        console.log("fffffsss", this.checkList, name);
    }
    //Passwrod Encryption-After update user password
    updatePasswordUser() {
        let body = {
            "id": this.values["id"],
            "password": this.values["password"]
        };
        this.CommonService.updateUserPassword(body).subscribe((response) => {
            if (response.statusCode == 200) {
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
        });
    }
    updateValues(item) {
        // if (item == 'send') {
        //   this.values["isf_status"] = "ISF SENT BUT PENDING CONFIRMATION";
        //   let d = new Date(),
        //     month = '' + (d.getMonth() + 1),
        //     day = '' + d.getDate(),
        //     year = d.getFullYear();
        //   if (month.length < 2)
        //     month = '0' + month;
        //   if (day.length < 2)
        //     day = '0' + day;
        //   this.values["isf_sent_on"] = [year, month, day].join('-');
        // }
        this.createIsTrue = 1;
        this.mandatoryIsTrue = this.mandatoryField.length;
        for (let i = 0; i < this.mandatoryField.length; i++) {
            if (this.editValues.hasOwnProperty(this.mandatoryField[i])) {
                if (this.editValues[this.mandatoryField[i]] != "") {
                    this.mandatoryIsTrue--;
                }
            }
        }
        let chec = Object.keys(this.checkList);
        console.log("sss", chec);
        for (let i = 0; i < chec.length; i++) {
            this.checkList[chec[i]] = this.checkList[chec[i]].filter(e => e !== '');
            if (chec[i] !== "created_by" && chec[i] !== "last_modified_by") {
                this.values[chec[i]] = this.checkList[chec[i]].toString();
            }
        }
        let d = new Date(), dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.values["last_modified_on"] = dformat;
        this.values["last_modified_by"] = this.userData.id;
        if (this.mandatoryIsTrue == 0) {
            this.CommonService.putColumns(this.values, this.routeInfo.tablename).subscribe((response) => {
                if (response.statusCode == 200) {
                    setTimeout(() => {
                        if (this.routeInfo.tablename == 'user') {
                            if (this.values.hasOwnProperty("password")) {
                                this.updatePasswordUser();
                            }
                        }
                        if (this.fileChange == 1) {
                            this.createFile();
                        }
                        if (item == 'send') {
                            this.sendIsfMail();
                        }
                        this.redirectDashBoard();
                        this.CommonService.showSnackbar('Successfully Item Updated', ['green-growl']);
                    }, 10);
                }
                else {
                    this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
                }
            }, (error) => {
                this.CommonService.showSnackbarUnhide('Something Went Wrong, Please Try After SomeTime', ['red-growl']);
            });
        }
    }
    updateSubValues() {
        let temp = Object.keys(this.subValues);
        for (let i = 0; i < temp.length; i++) {
            let chec = Object.keys(this.checkListSub[temp[i]]);
            for (let j = 0; j < this.subValues[temp[i]].length; j++) {
                // this.subValues[temp[i]]["last_modified_by"]=this.userData.id;
                // this.subValues[temp[i]]["last_modified_by"]
                for (let k = 0; k < this.advancedsub_field[temp[i]].length; k++) {
                    if (Array.isArray(this.subValues[temp[i]][j][this.advancedsub_field[temp[i]][k].name])) {
                        this.subValues[temp[i]][j][this.advancedsub_field[temp[i]][k].name] = this.subValues[temp[i]][j][this.advancedsub_field[temp[i]][k].name][0].id;
                    }
                }
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
            }
            this.CommonService.putSubValues(this.subValues[temp[i]], temp[i]).subscribe((response) => {
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
    formatDate(name, date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let formatdate = [year, month, day].join('-');
        this.valueChanges(name, formatdate);
        this.dateFocus = "";
    }
    formatDateTime(name, date) {
        let d = new Date(date), dformat = [d.getFullYear(), d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.valueChanges(name, dformat);
        this.dateFocus = "";
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
    radioValueChange(name, value) {
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
            for (let n = 0; n < this.tempresponse[d_adv[l]].advanced_option.depended_field.data.length; n++) {
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
    createFile() {
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
                this.CommonService.createFile(temp).subscribe((response) => {
                });
            }
        }
    }
    SendMail() {
        this.CommonService.sendMail("1").subscribe((response) => {
            if (response.statusCode == 200) {
                this.CommonService.showSnackbar('mail sent successfully', ['green-growl']);
            }
            else {
                this.CommonService.showSnackbarUnhide('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
        });
    }
    deleteFile(value, i) {
        this.fileChange = 1;
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
            this.valuesTemp[value] = "";
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
    closeDialog() {
        this.dialogRef.close();
    }
    getWidth(grid, row) {
        if (row.length == 4) {
            return `calc( ${grid}% - 30px)`;
        }
        else {
            return `calc( ${grid}% - 50px)`;
        }
    }
    redirectDashBoard() {
        this.route.navigate(['/dashboard/view', this.routeInfo.tablename], { queryParams: { id: this.routeInfo.id, tablename: this.routeInfo.tablename } });
    }
    validateEmail(value) {
        this.emailValidate = this.CommonService.validateEmail(value);
    }
    preview(temp) {
        this.cssPreview = 'file-marg';
        this.CommonService.previewForm(this.editValues.id).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.previewStr = '';
                this.previewStr = response.info;
                this.openPreview(temp);
            }
        });
    }
    openPreview(temp) {
        const dialogRef = this.dialog.open(temp, {
            width: '900px',
            height: '100vh'
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    downloadPreview() {
        this.CommonService.downLoadForm(this.editValues.id).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                if (response === null || response === void 0 ? void 0 : response.info)
                    this.downloadFile(response.info);
            }
        });
    }
    downloadFile(base64String) {
        const linkSource = `data:application/pdf;base64,${base64String}`;
        const downloadLink = document.createElement('a');
        const fileName = `ISF` + '_' + (new Date().getTime().toString()) + '.pdf';
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
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
    sendDoc() {
        if (this.toList.length) {
            let payload = {
                "to": this.toList,
                "cc": this.ccList.length ? this.ccList : [],
                "replyTo": [
                    this.userData.email
                ],
                "subject": this.mailSubject,
                "message": this.mailBody
            };
            if (this.mailFile && this.mailFile.length) {
                payload["attachments"] = this.mailFile;
            }
            this.CommonService.mailFileSend(payload).subscribe((response) => {
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    this.mailFile, this.ccList, this.toList = [];
                    this.mailSubject = '';
                    this.mailBody = '';
                    this.mailForm = false;
                    this.CommonService.showSnackbar('Successfully Mail Sended', ['green-growl']);
                }
                else {
                    this.mailFile, this.ccList, this.toList = [];
                    this.mailSubject = '';
                    this.mailBody = '';
                    this.mailForm = false;
                    this.CommonService.showSnackbar('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
                }
            }, (error) => {
                this.CommonService.showSnackbar('Something Went wrong, Try After Some Time', ['red-growl']);
            });
        }
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        let isValid = false;
        if ((value || '').trim()) {
            isValid = this.CommonService.validateEmail(value.trim());
            if (isValid)
                this.toList.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(mail) {
        const index = this.toList.indexOf(mail);
        if (index >= 0) {
            this.toList.splice(index, 1);
        }
    }
    addCC(event) {
        const input = event.input;
        const value = event.value;
        let isValid = false;
        if ((value || '').trim()) {
            isValid = this.CommonService.validateEmail(value.trim());
            if (isValid)
                this.ccList.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    removeCC(mail) {
        const index = this.ccList.indexOf(mail);
        if (index >= 0) {
            this.ccList.splice(index, 1);
        }
    }
    // Surya Static mail send
    sendIsfMail() {
        var _a, _b;
        // this.updateValues('save');
        // this.updateSubValues();
        // [
        //   "surya@airliftusa.com",
        //   "cvignesh@airliftusa.com",
        //   "aajith@airliftusa.com",
        //   "poornima@airliftusa.com",
        //   "ryan@airliftusa.com"
        // ]
        const payload = {
            "to": this.sendMailList,
            "cc": ((_a = this.sendCCMailList) === null || _a === void 0 ? void 0 : _a.length) ? this.sendCCMailList : [],
            "bcc": [],
            "replyTo": [
                this.userData.email, "isf@airliftusa.com"
            ],
            "id": (_b = this.editValues) === null || _b === void 0 ? void 0 : _b.id
        };
        this.CommonService.isfMail(payload).subscribe((response) => {
            if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                this.values["isf_status"] = "ISF SENT BUT PENDING CONFIRMATION";
                let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                this.values["isf_sent_on"] = [year, month, day].join('-');
                this.updateValues('save');
                this.CommonService.showSnackbar('Successfully Mail Sended', ['green-growl']);
                // this.updateValues('save');
                this.closeIsfMail();
            }
            else {
                this.CommonService.showSnackbarUnhide('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
                this.closeIsfMail();
            }
        }, (error) => {
            this.CommonService.showSnackbarUnhide('Failure,  Mail Not Sent, please Try Again', ['red-growl']);
        });
    }
    removesendmail(i) {
        this.sendMailList.splice(i, 1);
    }
    addsendccmail(event) {
        const input = event.input;
        const value = event.value;
        let isValid = false;
        if ((value || '').trim()) {
            isValid = this.CommonService.validateEmail(value.trim());
            if (isValid)
                this.sendCCMailList.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    getIsfMail(template) {
        var _a, _b;
        if (((_b = (_a = this.editValues) === null || _a === void 0 ? void 0 : _a.consignee_name) === null || _b === void 0 ? void 0 : _b.value.length) !== 0) {
            this.CommonService.getIsfMail(this.editValues.consignee_name.value[0].id).subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                if ((response === null || response === void 0 ? void 0 : response.statusCode) === 200) {
                    if (response.info.broker.length) {
                        response.info.broker[0].email_id = response.info.broker[0].email_id.split(";");
                        if (((_b = (_a = this.editValues) === null || _a === void 0 ? void 0 : _a.isf_send_only_to.value[0]) === null || _b === void 0 ? void 0 : _b.isf_send_only_to) === "Broker") {
                            this.sendMailList = response.info.broker[0].email_id;
                        }
                    }
                    if (response.info.consignee.length) {
                        response.info.consignee.email = response.info.consignee[0].email.split(";");
                        if (((_d = (_c = this.editValues) === null || _c === void 0 ? void 0 : _c.isf_send_only_to.value[0]) === null || _d === void 0 ? void 0 : _d.isf_send_only_to) === "Consignee") {
                            this.sendMailList = response.info.consignee.email;
                        }
                    }
                    if (response.info.consignee.length || response.info.broker.length) {
                        if (((_f = (_e = this.editValues) === null || _e === void 0 ? void 0 : _e.isf_send_only_to.value[0]) === null || _f === void 0 ? void 0 : _f.isf_send_only_to) === "Both Consignee and Broker") {
                            this.sendMailList = (((_g = response.info.broker[0]) === null || _g === void 0 ? void 0 : _g.email_id) && ((_j = (_h = response.info.broker[0]) === null || _h === void 0 ? void 0 : _h.email_id) === null || _j === void 0 ? void 0 : _j.length)) ? (_k = response.info.broker[0]) === null || _k === void 0 ? void 0 : _k.email_id : [];
                            this.sendMailList = this.sendMailList.concat((_l = response.info.consignee) === null || _l === void 0 ? void 0 : _l.email);
                        }
                    }
                    if (((_o = (_m = this.editValues) === null || _m === void 0 ? void 0 : _m.isf_send_only_to.value[0]) === null || _o === void 0 ? void 0 : _o.isf_send_only_to) === "Case To Case") {
                        this.sendMailList = [];
                        if (response.info.caseTocase[0].case_to_case_isf_email != "") {
                            response.info.caseTocase[0].case_to_case_isf_email = response.info.caseTocase[0].case_to_case_isf_email.split(";");
                            this.sendMailList = response.info.caseTocase[0].case_to_case_isf_email;
                        }
                        else {
                            this.CommonService.showSnackbarUnhide('Case To Case Mail Id Not Avilable,Please Update Case To Case Mail Id In Consignee Master', ['red-growl']);
                        }
                    }
                    // if (this.editValues.isf_send_only_to.value[0].isf_send_only_to === "BOTH CONSIGNEE AND BROKER") {
                    //   this.sendMailList = response.info.broker[0].email_id;
                    //   this.sendMailList += response.info.consignee.email;
                    //   // for (let i = 0; i < response.info.consignee.email.length; i++) {
                    //   //   this.sendMailList.push()
                    //   // }
                    // } else if (this.editValues.isf_send_only_to.value[0].isf_send_only_to === "CONSIGNEE") {
                    //   this.sendMailList = response.info.consignee.email;
                    // } else if (this.editValues.isf_send_only_to.value[0].isf_send_only_to === "BROKER") {
                    //   this.sendMailList = response.info.broker[0].email_id;
                    // }
                    // this.createsendmail(template)
                    this.sendMailAtom = true;
                }
            });
        }
    }
    createsendmail(templateName) {
        this.dialogRef = this.dialog.open(templateName, {
            width: '600px',
        });
    }
    closeIsfMail() {
        this.dialogRef.close();
        this.sendMailList = [];
    }
    removeSendCC(mail) {
        const index = this.sendCCMailList.indexOf(mail);
        if (index >= 0) {
            this.sendCCMailList.splice(index, 1);
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
            this.subdro = [];
            this.dropdownSearch = [];
            this.getDropdownSubValues(item, response.info[0].id);
        });
    }
    getDropdownSubValues(item, id) {
        var _a, _b;
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
        if ((_a = this.editValues[item.is_sub_table.field]) === null || _a === void 0 ? void 0 : _a.value) {
            temp2[1] = (_b = this.editValues[item.is_sub_table.field]) === null || _b === void 0 ? void 0 : _b.value[0].id;
        }
        else {
            temp2[1] = this.editValues[item.is_sub_table.field];
        }
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
    closeMail(value) {
        console.log(value, 'value');
        if (value === 'send_isf') {
            this.values["isf_status"] = "ISF SENT BUT PENDING CONFIRMATION";
            let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            this.values["isf_sent_on"] = [year, month, day].join('-');
            this.updateValues('save');
            this.CommonService.showSnackbar('Successfully Mail Sended', ['green-growl']);
            this.sendMailAtom = false;
        }
        else {
            this.sendMailAtom = false;
        }
    }
    previewArrival(temp) {
        var _a;
        this.cssPreview = 'arv-width';
        this.CommonService.previewArrivalForm((_a = this.editValues) === null || _a === void 0 ? void 0 : _a.id).subscribe((response) => {
            var _a;
            if ((_a = response === null || response === void 0 ? void 0 : response.info) === null || _a === void 0 ? void 0 : _a.length) {
                this.previewStr = '';
                this.previewStr = response.info;
                this.openPreview(temp);
            }
        });
    }
    downloadPreviewArrival() {
        var _a;
        this.CommonService.downloadArrivalForm((_a = this.editValues) === null || _a === void 0 ? void 0 : _a.id).subscribe((response) => {
            var _a;
            if ((_a = response === null || response === void 0 ? void 0 : response.info) === null || _a === void 0 ? void 0 : _a.length) {
                this.downloadFile(response.info);
            }
        });
    }
}
EditViewComponent.ɵfac = function EditViewComponent_Factory(t) { return new (t || EditViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
EditViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditViewComponent, selectors: [["app-edit-view"]], viewQuery: function EditViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideedit = _t);
    } }, decls: 18, vars: 4, consts: [["class", "container-b", 4, "ngIf"], ["class", "full-height", "style", "display: flex;align-items: center;justify-content: center;", 4, "ngIf"], ["mailIsf", ""], ["subTableView", ""], ["previewForm", ""], [4, "ngIf"], ["AddPickup", ""], ["AddPickupTwo", ""], ["AddVessel", ""], ["EditVessel", ""], ["class", "mail-atom bot-50", 4, "ngIf"], [1, "container-b"], [1, "container-edit"], [1, "header-r"], [1, "arrow-div", 3, "click"], [1, "arrow-icon"], [1, "header-text", "animate__animated", "animate__bounce"], [1, "body-c"], ["id", "sideedit", 1, "group-c"], ["sideedit", ""], ["matRipple", "", "matRippleColor", "'#ffffff'", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "content-c"], ["class", "content-group", 4, "ngFor", "ngForOf"], [1, "position-r"], [1, "side-bg", "full-height"], ["matTooltip", "Task", 1, "mat-tooltip-trigger", "material-icons", "side-icon", 3, "click"], ["matTooltip", "Notes", 1, "mat-tooltip-trigger", "material-icons", "side-icon", 3, "click"], ["matTooltip", "Document", 1, "mat-tooltip-trigger", "material-icons", "side-icon", 3, "click"], ["class", "side-bg full-height side-bar", 3, "mouseleave", 4, "ngIf"], [1, "footer-c"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "can-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", "green-btn", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", "class", "cre-btn cursor", 3, "matTooltip", "disabled", "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "class", "cre-btn cursor", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "class", "cre-btn cursor", 3, "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "class", "cre-btn cursor", 3, "matTooltip", "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 3, "click"], [1, "group-text", "animate__animated", "animate__bounce"], [1, "content-group"], [1, "header-g", "position-r", 3, "id"], ["class", "section-card", 4, "ngIf"], [1, "section-card"], ["class", "v-type", 4, "ngIf"], ["class", "v-pick", 4, "ngIf"], ["class", "v-origin-p", 4, "ngIf"], [1, "v-type"], [1, "v-type-i"], [1, "v-type-c", 3, "matMenuTriggerFor"], [1, "v-type-icon"], ["menuPickup", "matMenu"], ["class", "v-type-m", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "v-type-m", 3, "click"], [1, "v-pick"], [1, "v-origin-p"], ["class", "v-pos-r", 4, "ngIf"], [1, "v-pos-r"], [1, "v-s-h"], [1, "v-ontime"], [1, "v-pos-a", "p-main"], [3, "mode", "value", "bufferValue"], [1, "v-origin-f"], ["class", "v-o-g", 4, "ngFor", "ngForOf"], [1, "v-add-d"], [1, "v-add-s", 3, "click"], [1, "v-o-g"], [1, "v-done"], ["class", "v-done-icon", 4, "ngIf"], ["class", "v-boat", 4, "ngIf"], [1, "v-orgin-s-a"], [1, "v-s-c-t"], [1, "v-image", 3, "src"], [1, "v-edit-icon", 3, "click"], [1, "v-s-c"], [1, "v-s-c-l"], [1, "v-pol"], ["class", "v-s-c-a", 4, "ngIf"], [1, "v-total"], [1, "v-to-b"], ["class", "v-not", 4, "ngIf"], ["class", "v-con-c", 4, "ngIf"], [1, "v-to"], [1, "v-delay"], [1, "v-done-icon"], [1, "v-s-c-a"], [1, "v-con-c"], ["class", "v-add-d", 4, "ngIf"], ["class", "v-o-g", 4, "ngIf"], [1, "v-boat"], ["class", "v-orgin-s-a", 4, "ngIf"], [1, "v-not"], ["class", "row-f", 4, "ngFor", "ngForOf"], [1, "row-f"], [3, "width", "class", 4, "ngFor", "ngForOf"], [1, "field-h", 3, "ngClass", "matTooltip"], ["style", "color: red;", 4, "ngIf"], ["class", "position-r", 4, "ngIf"], ["class", "created-bye", 4, "ngIf"], ["class", "mat-multi-select-chip", 4, "ngIf"], ["style", "display: grid;", 4, "ngIf"], [2, "color", "red"], [3, "class", 4, "ngIf"], ["type", "text", 3, "class", "value", "placeholder", "disabled", "change", 4, "ngIf"], ["class", "man-f-c", 4, "ngIf"], [2, "width", "92%"], [1, "date-icon"], ["type", "text", 3, "value", "placeholder", "disabled", "change"], [1, "man-f-c"], ["class", "date-icon", 4, "ngIf"], ["style", "width: 92%;", 4, "ngIf"], ["class", "radio-input", 4, "ngFor", "ngForOf"], [1, "radio-input"], [3, "checked", "click"], ["type", "text", 3, "placeholder", "class", "value", "disabled", "change", 4, "ngIf"], ["style", "color: red;font-size: 12px;", 4, "ngIf"], ["type", "text", 3, "placeholder", "value", "disabled", "change"], [2, "color", "red", "font-size", "12px"], ["type", "text", 3, "placeholder", "class", "value", "disabled", "change", "input", 4, "ngIf"], ["type", "text", 3, "placeholder", "value", "disabled", "change", "input"], [3, "type", "placeholder", "class", "value", "disabled", "change", "valueChange", 4, "ngIf"], [1, "material-icons", "view-pass", "cursor", 3, "click"], [3, "type", "placeholder", "value", "disabled", "change", "valueChange"], ["matInput", "", 2, "width", "0px", 3, "matDatepicker", "placeholder", "disabled", "click", "dateChange"], [1, "date-icon-d", 3, "click"], ["picker", ""], [1, "created-bye"], ["class", "date-span", 3, "click", 4, "ngIf"], ["type", "datetime-local", 3, "placeholder", "disabled", "change", 4, "ngIf"], [1, "date-span", 3, "click"], [1, "date-s-i"], ["type", "datetime-local", 3, "placeholder", "disabled", "change"], ["type", "time", 3, "placeholder", "value", "disabled", "change"], ["rows", "3", 3, "placeholder", "value", "disabled", "change"], [1, "attachment", "position-r"], ["class", "file-link-f", 4, "ngFor", "ngForOf"], ["for", "tableViewFileLabel", 1, "att-btn", 3, "click"], ["type", "file", "id", "tableViewFileLabel", 1, "input-f", 3, "value", "disabled", "change"], ["file", ""], [1, "file-link-f"], ["target", "_blank", 3, "href"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "close-icon", 3, "click"], ["style", "display: flex;", 4, "ngFor", "ngForOf"], ["type", "file", "id", "tableViewFileLabel", "accept", "image/*", 3, "disabled", "change"], ["image", ""], [2, "display", "flex"], ["target", "_blank", 1, "image-b", 3, "href"], ["alt", "Image", 1, "image-h", 3, "src"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "disabled", "change"], ["color", "primary", 3, "checked", "disabled", "change"], ["type", "number", 3, "placeholder", "class", "value", "disabled", "change", 4, "ngIf"], ["type", "number", 3, "placeholder", "value", "disabled", "change"], [3, "class", "placeholder", "disabled", "selectionChange", 4, "ngIf"], [3, "placeholder", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", 3, "placeholder", "class", "matAutocomplete", "value", "disabled", "focus", "input", "click", 4, "ngIf"], ["autosetect", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["type", "text", 3, "placeholder", "matAutocomplete", "value", "disabled", "focus", "input", "click"], [3, "value", "click"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"], [1, "mat-multi-select-chip"], [1, "mat-chip-flex"], ["class", "mat-chip-div", 3, "click", 4, "ngFor", "ngForOf"], ["type", "text", 1, "enter-key-chip", 3, "placeholder", "keyup.enter"], [1, "mat-chip-div", 3, "click"], [1, "matchip-close"], [3, "placeholder"], ["type", "text", 1, "enter-key-chip", 3, "matAutocomplete", "placeholder", "disabled", "focus", "input"], ["class", "mat-chip-flex", 4, "ngIf"], [1, "mat-chip-div", 2, "margin", "0px"], [1, "user-opt"], ["class", "user-pro", "src", "https://storage.googleapis.com/airlift-images/default_photoMon May 24 2021 14:56:12 GMT+0530 (India Standard Time).jpg", 4, "ngIf"], ["class", "user-pro", 3, "src", 4, "ngIf"], ["src", "https://storage.googleapis.com/airlift-images/default_photoMon May 24 2021 14:56:12 GMT+0530 (India Standard Time).jpg", 1, "user-pro"], [1, "user-pro", 3, "src"], ["type", "text", "class", "enter-key-chip", 3, "placeholder", "matAutocomplete", "disabled", "input", 4, "ngIf"], ["type", "text", 1, "enter-key-chip", 3, "placeholder", "matAutocomplete", "disabled", "input"], ["rows", "3", 3, "value", "placeholder", "disabled", "change"], [2, "display", "grid"], ["class", "sub-table", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "add-btn", 3, "click"], [1, "sub-table"], [1, "sub-t-h"], [1, "sub-t-h-n"], ["class", "sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "sub-e-r", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "sub-t-h-t"], [1, "sub-e-r"], [1, "sub-t-r"], [1, "sub-t-r-n"], ["class", "sub-t-r-f", 4, "ngFor", "ngForOf"], [1, "sub-t-r-f"], ["class", "sub-v-a", 4, "ngIf"], ["class", "sub-v-a position-r", 4, "ngIf"], ["class", "mat-multi-select-chip-sub", 4, "ngIf"], [1, "sub-v-a"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "change"], [1, "sub-v-a", "position-r"], [1, "sub-input", "sub-input-off", 3, "type", "value", "placeholder", "change"], [1, "material-icons", "view-pass", "view-pass-sub", "cursor", 3, "click"], ["matInput", "", 1, "sub-input", "sub-input-off-d", 2, "width", "0px", 3, "matDatepicker", "placeholder", "value", "click", "dateChange"], [1, "date-icon", 3, "click"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "value", "change"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "placeholder", "value", "change"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "placeholder"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "change"], ["color", "primary", 3, "checked", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "placeholder", "value", "change"], [1, "sub-input", "sub-input-off", 3, "value", "placeholder", "valueChange", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "value", "input"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "placeholder", "value", "disabled", "input"], [1, "mat-multi-select-chip-sub"], ["type", "text", 1, "enter-key-chip", 3, "matAutocomplete", "placeholder", "focus", "input"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "sub-create-btn", 3, "click"], [1, "side-bg", "full-height", "side-bar", 3, "mouseleave"], [1, "fw-500", "text-center", "header"], [1, "file-bg"], [1, "fw-500"], [1, "d-flex", "file-option"], [1, "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", 3, "matTooltip", "disabled", "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", 3, "disabled", "matTooltip", "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cre-btn", "cursor", 3, "matTooltip", "click"], [1, "full-height", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "../../../assets/img/Loading_gif.gif", 2, "height", "85px", "width", "85px"], [1, "mail-header", "d-flex", "justify-space-btw"], [1, "material-icons", "cursor", 3, "click"], [1, "to-area"], [1, "mail-label"], ["aria-label", "Mail selection", 1, "chip-area"], ["sendchipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add Mail...", "type", "email", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["sendccchipList", ""], ["placeholder", "Add Mail...", "type", "email", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [1, "d-flex", "send-mail-foot"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cancel-btn", 3, "click"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "send-btn", 3, "click"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "inside-sub-h"], [1, "inside-sub-t"], [1, "inside-sub-t-h"], [1, "inside-sub-t-h-n"], ["class", "inside-sub-t-h-t", 4, "ngFor", "ngForOf"], ["class", "inside-sub-e-r", 4, "ngIf"], ["matRipple", "", "matRippleColor", "'#ffffff'", "on", "", 1, "add-btn", 3, "click"], [1, "inside-sub-t-h-t"], [1, "inside-sub-e-r"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], [1, "sub-input", "sub-input-off", 3, "type", "value", "valueChange", "focusout"], ["matInput", "", "placeholder", "Choose a date", 1, "sub-input", "sub-input-off-d", 3, "matDatepicker", "value", "click", "valueChange"], ["type", "time", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "datetime-local", 1, "sub-input", "sub-input-off-d", 3, "value", "valueChange"], ["type", "text", 1, "sub-input", "sub-input-off"], ["color", "primary", "thumbLabel", "", 2, "width", "100%", 3, "value", "valueChange", "change"], ["type", "number", 1, "sub-input", "sub-input-off", 3, "value", "valueChange", "focusout"], [1, "sub-input", "sub-input-off", 3, "placeholder", "selectionChange"], ["type", "text", 1, "sub-input", "sub-input-off", 3, "matAutocomplete", "value", "valueChange", "input"], [1, "outer-data"], [3, "innerHTML"], [1, "mail-drag-boundary"], ["cdkDragBoundary", ".mail-drag-boundary", "cdkDrag", "", 1, "mail-outer"], ["chipList", ""], [2, "color", "#afb6be"], [1, "input-area"], ["type", "text", 1, "mail-input", 3, "ngModel", "ngModelChange"], ["ccchipList", ""], [2, "margin-top", "5px"], [1, "mail-input", "width-100", 2, "color", "var(--warm-grey)", 3, "ngModel", "ngModelChange"], [1, "to-area", "d-flex"], ["for", "mailfile", 1, "material-icons", "cursor"], ["id", "mailfile", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], [1, "to-area", "che"], ["class", "file-chip", 4, "ngFor", "ngForOf"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "to-area", "send-doc", "d-flex", "justify-space-btw", 3, "click"], [1, "material-icons"], [1, "file-chip"], [2, "color", "#394761"], [1, "file-close", "cursor"], [1, "v-dia-g"], [1, "v-dia-h"], [3, "click"], [1, "v-dia-body"], [1, "v-i-s-g"], [1, "v-i-g"], [1, "v-i-d"], ["matInput", "", 1, "vi-d-h", 2, "width", "0px", 3, "max", "matDatepicker", "click", "dateChange"], [1, "vi-d-h"], ["pickup_container_delivered", ""], ["matInput", "", 1, "vi-d-h", 2, "width", "0px", 3, "matDatepicker", "click", "dateChange"], ["pickup_estimated_departure", ""], ["pickup_actual_departure", ""], [1, "input-select", 3, "placeholder"], [1, "v-dia-foo"], [1, "v-dia-back-b", 3, "click"], [1, "v-dia-add-b", 3, "click"], [1, "v-dia-h", "animate__animated", "animate__bounce"], ["type", "text", 1, "v-i", 3, "matAutocomplete", "focus", "input"], ["autoport", "matAutocomplete"], ["pickup_two_estimated_arrival", ""], ["pickup_two_actual_arrival", ""], ["pickup_two_estimated_departure", ""], ["pickup_two_actual_departure", ""], ["matInput", "", 1, "vi-d-h", 3, "matDatepicker", "click", "dateChange"], ["eta", ""], ["etd", ""], ["matInput", "", 1, "vi-d-h", 3, "max", "matDatepicker", "click", "dateChange"], ["ata", ""], ["atd", ""], ["autoload", "matAutocomplete"], ["type", "text", 1, "v-i", 3, "change"], ["type", "text", 1, "v-i"], ["rows", "3", 1, "v-i-t", 3, "change"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["type", "text", "disabled", "true", 1, "v-i", 2, "background-color", "#cccccc", 3, "matAutocomplete", "value", "focus", "input"], ["class", "v-i-s-g", 4, "ngIf"], ["class", "v-i-g", 4, "ngIf"], ["type", "text", "disabled", "true", 1, "v-i", 2, "background-color", "#cccccc", 3, "value"], [1, "v-i-d", 2, "background-color", "#cccccc"], [1, "date-icon-d"], ["type", "text", "disabled", "true", 1, "v-i", 2, "background-color", "#cccccc"], ["rows", "3", "disabled", "true", 1, "v-i-t", 2, "background-color", "#cccccc", 3, "value"], ["type", "text", 1, "v-i", 3, "matAutocomplete", "value", "disabled", "focus", "input"], ["type", "text", 1, "v-i", 3, "value", "disabled", "change"], ["type", "text", 1, "v-i", 3, "disabled"], ["rows", "3", 1, "v-i-t", 3, "value", "disabled", "change"], [1, "mail-atom", "bot-50"], [3, "dataTableInfo", "isFrom", "toList", "ccList", "bccList", "airliftDomains", "fieldValues", "closeMail"]], template: function EditViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditViewComponent_div_0_Template, 34, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditViewComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditViewComponent_ng_template_2_Template, 24, 8, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditViewComponent_ng_template_4_Template, 17, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditViewComponent_ng_template_6_Template, 3, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditViewComponent_div_8_Template, 47, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditViewComponent_ng_template_9_Template, 56, 19, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditViewComponent_ng_template_11_Template, 76, 26, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditViewComponent_ng_template_13_Template, 82, 10, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditViewComponent_ng_template_15_Template, 30, 12, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditViewComponent_div_17_Template, 2, 7, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.routeInfo && !!ctx.metaDataTemp && !!ctx.editValues && !!ctx.subTableInfo && !!ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.routeInfo && ctx.metaDataTemp && ctx.editValues));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendMailAtom);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipRemove"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _atoms_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_21__["SendMailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__["SafeHtmlPipe"]], styles: [".container-b {\n  height: 100vh;\n}\n\n.container-edit {\n  background: rgba(70, 80, 90, .1);\n  display: grid;\n  grid-template-rows: 44.5px calc( 100vh - 89px) 44.5px;\n}\n\n.header-r {\n  z-index: 999;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 50px calc( 100% - 50px);\n  align-items: center;\n  height: 44.5px;\n  margin: 0 0 0.5px;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);\n  background-color: #2f3a46;\n  opacity: 0.92;\n}\n\n.header-text {\n  padding: 7px 5px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n\n.arrow-div {\n  width: 51.5px;\n  height: 44.5px;\n  margin: 0 14.3px 0 0;\n  padding: 0px 6px;\n  background-color: var(--dark-two);\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.arrow-icon {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  color: var(--white);\n}\n\n.body-c {\n  height: calc( 100vh - 44.5px);\n  width: 100%;\n  z-index: 999;\n  display: grid;\n  grid-template-columns: 200px auto 40px;\n  background-color: #eceeef8c;\n}\n\n.section-card {\n  background-color: #ffffff;\n  padding: 24px 22px 24px 10px;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgb(224 227 231 / 70%);\n}\n\n.group-c {\n  box-sizing: border-box;\n  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.2);\n  /* background-image: linear-gradient(149deg, #3365c8 38%, #8a6ff4 111%, #a071ff 130%); */\n  padding: 12px 12px;\n  background: #fff;\n}\n\n.group-text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.group-btn {\n  border: none;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--white);\n  font-size: 14px;\n  height: 34px;\n  text-transform: capitalize;\n  border-radius: 5px;\n  background-color: var(--dark);\n  font-weight: 600;\n  padding: 6px;\n}\n\n.group-btn-o {\n  text-transform: capitalize;\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: left;\n  padding: 0px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  height: 34px;\n  text-transform: capitalize;\n  color: rgba(47, 58, 87, .95);\n  padding: 6px;\n  margin: 2px 0;\n}\n\n.btn-b {\n  width: 3px;\n  height: 18px;\n  display: flex;\n  border-radius: 4px;\n  margin-right: 8px;\n  background-color: var(--white);\n}\n\n.btn-b-o {\n  width: 3px;\n  height: 18px;\n  display: flex;\n  border-radius: 4px;\n  margin-right: 8px;\n}\n\n.content-c {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: flex;\n  overflow: auto;\n  height: 87vh;\n  grid-gap: 20px;\n  margin: 10px 0px;\n  flex-direction: column;\n}\n\n.content-group {\n  text-transform: capitalize;\n  display: grid;\n  height: -webkit-max-content;\n  height: max-content;\n  grid-gap: 15px;\n}\n\n.field-g {\n  padding: 0px 25px;\n  display: grid;\n  grid-template-rows: 25px auto;\n  grid-gap: 5px;\n}\n\n.field-h {\n  font-size: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: flex-end;\n  color: rgba(47, 58, 87, .95);\n  font-weight: 500;\n}\n\n.input-f {\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 24px;\n  padding: 2px 8px;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n  border: solid 1px #cacaca94;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.input-date-disabled {\n  width: 100%;\n  display: flex;\n  border-radius: 4px !important;\n  font-size: 13px;\n  background-color: #efefef8a;\n  height: 24px;\n  padding: 2px 8px;\n  border: solid 1px #cacaca94;\n  align-items: center;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.input-textarea {\n  border: solid 1px #cacaca94;\n  border-radius: 4px !important;\n  font-size: 13px;\n  padding: 2px 8px;\n  width: 100%;\n  display: flex;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.input-select {\n  border: solid 1px #cacaca94;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 24px;\n  padding: 2px 8px;\n  display: grid !important;\n  align-items: center;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\n.input-date {\n  width: 100%;\n  display: flex;\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 24px;\n  padding: 2px 8px;\n  border: solid 1px #cacaca94;\n  align-items: center;\n  color: #777777fc;\n  font-family: 'Roboto';\n}\n\ninput:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.date-icon {\n  display: grid !important;\n  font-size: 18px;\n  align-items: center;\n  cursor: pointer;\n  justify-content: right;\n}\n\n.date-icon-d {\n  display: grid !important;\n  font-size: 20px;\n  align-items: center;\n  cursor: pointer;\n  justify-content: right;\n}\n\n.header-g {\n  font-size: 15px;\n  color: rgba(47, 58, 87, .95);\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.5px;\n}\n\n.row-f {\n  display: flex;\n  margin-bottom: 12px;\n}\n\n.footer-c {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 6px 24px;\n  box-shadow: 0 0 0 transparent, 0 -2px 6px rgba(0, 0, 0, .07);\n  z-index: 999;\n  background-color: var(--white);\n}\n\n.cre-btn {\n  background: linear-gradient(to bottom, #2b72fc, #2c97e9);\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  color: var(--white);\n  padding: 10px 20px;\n  margin-left: 10px;\n}\n\n.can-btn {\n  background-color: var(--white);\n  border: 1px solid var(--greyish-two);\n  border-radius: 2px;\n  color: var(--warm-grey);\n  padding: 10px 20px;\n  margin-left: 10px;\n}\n\n::ng-deep .mat-select-placeholder {\n  color: red !important;\n}\n\n#tableViewFileLabel {\n  display: none;\n}\n\n#datetime {\n  display: none;\n}\n\n#times {\n  display: none;\n}\n\n.attachment {\n  display: grid;\n  grid-gap: 5px;\n}\n\n.att-btn {\n  display: flex;\n  border: 1px solid var(--blue);\n  border-radius: 2px;\n  width: 70px;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  cursor: pointer;\n}\n\n.file-link {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: grid;\n  height: 28px;\n  align-items: center;\n}\n\n.file-link-f {\n  color: var(--lightish-blue);\n  background-color: var(--silver);\n  padding: 0px 5px;\n  text-decoration: none;\n  font-size: 12px;\n  border-radius: 2px;\n  width: 100%;\n  display: flex;\n  height: 28px;\n  align-items: center;\n}\n\n.image-b {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-h {\n  width: 35px !important;\n  height: 30px !important;\n}\n\n.close-icon {\n  cursor: pointer;\n  font-size: 18px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  position: unset;\n}\n\n.red-c {\n  color: red !important;\n}\n\n.border-c-r {\n  border-color: red !important;\n}\n\n.man-f-c {\n  color: red !important;\n  font-size: 12px;\n}\n\n.che-close-i {\n  font-size: 16px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  color: var(--warm-grey);\n  cursor: pointer;\n  height: 18px !important;\n  width: 18px !important;\n}\n\n.che-f {\n  background-color: var(--silver);\n  border-radius: 2px;\n  padding: 2px 4px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  color: var(--warm-grey);\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.che {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sub-input:focus {\n  border: 2px solid var(--greyish) !important;\n}\n\n.sub-input-off {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  display: grid;\n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-input-off-d {\n  border: 2px solid var(--white);\n  width: calc(100% - 14px);\n  padding: 2px 5px;\n  border-radius: 2px;\n  color: var(--warm-grey);\n}\n\n.sub-table {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.sub-t-h {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n  background-color: #f5f6fa;\n}\n\n.sub-t-h-t {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-h-n {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.sub-t-r {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n}\n\n.sub-t-r-f {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n}\n\n.sub-t-r-n {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  color: var(--warm-grey);\n  align-items: center;\n  justify-content: center;\n}\n\n.add-btn {\n  border: 0px;\n  color: var(--white);\n  background-color: var(--blue);\n  margin-top: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  cursor: pointer;\n}\n\n.sub-e-r {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.sub-v-a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-bg {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n  text-align: center;\n  z-index: 9;\n}\n\n.side-icon {\n  color: #d1d1d1;\n  font-size: 28px;\n  margin: 15px 0px;\n  cursor: pointer;\n}\n\n.side-bar {\n  position: absolute;\n  top: 0;\n  width: 400px;\n  right: 0;\n}\n\n.sub-create-btn {\n  background-color: var(--blue);\n  border: none;\n  color: var(--white);\n  border-radius: 2px;\n  padding: 3px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.inside-sub-h {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n\n.inside-sub-t {\n  display: grid;\n  border-top: 1px solid var(--greyish);\n  border-right: 1px solid var(--greyish);\n  overflow: auto;\n  width: 100%;\n}\n\n.inside-sub-t-h {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--greyish);\n  background-color: #f5f6fa;\n}\n\n.inside-sub-t-h-n {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  min-width: 35px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-t-h-t {\n  border-left: 1px solid var(--greyish);\n  display: grid;\n  padding: 6px 2px;\n  width: 100%;\n  min-width: 240px;\n  justify-content: center;\n  color: var(--warm-grey);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.inside-sub-e-r {\n  display: grid;\n  width: calc(100% - 1px);\n  height: 35px;\n  border-bottom: 1px solid var(--greyish);\n  border-left: 1px solid var(--greyish);\n}\n\n.radio-input {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.radio-btn {\n  margin-right: 10px;\n}\n\n.file-bg {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n  margin: 10px 5px;\n}\n\n.file-option {\n  justify-content: space-around;\n  color: var(--blue);\n  margin: 5px 0;\n}\n\n.header {\n  font-size: 18px;\n  margin: 15px 5px;\n}\n\n.inner-data {\n  position: relative;\n  zoom: 1.3;\n  transform: scale(1);\n}\n\n.outer-data {\n  display: flex;\n  flex-direction: column;\n}\n\n.mail-outer {\n  width: 600px;\n  height: 700px;\n  border-radius: 5px;\n  box-shadow: 0 15px 17px 0 rgba(70, 142, 229, 0.15);\n  border: solid 1px #a8c4e5;\n  background-color: #ffffff;\n  z-index: 999;\n  cursor: move;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.mail-drag-boundary {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n\n.mail-header {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);\n  padding: 15px;\n  color: var(--warm-grey);\n  font-weight: 600;\n}\n\n.to-area {\n  margin: 15px 20px;\n}\n\n.mail-label {\n  color: #394761;\n}\n\n.mail-input {\n  border-radius: 3px;\n  border: solid 1px #afb6be;\n  cursor: auto;\n}\n\n.send-doc {\n  border-radius: 3px;\n  background-color: #1376ff;\n  cursor: pointer;\n  font-weight: 600;\n  border: none;\n  width: 94%;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  align-items: center;\n  font-size: 15px;\n  height: 40px;\n}\n\n.file-chip {\n  margin: 4px 8px;\n}\n\n.file-close {\n  color: #a8c4e5;\n  margin: 0 5px;\n  font-size: 18px;\n}\n\n.mat-chip-list-wrapper {\n  border-radius: 3px;\n  border: solid 1px #afb6be;\n  cursor: auto;\n  margin: 6px 0 !important;\n}\n\n.mat-chip-list-wrapper .mat-standard-chip {\n  min-height: 25px;\n}\n\n.view-pass {\n  color: var(--warm-grey);\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.view-pass-sub {\n  top: unset;\n}\n\n.send-mail-foot {\n  margin: 0 20px;\n  justify-content: flex-end;\n}\n\n.send-mail-foot .cancel-btn, .send-mail-foot .send-btn {\n  border: none;\n  padding: 5px 15px;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.send-mail-foot .send-btn {\n  background-color: var(--cerulean);\n  color: #fff;\n}\n\n.send-mail-foot .cancel-btn {\n  margin-right: 15px;\n  color: var(--greyish-two);\n}\n\n.date-span {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.date-s-i {\n  display: grid;\n  align-items: center;\n  justify-content: right;\n  cursor: pointer;\n}\n\n.border-dash {\n  background-color: var(--blue);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.border-dash-u {\n  background-color: var(--greyish);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sec-head {\n  margin: 10px 22px;\n}\n\ninput:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-date:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-select:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-textarea:hover {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 7%);\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n}\n\n.input-date:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-select:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.input-textarea:focus {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%) !important;\n  border: solid 1px #1a7bed !important;\n  color: var(--charcoal-grey) !important;\n}\n\n.dark-text-black {\n  color: black;\n}\n\n.green-btn {\n  background: linear-gradient(to bottom, #00a865, #1c9a91);\n}\n\n.mat-snack-bar-container {\n  position: relative !important;\n  top: 23px !important;\n}\n\n.matchip-close {\n  font-size: 14px;\n  display: grid !important;\n  align-items: center;\n  justify-content: center;\n  height: 16px !important;\n  width: 16px !important;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n.mat-chip-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  height: 16px;\n  padding: 4px 4px;\n  background-color: var(--pinkish-grey-two);\n  border-radius: 2px;\n  color: var(--black);\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.mat-chip-flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-multi-select-chip {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 100%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.mat-multi-select-chip-sub {\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 4px 8px;\n  display: grid;\n  width: 92%;\n  height: -webkit-max-content;\n  height: max-content;\n}\n\n.created-bye {\n  border-radius: 4px !important;\n  font-size: 13px;\n  height: 24px;\n  padding: 2px 8px;\n  align-items: center;\n  display: grid;\n  border: solid 1px #cacaca94;\n  color: #777777fc;\n  font-family: 'Roboto';\n  background-color: #f6f6f6;\n}\n\n.enter-key-chip {\n  min-height: 20px !important;\n  border: none !important;\n}\n\n.enter-key-chip:hover {\n  border: none !important;\n}\n\n.enter-key-chip:focus {\n  border: none !important;\n}\n\n.user-opt {\n  display: flex;\n  align-items: center;\n  color: var(--charcoal-grey);\n  font-size: 15px;\n}\n\n.user-pro {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.group-btn-o:hover {\n  background-color: var(--pale-blue);\n  transition: background-color 1s ease, font-weight 1s ease;\n  font-weight: 600;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #157ffb;\n}\n\n.arrow-icon:hover, .group-btn:hover {\n  transform: scale(1.03);\n  transition: all 0.3s ease-in-out 0.1s;\n}\n\n.v-orgin-p {\n  padding: 10px;\n}\n\n.v-origin-f {\n  display: flex;\n  justify-content: space-between;\n}\n\n.v-orgin-s-a {\n  width: 230px;\n  display: grid;\n  grid-gap: 8px;\n  background-color: var(--silver);\n  padding: 10px;\n  grid-template-rows: 22px auto;\n  background-color: #eceeefb8;\n  margin-right: 10px;\n}\n\n.v-orgin-s-a:hover {\n  background-color: var(--pale-blue);\n}\n\n.v-s-c {\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-gap: 2px;\n}\n\n.v-s-c-l {\n  font-size: 12px;\n  color: var(--black);\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.v-image {\n  height: 20px;\n  /* width: 25px; */\n}\n\n.v-s-c-a {\n  font-size: 12px;\n  color: var(--charcoal-grey);\n}\n\n.v-s-c-t {\n  font-size: 14px;\n  color: var(--black);\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n}\n\n.v-o-g {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-rows: 32px auto;\n}\n\n.v-done {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.v-con-c {\n  color: var(--charcoal-grey);\n  font-weight: 500;\n}\n\n.v-edit-icon {\n  display: none !important;\n  border: 1px solid #a2a2a2;\n  border-radius: 50%;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.v-orgin-s-a:hover .v-edit-icon {\n  display: grid !important;\n}\n\n.v-done-icon {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #ffffff;\n  border-radius: 50%;\n  font-size: 20px;\n  height: 30px !important;\n  width: 30px !important;\n  display: grid !important;\n  align-items: center;\n  justify-content: center;\n  z-index: 9;\n  color: var(--black);\n  font-weight: 600;\n}\n\n.v-pos-r {\n  position: relative;\n  display: grid;\n  grid-gap: 13px;\n  min-width: 100%;\n  overflow: auto;\n}\n\n.v-origin-p {\n  display: grid;\n  grid-gap: 20px;\n}\n\n.v-pos-a {\n  width: 100%;\n  display: grid;\n  border-radius: 4px;\n  position: absolute;\n  top: 46px;\n}\n\n.v-dia-g {\n  display: grid;\n  grid-template-rows: 50px auto 50px;\n}\n\n.v-dia-h {\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%);\n  align-items: center;\n}\n\n.v-dia-add-b {\n  border: none;\n  background-color: var(--blue);\n  border-radius: 2px;\n  padding: 6px 16px;\n  margin-right: 20px;\n  color: var(--white);\n  cursor: pointer;\n}\n\n.v-dia-back-b {\n  border: none;\n  background-color: var(--silver);\n  border-radius: 2px;\n  padding: 6px 16px;\n  margin-right: 10px;\n  color: var(--warm-grey);\n  cursor: pointer;\n}\n\n.v-dia-body {\n  padding: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n  display: grid;\n  grid-gap: 20px;\n}\n\n.v-i {\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n  height: 30px;\n  padding: 0px 8px;\n  width: 97%;\n  color: var(--black);\n}\n\n.v-i-t {\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n  padding: 0px 8px;\n  width: 97%;\n  color: var(--black);\n  border-radius: 4px;\n}\n\n.v-add-d {\n  position: relative;\n  width: 1px;\n  background-color: var(--pinkish-grey);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 140px;\n  top: 60px;\n}\n\n.mat-tab-group {\n  margin-bottom: 48px;\n}\n\n.v-pol {\n  background-color: #4b74ff45;\n  font-size: 10px;\n  padding: 3px 6px;\n  border-radius: 9px;\n  color: var(--lightish-blue);\n  margin-left: 6px;\n}\n\n.v-total {\n  border-top: 1px solid var(--greyish);\n  border-bottom: 1px solid var(--greyish);\n  padding: 12px 10px;\n  display: grid;\n  grid-template-columns: -webkit-max-content -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content max-content;\n  grid-gap: 15px;\n  font-size: 12px;\n  color: var(--charcoal-grey);\n}\n\n.v-to-b {\n  padding: 2px 15px 2px 0px;\n  border-right: 1px solid var(--greyish);\n}\n\n.v-to {\n  padding: 2px 15px 2px 0px;\n}\n\n.v-pick {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-auto-flow: column;\n  grid-gap: 10px;\n}\n\n.v-type {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.v-type-i {\n  width: 130px;\n  background-color: var(--pale-blue);\n  color: var(--blue);\n  border-radius: 2px;\n  padding-left: 5px;\n}\n\n.v-type-c {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-weight: 500;\n  font-size: 12px;\n}\n\n.v-type-icon {\n  font-size: 20px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.v-type-m {\n  width: 110px !important;\n  height: 30px !important;\n  display: flex !important;\n  font-size: 12px;\n  align-items: center !important;\n}\n\n.v-not {\n  color: #707070bd;\n}\n\n.v-s-h {\n  font-size: 16px;\n  color: var(--black);\n}\n\n.v-delay {\n  color: #ee1c4d;\n  margin-left: 8px;\n  font-size: 16px;\n}\n\n.v-ontime {\n  color: var(--green-teal);\n  margin-left: 8px;\n  font-size: 16px;\n}\n\n.v-add-s {\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  right: -8px;\n  background-color: var(--white);\n  border: 1px solid var(--warm-grey);\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  color: #253542ad;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.v-i-d {\n  display: flex;\n  border: solid 1px #cccccc;\n  background-color: #ffffff;\n  height: 30px;\n  padding: 0px 8px;\n  width: 97%;\n  color: var(--black);\n  align-items: center;\n  border-radius: 4px;\n}\n\n.v-i-s-g {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  width: 650px;\n}\n\n.vi-d-h {\n  width: 100%;\n}\n\n.v-boat {\n  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);\n  background-color: #ffffff;\n  border-radius: 50%;\n  font-size: 16px;\n  height: 30px !important;\n  width: 30px !important;\n  display: grid !important;\n  align-items: center;\n  justify-content: center;\n  z-index: 9;\n  color: var(--black);\n}\n\n.vi-d-h:hover {\n  box-shadow: none !important;\n  border: none !important;\n  background-color: #ffffff !important;\n}\n\n.v-i-g {\n  display: grid;\n  grid-gap: 5px;\n  color: var(--warm-grey);\n}\n\n.v-dia-foo {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.mat-dialog-container {\n  padding: 0px !important;\n}\n\n.p-main {}\n\n.p-main .mat-progress-bar-fill::after {\n  background-color: #48cc92 !important;\n}\n\n.p-main .mat-progress-bar {\n  height: 6px !important;\n}\n\n::ng-deep .mat-select-placeholder {\n  color: #000 !important;\n}\n\n.bot-50 {\n  bottom: 50px;\n}\n\n.arv-width {\n  width: 595px;\n  margin: 10px auto;\n}\n\n.file-marg {\n  margin: 10px -42px;\n}\n\n.mat-tab-label {\n  height: 42px !important;\n  padding: 0 7px !important;\n  min-width: 90px !important;\n}\n\n.mat-tab-group {\n  width: 700px !important;\n  margin: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1Qyx3RkFBd0Y7RUFDeEYsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELG9DQUFvQztFQUNwQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiw0REFBNEQ7RUFDNUQsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1Q0FBdUM7RUFDdkMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBRVQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxvQ0FBb0M7RUFDcEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELG9DQUFvQztFQUNwQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsb0NBQW9DO0VBQ3BDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlEQUF5RDtFQUN6RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0ZBQTBEO0VBQTFELDBEQUEwRDtFQUMxRCxjQUFjO0VBQ2QsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC12aWV3L2VkaXQtdmlldy9lZGl0LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYiB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXItZWRpdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzAsIDgwLCA5MCwgLjEpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ0LjVweCBjYWxjKCAxMDB2aCAtIDg5cHgpIDQ0LjVweDtcbn1cblxuLmhlYWRlci1yIHtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggY2FsYyggMTAwJSAtIDUwcHgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQ0LjVweDtcbiAgbWFyZ2luOiAwIDAgMC41cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDEwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNDY7XG4gIG9wYWNpdHk6IDAuOTI7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIHBhZGRpbmc6IDdweCA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5hcnJvdy1kaXYge1xuICB3aWR0aDogNTEuNXB4O1xuICBoZWlnaHQ6IDQ0LjVweDtcbiAgbWFyZ2luOiAwIDE0LjNweCAwIDA7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdHdvKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFycm93LWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uYm9keS1jIHtcbiAgaGVpZ2h0OiBjYWxjKCAxMDB2aCAtIDQ0LjVweCk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmOGM7XG59XG5cbi5zZWN0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyNHB4IDIycHggMjRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2IoMjI0IDIyNyAyMzEgLyA3MCUpO1xufVxuXG4uZ3JvdXAtYyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCAjMzM2NWM4IDM4JSwgIzhhNmZmNCAxMTElLCAjYTA3MWZmIDEzMCUpOyAqL1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5ncm91cC10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ncm91cC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uZ3JvdXAtYnRuLW8ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpO1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbi5idG4tYiB7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uYnRuLWItbyB7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNvbnRlbnQtYyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogODd2aDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250ZW50LWdyb3VwIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuXG4uZmllbGQtZyB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggYXV0bztcbiAgZ3JpZC1nYXA6IDVweDtcbn1cblxuLmZpZWxkLWgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGNvbG9yOiByZ2JhKDQ3LCA1OCwgODcsIC45NSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbnB1dC1mIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBjb2xvcjogIzc3Nzc3N2ZjO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5pbnB1dC1kYXRlLWRpc2FibGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY4YTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2FjYWNhOTQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3Nzc3ZmM7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLmlucHV0LXRleHRhcmVhIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICM3Nzc3NzdmYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uaW5wdXQtc2VsZWN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2FjYTk0O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM3Nzc3NzdmYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uaW5wdXQtZGF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E5NDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM3Nzc3NzdmYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDUlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMWE3YmVkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KSAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZS1pY29uIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmRhdGUtaWNvbi1kIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmhlYWRlci1nIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmdiYSg0NywgNTgsIDg3LCAuOTUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ucm93LWYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZm9vdGVyLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQsIDAgLTJweCA2cHggcmdiYSgwLCAwLCAwLCAuMDcpO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmNyZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmI3MmZjLCAjMmM5N2U5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNhbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gtdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4jdGFibGVWaWV3RmlsZUxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2RhdGV0aW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RpbWVzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF0dGFjaG1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNXB4O1xufVxuXG4uYXR0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiA3MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWJsdWUpO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1saWdodGlzaC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbGUtbGluay1mIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0aXNoLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2UtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS1oIHtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbi5yZWQtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1jLXIge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4ubWFuLWYtYyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2hlLWNsb3NlLWkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZS1mIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2hlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc3ViLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleWlzaCkgIWltcG9ydGFudDtcbn1cblxuLnN1Yi1pbnB1dC1vZmYge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbn1cblxuLnN1Yi1pbnB1dC1vZmYtZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuXG4uc3ViLXRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViLXQtaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XG59XG5cbi5zdWItdC1oLXQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdWItdC1oLW4ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLXQtciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdC1yLWYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Yi10LXItbiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWJ0biB7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Yi1lLXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi5zdWItdi1hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlLWJnIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5zaWRlLWljb24ge1xuICBjb2xvcjogI2QxZDFkMTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDE1cHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc3ViLWNyZWF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmluc2lkZS1zdWItaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmluc2lkZS1zdWItdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluc2lkZS1zdWItdC1oIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5aXNoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYTtcbn1cblxuLmluc2lkZS1zdWItdC1oLW4ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5zaWRlLXN1Yi10LWgtdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluc2lkZS1zdWItZS1yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xufVxuXG4ucmFkaW8taW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yYWRpby1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5maWxlLWJnIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDEwcHggNXB4O1xufVxuXG4uZmlsZS1vcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDE1cHggNXB4O1xufVxuXG4uaW5uZXItZGF0YSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgem9vbTogMS4zO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm91dGVyLWRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbC1vdXRlciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggMTdweCAwIHJnYmEoNzAsIDE0MiwgMjI5LCAwLjE1KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2E4YzRlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk5O1xuICBjdXJzb3I6IG1vdmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLm1haWwtZHJhZy1ib3VuZGFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLm1haWwtaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50by1hcmVhIHtcbiAgbWFyZ2luOiAxNXB4IDIwcHg7XG59XG5cbi5tYWlsLWxhYmVsIHtcbiAgY29sb3I6ICMzOTQ3NjE7XG59XG5cbi5tYWlsLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYWZiNmJlO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5zZW5kLWRvYyB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNzZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA5NCU7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5maWxlLWNoaXAge1xuICBtYXJnaW46IDRweCA4cHg7XG59XG5cbi5maWxlLWNsb3NlIHtcbiAgY29sb3I6ICNhOGM0ZTU7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FmYjZiZTtcbiAgY3Vyc29yOiBhdXRvO1xuICBtYXJnaW46IDZweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIgLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cblxuLnZpZXctcGFzcyB7XG4gIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi52aWV3LXBhc3Mtc3ViIHtcbiAgdG9wOiB1bnNldDtcbn1cblxuLnNlbmQtbWFpbC1mb290IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zZW5kLW1haWwtZm9vdCAuY2FuY2VsLWJ0biwgLnNlbmQtbWFpbC1mb290IC5zZW5kLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZW5kLW1haWwtZm9vdCAuc2VuZC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZXJ1bGVhbik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VuZC1tYWlsLWZvb3QgLmNhbmNlbC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmV5aXNoLXR3byk7XG59XG5cbi5kYXRlLXNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF0ZS1zLWkge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3JkZXItZGFzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJvcmRlci1kYXNoLXUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5aXNoKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWMtaGVhZCB7XG4gIG1hcmdpbjogMTBweCAyMnB4O1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlucHV0LWRhdGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA3JSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC1zZWxlY3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA3JSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC10ZXh0YXJlYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDclKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlucHV0LWRhdGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFhN2JlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSkgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LXNlbGVjdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDUlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMWE3YmVkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFhN2JlZCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSkgIWltcG9ydGFudDtcbn1cblxuLmRhcmstdGV4dC1ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmdyZWVuLWJ0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMGE4NjUsICMxYzlhOTEpO1xufVxuXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAyM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXRjaGlwLWNsb3NlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWNoaXAtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWF0LWNoaXAtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm1hdC1tdWx0aS1zZWxlY3QtY2hpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cbi5tYXQtbXVsdGktc2VsZWN0LWNoaXAtc3ViIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTIlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4uY3JlYXRlZC1ieWUge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjYWNhY2E5NDtcbiAgY29sb3I6ICM3Nzc3NzdmYztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuXG4uZW50ZXIta2V5LWNoaXAge1xuICBtaW4taGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZW50ZXIta2V5LWNoaXA6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmVudGVyLWtleS1jaGlwOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLW9wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbC1ncmV5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udXNlci1wcm8ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmdyb3VwLWJ0bi1vOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLCBmb250LXdlaWdodCAxcyBlYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTdmZmI7XG59XG5cbi5hcnJvdy1pY29uOmhvdmVyLCAuZ3JvdXAtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMC4xcztcbn1cblxuLnYtb3JnaW4tcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi52LW9yaWdpbi1mIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udi1vcmdpbi1zLWEge1xuICB3aWR0aDogMjMwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmYjg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnYtb3JnaW4tcy1hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbn1cblxuLnYtcy1jIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG87XG4gIGdyaWQtZ2FwOiAycHg7XG59XG5cbi52LXMtYy1sIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnYtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIC8qIHdpZHRoOiAyNXB4OyAqL1xufVxuXG4udi1zLWMtYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpO1xufVxuXG4udi1zLWMtdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udi1vLWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMnB4IGF1dG87XG59XG5cbi52LWRvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnYtY29uLWMge1xuICBjb2xvcjogdmFyKC0tY2hhcmNvYWwtZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi52LWVkaXQtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52LW9yZ2luLXMtYTpob3ZlciAudi1lZGl0LWljb24ge1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG59XG5cbi52LWRvbmUtaWNvbiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnYtcG9zLXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxM3B4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udi1vcmlnaW4tcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xufVxuXG4udi1wb3MtYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NnB4O1xufVxuXG4udi1kaWEtZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIDUwcHg7XG59XG5cbi52LWRpYS1oIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYigwIDAgMCAvIDUlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnYtZGlhLWFkZC1iIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52LWRpYS1iYWNrLWIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHZhcigtLXdhcm0tZ3JleSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnYtZGlhLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbn1cblxuLnYtaSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgd2lkdGg6IDk3JTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLnYtaS10IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgd2lkdGg6IDk3JTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udi1hZGQtZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGlua2lzaC1ncmV5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTQwcHg7XG4gIHRvcDogNjBweDtcbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4udi1wb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI3NGZmNDU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHRpc2gtYmx1ZSk7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi52LXRvdGFsIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyZXlpc2gpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsLWdyZXkpO1xufVxuXG4udi10by1iIHtcbiAgcGFkZGluZzogMnB4IDE1cHggMnB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JleWlzaCk7XG59XG5cbi52LXRvIHtcbiAgcGFkZGluZzogMnB4IDE1cHggMnB4IDBweDtcbn1cblxuLnYtcGljayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLnYtdHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi52LXR5cGUtaSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ibHVlKTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udi10eXBlLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udi10eXBlLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udi10eXBlLW0ge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi52LW5vdCB7XG4gIGNvbG9yOiAjNzA3MDcwYmQ7XG59XG5cbi52LXMtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLnYtZGVsYXkge1xuICBjb2xvcjogI2VlMWM0ZDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udi1vbnRpbWUge1xuICBjb2xvcjogdmFyKC0tZ3JlZW4tdGVhbCk7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnYtYWRkLXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICByaWdodDogLThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13YXJtLWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGNvbG9yOiAjMjUzNTQyYWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udi1pLWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIHdpZHRoOiA5NyU7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnYtaS1zLWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIHdpZHRoOiA2NTBweDtcbn1cblxuLnZpLWQtaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udi1ib2F0IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG4udmktZC1oOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udi1pLWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNXB4O1xuICBjb2xvcjogdmFyKC0td2FybS1ncmV5KTtcbn1cblxuLnYtZGlhLWZvbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucC1tYWluIHt9XG5cbi5wLW1haW4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhjYzkyICFpbXBvcnRhbnQ7XG59XG5cbi5wLW1haW4gLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uYm90LTUwIHtcbiAgYm90dG9tOiA1MHB4O1xufVxuLmFydi13aWR0aCB7XG4gIHdpZHRoOiA1OTVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4uZmlsZS1tYXJnIHtcbiAgbWFyZ2luOiAxMHB4IC00MnB4O1xufVxuXG4ubWF0LXRhYi1sYWJlbCB7XG4gIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDdweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDkwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-view',
                templateUrl: './edit-view.component.html',
                styleUrls: ['./edit-view.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { sideedit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['sideedit']
        }] }); })();


/***/ }),

/***/ "ZJwn":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-view-edit-view-module.js.map