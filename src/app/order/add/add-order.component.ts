import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Order } from 'src/app/order';
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less']
})
export class AddOrderComponent implements OnInit {
  id: number;
  order: Order;
  isEditMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<AddOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.isEditMode = this?.data?.id != undefined;

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      email: ['', Validators.required],
      amount: ['', Validators.required]
    });

    if (this.isEditMode) {
      this.orderService.getOrder(this.data.id)
        .subscribe(data => {
          this.addForm.patchValue(data);
        })
    }
  }

  resetForm() {
    this.addForm.reset();
  }

  closeModal() {
    this.resetForm();
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.addForm.value)
    if (this.isEditMode) {
      this.orderService.updateOrder(this.addForm.value)
        .subscribe(() => {
          this.closeModal();
          // this.router.navigate(['dashboard']);
        });
    } else {
      this.orderService.addOrder(this.addForm.value)
        .subscribe(() => {
          this.closeModal();
          // this.router.navigate(['dashboard']);
        });
    }
  }

}