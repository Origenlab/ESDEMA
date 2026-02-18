# ESDEMA Astro

Nueva base profesional de ESDEMA con Astro + Markdown.

## Estructura

- `src/content/estados`: contenido por estado.
- `src/content/alcaldias`: contenido por alcaldia/municipio.
- `src/content/escuelas`: perfiles individuales de escuela.
- `src/content/blog`: contenido editorial.
- `src/pages/[estado]/[alcaldia]/[escuela]`: rutas SEO generadas estaticamente.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Flujo editorial recomendado

1. Crear o editar un archivo Markdown en la coleccion correspondiente.
2. Validar schema en `src/content/config.ts`.
3. Probar localmente y revisar rutas generadas.
4. Publicar.

## Estado actual

- Migracion inicial creada.
- Sitio legado respaldado en `../sitio-antiguo-html`.
- Faltan migrar todas las rutas reales y assets faltantes del proyecto anterior.
