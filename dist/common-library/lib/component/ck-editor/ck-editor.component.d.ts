/**
 * @(#)ck-editor.component.ts Mar 13, 2020 Copyright 2020, Oversight Systems, Inc. Proprietary and confidential
 */
import { AfterViewInit, ElementRef } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
/**
 * This component class handles the event message template related operations.
 * @author adeole
 */
export declare class CkEditorComponent implements AfterViewInit {
    private eventManager;
    ckeditorInstance: any;
    editorValue: string;
    apiToken: string;
    autoFocus: boolean;
    editorId: string;
    editorContainer: ElementRef<HTMLElement>;
    /**
     * This constructor inject the services.
     *
     * @param wbLocalStorageService WBLocalStorageService
     * @param sessionStorage SessionStorageService
     */
    constructor(eventManager: JhiEventManager);
    /**
     * This default life-cycle method initilize the ck-editor.
     */
    ngAfterViewInit(): void;
    /**
     * The method is used to get the element height.
     *
     * @returns height number
     */
    getOffsetHeight(): number;
    /**
     * The method is used to get the editor data
     *
     * @returns editorData any
     */
    getEditorData(): any;
    /**
     * This event method is used to handle window resize.
     */
    onResize(event: any): void;
    /**
     * To initialise the ckeditor
     */
    private initCkEditor;
    /**
     * Return toolbar group options for the ckeditor
     */
    private getToolbarGroups;
    /**
     * return un-used toolbar options to remove it from ckeditor.
     */
    private removeOtherToolbars;
    /**
     * This method is used to resize the editor height according to window size.
     */
    private resizeEditor;
}
