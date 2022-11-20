import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Users } from './users.interface';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Get()
  findAll() : Users []{
    return this.usersServices.findAll()
  }
  @Get(':id')
  findOne(@Param() params) : Users{
    const id = params.id
    return this.usersServices.findOne(id)
  }
  @Post()
  createOne() : Users []{
    const paramsBody = {
      id: 2,
      name: 'user2',
      email: 'user2@email.com'

    }
    this.usersServices.create(paramsBody)
    return this.usersServices.findAll() // return the updated list
  }
  @Put(':id')
  updateOne(@Param() params) : Users {
    const id = params.id
    const paramsBody = {
      id: id,
      name: 'updatedUser',
      email: 'email-updated@email.com'
    }
    this.usersServices.updateOne(id, paramsBody)
    return paramsBody
  }
  @Patch(':id')
  updateOnePartly(@Param() params) : Users {
    const id = params.id
    const paramsBody = {
      email: 'email-update-only@email.com'
    }
    return this.usersServices.updateOnePartially(id, paramsBody.email)
  }
  @Delete(':id')
  deleteOne(@Param() params) : Users []{
    const id = params.id
    return this.usersServices.delete(id)
  }
}
