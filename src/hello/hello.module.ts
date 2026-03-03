import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  // imports: [], // import other module if needed
  exports: [HelloService], // export service if needed in other modules
})
export class HelloModule { }
