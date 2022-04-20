import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-hedaer',
  templateUrl: './hedaer.component.html',
  styleUrls: ['./hedaer.component.css']
})
export class HedaerComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm:string ='';
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
