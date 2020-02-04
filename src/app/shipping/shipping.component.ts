import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts:any;
  dados;
constructor(
  private cartService: CartService
) {
}
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    console.log(this.shippingCosts);


    this.shippingCosts.subscribe(
      (resultadoServidor) => {
        console.log(resultadoServidor);
        this.dados =resultadoServidor;
      }
    );
  }

}

