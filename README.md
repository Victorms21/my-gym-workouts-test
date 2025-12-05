# My Gym Workouts

App para creación y gestión de rutinas para ganancia de masa muscular.

## Características

- 🔐 **Autenticación con Laravel Sanctum**: Sistema de login y registro seguro
- 🏠 **Página de inicio**: Dashboard principal para gestión de rutinas
- 🛡️ **Protección de rutas**: Guards para proteger rutas autenticadas
- 🌐 **Interceptor HTTP**: Manejo automático de tokens en las peticiones
- 💪 **Catálogo de ejercicios**: Lista de ejercicios disponibles
- 📋 **Gestión de rutinas**: Crear y visualizar rutinas de entrenamiento

## Tecnologías

- Angular 20
- TypeScript
- SCSS
- RxJS

## Requisitos previos

- Node.js 20.x o superior
- npm 10.x o superior
- Backend API Laravel con Sanctum (corriendo en `http://localhost:3000/api`)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Victorms21/my-gym-workouts.git
cd my-gym-workouts
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar la URL del backend en `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'  // Cambiar según tu configuración
};
```

## Ejecución

### Desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/gym-workouts-frontend`

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── login/        # Componente de login
│   │   └── home/         # Componente de inicio
│   ├── guards/           # Guards de autenticación
│   ├── interceptors/     # Interceptores HTTP
│   ├── models/           # Modelos e interfaces
│   └── services/         # Servicios (AuthService, RoutineService, ExerciseService, MuscleGroupService)
├── environments/
│   ├── environment.ts    # Desarrollo
│   └── environment.prod.ts # Producción
└── styles.scss           # Estilos globales
```

## Endpoints del Backend

La aplicación consume los siguientes endpoints del backend Laravel:

### Autenticación

El sistema utiliza autenticación basada en Bearer Token. Los endpoints `/api/login` y `/api/register` devuelven un token que debe incluirse en la cabecera `Authorization` de todas las peticiones a endpoints protegidos.

**Cabecera de autorización:**
```
Authorization: Bearer <token>
```

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/login` | Iniciar sesión | No requerida |
| POST | `/api/register` | Registrar usuario | No requerida |
| GET | `/api/user` | Obtener usuario actual | Bearer Token |

#### POST /api/login

Inicia sesión y devuelve un Bearer token para autenticación.

**Request body:**
```json
{
  "email": "usuario@email.com",
  "password": "contraseña"
}
```

**Response:**
```json
{
  "user": {
    "id": "123",
    "email": "usuario@email.com",
    "name": "Nombre Usuario"
  },
  "token": "bearer_token_here"
}
```

#### POST /api/register

Registra un nuevo usuario y devuelve un Bearer token para autenticación.

**Request body:**
```json
{
  "name": "Nombre Usuario",
  "email": "usuario@email.com",
  "password": "contraseña"
}
```

**Response:**
```json
{
  "user": {
    "id": "123",
    "email": "usuario@email.com",
    "name": "Nombre Usuario"
  },
  "token": "bearer_token_here"
}
```

#### GET /api/user

Obtiene la información del usuario autenticado. Requiere Bearer token en la cabecera.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": "123",
  "email": "usuario@email.com",
  "name": "Nombre Usuario"
}
```

### Ejercicios

Todos los endpoints de ejercicios requieren autenticación con Bearer token.

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/exercises` | Obtener todos los ejercicios | Bearer Token |
| GET | `/api/exercises/:id` | Obtener un ejercicio específico | Bearer Token |

#### GET /api/exercises

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Sentadilla",
    "muscle_group_id": 3,
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z"
  },
  {
    "id": 2,
    "name": "Press de banca",
    "muscle_group_id": 1,
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z"
  }
]
```

#### GET /api/exercises/:id

**Response:**
```json
{
  "id": 1,
  "name": "Sentadilla",
  "muscle_group_id": 3,
  "created_at": "2025-12-04T19:57:00.000000Z",
  "updated_at": "2025-12-04T19:57:00.000000Z"
}
```

### Grupos Musculares

Todos los endpoints de grupos musculares requieren autenticación con Bearer token.

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/muscleGroups` | Obtener todos los grupos musculares | Bearer Token |
| GET | `/api/muscleGroups/:id` | Obtener un grupo muscular específico | Bearer Token |

#### GET /api/muscleGroups

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Pecho",
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z"
  },
  {
    "id": 2,
    "name": "Espalda",
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z"
  },
  {
    "id": 3,
    "name": "Piernas",
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z"
  }
]
```

#### GET /api/muscleGroups/:id

**Response:**
```json
{
  "id": 1,
  "name": "Pecho",
  "created_at": "2025-12-04T19:57:00.000000Z",
  "updated_at": "2025-12-04T19:57:00.000000Z"
}
```

### Rutinas

Todos los endpoints de rutinas requieren autenticación con Bearer token.

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/routines` | Obtener todas las rutinas del usuario | Bearer Token |
| GET | `/api/routines/:id` | Obtener una rutina específica | Bearer Token |
| POST | `/api/routines` | Crear una nueva rutina | Bearer Token |
| PUT | `/api/routines/:id` | Actualizar una rutina existente | Bearer Token |
| DELETE | `/api/routines/:id` | Eliminar una rutina | Bearer Token |

#### GET /api/routines

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Full Body Beginner",
    "created_at": "2025-12-04T19:57:00.000000Z",
    "updated_at": "2025-12-04T19:57:00.000000Z",
    "exercises": [
      {
        "id": 1,
        "name": "Sentadilla",
        "muscle_group_id": 3,
        "created_at": "2025-12-04T19:57:00.000000Z",
        "updated_at": "2025-12-04T19:57:00.000000Z",
        "pivot": {
          "routine_id": 1,
          "exercise_id": 1,
          "sets": 3,
          "reps": 10,
          "created_at": "2025-12-04T19:57:00.000000Z",
          "updated_at": "2025-12-04T19:57:00.000000Z"
        }
      },
      {
        "id": 2,
        "name": "Press de banca",
        "muscle_group_id": 1,
        "created_at": "2025-12-04T19:57:00.000000Z",
        "updated_at": "2025-12-04T19:57:00.000000Z",
        "pivot": {
          "routine_id": 1,
          "exercise_id": 2,
          "sets": 3,
          "reps": 8,
          "created_at": "2025-12-04T19:57:00.000000Z",
          "updated_at": "2025-12-04T19:57:00.000000Z"
        }
      }
    ]
  }
]
```

#### GET /api/routines/:id

**Response:**
```json
{
  "id": 1,
  "name": "Full Body Beginner",
  "created_at": "2025-12-04T19:57:00.000000Z",
  "updated_at": "2025-12-04T19:57:00.000000Z",
  "exercises": [
    {
      "id": 1,
      "name": "Sentadilla",
      "muscle_group_id": 3,
      "created_at": "2025-12-04T19:57:00.000000Z",
      "updated_at": "2025-12-04T19:57:00.000000Z",
      "pivot": {
        "routine_id": 1,
        "exercise_id": 1,
        "sets": 3,
        "reps": 10,
        "created_at": "2025-12-04T19:57:00.000000Z",
        "updated_at": "2025-12-04T19:57:00.000000Z"
      }
    }
  ]
}
```

#### POST /api/routines

**Request body:**
```json
{
  "name": "Leg Day",
  "exercises": [
    {
      "exercise_id": 1,
      "sets": 4,
      "reps": 12
    }
  ]
}
```

**Response:**
```json
{
  "id": 2,
  "name": "Leg Day",
  "created_at": "2025-12-05T10:30:00.000000Z",
  "updated_at": "2025-12-05T10:30:00.000000Z",
  "exercises": [
    {
      "id": 1,
      "name": "Sentadilla",
      "muscle_group_id": 3,
      "created_at": "2025-12-04T19:57:00.000000Z",
      "updated_at": "2025-12-04T19:57:00.000000Z",
      "pivot": {
        "routine_id": 2,
        "exercise_id": 1,
        "sets": 4,
        "reps": 12,
        "created_at": "2025-12-05T10:30:00.000000Z",
        "updated_at": "2025-12-05T10:30:00.000000Z"
      }
    }
  ]
}
```

#### PUT /api/routines/:id

**Request body:**
```json
{
  "name": "Updated Leg Day",
  "exercises": [
    {
      "exercise_id": 1,
      "sets": 5,
      "reps": 10
    }
  ]
}
```

**Response:**
```json
{
  "id": 2,
  "name": "Updated Leg Day",
  "created_at": "2025-12-05T10:30:00.000000Z",
  "updated_at": "2025-12-05T11:00:00.000000Z",
  "exercises": [
    {
      "id": 1,
      "name": "Sentadilla",
      "muscle_group_id": 3,
      "created_at": "2025-12-04T19:57:00.000000Z",
      "updated_at": "2025-12-04T19:57:00.000000Z",
      "pivot": {
        "routine_id": 2,
        "exercise_id": 1,
        "sets": 5,
        "reps": 10,
        "created_at": "2025-12-05T10:30:00.000000Z",
        "updated_at": "2025-12-05T11:00:00.000000Z"
      }
    }
  ]
}
```

#### DELETE /api/routines/:id

**Response:** `204 No Content`

## Testing

```bash
npm test
```

## Licencia

Este proyecto está bajo la Licencia MIT.
