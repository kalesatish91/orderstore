import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrderService} from "../../order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less']
})
export class AddOrderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrderService) {
  }

  addForm: FormGroup;
  onlyNumbers: RegExp;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.onlyNumbers = /^\d+$/;

  }

  onSubmit() {
    this.orderService.addOrder(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-orders']);
      });
  }

}