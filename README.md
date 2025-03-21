# 📚 API de Usuarios y Libros

## 📌 Descripción

Esta API proporciona acceso a información sobre usuarios y sus colecciones de libros. Los datos están almacenados en **MongoDB Atlas** y pueden ser consultados mediante dos endpoints principales.

## 🔗 Endpoints Disponibles

### **Usuarios**

- `GET /api/users` → Obtiene la lista de todos los usuarios.

### **Libros**

- `GET /api/books` → Obtiene la lista de todos los libros.

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **CORS**
- **dotenv**

## 🛠️ Instalación y Configuración

### **1️⃣ Clonar el Repositorio**

```sh
 git clone https://github.com/Reyeslim/api-books.git
 cd api-books
```

### **2️⃣ Instalar Dependencias**

```sh
npm install
```

### **3️⃣ Configurar Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto, añade las variables que se encuentran en el `.env.example` y rellena con tus datos:

```
PORT=
MONGO_URI=
```

### **4️⃣ Iniciar el Servidor**

```sh
npm start
```

El servidor correrá en `http://localhost:${process.env.PORT}`
