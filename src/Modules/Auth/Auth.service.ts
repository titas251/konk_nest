import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../User/User.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtTokenService: JwtService) {}

  async validateUserCredentials(username: string, pass: string) {
    const user = await this.usersService.findUserByUsername(username);

    if (user.password !== pass) {
      return;
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
