import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseCardModule } from '@fuse/components/card';
import { MaterialModule } from './modules/material/material.module';
import { GalleryComponent } from './components/gallery/gallery.component';

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
        MaterialModule,
        GalleryComponent,
    ],
    declarations: [
      GalleryComponent
    ]
})
export class SharedModule
{
}
