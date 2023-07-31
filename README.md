# React + Vite

Contiene: 

- Login con Redux+Session Storage
- Layout con logout
- Página de inicio en blanco
- Diagrama de carpetas
- Helper de request a servidor
- Muestra de versiones a través de package.json

Extra: 

✅ 0 vulnerabilidades a la fecha (31/07/2023)


# Comandos disponibles 

`npm install` : Instala todas las dependencias

`npm run dev` : Inicia servidor de desarrollo en http://localhost:5173/

`npm run build` : Crea build en la carpeta `/build` para subir a producción . 

# Build 

1. Ejecutar el comando `npm install` en la carpeta raiz para instalar todas las dependencias.
2. Ejecutar el comando `npm run build` en la carpeta raíz.
3. Se creará una carpeta `/build` 
4. Subir la carpeta o los archivo de la carpeta `/build` al servidor


  [Documentación oficial sobre el build](https://vitejs.dev/guide/static-deploy.html) 


# Desarrollo

1. Ejecutar el comando `npm install` en la carpeta raiz para instalar todas las dependencias.
2. Ejecutar el comando `npm run dev` en la carpeta raíz.
3. Se creará un servidor de desarrollo con fast refresh en `http://localhost:5173/`

## Theming

En el archivo `/src/main.jsx` se encuentra los colores principales. 

Los componentes ya creados dependen de los `primary` y `secondary` así que ahi se deben ingresar los colores del cliente/plataforma.

En `/src/pages/login/Login.jsx` se debe ingresar el Título del cliente/plataforma en la constante `TITLE` y además ingresar el src de las imagenes que se mostraran en el login que represente a la marca. 
# Dependencias  

  - @chakra-ui/icons
  - @chakra-ui/react
  - @emotion/react
  - @emotion/styled
  - @reduxjs/toolkit
  - axios
  - formik
  - framer-motion
  - react
  - react-dom
  - react-icons
  - react-redux
  - react-router-dom