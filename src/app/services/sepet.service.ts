import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sepet } from '../sepet/sepet';

@Injectable({
  providedIn: 'root',
})
export class SepetService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/sepet';

  //TODO sepeti goruntuleme ıslemı
  see(): Observable<Sepet[]> {
    return this.http.get<Sepet[]>(this.path);
  }

  // TODO sepetten sılme ıslemı yapılacak
  sepetten_sil(urunum: Sepet): Observable<Sepet[]> {
    return this.http.delete<Sepet[]>(this.path + '/' + urunum.id);
  }
}
