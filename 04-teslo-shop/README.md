<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar proyecto:

```
git clone https://github.com/FH/teslo-shop-nestjs
```

2. Instalar dependencias, correr en raiz de proyecto

```bash
pnpm install
```

3. Clonar archivo `.env.template` y renombrar a `.env`.
4. Cambiar variables de entorno a las reales
5. Levantar base de datos

```
docker-compose up -d
```

6. Levantar proyecto en modo desarrollo

```
pnpm run start:dev
```

7. Ejecutar Seed.

```bash
GET http://localhost:3000/api/seed
```
