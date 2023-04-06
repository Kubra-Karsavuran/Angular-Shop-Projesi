import { Component } from '@angular/core';
import { Product } from '../product/product';
import { AlertifyService } from '../services/alertify.service';
import { UrunSilService } from '../services/urun-sil.service';
import { SepetService } from '../services/sepet.service';

@Component({
  selector: 'app-urun-sil',
  templateUrl: './urun-sil.component.html',
  styleUrls: ['./urun-sil.component.css'],
  providers: [UrunSilService], //local servis olacagından buraya koyarız
})
export class UrunSilComponent {
  constructor(
    private urunSilService: UrunSilService,
    private alertifyService: AlertifyService,
    private sepetService: SepetService
  ) {} //kullanacgım verıler
  filterText = '';
  title = 'Ürün Silme Sayfası';
  products: Product[] = [];

  // TODO ekrana urun gosterme ıslemı
  ngOnInit() {
    this.urunSilService.see().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  // TODO ürün silme  işlemi
  delete(urunum: Product): void {
    this.alertifyService.sil_see(urunum);
    // sepetten sıl
    // this.sepetService.sepetten_sil(urunum).subscribe((data) => {
    //   this.alertifyService.sepet_oldu('Sepetten Silindi');
    // });
    //mazadan sıl
    // this.urunSilService.delete(urunum).subscribe((data) => {
    //   this.alertifyService.maza_oldu('Mazadan Silindi');
    // });
    // this.products = this.products.filter((u) => u !== urunum);
    // this.urunSilService.delete(urunum).subscribe();
  }
}
