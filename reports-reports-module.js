(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "ZAGK":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active-reports": a0 }; };
class ReportsComponent {
    constructor() {
        this.report_type = 'all';
    }
    ngOnInit() {
    }
    getType(type) {
        if (type !== this.report_type) {
            this.report_type = type;
            this.getReport();
        }
    }
    getReport() {
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 42, vars: 9, consts: [[1, "reports-header", "d-flex"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "report-back", "material-icons", "align-center", "cursor"], [1, "report-main-text", "fw-500"], [1, "report-search", "d-flex", "position-r"], ["type", "text", "placeholder", "Search", 1, "report-input"], [1, "report-search-icon", "material-icons"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "report-new-btn", "d-flex", "fw-500", "cursor"], [1, "material-icons"], [1, "reports-second-row", "d-flex"], [1, "report-assign-icon", "d-flex"], [1, "reports-count", "fw-500"], [1, "report-desc"], [1, "report-sort-text", "d-flex"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "material-icons", "cursor"], [1, "reports-tab-row", "d-flex"], ["matRipple", "", "matRippleColor", "'#ffffff'", 1, "cursor", "tab-text", 3, "ngClass", "click"], [1, "reports-list-row", "d-flex"], [1, "reports-list-card", "position-r"], [1, "report-type-pos"], [1, "report-more", "material-icons"], [1, "report-type-icon"], [1, "report-name"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " keyboard_backspace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " New Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " assignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Reports (3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Showing reports generated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sort by : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " filter_list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_div_click_27_listener() { return ctx.getType("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_div_click_29_listener() { return ctx.getType("advanced"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Advanced ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_div_click_31_listener() { return ctx.getType("basic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Report one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.report_type === "all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.report_type === "advanced"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.report_type === "basic"));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".reports-header[_ngcontent-%COMP%] {\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n    height: 52px;\n}\n.report-back[_ngcontent-%COMP%] {\n    background-color: var(--pinkish-grey-three);\n    color: #ffffff;\n    height: 100%;\n    padding: 0 15px;\n}\n.report-main-text[_ngcontent-%COMP%] {\n    color: var(--dark-two);\n    margin: 15px 25px;\n}\n.report-new-btn[_ngcontent-%COMP%] {\n    background-image: linear-gradient(355deg, #2e9afc 118%, #0081f6 -34%);\n    margin: 10px 0;\n    color: #ffffff;\n    align-items: center;\n    padding: 0 14px;\n    height: 30px;\n    border-radius: 4px;\n}\n.report-search[_ngcontent-%COMP%] {\n    width: 76%;\n    align-items: center;\n}\n.report-input[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: var(--pale-grey);\n    border: solid 1px #dadada;\n    height: 30px;\n    margin: 0 10px;\n    padding: 0 10px;\n    color: var(--dark-two);\n}\n.report-search-icon[_ngcontent-%COMP%] {\n    color: #959595 ;\n    position: absolute;\n    right: 20px;\n}\n.reports-second-row[_ngcontent-%COMP%] {\n    padding-bottom: 8px;\n    border-bottom: solid 1px #d1d1d1;\n    margin: 15px 35px;\n}\n.report-assign-icon[_ngcontent-%COMP%] {\n    background:  var(--clear-blue);\n    padding: 0 8px;\n    color: #fff;\n    border-radius: 4px;\n    margin-right: 15px;\n    align-items: center;\n}\n.reports-count[_ngcontent-%COMP%] {\n    color: var(--warm-grey);\n}\n.report-desc[_ngcontent-%COMP%] {\n    color: #c2c2c2;\n    font-size: 12px;\n}\n.report-sort-text[_ngcontent-%COMP%] {\n    color: #c2c2c2;\n    align-items: center;\n    flex: 1;\n    justify-content: flex-end;\n}\n.report-sort-text[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    color: var(--warm-grey);\n    margin-left: 6px;\n}\n.reports-tab-row[_ngcontent-%COMP%] {\n    padding-bottom: 4px;\n    border-bottom: 1px dashed #d1d1d1;\n    margin: 15px 35px;\n}\n.tab-text[_ngcontent-%COMP%] {\n    color: #b2b2b2;\n    padding: 5px 8px;\n}\n.active-reports[_ngcontent-%COMP%] {\n    color: #333333;\n    font-weight: 500;\n}\n.reports-list-row[_ngcontent-%COMP%] {\n    margin: 15px 35px;\n    flex-wrap: wrap;\n}\n.reports-list-card[_ngcontent-%COMP%] {\n    width: 166px;\n    height: 158px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n    margin: 6px;\n}\n.reports-list-active[_ngcontent-%COMP%] {\n    border: solid 1px var(--dodger-blue);\n}\n.report-type-pos[_ngcontent-%COMP%] {\n    font-weight: 500;\n    color: #fff;\n    position: absolute;\n    left: 10px;\n    background: #1a8ff9;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n}\n.report-more[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n}\n.report-name[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n    color: var(--dark-two);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUVBQXFFO0lBQ3JFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMtaGVhZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgaGVpZ2h0OiA1MnB4O1xufVxuLnJlcG9ydC1iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5raXNoLWdyZXktdGhyZWUpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG4ucmVwb3J0LW1haW4tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstdHdvKTtcbiAgICBtYXJnaW46IDE1cHggMjVweDtcbn1cbi5yZXBvcnQtbmV3LWJ0biB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM1NWRlZywgIzJlOWFmYyAxMTglLCAjMDA4MWY2IC0zNCUpO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucmVwb3J0LXNlYXJjaCB7XG4gICAgd2lkdGg6IDc2JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlcG9ydC1pbnB1dCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkYWRhZGE7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay10d28pO1xufVxuLnJlcG9ydC1zZWFyY2gtaWNvbiB7XG4gICAgY29sb3I6ICM5NTk1OTUgO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbn1cbi5yZXBvcnRzLXNlY29uZC1yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkMWQxZDE7XG4gICAgbWFyZ2luOiAxNXB4IDM1cHg7XG59XG4ucmVwb3J0LWFzc2lnbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAgdmFyKC0tY2xlYXItYmx1ZSk7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlcG9ydHMtY291bnQge1xuICAgIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xufVxuLnJlcG9ydC1kZXNjIHtcbiAgICBjb2xvcjogI2MyYzJjMjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucmVwb3J0LXNvcnQtdGV4dCB7XG4gICAgY29sb3I6ICNjMmMyYzI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucmVwb3J0LXNvcnQtdGV4dCAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGNvbG9yOiB2YXIoLS13YXJtLWdyZXkpO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4ucmVwb3J0cy10YWItcm93IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2QxZDFkMTtcbiAgICBtYXJnaW46IDE1cHggMzVweDtcbn1cbi50YWItdGV4dCB7XG4gICAgY29sb3I6ICNiMmIyYjI7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5hY3RpdmUtcmVwb3J0cyB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yZXBvcnRzLWxpc3Qtcm93IHtcbiAgICBtYXJnaW46IDE1cHggMzVweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucmVwb3J0cy1saXN0LWNhcmQge1xuICAgIHdpZHRoOiAxNjZweDtcbiAgICBoZWlnaHQ6IDE1OHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW46IDZweDtcbn1cbi5yZXBvcnRzLWxpc3QtYWN0aXZlIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1kb2RnZXItYmx1ZSk7XG59XG4ucmVwb3J0LXR5cGUtcG9zIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxYThmZjk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJlcG9ydC1tb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG59XG4ucmVwb3J0LW5hbWUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXR3byk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fh+f":
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "ZAGK");





const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    }, {
        path: 'view',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uHdG":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "fh+f");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "ZAGK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map