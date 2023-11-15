import { GalleryConfig } from "@ngx-gallery/core";
import { Subscription } from "rxjs";

export const tryUnsubscribe = (subscription: Subscription) => {
    if (subscription) {
        subscription.unsubscribe();
    }
}

export const GALLERY_CONFIG: GalleryConfig = { 
    imageSize: 'contain', 
    thumb: true, 
    loop: false, 
    nav: true, 
    counter: false, 
    thumbWidth: 150 
};