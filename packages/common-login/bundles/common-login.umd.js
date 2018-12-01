(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('common-login', ['exports', '@angular/core'], factory) :
    (factory((global['common-login'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonLoginService = /** @class */ (function () {
        function CommonLoginService() {
        }
        CommonLoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommonLoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonLoginService.ngInjectableDef = i0.defineInjectable({ factory: function CommonLoginService_Factory() { return new CommonLoginService(); }, token: CommonLoginService, providedIn: "root" });
        return CommonLoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonLoginComponent = /** @class */ (function () {
        function CommonLoginComponent() {
        }
        /**
         * @return {?}
         */
        CommonLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'common-login',
                        template: "\n    <h2>\n      common-login works!\n    </h2>\n  "
                    }] }
        ];
        /** @nocollapse */
        CommonLoginComponent.ctorParameters = function () { return []; };
        return CommonLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonLoginModule = /** @class */ (function () {
        function CommonLoginModule() {
        }
        CommonLoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CommonLoginComponent],
                        imports: [],
                        exports: [CommonLoginComponent]
                    },] }
        ];
        return CommonLoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CommonLoginService = CommonLoginService;
    exports.CommonLoginComponent = CommonLoginComponent;
    exports.CommonLoginModule = CommonLoginModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxvZ2luLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29tbW9uLWxvZ2luL2xpYi9jb21tb24tbG9naW4uc2VydmljZS50cyIsIm5nOi8vY29tbW9uLWxvZ2luL2xpYi9jb21tb24tbG9naW4uY29tcG9uZW50LnRzIiwibmc6Ly9jb21tb24tbG9naW4vbGliL2NvbW1vbi1sb2dpbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Mb2dpblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tbG9naW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5cbiAgICAgIGNvbW1vbi1sb2dpbiB3b3JrcyFcbiAgICA8L2gyPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Mb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLWxvZ2luLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbW1vbkxvZ2luQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbQ29tbW9uTG9naW5Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkxvZ2luTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7aUNBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHNEQUlUO3FCQUVGOzs7O1FBUUQsMkJBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBR0E7U0FNa0M7O29CQU5qQ0MsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNwQyxPQUFPLEVBQUUsRUFDUjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDaEM7O1FBQ2dDLHdCQUFDO0tBTmxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=