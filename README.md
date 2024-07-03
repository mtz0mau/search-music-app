# Search Music App

Esta es una aplicación en TypeScript y React que permite a los usuarios autenticarse con Firebase y buscar información sobre álbumes, canciones y artistas utilizando la API de LastFM. La aplicación muestra todos los resultados coincidentes en función de las búsquedas del usuario.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecutar la App](#ejecutar-la-app)
  - [Usando Docker](#usando-docker)
    - [Desarrollo](#desarrollo)
    - [Producción](#producción)
  - [Usando Node.js](#usando-nodejs)
- [Demo en Línea](#demo-en-línea)

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 18.20.x o superior)
- [npm](https://www.npmjs.com/get-npm) (versión 10.x o superior)
- [Docker](https://www.docker.com/)

## API Keys
Para poder ejecutar la aplicación, necesitarás obtener las siguientes claves de API:

- [Firebase](https://firebase.google.com/)
- [LastFM](https://www.last.fm/api)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/mtz0mau/search-music-app.git
   cd search-music-app
   ```

2. Configura las variables de entorno:

   ```sh
   cp .env.example .env
   ```

## Ejecutar la App

### Usando Docker

Puedes ejecutar la aplicación usando Docker tanto para entornos de desarrollo como de producción.

#### Desarrollo

1. Construye e inicia el entorno de desarrollo:

   ```sh
   docker-compose -f docker-compose-dev.yml up --build
   ```

2. Abre tu navegador y navega a `http://localhost:3000`.

#### Producción

1. Construye e inicia el entorno de producción:

   ```sh
   docker-compose up --build
   ```

2. Abre tu navegador y navega a `http://localhost`.

### Usando Node.js

Alternativamente, puedes ejecutar la aplicación usando Node.js directamente.

1. Instala las dependencias:

   ```sh
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ```sh
   npm run dev
   ```

2. Abre tu navegador y navega a `http://localhost:5173`.

## Demo en Línea

Puedes ver una demo en línea de la aplicación a través del siguiente enlace: [Demo en Línea](https://search-music-app-d493e.web.app/)
