import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'JP';

  query;

  vrijmarktproducten = [
    { id: 4, product: 'Slinkie', prijs: 1.99, photo: 'https://images-na.ssl-images-amazon.com/images/I/61f6Le%2BWT5L._AC_SX450_.jpg' },
    { id: 8, product: 'Deck kaarten', prijs: 0.50, photo: 'https://medusa.ugent.be/nl/exercises/2107631035/description/pYmwlyFdf5A-lWdu/media/secret_cards.jpg' },
    { id: 15, product: 'Fiets', prijs: 20.99, photo: 'https://static.zoom.nl/04ABBF852B8BCB92CD776FE31637C85C-aftands-fietsie.jpg' },
  ];

  changeName() {
    this.name += 'Bas';
  }

  addProduct() {
    this.vrijmarktproducten.push({
      id: 16,
      product: 'Walkie-talkie',
      prijs: 3.50,
      photo: 'https://image.intertoys.nl/wcsstore/IntertoysCAS/images/catalog/full/1958080-3bc1e374.jpg'
    });
  }
}
