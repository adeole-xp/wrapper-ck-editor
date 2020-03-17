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
export class CkEditorComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2stZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9jay1lZGl0b3IvY2stZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBZTlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQWMxQixZQUNZLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQVhoQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxjQUFjLENBQUM7SUFXL0IsQ0FBQzs7Ozs7SUFLTCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQU9ELGVBQWU7O2NBQ0wsY0FBYyxHQUFHLEVBQUU7O2NBQ25CLGVBQWUsR0FBRyxDQUFDLG1CQUFhLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBQSxDQUFDOztjQUNsRixjQUFjLEdBQUcsQ0FBQyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUEsQ0FBQzs7Y0FDL0UsZ0JBQWdCLEdBQUcsQ0FBQyxtQkFBYSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFBLENBQUM7O2NBQ3ZFLGNBQWMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ25FLGFBQWEsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNB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QVk7O2NBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDckMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7OztZQXBOSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7V0FFSDtnQkFDUCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFFeEM7Ozs7WUFmUSxlQUFlOzs7MEJBa0JuQixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLFNBQVMsU0FBQyxpQkFBaUI7dUJBK0MzQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBcER6Qyw2Q0FBc0I7O0lBQ3RCLHdDQUE2Qjs7SUFDN0IscUNBQTBCOztJQUMxQixzQ0FBMkI7O0lBQzNCLHFDQUFtQzs7SUFDbkMsNENBQXVFOzs7OztJQVNuRSx5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEAoIyljay1lZGl0b3IuY29tcG9uZW50LnRzIE1hciAxMywgMjAyMCBDb3B5cmlnaHQgMjAyMCwgT3ZlcnNpZ2h0IFN5c3RlbXMsIEluYy4gUHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbFxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IENVU1RPTV9FVkVOVFMgfSBmcm9tICcuL2VudW1zLm1vZGVsJztcbmRlY2xhcmUgY29uc3QgQ0tFRElUT1I6IGFueTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBjbGFzcyBoYW5kbGVzIHRoZSBldmVudCBtZXNzYWdlIHRlbXBsYXRlIHJlbGF0ZWQgb3BlcmF0aW9ucy5cbiAqIEBhdXRob3IgYWRlb2xlXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWNrLWVkaXRvcicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICNlZGl0b3JDb250YWluZXI+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZW1haWwtZWRpdG9yXCIgW2lkXT1cImVkaXRvcklkXCI+PC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5gLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2stZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2tFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBja2VkaXRvckluc3RhbmNlOiBhbnk7XG4gICAgQElucHV0KCkgZWRpdG9yVmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBhcGlUb2tlbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGVkaXRvcklkID0gJ2VtYWlsLWVkaXRvcic7XG4gICAgQFZpZXdDaGlsZCgnZWRpdG9yQ29udGFpbmVyJykgZWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY29uc3RydWN0b3IgaW5qZWN0IHRoZSBzZXJ2aWNlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3YkxvY2FsU3RvcmFnZVNlcnZpY2UgV0JMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgICogQHBhcmFtIHNlc3Npb25TdG9yYWdlIFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyXG4gICAgKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZGVmYXVsdCBsaWZlLWN5Y2xlIG1ldGhvZCBpbml0aWxpemUgdGhlIGNrLWVkaXRvci5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENrRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCBpcyB1c2VkIHRvIGdldCB0aGUgZWxlbWVudCBoZWlnaHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBoZWlnaHQgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0UGFkZGluZyA9IDMwO1xuICAgICAgICBjb25zdCBmcm1GaWVsZEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kLWV2ZW50ICNmcm0tZmllbGRzJykpO1xuICAgICAgICBjb25zdCBmcm1TYXZlRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbmQtZXZlbnQgI2ZybS1zYXZlJykpO1xuICAgICAgICBjb25zdCBzZW5kRXZlbnRFbGVtZW50ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VuZC1ldmVudCcpKTtcbiAgICAgICAgY29uc3QgZnJtRmllbGRIZWlnaHQgPSBmcm1GaWVsZEVsZW1lbnQgPyBmcm1GaWVsZEVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgICAgY29uc3QgZnJtU2F2ZUhlaWdodCA9IGZybVNhdmVFbGVtZW50ID8gZnJtU2F2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgICAgY29uc3Qgc2VuZEV2ZW50SGVpZ2h0ID0gc2VuZEV2ZW50RWxlbWVudCA/IHNlbmRFdmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAgICAgcmV0dXJuIHNlbmRFdmVudEhlaWdodCAmJiBmcm1GaWVsZEhlaWdodCAmJiBmcm1TYXZlSGVpZ2h0ID8gc2VuZEV2ZW50SGVpZ2h0IC0gZnJtRmllbGRIZWlnaHQgLSBmcm1TYXZlSGVpZ2h0IC0gZGVmYXVsdFBhZGRpbmcgOiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtZXRob2QgaXMgdXNlZCB0byBnZXQgdGhlIGVkaXRvciBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBlZGl0b3JEYXRhIGFueVxuICAgICAqL1xuICAgIGdldEVkaXRvckRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNrZWRpdG9ySW5zdGFuY2UuZ2V0RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgbWV0aG9kIGlzIHVzZWQgdG8gaGFuZGxlIHdpbmRvdyByZXNpemUuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgb25SZXNpemUoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnJlc2l6ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvIGluaXRpYWxpc2UgdGhlIGNrZWRpdG9yXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0Q2tFZGl0b3IoKSB7XG4gICAgICAgIHRoaXMuY2tlZGl0b3JJbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5lZGl0b3JJZCwge1xuICAgICAgICAgICAgc3RhcnR1cEZvY3VzOiB0aGlzLmF1dG9Gb2N1cyxcbiAgICAgICAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgICAgICAgZmlsbEVtcHR5QmxvY2tzOiBmYWxzZSxcbiAgICAgICAgICAgIGVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgICAgICAgICBmb3JjZUVudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVfZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd2VkQ29udGVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbW92ZVBsdWdpbnM6ICdlbGVtZW50c3BhdGgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMjkwcHgnLFxuICAgICAgICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICAgICAgICBleHRyYVBsdWdpbnM6ICd1cGxvYWRpbWFnZScsXG4gICAgICAgICAgICB1cGxvYWRVcmw6ICdhcGkvdGVtcGxhdGUvaW1hZ2UnLFxuICAgICAgICAgICAgZmlsZWJyb3dzZXJJbWFnZVVwbG9hZFVybDogJ2FwaS90ZW1wbGF0ZS9pbWFnZScsXG4gICAgICAgICAgICBmb250U2l6ZV9zaXplczpcbiAgICAgICAgICAgICAgICAnOC84cHQ7OS85cHQ7MTAvMTBwdDsxMS8xMXB0OzEyLzEycHQ7MTQvMTRwdDsxNi8xNnB0OzE4LzE4cHQ7MjAvMjBwdDsyMi8yMnB0OzI0LzI0cHQ7MjYvMjZwdDsyOC8yOHB0OzM2LzM2cHQ7NDgvNDhwdDs3Mi83MnB0JyxcbiAgICAgICAgICAgIHRvb2xiYXJHcm91cHM6IHRoaXMuZ2V0VG9vbGJhckdyb3VwcygpLFxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uczogdGhpcy5yZW1vdmVPdGhlclRvb2xiYXJzKCksXG4gICAgICAgICAgICByZW1vdmVEaWFsb2dUYWJzOiAnbGluazp1cGxvYWQ7aW1hZ2U6VXBsb2FkO2ltYWdlOkxpbms7aW1hZ2U6YWR2YW5jZWQ7dGFibGU6YWR2YW5jZWQnLFxuICAgICAgICAgICAgaW1hZ2VfcHJldmlld1RleHQ6ICcgJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uuc2V0RGF0YSh0aGlzLmVkaXRvclZhbHVlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLnJlc2V0VW5kbygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2tlZGl0b3JJbnN0YW5jZS5vbignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiBDVVNUT01fRVZFTlRTLk1BSU5fQ09NUE9ORU5ULCBjb250ZW50OiBDVVNUT01fRVZFTlRTLlVQREFURV9TRVNTSU9OX0lOVEVSVVBUIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uub24oJ2xvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2tlZGl0b3JJbnN0YW5jZS5vbignZmlsZVVwbG9hZFJlcXVlc3QnLCBldnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUxvYWRlciA9IGV2dC5kYXRhLmZpbGVMb2FkZXI7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgeGhyID0gZmlsZUxvYWRlci54aHI7XG4gICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIGZpbGVMb2FkZXIudXBsb2FkVXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVMb2FkZXIuZmlsZSwgZmlsZUxvYWRlci5maWxlTmFtZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hcGlUb2tlbikge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdGhpcy5hcGlUb2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAgICAgICBldnQuc3RvcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNrZWRpdG9ySW5zdGFuY2Uub24oJ2ZpbGVVcGxvYWRSZXNwb25zZScsIGV2dCA9PiB7XG4gICAgICAgICAgICBldnQuc3RvcCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2dC5kYXRhLFxuICAgICAgICAgICAgICAgIHhociA9IGRhdGEuZmlsZUxvYWRlci54aHIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0LnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZVsxXSkge1xuICAgICAgICAgICAgICAgIGRhdGEubWVzc2FnZSA9IHJlc3BvbnNlWzFdO1xuICAgICAgICAgICAgICAgIGV2dC5jYW5jZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVswXSk7XG4gICAgICAgICAgICAgICAgZGF0YS5maWxlTmFtZSA9IHJlc3BvbnNlRGF0YS5maWxlTmFtZTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IHJlc3BvbnNlRGF0YS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0b29sYmFyIGdyb3VwIG9wdGlvbnMgZm9yIHRoZSBja2VkaXRvclxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VG9vbGJhckdyb3VwcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydzZWxlY3Rpb24nLCAnbW9kZScsICdkb2N1bWVudCcsICdkb2N0b29scyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjbGlwYm9hcmQnLFxuICAgICAgICAgICAgICAgIGdyb3VwczogWydjbGlwYm9hcmQnLCAndW5kbyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0aW5nJyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnZmluZCcsICdzcGVsbGNoZWNrZXInLCAnZWRpdGluZyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmb3JtcycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2Zvcm1zJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2luc2VydCcsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2luc2VydCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2Jhc2ljc3R5bGVzJywgJ2NsZWFudXAnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnbGlzdCcsICdpbmRlbnQnLCAnYmxvY2tzJywgJ2FsaWduJywgJ2JpZGknLCAncGFyYWdyYXBoJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xpbmtzJyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnbGlua3MnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3R5bGVzJyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFsnc3R5bGVzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbG9ycycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2NvbG9ycyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0b29scycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ3Rvb2xzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ290aGVycycsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ290aGVycyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dCcsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbJ2Fib3V0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gdW4tdXNlZCB0b29sYmFyIG9wdGlvbnMgdG8gcmVtb3ZlIGl0IGZyb20gY2tlZGl0b3IuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVPdGhlclRvb2xiYXJzKCkge1xuICAgICAgICByZXR1cm4gJ1ByZXZpZXcsU291cmNlLFNlbGVjdEFsbCxDdXQsQ29weSxQYXN0ZSxQYXN0ZVRleHQsUGFzdGVGcm9tV29yZCxMYW5ndWFnZSxGbGFzaCxTbWlsZXksU3BlY2lhbENoYXIsUGFnZUJyZWFrLElmcmFtZSxBbmNob3IsUGFzdGVUZXh0LFNhdmUsTmV3UGFnZSxQcmludCxUZW1wbGF0ZXMsRm9ybSxDaGVja2JveCxSYWRpbyxUZXh0RmllbGQsVGV4dGFyZWEsU2VsZWN0LEJ1dHRvbixJbWFnZUJ1dHRvbixIaWRkZW5GaWVsZCxTY2F5dCxDb3B5Rm9ybWF0dGluZyxSZW1vdmVGb3JtYXQsTWF4aW1pemUsU2hvd0Jsb2NrcyxBYm91dCxDcmVhdGVEaXYsQmxvY2txdW90ZSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byByZXNpemUgdGhlIGVkaXRvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHdpbmRvdyBzaXplLlxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzaXplRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE9mZnNldEhlaWdodCgpO1xuICAgICAgICBpZiAodGhpcy5ja2VkaXRvckluc3RhbmNlICYmIGhlaWdodCA+IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5ja2VkaXRvckluc3RhbmNlLnJlc2l6ZSgnMTAwJScsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=