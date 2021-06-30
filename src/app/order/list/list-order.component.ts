import { Component, OnInit } from '@angular/core';
import { Order } from '../../order';
import { OrderService } from '../../services/order.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddOrderComponent } from '../add/add-order.component';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    public matDialog: MatDialog
    ) {
  }

  getOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders)
    });
  }

  deleteOrder(id: number): void {
    if (confirm("Are you sure you want to delete?")) {
      this.orderService.deleteOrder(id)
        .subscribe(data => {
        });
    }
  };
  
  editOrder(id: number): void {
    this.openModal(id);
  };

  openModal(id ?: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
        id: id
      }
    this.matDialog.open(AddOrderComponent, dialogConfig)
    .afterClosed()
    .subscribe(() => this.getOrders());
  }

  ngOnInit(): void {
    this.getOrders();
  }

}
