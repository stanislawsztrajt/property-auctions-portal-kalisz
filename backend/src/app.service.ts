import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Welcome in property auction portal api',
      routes: [
        '/api/users',
        '/api/auctions',
        '/api/saved-auctions',
        '/api/auth/login',
      ]
    };
  }
}
