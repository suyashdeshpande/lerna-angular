(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('common-registration', ['exports', '@angular/core'], factory) :
    (factory((global['common-registration'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegistrationService = /** @class */ (function () {
        function CommonRegistrationService() {
        }
        CommonRegistrationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommonRegistrationService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonRegistrationService.ngInjectableDef = i0.defineInjectable({ factory: function CommonRegistrationService_Factory() { return new CommonRegistrationService(); }, token: CommonRegistrationService, providedIn: "root" });
        return CommonRegistrationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegistrationComponent = /** @class */ (function () {
        function CommonRegistrationComponent() {
        }
        /**
         * @return {?}
         */
        CommonRegistrationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonRegistrationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'common-registration',
                        template: "\n    <h2>\n      common-registration works!\n    </h2>\n  "
                    }] }
        ];
        /** @nocollapse */
        CommonRegistrationComponent.ctorParameters = function () { return []; };
        return CommonRegistrationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegistrationModule = /** @class */ (function () {
        function CommonRegistrationModule() {
        }
        CommonRegistrationModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CommonRegistrationComponent],
                        imports: [],
                        exports: [CommonRegistrationComponent]
                    },] }
        ];
        return CommonRegistrationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CommonRegistrationService = CommonRegistrationService;
    exports.CommonRegistrationComponent = CommonRegistrationComponent;
    exports.CommonRegistrationModule = CommonRegistrationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXJlZ2lzdHJhdGlvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbW1vbi1yZWdpc3RyYXRpb24vbGliL2NvbW1vbi1yZWdpc3RyYXRpb24uc2VydmljZS50cyIsIm5nOi8vY29tbW9uLXJlZ2lzdHJhdGlvbi9saWIvY29tbW9uLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL2NvbW1vbi1yZWdpc3RyYXRpb24vbGliL2NvbW1vbi1yZWdpc3RyYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uUmVnaXN0cmF0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1yZWdpc3RyYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5cbiAgICAgIGNvbW1vbi1yZWdpc3RyYXRpb24gd29ya3MhXG4gICAgPC9oMj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25SZWdpc3RyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vblJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb21tb25SZWdpc3RyYXRpb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtDb21tb25SZWdpc3RyYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblJlZ2lzdHJhdGlvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dDQUpEO0tBRUE7Ozs7OztBQ0ZBO1FBYUU7U0FBaUI7Ozs7UUFFakIsOENBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLDZEQUlUO3FCQUVGOzs7O1FBUUQsa0NBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBR0E7U0FNeUM7O29CQU54Q0MsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO3dCQUMzQyxPQUFPLEVBQUUsRUFDUjt3QkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDdkM7O1FBQ3VDLCtCQUFDO0tBTnpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=