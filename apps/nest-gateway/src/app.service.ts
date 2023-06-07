import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private client: ClientProxy,
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
    await this.orderClient.connect();
  }

  async handle() {
    this.client.emit('user_created', 'asdfasdf');
    return 'adfadf';
  }
  async getHello(): Promise<any> {
    const payload = [1, 2, 3, 5, 100, 434, 50];
    const payload2 = payload.map((a) => a * 2);

    // const orderData = await this.orderClient.send<number>(pattern, payload2);
    const authData = await lastValueFrom(
      this.client.send<number>(
        {
          cmd: 'sum',
        },
        payload,
      ),
    );
    // console.log('sfdsfg');
    const orderData = await lastValueFrom(
      this.orderClient.send(
        {
          cmd: 'sum2',
        },
        payload2,
      ),
    );
    return { authData };
  }
  // getHello(): any {
  //  return 'asdfadsf';
  // }
}
