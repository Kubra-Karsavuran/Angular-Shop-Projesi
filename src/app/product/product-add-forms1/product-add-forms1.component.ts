import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms1Component {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {}

  deneme: Product = {
    id: 0,
    name: '', //adı +
    price: 0, //fıyatı +
    categoryId: 0, // kategorısı +
    description: '', // acıklama +
    imageUrl: '', // resım +
  };

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.productService.urunEkle(this.deneme).subscribe((data) => {
      this.alertifyService.success(data.name + ' Başarıyla Eklendi');
    });
  }
}
