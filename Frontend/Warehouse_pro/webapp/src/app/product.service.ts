import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/stock';

  constructor(private http: HttpClient) {}

  
  getProducts(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/all`);
  }


  addProduct(product: Partial<Stock>): Observable<Stock> {

    console.log(product,'kklklk');
    
    return this.http.post<Stock>(`${this.baseUrl}/add`, product);
  }

 
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

 
  updateProduct(id: number, product: Partial<Stock>): Observable<Stock> {
    return this.http.put<Stock>(`${this.baseUrl}/update/${id}`, product);
  }
}
