import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controller/app.controller';
import { AuctionUser, UserSchema } from './schema/user.schema';
import { Transaction, TransactionSchema } from './schema/transaction.schema';
import { TransactionService } from './service/transaction.service';
import { TransactionController } from './controller/transaction.controller';
import { AppService } from './service/app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: AuctionUser.name, schema: UserSchema },
      { name: Transaction.name, schema: TransactionSchema }])],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
