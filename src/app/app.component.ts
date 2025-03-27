import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product, Category } from './interfaces/product';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, CommonModule, ProductItemComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-kaspi';

  productsList: Product[] = [
    {
      id: 1,
      name: 'Apple 18W USB-C Power Adapter',
      description: 'USB Type-C White',
      rating: 5,
      imageUrl: '/assets/images/prod1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },
    {
      id: 2,
      name: 'Apple iPhone 13',
      description: 'Black 128GB',
      rating: 4.5,
      imageUrl: '/assets/images/prod2.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 3,
      name: 'PhoneCase for iPhone 13',
      description: 'Transparent',
      rating: 3.5,
      imageUrl: '/assets/images/prod3.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000'
    },
    {
      id: 4,
      name: 'Apple iPhone 16 Pro Max',
      description: 'Black 256GB',
      rating: 5.0,
      imageUrl: '/assets/images/prod4.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      id: 5,
      name: 'Apple 20W USB-C Power Adapter',
      description: 'USB Type-C White',
      rating: 4.5,
      imageUrl: '/assets/images/prod5.jpg',
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },
    {
      id: 6,
      name: 'Apple iPhone 16 Pro Max',
      description: 'Graphite 256GB',
      rating: 5.0,
      imageUrl: '/assets/images/prod6.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id: 7,
      name: 'Xiaomi Redmi 13C',
      description: '8GB/256GB Black',
      rating: 4.5,
      imageUrl: '/assets/images/prod7.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      id: 8,
      name: 'PhoneCase for iPhone 11',
      description: 'Transparent',
      rating: 4.5,
      imageUrl: '/assets/images/prod8.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000'
    },
    {
      id: 9,
      name: 'Apple iPhone 16 Pro Max',
      description: 'Grey 256GB',
      rating: 4.5,
      imageUrl: '/assets/images/prod9.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    },
    {
      id: 10,
      name: 'Apple iPhone 16 Pro',
      description: 'Black 256GB',
      rating: 4.5,
      imageUrl: '/assets/images/prod10.jpeg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000'
    }
  ];

  categories: Category[] = [
    {
      name: 'Electronics',
      products: [
        {
          id: 2,
          name: 'Apple iPhone 13',
          description: 'Black 128GB',
          rating: 4.5,
          imageUrl: '/assets/images/prod2.jpg',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
          likes: 10,
        },
        {
          id: 4,
          name: 'Apple iPhone 16 Pro Max',
          description: 'Black 256GB',
          rating: 5.0,
          imageUrl: '/assets/images/prod4.jpeg',
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
          likes: 15,
        },
        {
          id: 6,
          name: 'Apple iPhone 16 Pro Max',
          description: 'Graphite 256GB',
          rating: 5.0,
          imageUrl: '/assets/images/prod6.jpeg',
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
          likes: 20,
        },
        {
          id: 7,
          name: 'Xiaomi Redmi 13C',
          description: '8GB/256GB Black',
          rating: 4.5,
          imageUrl: '/assets/images/prod7.jpg',
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
          likes: 25,
        },
        {
          id: 9,
          name: 'Apple iPhone 16 Pro Max',
          description: 'Grey 256GB',
          rating: 4.5,
          imageUrl: '/assets/images/prod9.jpeg',
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000',
          likes: 30,
        },
        {
          id: 10,
          name: 'Apple iPhone 16 Pro',
          description: 'Black 256GB',
          rating: 4.5,
          imageUrl: '/assets/images/prod10.jpeg',
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
          likes: 35,
        }
      ],
    },

    {
      name: 'Accessories',
      products: [
        {
          id: 1,
          name: 'Apple 18W USB-C Power Adapter',
          description: 'USB Type-C White',
          rating: 5,
          imageUrl: '/assets/images/prod1.jpg',
          link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
          likes: 10,
        },
        {
          id: 3,
          name: 'PhoneCase for iPhone 13',
          description: 'Transparent',
          rating: 3.5,
          imageUrl: '/assets/images/prod3.jpeg',
          link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
          likes: 5,
        },
        {
          id: 5,
          name: 'Apple 20W USB-C Power Adapter',
          description: 'USB Type-C White',
          rating: 4.5,
          imageUrl: '/assets/images/prod5.jpg',
          link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
          likes: 7,
        },
        {
          id: 8,
          name: 'PhoneCase for iPhone 11',
          description: 'Transparent',
          rating: 4.5,
          imageUrl: '/assets/images/prod8.jpg',
          link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
          likes: 3,
        },
        {
          id: 21,
          name: 'Для Apple iPhone 13 черный',
          description: 'Чехол-книжка',
          rating: 4.5,
          imageUrl: '/assets/images/prod21.jpg',
          link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-chernyi-113767097/?c=750000000',
          likes: 15
        }
      ],
    },

    {
      name: 'Books',
      products: [
        {
          id: 11,
          name: 'Wonder House Books',
          description: 'Illustrated Tales From Indian Mythology',
          rating: 4.5,
          imageUrl: '/assets/images/prod11.jpg',
          link: 'https://kaspi.kz/shop/p/wonder-house-books-illustrated-tales-from-indian-mythology-134273886/?c=750000000',
          likes: 15
        },
        {
          id: 12,
          name: 'Rose Harkness: Sensory books',
          description: 'Paulo Coelho',
          rating: 5.0,
          imageUrl: '/assets/images/prod12.jpeg',
          link: 'https://kaspi.kz/shop/p/rose-harkness-sensory-books-134005390/?c=750000000',
          likes: 20
        },
        {
          id: 13,
          name: 'Greene R.: The Concise Laws of Human Nature',
          description: 'Paulo Coelho',
          rating: 4.5,
          imageUrl: '/assets/images/prod13.jpeg',
          link: 'https://kaspi.kz/shop/p/greene-r-the-concise-laws-of-human-nature-115781090/?c=750000000',
          likes: 25
        },
        {
          id: 14,
          name: 'Penguin Books: Kim: Rudyard Kipling',
          description: 'Paulo Coelho',
          rating: 4,
          imageUrl: '/assets/images/prod14.jpg',
          link: 'https://kaspi.kz/shop/p/penguin-books-kim-rudyard-kipling-120889971/?c=750000000',
          likes: 3
        },
        {
          id: 15,
          name: 'Ladybird: A Big Box of Little Christmas Books',
          description: 'Paulo Coelho',
          rating: 3.5,
          imageUrl: '/assets/images/prod15.jpg',
          link: 'https://kaspi.kz/shop/p/ladybird-a-big-box-of-little-christmas-books-130534366/?c=750000000',
          likes: 7
        }
      ],
    },

    {
      name: 'Skin Care',
      products: [
        {
          id: 16,
          name: 'Likato Professional Vitamin C',
          description: 'Serum for face and neck, 120 ml',
          rating: 5,
          imageUrl: '/assets/images/prod16.jpeg',
          link: 'https://kaspi.kz/shop/p/likato-professional-vitamin-c-enzimnaja-pudra-120-ml-109559494/?c=750000000',
          likes: 10
        },
        {
          id: 17,
          name: 'Round Lab крем Birch Juice Moisturizing',
          description: 'SPF50 для лица 50',
          rating: 4.5,
          imageUrl: '/assets/images/prod17.jpg',
          link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000',
          likes: 5
        },
        {
          id: 18,
          name: 'Beauty of Joseon крем Relief Sun Rice Probiotics',
          description: 'Serum for face and neck, 120 ml',
          rating: 4.5,
          imageUrl: '/assets/images/prod18.jpg',
          link: 'https://kaspi.kz/shop/p/beauty-of-joseon-krem-relief-sun-rice-probiotics-spf50-dlja-litsa-50-ml-105587876/?c=750000000',
          likes: 7
        },
        {
          id: 19,
          name: 'The Ordinary сыворотка Niacinamide 10%+Zinc 1%',
          description: 'Serum for face and neck, 120 ml',
          rating: 4.5,
          imageUrl: '/assets/images/prod19.jpg',
          link: 'https://kaspi.kz/shop/p/the-ordinary-syvorotka-niacinamide-10-zinc-1-dlja-litsa-dlja-zony-dekol-te-30-ml-100703687/?c=750000000',
          likes: 3
        },
        {
          id: 20,
          name: 'COSRX точечные Acne Pimple Master',
          description: 'Patch 24 шт',
          rating: 4.5,
          imageUrl: '/assets/images/prod20.jpg',
          link: 'https://kaspi.kz/shop/p/cosrx-tochechnye-acne-pimple-master-protivovospalitel-nye-24-sht-100368434/?c=750000000',
          likes: 7
        }
      ],
    }
  ];

  selectedCategory: Category | null = null;
  allProducts = this.categories.flatMap((category) => category.products);

  // set allProducts(categories: Category[]) {
  //   this.allProducts = this.categories.flatMap((category) => category.products);
  // }

  get displayProducts() {
    return this.isAllProductsSelected ? this.allProducts : this.selectedCategory?.products;
  }

  get isAllProductsSelected(): boolean {
    return this.selectedCategory === null;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        (product) => product.id !== productId
      );
      this.allProducts = this.categories.flatMap((category) => category.products);
    } else {
      this.allProducts = this.allProducts.filter((product) => product.id !== productId);
    }
  }

  likeProduct(productId: number) {
    if (this.selectedCategory) {
      const product = this.selectedCategory.products.find(
        (product) => product.id === productId
      );
      if (product) {
        product.liked = !product.liked;
        product.likes = product.liked ? (product.likes || 0) + 1 : (product.likes || 0) - 1;
      }
    } else {
      const product = this.allProducts.find(
        (product) => product.id === productId
      );
      if (product) {
        product.liked = !product.liked;
        product.likes = product.liked ? (product.likes || 0) + 1 : (product.likes || 0) - 1;
      }
    }
  }
}
