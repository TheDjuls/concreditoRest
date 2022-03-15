import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Usuarios
} from '@prisma/client';
import { Login } from './interfaces/login.interface';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }


  async login(login: Login): Promise<Usuarios[] | Object | null> {
    let usuario = await this.prisma.usuarios.findMany({
      where: {
        nombre_usuario: login.nombre_usuario,
        password: login.password
      }
    });
    if (usuario.length > 0) {
      return usuario;
    } else {
      return {code:200, msg: "Usuario y/o contraseña incorrecto" }
    }
  }

}
