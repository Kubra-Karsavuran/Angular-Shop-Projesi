import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root',
})
export class UrunSilService {
  static delete(_urunum: Product) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  // TODO urun gosterme
  see(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }

  // TODO urun sılme ıslemı
  delete(urunum: Product): Observable<Product[]> {
    return this.http.delete<Product[]>(this.path + '/' + urunum.id);
  }
}
