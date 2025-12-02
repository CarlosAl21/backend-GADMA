<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

 # backend-GADMA

 ## Descripción

 Backend de gestión de trámites (proyecto `backend-GADMA`) construido con NestJS y TypeScript. Provee API REST para manejar usuarios, trámites, formatos, requisitos, enlaces e información relacionada. Está diseñado para integrarse con bases de datos MySQL u Oracle y usar autenticación JWT.

 ## Estructura de carpetas (resumen)

 Raíz del proyecto (resumido):

 - `src/` - Código fuente de la aplicación
   - `auth/` - Autenticación (controladores, servicios, guardas, estrategia JWT)
   - `ctram_direccion/`, `ctram_formato/`, `ctram_informacion/`, `ctram_links/`, `ctram_requisito/`, `ctram_tramite/`, `ctram_usuario/` - Módulos por entidad (controladores, servicios, DTOs y entidades)
   - `app.module.ts`, `main.ts`, `app.controller.ts`, `app.service.ts` - Entrada y configuración principal
 - `test/` - Pruebas end-to-end
 - `package.json`, `tsconfig.json`, `nest-cli.json` - Configuración del proyecto

 Puedes explorar la estructura completa en el repositorio; la ubicación principal del trabajo es `src/`.

 ## Requisitos previos

 - Node.js >= 18
 - npm (v8+)
 - Base de datos (opcional durante desarrollo): MySQL o Oracle según configuración en `ormconfig`/variables de entorno

 ## Instalación

 1. Clona el repositorio:

 ```powershell
 git clone <url-del-repo>
 cd backend-GADMA
 ```

 2. Instala dependencias:

 ```powershell
 npm install
 ```

 3. Configura variables de entorno (ej. conexión a la base de datos, JWT_SECRET). Puedes crear un `.env` en la raíz con las variables necesarias (ver `@nestjs/config` en el código).

 ## Dependencias principales

 Las dependencias relevantes del proyecto (ver `package.json` para la lista completa):

 - `@nestjs/core`, `@nestjs/common`, `@nestjs/platform-express` - Framework NestJS
 - `@nestjs/typeorm`, `typeorm` - ORM
 - `mysql2`, `oracledb` - Drivers de base de datos (elige según tu BD)
 - `@nestjs/jwt`, `passport`, `passport-jwt` - Autenticación JWT
 - `class-validator`, `class-transformer` - Validaciones y transformaciones DTO
 - `bcrypt`/`bcryptjs` - Hashing de contraseñas

 Dependencias de desarrollo:

 - `typescript`, `ts-node`, `jest`, `ts-jest` - TypeScript y pruebas
 - `eslint`, `prettier` - Linter y formateo

 Para la lista completa y versiones exactas, revisa `package.json`.

 ## Scripts y ejecución

 Comandos disponibles (definidos en `package.json`):

 - `npm run start` - Ejecuta la aplicación (Nest) en modo producción/desarrollo según configuración
 - `npm run start:dev` - Ejecuta en modo desarrollo con `--watch`
 - `npm run build` - Compila TypeScript a `dist/`
 - `npm run start:prod` - Ejecuta el contenido de `dist/` con `node dist/main`
 - `npm run test` - Ejecuta pruebas unitarias con Jest
 - `npm run test:e2e` - Ejecuta pruebas end-to-end
 - `npm run test:cov` - Ejecuta tests y genera cobertura

 Ejemplo: ejecutar en desarrollo

 ```powershell
 npm install
 npm run start:dev
 ```

 ## Notas de configuración

 - Asegúrate de definir las variables de entorno para la conexión a la base de datos (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `DB_TYPE`) y `JWT_SECRET` antes de iniciar la aplicación.
 - El proyecto usa `TypeORM`; revisa los archivos dentro de `src/*` para ver cómo se carga la configuración.

 ## Contribuciones

 Si quieres contribuir, crea una rama, añade tests cuando corresponda y abre un pull request describiendo los cambios.

 ---

 ## About (para GitHub)

 Backend-GADMA: API REST construida con NestJS y TypeScript para la gestión de trámites municipales. Soporta autenticación JWT, persistencia con TypeORM y adaptadores para MySQL u Oracle.
