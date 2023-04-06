import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { GuncellemeService } from './guncelleme.service';
import { UrunSilService } from './urun-sil.service';
import { SepetService } from './sepet.service';
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor(
    private urunSilService: UrunSilService,
    private guncellemeService: GuncellemeService,
    private sepetService: SepetService
  ) {}

  // TODO sepete eklendi mesajı burası
  success(message: string) {
    alertify.success(message);
  }

  //this.urunSilService.delete(_urunum).subscribe();
  // TODO urunu sılme ıslemını kontrolu burda yapıldı ıslem onaylanırsa sılme ıslemı yapılıyor
  // sepet_oldu(message: string) {
  //   alertify.success(message);
  // }
  // maza_oldu(message: string) {
  //   alertify.success(message);
  // }
  sil_see(urun: Product) {
    alertify.confirm(
      'ıkı sılemde olacak burda',
      () => {
        this.sepetService.sepetten_sil(urun).subscribe();
        this.urunSilService.delete(urun).subscribe();
        alertify.success('Ok' + urun.name);
      },
      function () {
        alertify.error('Cancel');
      }
    );
  }

  // TODO sepette zaten var uyarısı
  hata(message: string) {
    alertify.alert(message, function () {
      alertify.message('OK');
    });
  }

  sepetten_veri_sil(message: string) {
    alertify.success(message);
  }

  //TODO urun guncelleme ıslemının uyarısı gelecek buraya
  // veri_guncelle(_urunum: Product) {
  //   alertify.confirm(
  //     _urunum.name + ' Adlı Ürünü Güncellemek İstediğinize Emin misiniz ?',
  //     () => {
  //       alertify.success('Ok');
  //       this.guncellemeService.update_urun(_urunum).subscribe();
  //     },
  //     function () {
  //       alertify.error('Cancel');
  //     }
  //   );
  // }
}
