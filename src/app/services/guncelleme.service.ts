import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GuncellemeService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  products: Product[] = [];

  // TODO urun gosterme
  see(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path);
  }

  //TODO guncellenecek verıler burda ekrana formda yansıtılıyor
  guncellencek_veriler(urunum: Product) {
    const index = this.products.findIndex(
      (product: { id: number }) => product.id == urunum.id
    );
    this.products[index] = urunum;
    return urunum;
  }

  // TODO guncelleme ıslemı burda yapılacak
  update_urun(
    veri1: string,
    veri2: string,
    veri3: string,
    veri4: string,
    veri5: string,
    veri6: FormControl<string | null>
  ): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    return this.http.put<Product>(this.path, veri1, httpOptions);
  }
}
