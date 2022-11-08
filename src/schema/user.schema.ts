import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<AuctionUser>;

@Schema()
export class AuctionUser {
  @Prop()
  address: string;

  @Prop()
  roleSeller: boolean;


}

export const UserSchema = SchemaFactory.createForClass(AuctionUser);