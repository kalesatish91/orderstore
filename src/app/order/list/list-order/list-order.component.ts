import { Component, OnInit } from '@angular/core';
import { Order } from '../../../order';
import { OrderService } from '../../../order.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) {
  }

  getOrders() {
    // console.log("getOrders")
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders)
    });
  }

  addOrder(): void {
    this.router.navigate(['add-order'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  deleteOrder(id: number): void {
    if (confirm("Are you sure you want to delete?")) {
      this.orderService.deleteOrder(id)
        .subscribe(data => {
          this.getOrders();
          // this.router.navigate(['list-orders']);
        });
    }
  };

  ngOnInit(): void {
    console.log("ngOnInit")
    this.getOrders();
    // this.router.events.subscribe(event => {
    //   console.log(event)
    //   if(event instanceof NavigationEnd) 
    //     this.getOrders();
    // });
  }

}
