import { Component } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { SepetService } from '../services/sepet.service';
import { Sepet } from './sepet';
@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css'],
  providers: [SepetService],
})
export class SepetComponent {
  constructor(
    private alertifyService: AlertifyService,
    private sepetService: SepetService
  ) {}
  filterText = '';
  title = 'Sepetim';
  sepet: Sepet[] = [];

  // TODO ekrana urun gosterme ıslemı
  ngOnInit() {
    this.sepetService.see().subscribe((data: Sepet[]) => {
      this.sepet = data;
    });
  }

  sepetten_sil(silinece_eleman: Sepet): void {
    this.sepetService.sepetten_sil(silinece_eleman).subscribe((data) => {
      this.alertifyService.sepetten_veri_sil('Sepetten Ürün Silindi');
    });
  }
}
