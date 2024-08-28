import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modals/product.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<any>(
        'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products'
      )
      .pipe(map((res) => res[0]));
  }
}
