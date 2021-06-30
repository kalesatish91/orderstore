import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/services/order.service';
import { AddOrderComponent } from '../add/add-order.component';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css']
})
export class CardOrderComponent implements OnInit {
  searchText: string = "";
  orders: Order[] = [];
  constructor(private router: Router, private orderService: OrderService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    // console.log("getOrders")
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders)
    });
  }

  deleteOrder(id: number): void {
    if (confirm("Are you sure you want to delete?")) {
      this.orderService.deleteOrder(id)
        .subscribe(data => {
          this.getOrders();
          // this.router.navigate(['list-orders']);
        });
    }
  };
  
  editOrder(id: number): void {
    // this.router.navigate([`orders/${id}`]);
    this.openModal();
  };

  addOrder(): void {
    // this.router.navigate(['add-order'])
    //   .then((e) => {
    //     if (e) {
    //       console.log("Navigation is successful!");
    //     } else {
    //       console.log("Navigation has failed!");
    //     }
    //   });
    this.openModal();
  };

  openModal(id ?: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    if(!isNaN(id)) {
      dialogConfig.data = {
        id: id
      }
    }
    this.matDialog.open(AddOrderComponent, dialogConfig)
    .afterClosed()
    .subscribe(() => this.getOrders());
  }

}
