import { Injectable } from '@nestjs/common'
import { PrismaService } from '../services/prisma.service'
import { UserType } from '../models/shared-user.model'

@Injectable()
export class SharedUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  // async findUnique(uniqueObject: { email: string } | { id: number }): Promise<UserType | null> {
  //   return this.prismaService.user.findUnique({
  //     where: uniqueObject,
  //   })
  // }
  async findUnique(uniqueObject: { email: string } | { id: number }): Promise<UserType | null> {
    if ('email' in uniqueObject && uniqueObject.email !== undefined) {
      return this.prismaService.user.findUnique({
        where: { email: uniqueObject.email },
      })
    }

    if ('id' in uniqueObject && uniqueObject.id !== undefined) {
      return this.prismaService.user.findUnique({
        where: { id: uniqueObject.id },
      })
    }

    throw new Error('Invalid unique object provided')
  }
}
