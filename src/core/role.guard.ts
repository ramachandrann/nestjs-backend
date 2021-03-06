import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(req, context: ExecutionContext): boolean {
    const { parent, handler } = context;
    const roles = this.reflector.get<string[]>('roles', handler);
    console.log(roles);
    // if (!roles) {
    //   return true;
    // }

    // const user = req.user;
    // const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => item === role));
    // return user && user.roles && hasRole();
    return true;
  }
}