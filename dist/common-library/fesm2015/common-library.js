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
class CommonLibraryService {
    constructor() { }
}
CommonLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommonLibraryService.ctorParameters = () => [];
/** @nocollapse */ CommonLibraryService.ngInjectableDef = defineInjectable({ factory: function CommonLibraryService_Factory() { return new CommonLibraryService(); }, token: CommonLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CommonLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'jhi-common-library',
                template: `
    <p>
      common-library works!
    </p>
  `
            }] }
];
/** @nocollapse */
CommonLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/template-fields/template-fields.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component class is used to handle event related operations.
 */
class TemplateFieldsComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/ck-editor/enums.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CUSTOM_EVENTS = {
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
class CkEditorComponent {
    /**
     * This constructor inject the services.
     *
     * @param {?} eventManager
     */
    constructor(eventManager) {
        this.eventManager = eventManager;
        this.autoFocus = false;
        this.editorId = 'email-editor';
    }
    /**
     * This default life-cycle method initilize the ck-editor.
     * @return {?}
     */
    ngAfterViewInit() {
        this.initCkEditor();
    }
    /**
     * The method is used to get the element height.
     *
     * @return {?} height number
     */
    getOffsetHeight() {
        /** @type {?} */
        const defaultPadding = 30;
        /** @type {?} */
        const frmFieldElement = ((/** @type {?} */ (document.querySelector('#send-event #frm-fields'))));
        /** @type {?} */
        const frmSaveElement = ((/** @type {?} */ (document.querySelector('#send-event #frm-save'))));
        /** @type {?} */
        const sendEventElement = ((/** @type {?} */ (document.querySelector('#send-event'))));
        /** @type {?} */
        const frmFieldHeight = frmFieldElement ? frmFieldElement.offsetHeight : 0;
        /** @type {?} */
        const frmSaveHeight = frmSaveElement ? frmSaveElement.offsetHeight : 0;
        /** @type {?} */
        const sendEventHeight = sendEventElement ? sendEventElement.offsetHeight : 0;
        return sendEventHeight && frmFieldHeight && frmSaveHeight ? sendEventHeight - frmFieldHeight - frmSaveHeight - defaultPadding : 0;
    }
    /**
     * The method is used to get the editor data
     *
     * @return {?} editorData any
     */
    getEditorData() {
        return this.ckeditorInstance.getData();
    }
    /**
     * This event method is used to handle window resize.
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.resizeEditor();
    }
    /**
     * To initialise the ckeditor
     * @private
     * @return {?}
     */
    initCkEditor() {
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
        () => {
            this.ckeditorInstance.setData(this.editorValue, (/**
             * @return {?}
             */
            () => {
                this.ckeditorInstance.resetUndo();
            }));
        }));
        this.ckeditorInstance.on('change', (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.eventManager.broadcast({ name: CUSTOM_EVENTS.MAIN_COMPONENT, content: CUSTOM_EVENTS.UPDATE_SESSION_INTERUPT });
        }));
        this.ckeditorInstance.on('loaded', (/**
         * @return {?}
         */
        () => {
            this.resizeEditor();
        }));
        this.ckeditorInstance.on('fileUploadRequest', (/**
         * @param {?} evt
         * @return {?}
         */
        evt => {
            /** @type {?} */
            const fileLoader = evt.data.fileLoader;
            /** @type {?} */
            const formData = new FormData();
            /** @type {?} */
            const xhr = fileLoader.xhr;
            xhr.open('POST', fileLoader.uploadUrl, true);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            if (this.apiToken) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + this.apiToken);
            }
            xhr.send(formData);
            evt.stop();
        }));
        this.ckeditorInstance.on('fileUploadResponse', (/**
         * @param {?} evt
         * @return {?}
         */
        evt => {
            evt.stop();
            /** @type {?} */
            const data = evt.data;
            /** @type {?} */
            const xhr = data.fileLoader.xhr;
            /** @type {?} */
            const response = xhr.responseText.split('|');
            if (response[1]) {
                data.message = response[1];
                evt.cancel();
            }
            else {
                /** @type {?} */
                const responseData = JSON.parse(response[0]);
                data.fileName = responseData.fileName;
                data.url = responseData.url;
            }
        }));
    }
    /**
     * Return toolbar group options for the ckeditor
     * @private
     * @return {?}
     */
    getToolbarGroups() {
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
    }
    /**
     * return un-used toolbar options to remove it from ckeditor.
     * @private
     * @return {?}
     */
    removeOtherToolbars() {
        return 'Preview,Source,SelectAll,Cut,Copy,Paste,PasteText,PasteFromWord,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,PasteText,Save,NewPage,Print,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,CopyFormatting,RemoveFormat,Maximize,ShowBlocks,About,CreateDiv,Blockquote';
    }
    /**
     * This method is used to resize the editor height according to window size.
     * @private
     * @return {?}
     */
    resizeEditor() {
        /** @type {?} */
        const height = this.getOffsetHeight();
        if (this.ckeditorInstance && height > 200) {
            this.ckeditorInstance.resize('100%', height);
        }
    }
}
CkEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'jhi-ck-editor',
                template: `<div #editorContainer>
        <textarea name="email-editor" [id]="editorId"></textarea>
    </div>`,
                encapsulation: ViewEncapsulation.None,
                styles: ["a.cke_dialog_ui_button,a.cke_dialog_ui_button_ok,a.cke_dialog_ui_button_ok:active,a.cke_dialog_ui_button_ok:focus,a.cke_dialog_ui_button_ok:hover{color:#fff!important;background:#41acb3!important;border:1px solid #41acb3!important;outline:0!important;padding:4px 1px!important}a.cke_dialog_ui_button_ok:focus{box-shadow:none!important}span.cke_dialog_ui_button{color:#fff!important}.cke_dialog select{-webkit-appearance:menulist-button;-moz-appearance:menulist-button;appearance:menulist-button}.cke_top{background-color:#58b1b1!important}"]
            }] }
];
/** @nocollapse */
CkEditorComponent.ctorParameters = () => [
    { type: JhiEventManager }
];
CkEditorComponent.propDecorators = {
    editorValue: [{ type: Input }],
    apiToken: [{ type: Input }],
    autoFocus: [{ type: Input }],
    editorId: [{ type: Input }],
    editorContainer: [{ type: ViewChild, args: ['editorContainer',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonLibraryModule {
    constructor() {
    }
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
CommonLibraryModule.ctorParameters = () => [];

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