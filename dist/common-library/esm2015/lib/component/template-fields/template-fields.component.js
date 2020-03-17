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
export class TemplateFieldsComponent {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.tabItems = [];
        this.emailTemplates = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createForm();
    }
    /**
     * To change the Email template
     *
     * @param {?} value
     * @return {?}
     */
    changeTemplate(value) {
        /** @type {?} */
        const idLocaleData = value.split(',');
        /** @type {?} */
        const templateId = Number(idLocaleData[0]);
        /** @type {?} */
        const templateLocale = idLocaleData[1];
        /** @type {?} */
        const selectedTemplate = this.emailTemplates.filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => obj.templateId === templateId && obj.locale === templateLocale))[0];
        console.log(selectedTemplate);
    }
    /**
     * To create a form for Email Template
     * @private
     * @return {?}
     */
    createForm() {
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
    }
}
TemplateFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'jhi-template-fields',
                template: `
    <div class="col-md-12 mt-3 p-0">
    <p-tabView>
        <p-tabPanel [header]="tabItems[0]?.header" [selected]="true">
        <form [formGroup]="emailForm" autocomplete="off">
            <div id="frm-fields">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row mb-1">
                            <label class="col-sm-1 col-form-label" for="frm-tmplt"
                                id="lbl-template">{{'global.form.labels.template' | translate}}</label>
                            <div class="col-sm-5">
                                <select #templateDropdown class="form-control form-control-sm" id="frm-tmplt"
                                    (change)="changeTemplate(templateDropdown.value)" formControlName="locale">
                                    <option *ngFor=" let template of emailTemplates"
                                        [value]="template?.templateId+',' +template?.locale"
                                        [title]="template?.templateName">
                                        {{template.templateName}}
                                    </option>
                                </select>
                            </div>
                            <span class="col-cstm-1 pr-0"></span>
                            <label *ngIf="emailForm.get('onBehalfOf').value" class="col-sm-1 col-form-label pl-0"
                                for="frm-tmplt" id="lbl-sender">{{'global.form.labels.sender' | translate}}</label>
                            <div *ngIf="emailForm.get('onBehalfOf').value" class="col-sm-4 pl-0 mt-1" id="val-sender">
                                {{emailForm.get('onBehalfOf').value}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row mb-1">
                            <label for="frm-to" class="col-sm-1 col-form-label"
                                id="lbl-to">{{'global.form.labels.to' | translate}}</label>
                            <div class="col-sm-5">
                                <input formControlName="toList" type="text" class="form-control form-control-sm"
                                    id="frm-to">
                            </div>
                            <span class="col-cstm-1 icon-info-bg icon_info pr-0">
                                <span class="tooltipTxt tooltipTop"
                                    id="lbl-description">{{'sendEvent.messageDesc' | translate}}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row mb-1">
                            <label for="frm-from" class="col-sm-1 col-form-label"
                                id="lbl-to">{{'global.form.labels.from' | translate}}</label>
                            <div class="col-sm-5">
                                <input formControlName="fromAddress" type="text" class="form-control form-control-sm"
                                    id="frm-from">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row mb-1">
                            <label for="frm-cc" class="col-sm-1 col-form-label"
                                id="lbl-cc">{{'global.form.labels.cc' | translate}}</label>
                            <div class="col-sm-5">
                                <input formControlName="ccList" type="text" class="form-control form-control-sm"
                                    id="frm-cc">
                            </div>
                            <span class="col-cstm-1 pr-0"></span>
                            <label for="frm-bcc" class="col-sm-1 col-form-label pl-0"
                                id="lbl-bcc">{{'global.form.labels.bcc' | translate}}</label>
                            <div class="col-sm-4 pl-0">
                                <input formControlName="bccList" type="text" class="form-control form-control-sm"
                                    id="frm-bcc">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </form>
            <jhi-ck-editor #ckEditor [apiToken]="apiToken" [autoFocus]="autoFocus" [editorValue]="editorData"
                [editorId]="'email-editor'">
            </jhi-ck-editor>
        </p-tabPanel>
        <p-tabPanel [header]="tabItems[1]?.header">
            Content 2
        </p-tabPanel>
        <p-tabPanel [header]="tabItems[2]?.header">
            Content 3
        </p-tabPanel>
</p-tabView>
</div>`,
                styles: [".icon_info .tooltipTxt{visibility:hidden;width:500px;background-color:#f8f6d7;color:#836a17;text-align:center;padding:8px 0;position:absolute;z-index:1}.tooltipTop{bottom:94%;left:55%;margin-left:-60px}.icon_info:hover .tooltipTxt{visibility:visible}.col-cstm-1{flex:0 0 3%;max-width:3%}.icon_info{height:20px;width:1.5em;background-position:-17px -1629px}.icon-info-bg{background:url(../../../lib/icons/icons.svg) no-repeat;display:inline-block;cursor:pointer}"]
            }] }
];
/** @nocollapse */
TemplateFieldsComponent.ctorParameters = () => [
    { type: FormBuilder }
];
TemplateFieldsComponent.propDecorators = {
    tabItems: [{ type: Input }],
    editorData: [{ type: Input }],
    autoFocus: [{ type: Input }],
    apiToken: [{ type: Input }],
    emailTemplates: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90ZW1wbGF0ZS1maWVsZHMvdGVtcGxhdGUtZmllbGRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUF1R3hELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFPaEMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFObkMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUlyQixtQkFBYyxHQUFVLEVBQUUsQ0FBQztJQUlwQyxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7O0lBT0QsY0FBYyxDQUFDLEtBQWE7O2NBQ2xCLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDL0IsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ3BDLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDOztjQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFLTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQTNJSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E2RlA7O2FBRU47Ozs7WUF0R21CLFdBQVc7Ozt1QkF3RzFCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7OztJQUpOLDJDQUE4Qjs7SUFDOUIsNkNBQXlCOztJQUN6Qiw0Q0FBNEI7O0lBQzVCLDJDQUEwQjs7SUFDMUIsaURBQW9DOztJQUNwQyw0Q0FBcUI7Ozs7O0lBQ1QsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAKCMpdGVtcGxhdGUtZmllbGRzLmNvbXBvbmVudC50cyBNYXIgMTEsIDIwMjAgQ29weXJpZ2h0IDIwMjAsT3ZlcnNpZ2h0IFN5c3RlbXMsIEluYy4gUHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbFxuICogQGF1dGhvciBhZGVvbGVcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgY2xhc3MgaXMgdXNlZCB0byBoYW5kbGUgZXZlbnQgcmVsYXRlZCBvcGVyYXRpb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS10ZW1wbGF0ZS1maWVsZHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtdC0zIHAtMFwiPlxuICAgIDxwLXRhYlZpZXc+XG4gICAgICAgIDxwLXRhYlBhbmVsIFtoZWFkZXJdPVwidGFiSXRlbXNbMF0/LmhlYWRlclwiIFtzZWxlY3RlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZW1haWxGb3JtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZnJtLWZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMSBjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImZybS10bXBsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGJsLXRlbXBsYXRlXCI+e3snZ2xvYmFsLmZvcm0ubGFiZWxzLnRlbXBsYXRlJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjdGVtcGxhdGVEcm9wZG93biBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiBpZD1cImZybS10bXBsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZVRlbXBsYXRlKHRlbXBsYXRlRHJvcGRvd24udmFsdWUpXCIgZm9ybUNvbnRyb2xOYW1lPVwibG9jYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cIiBsZXQgdGVtcGxhdGUgb2YgZW1haWxUZW1wbGF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0ZW1wbGF0ZT8udGVtcGxhdGVJZCsnLCcgK3RlbXBsYXRlPy5sb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJ0ZW1wbGF0ZT8udGVtcGxhdGVOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0ZW1wbGF0ZS50ZW1wbGF0ZU5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLWNzdG0tMSBwci0wXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImVtYWlsRm9ybS5nZXQoJ29uQmVoYWxmT2YnKS52YWx1ZVwiIGNsYXNzPVwiY29sLXNtLTEgY29sLWZvcm0tbGFiZWwgcGwtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImZybS10bXBsdFwiIGlkPVwibGJsLXNlbmRlclwiPnt7J2dsb2JhbC5mb3JtLmxhYmVscy5zZW5kZXInIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbWFpbEZvcm0uZ2V0KCdvbkJlaGFsZk9mJykudmFsdWVcIiBjbGFzcz1cImNvbC1zbS00IHBsLTAgbXQtMVwiIGlkPVwidmFsLXNlbmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VtYWlsRm9ybS5nZXQoJ29uQmVoYWxmT2YnKS52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmcm0tdG9cIiBjbGFzcz1cImNvbC1zbS0xIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYmwtdG9cIj57eydnbG9iYWwuZm9ybS5sYWJlbHMudG8nIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidG9MaXN0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm0tdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC1jc3RtLTEgaWNvbi1pbmZvLWJnIGljb25faW5mbyBwci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcFR4dCB0b29sdGlwVG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGJsLWRlc2NyaXB0aW9uXCI+e3snc2VuZEV2ZW50Lm1lc3NhZ2VEZXNjJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZybS1mcm9tXCIgY2xhc3M9XCJjb2wtc20tMSBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGJsLXRvXCI+e3snZ2xvYmFsLmZvcm0ubGFiZWxzLmZyb20nIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZnJvbUFkZHJlc3NcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZybS1mcm9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZybS1jY1wiIGNsYXNzPVwiY29sLXNtLTEgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxibC1jY1wiPnt7J2dsb2JhbC5mb3JtLmxhYmVscy5jYycgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJjY0xpc3RcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZybS1jY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLWNzdG0tMSBwci0wXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmcm0tYmNjXCIgY2xhc3M9XCJjb2wtc20tMSBjb2wtZm9ybS1sYWJlbCBwbC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYmwtYmNjXCI+e3snZ2xvYmFsLmZvcm0ubGFiZWxzLmJjYycgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IHBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImJjY0xpc3RcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZybS1iY2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxqaGktY2stZWRpdG9yICNja0VkaXRvciBbYXBpVG9rZW5dPVwiYXBpVG9rZW5cIiBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiIFtlZGl0b3JWYWx1ZV09XCJlZGl0b3JEYXRhXCJcbiAgICAgICAgICAgICAgICBbZWRpdG9ySWRdPVwiJ2VtYWlsLWVkaXRvcidcIj5cbiAgICAgICAgICAgIDwvamhpLWNrLWVkaXRvcj5cbiAgICAgICAgPC9wLXRhYlBhbmVsPlxuICAgICAgICA8cC10YWJQYW5lbCBbaGVhZGVyXT1cInRhYkl0ZW1zWzFdPy5oZWFkZXJcIj5cbiAgICAgICAgICAgIENvbnRlbnQgMlxuICAgICAgICA8L3AtdGFiUGFuZWw+XG4gICAgICAgIDxwLXRhYlBhbmVsIFtoZWFkZXJdPVwidGFiSXRlbXNbMl0/LmhlYWRlclwiPlxuICAgICAgICAgICAgQ29udGVudCAzXG4gICAgICAgIDwvcC10YWJQYW5lbD5cbjwvcC10YWJWaWV3PlxuPC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFsnLi90ZW1wbGF0ZS1maWVsZC1zdHlsZS5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVGaWVsZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRhYkl0ZW1zOiBhbnlbXSA9IFtdO1xuICAgIEBJbnB1dCgpIGVkaXRvckRhdGE6IGFueTtcbiAgICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXBpVG9rZW46IHN0cmluZztcbiAgICBASW5wdXQoKSBlbWFpbFRlbXBsYXRlczogYW55W10gPSBbXTtcbiAgICBlbWFpbEZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuXG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUbyBjaGFuZ2UgdGhlIEVtYWlsIHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWU6IHN0cmluZ1xuICAgICAqL1xuICAgIGNoYW5nZVRlbXBsYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaWRMb2NhbGVEYXRhID0gdmFsdWUuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVJZCA9IE51bWJlcihpZExvY2FsZURhdGFbMF0pO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZUxvY2FsZSA9IGlkTG9jYWxlRGF0YVsxXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZW1wbGF0ZSA9IHRoaXMuZW1haWxUZW1wbGF0ZXMuZmlsdGVyKG9iaiA9PiBvYmoudGVtcGxhdGVJZCA9PT0gdGVtcGxhdGVJZCAmJiBvYmoubG9jYWxlID09PSB0ZW1wbGF0ZUxvY2FsZSlbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGVtcGxhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0ZSBhIGZvcm0gZm9yIEVtYWlsIFRlbXBsYXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtKCkge1xuICAgICAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgbG9jYWxlOiAnJyxcbiAgICAgICAgICAgIHRvTGlzdDogJycsXG4gICAgICAgICAgICBmcm9tQWRkcmVzczogJycsXG4gICAgICAgICAgICBjY0xpc3Q6ICcnLFxuICAgICAgICAgICAgYmNjTGlzdDogJycsXG4gICAgICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgICAgIGVtYWlsQm9keTogJycsXG4gICAgICAgICAgICBvbkJlaGFsZk9mOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=