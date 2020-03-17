/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CommonLibraryComponent } from './common-library.component';
import { CkEditorComponent } from './component/ck-editor/ck-editor.component';
import { TemplateFieldsComponent } from './component/template-fields/template-fields.component';
import { JhiLanguageService } from 'ng-jhipster';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export { CommonLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tbW9uLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFO0lBT0k7SUFDQSxDQUFDOztnQkFSSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7b0JBQ2xGLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztvQkFDekYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7b0JBQzdFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO2lCQUM3RTs7OztJQUlELDBCQUFDO0NBQUEsQUFURCxJQVNDO1NBSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJ2aWV3JztcbmltcG9ydCB7IENvbW1vbkxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDa0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2NrLWVkaXRvci9jay1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFRlbXBsYXRlRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvdGVtcGxhdGUtZmllbGRzL3RlbXBsYXRlLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtDb21tb25MaWJyYXJ5Q29tcG9uZW50LCBDa0VkaXRvckNvbXBvbmVudCwgVGVtcGxhdGVGaWVsZHNDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRhYlZpZXdNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtDb21tb25MaWJyYXJ5Q29tcG9uZW50LCBDa0VkaXRvckNvbXBvbmVudCwgVGVtcGxhdGVGaWVsZHNDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLCB1c2VDbGFzczogSmhpTGFuZ3VhZ2VTZXJ2aWNlIH1dXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkxpYnJhcnlNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cbiJdfQ==