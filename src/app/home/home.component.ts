import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() product!: Product;

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
