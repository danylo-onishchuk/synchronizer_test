import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/commonServices/auth/auth.servise';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers['x-auth-token'];

    if(!authToken) {
      return false;
    }

    const token = await this.authService.findOne(authToken);

    if (token) {
      return true;
    }
 
    return false;
  }
}
