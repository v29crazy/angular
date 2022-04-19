import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-hedaer',
  templateUrl: './hedaer.component.html',
  styleUrls: ['./hedaer.component.css']
})
export class HedaerComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
  }

}
