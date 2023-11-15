import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem, GalleryRef, ImageItem } from '@ngx-gallery/core';
import { Asset } from 'app/shared/interfaces/assets/asset.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: Asset[];
  public galleryPhotos: GalleryItem[] = [];
  public galleryRef: GalleryRef;

  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
    this.setGallery();
  }
 
  private setGallery() {
    this.galleryRef = this.gallery.ref();
    this.galleryPhotos = this.images.map(item =>
      new ImageItem({ src: item.preview, thumb: item.preview })
    );
    this.galleryRef?.load(this.galleryPhotos);
  }
}
