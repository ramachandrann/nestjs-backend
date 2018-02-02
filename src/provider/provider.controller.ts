import { Controller, Get, BadRequestException, Post, Body, HttpCode, ParseIntPipe, Param, NotFoundException, Delete } from '@nestjs/common';
import { ProviderDTO } from './provider.dto.model';
import { ProviderService } from './provider.service';
import { Roles } from './../shared/role.decorator';
import { User } from './../shared/user.decorator';
//import { UseFilters } from `@nestjs/common`;

//@UseFilters(new BusinessExceptionFilter())
@Controller('provider')
export class ProviderController {
    
    private provs: ProviderDTO[] = [new ProviderDTO(1, 'Ellis Medical')
                                ,new ProviderDTO(2, 'St. Peters Hospital')];

    constructor(private readonly providerService: ProviderService) {}

    @Get()
    @Roles('admin')
    getProviders(): ProviderDTO[] {        
        this.providerService.process(this.provs[0]);   
        return this.provs;
    }

    @Post()
    @HttpCode(200) //post returns 201 on success, we override it.
    @Roles('admin')
    createProvider(@Body() provider: ProviderDTO): void {
        this.provs.push(provider);
    }

    @Get(':id')
    @Roles('admin')
    getProvider(@User() user, @Param('id', new ParseIntPipe()) id): ProviderDTO {
        console.log(user);
        let filterResults: ProviderDTO[] = this.provs.filter( provider => provider.getId() == id );
        if(filterResults.length == 0) {
            throw new NotFoundException('Provider is not found.');
        } else {
            return filterResults[0];
        }
    }

    @Delete(':id')
    @Roles('admin')
    deleteProvider(@Param('id', new ParseIntPipe()) id): void {
        let filterResults: ProviderDTO[] = this.provs.filter( provider => provider.getId() == id );
        if(filterResults.length == 0) {
            throw new NotFoundException('Provider is not found.');
        } else {
            //OP
        }
    }
}