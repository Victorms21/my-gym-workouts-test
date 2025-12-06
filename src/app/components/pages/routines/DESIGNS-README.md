# Diseños de Página de Rutinas

Este directorio contiene 3 diseños diferentes para la página de rutinas. Puedes cambiar fácilmente entre ellos.

## Diseños Disponibles

### Diseño 1: Card Minimalista
**Archivos:** `routines-design1.html` y `routines-design1.scss`

Características:
- Diseño limpio y profesional
- Tarjetas con sombras suaves
- Fondo gris claro (#f5f7fa)
- Énfasis en legibilidad
- Botones con colores azules (#4a90e2)
- Ideal para: Usuarios que prefieren interfaces limpias y sin distracciones

### Diseño 2: Fitness Modern
**Archivos:** `routines-design2.html` y `routines-design2.scss`

Características:
- Gradientes vibrantes (púrpura/morado)
- Animaciones y efectos dinámicos
- Badges y métricas con iconos emoji
- Diseño más energético y moderno
- Fondo con gradiente (#667eea a #764ba2)
- Ideal para: Aplicaciones fitness con personalidad vibrante

### Diseño 3: Dashboard Pro
**Archivos:** `routines-design3.html` y `routines-design3.scss`

Características:
- Layout con sidebar de filtros
- Barra de estadísticas superior
- Diseño tipo dashboard profesional
- Tarjetas con header en gradiente
- Métricas destacadas organizadas
- Ideal para: Usuarios que quieren análisis y filtros avanzados

## Cómo Cambiar de Diseño

Para cambiar al diseño que más te guste, simplemente copia los archivos del diseño elegido:

### Para usar Diseño 1:
```bash
cp src/app/components/pages/routines/routines-design1.html src/app/components/pages/routines/routines.html
cp src/app/components/pages/routines/routines-design1.scss src/app/components/pages/routines/routines.scss
```

### Para usar Diseño 2:
```bash
cp src/app/components/pages/routines/routines-design2.html src/app/components/pages/routines/routines.html
cp src/app/components/pages/routines/routines-design2.scss src/app/components/pages/routines/routines.scss
```

### Para usar Diseño 3:
```bash
cp src/app/components/pages/routines/routines-design3.html src/app/components/pages/routines/routines.html
cp src/app/components/pages/routines/routines-design3.scss src/app/components/pages/routines/routines.scss
```

Después de copiar los archivos, recarga la aplicación para ver los cambios.

## Vista Previa

Todos los diseños muestran las rutinas en una cuadrícula de 3 columnas (o 3 por fila en pantallas grandes) y se adaptan a pantallas más pequeñas.

### Funcionalidades Comunes en Todos los Diseños:
- ✅ Visualización de rutinas en grid de 3 columnas
- ✅ Estadísticas por rutina (ejercicios, series, grupos musculares)
- ✅ Vista previa de los primeros ejercicios
- ✅ Botón para eliminar rutinas
- ✅ Estados de carga, error y vacío
- ✅ Diseño responsive
- ✅ Hover effects y transiciones suaves

## Diseño Actual

Por defecto, se está usando el **Diseño 1: Card Minimalista**.
