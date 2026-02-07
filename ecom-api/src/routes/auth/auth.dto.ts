import { createZodDto } from 'nestjs-zod'
import {
  DisableTwoFactorBodySchema,
  ForgotPasswordBodySchema,
  GetAuthorizationUrlResSchema,
  LoginBodySchema,
  LoginResSchema,
  LogoutBodySchema,
  RefreshTokenBodySchema,
  RefreshTokenResSchema,
  RefreshTokenSchema,
  RegisterBodySchema,
  RegisterResSchema,
  SendOTPBodySchema,
  TwoFactorSetupResSchema,
} from './auth.model'
import { MessageResSchema } from '@/shared/models/response.model'

//strict(): không được gửi lên dữ liệu bị thừa

export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}
export class RegisterResDTO extends createZodDto(RegisterResSchema) {}
export class SendOTPBodyDTO extends createZodDto(SendOTPBodySchema) {}
export class LoginBodyDTO extends createZodDto(LoginBodySchema) {}
export class LoginResDTO extends createZodDto(LoginResSchema) {}
export class RefreshTokenDTO extends createZodDto(RefreshTokenSchema) {}
export class RefreshTokenBodyDTO extends createZodDto(RefreshTokenBodySchema) {}
export class RefreshTokenResDTO extends createZodDto(RefreshTokenResSchema) {}
export class LogoutBodyDTO extends createZodDto(LogoutBodySchema) {}
export class GetAuthorizationUrlResDTO extends createZodDto(GetAuthorizationUrlResSchema) {}
export class ForgotPasswordBodyDTO extends createZodDto(ForgotPasswordBodySchema) {}
export class TwoFactorSetupResDTO extends createZodDto(TwoFactorSetupResSchema) {}
export class DisableTwoFactorBodyDTO extends createZodDto(DisableTwoFactorBodySchema) {}
