import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : undefined;
    // arama ifadesı varsa bu verıyı kucuk ıfadeye cevır

    return filterText
      ? value.filter(
          (p: Product) => p.name.toLocaleLowerCase().indexOf(filterText!) !== -1
        )
      : value;

    //filtertext varmı varsa value yı fıltrele her bır p için kucuk harfe cevır ve içerisinde
    // arama ıfadesı varmı dıye bak
  }
}
