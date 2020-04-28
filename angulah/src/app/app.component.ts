import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { notBarbieValidator } from './validators/barbie.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newProduct = {} as Product;

  get f() {
    return this.addProductForm.controls;
  }

  addProductForm = new FormGroup({
    product: new FormControl(undefined, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9 .-]+$/),
      notBarbieValidator,
    ]),
    prijs: new FormControl(undefined, Validators.required),
    photo: new FormControl(undefined, Validators.required),
  });

  vrijmarktproducten: Product[] = [
    {
      id: 4,
      product: 'Slinkie',
      prijs: 1.99,
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/61f6Le%2BWT5L._AC_SX450_.jpg',
    },
    {
      id: 8,
      product: 'Deck kaarten',
      prijs: 0.5,
      photo:
        'https://medusa.ugent.be/nl/exercises/2107631035/description/pYmwlyFdf5A-lWdu/media/secret_cards.jpg',
    },
    {
      id: 15,
      product: 'Fiets van oma',
      prijs: 20.99,
      photo:
        'https://static.zoom.nl/04ABBF852B8BCB92CD776FE31637C85C-aftands-fietsie.jpg',
    },
  ];

  addProductReactive() {
    this.vrijmarktproducten.push(this.addProductForm.value);
  }

  addProductTemplateDriven() {
    this.vrijmarktproducten.push(this.newProduct);
  }
}
