import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Sepet } from '../sepet/sepet';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  addProduct(deneme: Product) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';
  yol = 'http://localhost:3000/sepet';

  getProducts(categoryId: any): Observable<Product[]> {
    let newpPath = this.path;
    if (categoryId) {
      newpPath += '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newpPath);
  }

  // bu service sayfasında json dosyalarını kullanara verı gosterme
  // işlemi yapılmkatadır

  urunEkle(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    return this.http.post<Product>(this.path, product, httpOptions);
  }

  urun_sepete_ekle(eleman: Sepet): Observable<Sepet> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    return this.http.post<Sepet>(this.yol, eleman, httpOptions);
  }
}
