import { ExceptionFilter, Catch, HttpStatus } from '@nestjs/common';
import { UnauthorizedError } from 'express-jwt';

@Catch(UnauthorizedError)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedError, response) {
    response.status(HttpStatus.BAD_REQUEST).json({message: exception.message});
  }
}
