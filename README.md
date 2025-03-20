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

Crea un archivo `.env` en la raíz del proyecto y añade:

```
PORT=5000
MONGO_URI=mongodb+srv://tu_usuario:tu_contraseña@tu_cluster.mongodb.net/tu_base_de_datos?retryWrites=true&w=majority
```

### **4️⃣ Iniciar el Servidor**

```sh
npm start
```

El servidor correrá en `http://localhost:5000`

## 📩 Contacto

Si tienes dudas o sugerencias, abre un issue o contáctame en `tuemail@example.com`.

¡Gracias por usar esta API! 🚀
#   a p i - b o o k s  
 