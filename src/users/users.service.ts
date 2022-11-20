import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [];

  create(user: Users) {
    this.users.push(user);
  }

  findAll(): Users[] {
    return this.users;
  }
  findOne(userId: number) : Users{
    return this.users.find(user => user.id === userId)
  }
  updateOne(userId: number, updatedUser: Users) : Users{
    const indexOfUser = this.users.findIndex(item => item.id === userId)
    this.users[indexOfUser] = updatedUser
    return this.users[indexOfUser] 
  }
  updateOnePartially(userId: number, email: string): Users{
    const indexOfUser = this.users.findIndex(item => item.id === userId)
    this.users[indexOfUser].email = email
    return this.users[indexOfUser]
    
  }
  delete(userId: number) {
    const everyOtherUsers  = this.users.filter(user => user.id === userId)
    return everyOtherUsers
  }
}
