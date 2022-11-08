import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuctionImplementationDocument = HydratedDocument<AuctionImplementation>;

@Schema()
export class AuctionImplementation{

  @Prop()
  nftAddress: string;

  @Prop()
  nftId: string;

  @Prop()
  sellerAddress: string;



}

export const UserSchema = SchemaFactory.createForClass(AuctionImplementation);