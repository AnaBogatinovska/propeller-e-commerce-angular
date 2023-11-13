import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'modern'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule) },
            { path: 'orders', loadChildren: () => import('app/modules/orders/orders.module').then(m => m.OrdersModule) },
            { path: 'product/:id', loadChildren: () => import('app/modules/product/product.module').then(m => m.ProductModule) },
        ]
    },
];
