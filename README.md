# Proyecto de Monitoreo de Estacionamiento

Este proyecto es una aplicación web para el monitoreo de espacios de estacionamiento. Utiliza **Vite** como entorno de desarrollo, **Vue 3** como framework de JavaScript, y **TailwindCSS** para los estilos. La aplicación permite visualizar en tiempo real el estado de cada espacio de estacionamiento, utilizando una API que detecta si los espacios están **free** o **occupied**.

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Características](#características)
4. [Requisitos Previos](#requisitos-previos)
5. [Instalación](#instalación)
6. [Configuración](#configuración)
7. [Ejecución del Proyecto](#ejecución-del-proyecto)
8. [Estructura del Proyecto](#arquitectura-del-proyecto)
11. [Pruebas](#pruebas)
12. [Despliegue](#despliegue)

## Descripción del Proyecto

Este proyecto permite monitorear el estado de ocupación de un estacionamiento en tiempo real. Las cámaras envían imágenes a una API que utiliza un modelo de **AWS Rekognition Custom Labels** para detectar y clasificar cada espacio de estacionamiento como "free" (libre) o "occupied" (ocupado). La interfaz muestra esta información visualmente, resaltando los espacios libres en verde y los ocupados en rojo.

## Tecnologías Utilizadas

- **Vite** - Herramienta de construcción rápida para proyectos web.
- **Vue 3** - Framework de JavaScript para construir interfaces de usuario.
- **TailwindCSS** - Framework de CSS para el diseño de interfaces modernas.
- **AWS Rekognition** - Servicio de reconocimiento de imágenes para la detección de etiquetas personalizadas.
- **Flask** - Framework de backend para crear y servir la API.

## Características

- **Visualización en Tiempo Real**: Muestra el estado de ocupación de cada espacio de estacionamiento.
- **Interfaz Intuitiva**: Visualización clara de los espacios libres y ocupados mediante colores.
- **Monitoreo en Vivo**: Permite actualizar el estado de ocupación en intervalos regulares.
- **Control de Estado del Modelo de IA**: Control para activar/desactivar el modelo de AWS Rekognition desde la interfaz.
- **Notificaciones y Alertas**: Configuración para recibir alertas en tiempo real.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**
- **Python** y **Flask** (para la API)
- **AWS Rekognition** con el modelo de etiquetas personalizado configurado

## Instalación

1. **Clona el repositorio**:
   git clone https://github.com/usuario/proyecto-estacionamiento.git
   cd proyecto-estacionamiento

2. **Instala las dependencias**:
   npm install


## Configuración:
Asegúrate de que el archivo tailwind.config.js esté configurado para procesar los archivos .vue y el archivo src/assets/styles/tailwind.css esté importado en tu aplicación.

## Variables de Entorno:
En el frontend, crea un archivo .env y configura las variables necesarias:
API_URL=http://localhost:5000

## Arquitectura del proyecto:

proyecto-estacionamiento/
├── public/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── tailwind.css
│   |   └── images/
|   |       └── labeled-parking-image.png
│   ├── components/
│   │   └── header.vue
│   ├── features
│   |       └── parking_lot_monitoring
│   |           └── data
│   |               └── datasource
│   |               └── dtos
│   |               └── repositories
|   |           └── domain
|   |               └── entities
|   |               └── models
|   |               └── repositories
|   |               └── use_cases
|   |           └── presentation
|   |               └── pages
|   |               └── components
|   └── router
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── .env
├── tailwind.config.js
└── README.md

## Despliegue
Ejecuta npm run build para generar los archivos estáticos en dist/.
Sube los archivos de dist/ a un servicio de hosting como Vercel, Netlify o AWS S3.
