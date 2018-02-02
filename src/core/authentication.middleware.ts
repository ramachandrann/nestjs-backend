import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import {expressJwtSecret} from 'jwks-rsa';

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    //TODO: move it to env.ts?
    private CLIENT_DOMAIN: string = 'YOUR_TENANT.auth0.com';
    //TODO: should be able to attach a user to req object? express style
    resolve(): ExpressMiddleware {        
        return jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${this.CLIENT_DOMAIN}/.well-known/jwks.json`
            }),
            audience: 'http://localhost:3000/pe/api',
            issuer: `https://${this.CLIENT_DOMAIN}/`,
            algorithm: 'RS256'
        });
    }
}