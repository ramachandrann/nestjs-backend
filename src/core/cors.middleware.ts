import { Middleware, NestMiddleware, ExpressMiddleware, RequestMethod } from '@nestjs/common';
//TODO: Hint Let's consider using functional middlewares every time when your middleware doesn't have any dependencies. 
@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req, res, next) => {            
            
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader('Access-Control-Allow-Credentials', true);
            
            //res.setHeader('Access-Control-Allow-Origin', '*');
            //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            console.log(req.method);
            if(req.method == 'OPTIONS') {
                res.send(200);//sendStatus 
            } else {
                next();
            }
        };
    }
}