import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
