import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramDireccionModule } from './ctram_direccion/ctram_direccion.module';
import { CtramTramiteModule } from './ctram_tramite/ctram_tramite.module';
import { CtramRequisitoModule } from './ctram_requisito/ctram_requisito.module';
import { CtramFormatoModule } from './ctram_formato/ctram_formato.module';
import { CtramLinksModule } from './ctram_links/ctram_links.module';
import { CtramInformacionModule } from './ctram_informacion/ctram_informacion.module';
import { CtramUsuarioModule } from './ctram_usuario/ctram_usuario.module';
import { CtramDireccion } from './ctram_direccion/entities/ctram_direccion.entity';
import { CtramFormato } from './ctram_formato/entities/ctram_formato.entity';
import { CtramInformacion } from './ctram_informacion/entities/ctram_informacion.entity';
import { CtramRequisito } from './ctram_requisito/entities/ctram_requisito.entity';
import { CtramTramite } from './ctram_tramite/entities/ctram_tramite.entity';
import { CtramUsuario } from './ctram_usuario/entities/ctram_usuario.entity';
import { CtramLink } from './ctram_links/entities/ctram_link.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tramites',
      autoLoadEntities: true,
      entities: [
        CtramDireccion,
        CtramUsuario,
        CtramTramite,
        CtramRequisito,
        CtramFormato,
        CtramLink,
        CtramInformacion,
      ],
      synchronize: false,
    }),
    CtramDireccionModule,
    CtramTramiteModule,
    CtramRequisitoModule,
    CtramFormatoModule,
    CtramLinksModule,
    CtramInformacionModule,
    CtramUsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
