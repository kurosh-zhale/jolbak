import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Components */
import { ProductBoxComponent } from './components/product-box/product-box.component';

const components = [ProductBoxComponent];

@NgModule({
  declarations: [ProductBoxComponent],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
