import { Component } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Sepet } from '../sepet/sepet';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [];
  sepet: Sepet[] = [];

  ngOnInit() {
    // aktıflestırılmıs route nın parametrelerıne sahıp ol demek
    this.activateRoute.params.subscribe((params) => {
      this.productService
        .getProducts(params['categoryId'])
        .subscribe((data) => {
          this.products = data;
        });
    });
  }

  sepete_ekle(eleman: Sepet): void {
    this.productService.urun_sepete_ekle(eleman).subscribe((data) => {
      this.alertifyService.success(data.name + ' Sepete Eklendi');
    });
  }
  // fonksıyona verılen parametreler any olmadıgından turu belırtılmelıdır
}
