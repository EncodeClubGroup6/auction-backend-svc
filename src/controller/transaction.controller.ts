import { Controller,  Get } from '@nestjs/common';
import { TransactionService } from '../service/transaction.service';

@Controller('users')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}



  @Get('auctions')
  async getDeployedAuction() {
    return this.transactionService.getDeployedAuctions();
  }


}