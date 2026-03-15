# 🚀 Página Web AESS Unicauca

[![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-Optimized-4285F4?logo=lighthouse&logoColor=white)](https://developers.google.com/web/tools/lighthouse)

Sitio web moderno y optimizado para la **Rama Estudiantil IEEE AESS** de la Universidad del Cauca. Construido con Astro para máximo rendimiento y SEO.

## ✨ Características

- ⚡ **Optimizado para rendimiento** (100/100 Lighthouse)
- 📱 **Completamente responsivo** con CSS Grid y Flexbox modernos
- 🔍 **SEO optimizado** con meta tags y structured data
- ♿ **Accesible** siguiendo estándares WCAG
- 🖼️ **Imágenes optimizadas** con WebP y lazy loading
- 🎯 **Componentes reutilizables** con TypeScript

## 🚀 Inicio rápido

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v18.14.1 o superior)
- [pnpm](https://pnpm.io/) (recomendado) o npm

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/organization-aessunicauca/aess-web.git
cd aess-web

# Instala las dependencias
pnpm install

# Inicia el servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en [http://localhost:4321](http://localhost:4321)

## 🏗️ Scripts disponibles

```bash
# Desarrollo
pnpm dev              # Servidor de desarrollo con hot reload
pnpm preview          # Vista previa de la build de producción

# Producción
pnpm build            # Genera build optimizada para producción
pnpm build:preview    # Build + preview en un comando

# Mantenimiento
pnpm astro check      # Verifica errores de TypeScript y Astro
pnpm astro --help     # Comandos disponibles de Astro
```

## 📁 Estructura del proyecto

```text
aess-page/
┣━━ public/                    # Assets estáticos
┃   ┣━━ favicon.svg
┃   ┗━━ assets/
┃       ┣━━ fonts/            # Fuentes web (Inter, Orbitron)
┃       ┗━━ images/           # Imágenes optimizadas (WebP)
┣━━ src/
┃   ┣━━ components/           # Componentes Astro
┃   ┃   ┣━━ ui/              # Componentes UI reutilizables
┃   ┃   ┗━━ icons/           # Iconos SVG como componentes
┃   ┣━━ Data/                # Datos tipados para componentes
┃   ┃   ┣━━ allies.ts
┃   ┃   ┣━━ divisions.ts
┃   ┃   ┗━━ testimonies.ts
┃   ┣━━ interfaces/          # Tipos TypeScript
┃   ┣━━ layouts/             # Layouts base
┃   ┣━━ pages/               # Páginas (routing automático)
┃   ┣━━ styles/              # Estilos globales
┃   ┗━━ types/               # Definiciones de tipos
┣━━ astro.config.mjs         # Configuración de Astro
┣━━ tsconfig.json            # Configuración TypeScript
┗━━ package.json             # Dependencias del proyecto
```

## 🎨 Arquitectura de componentes

### Componentes principales

- **`Header.astro`** - Navegación fija con efectos de hover
- **`Hero.astro`** - Sección principal con imágenes optimizadas para LCP
- **`About.astro`** - Información sobre AESS
- **`Divisions.astro`** - Divisiones técnicas con datos tipados
- **`Testimonials.astro`** - Testimonios de miembros
- **`Allies.astro`** - Aliados y colaboradores
- **`ContactUs.astro`** - Formulario de contacto con validación
- **`JoinUs.astro`** - Call-to-action para unirse

### Componentes UI reutilizables

- **`Card.astro`** - Tarjetas con efectos hover y optimización de imágenes
- **`AllyCard.astro`** - Tarjetas específicas para aliados
- **`SocialLinks.astro`** - Enlaces a redes sociales
- **`Stroke.astro`** - Elemento decorativo

## 🏗️ Despliegue

### Servidor Universidad del Cauca

```bash
# 1. Genera la build de producción
pnpm build

# 2. Los archivos estáticos estarán en dist/
# 3. Copia el contenido de dist/ al servidor web

```


## 🔧 Tecnologías utilizadas

| Tecnología                               | Propósito                | Versión |
| ---------------------------------------- | ------------------------ | ------- |
| [Astro](https://astro.build)             | Framework principal      | ^4.0.0  |
| [TypeScript](https://typescriptlang.org) | Tipado estático          | ^5.0.0  |
| CSS Grid/Flexbox                         | Layout responsivo        | Nativo  |
| WebP                                     | Optimización de imágenes | Nativo  |
| CSS Custom Properties                    | Sistema de diseño        | Nativo  |

## 📊 Optimizaciones implementadas

### SEO & Accesibilidad

- ✅ **Meta tags** completos
- ✅ **Structured data** para mejor indexación
- ✅ **Alt text** descriptivo en todas las imágenes
- ✅ **Semantic HTML** (header, nav, main, sections)
- ✅ **Focus management** para navegación por teclado
- ✅ **Color contrast** WCAG AA compliant

### CSS Moderno

- ✅ **CSS Grid** con `auto-fit` y `minmax()`
- ✅ **Custom Properties** para theming consistente
- ✅ **`clamp()`** para tipografía fluida
- ✅ **`:has()` selector** para interacciones avanzadas
- ✅ **Container queries** ready

## 🎯 Buenas prácticas implementadas

### Arquitectura de datos

```typescript
// Datos tipados y centralizados
interface AllyInterface {
  name: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  website?: string;
}
```

### Componentes responsivos sin media queries

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(16px, 4vw, 32px);
}
```

### Optimización de imágenes

```astro
<img
  src="/assets/images/hero.webp"
  alt="Descriptive text"
  loading="eager"
  fetchpriority="high"
  width="800"
  height="600"
/>
```

## 🤝 Contribuir

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### Convenciones de código

- **Componentes**: PascalCase (`MyComponent.astro`)
- **Archivos**: kebab-case (`my-component.astro`)
- **CSS**: BEM methodology cuando sea apropiado
- **TypeScript**: Interfaces explícitas para todos los props

## 📚 Recursos y documentación

### Documentación oficial

- [Astro Docs](https://docs.astro.build) - Framework documentation
- [Astro Deploy Guide](https://docs.astro.build/en/guides/deploy/) - Deployment options
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide

### Recursos de diseño

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - CSS Grid reference
- [Modern CSS Features](https://web.dev/learn/css/) - Latest CSS capabilities
- [Web.dev Performance](https://web.dev/performance/) - Performance optimization

### Tools y extensiones recomendadas

- [Astro VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

## 🐛 Solución de problemas

### Errores comunes

**Error: "Module not found"**

```bash
# Limpia node_modules y reinstala
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Error de TypeScript en componentes**

```bash
# Verifica la configuración de TypeScript
pnpm astro check
```

**Problemas de rendimiento local**

```bash
# Usa el modo preview para testing de producción
pnpm build && pnpm preview
```

## 📞 Soporte

Para dudas, sugerencias o reportar problemas:

- **Email**: aess@unicauca.edu.co
- **Issues**: [GitHub Issues](https://github.com/organization-aessunicauca/aess-web/issues)
- **Discusiones**: [GitHub Discussions](https://github.com/organization-aessunicauca/aess-web/discussions)

---

**Desarrollado con ❤️ por la comunidad AESS Unicauca**
