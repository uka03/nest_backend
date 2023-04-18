import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  users = [];
  getAllUsers() {
    return this.userModel.find({});
  }
  async addUser(user) {
    console.log(user);
    const resilt = await this.userModel.insertMany(user);
    return `success ${resilt}`;
  }
}
