import { RoleName } from '@/shared/constants/role.constant'
import { PrismaService } from '@/shared/services/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RolesService {
  private clientRoleId: number | null = null

  constructor(private readonly prismaService: PrismaService) {}

  async getClientRoleId() {
    if (this.clientRoleId) {
      return this.clientRoleId
    }
    const role = await this.prismaService.role.findUniqueOrThrow({
      where: {
        name: RoleName.Client,
      },
    })
    this.clientRoleId = role.id
    return role.id
  }
}
