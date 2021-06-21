import { Category } from './../models/category.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productSelected = new EventEmitter<Products>();
  category: Category[] = [
    {
      id: '1',
      name: 'child',
    },
    {
      id: '2',
      name: 'adult',
    },
  ];
  product: Products[] = [
    {
      id: '2',
      name: 'Genji',
      price: '200.000',
      image: 'hinh2.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '3',
      name: 'Wing GunDam Zero',
      price: '1.300.000',
      image: 'hinh3.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '4',
      name: 'RG Evengelion',
      price: '1.150.000',
      image: 'hinh4.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '5',
      name: 'RX Nu GunDam',
      price: '1.250.000',
      image: 'hinh5.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '6',
      name: 'METAL BLACK DRAGON',
      price: '5.600.000',
      image: 'hinh6.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '7',
      name: 'DRAGON MOMOKO GAT-X105',
      price: '1.550.000',
      image: 'hinh7.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '8',
      name: 'RG 34 1/144 MSN-02 ZEONG',
      price: '1.250.000',
      image: 'hinh8.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '9',
      name: 'GUNDAM ASTRAY RED FRAME',
      price: '1.900.000',
      image: 'hinh9.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '10',
      name: 'MG 1/100 GUNDAM BARBATOS',
      price: '1.200.000',
      image: 'hinh10.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '11',
      name: 'MSN-04 SAZABI [CLEAR COLOR]',
      price: '1.600.000',
      image: 'hinh11.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '12',
      name: 'POKEMON PLAMO MAGIKARP',
      price: '750.000',
      image: 'hinh12.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '13',
      name: 'POKEMON PLASTIC PIKACHU',
      price: '180.000',
      image: 'hinh13.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '14',
      name: 'SCORBUNNY POKEMON PLAMO',
      price: '180.000',
      image: 'hinh14.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '15',
      name: 'KYUREM POKEMON PLAMO',
      price: '200.000',
      image: 'hinh15.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },

    {
      id: '16',
      name: 'RAYQUAZA POKEMON PLAMO',
      price: '380.000',
      image: 'hinh16.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '17',
      name: 'DRAGONITE POKEMON PLAMO',
      price: '350.000',
      image: 'hinh17.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '18',
      name: 'WHITE POKEMON PLAMO',
      price: '260.000',
      image: 'hinh18.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '19',
      name: 'GENERAL GIRL MG-02 GUAN YU',
      price: '1.250.000',
      image: 'hinh19.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '20',
      name: 'GENERAL GIRL MG-01 ZHAO YUN',
      price: '900.000',
      image: 'hinh20.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },

    {
      id: '21',
      name: 'A.T.K.GIRL AZURE DRAGON',
      price: '900.000',
      image: 'hinh21.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '22',
      name: 'A.T.K.GIRL TITANS',
      price: '850.000',
      image: 'hinh22.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '23',
      name: 'A.T.K.GIRL WHITE TIGER',
      price: '850.000',
      image: 'hinh23.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '24',
      name: 'A.T.K.GIRL ARACHNE 2.0',
      price: '800.000',
      image: 'hinh24.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '25',
      name: 'FLIGHT UNIT GIRL SET',
      price: '550.000',
      image: 'hinh25.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },

    {
      id: '26',
      name: 'ROCKMAN ZERO COPY X',
      price: '920.000',
      image: 'hinh26.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: '26',
    },
    {
      id: '27',
      name: 'JX3 - MH01',
      price: '250.000',
      image: 'hinh27.png',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'adult',
    },
    {
      id: '28',
      name: 'JX3 - MH02',
      price: '200.000',
      image: 'hinh28.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '29',
      name: 'JX3 - MH03',
      price: '200.000',
      image: 'hinh29.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
    {
      id: '30',
      name: 'TRUNKS DRAGON BALL',
      price: '520.000',
      image: 'hinh30.jpg',
      quantity: '10',
      description:
        'A toy is an item that is used in play, especially one designed for such use. It is mainly intended for use by children, though may also be marketed to adults under ...',
      categoryId: 'child',
    },
  ];

  getProduct() {
    return this.product;
  }
  getProductIndex(index: string) {
    return this.product.find((item) => item.id === index);
  }
  addProduct(product: Products) {
    const id = Math.trunc(40 + Math.random() * 10);
    const newProduct = {
      id: id.toString(),
      ...product,
    };
    this.product.push(newProduct);
    console.log(this.product);
  }
  updateProduct(index: string, newProduct: Products) {
    const indexProduct = this.product.findIndex((item) => item.id === index);
    this.product[indexProduct] = Object.assign(
      this.product[indexProduct],
      newProduct
    );
  }
  deleteProduct(index: number) {
    this.product.splice(index, 1);
  }
  getCategory() {
    return this.category;
  }
}
