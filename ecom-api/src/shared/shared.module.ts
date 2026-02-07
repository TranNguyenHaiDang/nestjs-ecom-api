import { Global, Module } from '@nestjs/common'
import { PrismaService } from './services/prisma.service'
import { HashingService } from './services/hashing.service'
import { TokenService } from './services/token.service'
import { JwtModule } from '@nestjs/jwt'
import { SharedUserRepository } from './repositories/shared-user.repo'
import { EmailService } from './services/email.service'
import { AccessTokenGuard } from './guards/access-token.guard'
import { TwoFactorService } from './services/2fa.service'

const sharedServices = [
  PrismaService,
  HashingService,
  TokenService,
  AccessTokenGuard,
  SharedUserRepository,
  EmailService,
  TwoFactorService,
]

@Global()
@Module({
  providers: sharedServices,
  exports: sharedServices,
  imports: [JwtModule],
})
export class SharedModule {}
