import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDateRangePickerComponent } from './ngx-daterangepicker.component';
import { NgxFormatPipe } from './ngx-format.pipe';
var NgxDateRangePickerModule = /** @class */ (function () {
    function NgxDateRangePickerModule() {
    }
    NgxDateRangePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxDateRangePickerComponent, NgxFormatPipe],
                    imports: [CommonModule, FormsModule],
                    exports: [NgxDateRangePickerComponent, CommonModule, FormsModule]
                },] },
    ];
    /** @nocollapse */
    NgxDateRangePickerModule.ctorParameters = function () { return []; };
    return NgxDateRangePickerModule;
}());
export { NgxDateRangePickerModule };
