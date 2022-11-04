import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService, PaymentOrder } from '../service/app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("hello")
  getHello() {
    return "Hello from auction controller";
  }

  @Get("total-supply")
  getTotalSupply() {
    return this.appService.getTotalSupply();
  }

  @Get("allowance")
  getAllowance(@Query("from") from: string, @Query("to") to: string) {
    return this.appService.getAllowance(from, to);
  }

  @Get("transaction-by-hash/:hash")
  getTxByHash(hash:string) {
    return this.appService.getTransactionByHash(hash);
  }

  @Get("transaction-receipt-by-hash/:hash")
  getTxReceiptByHash(@Param('hash') hash:string) {
    return this.appService.getTransactionReceiptByHash(hash);
  }

  @Get("list-payment-orders")
  listPaymentOrders() {
    this.appService.listPaymentOrders();
  }

  @Get("payment-order")
  getPaymentOrderById(@Query("id") id: string) {
    this.appService.getPaymentOrderById(id);
  }

  @Post('create-order')
  createOrder(@Body() body: PaymentOrder) {
    this.appService.createPaymentOrder(body);
  }


}
