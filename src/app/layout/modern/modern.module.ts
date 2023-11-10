import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'app/shared/shared.module';
import { ModernLayoutComponent } from 'app/layout//modern/modern.component';

@NgModule({
    declarations: [
        ModernLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        SharedModule
    ],
    exports: [
        ModernLayoutComponent
    ]
})
export class ModernLayoutModule
{
}
