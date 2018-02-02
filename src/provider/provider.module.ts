import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [],
  controllers: [ProviderController],
  components: [ProviderService],
  modules: []
})
export class ProviderModule {}
