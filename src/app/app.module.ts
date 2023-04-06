import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { AlertifyService } from './services/alertify.service';
import { AccountService } from './services/account.service';
import { UrunSilComponent } from './urun-sil/urun-sil.component';
import { UrunGuncelleComponent } from './urun-guncelle/urun-guncelle.component';
import { SepetComponent } from './sepet/sepet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    LoginComponent,
    UrunSilComponent,
    UrunGuncelleComponent,
    SepetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LoginGuard, AlertifyService, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
