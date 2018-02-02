import { Module } from '@nestjs/common';
import { Roles } from './role.decorator';
//module common to all features (provider, claim, etc)
@Module({
  imports: [],
  controllers: [],
  components: [],
  modules: [],
  exports: [Roles],
})
export class SharedModule {}

