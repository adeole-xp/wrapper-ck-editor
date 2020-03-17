/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/template-fields/template-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @(#)template-fields.component.ts Mar 11, 2020 Copyright 2020,Oversight Systems, Inc. Proprietary and confidential
 * @author adeole
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/**
 * This component class is used to handle event related operations.
 */
var TemplateFieldsComponent = /** @class */ (function () {
    function TemplateFieldsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.tabItems = [];
        this.emailTemplates = [];
    }
    /**
     * @return {?}
     */
    TemplateFieldsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createForm();
    };
    /**
     * To change the Email template
     *
     * @param value: string
     */
    /**
     * To change the Email template
     *
     * @param {?} value
     * @return {?}
     */
    TemplateFieldsComponent.prototype.changeTemplate = /**
     * To change the Email template
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var idLocaleData = value.split(',');
        /** @type {?} */
        var templateId = Number(idLocaleData[0]);
        /** @type {?} */
        var templateLocale = idLocaleData[1];
        /** @type {?} */
        var selectedTemplate = this.emailTemplates.filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return obj.templateId === templateId && obj.locale === templateLocale; }))[0];
        console.log(selectedTemplate);
    };
    /**
     * To create a form for Email Template
     */
    /**
     * To create a form for Email Template
     * @private
     * @return {?}
     */
    TemplateFieldsComponent.prototype.createForm = /**
     * To create a form for Email Template
     * @private
     * @return {?}
     */
    function () {
        this.emailForm = this.formBuilder.group({
            locale: '',
            toList: '',
            fromAddress: '',
            ccList: '',
            bccList: '',
            subject: '',
            emailBody: '',
            onBehalfOf: ''
        });
    };
    TemplateFieldsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jhi-template-fields',
                    template: "\n    <div class=\"col-md-12 mt-3 p-0\">\n    <p-tabView>\n        <p-tabPanel [header]=\"tabItems[0]?.header\" [selected]=\"true\">\n        <form [formGroup]=\"emailForm\" autocomplete=\"off\">\n            <div id=\"frm-fields\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group row mb-1\">\n                            <label class=\"col-sm-1 col-form-label\" for=\"frm-tmplt\"\n                                id=\"lbl-template\">{{'global.form.labels.template' | translate}}</label>\n                            <div class=\"col-sm-5\">\n                                <select #templateDropdown class=\"form-control form-control-sm\" id=\"frm-tmplt\"\n                                    (change)=\"changeTemplate(templateDropdown.value)\" formControlName=\"locale\">\n                                    <option *ngFor=\" let template of emailTemplates\"\n                                        [value]=\"template?.templateId+',' +template?.locale\"\n                                        [title]=\"template?.templateName\">\n                                        {{template.templateName}}\n                                    </option>\n                                </select>\n                            </div>\n                            <span class=\"col-cstm-1 pr-0\"></span>\n                            <label *ngIf=\"emailForm.get('onBehalfOf').value\" class=\"col-sm-1 col-form-label pl-0\"\n                                for=\"frm-tmplt\" id=\"lbl-sender\">{{'global.form.labels.sender' | translate}}</label>\n                            <div *ngIf=\"emailForm.get('onBehalfOf').value\" class=\"col-sm-4 pl-0 mt-1\" id=\"val-sender\">\n                                {{emailForm.get('onBehalfOf').value}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group row mb-1\">\n                            <label for=\"frm-to\" class=\"col-sm-1 col-form-label\"\n                                id=\"lbl-to\">{{'global.form.labels.to' | translate}}</label>\n                            <div class=\"col-sm-5\">\n                                <input formControlName=\"toList\" type=\"text\" class=\"form-control form-control-sm\"\n                                    id=\"frm-to\">\n                            </div>\n                            <span class=\"col-cstm-1 icon-info-bg icon_info pr-0\">\n                                <span class=\"tooltipTxt tooltipTop\"\n                                    id=\"lbl-description\">{{'sendEvent.messageDesc' | translate}}</span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group row mb-1\">\n                            <label for=\"frm-from\" class=\"col-sm-1 col-form-label\"\n                                id=\"lbl-to\">{{'global.form.labels.from' | translate}}</label>\n                            <div class=\"col-sm-5\">\n                                <input formControlName=\"fromAddress\" type=\"text\" class=\"form-control form-control-sm\"\n                                    id=\"frm-from\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group row mb-1\">\n                            <label for=\"frm-cc\" class=\"col-sm-1 col-form-label\"\n                                id=\"lbl-cc\">{{'global.form.labels.cc' | translate}}</label>\n                            <div class=\"col-sm-5\">\n                                <input formControlName=\"ccList\" type=\"text\" class=\"form-control form-control-sm\"\n                                    id=\"frm-cc\">\n                            </div>\n                            <span class=\"col-cstm-1 pr-0\"></span>\n                            <label for=\"frm-bcc\" class=\"col-sm-1 col-form-label pl-0\"\n                                id=\"lbl-bcc\">{{'global.form.labels.bcc' | translate}}</label>\n                            <div class=\"col-sm-4 pl-0\">\n                                <input formControlName=\"bccList\" type=\"text\" class=\"form-control form-control-sm\"\n                                    id=\"frm-bcc\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div>\n                </div>\n            </div>\n        </form>\n            <jhi-ck-editor #ckEditor [apiToken]=\"apiToken\" [autoFocus]=\"autoFocus\" [editorValue]=\"editorData\"\n                [editorId]=\"'email-editor'\">\n            </jhi-ck-editor>\n        </p-tabPanel>\n        <p-tabPanel [header]=\"tabItems[1]?.header\">\n            Content 2\n        </p-tabPanel>\n        <p-tabPanel [header]=\"tabItems[2]?.header\">\n            Content 3\n        </p-tabPanel>\n</p-tabView>\n</div>",
                    styles: [".icon_info .tooltipTxt{visibility:hidden;width:500px;background-color:#f8f6d7;color:#836a17;text-align:center;padding:8px 0;position:absolute;z-index:1}.tooltipTop{bottom:94%;left:55%;margin-left:-60px}.icon_info:hover .tooltipTxt{visibility:visible}.col-cstm-1{flex:0 0 3%;max-width:3%}.icon_info{height:20px;width:1.5em;background-position:-17px -1629px}.icon-info-bg{background:url(../../../lib/icons/icons.svg) no-repeat;display:inline-block;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    TemplateFieldsComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    TemplateFieldsComponent.propDecorators = {
        tabItems: [{ type: Input }],
        editorData: [{ type: Input }],
        autoFocus: [{ type: Input }],
        apiToken: [{ type: Input }],
        emailTemplates: [{ type: Input }]
    };
    return TemplateFieldsComponent;
}());
export { TemplateFieldsComponent };
if (false) {
    /** @type {?} */
    TemplateFieldsComponent.prototype.tabItems;
    /** @type {?} */
    TemplateFieldsComponent.prototype.editorData;
    /** @type {?} */
    TemplateFieldsComponent.prototype.autoFocus;
    /** @type {?} */
    TemplateFieldsComponent.prototype.apiToken;
    /** @type {?} */
    TemplateFieldsComponent.prototype.emailTemplates;
    /** @type {?} */
    TemplateFieldsComponent.prototype.emailForm;
    /**
     * @type {?}
     * @private
     */
    TemplateFieldsComponent.prototype.formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90ZW1wbGF0ZS1maWVsZHMvdGVtcGxhdGUtZmllbGRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLeEQ7SUF5R0ksaUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTm5DLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFJckIsbUJBQWMsR0FBVSxFQUFFLENBQUM7SUFJcEMsQ0FBQzs7OztJQUNELDBDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGdEQUFjOzs7Ozs7SUFBZCxVQUFlLEtBQWE7O1lBQ2xCLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDL0IsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3BDLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDOztZQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssY0FBYyxFQUE5RCxDQUE4RCxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLDRDQUFVOzs7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDOztnQkEzSUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxzc0tBNkZQOztpQkFFTjs7OztnQkF0R21CLFdBQVc7OzsyQkF3RzFCLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSzs7SUFxQ1YsOEJBQUM7Q0FBQSxBQTVJRCxJQTRJQztTQTFDWSx1QkFBdUI7OztJQUNoQywyQ0FBOEI7O0lBQzlCLDZDQUF5Qjs7SUFDekIsNENBQTRCOztJQUM1QiwyQ0FBMEI7O0lBQzFCLGlEQUFvQzs7SUFDcEMsNENBQXFCOzs7OztJQUNULDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQCgjKXRlbXBsYXRlLWZpZWxkcy5jb21wb25lbnQudHMgTWFyIDExLCAyMDIwIENvcHlyaWdodCAyMDIwLE92ZXJzaWdodCBTeXN0ZW1zLCBJbmMuIFByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcbiAqIEBhdXRob3IgYWRlb2xlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNsYXNzIGlzIHVzZWQgdG8gaGFuZGxlIGV2ZW50IHJlbGF0ZWQgb3BlcmF0aW9ucy5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdGVtcGxhdGUtZmllbGRzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbXQtMyBwLTBcIj5cbiAgICA8cC10YWJWaWV3PlxuICAgICAgICA8cC10YWJQYW5lbCBbaGVhZGVyXT1cInRhYkl0ZW1zWzBdPy5oZWFkZXJcIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImVtYWlsRm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZybS1maWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEgY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJmcm0tdG1wbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxibC10ZW1wbGF0ZVwiPnt7J2dsb2JhbC5mb3JtLmxhYmVscy50ZW1wbGF0ZScgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgI3RlbXBsYXRlRHJvcGRvd24gY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgaWQ9XCJmcm0tdG1wbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJjaGFuZ2VUZW1wbGF0ZSh0ZW1wbGF0ZURyb3Bkb3duLnZhbHVlKVwiIGZvcm1Db250cm9sTmFtZT1cImxvY2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIgbGV0IHRlbXBsYXRlIG9mIGVtYWlsVGVtcGxhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidGVtcGxhdGU/LnRlbXBsYXRlSWQrJywnICt0ZW1wbGF0ZT8ubG9jYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwidGVtcGxhdGU/LnRlbXBsYXRlTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGVtcGxhdGUudGVtcGxhdGVOYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1jc3RtLTEgcHItMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJlbWFpbEZvcm0uZ2V0KCdvbkJlaGFsZk9mJykudmFsdWVcIiBjbGFzcz1cImNvbC1zbS0xIGNvbC1mb3JtLWxhYmVsIHBsLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJmcm0tdG1wbHRcIiBpZD1cImxibC1zZW5kZXJcIj57eydnbG9iYWwuZm9ybS5sYWJlbHMuc2VuZGVyJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW1haWxGb3JtLmdldCgnb25CZWhhbGZPZicpLnZhbHVlXCIgY2xhc3M9XCJjb2wtc20tNCBwbC0wIG10LTFcIiBpZD1cInZhbC1zZW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlbWFpbEZvcm0uZ2V0KCdvbkJlaGFsZk9mJykudmFsdWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnJtLXRvXCIgY2xhc3M9XCJjb2wtc20tMSBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGJsLXRvXCI+e3snZ2xvYmFsLmZvcm0ubGFiZWxzLnRvJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInRvTGlzdFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnJtLXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2wtY3N0bS0xIGljb24taW5mby1iZyBpY29uX2luZm8gcHItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXBUeHQgdG9vbHRpcFRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxibC1kZXNjcmlwdGlvblwiPnt7J3NlbmRFdmVudC5tZXNzYWdlRGVzYycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmcm0tZnJvbVwiIGNsYXNzPVwiY29sLXNtLTEgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxibC10b1wiPnt7J2dsb2JhbC5mb3JtLmxhYmVscy5mcm9tJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZyb21BZGRyZXNzXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm0tZnJvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmcm0tY2NcIiBjbGFzcz1cImNvbC1zbS0xIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYmwtY2NcIj57eydnbG9iYWwuZm9ybS5sYWJlbHMuY2MnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiY2NMaXN0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm0tY2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1jc3RtLTEgcHItMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnJtLWJjY1wiIGNsYXNzPVwiY29sLXNtLTEgY29sLWZvcm0tbGFiZWwgcGwtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGJsLWJjY1wiPnt7J2dsb2JhbC5mb3JtLmxhYmVscy5iY2MnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBwbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJiY2NMaXN0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm0tYmNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8amhpLWNrLWVkaXRvciAjY2tFZGl0b3IgW2FwaVRva2VuXT1cImFwaVRva2VuXCIgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNcIiBbZWRpdG9yVmFsdWVdPVwiZWRpdG9yRGF0YVwiXG4gICAgICAgICAgICAgICAgW2VkaXRvcklkXT1cIidlbWFpbC1lZGl0b3InXCI+XG4gICAgICAgICAgICA8L2poaS1jay1lZGl0b3I+XG4gICAgICAgIDwvcC10YWJQYW5lbD5cbiAgICAgICAgPHAtdGFiUGFuZWwgW2hlYWRlcl09XCJ0YWJJdGVtc1sxXT8uaGVhZGVyXCI+XG4gICAgICAgICAgICBDb250ZW50IDJcbiAgICAgICAgPC9wLXRhYlBhbmVsPlxuICAgICAgICA8cC10YWJQYW5lbCBbaGVhZGVyXT1cInRhYkl0ZW1zWzJdPy5oZWFkZXJcIj5cbiAgICAgICAgICAgIENvbnRlbnQgM1xuICAgICAgICA8L3AtdGFiUGFuZWw+XG48L3AtdGFiVmlldz5cbjwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVtcGxhdGUtZmllbGQtc3R5bGUuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRmllbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0YWJJdGVtczogYW55W10gPSBbXTtcbiAgICBASW5wdXQoKSBlZGl0b3JEYXRhOiBhbnk7XG4gICAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFwaVRva2VuOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW1haWxUZW1wbGF0ZXM6IGFueVtdID0gW107XG4gICAgZW1haWxGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcblxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG8gY2hhbmdlIHRoZSBFbWFpbCB0ZW1wbGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlOiBzdHJpbmdcbiAgICAgKi9cbiAgICBjaGFuZ2VUZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGlkTG9jYWxlRGF0YSA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlSWQgPSBOdW1iZXIoaWRMb2NhbGVEYXRhWzBdKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVMb2NhbGUgPSBpZExvY2FsZURhdGFbMV07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGVtcGxhdGUgPSB0aGlzLmVtYWlsVGVtcGxhdGVzLmZpbHRlcihvYmogPT4gb2JqLnRlbXBsYXRlSWQgPT09IHRlbXBsYXRlSWQgJiYgb2JqLmxvY2FsZSA9PT0gdGVtcGxhdGVMb2NhbGUpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUbyBjcmVhdGUgYSBmb3JtIGZvciBFbWFpbCBUZW1wbGF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybSgpIHtcbiAgICAgICAgdGhpcy5lbWFpbEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGxvY2FsZTogJycsXG4gICAgICAgICAgICB0b0xpc3Q6ICcnLFxuICAgICAgICAgICAgZnJvbUFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgY2NMaXN0OiAnJyxcbiAgICAgICAgICAgIGJjY0xpc3Q6ICcnLFxuICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICBlbWFpbEJvZHk6ICcnLFxuICAgICAgICAgICAgb25CZWhhbGZPZjogJydcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19