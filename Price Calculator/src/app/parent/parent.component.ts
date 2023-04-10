import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  item: string = ' ';
  quantity: number = 1;
  price: number = 0;
  rows: { item: string, quantity: number, price: number, total: number }[] = [];

  calculateTotal() {
    const total = this.quantity * this.price;
    this.rows.push({ item: this.item, quantity: this.quantity, price: this.price, total: total });
  }
  getTotalProducts(): number {
    return this.rows.length;
  }

  getTotalQuantity(): number {
    return this.rows.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalSum(): number {
    return this.rows.reduce((sum, product) => sum + product.total, 0);
  }
}
