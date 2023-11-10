import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { ModernLayoutModule } from './modern/modern.module';



@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        ModernLayoutModule
    ],
    exports     : [
        LayoutComponent
    ]
})
export class LayoutModule
{
}
