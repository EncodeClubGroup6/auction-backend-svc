
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {

  @Prop()
  txHash: string;

  @Prop()
  addressTo: string;

  @Prop()
  addressFrom: string;

  @Prop()
  emittedEvent: string;


}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);