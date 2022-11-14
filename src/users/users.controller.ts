import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

let sampleUsers = [{
  id: 1,
  name: 'user1',
  email: 'user1@email.com'
}]
@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return sampleUsers
  }
  @Get(':id')
  findOne(@Param() params) {
    const id = params.id
    return sampleUsers.find(user => user.id === id)
  }
  @Post()
  createOne() {
    const paramsBody = {
      id: 2,
      name: 'user2',
      email: 'user2@email.com'

    }
    sampleUsers.push(paramsBody)
    return sampleUsers
  }
  @Put(':id')
  updateOne(@Param() params) {
    const id = params.id
    const paramsBody = {
      id: id,
      name: 'updatedUser',
      email: 'email-updated@email.com'
    }
    const indexOfUser = sampleUsers.findIndex(item => item.id === id)
    sampleUsers[indexOfUser] = paramsBody
    return sampleUsers[indexOfUser]
  }
  @Patch(':id')
  updateOnePartly(@Param() params) {
    const id = params.id
    const paramsBody = {
      email: 'email-update-only@email.com'
    }
    const indexOfUser = sampleUsers.findIndex(item => item.id === id)
    sampleUsers[indexOfUser].email = paramsBody.email
    return sampleUsers[indexOfUser]
  }
  @Delete(':id')
  deleteOne(@Param() params) {
    const id = params.id
    sampleUsers = sampleUsers.filter(user => user.id === id)
    return sampleUsers
  }
}
