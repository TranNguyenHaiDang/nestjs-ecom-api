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
    // Đảm bảo object clean, không có undefined fields
    const where = 'email' in uniqueObject ? { email: uniqueObject.email } : { id: uniqueObject.id }

    return this.prismaService.user.findUnique({ where })
  }
}
