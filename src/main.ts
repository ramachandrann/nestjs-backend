import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, ParseIntPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

import { ApplicationModule } from './app.module';
import { CoreModule } from './core/core.module';
import { CorsMiddleware } from './core/cors.middleware';
import { UnauthorizedExceptionFilter } from './core/unauthorized.exception.filter';
import { AuthenticationMiddleware } from './core/authentication.middleware';
import { RoleGuard } from './core/role.guard';
//import { UnauthorizedExceptionFilter } from './unauthorized.exception.filter';
/*TODO: 
	1. Error JSON format standardization, 
	2. Logger service, 	
	3. Validation message standarization or follow class-validation package conventions...
	4. Attaching user to req. object (express style)
	5. Role guard to determine authorization / Authorizing end-points,
*/
async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	
	// Adding global exception handler (add more filters separted with comma)
	 app.useGlobalFilters(new UnauthorizedExceptionFilter());	 
	 app.useGlobalPipes(new ValidationPipe());
	 app.setGlobalPrefix('/api/v1');
	 app.useGlobalGuards(new RoleGuard(new Reflector()));
	 //app.useGlobalInterceptors()
	 
	 app.use(bodyParser.json());

	await app.listen(3000);
}
bootstrap();
