import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() productsList: Product[] = [];
  @Input() isAllProductsSelected: boolean = false;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onRemove(id: number) {
    this.remove.emit(id);
  }

  onLike(id: number) {
    this.like.emit(id);
  }
}
