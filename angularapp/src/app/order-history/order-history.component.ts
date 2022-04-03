import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../Models/order-history';
import { OrderHistoryService } from '../order-service/order-history.service';



@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  
    orderHistoryList: OrderHistory[] = [];
    storage: any = sessionStorage;
  
    constructor(private orderHistoryService: OrderHistoryService) { }
  
    ngOnInit(): void {
      this.handleOrderHistory();
    }
  
    handleOrderHistory(): void {
  
      // read the user's email address from browser storage
      const theEmail = JSON.parse(this.storage.getItem());
  
      // retrieve data from the service
      this.orderHistoryService.getOrderHistory().subscribe(
        data => {
          this.orderHistoryList = data._embedded.orders;
        }
      );
    }
  
  }
  
