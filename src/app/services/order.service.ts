import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:8080/orders/';

  constructor(private http: HttpClient) {
    console.log("this.http ", this.http);
  }

  getOrders(): Observable<any> {
    console.log("calling service")
    return this.http.get(`${this.url}`);
  }

  addOrder(order: Object): Observable<Object> {
    return this.http.post(`${this.url}`, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  getOrder(id: number): Observable<any> {
    return this.http.get(`${this.url}${id}`);
  }

  updateOrder(order: Order): Observable<Object> {
    return this.http.put(`${this.url}${order.id}`, order);
  }
}
