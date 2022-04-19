import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  constructor(private api:ApiService, private CartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;

        this.productList.forEach((a:any)=>{
          Object.assign(a, {quantity:1,total:a.price});
        });
      })
  }

  addtocart(item: any){
    this.CartService.addtoCart(item);
  }

}
