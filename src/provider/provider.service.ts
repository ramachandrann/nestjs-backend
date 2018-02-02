import { ProviderDTO } from './provider.dto.model';
import { Component } from '@nestjs/common';

@Component()
export class ProviderService {
  
    process(provider: ProviderDTO) {    
        console.log('provider', provider);
    }

}