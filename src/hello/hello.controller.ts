import { HelloService } from './hello.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

// incoming requests and returning responses
// get, post, put, delete,

// localhost:3000/hello

@Controller('hello')
export class HelloController {
  // dependency injection
  constructor(private readonly HelloService: HelloService) { }

  @Get()
  getHello(): string {
    return this.HelloService.getHello();
  }

  // http://localhost:3000/hello/user/phu
  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.HelloService.getHelloWithName(name);
  }

  // http://localhost:3000/hello/query?name=phu
  @Get('query')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.HelloService.getHelloWithName(name || 'world');
  }
}
