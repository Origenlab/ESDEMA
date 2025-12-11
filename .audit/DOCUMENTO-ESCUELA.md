# DOCUMENTO-ESCUELA.md
## Guia Profesional para Integrar Escuelas de Manejo al Directorio ESDEMA

Este documento describe el proceso completo y estandarizado para agregar una nueva escuela de manejo al directorio ESDEMA. Seguir estos pasos garantiza consistencia, optimizacion SEO y una experiencia de usuario profesional.

---

## INDICE

1. [Informacion Requerida](#1-informacion-requerida)
2. [Estructura de URLs y Archivos](#2-estructura-de-urls-y-archivos)
3. [Crear la Pagina de Perfil de Escuela](#3-crear-la-pagina-de-perfil-de-escuela)
4. [Crear la Card en la Pagina de Alcaldia](#4-crear-la-card-en-la-pagina-de-alcaldia)
5. [Estrategia SEO y Palabras Clave](#5-estrategia-seo-y-palabras-clave)
6. [Checklist de Verificacion](#6-checklist-de-verificacion)
7. [Plantillas de Codigo](#7-plantillas-de-codigo)

---

## 1. INFORMACION REQUERIDA

Antes de comenzar, recopilar la siguiente informacion de la escuela:

### Datos Basicos (Obligatorios)
| Campo | Descripcion | Ejemplo |
|-------|-------------|---------|
| Nombre comercial | Nombre oficial de la escuela | Escuela de Manejo Rex |
| Direccion completa | Calle, numero, colonia | Desierto de los Leones 5323, Tetelpan |
| Alcaldia/Municipio | Ubicacion administrativa | Alvaro Obregon |
| Codigo Postal | CP de 5 digitos | 01700 |
| Telefono | Numero con lada | +52 55 2139 6383 |
| WhatsApp | Numero para contacto | 5552139383 (sin +52) |
| Horario | Dias y horas de atencion | Lunes a Domingo 7:00 - 20:00 |
| Precio minimo | Costo del curso mas economico | $1,200 MXN |
| Rango de precios | Precio minimo y maximo | $1,200 - $3,500 MXN |

### Datos de Geolocalizacion
| Campo | Descripcion | Ejemplo |
|-------|-------------|---------|
| Latitud | Coordenada decimal | 19.3289 |
| Longitud | Coordenada decimal | -99.2156 |
| Colonia principal | Para URL SEO | Tetelpan |

### Datos de Reputacion
| Campo | Descripcion | Ejemplo |
|-------|-------------|---------|
| Calificacion | Rating promedio (1-5) | 5.0 |
| Numero de resenas | Total de opiniones | 48 |
| Fuente de resenas | Origen verificable | Google Maps |
| Anos de experiencia | Tiempo en el mercado | +13 anos |

### Resenas Reales (Minimo 3)
Para cada resena:
- Nombre del autor
- Calificacion (1-5 estrellas)
- Texto de la resena
- Fuente (Google, Facebook, etc.)

### Cursos y Precios
| Tipo de Curso | Horas | Precio |
|---------------|-------|--------|
| Curso Basico | 5-6 horas | $1,200 - $1,800 |
| Curso Intermedio | 8-10 horas | $2,000 - $2,500 |
| Curso Avanzado | 12-15 horas | $2,800 - $3,500 |
| Clase Individual | 1 hora | $350 - $450 |

### Caracteristicas/Servicios
- [ ] Vehiculos con doble control
- [ ] Instructores certificados
- [ ] Ideal para personas nerviosas
- [ ] Horarios flexibles
- [ ] Cursos basicos e intermedios
- [ ] Precios competitivos
- [ ] Transmision automatica
- [ ] Transmision estandar
- [ ] Clases a domicilio
- [ ] Tramite de licencia

---

## 2. ESTRUCTURA DE URLS Y ARCHIVOS

### Convencion de Nomenclatura

**REGLA IMPORTANTE**: Las URLs y nombres de archivo NUNCA contienen el nombre comercial de la escuela. Siempre usar palabras clave geograficas.

```
CORRECTO:   /cdmx/alvaro-obregon/escuela-manejo-tetelpan/
INCORRECTO: /escuela/escuela-de-manejo-rex/
```

### Formato de URL
```
/cdmx/{alcaldia}/escuela-manejo-{colonia}/
```

### Ejemplos por Alcaldia
| Alcaldia | Colonia | URL |
|----------|---------|-----|
| Alvaro Obregon | Tetelpan | `/cdmx/alvaro-obregon/escuela-manejo-tetelpan/` |
| Alvaro Obregon | San Angel | `/cdmx/alvaro-obregon/escuela-manejo-san-angel/` |
| Benito Juarez | Del Valle | `/cdmx/benito-juarez/escuela-manejo-del-valle/` |
| Coyoacan | Copilco | `/cdmx/coyoacan/escuela-manejo-copilco/` |
| Cuauhtemoc | Roma | `/cdmx/cuauhtemoc/escuela-manejo-roma/` |

### Estructura de Carpetas
```
/cdmx/
  └── {alcaldia}/
      ├── index.html                    # Pagina de alcaldia (listado)
      ├── escuela-manejo-{colonia-1}/
      │   └── index.html                # Perfil escuela 1
      ├── escuela-manejo-{colonia-2}/
      │   └── index.html                # Perfil escuela 2
      └── ...
```

---

## 3. CREAR LA PAGINA DE PERFIL DE ESCUELA

### 3.1 Crear Directorio
```bash
mkdir -p /cdmx/{alcaldia}/escuela-manejo-{colonia}/
```

### 3.2 Estructura del Archivo index.html

El archivo debe contener las siguientes secciones en orden:

1. **Head con Metas SEO** (palabras clave, NO nombre de escuela)
2. **Schema.org DrivingSchool** (con alternateName para nombre real)
3. **Schema.org BreadcrumbList** (con palabras clave)
4. **Estilos CSS** (inline o referencia)
5. **Header** (componente cargado via JS)
6. **Breadcrumb visual**
7. **Hero Section** (nombre real de escuela visible)
8. **Contact Card** (WhatsApp, telefono, direccion)
9. **Seccion About** (nombre real visible)
10. **Seccion Caracteristicas**
11. **Seccion Cursos y Precios**
12. **Seccion Resenas**
13. **Sidebar** (ubicacion, horarios, escuelas relacionadas)
14. **CTA Section**
15. **Footer** (componente cargado via JS)

---

## 4. CREAR LA CARD EN LA PAGINA DE ALCALDIA

### 4.1 Ubicacion del Archivo
```
/cdmx/{alcaldia}/index.html
```

### 4.2 Posicion de la Card
- Escuelas VERIFICADAS van al inicio del listado
- Escuelas sin verificar van despues

### 4.3 Elementos de la Card
- Imagen de la escuela
- Badge "Verificada" (si aplica)
- Rating con estrellas y numero de resenas
- Nombre de la escuela (enlace a perfil)
- Ubicacion (colonia)
- Precio desde
- Boton "Ver mas" (enlace a perfil)
- Boton WhatsApp

---

## 5. ESTRATEGIA SEO Y PALABRAS CLAVE

### 5.1 Principio Fundamental

> **Los METADATOS usan PALABRAS CLAVE de busqueda**
> **El CONTENIDO VISIBLE usa el NOMBRE REAL de la escuela**

### 5.2 Metas SEO - Title

```html
<!-- CORRECTO: Palabras clave geograficas -->
<title>Escuela de Manejo en {Colonia} {Alcaldia} | Clases de Manejo CDMX</title>

<!-- INCORRECTO: Nombre de escuela -->
<title>Escuela de Manejo Rex | Cursos en Alvaro Obregon</title>
```

**Plantilla Title:**
```
Escuela de Manejo en {Colonia} {Alcaldia} | Clases de Manejo CDMX
```

### 5.3 Metas SEO - Description

```html
<meta name="description" content="Escuela de manejo en {Colonia}, {Alcaldia} CDMX. Cursos y clases de manejo desde ${precio_minimo} MXN. Autoescuela con instructores certificados, ideal para principiantes y personas nerviosas. {Referencia_geografica}.">
```

**Palabras clave a incluir:**
- escuela de manejo
- clases de manejo
- cursos de manejo
- autoescuela
- instructores certificados
- principiantes
- personas nerviosas
- nombre de colonia
- nombre de alcaldia
- CDMX
- precio

### 5.4 Metas SEO - Keywords

```html
<meta name="keywords" content="escuela de manejo {Colonia}, clases de manejo {Alcaldia}, autoescuela {Referencia_geografica}, curso manejo CDMX {zona}, aprender a manejar {Alcaldia}, escuela manejo cerca de mi, clases manejo principiantes CDMX">
```

### 5.5 Open Graph

```html
<meta property="og:url" content="https://esdema.mx/cdmx/{alcaldia}/escuela-manejo-{colonia}/">
<meta property="og:title" content="Escuela de Manejo en {Colonia} | Clases Manejo {Alcaldia} CDMX">
<meta property="og:description" content="Clases de manejo en {Colonia}, {Alcaldia}. Autoescuela con instructores certificados, ideal para principiantes. Cursos desde ${precio_minimo} MXN. Zona {Referencia_geografica}.">
<meta property="og:image" content="https://esdema.mx/img/escuelas/escuela-manejo-{colonia}-{alcaldia}.jpg">
```

### 5.6 Twitter Cards

```html
<meta name="twitter:title" content="Escuela de Manejo en {Colonia} | Autoescuela {Alcaldia} CDMX">
<meta name="twitter:description" content="Clases de manejo en {Colonia}, {Alcaldia} CDMX. Autoescuela con instructores certificados para principiantes y nerviosos. Cursos desde ${precio_minimo} MXN.">
```

### 5.7 Schema.org - DrivingSchool

```json
{
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "name": "Escuela de Manejo en {Colonia} - {Alcaldia}",
  "alternateName": "{Nombre Real de la Escuela}",
  "description": "Escuela de manejo en {Colonia}, {Alcaldia} CDMX. Clases y cursos de manejo con instructores certificados. Autoescuela ideal para principiantes y personas nerviosas. Zona {Referencia_geografica}.",
  "url": "https://esdema.mx/cdmx/{alcaldia}/escuela-manejo-{colonia}/",
  "telephone": "{telefono}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{direccion}",
    "addressLocality": "{Colonia}",
    "addressRegion": "{Alcaldia}",
    "postalCode": "{CP}",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": {latitud},
    "longitude": {longitud}
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "{hora_apertura}",
    "closes": "{hora_cierre}"
  },
  "priceRange": "${precio_min} - ${precio_max} MXN",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{rating}",
    "reviewCount": "{num_resenas}",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    // Array de resenas reales
  ]
}
```

### 5.8 Schema.org - BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Escuelas de Manejo Mexico",
      "item": "https://esdema.mx/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Escuelas de Manejo CDMX",
      "item": "https://esdema.mx/cdmx/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Escuelas de Manejo {Alcaldia}",
      "item": "https://esdema.mx/cdmx/{alcaldia}/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Escuela de Manejo {Colonia}",
      "item": "https://esdema.mx/cdmx/{alcaldia}/escuela-manejo-{colonia}/"
    }
  ]
}
```

### 5.9 Geo Tags

```html
<meta name="geo.region" content="MX-CMX">
<meta name="geo.placename" content="{Colonia}, {Alcaldia}, Ciudad de Mexico">
<meta name="geo.position" content="{latitud};{longitud}">
<meta name="ICBM" content="{latitud}, {longitud}">
```

### 5.10 Canonical URL

```html
<link rel="canonical" href="https://esdema.mx/cdmx/{alcaldia}/escuela-manejo-{colonia}/">
```

---

## 6. CHECKLIST DE VERIFICACION

### Pre-Publicacion

#### Informacion
- [ ] Todos los datos basicos recopilados
- [ ] Coordenadas geograficas verificadas
- [ ] Minimo 3 resenas reales con autor y texto
- [ ] Precios actualizados
- [ ] Horarios confirmados
- [ ] Numero de WhatsApp verificado

#### Archivos
- [ ] Directorio creado: `/cdmx/{alcaldia}/escuela-manejo-{colonia}/`
- [ ] Archivo `index.html` creado en el directorio
- [ ] Card agregada en `/cdmx/{alcaldia}/index.html`

#### SEO - Pagina de Perfil
- [ ] Title con palabras clave (SIN nombre de escuela)
- [ ] Meta description con palabras clave
- [ ] Meta keywords con variaciones geograficas
- [ ] Canonical URL correcta
- [ ] OG tags completos con palabras clave
- [ ] Twitter cards con palabras clave
- [ ] Geo tags con coordenadas correctas
- [ ] Schema.org DrivingSchool con `alternateName`
- [ ] Schema.org BreadcrumbList con palabras clave

#### Contenido Visible
- [ ] Nombre real de escuela en H1
- [ ] Nombre real en seccion "Acerca de"
- [ ] Nombre real en breadcrumb visual
- [ ] Direccion completa visible
- [ ] Rating y numero de resenas
- [ ] Precios en formato correcto ($X,XXX)
- [ ] Horarios completos
- [ ] Minimo 3 resenas con formato correcto

#### Card en Alcaldia
- [ ] Imagen de escuela (o placeholder)
- [ ] Badge "Verificada" si aplica
- [ ] Rating visible
- [ ] Nombre de escuela enlazado
- [ ] Colonia visible
- [ ] Precio "Desde" visible
- [ ] Boton "Ver mas" con URL correcta
- [ ] Boton WhatsApp con numero correcto

#### Enlaces
- [ ] URL de perfil funciona
- [ ] WhatsApp abre correctamente
- [ ] Telefono es clickeable
- [ ] Google Maps link funciona
- [ ] Breadcrumbs navegables

#### Sin Fechas
- [ ] NO hay anos en titulos
- [ ] NO hay fechas en precios
- [ ] NO hay "2024" o "2025" en ningun lugar

---

## 7. PLANTILLAS DE CODIGO

### 7.1 Plantilla Completa - Pagina de Perfil

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Primary Tags -->
  <title>Escuela de Manejo en {COLONIA} {ALCALDIA} | Clases de Manejo CDMX</title>
  <meta name="description" content="Escuela de manejo en {COLONIA}, {ALCALDIA} CDMX. Cursos y clases de manejo desde ${PRECIO_MIN} MXN. Autoescuela con instructores certificados, ideal para principiantes y personas nerviosas. {REFERENCIA_GEO}.">
  <meta name="keywords" content="escuela de manejo {COLONIA}, clases de manejo {ALCALDIA}, autoescuela {REFERENCIA_GEO}, curso manejo CDMX {ZONA}, aprender a manejar {ALCALDIA}, escuela manejo cerca de mi, clases manejo principiantes CDMX">
  <meta name="author" content="ESDEMA - Directorio de Escuelas de Manejo">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://esdema.mx/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/">

  <!-- Geo Tags -->
  <meta name="geo.region" content="MX-CMX">
  <meta name="geo.placename" content="{COLONIA}, {ALCALDIA}, Ciudad de Mexico">
  <meta name="geo.position" content="{LATITUD};{LONGITUD}">
  <meta name="ICBM" content="{LATITUD}, {LONGITUD}">

  <!-- Open Graph -->
  <meta property="og:type" content="business.business">
  <meta property="og:url" content="https://esdema.mx/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/">
  <meta property="og:title" content="Escuela de Manejo en {COLONIA} | Clases Manejo {ALCALDIA} CDMX">
  <meta property="og:description" content="Clases de manejo en {COLONIA}, {ALCALDIA}. Autoescuela con instructores certificados, ideal para principiantes. Cursos desde ${PRECIO_MIN} MXN. Zona {REFERENCIA_GEO}.">
  <meta property="og:image" content="https://esdema.mx/img/escuelas/escuela-manejo-{COLONIA_SLUG}-{ALCALDIA_SLUG}.jpg">
  <meta property="og:locale" content="es_MX">
  <meta property="business:contact_data:street_address" content="{DIRECCION}">
  <meta property="business:contact_data:locality" content="{COLONIA}">
  <meta property="business:contact_data:region" content="{ALCALDIA}">
  <meta property="business:contact_data:postal_code" content="{CP}">
  <meta property="business:contact_data:country_name" content="Mexico">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Escuela de Manejo en {COLONIA} | Autoescuela {ALCALDIA} CDMX">
  <meta name="twitter:description" content="Clases de manejo en {COLONIA}, {ALCALDIA} CDMX. Autoescuela con instructores certificados para principiantes y nerviosos. Cursos desde ${PRECIO_MIN} MXN.">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0F172A">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Schema.org - LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "name": "Escuela de Manejo en {COLONIA} - {ALCALDIA}",
    "alternateName": "{NOMBRE_ESCUELA}",
    "description": "Escuela de manejo en {COLONIA}, {ALCALDIA} CDMX. Clases y cursos de manejo con instructores certificados. Autoescuela ideal para principiantes y personas nerviosas. Zona {REFERENCIA_GEO}.",
    "url": "https://esdema.mx/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/",
    "telephone": "{TELEFONO}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "{DIRECCION}",
      "addressLocality": "{COLONIA}",
      "addressRegion": "{ALCALDIA}",
      "postalCode": "{CP}",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": {LATITUD},
      "longitude": {LONGITUD}
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "{HORA_APERTURA}",
      "closes": "{HORA_CIERRE}"
    },
    "priceRange": "${PRECIO_MIN} - ${PRECIO_MAX} MXN",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "{RATING}",
      "reviewCount": "{NUM_RESENAS}",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "{AUTOR_RESENA_1}"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "{TEXTO_RESENA_1}"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "{AUTOR_RESENA_2}"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "{TEXTO_RESENA_2}"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "{AUTOR_RESENA_3}"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "{TEXTO_RESENA_3}"
      }
    ]
  }
  </script>

  <!-- Schema.org - BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Escuelas de Manejo Mexico",
        "item": "https://esdema.mx/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Escuelas de Manejo CDMX",
        "item": "https://esdema.mx/cdmx/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Escuelas de Manejo {ALCALDIA}",
        "item": "https://esdema.mx/cdmx/{ALCALDIA_SLUG}/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Escuela de Manejo {COLONIA}",
        "item": "https://esdema.mx/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/"
      }
    ]
  }
  </script>

  <!-- Styles -->
  <link rel="stylesheet" href="/css/style.css">

  <!-- NOTA: Incluir estilos CSS del componente school-detail -->
  <!-- Ver archivo de referencia: /cdmx/alvaro-obregon/escuela-manejo-tetelpan/index.html -->

</head>

<body>
  <!-- Header -->
  <div id="esdema-header"></div>

  <!-- Main Content -->
  <main id="main-content">

    <!-- Breadcrumb Visual -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item"><a href="/cdmx/">Ciudad de Mexico</a></li>
          <li class="breadcrumb-item"><a href="/cdmx/{ALCALDIA_SLUG}/">{ALCALDIA}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{NOMBRE_ESCUELA}</li>
        </ol>
      </div>
    </nav>

    <!-- School Hero -->
    <section class="school-hero">
      <div class="container">
        <div class="school-hero-grid">
          <div class="school-hero-content">
            <div class="school-badges">
              <span class="school-badge badge-verified">
                <svg>...</svg>
                Verificada
              </span>
              <span class="school-badge badge-recommended">
                <svg>...</svg>
                Recomendada
              </span>
            </div>

            <h1>{NOMBRE_ESCUELA}</h1>

            <div class="school-hero-location">
              <svg>...</svg>
              <span>{DIRECCION}, {COLONIA}, {ALCALDIA}</span>
            </div>

            <div class="school-rating-block">
              <span class="rating-number">{RATING}</span>
              <div class="rating-details">
                <div class="rating-stars-large">
                  <!-- 5 estrellas SVG -->
                </div>
                <span class="rating-text">Basado en {NUM_RESENAS} resenas verificadas</span>
              </div>
            </div>

            <div class="school-quick-info">
              <!-- Horario, Disponibilidad, Experiencia -->
            </div>
          </div>

          <!-- Contact Card -->
          <div class="school-contact-card">
            <!-- Precio, Disponibilidad, WhatsApp, Telefono, Direccion -->
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="school-main">
      <div class="container">
        <div class="school-main-grid">
          <div class="school-content">
            <!-- About Section -->
            <!-- Features Section -->
            <!-- Courses/Prices Section -->
            <!-- Reviews Section -->
          </div>

          <!-- Sidebar -->
          <div class="school-sidebar">
            <!-- Location Card -->
            <!-- Hours Card -->
            <!-- Related Schools -->
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Tienes una Escuela de Manejo?</h2>
          <p class="cta-text">Registra tu escuela gratis en ESDEMA y llega a miles de personas buscando aprender a manejar.</p>
          <a href="/registrar-escuela/" class="btn btn-white btn-lg">Registrar mi Escuela Gratis</a>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <div id="esdema-footer"></div>

  <!-- Scripts -->
  <script src="/js/components.js"></script>
  <script src="/js/app.js" defer></script>

</body>
</html>
```

### 7.2 Plantilla Card para Alcaldia

```html
<!-- School Card - {NOMBRE_ESCUELA} - VERIFICADA -->
<article class="school-card-enhanced">
  <div class="school-card-image">
    <img src="/img/escuelas/escuela-manejo-{COLONIA_SLUG}.jpg" alt="Escuela de Manejo en {COLONIA} - {ALCALDIA}" loading="lazy" width="400" height="225">
    <div class="school-badges-row">
      <div class="school-badges-left">
        <span class="school-badge-sm badge-verified">Verificada</span>
      </div>
    </div>
  </div>
  <div class="school-card-content">
    <div class="school-rating-row">
      <div class="stars-container">
        <div class="stars-bg">
          <svg><!-- 5 estrellas vacias --></svg>
        </div>
        <div class="stars-fill" style="width: {RATING_PERCENT}%">
          <svg><!-- 5 estrellas llenas --></svg>
        </div>
      </div>
      <span class="rating-score">{RATING}</span>
      <span class="rating-count">({NUM_RESENAS} resenas)</span>
    </div>
    <a href="/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/" class="school-name-link">{NOMBRE_ESCUELA}</a>
    <div class="school-location-row">
      <svg><!-- Icono ubicacion --></svg>
      <span>{COLONIA}, {ALCALDIA}</span>
    </div>
    <div class="school-bottom-row">
      <div class="school-price-row">
        <span class="price-from">Desde</span>
        <span class="price-amount">${PRECIO_MIN}</span>
      </div>
      <div class="school-actions-row">
        <a href="/cdmx/{ALCALDIA_SLUG}/escuela-manejo-{COLONIA_SLUG}/" class="btn-details">Ver mas</a>
        <a href="https://wa.me/{WHATSAPP}?text=Hola,%20encontre%20su%20escuela%20en%20ESDEMA%20y%20me%20gustaria%20informacion%20sobre%20cursos%20de%20manejo" class="btn-whatsapp" target="_blank" rel="noopener">
          <svg><!-- Icono WhatsApp --></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</article>
```

### 7.3 Plantilla Review Card

```html
<div class="review-card">
  <div class="review-header">
    <div class="review-author">
      <div class="review-avatar">{INICIAL}</div>
      <div class="review-author-info">
        <span class="review-author-name">{NOMBRE_AUTOR}</span>
        <span class="review-source">
          <svg><!-- Icono Google --></svg>
          Resena de Google
        </span>
      </div>
    </div>
    <div class="review-rating">
      <!-- 5 estrellas SVG -->
    </div>
  </div>
  <p class="review-text">"{TEXTO_RESENA}"</p>
</div>
```

---

## VARIABLES DE REFERENCIA

| Variable | Descripcion | Formato |
|----------|-------------|---------|
| `{NOMBRE_ESCUELA}` | Nombre comercial real | Escuela de Manejo Rex |
| `{COLONIA}` | Nombre de colonia | Tetelpan |
| `{COLONIA_SLUG}` | Colonia para URL | tetelpan |
| `{ALCALDIA}` | Nombre de alcaldia | Alvaro Obregon |
| `{ALCALDIA_SLUG}` | Alcaldia para URL | alvaro-obregon |
| `{DIRECCION}` | Calle y numero | Desierto de los Leones 5323 |
| `{CP}` | Codigo postal | 01700 |
| `{TELEFONO}` | Con formato | +52 55 2139 6383 |
| `{WHATSAPP}` | Solo numeros | 5552139383 |
| `{LATITUD}` | Coordenada | 19.3289 |
| `{LONGITUD}` | Coordenada | -99.2156 |
| `{PRECIO_MIN}` | Sin simbolo | 1,200 |
| `{PRECIO_MAX}` | Sin simbolo | 3,500 |
| `{RATING}` | Calificacion | 5.0 |
| `{RATING_PERCENT}` | Para estrellas | 100 (5.0=100%, 4.5=90%) |
| `{NUM_RESENAS}` | Cantidad | 48 |
| `{HORA_APERTURA}` | 24h | 07:00 |
| `{HORA_CIERRE}` | 24h | 20:00 |
| `{REFERENCIA_GEO}` | Lugar conocido | Desierto de los Leones |
| `{ZONA}` | Area general | sur, norte, poniente |

---

## ARCHIVO DE REFERENCIA

Para ver una implementacion completa, consultar:
```
/cdmx/alvaro-obregon/escuela-manejo-tetelpan/index.html
```

Este archivo contiene todos los estilos CSS, estructura HTML y Schema.org necesarios para una pagina de perfil de escuela optimizada.

---

## NOTAS IMPORTANTES

1. **NUNCA** incluir anos o fechas en ningun elemento
2. **SIEMPRE** usar palabras clave en metas, nombre real en contenido visible
3. **SIEMPRE** verificar que los enlaces funcionen antes de publicar
4. **SIEMPRE** incluir minimo 3 resenas reales
5. **SIEMPRE** usar el formato de URL basado en ubicacion geografica
6. **SIEMPRE** incluir Schema.org completo con `alternateName`

---

*Documento creado para el proyecto ESDEMA*
*Ultima actualizacion: Diciembre 2024*
