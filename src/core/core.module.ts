import { RoleGuard } from './role.guard';
import { Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from './cors.middleware';
import { AuthenticationMiddleware } from './authentication.middleware';
import { UnauthorizedExceptionFilter } from './unauthorized.exception.filter';
import { AnyExceptionFilter } from './any.exception.filter';

@Module({
  imports: [],
  controllers: [],
  components: [AnyExceptionFilter, UnauthorizedExceptionFilter],
  modules: [],
  exports: [CorsMiddleware, 
            AuthenticationMiddleware, 
            UnauthorizedExceptionFilter, 
            AnyExceptionFilter]
})
export class CoreModule {}

