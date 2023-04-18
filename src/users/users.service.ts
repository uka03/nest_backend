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
  addUser(user) {
    this.users.push(user);
    return 'success';
  }
}
