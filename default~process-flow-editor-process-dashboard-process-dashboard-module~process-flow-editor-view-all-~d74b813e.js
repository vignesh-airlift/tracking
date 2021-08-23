(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~process-flow-editor-process-dashboard-process-dashboard-module~process-flow-editor-view-all-~d74b813e"],{

/***/ "uns5":
/*!*************************************************!*\
  !*** ./src/app/process-flow-editor/constant.ts ***!
  \*************************************************/
/*! exports provided: advanced, field_list, advaced_option_type, visibility, visibility_option_list, validation_appearance, computationals, field, option_list_advance, option_list_normal, default_value, required_depended_validation, dataType, checkListBased, stringBased, toggleBased, fileBased, validations, computational, autoRule, setContainsvalid, file, fileTypeList, specialcharater, notifyType, deadOccuranceType, deadOccuranceTimeType, actionList, iconList, nodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanced", function() { return advanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field_list", function() { return field_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advaced_option_type", function() { return advaced_option_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility_option_list", function() { return visibility_option_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation_appearance", function() { return validation_appearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computationals", function() { return computationals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_list_advance", function() { return option_list_advance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_list_normal", function() { return option_list_normal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default_value", function() { return default_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required_depended_validation", function() { return required_depended_validation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataType", function() { return dataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkListBased", function() { return checkListBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringBased", function() { return stringBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBased", function() { return toggleBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileBased", function() { return fileBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validations", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computational", function() { return computational; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoRule", function() { return autoRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContainsvalid", function() { return setContainsvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTypeList", function() { return fileTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialcharater", function() { return specialcharater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyType", function() { return notifyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deadOccuranceType", function() { return deadOccuranceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deadOccuranceTimeType", function() { return deadOccuranceTimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionList", function() { return actionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconList", function() { return iconList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes", function() { return nodes; });
// Advance fields (lookup) const Start
const advanced = {
    type: 'non-depended',
    table_name: '',
    operator: 'equal_to',
    depended_field: '',
    filter_field: '',
    filter: '',
    field_list: []
};
const field_list = {
    display_value: '',
    name: '',
    replace_for: [],
    replace_type: 1 //0=id,1=value
};
const advaced_option_type = ['non-depended', 'depended', 'auto-fill'];
// Advance fields (lookup) const End
// Visibility fields const Start
const visibility = {
    type: '',
    option_list: [],
    expression: ''
};
const visibility_option_list = {
    type: '',
    value: [],
    field_list: []
};
// Visibility fields const End
// validation_appearance field const Start
const validation_appearance = {
    type: '',
    name: '',
    value: [],
    color_code: '#f7594b',
    message: '',
    expression: '',
    warn_type: '' //reject,warn
};
// validation_appearance field const End
// computational field const Start
const computationals = {
    type: 'normal',
    name: '',
    is_edit: 0,
    expression: ''
};
// computational field const End
const field = {
    field_type: '',
    name: '',
    field_title: '',
    help_text: '',
    default_value: null,
    mandatory: 0,
    // isunique: 0,
    max_length: 30,
    option_list: null,
    group_id: 0,
    group_name: '',
    table_name: '',
    // section_table_name: '',
    // is_new_table: 1,
    // validation_appearance: null,
    // computational: null,
    // visibility: null,//Refer const visibility
    // advanced: null, //Refer const advanced
    // is_quick_field: 0,
    is_disabled: 0,
    is_hidden: 0,
    is_unique: '0',
    row_no: 0,
    field_position: 0,
    // section_table_view_position: 0,
    // table_view_position: 0,
    grid: 25,
};
//response and
const option_list_advance = [{
        display_value: '',
        name: '',
        replace_for: ''
    }];
const option_list_normal = {
    value: '',
    color: ''
};
// Default value
const default_value = {
    type: '',
    value: ''
};
const required_depended_validation = {
    field_name: '',
    op_type: 'eq_to',
    value: []
};
const dataType = [
    {
        field_type: 'VARCHAR', field_sub_type: 'text', name: '', field_title: 'Text', help_text: '', default_value: null,
        mandatory: 0, max_length: 150, option_list: null,
    },
    {
        field_type: 'textarea', field_sub_type: 'textarea', name: '', field_title: 'Paragraph', help_text: '', default_value: null,
        mandatory: 0, max_length: 700, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'number', name: '', field_title: 'Number', help_text: '', default_value: null,
        mandatory: 0, max_length: 7, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'checklist', name: '', field_title: 'CheckList', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'checkbox', name: '', field_title: 'Check Box', help_text: '', default_value: null,
        mandatory: 0, max_length: 20, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'SELECT', field_sub_type: 'select', name: '', field_title: 'Dropdown', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: [{ value: 'option1', color: '' }, { value: 'option2', color: '' }],
    },
    {
        field_type: 'DATE', field_sub_type: 'date', name: '', field_title: 'Date', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'DATE', field_sub_type: 'datetime', name: '', field_title: 'Date and Time', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: null,
    },
    {
        field_type: 'TIME', field_sub_type: 'time', name: '', field_title: 'Time', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'image', name: '', field_title: 'Image', help_text: '', default_value: null,
        mandatory: 0, max_length: 200, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'attachment', name: '', field_title: 'Attachment', help_text: '', default_value: null,
        mandatory: 0, max_length: 200, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'switch', name: '', field_title: 'Yes/No', help_text: '', default_value: null,
        mandatory: 0, max_length: 1, option_list: null,
    },
    {
        field_type: 'INT', field_sub_type: 'slider', name: '', field_title: 'Slider', help_text: '', default_value: null,
        mandatory: 0, max_length: 10, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'user', name: '', field_title: 'User', help_text: '', default_value: null,
        mandatory: 0, max_length: 200, option_list: null,
    },
    {
        field_type: 'table', field_sub_type: 'table', name: '', field_title: 'Table', help_text: '', default_value: null,
        mandatory: 0, max_length: 1, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'currency', name: '', field_title: 'Currency', help_text: '', default_value: null,
        mandatory: 0, max_length: 55, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'telephone', name: '', field_title: 'Telephone Number', help_text: '', default_value: null,
        mandatory: 0, max_length: 30, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'email', name: '', field_title: 'Email', help_text: '', default_value: null,
        mandatory: 0, max_length: 50, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'link', name: '', field_title: 'Link', help_text: '', default_value: null,
        mandatory: 0, max_length: 100, option_list: null,
    },
    {
        field_type: 'VARCHAR', field_sub_type: 'password', name: '', field_title: 'Password', help_text: '', default_value: null,
        mandatory: 0, max_length: 25, option_list: null,
    },
    {
        field_type: 'TEXT', field_sub_type: 'richtext', name: '', field_title: 'Rich text', help_text: '', default_value: null,
        mandatory: 0, max_length: 700, option_list: null
    },
];
const checkListBased = [
    'checkbox',
    'checklist',
    'select'
];
const stringBased = [
    'number',
    'text',
    'tel',
    'url',
    'password',
    'textarea',
    'email',
    'richtext',
    'currency'
];
const toggleBased = [
    'toggle',
    'slider'
];
const fileBased = [
    'attachment',
    'image'
];
const validations = {
    'number': [
        { d_name: 'Greater Then', name: 'gt', value: [], message: 'please enter Higher value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Lesser Then', name: 'lt', value: [], message: 'please enter lesser value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Equal to', name: 'eq_to', value: [], message: 'please enter equal value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Not equalto', name: 'nt_eq_to', value: [], message: 'not equal to this value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'text': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Equal to', name: 'eq_to', value: [], message: 'please enter equal value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Not equalto', name: 'nt_eq_to', value: [], message: 'not equal to this value', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not special characters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'table': [{ d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' }],
    'tel': [
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'mimnimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'password': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special characters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'textarea': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'Does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special charaters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'richtext': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'Does not contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max length', name: 'max_len', value: [], message: 'exits maximum length', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Min length', name: 'min_len', value: [], message: 'minimum length error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Letter only', name: 'letter_only', value: [], message: 'only letters allowed', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'No Special Character', name: 'no_special', value: [], message: 'must not  special charaters', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'date': [
        { d_name: 'In Past', name: 'in_past_d', value: [], message: 'date must be in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_d', value: [], message: 'date must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Current (Today)', name: 'today', value: [], message: 'must be today', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'time': [
        { d_name: 'In Past', name: 'in_past_t', value: [], message: 'time must in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_t', value: [], message: 'time must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'select': [
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'checklist': [
        { d_name: 'Mix no. of Select', name: 'min_select', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Max no. of Select', name: 'max_select', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'image': [
        { d_name: 'Image Type', name: 'img_type', value: [], message: 'image type error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximum image size', name: 'max_size', value: [], message: 'image size is large, upload the smaller image', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'attachment': [
        { d_name: 'File Type', name: 'file_type', value: [], message: 'file type error', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximun file size', name: 'max_size', value: [], message: 'file size id too large, please upload the smaller file', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Maximum no. of file', name: 'max_no_of_files', value: [], message: '', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'url': [
        { d_name: 'Does not Contains', name: 'nt_contains', value: [], message: 'must not contains', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Contains', name: 'contains', value: [], message: 'must contain', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ],
    'datetime': [
        { d_name: 'In Past', name: 'in_past_dt', value: [], message: 'date and time must be in past', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'In Future', name: 'in_future_dt', value: [], message: 'date and time must be in future', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Current (Today)', name: 'today', value: [], message: 'must be today', color_code: '#f7594b', warn_type: 'warn' },
        { d_name: 'Required*', name: 'required', value: [], message: 'required', color_code: '#f7594b', warn_type: 'warn' },
    ]
};
const computational = [
    { d_name: 'Average', name: 'average', value: 'average()', fieldType: 'number', fieldList: [] },
    { display_value: 'Concatenate', name: 'concatenate', value: 'concatenate()', fieldType: '', fieldList: [] },
    { display_value: 'minimum', name: 'min', value: 'min()', fieldType: 'number', fieldList: [] },
    { display_value: 'maximum', name: 'max', value: 'max()', fieldType: 'number', fieldList: [] },
    { display_value: 'Created by', name: 'createdBy', value: '', fieldList: [] },
    { display_value: 'Last modified by', name: 'lastModifiedBy', value: '', fieldList: [] },
    { display_value: 'Rand', name: 'rand', value: 'rand()', fieldList: [] },
    { display_value: 'Rand Between', name: 'randBetween', value: 'rand_between()', fieldList: [] },
    { display_value: 'Sum', name: 'sum', value: 'sum()', fieldType: 'number', fieldList: [] },
    { display_value: 'Date diff', name: 'dateDiff', value: '', fieldList: [] },
    {
        display_value: 'Depended', name: 'depended', value: '', sortType: 'DESC', sortField: '', tableName: '', fieldName: ''
    },
];
const autoRule = ['in_past_date', 'in_future_date', 'in_past_time',
    'in_future_time', 'in_past_datetime', 'in_future_datetime', 'no_special', 'letter_only'];
const setContainsvalid = ['contains', 'does_not_contains'];
const file = ['file_type', 'image_type'];
const fileTypeList = {
    'file_type': [
        'JPG', 'JPEG', 'PNG', 'BMP', 'TIF',
        'PDF', 'PPT', 'PPTX', 'DOC', 'DOCX'
    ],
    'image_type': ['JPG', 'JPEG', 'PNG', 'BMP', 'TIF']
};
const specialcharater = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const notifyType = ['notify', 'escalate'];
const deadOccuranceType = [
    { name: 'before', displayValue: 'Before the deadline' },
    { name: 'after', displayValue: 'After the deadline' }
];
const deadOccuranceTimeType = [
    { name: 'hours', displayValue: 'Hours' },
    { name: 'minutes', displayValue: 'Minutes' },
    { name: 'weaks', displayValue: 'Weaks' }
];
const actionList = [
    { name: 'submit', displayValue: 'Submit', position: 6, color: '', bgColor: '' },
    { name: 'reassign', displayValue: 'Reassign', position: 5, color: '', bgColor: '' },
    { name: 'send back', displayValue: 'Send Back', position: 4, color: '', bgColor: '' },
    { name: 'withdraw', displayValue: 'Withdraw', position: 2, color: '', bgColor: '' },
    { name: 'discard', displayValue: 'Discard', position: 1, color: '', bgColor: '' },
    { name: 'assign', displayValue: 'Assign To', position: 1, color: '', bgColor: '' },
];
const iconList = { "baseUrl": "static/icons/", "categories": [{ "icons": [{ "id": "3d_rotation" }, { "id": "accessibility" }, { "id": "accessibility_new" }, { "id": "accessible" }, { "id": "accessible_forward" }, { "id": "account_balance" }, { "id": "account_balance_wallet" }, { "id": "account_box" }, { "id": "account_circle" }, { "id": "add_shopping_cart" }, { "id": "alarm" }, { "id": "alarm_add" }, { "id": "alarm_off" }, { "id": "alarm_on" }, { "id": "all_inbox" }, { "id": "all_out" }, { "id": "android" }, { "id": "announcement" }, { "id": "arrow_right_alt" }, { "id": "aspect_ratio" }, { "id": "assessment" }, { "id": "assignment" }, { "id": "assignment_ind" }, { "id": "assignment_late" }, { "id": "assignment_return" }, { "id": "assignment_returned" }, { "id": "assignment_turned_in" }, { "id": "autorenew" }, { "id": "backup" }, { "id": "book" }, { "id": "bookmark" }, { "id": "bookmark_border" }, { "id": "bookmarks" }, { "id": "bug_report" }, { "id": "build" }, { "id": "cached" }, { "id": "calendar_today" }, { "id": "calendar_view_day" }, { "id": "camera_enhance" }, { "id": "card_giftcard" }, { "id": "card_membership" }, { "id": "card_travel" }, { "id": "change_history" }, { "id": "check_circle" }, { "id": "check_circle_outline" }, { "id": "chrome_reader_mode" }, { "id": "class" }, { "id": "code" }, { "id": "commute" }, { "id": "compare_arrows" }, { "id": "contact_support" }, { "id": "copyright" }, { "id": "credit_card" }, { "id": "dashboard" }, { "id": "date_range" }, { "id": "delete" }, { "id": "delete_forever" }, { "id": "delete_outline" }, { "id": "description" }, { "id": "dns" }, { "id": "done" }, { "id": "done_all" }, { "id": "done_outline" }, { "id": "donut_large" }, { "id": "donut_small" }, { "id": "drag_indicator" }, { "id": "eject" }, { "id": "euro_symbol" }, { "id": "event" }, { "id": "event_seat" }, { "id": "exit_to_app" }, { "id": "explore" }, { "id": "explore_off" }, { "id": "extension" }, { "id": "face" }, { "id": "favorite" }, { "id": "favorite_border" }, { "id": "feedback" }, { "id": "find_in_page" }, { "id": "find_replace" }, { "id": "fingerprint" }, { "id": "flight_land" }, { "id": "flight_takeoff" }, { "id": "flip_to_back" }, { "id": "flip_to_front" }, { "id": "g_translate" }, { "id": "gavel" }, { "id": "get_app" }, { "id": "gif" }, { "id": "grade" }, { "id": "group_work" }, { "id": "help" }, { "id": "help_outline" }, { "id": "highlight_off" }, { "id": "history" }, { "id": "home" }, { "id": "horizontal_split" }, { "id": "hourglass_empty" }, { "id": "hourglass_full" }, { "id": "http" }, { "id": "https" }, { "id": "important_devices" }, { "id": "info" }, { "id": "input" }, { "id": "invert_colors" }, { "id": "label" }, { "id": "label_important" }, { "id": "label_off" }, { "id": "language" }, { "id": "launch" }, { "id": "line_style" }, { "id": "line_weight" }, { "id": "list" }, { "id": "lock" }, { "id": "lock_open" }, { "id": "loyalty" }, { "id": "markunread_mailbox" }, { "id": "maximize" }, { "id": "minimize" }, { "id": "motorcycle" }, { "id": "note_add" }, { "id": "offline_bolt" }, { "id": "offline_pin" }, { "id": "opacity" }, { "id": "open_in_browser" }, { "id": "open_in_new" }, { "id": "open_with" }, { "id": "pageview" }, { "id": "pan_tool" }, { "id": "payment" }, { "id": "perm_camera_mic" }, { "id": "perm_contact_calendar" }, { "id": "perm_data_setting" }, { "id": "perm_device_information" }, { "id": "perm_identity" }, { "id": "perm_media" }, { "id": "perm_phone_msg" }, { "id": "perm_scan_wifi" }, { "id": "pets" }, { "id": "picture_in_picture" }, { "id": "picture_in_picture_alt" }, { "id": "play_for_work" }, { "id": "polymer" }, { "id": "power_settings_new" }, { "id": "pregnant_woman" }, { "id": "print" }, { "id": "query_builder" }, { "id": "question_answer" }, { "id": "receipt" }, { "id": "record_voice_over" }, { "id": "redeem" }, { "id": "remove_shopping_cart" }, { "id": "reorder" }, { "id": "report_problem" }, { "id": "restore" }, { "id": "restore_from_trash" }, { "id": "restore_page" }, { "id": "room" }, { "id": "rounded_corner" }, { "id": "rowing" }, { "id": "schedule" }, { "id": "search" }, { "imageUrls": { "twotone": "twotone-settings-24px.svg", "sharp": "sharp-settings-24px.svg", "outline": "outline-settings-24px.svg", "round": "round-settings-24px.svg", "baseline": "baseline-settings-20px.svg" }, "id": "settings" }, { "id": "settings_applications" }, { "id": "settings_backup_restore" }, { "id": "settings_bluetooth" }, { "id": "settings_brightness" }, { "id": "settings_cell" }, { "id": "settings_ethernet" }, { "id": "settings_input_antenna" }, { "id": "settings_input_component" }, { "id": "settings_input_composite" }, { "id": "settings_input_hdmi" }, { "id": "settings_input_svideo" }, { "id": "settings_overscan" }, { "id": "settings_phone" }, { "id": "settings_power" }, { "id": "settings_remote" }, { "id": "settings_voice" }, { "id": "shop" }, { "id": "shop_two" }, { "id": "shopping_basket" }, { "id": "shopping_cart" }, { "id": "speaker_notes" }, { "id": "speaker_notes_off" }, { "id": "spellcheck" }, { "imageUrls": { "twotone": "twotone-star_rate-18px.svg", "sharp": "sharp-star_rate-18px.svg", "outline": "outline-star_rate-18px.svg", "round": "round-star_rate-18px.svg", "baseline": "baseline-star_rate-18px.svg" }, "id": "star_rate" }, { "id": "stars" }, { "id": "store" }, { "id": "subject" }, { "id": "supervised_user_circle" }, { "id": "supervisor_account" }, { "id": "swap_horiz" }, { "id": "swap_horizontal_circle" }, { "id": "swap_vert" }, { "id": "swap_vertical_circle" }, { "id": "tab" }, { "id": "tab_unselected" }, { "id": "text_rotate_up" }, { "id": "text_rotate_vertical" }, { "id": "text_rotation_down" }, { "id": "text_rotation_none" }, { "id": "theaters" }, { "id": "thumb_down" }, { "id": "thumb_up" }, { "id": "thumbs_up_down" }, { "id": "timeline" }, { "id": "toc" }, { "id": "today" }, { "id": "toll" }, { "id": "touch_app" }, { "id": "track_changes" }, { "id": "translate" }, { "id": "trending_down" }, { "id": "trending_flat" }, { "id": "trending_up" }, { "id": "turned_in" }, { "id": "turned_in_not" }, { "id": "update" }, { "id": "verified_user" }, { "id": "vertical_split" }, { "id": "view_agenda" }, { "id": "view_array" }, { "id": "view_carousel" }, { "id": "view_column" }, { "id": "view_day" }, { "id": "view_headline" }, { "id": "view_list" }, { "id": "view_module" }, { "id": "view_quilt" }, { "id": "view_stream" }, { "id": "view_week" }, { "id": "visibility" }, { "id": "visibility_off" }, { "id": "voice_over_off" }, { "id": "watch_later" }, { "id": "work" }, { "id": "work_off" }, { "id": "work_outline" }, { "id": "youtube_searched_for" }, { "id": "zoom_in" }, { "id": "zoom_out" }], "name": "action" }, { "icons": [{ "id": "add_alert" }, { "id": "error" }, { "id": "error_outline" }, { "id": "notification_important" }, { "id": "warning" }], "name": "alert" }, { "icons": [{ "id": "4k" }, { "id": "add_to_queue" }, { "id": "airplay" }, { "id": "album" }, { "id": "art_track" }, { "id": "av_timer" }, { "id": "branding_watermark" }, { "id": "call_to_action" }, { "id": "closed_caption" }, { "id": "control_camera" }, { "id": "equalizer" }, { "id": "explicit" }, { "id": "fast_forward" }, { "id": "fast_rewind" }, { "id": "featured_play_list" }, { "id": "featured_video" }, { "id": "fiber_dvr" }, { "id": "fiber_manual_record" }, { "id": "fiber_new" }, { "id": "fiber_pin" }, { "id": "fiber_smart_record" }, { "id": "forward_10" }, { "id": "forward_30" }, { "id": "forward_5" }, { "id": "games" }, { "id": "hd" }, { "id": "hearing" }, { "id": "high_quality" }, { "id": "library_add" }, { "id": "library_books" }, { "id": "library_music" }, { "id": "loop" }, { "id": "mic" }, { "id": "mic_none" }, { "id": "mic_off" }, { "id": "missed_video_call" }, { "id": "movie" }, { "id": "music_video" }, { "id": "new_releases" }, { "id": "not_interested" }, { "id": "note" }, { "id": "pause" }, { "id": "pause_circle_filled" }, { "id": "pause_circle_outline" }, { "id": "play_arrow" }, { "id": "play_circle_filled" }, { "imageUrls": { "twotone": "twotone-play_circle_filled_white-24px.svg", "sharp": "sharp-play_circle_filled_white-24px.svg", "outline": "outline-play_circle_filled_white-24px.svg", "round": "round-play_circle_filled_white-24px.svg", "baseline": "baseline-play_circle_filled_white-48px.svg" }, "id": "play_circle_filled_white" }, { "id": "play_circle_outline" }, { "id": "playlist_add" }, { "id": "playlist_add_check" }, { "id": "playlist_play" }, { "id": "queue" }, { "id": "queue_music" }, { "id": "queue_play_next" }, { "id": "radio" }, { "id": "recent_actors" }, { "id": "remove_from_queue" }, { "id": "repeat" }, { "id": "repeat_one" }, { "id": "replay" }, { "id": "replay_10" }, { "id": "replay_30" }, { "id": "replay_5" }, { "id": "shuffle" }, { "id": "skip_next" }, { "id": "skip_previous" }, { "id": "slow_motion_video" }, { "id": "snooze" }, { "id": "sort_by_alpha" }, { "id": "stop" }, { "id": "subscriptions" }, { "id": "subtitles" }, { "id": "surround_sound" }, { "id": "video_call" }, { "id": "video_label" }, { "id": "video_library" }, { "id": "videocam" }, { "id": "videocam_off" }, { "id": "volume_down" }, { "id": "volume_mute" }, { "id": "volume_off" }, { "id": "volume_up" }, { "id": "web" }, { "id": "web_asset" }], "name": "av" }, { "icons": [{ "id": "alternate_email" }, { "id": "business" }, { "id": "call" }, { "id": "call_end" }, { "id": "call_made" }, { "id": "call_merge" }, { "id": "call_missed" }, { "id": "call_missed_outgoing" }, { "id": "call_received" }, { "id": "call_split" }, { "id": "cancel_presentation" }, { "id": "cell_wifi" }, { "id": "chat" }, { "id": "chat_bubble" }, { "id": "chat_bubble_outline" }, { "id": "clear_all" }, { "id": "comment" }, { "id": "contact_mail" }, { "id": "contact_phone" }, { "id": "contacts" }, { "id": "desktop_access_disabled" }, { "id": "dialer_sip" }, { "id": "dialpad" }, { "id": "domain_disabled" }, { "id": "duo" }, { "id": "email" }, { "id": "forum" }, { "id": "import_contacts" }, { "id": "import_export" }, { "id": "invert_colors_off" }, { "id": "list_alt" }, { "id": "live_help" }, { "id": "location_off" }, { "id": "location_on" }, { "id": "mail_outline" }, { "id": "message" }, { "id": "mobile_screen_share" }, { "id": "no_sim" }, { "id": "pause_presentation" }, { "id": "person_add_disabled" }, { "id": "phone" }, { "id": "phonelink_erase" }, { "id": "phonelink_lock" }, { "id": "phonelink_ring" }, { "id": "phonelink_setup" }, { "id": "portable_wifi_off" }, { "id": "present_to_all" }, { "id": "print_disabled" }, { "id": "ring_volume" }, { "id": "rss_feed" }, { "id": "screen_share" }, { "id": "sentiment_satisfied_alt" }, { "id": "speaker_phone" }, { "id": "stay_current_landscape" }, { "id": "stay_current_portrait" }, { "id": "stay_primary_landscape" }, { "id": "stay_primary_portrait" }, { "id": "stop_screen_share" }, { "id": "swap_calls" }, { "id": "textsms" }, { "id": "unsubscribe" }, { "id": "voicemail" }, { "id": "vpn_key" }], "name": "communication" }, { "icons": [{ "id": "add" }, { "id": "add_box" }, { "id": "add_circle" }, { "id": "add_circle_outline" }, { "id": "archive" }, { "id": "backspace" }, { "id": "ballot" }, { "id": "block" }, { "id": "clear" }, { "id": "create" }, { "id": "delete_sweep" }, { "id": "drafts" }, { "id": "file_copy" }, { "id": "filter_list" }, { "id": "flag" }, { "id": "font_download" }, { "id": "forward" }, { "id": "gesture" }, { "id": "how_to_reg" }, { "id": "how_to_vote" }, { "id": "inbox" }, { "id": "link" }, { "id": "link_off" }, { "id": "low_priority" }, { "id": "mail" }, { "id": "markunread" }, { "id": "move_to_inbox" }, { "id": "next_week" }, { "id": "outlined_flag" }, { "id": "redo" }, { "id": "remove" }, { "id": "remove_circle" }, { "id": "remove_circle_outline" }, { "id": "reply" }, { "id": "reply_all" }, { "id": "report" }, { "id": "report_off" }, { "id": "save" }, { "id": "save_alt" }, { "id": "select_all" }, { "id": "send" }, { "id": "sort" }, { "id": "text_format" }, { "id": "unarchive" }, { "id": "undo" }, { "id": "waves" }, { "imageUrls": { "twotone": "twotone-weekend-24px.svg", "sharp": "sharp-weekend-24px.svg", "outline": "outline-weekend-24px.svg", "round": "round-weekend-24px.svg", "baseline": "baseline-weekend-48px.svg" }, "id": "weekend" }, { "id": "where_to_vote" }], "name": "content" }, { "icons": [{ "id": "access_alarm" }, { "id": "access_alarms" }, { "id": "access_time" }, { "id": "add_alarm" }, { "id": "add_to_home_screen" }, { "id": "airplanemode_active" }, { "id": "airplanemode_inactive" }, { "id": "battery_20" }, { "id": "battery_30" }, { "id": "battery_50" }, { "id": "battery_60" }, { "id": "battery_80" }, { "id": "battery_90" }, { "id": "battery_alert" }, { "id": "battery_charging_20" }, { "id": "battery_charging_30" }, { "id": "battery_charging_50" }, { "id": "battery_charging_60" }, { "id": "battery_charging_80" }, { "id": "battery_charging_90" }, { "id": "battery_charging_full" }, { "id": "battery_full" }, { "id": "battery_std" }, { "id": "battery_unknown" }, { "id": "bluetooth" }, { "id": "bluetooth_connected" }, { "id": "bluetooth_disabled" }, { "id": "bluetooth_searching" }, { "id": "brightness_auto" }, { "id": "brightness_high" }, { "id": "brightness_low" }, { "id": "brightness_medium" }, { "id": "data_usage" }, { "id": "developer_mode" }, { "id": "devices" }, { "id": "dvr" }, { "id": "gps_fixed" }, { "id": "gps_not_fixed" }, { "id": "gps_off" }, { "id": "graphic_eq" }, { "id": "location_disabled" }, { "id": "location_searching" }, { "id": "mobile_friendly" }, { "id": "mobile_off" }, { "id": "network_cell" }, { "id": "network_wifi" }, { "id": "nfc" }, { "id": "screen_lock_landscape" }, { "id": "screen_lock_portrait" }, { "id": "screen_lock_rotation" }, { "id": "screen_rotation" }, { "id": "sd_storage" }, { "id": "settings_system_daydream" }, { "id": "signal_cellular_0_bar" }, { "id": "signal_cellular_1_bar" }, { "id": "signal_cellular_2_bar" }, { "id": "signal_cellular_3_bar" }, { "id": "signal_cellular_4_bar" }, { "id": "signal_cellular_alt" }, { "id": "signal_cellular_connected_no_internet_0_bar" }, { "id": "signal_cellular_connected_no_internet_1_bar" }, { "id": "signal_cellular_connected_no_internet_2_bar" }, { "id": "signal_cellular_connected_no_internet_3_bar" }, { "id": "signal_cellular_connected_no_internet_4_bar" }, { "id": "signal_cellular_no_sim" }, { "id": "signal_cellular_null" }, { "id": "signal_cellular_off" }, { "id": "signal_wifi_0_bar" }, { "id": "signal_wifi_1_bar" }, { "id": "signal_wifi_1_bar_lock" }, { "id": "signal_wifi_2_bar" }, { "id": "signal_wifi_2_bar_lock" }, { "id": "signal_wifi_3_bar" }, { "id": "signal_wifi_3_bar_lock" }, { "id": "signal_wifi_4_bar" }, { "id": "signal_wifi_4_bar_lock" }, { "id": "signal_wifi_off" }, { "id": "storage" }, { "id": "usb" }, { "id": "wallpaper" }, { "id": "widgets" }, { "id": "wifi_lock" }, { "id": "wifi_tethering" }], "name": "device" }, { "icons": [{ "id": "add_comment" }, { "id": "attach_file" }, { "id": "attach_money" }, { "id": "bar_chart" }, { "id": "border_all" }, { "id": "border_bottom" }, { "id": "border_clear" }, { "id": "border_color" }, { "id": "border_horizontal" }, { "id": "border_inner" }, { "id": "border_left" }, { "id": "border_outer" }, { "id": "border_right" }, { "id": "border_style" }, { "id": "border_top" }, { "id": "border_vertical" }, { "id": "bubble_chart" }, { "id": "drag_handle" }, { "id": "format_align_center" }, { "id": "format_align_justify" }, { "id": "format_align_left" }, { "id": "format_align_right" }, { "id": "format_bold" }, { "id": "format_clear" }, { "id": "format_color_fill" }, { "id": "format_color_reset" }, { "id": "format_color_text" }, { "id": "format_indent_decrease" }, { "id": "format_indent_increase" }, { "id": "format_italic" }, { "id": "format_line_spacing" }, { "id": "format_list_bulleted" }, { "id": "format_list_numbered" }, { "id": "format_list_numbered_rtl" }, { "id": "format_paint" }, { "id": "format_quote" }, { "id": "format_shapes" }, { "id": "format_size" }, { "id": "format_strikethrough" }, { "id": "format_textdirection_l_to_r" }, { "id": "format_textdirection_r_to_l" }, { "id": "format_underlined" }, { "id": "functions" }, { "id": "highlight" }, { "id": "insert_chart" }, { "id": "insert_chart_outlined" }, { "id": "insert_comment" }, { "id": "insert_drive_file" }, { "id": "insert_emoticon" }, { "id": "insert_invitation" }, { "id": "insert_link" }, { "id": "insert_photo" }, { "id": "linear_scale" }, { "id": "merge_type" }, { "id": "mode_comment" }, { "id": "monetization_on" }, { "id": "money_off" }, { "id": "multiline_chart" }, { "id": "notes" }, { "id": "pie_chart" }, { "id": "publish" }, { "id": "scatter_plot" }, { "id": "score" }, { "id": "short_text" }, { "id": "show_chart" }, { "id": "space_bar" }, { "id": "strikethrough_s" }, { "id": "table_chart" }, { "id": "text_fields" }, { "id": "title" }, { "id": "vertical_align_bottom" }, { "id": "vertical_align_center" }, { "id": "vertical_align_top" }, { "id": "wrap_text" }], "name": "editor" }, { "icons": [{ "id": "attachment" }, { "id": "cloud" }, { "id": "cloud_circle" }, { "id": "cloud_done" }, { "id": "cloud_download" }, { "id": "cloud_off" }, { "id": "cloud_queue" }, { "id": "cloud_upload" }, { "id": "create_new_folder" }, { "id": "folder" }, { "id": "folder_open" }, { "id": "folder_shared" }], "name": "file" }, { "icons": [{ "id": "cast" }, { "id": "cast_connected" }, { "imageUrls": { "twotone": "twotone-cast_for_education-24px.svg", "sharp": "sharp-cast_for_education-24px.svg", "outline": "outline-cast_for_education-24px.svg", "round": "round-cast_for_education-24px.svg", "baseline": "baseline-cast_for_education-48px.svg" }, "id": "cast_for_education" }, { "id": "computer" }, { "id": "desktop_mac" }, { "id": "desktop_windows" }, { "id": "developer_board" }, { "id": "device_hub" }, { "id": "device_unknown" }, { "id": "devices_other" }, { "id": "dock" }, { "id": "gamepad" }, { "id": "headset" }, { "id": "headset_mic" }, { "id": "keyboard" }, { "id": "keyboard_arrow_down" }, { "id": "keyboard_arrow_left" }, { "id": "keyboard_arrow_right" }, { "id": "keyboard_arrow_up" }, { "id": "keyboard_backspace" }, { "id": "keyboard_capslock" }, { "id": "keyboard_hide" }, { "id": "keyboard_return" }, { "id": "keyboard_tab" }, { "id": "keyboard_voice" }, { "id": "laptop" }, { "id": "laptop_chromebook" }, { "id": "laptop_mac" }, { "id": "laptop_windows" }, { "id": "memory" }, { "id": "mouse" }, { "id": "phone_android" }, { "id": "phone_iphone" }, { "id": "phonelink" }, { "id": "phonelink_off" }, { "id": "power_input" }, { "id": "router" }, { "id": "scanner" }, { "id": "security" }, { "id": "sim_card" }, { "id": "smartphone" }, { "id": "speaker" }, { "id": "speaker_group" }, { "id": "tablet" }, { "id": "tablet_android" }, { "id": "tablet_mac" }, { "id": "toys" }, { "id": "tv" }, { "id": "videogame_asset" }, { "id": "watch" }], "name": "hardware" }, { "icons": [{ "id": "add_a_photo" }, { "id": "add_photo_alternate" }, { "id": "add_to_photos" }, { "id": "adjust" }, { "id": "assistant" }, { "id": "assistant_photo" }, { "id": "audiotrack" }, { "id": "blur_circular" }, { "id": "blur_linear" }, { "id": "blur_off" }, { "id": "blur_on" }, { "id": "brightness_1" }, { "id": "brightness_2" }, { "id": "brightness_3" }, { "id": "brightness_4" }, { "id": "brightness_5" }, { "id": "brightness_6" }, { "id": "brightness_7" }, { "id": "broken_image" }, { "id": "brush" }, { "id": "burst_mode" }, { "id": "camera" }, { "id": "camera_alt" }, { "id": "camera_front" }, { "id": "camera_rear" }, { "id": "camera_roll" }, { "id": "center_focus_strong" }, { "id": "center_focus_weak" }, { "id": "collections" }, { "id": "collections_bookmark" }, { "id": "color_lens" }, { "id": "colorize" }, { "id": "compare" }, { "id": "control_point" }, { "id": "control_point_duplicate" }, { "id": "crop" }, { "id": "crop_16_9" }, { "id": "crop_3_2" }, { "id": "crop_5_4" }, { "id": "crop_7_5" }, { "id": "crop_din" }, { "id": "crop_free" }, { "id": "crop_landscape" }, { "id": "crop_original" }, { "id": "crop_portrait" }, { "id": "crop_rotate" }, { "id": "crop_square" }, { "id": "dehaze" }, { "id": "details" }, { "id": "edit" }, { "id": "exposure" }, { "id": "exposure_neg_1" }, { "id": "exposure_neg_2" }, { "id": "exposure_plus_1" }, { "id": "exposure_plus_2" }, { "id": "exposure_zero" }, { "id": "filter" }, { "id": "filter_1" }, { "id": "filter_2" }, { "id": "filter_3" }, { "id": "filter_4" }, { "id": "filter_5" }, { "id": "filter_6" }, { "id": "filter_7" }, { "id": "filter_8" }, { "id": "filter_9" }, { "id": "filter_9_plus" }, { "id": "filter_b_and_w" }, { "id": "filter_center_focus" }, { "id": "filter_drama" }, { "id": "filter_frames" }, { "id": "filter_hdr" }, { "id": "filter_none" }, { "id": "filter_tilt_shift" }, { "id": "filter_vintage" }, { "id": "flare" }, { "id": "flash_auto" }, { "id": "flash_off" }, { "id": "flash_on" }, { "id": "flip" }, { "id": "gradient" }, { "id": "grain" }, { "id": "grid_off" }, { "id": "grid_on" }, { "id": "hdr_off" }, { "id": "hdr_on" }, { "id": "hdr_strong" }, { "id": "hdr_weak" }, { "id": "healing" }, { "id": "image" }, { "id": "image_aspect_ratio" }, { "id": "image_search" }, { "id": "iso" }, { "id": "landscape" }, { "id": "leak_add" }, { "id": "leak_remove" }, { "id": "lens" }, { "id": "linked_camera" }, { "id": "looks" }, { "id": "looks_3" }, { "id": "looks_4" }, { "id": "looks_5" }, { "id": "looks_6" }, { "id": "looks_one" }, { "id": "looks_two" }, { "id": "loupe" }, { "id": "monochrome_photos" }, { "id": "movie_creation" }, { "id": "movie_filter" }, { "id": "music_note" }, { "id": "music_off" }, { "id": "nature" }, { "id": "nature_people" }, { "id": "navigate_before" }, { "id": "navigate_next" }, { "id": "palette" }, { "id": "panorama" }, { "id": "panorama_fish_eye" }, { "id": "panorama_horizontal" }, { "id": "panorama_vertical" }, { "id": "panorama_wide_angle" }, { "id": "photo" }, { "id": "photo_album" }, { "id": "photo_camera" }, { "id": "photo_filter" }, { "id": "photo_library" }, { "id": "photo_size_select_actual" }, { "id": "photo_size_select_large" }, { "id": "photo_size_select_small" }, { "id": "picture_as_pdf" }, { "id": "portrait" }, { "id": "remove_red_eye" }, { "id": "rotate_90_degrees_ccw" }, { "id": "rotate_left" }, { "id": "rotate_right" }, { "id": "shutter_speed" }, { "id": "slideshow" }, { "id": "straighten" }, { "id": "style" }, { "id": "switch_camera" }, { "id": "switch_video" }, { "id": "tag_faces" }, { "id": "texture" }, { "id": "timelapse" }, { "id": "timer" }, { "id": "timer_10" }, { "id": "timer_3" }, { "id": "timer_off" }, { "id": "tonality" }, { "id": "transform" }, { "id": "tune" }, { "id": "view_comfy" }, { "id": "view_compact" }, { "id": "vignette" }, { "id": "wb_auto" }, { "id": "wb_cloudy" }, { "id": "wb_incandescent" }, { "id": "wb_iridescent" }, { "id": "wb_sunny" }], "name": "image" }, { "icons": [{ "id": "360" }, { "id": "add_location" }, { "id": "atm" }, { "id": "beenhere" }, { "id": "category" }, { "id": "compass_calibration" }, { "id": "departure_board" }, { "id": "directions" }, { "id": "directions_bike" }, { "id": "directions_boat" }, { "id": "directions_bus" }, { "id": "directions_car" }, { "id": "directions_railway" }, { "id": "directions_run" }, { "id": "directions_subway" }, { "id": "directions_transit" }, { "id": "directions_walk" }, { "id": "edit_attributes" }, { "id": "edit_location" }, { "id": "ev_station" }, { "id": "fastfood" }, { "id": "flight" }, { "id": "hotel" }, { "id": "layers" }, { "id": "layers_clear" }, { "id": "local_activity" }, { "id": "local_airport" }, { "id": "local_atm" }, { "id": "local_bar" }, { "id": "local_cafe" }, { "id": "local_car_wash" }, { "id": "local_convenience_store" }, { "id": "local_dining" }, { "id": "local_drink" }, { "id": "local_florist" }, { "id": "local_gas_station" }, { "id": "local_grocery_store" }, { "id": "local_hospital" }, { "id": "local_hotel" }, { "id": "local_laundry_service" }, { "id": "local_library" }, { "id": "local_mall" }, { "id": "local_movies" }, { "id": "local_offer" }, { "id": "local_parking" }, { "id": "local_pharmacy" }, { "id": "local_phone" }, { "id": "local_pizza" }, { "id": "local_play" }, { "id": "local_post_office" }, { "id": "local_printshop" }, { "id": "local_see" }, { "id": "local_shipping" }, { "id": "local_taxi" }, { "id": "map" }, { "id": "money" }, { "id": "my_location" }, { "id": "navigation" }, { "id": "near_me" }, { "id": "not_listed_location" }, { "id": "person_pin" }, { "id": "person_pin_circle" }, { "id": "pin_drop" }, { "id": "place" }, { "id": "rate_review" }, { "id": "restaurant" }, { "id": "restaurant_menu" }, { "id": "satellite" }, { "id": "store_mall_directory" }, { "id": "streetview" }, { "id": "subway" }, { "id": "terrain" }, { "id": "traffic" }, { "id": "train" }, { "id": "tram" }, { "id": "transfer_within_a_station" }, { "id": "transit_enterexit" }, { "id": "trip_origin" }, { "id": "zoom_out_map" }], "name": "maps" }, { "icons": [{ "id": "apps" }, { "id": "arrow_back" }, { "id": "arrow_back_ios" }, { "id": "arrow_downward" }, { "id": "arrow_drop_down" }, { "id": "arrow_drop_down_circle" }, { "id": "arrow_drop_up" }, { "id": "arrow_forward" }, { "id": "arrow_forward_ios" }, { "id": "arrow_left" }, { "id": "arrow_right" }, { "id": "arrow_upward" }, { "id": "cancel" }, { "id": "check" }, { "id": "chevron_left" }, { "id": "chevron_right" }, { "id": "close" }, { "id": "expand_less" }, { "id": "expand_more" }, { "id": "first_page" }, { "id": "fullscreen" }, { "id": "fullscreen_exit" }, { "id": "last_page" }, { "id": "menu" }, { "id": "more_horiz" }, { "id": "more_vert" }, { "id": "refresh" }, { "id": "subdirectory_arrow_left" }, { "id": "subdirectory_arrow_right" }, { "id": "unfold_less" }, { "id": "unfold_more" }], "name": "navigation" }, { "icons": [{ "id": "adb" }, { "id": "airline_seat_flat" }, { "id": "airline_seat_flat_angled" }, { "id": "airline_seat_individual_suite" }, { "id": "airline_seat_legroom_extra" }, { "id": "airline_seat_legroom_normal" }, { "id": "airline_seat_legroom_reduced" }, { "id": "airline_seat_recline_extra" }, { "id": "airline_seat_recline_normal" }, { "id": "bluetooth_audio" }, { "id": "confirmation_number" }, { "id": "disc_full" }, { "id": "drive_eta" }, { "id": "enhanced_encryption" }, { "id": "event_available" }, { "id": "event_busy" }, { "id": "event_note" }, { "id": "folder_special" }, { "id": "live_tv" }, { "id": "mms" }, { "id": "more" }, { "id": "network_check" }, { "id": "network_locked" }, { "id": "no_encryption" }, { "id": "ondemand_video" }, { "id": "personal_video" }, { "id": "phone_bluetooth_speaker" }, { "id": "phone_callback" }, { "id": "phone_forwarded" }, { "id": "phone_in_talk" }, { "id": "phone_locked" }, { "id": "phone_missed" }, { "id": "phone_paused" }, { "id": "power" }, { "id": "power_off" }, { "id": "priority_high" }, { "id": "sd_card" }, { "id": "sms" }, { "id": "sms_failed" }, { "id": "sync" }, { "id": "sync_disabled" }, { "id": "sync_problem" }, { "id": "system_update" }, { "id": "tap_and_play" }, { "id": "time_to_leave" }, { "id": "tv_off" }, { "id": "vibration" }, { "id": "voice_chat" }, { "id": "vpn_lock" }, { "id": "wc" }, { "id": "wifi" }, { "id": "wifi_off" }], "name": "notification" }, { "icons": [{ "id": "ac_unit" }, { "id": "airport_shuttle" }, { "id": "all_inclusive" }, { "id": "beach_access" }, { "id": "business_center" }, { "id": "casino" }, { "id": "child_care" }, { "id": "child_friendly" }, { "id": "fitness_center" }, { "id": "free_breakfast" }, { "id": "golf_course" }, { "id": "hot_tub" }, { "id": "kitchen" }, { "id": "meeting_room" }, { "id": "no_meeting_room" }, { "id": "pool" }, { "id": "room_service" }, { "id": "rv_hookup" }, { "id": "smoke_free" }, { "id": "smoking_rooms" }, { "id": "spa" }], "name": "places" }, { "icons": [{ "id": "cake" }, { "imageUrls": { "twotone": "twotone-domain-24px.svg", "sharp": "sharp-domain-24px.svg", "outline": "outline-domain-24px.svg", "round": "round-domain-24px.svg", "baseline": "baseline-domain-48px.svg" }, "id": "domain" }, { "id": "group" }, { "id": "group_add" }, { "id": "location_city" }, { "id": "mood" }, { "id": "mood_bad" }, { "id": "notifications" }, { "id": "notifications_active" }, { "id": "notifications_none" }, { "id": "notifications_off" }, { "id": "notifications_paused" }, { "id": "pages" }, { "id": "party_mode" }, { "id": "people" }, { "id": "people_outline" }, { "id": "person" }, { "id": "person_add" }, { "id": "person_outline" }, { "id": "plus_one" }, { "id": "poll" }, { "id": "public" }, { "id": "school" }, { "id": "sentiment_dissatisfied" }, { "id": "sentiment_satisfied" }, { "id": "sentiment_very_dissatisfied" }, { "id": "sentiment_very_satisfied" }, { "id": "share" }, { "id": "thumb_down_alt" }, { "id": "thumb_up_alt" }, { "id": "whatshot" }], "name": "social" }, { "icons": [{ "id": "check_box" }, { "id": "check_box_outline_blank" }, { "id": "indeterminate_check_box" }, { "id": "radio_button_checked" }, { "id": "radio_button_unchecked" }, { "id": "star" }, { "id": "star_border" }, { "id": "star_half" }, { "id": "toggle_off" }, { "id": "toggle_on" }], "name": "toggle" }] };
const nodes = [
    {
        name: 'Ganesh',
        cssClass: 'ngx-org-ceo',
        image: '',
        title: 'Chief Executive Officer',
        childs: [
            {
                name: 'Thomas Kurian',
                cssClass: 'ngx-org-ceo',
                image: '../assets/img/usre-logo.jpg',
                title: 'CEO, Google Cloud',
            },
            {
                name: 'Susan Wojcicki',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, YouTube',
                childs: [
                    {
                        name: 'Beau Avril',
                        cssClass: 'ngx-org-head',
                        image: 'assets/node.svg',
                        title: 'Global Head of Business Operations',
                        childs: []
                    },
                    {
                        name: 'Tara Walpert Levy',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Agency and Brand Solutions',
                        childs: []
                    },
                    {
                        name: 'Ariel Bardin',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Product Management',
                        childs: []
                    }
                ]
            },
            {
                name: 'Jeff Dean',
                cssClass: 'ngx-org-head',
                image: 'assets/node.svg',
                title: 'Head of Artificial Intelligence',
                childs: [
                    {
                        name: 'David Feinberg',
                        cssClass: 'ngx-org-ceo',
                        image: 'assets/node.svg',
                        title: 'CEO, Google Health',
                        childs: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Ganesh',
        cssClass: 'ngx-org-ceo',
        image: 'assets/node.svg',
        title: 'Chief Executive Officer',
        childs: [
            {
                name: 'Thomas Kurian',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, Google Cloud',
            },
            {
                name: 'Susan Wojcicki',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, YouTube',
                childs: [
                    {
                        name: 'Beau Avril',
                        cssClass: 'ngx-org-head',
                        image: 'assets/node.svg',
                        title: 'Global Head of Business Operations',
                        childs: []
                    },
                    {
                        name: 'Tara Walpert Levy',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Agency and Brand Solutions',
                        childs: []
                    },
                    {
                        name: 'Ariel Bardin',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Product Management',
                        childs: []
                    }
                ]
            },
            {
                name: 'Jeff Dean',
                cssClass: 'ngx-org-head',
                image: 'assets/node.svg',
                title: 'Head of Artificial Intelligence',
                childs: [
                    {
                        name: 'David Feinberg',
                        cssClass: 'ngx-org-ceo',
                        image: 'assets/node.svg',
                        title: 'CEO, Google Health',
                        childs: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Ganesh',
        cssClass: 'ngx-org-ceo',
        image: 'assets/node.svg',
        title: 'Chief Executive Officer',
        childs: [
            {
                name: 'Thomas Kurian',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, Google Cloud',
            },
            {
                name: 'Susan Wojcicki',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, YouTube',
                childs: [
                    {
                        name: 'Beau Avril',
                        cssClass: 'ngx-org-head',
                        image: 'assets/node.svg',
                        title: 'Global Head of Business Operations',
                        childs: []
                    },
                    {
                        name: 'Tara Walpert Levy',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Agency and Brand Solutions',
                        childs: []
                    },
                    {
                        name: 'Ariel Bardin',
                        cssClass: 'ngx-org-vp',
                        image: 'assets/node.svg',
                        title: 'VP, Product Management',
                        childs: []
                    }
                ]
            },
            {
                name: 'Jeff Dean',
                cssClass: 'ngx-org-head',
                image: 'assets/node.svg',
                title: 'Head of Artificial Intelligence',
                childs: [
                    {
                        name: 'David Feinberg',
                        cssClass: 'ngx-org-ceo',
                        image: 'assets/node.svg',
                        title: 'CEO, Google Health',
                        childs: []
                    }
                ]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=default~process-flow-editor-process-dashboard-process-dashboard-module~process-flow-editor-view-all-~d74b813e.js.map