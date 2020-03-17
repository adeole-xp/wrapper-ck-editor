/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/ck-editor/ck-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @(#)ck-editor.component.ts Mar 13, 2020 Copyright 2020, Oversight Systems, Inc. Proprietary and confidential
 */
import { Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { CUSTOM_EVENTS } from './enums.model';
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
export { CkEditorComponent };
if (false) {
    /** @type {?} */
    CkEditorComponent.prototype.ckeditorInstance;
    /** @type {?} */
    CkEditorComponent.prototype.editorValue;
    /** @type {?} */
    CkEditorComponent.prototype.apiToken;
    /** @type {?} */
    CkEditorComponent.prototype.autoFocus;
    /** @type {?} */
    CkEditorComponent.prototype.editorId;
    /** @type {?} */
    CkEditorComponent.prototype.editorContainer;
    /**
     * @type {?}
     * @private
     */
    CkEditorComponent.prototype.eventManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2stZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9jay1lZGl0b3IvY2stZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTzlDO0lBZ0JJOzs7OztPQUtHO0lBQ0gsMkJBQ1ksWUFBNkI7UUFBN0IsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBWGhDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLGNBQWMsQ0FBQztJQVcvQixDQUFDO0lBRUw7O09BRUc7Ozs7O0lBQ0gsMkNBQWU7Ozs7SUFBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gsMkNBQWU7Ozs7O0lBQWY7O1lBQ1UsY0FBYyxHQUFHLEVBQUU7O1lBQ25CLGVBQWUsR0FBRyxDQUFDLG1CQUFhLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBQSxDQUFDOztZQUNsRixjQUFjLEdBQUcsQ0FBQyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUEsQ0FBQzs7WUFDL0UsZ0JBQWdCLEdBQUcsQ0FBQyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFBLENBQUM7O1lBQ3ZFLGNBQWMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lB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YUFDcEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSywrQ0FBbUI7Ozs7O0lBQTNCO1FBQ0ksT0FBTyxnVUFBZ1UsQ0FBQztJQUM1VSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLHdDQUFZOzs7OztJQUFwQjs7WUFDVSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtRQUNyQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQzs7Z0JBcE5KLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJHQUVIO29CQUNQLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFFeEM7Ozs7Z0JBZlEsZUFBZTs7OzhCQWtCbkIsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxTQUFTLFNBQUMsaUJBQWlCOzJCQStDM0IsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3SjdDLHdCQUFDO0NBQUEsQUFyTkQsSUFxTkM7U0E3TVksaUJBQWlCOzs7SUFDMUIsNkNBQXNCOztJQUN0Qix3Q0FBNkI7O0lBQzdCLHFDQUEwQjs7SUFDMUIsc0NBQTJCOztJQUMzQixxQ0FBbUM7O0lBQ25DLDRDQUF1RTs7Ozs7SUFTbkUseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAKCMpY2stZWRpdG9yLmNvbXBvbmVudC50cyBNYXIgMTMsIDIwMjAgQ29weXJpZ2h0IDIwMjAsIE92ZXJzaWdodCBTeXN0ZW1zLCBJbmMuIFByb3ByaWV0YXJ5IGFuZCBjb25maWRlbnRpYWxcbiAqL1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBDVVNUT01fRVZFTlRTIH0gZnJvbSAnLi9lbnVtcy5tb2RlbCc7XG5kZWNsYXJlIGNvbnN0IENLRURJVE9SOiBhbnk7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgY2xhc3MgaGFuZGxlcyB0aGUgZXZlbnQgbWVzc2FnZSB0ZW1wbGF0ZSByZWxhdGVkIG9wZXJhdGlvbnMuXG4gKiBAYXV0aG9yIGFkZW9sZVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jay1lZGl0b3InLFxuICAgIHRlbXBsYXRlOiBgPGRpdiAjZWRpdG9yQ29udGFpbmVyPlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImVtYWlsLWVkaXRvclwiIFtpZF09XCJlZGl0b3JJZFwiPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+YCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2NrLWVkaXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENrRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY2tlZGl0b3JJbnN0YW5jZTogYW55O1xuICAgIEBJbnB1dCgpIGVkaXRvclZhbHVlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXBpVG9rZW46IHN0cmluZztcbiAgICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlZGl0b3JJZCA9ICdlbWFpbC1lZGl0b3InO1xuICAgIEBWaWV3Q2hpbGQoJ2VkaXRvckNvbnRhaW5lcicpIGVkaXRvckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNvbnN0cnVjdG9yIGluamVjdCB0aGUgc2VydmljZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2JMb2NhbFN0b3JhZ2VTZXJ2aWNlIFdCTG9jYWxTdG9yYWdlU2VydmljZVxuICAgICAqIEBwYXJhbSBzZXNzaW9uU3RvcmFnZSBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlclxuICAgICkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGRlZmF1bHQgbGlmZS1jeWNsZSBtZXRob2QgaW5pdGlsaXplIHRoZSBjay1lZGl0b3IuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmluaXRDa0VkaXRvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtZXRob2QgaXMgdXNlZCB0byBnZXQgdGhlIGVsZW1lbnQgaGVpZ2h0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgaGVpZ2h0IG51bWJlclxuICAgICAqL1xuICAgIGdldE9mZnNldEhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFBhZGRpbmcgPSAzMDtcbiAgICAgICAgY29uc3QgZnJtRmllbGRFbGVtZW50ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VuZC1ldmVudCAjZnJtLWZpZWxkcycpKTtcbiAgICAgICAgY29uc3QgZnJtU2F2ZUVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kLWV2ZW50ICNmcm0tc2F2ZScpKTtcbiAgICAgICAgY29uc3Qgc2VuZEV2ZW50RWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbmQtZXZlbnQnKSk7XG4gICAgICAgIGNvbnN0IGZybUZpZWxkSGVpZ2h0ID0gZnJtRmllbGRFbGVtZW50ID8gZnJtRmllbGRFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgICAgIGNvbnN0IGZybVNhdmVIZWlnaHQgPSBmcm1TYXZlRWxlbWVudCA/IGZybVNhdmVFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgICAgIGNvbnN0IHNlbmRFdmVudEhlaWdodCA9IHNlbmRFdmVudEVsZW1lbnQgPyBzZW5kRXZlbnRFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgICAgIHJldHVybiBzZW5kRXZlbnRIZWlnaHQgJiYgZnJtRmllbGRIZWlnaHQgJiYgZnJtU2F2ZUhlaWdodCA/IHNlbmRFdmVudEhlaWdodCAtIGZybUZpZWxkSGVpZ2h0IC0gZnJtU2F2ZUhlaWdodCAtIGRlZmF1bHRQYWRkaW5nIDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWV0aG9kIGlzIHVzZWQgdG8gZ2V0IHRoZSBlZGl0b3IgZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybnMgZWRpdG9yRGF0YSBhbnlcbiAgICAgKi9cbiAgICBnZXRFZGl0b3JEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ja2VkaXRvckluc3RhbmNlLmdldERhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG1ldGhvZCBpcyB1c2VkIHRvIGhhbmRsZSB3aW5kb3cgcmVzaXplLlxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXNpemVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUbyBpbml0aWFsaXNlIHRoZSBja2VkaXRvclxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdENrRWRpdG9yKCkge1xuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2UgPSBDS0VESVRPUi5yZXBsYWNlKHRoaXMuZWRpdG9ySWQsIHtcbiAgICAgICAgICAgIHN0YXJ0dXBGb2N1czogdGhpcy5hdXRvRm9jdXMsXG4gICAgICAgICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbGxFbXB0eUJsb2NrczogZmFsc2UsXG4gICAgICAgICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgICAgICAgZm9yY2VFbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplX2VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dlZENvbnRlbnQ6IHRydWUsXG4gICAgICAgICAgICByZW1vdmVQbHVnaW5zOiAnZWxlbWVudHNwYXRoJyxcbiAgICAgICAgICAgIGhlaWdodDogJzI5MHB4JyxcbiAgICAgICAgICAgIGRpc2FibGVOYXRpdmVTcGVsbENoZWNrZXI6IGZhbHNlLFxuICAgICAgICAgICAgZXh0cmFQbHVnaW5zOiAndXBsb2FkaW1hZ2UnLFxuICAgICAgICAgICAgdXBsb2FkVXJsOiAnYXBpL3RlbXBsYXRlL2ltYWdlJyxcbiAgICAgICAgICAgIGZpbGVicm93c2VySW1hZ2VVcGxvYWRVcmw6ICdhcGkvdGVtcGxhdGUvaW1hZ2UnLFxuICAgICAgICAgICAgZm9udFNpemVfc2l6ZXM6XG4gICAgICAgICAgICAgICAgJzgvOHB0OzkvOXB0OzEwLzEwcHQ7MTEvMTFwdDsxMi8xMnB0OzE0LzE0cHQ7MTYvMTZwdDsxOC8xOHB0OzIwLzIwcHQ7MjIvMjJwdDsyNC8yNHB0OzI2LzI2cHQ7MjgvMjhwdDszNi8zNnB0OzQ4LzQ4cHQ7NzIvNzJwdCcsXG4gICAgICAgICAgICB0b29sYmFyR3JvdXBzOiB0aGlzLmdldFRvb2xiYXJHcm91cHMoKSxcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnM6IHRoaXMucmVtb3ZlT3RoZXJUb29sYmFycygpLFxuICAgICAgICAgICAgcmVtb3ZlRGlhbG9nVGFiczogJ2xpbms6dXBsb2FkO2ltYWdlOlVwbG9hZDtpbWFnZTpMaW5rO2ltYWdlOmFkdmFuY2VkO3RhYmxlOmFkdmFuY2VkJyxcbiAgICAgICAgICAgIGltYWdlX3ByZXZpZXdUZXh0OiAnICdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLm9uKCdpbnN0YW5jZVJlYWR5JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLnNldERhdGEodGhpcy5lZGl0b3JWYWx1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2tlZGl0b3JJbnN0YW5jZS5yZXNldFVuZG8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogQ1VTVE9NX0VWRU5UUy5NQUlOX0NPTVBPTkVOVCwgY29udGVudDogQ1VTVE9NX0VWRU5UUy5VUERBVEVfU0VTU0lPTl9JTlRFUlVQVCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLm9uKCdsb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVkaXRvcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uub24oJ2ZpbGVVcGxvYWRSZXF1ZXN0JywgZXZ0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVMb2FkZXIgPSBldnQuZGF0YS5maWxlTG9hZGVyO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IGZpbGVMb2FkZXIueGhyO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBmaWxlTG9hZGVyLnVwbG9hZFVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlTG9hZGVyLmZpbGUsIGZpbGVMb2FkZXIuZmlsZU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBpVG9rZW4pIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRoaXMuYXBpVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgICAgICAgZXZ0LnN0b3AoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLm9uKCdmaWxlVXBsb2FkUmVzcG9uc2UnLCBldnQgPT4ge1xuICAgICAgICAgICAgZXZ0LnN0b3AoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldnQuZGF0YSxcbiAgICAgICAgICAgICAgICB4aHIgPSBkYXRhLmZpbGVMb2FkZXIueGhyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dC5zcGxpdCgnfCcpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VbMV0pIHtcbiAgICAgICAgICAgICAgICBkYXRhLm1lc3NhZ2UgPSByZXNwb25zZVsxXTtcbiAgICAgICAgICAgICAgICBldnQuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VbMF0pO1xuICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUgPSByZXNwb25zZURhdGEuZmlsZU5hbWU7XG4gICAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXNwb25zZURhdGEudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdG9vbGJhciBncm91cCBvcHRpb25zIGZvciB0aGUgY2tlZGl0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFRvb2xiYXJHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnc2VsZWN0aW9uJywgJ21vZGUnLCAnZG9jdW1lbnQnLCAnZG9jdG9vbHMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xpcGJvYXJkJyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnY2xpcGJvYXJkJywgJ3VuZG8nXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdGluZycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2ZpbmQnLCAnc3BlbGxjaGVja2VyJywgJ2VkaXRpbmcnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZm9ybXMnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydmb3JtcyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnNlcnQnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydpbnNlcnQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFzaWNzdHlsZXMnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydiYXNpY3N0eWxlcycsICdjbGVhbnVwJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2xpc3QnLCAnaW5kZW50JywgJ2Jsb2NrcycsICdhbGlnbicsICdiaWRpJywgJ3BhcmFncmFwaCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsaW5rcycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2xpbmtzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3N0eWxlcycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ3N0eWxlcyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xvcnMnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydjb2xvcnMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9vbHMnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWyd0b29scyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdvdGhlcnMnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydvdGhlcnMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXQnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydhYm91dCddXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHVuLXVzZWQgdG9vbGJhciBvcHRpb25zIHRvIHJlbW92ZSBpdCBmcm9tIGNrZWRpdG9yLlxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlT3RoZXJUb29sYmFycygpIHtcbiAgICAgICAgcmV0dXJuICdQcmV2aWV3LFNvdXJjZSxTZWxlY3RBbGwsQ3V0LENvcHksUGFzdGUsUGFzdGVUZXh0LFBhc3RlRnJvbVdvcmQsTGFuZ3VhZ2UsRmxhc2gsU21pbGV5LFNwZWNpYWxDaGFyLFBhZ2VCcmVhayxJZnJhbWUsQW5jaG9yLFBhc3RlVGV4dCxTYXZlLE5ld1BhZ2UsUHJpbnQsVGVtcGxhdGVzLEZvcm0sQ2hlY2tib3gsUmFkaW8sVGV4dEZpZWxkLFRleHRhcmVhLFNlbGVjdCxCdXR0b24sSW1hZ2VCdXR0b24sSGlkZGVuRmllbGQsU2NheXQsQ29weUZvcm1hdHRpbmcsUmVtb3ZlRm9ybWF0LE1heGltaXplLFNob3dCbG9ja3MsQWJvdXQsQ3JlYXRlRGl2LEJsb2NrcXVvdGUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVzaXplIHRoZSBlZGl0b3IgaGVpZ2h0IGFjY29yZGluZyB0byB3aW5kb3cgc2l6ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc2l6ZUVkaXRvcigpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRPZmZzZXRIZWlnaHQoKTtcbiAgICAgICAgaWYgKHRoaXMuY2tlZGl0b3JJbnN0YW5jZSAmJiBoZWlnaHQgPiAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuY2tlZGl0b3JJbnN0YW5jZS5yZXNpemUoJzEwMCUnLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19