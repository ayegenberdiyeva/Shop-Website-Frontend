import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() isAllProductsSelected: boolean = false;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  handleLike() {
    this.like.emit(this.product.id);
  }

  handleRemove() {
    this.remove.emit(this.product.id);
  }

  shareOn(platform: 'whatsapp' | 'telegram', link: string) {
    const encodedLink = encodeURIComponent(link);
    let shareUrl = '';

    if (platform === 'whatsapp'){
      shareUrl = `https://wa.me/?text=${encodedLink}`;
    } else if (platform === 'telegram'){
      shareUrl = `https://t.me/share/url?url=${encodedLink}`;
    }

    window.open(shareUrl, '_blank');
  }
}
