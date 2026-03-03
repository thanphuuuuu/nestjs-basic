import { HelloService } from './../hello/hello.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // dependency injection
  // injecting services from other module
  // hello module must export helloService
  // user module must import HelloModule
  constructor(private readonly helloService: HelloService) { }

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'Phu',
      },
      {
        id: 2,
        name: 'Samga',
      },
      {
        id: 3,
        name: 'Victori',
      },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUsers().find((users) => users.id === id);
    return user;
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);

    if (!user) {
      return 'User not found';
    }

    return this.helloService.getHelloWithName(user?.name);
  }
}
