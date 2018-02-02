import { ExceptionFilter, Catch } from '@nestjs/common';

//May be we can use this to log the exception properly??
@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception, response) {
    response
      .status(500)
      .json({
        statusCode: 500,
        message: `It's a message from the exception filter`,
      });
  }
}