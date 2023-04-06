import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './product/product.component';
import { SepetComponent } from './sepet/sepet.component';
import { UrunGuncelleComponent } from './urun-guncelle/urun-guncelle.component';
import { UrunSilComponent } from './urun-sil/urun-sil.component';

//canActivate: [LoginGuard]

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  {
    path: 'product-add-1',
    component: ProductAddForms1Component,
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'urun_sil', component: UrunSilComponent },
  {
    path: 'urun_guncelle',
    component: UrunGuncelleComponent,
  },
  { path: 'sepetim', component: SepetComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
