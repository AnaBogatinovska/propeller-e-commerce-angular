import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseCardModule } from '@fuse/components/card';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FuseCardModule,
        MaterialModule
    ]
})
export class SharedModule
{
}
