import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductComponent} from "./component/product/product.component";
import {CartComponent} from "./component/cart/cart.component";

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
