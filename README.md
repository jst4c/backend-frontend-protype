# Backend + Frontend Protype

Proyecto fullstack con **backend en Express + TypeScript** y **frontend en React + Vite + Tailwind CSS**.

## 📁 Estructura del proyecto


## 🚀 Tecnologías

### Backend
- **Runtime:** Node.js con TypeScript
- **Framework:** Express 5
- **Ejecución en desarrollo:** tsx (TypeScript execute)
- **Dependencias principales:** cors, morgan

### Frontend
- **Framework:** React 19
- **Bundler:** Vite 8
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Plugins:** @tailwindcss/vite, @vitejs/plugin-react

## ⚙️ Requisitos previos

- Node.js (v18 o superior)
- npm (v9 o superior)

## 🔧 Instalación y ejecución

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor se iniciará en `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`.

## 📜 Scripts disponibles

### Backend
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo con recarga automática |

### Frontend
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo de Vite |
| `npm run build` | Compila TypeScript y genera la build de producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint para analizar el código |

## 🧩 Funcionalidades

- **Gestión de usuarios:** registro y autenticación
- **Gestión de tareas:** creación, visualización y administración de tareas
- **Logger:** middleware de registro de peticiones
- **API RESTful:** endpoints organizados por recursos

## 📄 Licencia

Este proyecto es de uso personal y educativo.
