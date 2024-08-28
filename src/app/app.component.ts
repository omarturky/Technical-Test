import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './modals/product.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  products: Product[];
  destroy$ = new Subject<any>();

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ProductsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      },
      error: (error) => console.error(error),
    });
  }

  userById(item) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
