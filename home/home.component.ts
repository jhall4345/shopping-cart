import { Component, OnInit } from '@angular/core';

interface productInterface {
  prodId: number;
  img: string;
  amt: number;
  qnt: number
  name: string;
}

const productArray:productInterface[] = [
  {prodId: 1,
  img: "../../assets/product1.jpg",
  amt: 13.99,
  qnt: 1,
  name: "All Day IPA"
},
  {prodId: 2,
    img: "../../assets/product2.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Goose Island IPA"
  },
  {prodId: 3,
    img: "../../assets/product3.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Voodoo Ranger IPA"
  },
  {prodId: 4,
    img: "../../assets/product4.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Lagunitas IPA"
  },
  {prodId: 5,
    img: "../../assets/product5.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Shock Top"
  },
  {prodId: 6,
    img: "../../assets/product6.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Fat Tire"
  },
  {prodId: 7,
    img: "../../assets/product7.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Mango Cart"
  },
  {prodId: 8,
    img: "../../assets/product8.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Blue Moon"
  },
  {prodId: 9,
    img: "../../assets/product9.jpg",
    amt: 13.99,
    qnt: 1,
    name: "PBR"
  },
  {prodId: 10,
    img: "../../assets/product10.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Budweiser"
  },
  {prodId: 11,
    img: "../../assets/product11.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Yuengling"
  },
  {prodId: 12,
    img: "../../assets/product12.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Coors"
  },
  {prodId: 13,
    img: "../../assets/product13.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Tecate"
  },
  {prodId: 14,
    img: "../../assets/product14.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Corona Extra"
  },
  {prodId: 15,
    img: "../../assets/product15.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Corona Light"
  },
  {prodId: 16,
    img: "../../assets/product16.jpg",
    amt: 13.99,
    qnt: 1,
    name: "Pacifico"
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  containProductArray=productArray;


  qnt:number=1;
  prod=1
  plus(prod: { qnt: number; }) {
    if(prod.qnt != 7) {
      prod.qnt += 1;
    }
  }
  minus(prod: { qnt: number; }) {
    if(prod.qnt != 1) {
      prod.qnt -= 1;
    }
  }

  category = 1;
  itemsCart:any = [];
  addCart(category: { prodId: any; qnt: number; }) {
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null) {
      let storeDataGet:any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else {
      var id = category.prodId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for( let i=0; i<this.itemsCart.length; i++) {
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
  }
}