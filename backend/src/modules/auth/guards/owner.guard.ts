import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Pool } from 'pg';

import { User } from 'modules/users/entities/user.entity';
import { Iquery, Irequest } from 'utils/types/api';
import { parseJwt } from 'utils/helpers/jwt';
import { checkIsUserIsAdmin } from 'utils/helpers/user';

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Irequest<unknown> = context.switchToHttp().getRequest();
    const token = parseJwt(req.headers.authorization);
    const user = this.jwtService.decode(token) as User;

    // catching data about collection name(index 0) and collection id(index 1) from url
    // from /api/:colletion/:id
    // to [':colletion', ':id']
    const collectionData = req.url.split('/').slice(2, 4);
    const coleectionName = collectionData[0].replaceAll('-', '_').slice(0, -1);
    const coleectionId = collectionData[1];

    if (
      coleectionName === 'user' &&
      user.id !== Number(coleectionId) &&
      !checkIsUserIsAdmin(user.roles)
    ) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }

    if (coleectionName !== 'user') {
      const query = `SELECT * from public.${coleectionName} WHERE id = ${coleectionId}`;
      const { rows }: Iquery = await pool.query(query);
      const ownerId: number = rows[0].userId;

      if (ownerId !== user.id && !checkIsUserIsAdmin(user.roles)) {
        throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
      }
    }

    return true;
  }
}
