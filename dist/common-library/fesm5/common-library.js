import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { Injectable, Component, HostListener, Input, ViewChild, ViewEncapsulation, defineInjectable, NgModule } from '@angular/core';
import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLibraryService = /** @class */ (function () {
    function CommonLibraryService() {
    }
    CommonLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommonLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonLibraryService.ngInjectableDef = defineInjectable({ factory: function CommonLibraryService_Factory() { return new CommonLibraryService(); }, token: CommonLibraryService, providedIn: "root" });
    return CommonLibraryService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLibraryComponent = /** @class */ (function () {
    function CommonLibraryComponent() {
    }
    /**
     * @return {?}
     */
    CommonLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CommonLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jhi-common-library',
                    template: "\n    <p>\n      common-library works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CommonLibraryComponent.ctorParameters = function () { return []; };
    return CommonLibraryComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/template-fields/template-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/ck-editor/enums.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CUSTOM_EVENTS = {
    MAIN_COMPONENT: "MAIN_COMPONENT",
    UPDATE_SESSION_INTERUPT: "UPDATE_SESSION_INTERUPT",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/ck-editor/ck-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component class handles the event message template related operations.
 * @author adeole
 */
var CkEditorComponent = /** @class */ (function () {
    /**
     * This constructor inject the services.
     *
     * @param wbLocalStorageService WBLocalStorageService
     * @param sessionStorage SessionStorageService
     */
    function CkEditorComponent(eventManager) {
        this.eventManager = eventManager;
        this.autoFocus = false;
        this.editorId = 'email-editor';
    }
    /**
     * This default life-cycle method initilize the ck-editor.
     */
    /**
     * This default life-cycle method initilize the ck-editor.
     * @return {?}
     */
    CkEditorComponent.prototype.ngAfterViewInit = /**
     * This default life-cycle method initilize the ck-editor.
     * @return {?}
     */
    function () {
        this.initCkEditor();
    };
    /**
     * The method is used to get the element height.
     *
     * @returns height number
     */
    /**
     * The method is used to get the element height.
     *
     * @return {?} height number
     */
    CkEditorComponent.prototype.getOffsetHeight = /**
     * The method is used to get the element height.
     *
     * @return {?} height number
     */
    function () {
        /** @type {?} */
        var defaultPadding = 30;
        /** @type {?} */
        var frmFieldElement = ((/** @type {?} */ (document.querySelector('#send-event #frm-fields'))));
        /** @type {?} */
        var frmSaveElement = ((/** @type {?} */ (document.querySelector('#send-event #frm-save'))));
        /** @type {?} */
        var sendEventElement = ((/** @type {?} */ (document.querySelector('#send-event'))));
        /** @type {?} */
        var frmFieldHeight = frmFieldElement ? frmFieldElement.offsetHeight : 0;
        /** @type {?} */
        var frmSaveHeight = frmSaveElement ? frmSaveElement.offsetHeight : 0;
        /** @type {?} */
        var sendEventHeight = sendEventElement ? sendEventElement.offsetHeight : 0;
        return sendEventHeight && frmFieldHeight && frmSaveHeight ? sendEventHeight - frmFieldHeight - frmSaveHeight - defaultPadding : 0;
    };
    /**
     * The method is used to get the editor data
     *
     * @returns editorData any
     */
    /**
     * The method is used to get the editor data
     *
     * @return {?} editorData any
     */
    CkEditorComponent.prototype.getEditorData = /**
     * The method is used to get the editor data
     *
     * @return {?} editorData any
     */
    function () {
        return this.ckeditorInstance.getData();
    };
    /**
     * This event method is used to handle window resize.
     */
    /**
     * This event method is used to handle window resize.
     * @param {?} event
     * @return {?}
     */
    CkEditorComponent.prototype.onResize = /**
     * This event method is used to handle window resize.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.resizeEditor();
    };
    /**
     * To initialise the ckeditor
     */
    /**
     * To initialise the ckeditor
     * @private
     * @return {?}
     */
    CkEditorComponent.prototype.initCkEditor = /**
     * To initialise the ckeditor
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ckeditorInstance = CKEDITOR.replace(this.editorId, {
            startupFocus: this.autoFocus,
            autoParagraph: false,
            fillEmptyBlocks: false,
            enterMode: CKEDITOR.ENTER_BR,
            forceEnterMode: false,
            ignoreEmptyParagraph: false,
            resize_enabled: false,
            allowedContent: true,
            removePlugins: 'elementspath',
            height: '290px',
            disableNativeSpellChecker: false,
            extraPlugins: 'uploadimage',
            uploadUrl: 'api/template/image',
            filebrowserImageUploadUrl: 'api/template/image',
            fontSize_sizes: '8/8pt;9/9pt;10/10pt;11/11pt;12/12pt;14/14pt;16/16pt;18/18pt;20/20pt;22/22pt;24/24pt;26/26pt;28/28pt;36/36pt;48/48pt;72/72pt',
            toolbarGroups: this.getToolbarGroups(),
            removeButtons: this.removeOtherToolbars(),
            removeDialogTabs: 'link:upload;image:Upload;image:Link;image:advanced;table:advanced',
            image_previewText: ' '
        });
        this.ckeditorInstance.on('instanceReady', (/**
         * @return {?}
         */
        function () {
            _this.ckeditorInstance.setData(_this.editorValue, (/**
             * @return {?}
             */
            function () {
                _this.ckeditorInstance.resetUndo();
            }));
        }));
        this.ckeditorInstance.on('change', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.eventManager.broadcast({ name: CUSTOM_EVENTS.MAIN_COMPONENT, content: CUSTOM_EVENTS.UPDATE_SESSION_INTERUPT });
        }));
        this.ckeditorInstance.on('loaded', (/**
         * @return {?}
         */
        function () {
            _this.resizeEditor();
        }));
        this.ckeditorInstance.on('fileUploadRequest', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            /** @type {?} */
            var fileLoader = evt.data.fileLoader;
            /** @type {?} */
            var formData = new FormData();
            /** @type {?} */
            var xhr = fileLoader.xhr;
            xhr.open('POST', fileLoader.uploadUrl, true);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            if (_this.apiToken) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + _this.apiToken);
            }
            xhr.send(formData);
            evt.stop();
        }));
        this.ckeditorInstance.on('fileUploadResponse', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            evt.stop();
            /** @type {?} */
            var data = evt.data;
            /** @type {?} */
            var xhr = data.fileLoader.xhr;
            /** @type {?} */
            var response = xhr.responseText.split('|');
            if (response[1]) {
                data.message = response[1];
                evt.cancel();
            }
            else {
                /** @type {?} */
                var responseData = JSON.parse(response[0]);
                data.fileName = responseData.fileName;
                data.url = responseData.url;
            }
        }));
    };
    /**
     * Return toolbar group options for the ckeditor
     */
    /**
     * Return toolbar group options for the ckeditor
     * @private
     * @return {?}
     */
    CkEditorComponent.prototype.getToolbarGroups = /**
     * Return toolbar group options for the ckeditor
     * @private
     * @return {?}
     */
    function () {
        return [
            {
                name: 'document',
                groups: ['selection', 'mode', 'document', 'doctools']
            },
            {
                name: 'clipboard',
                groups: ['clipboard', 'undo']
            },
            {
                name: 'editing',
                groups: ['find', 'spellchecker', 'editing']
            },
            {
                name: 'forms',
                groups: ['forms']
            },
            {
                name: 'insert',
                groups: ['insert']
            },
            {
                name: 'basicstyles',
                groups: ['basicstyles', 'cleanup']
            },
            {
                name: 'paragraph',
                groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']
            },
            {
                name: 'links',
                groups: ['links']
            },
            {
                name: 'styles',
                groups: ['styles']
            },
            {
                name: 'colors',
                groups: ['colors']
            },
            {
                name: 'tools',
                groups: ['tools']
            },
            {
                name: 'others',
                groups: ['others']
            },
            {
                name: 'about',
                groups: ['about']
            }
        ];
    };
    /**
     * return un-used toolbar options to remove it from ckeditor.
     */
    /**
     * return un-used toolbar options to remove it from ckeditor.
     * @private
     * @return {?}
     */
    CkEditorComponent.prototype.removeOtherToolbars = /**
     * return un-used toolbar options to remove it from ckeditor.
     * @private
     * @return {?}
     */
    function () {
        return 'Preview,Source,SelectAll,Cut,Copy,Paste,PasteText,PasteFromWord,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,PasteText,Save,NewPage,Print,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,CopyFormatting,RemoveFormat,Maximize,ShowBlocks,About,CreateDiv,Blockquote';
    };
    /**
     * This method is used to resize the editor height according to window size.
     */
    /**
     * This method is used to resize the editor height according to window size.
     * @private
     * @return {?}
     */
    CkEditorComponent.prototype.resizeEditor = /**
     * This method is used to resize the editor height according to window size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height = this.getOffsetHeight();
        if (this.ckeditorInstance && height > 200) {
            this.ckeditorInstance.resize('100%', height);
        }
    };
    CkEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jhi-ck-editor',
                    template: "<div #editorContainer>\n        <textarea name=\"email-editor\" [id]=\"editorId\"></textarea>\n    </div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["a.cke_dialog_ui_button,a.cke_dialog_ui_button_ok,a.cke_dialog_ui_button_ok:active,a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:hover{color:#fff!important;background:#41acb3!important;border:1px solid #41acb3!important;outline:0!important;padding:4px 1px!important}a.cke_dialog_ui_button_ok:focus{box-shadow:none!important}span.cke_dialog_ui_button{color:#fff!important}.cke_dialog select{-webkit-appearance:menulist-button;-moz-appearance:menulist-button;appearance:menulist-button}.cke_top{background-color:#58b1b1!important}"]
                }] }
    ];
    /** @nocollapse */
    CkEditorComponent.ctorParameters = function () { return [
        { type: JhiEventManager }
    ]; };
    CkEditorComponent.propDecorators = {
        editorValue: [{ type: Input }],
        apiToken: [{ type: Input }],
        autoFocus: [{ type: Input }],
        editorId: [{ type: Input }],
        editorContainer: [{ type: ViewChild, args: ['editorContainer',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return CkEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLibraryModule = /** @class */ (function () {
    function CommonLibraryModule() {
    }
    CommonLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommonLibraryComponent, CkEditorComponent, TemplateFieldsComponent],
                    imports: [CommonModule, TabViewModule, TranslateModule, FormsModule, ReactiveFormsModule],
                    exports: [CommonLibraryComponent, CkEditorComponent, TemplateFieldsComponent],
                    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }]
                },] }
    ];
    /** @nocollapse */
    CommonLibraryModule.ctorParameters = function () { return []; };
    return CommonLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: common-library.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CommonLibraryService, CommonLibraryComponent, TemplateFieldsComponent, CommonLibraryModule, CUSTOM_EVENTS, CkEditorComponent as ɵa };

//# sourceMappingURL=common-library.js.map