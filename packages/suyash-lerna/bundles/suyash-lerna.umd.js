(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('suyash-lerna', ['exports', '@angular/core'], factory) :
    (factory((global['suyash-lerna'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuyashLernaService = /** @class */ (function () {
        function SuyashLernaService() {
        }
        SuyashLernaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SuyashLernaService.ctorParameters = function () { return []; };
        /** @nocollapse */ SuyashLernaService.ngInjectableDef = i0.defineInjectable({ factory: function SuyashLernaService_Factory() { return new SuyashLernaService(); }, token: SuyashLernaService, providedIn: "root" });
        return SuyashLernaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuyashLernaComponent = /** @class */ (function () {
        function SuyashLernaComponent() {
        }
        /**
         * @return {?}
         */
        SuyashLernaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SuyashLernaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-suyash-lerna',
                        template: "\n    <p>\n      suyash-lerna works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SuyashLernaComponent.ctorParameters = function () { return []; };
        return SuyashLernaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SuyashLernaModule = /** @class */ (function () {
        function SuyashLernaModule() {
        }
        SuyashLernaModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SuyashLernaComponent],
                        imports: [],
                        exports: [SuyashLernaComponent]
                    },] }
        ];
        return SuyashLernaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SuyashLernaService = SuyashLernaService;
    exports.SuyashLernaComponent = SuyashLernaComponent;
    exports.SuyashLernaModule = SuyashLernaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3V5YXNoLWxlcm5hLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc3V5YXNoLWxlcm5hL2xpYi9zdXlhc2gtbGVybmEuc2VydmljZS50cyIsIm5nOi8vc3V5YXNoLWxlcm5hL2xpYi9zdXlhc2gtbGVybmEuY29tcG9uZW50LnRzIiwibmc6Ly9zdXlhc2gtbGVybmEvbGliL3N1eWFzaC1sZXJuYS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdXlhc2hMZXJuYVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3V5YXNoLWxlcm5hJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHN1eWFzaC1sZXJuYSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3V5YXNoTGVybmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1eWFzaExlcm5hQ29tcG9uZW50IH0gZnJvbSAnLi9zdXlhc2gtbGVybmEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3V5YXNoTGVybmFDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtTdXlhc2hMZXJuYUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3V5YXNoTGVybmFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztpQ0FKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHVDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxvREFJVDtxQkFFRjs7OztRQVFELDJCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQUdBO1NBTWtDOztvQkFOakNDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ2hDOztRQUNnQyx3QkFBQztLQU5sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9