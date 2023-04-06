import { Component } from '@angular/core';
import { Product } from '../product/product';
import { GuncellemeService } from '../services/guncelleme.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../category/category';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-urun-guncelle',
  templateUrl: './urun-guncelle.component.html',
  styleUrls: ['./urun-guncelle.component.css'],
})
export class UrunGuncelleComponent {
  constructor(
    private guncellemeService: GuncellemeService,
    private categoryService: CategoryService,
    private location: Location
  ) {}
  filterText = '';
  page_name = 'Ürün Güncelleme Sayfası';

  // TODO urun gostermek ıcın kullanılan verıler
  products: Product[] = [];
  public veri?: Product;
  public update_veri?: Product;
  kategori: Category[] = [];
  public seeguncal?: Category;
  // TODO ekrana urun ve kategorileri gosterme ıslemı
  ngOnInit(): void {
    // guncelleme sayfası urun yazsıtma kısmı
    this.guncellemeService.see().subscribe((data: Product[]) => {
      this.products = data;
    });
    // guncelleme  sayfası kategori yansıtma kısmı
    this.categoryService.getCategories().subscribe((data) => {
      this.kategori = data;
    });
  }
  yapilacak_div: boolean = true;
  yapilacak_modal: boolean = false;
  sayfa_kapama() {
    this.yapilacak_modal = false;
    this.yapilacak_div = true;
  }
  sayfa_acma(urunum: Product) {
    this.yapilacak_div = false;
    this.yapilacak_modal = true;
    // TODO modal acıldıgında verılerı modalda gosterelım
    this.veri = this.guncellemeService.guncellencek_veriler(urunum);
  }

  // TODO gUNCELLEME VERILERI BURDA OLACAK
  fiyat = '';
  onKeyUpFiyat(event: any) {
    this.fiyat = event.target.value;
  }
  aciklama = '';
  onKeyUpAciklama(aciklama: any) {
    this.aciklama = aciklama.target.value;
  }
  adi = '';
  onKeyUpAdi(adi: any) {
    this.adi = adi.target.value;
  }
  url = '';
  onKeyUpUrl(url: any) {
    this.url = url.target.value;
  }
  new_kategori = '';
  onKeyUpKategori(new_kategori: any) {
    this.new_kategori = new_kategori.target.value;
  }
  category = new FormControl('');
  // yukardakı verıye ulasılacaguı zaman category.value yazılmalıdır

  // guncel_veri: Product = {
  //   id: 0,
  //   name: '', //adı +
  //   price: this.fiyat,
  //   categoryId: this.category, // kategorısı +
  //   description: '', // acıklama +
  //   imageUrl: '', // resım +
  // };

  guncelleme_islemi(): void {
    this.guncellemeService
      .update_urun(
        this.fiyat,
        this.aciklama,
        this.adi,
        this.url,
        this.new_kategori,
        this.category
      )
      .subscribe(() => {
        // this.location.back();
        alert('oldu');
      });
  }
}
