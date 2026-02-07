## 3. Luồng Hoạt Động Tổng Thể

### Flow 1: Gửi OTP

```
┌─────────────────────────────────────────────────────────────┐
│ Client: POST /auth/send-otp                                  │
│ Body: { email: "user@example.com", type: "REGISTER" }       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ AuthService.sendOTP()                                        │
│                                                              │
│ 1. Check email đã tồn tại trong User table?                 │
│    ├─ Có → Throw 422 "Email đã tồn tại"                     │
│    └─ Không → Tiếp tục                                      │
│                                                              │
│ 2. Generate OTP: "123456"                                   │
│                                                              │
│ 3. Upsert VerificationCode:                                 │
│    - Nếu chưa có → CREATE                                   │
│    - Nếu đã có → UPDATE code & expiresAt                    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Database: verification_code table                            │
│                                                              │
│ email              | code    | type     | expiresAt         │
│ user@example.com   | 123456  | REGISTER | 2026-01-21 10:05  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Response 200:                                                │
│ {                                                            │
│   id: 1,                                                     │
│   email: "user@example.com",                                 │
│   code: "123456",                                            │
│   type: "REGISTER",                                          │
│   expiresAt: "2026-01-21T10:05:00Z"                          │
│ }                                                            │
│                                                              │
│ // TODO: Gửi email chứa code "123456" cho user              │
└─────────────────────────────────────────────────────────────┘
```

### Flow 2: Đăng ký với OTP

```
┌─────────────────────────────────────────────────────────────┐
│ Client: POST /auth/register                                  │
│ Body: {                                                      │
│   email: "user@example.com",                                 │
│   code: "123456",                                            │
│   name: "John",                                              │
│   password: "Pass123!",                                      │
│   confirmPassword: "Pass123!",                               │
│   phoneNumber: "0123456789"                                  │
│ }                                                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ AuthService.register()                                       │
│                                                              │
│ 1. Verify OTP:                                               │
│    findUniqueVerificationCode({                              │
│      email: "user@example.com",                              │
│      code: "123456",                                         │
│      type: "REGISTER"                                        │
│    })                                                        │
│                                                              │
│    ├─ Không tìm thấy → 422 "Mã OTP không hợp lệ"            │
│    ├─ Đã hết hạn → 422 "Mã OTP đã hết hạn"                  │
│    └─ Hợp lệ → Tiếp tục                                     │
│                                                              │
│ 2. Get client role ID: roleId = 2                           │
│                                                              │
│ 3. Hash password: "$2b$10$abc...xyz"                        │
│                                                              │
│ 4. Create user trong database                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Database: users table                                        │
│                                                              │
│ INSERT INTO users (email, name, password, ...)              │
│                                                              │
│ ├─ Success → Return user (không có password)                │
│ └─ Email trùng → 422 "Email đã tồn tại"                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Response 201:                                                │
│ {                                                            │
│   id: 1,                                                     │
│   email: "user@example.com",                                 │
│   name: "John",                                              │
│   phoneNumber: "0123456789",                                 │
│   roleId: 2,                                                 │
│   status: "INACTIVE",                                        │
│   createdAt: "2026-01-21T10:00:00Z"                          │
│ }                                                            │
└─────────────────────────────────────────────────────────────┘
```
