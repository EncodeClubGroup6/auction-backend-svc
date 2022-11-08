import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BigNumber } from 'ethers';

export type AuctionFactoryDocument = HydratedDocument<AuctionFactory>;

@Schema()
export class AuctionFactory{

  @Prop()
  address: string;

  @Prop()
  ownerAddress: string;

  @Prop()
  creationFee: BigNumber;

  @Prop()
  ownerFeePool: BigNumber;

  @Prop()
  deployedAuction: Array<String>;



}

export const UserSchema = SchemaFactory.createForClass(AuctionFactory);