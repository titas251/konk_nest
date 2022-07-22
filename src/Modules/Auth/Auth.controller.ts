import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { JwtAuthGuard } from './guards/JwtAuth.guard';
import { LocalAuthGuard } from './guards/LocalAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user;
  }
}
