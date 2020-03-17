/**
 * @(#)template-fields.component.ts Mar 11, 2020 Copyright 2020,Oversight Systems, Inc. Proprietary and confidential
 * @author adeole
 */
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
/**
 * This component class is used to handle event related operations.
 */
export declare class TemplateFieldsComponent implements OnInit {
    private formBuilder;
    tabItems: any[];
    editorData: any;
    autoFocus: boolean;
    apiToken: string;
    emailTemplates: any[];
    emailForm: FormGroup;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    /**
     * To change the Email template
     *
     * @param value: string
     */
    changeTemplate(value: string): void;
    /**
     * To create a form for Email Template
     */
    private createForm;
}
