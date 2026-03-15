# Sistema de Contenido Centralizado

## Descripción

Este proyecto utiliza un sistema de contenido centralizado para manejar todos los textos de la interfaz de usuario. Esto facilita la edición y mantenimiento del contenido sin necesidad de modificar los componentes directamente.

## Archivos Principales

### 1. Interfaces de Contenido
`src/interfaces/ContentInterface.ts`

Define la estructura TypeScript para todo el contenido del sitio. Incluye interfaces para:
- **HeroContent**: Título y descripción del hero
- **AboutContent**: Sección "Sobre nosotros" con misión, visión y valores
- **ContactContent**: Formulario de contacto y mensajes
- **JoinUsContent**: Sección de "Únete a nosotros"
- **HeaderContent**: Navegación y menú móvil
- **FooterContent**: Footer con enlaces y redes sociales

### 2. Datos de Contenido
`src/Data/content.ts`

Contiene todos los textos utilizados en la aplicación. Este archivo exporta un objeto `siteContent` que incluye todo el contenido organizado por secciones.

## Cómo Editar el Contenido

### Editar Textos Existentes

1. Abre el archivo `src/Data/content.ts`
2. Busca la sección que deseas modificar
3. Edita directamente el texto
4. Guarda el archivo
5. El cambio se reflejará automáticamente al recargar la página

Ejemplo:
```typescript
hero: {
  title: "AESS Unicauca", // ← Cambia aquí el título
  description: "Tu nueva descripción aquí...", // ← Cambia la descripción
}
```

### Agregar Nuevos Textos

1. Define la nueva estructura en `src/interfaces/ContentInterface.ts`
2. Agrega el contenido en `src/Data/content.ts`
3. Importa y usa en tu componente:

```astro
---
import { siteContent } from "@/Data/content";
const { tuSeccion } = siteContent;
---

<div>
  <h1>{tuSeccion.titulo}</h1>
  <p>{tuSeccion.descripcion}</p>
</div>
```

## Componentes Actualizados

Los siguientes componentes ya utilizan el sistema de contenido centralizado:

- ✅ `Hero.astro`
- ✅ `About.astro`
- ✅ `ContactUs.astro`
- ✅ `JoinUs.astro`
- ✅ `Header.astro`
- ✅ `MobileMenu.astro`
- ✅ `Footer.astro`
- ✅ `ContactForm.astro`

## Beneficios

### ✨ Buenas Prácticas

- **Separación de Responsabilidades**: Los componentes se encargan de la estructura, los datos del contenido
- **Type Safety**: TypeScript garantiza que no falte ningún texto requerido
- **Mantenibilidad**: Cambiar textos sin tocar código de componentes
- **Escalabilidad**: Fácil de expandir para nuevas secciones

### 🚀 Compatible con Apache

Este sistema es 100% compatible con Static Site Generation (SSG):
- ✅ No requiere server rendering
- ✅ Genera archivos HTML estáticos
- ✅ Solo copiar la carpeta `dist/` a tu servidor Apache
- ✅ No necesita instalación de dependencias en el servidor

## Comandos de Desarrollo

```bash
# Desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de producción
pnpm preview
```

## Estructura de Datos

```typescript
siteContent = {
  hero: {...},
  about: {...},
  contact: {...},
  joinUs: {...},
  header: {...},
  footer: {...}
}
```

Cada sección tiene su propia estructura definida en las interfaces, garantizando consistencia y seguridad de tipos.

## Notas Importantes

- 📝 Todos los textos están en español
- 🔒 Las interfaces TypeScript previenen errores de tipado
- 🎯 Un solo lugar para editar todo el contenido
- 🔄 Los cambios se aplican automáticamente en desarrollo
- 📦 Compatible con generación estática (SSG)
