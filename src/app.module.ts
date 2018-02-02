import { ProviderController } from './provider/provider.controller';
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { ProviderModule } from './provider/provider.module';
import { CoreModule } from './core/core.module';
//TODO: need to check why CorsMiddleware needed to be imported from common..it should be visible
import { CorsMiddleware } from './core/cors.middleware';
import { AuthenticationMiddleware } from './core/authentication.middleware';

@Module({
  imports: [],
  controllers: [],
  components: [],
  modules: [ProviderModule, CoreModule]
})
export class ApplicationModule implements NestModule {
  
  configure(consumer: MiddlewaresConsumer): void {    
    consumer.apply([CorsMiddleware, AuthenticationMiddleware]).forRoutes(ProviderController);    

    // consumer.apply(AuthenticationMiddleware).forRoutes(
    //   { path: '/**', method: RequestMethod.ALL }
    // );
  }

}

