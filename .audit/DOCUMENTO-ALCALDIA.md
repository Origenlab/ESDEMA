# Guia Completa: Crear Pagina de Alcaldia CDMX

## Indice

1. [Informacion General](#1-informacion-general)
2. [Paso 1: Crear la Carpeta](#paso-1-crear-la-carpeta)
3. [Paso 2: Datos de la Alcaldia](#paso-2-datos-de-la-alcaldia)
4. [Paso 3: Estructura del Archivo HTML](#paso-3-estructura-del-archivo-html)
5. [Paso 4: Enlazar en el Sitio](#paso-4-enlazar-en-el-sitio)
6. [Paso 5: Verificacion Final](#paso-5-verificacion-final)
7. [Referencia de las 16 Alcaldias](#referencia-de-las-16-alcaldias)
8. [Plantilla Completa](#plantilla-completa)

---

## 1. Informacion General

### Estructura de URLs
```
/cdmx/{nombre-alcaldia}/index.html
```

### Ejemplo
```
/cdmx/alvaro-obregon/index.html
/cdmx/benito-juarez/index.html
/cdmx/coyoacan/index.html
```

### Archivo de Referencia
El archivo modelo es: `/cdmx/alvaro-obregon/index.html`

---

## Paso 1: Crear la Carpeta

### 1.1 Ubicacion
```
/cdmx/{nombre-alcaldia}/
```

### 1.2 Formato del Nombre de Carpeta
- Todo en minusculas
- Sin acentos
- Espacios se reemplazan por guiones (-)
- Ejemplo: "Alvaro Obregon" → `alvaro-obregon`

### 1.3 Lista de Carpetas (16 Alcaldias)
```
/cdmx/alvaro-obregon/
/cdmx/azcapotzalco/
/cdmx/benito-juarez/
/cdmx/coyoacan/
/cdmx/cuajimalpa/
/cdmx/cuauhtemoc/
/cdmx/gustavo-a-madero/
/cdmx/iztacalco/
/cdmx/iztapalapa/
/cdmx/magdalena-contreras/
/cdmx/miguel-hidalgo/
/cdmx/milpa-alta/
/cdmx/tlahuac/
/cdmx/tlalpan/
/cdmx/venustiano-carranza/
/cdmx/xochimilco/
```

---

## Paso 2: Datos de la Alcaldia

Antes de crear la pagina, recopilar la siguiente informacion:

### 2.1 Datos Basicos
| Campo | Descripcion | Ejemplo |
|-------|-------------|---------|
| Nombre oficial | Nombre completo de la alcaldia | Alvaro Obregon |
| Slug URL | Nombre para la URL | alvaro-obregon |
| Coordenadas | Latitud, Longitud | 19.3582, -99.2036 |
| Poblacion | Numero de habitantes | 700,000+ |

### 2.2 Colonias Principales (6-8)
Identificar las colonias mas importantes de la alcaldia donde hay escuelas de manejo.

**Ejemplo para Alvaro Obregon:**
- San Angel
- Mixcoac
- Florida
- Guadalupe Inn
- San Jose Insurgentes
- Campestre
- Tizapan
- Progreso

### 2.3 Vialidades Principales (3-4)
Avenidas o calles importantes para mencionar en contenido SEO.

**Ejemplo:**
- Avenida Insurgentes Sur
- Avenida Revolucion
- Periferico Sur
- Calzada de las Aguilas

### 2.4 Modulos de Licencia (1-2)
Ubicaciones donde se tramitan licencias.

**Ejemplo:**
- Modulo Alvaro Obregon - Av. Revolucion 1297
- Modulo San Angel - Plaza San Jacinto

### 2.5 Escuelas de Manejo (minimo 6)
Crear datos para 6 escuelas con:
- Nombre
- Colonia
- Rating (4.0-5.0)
- Numero de resenas (30-150)
- Precio desde ($2,400 - $4,000)
- Caracteristicas (3 chips)
- Badges (Verificada, SEMOVI, Profeco)
- Numero WhatsApp

---

## Paso 3: Estructura del Archivo HTML

### 3.1 Componentes Obligatorios

El archivo `index.html` debe contener estas secciones EN ESTE ORDEN:

```
1. HEAD
   ├── Meta tags SEO
   ├── Geo Tags
   ├── Open Graph
   ├── Twitter Cards
   ├── Schema.org (CollectionPage + BreadcrumbList)
   └── Estilos CSS embebidos

2. BODY
   ├── Header (componente)
   ├── Breadcrumb
   ├── Hero Section
   ├── Schools Module (con filtros + cards + paginacion)
   ├── Why Choose Section (4 beneficios)
   ├── Colonias Section (6-8 colonias)
   ├── Info Section (contenido SEO + precios)
   ├── FAQ Section (4 preguntas)
   ├── Other Alcaldias Section
   ├── CTA Section
   └── Footer (componente)
```

---

### 3.2 Seccion HEAD - SEO Tags

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Primary Tags -->
  <title>Escuelas de Manejo en {NOMBRE_ALCALDIA} | Autoescuelas CDMX</title>
  <meta name="description" content="Encuentra las mejores escuelas de manejo en {NOMBRE_ALCALDIA}, CDMX. Cursos desde ${PRECIO_MINIMO} MXN en {COLONIA_1}, {COLONIA_2}, {COLONIA_3}. Instructores certificados SEMOVI y vehiculos con doble control.">
  <meta name="keywords" content="escuelas de manejo {NOMBRE_ALCALDIA}, clases de manejo {COLONIA_1}, autoescuela {COLONIA_2}, curso de manejo {COLONIA_3} CDMX, escuela manejo {COLONIA_4}, aprender a manejar {NOMBRE_ALCALDIA}">
  <meta name="author" content="ESDEMA - Directorio de Escuelas de Manejo">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://esdema.mx/cdmx/{SLUG_ALCALDIA}/">
</head>
```

**Variables a reemplazar:**
- `{NOMBRE_ALCALDIA}` - Nombre sin acentos (ej: "Alvaro Obregon")
- `{SLUG_ALCALDIA}` - Slug URL (ej: "alvaro-obregon")
- `{PRECIO_MINIMO}` - Precio mas bajo (ej: "2,500")
- `{COLONIA_1}`, `{COLONIA_2}`, etc. - Nombres de colonias

---

### 3.3 Geo Tags

```html
<!-- Geo Tags -->
<meta name="geo.region" content="MX-CMX">
<meta name="geo.placename" content="{NOMBRE_ALCALDIA}, Ciudad de Mexico">
<meta name="geo.position" content="{LATITUD};{LONGITUD}">
<meta name="ICBM" content="{LATITUD}, {LONGITUD}">
```

**Coordenadas de las 16 Alcaldias:**

| Alcaldia | Latitud | Longitud |
|----------|---------|----------|
| Alvaro Obregon | 19.3582 | -99.2036 |
| Azcapotzalco | 19.4869 | -99.1837 |
| Benito Juarez | 19.3984 | -99.1676 |
| Coyoacan | 19.3500 | -99.1617 |
| Cuajimalpa | 19.3575 | -99.2911 |
| Cuauhtemoc | 19.4285 | -99.1508 |
| Gustavo A. Madero | 19.4819 | -99.1136 |
| Iztacalco | 19.3953 | -99.0977 |
| Iztapalapa | 19.3550 | -99.0630 |
| Magdalena Contreras | 19.3239 | -99.2298 |
| Miguel Hidalgo | 19.4326 | -99.2035 |
| Milpa Alta | 19.1923 | -99.0230 |
| Tlahuac | 19.2564 | -99.0044 |
| Tlalpan | 19.2823 | -99.1678 |
| Venustiano Carranza | 19.4245 | -99.1069 |
| Xochimilco | 19.2616 | -99.1036 |

---

### 3.4 Open Graph y Twitter

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://esdema.mx/cdmx/{SLUG_ALCALDIA}/">
<meta property="og:title" content="Escuelas de Manejo en {NOMBRE_ALCALDIA} | Las Mejores Autoescuelas">
<meta property="og:description" content="Encuentra las mejores escuelas de manejo en {NOMBRE_ALCALDIA}. Compara precios desde ${PRECIO_MINIMO} MXN, lee resenas verificadas y agenda tu curso hoy.">
<meta property="og:image" content="https://esdema.mx/img/og-{SLUG_ALCALDIA}.jpg">
<meta property="og:locale" content="es_MX">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Escuelas de Manejo en {NOMBRE_ALCALDIA} | Las Mejores Autoescuelas">
<meta name="twitter:description" content="Encuentra las mejores escuelas de manejo en {NOMBRE_ALCALDIA}. Compara precios, lee resenas verificadas y agenda tu curso hoy.">
```

---

### 3.5 Schema.org - CollectionPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Escuelas de Manejo en {NOMBRE_ALCALDIA}, CDMX",
  "description": "Directorio de las mejores escuelas de manejo en la alcaldia {NOMBRE_ALCALDIA}, Ciudad de Mexico",
  "url": "https://esdema.mx/cdmx/{SLUG_ALCALDIA}/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "DrivingSchool",
        "name": "Escuelas de Manejo en {NOMBRE_ALCALDIA}",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "{NOMBRE_ALCALDIA}",
          "addressRegion": "Ciudad de Mexico",
          "addressCountry": "MX"
        }
      }
    ]
  }
}
</script>
```

---

### 3.6 Schema.org - BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://esdema.mx/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Estados",
      "item": "https://esdema.mx/estados/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Ciudad de Mexico",
      "item": "https://esdema.mx/cdmx/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "{NOMBRE_ALCALDIA}",
      "item": "https://esdema.mx/cdmx/{SLUG_ALCALDIA}/"
    }
  ]
}
</script>
```

---

### 3.7 Estilos CSS Embebidos

Los estilos deben ir en un `<style>` dentro del `<head>`. Copiar EXACTAMENTE los estilos de `/cdmx/alvaro-obregon/index.html` lineas 109-952.

**Clases CSS requeridas:**
- `.schools-module` - Contenedor principal de escuelas
- `.schools-module-header` - Header con filtros
- `.schools-module-grid` - Grid de cards
- `.school-card-enhanced` - Card de escuela
- `.colonias-section` - Seccion de colonias
- `.info-section-enhanced` - Seccion de informacion
- `.why-choose-section` - Seccion de beneficios
- `.faq-section` - Seccion de FAQ
- `.other-alcaldias` - Seccion de otras alcaldias

---

### 3.8 Breadcrumb (en BODY)

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <div class="container">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item"><a href="/estados/">Estados</a></li>
      <li class="breadcrumb-item"><a href="/cdmx/">Ciudad de Mexico</a></li>
      <li class="breadcrumb-item active" aria-current="page">{NOMBRE_ALCALDIA}</li>
    </ol>
  </div>
</nav>
```

---

### 3.9 Hero Section

```html
<section class="hero-state">
  <div class="hero-state-bg">
    <div class="hero-state-overlay"></div>
  </div>
  <div class="container">
    <div class="hero-state-grid">
      <div class="hero-state-content">
        <div class="hero-state-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Alcaldia {NOMBRE_ALCALDIA}, CDMX</span>
        </div>
        <h1 class="hero-state-title">Escuelas de Manejo en <span class="text-gradient">{NOMBRE_ALCALDIA}</span></h1>
        <p class="hero-state-subtitle">Encuentra las mejores autoescuelas en {NOMBRE_ALCALDIA}. Aprende a manejar en {COLONIA_1}, {COLONIA_2}, {COLONIA_3}, {COLONIA_4} y todas las colonias con instructores certificados.</p>
      </div>
      <div class="hero-state-marketing">
        <div class="hero-marketing-card">
          <p class="hero-marketing-text"><strong>{NOMBRE_ALCALDIA} es una de las alcaldias {CARACTERISTICA_PRINCIPAL} para aprender a manejar</strong> en la Ciudad de Mexico. Con {DESCRIPCION_VIALIDADES}, ofrece el entorno ideal para practicar desde lo basico hasta maniobras avanzadas.</p>
          <p class="hero-marketing-text">Las <strong>escuelas de manejo en {NOMBRE_ALCALDIA}</strong> destacan por sus instructores con certificacion SEMOVI, vehiculos modernos con doble control y horarios flexibles. Precios accesibles desde <strong>${PRECIO_MINIMO} MXN</strong> con facilidades de pago.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 3.10 Schools Module

Este es el componente principal con las cards de escuelas.

#### 3.10.1 Estructura General

```html
<section class="section" id="escuelas">
  <div class="container">
    <div class="schools-module">

      <!-- Module Header with Filters -->
      <div class="schools-module-header">
        <!-- ... (header content) ... -->
      </div>

      <!-- Schools Grid -->
      <div class="schools-module-grid">
        <!-- School Cards aqui -->
      </div>

      <!-- Pagination -->
      <nav class="pagination-enhanced" aria-label="Paginacion">
        <!-- ... -->
      </nav>

    </div>
  </div>
</section>
```

#### 3.10.2 Filtros de Colonia

```html
<div class="filter-item">
  <label for="filter-colonia">Colonia</label>
  <select id="filter-colonia">
    <option value="">Todas las colonias</option>
    <option value="{slug-colonia-1}">{Nombre Colonia 1}</option>
    <option value="{slug-colonia-2}">{Nombre Colonia 2}</option>
    <!-- ... mas colonias ... -->
  </select>
</div>
```

#### 3.10.3 School Card Template

```html
<article class="school-card-enhanced">
  <div class="school-card-image">
    <img src="/img/escuelas/placeholder.jpg" alt="{NOMBRE_ESCUELA}" loading="lazy" width="400" height="225">
    <div class="school-badges-row">
      <div class="school-badges-left">
        <span class="school-badge-sm badge-verified">Verificada</span>
        <!-- Opcional: badge-semovi o badge-profeco -->
        <span class="school-badge-sm badge-semovi">SEMOVI</span>
      </div>
    </div>
  </div>
  <div class="school-card-content">
    <div class="rating-row">
      <div class="rating-stars">
        <!-- 5 SVG stars (llenas o empty segun rating) -->
        <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <!-- ... 4 mas ... -->
      </div>
      <span class="rating-score">{RATING}</span>
      <span class="rating-count">({NUM_RESENAS} resenas)</span>
    </div>
    <a href="/escuela/{slug-escuela}/" class="school-name-link">{NOMBRE_ESCUELA}</a>
    <div class="school-location-row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <span>{COLONIA}, {NOMBRE_ALCALDIA}</span>
    </div>
    <div class="school-features-row">
      <span class="feature-chip">{FEATURE_1}</span>
      <span class="feature-chip">{FEATURE_2}</span>
      <span class="feature-chip">{FEATURE_3}</span>
    </div>
    <div class="school-footer">
      <div class="school-price-block">
        <span class="price-from">Desde</span>
        <span class="price-amount">${PRECIO}</span>
      </div>
      <div class="school-actions-row">
        <a href="/escuela/{slug-escuela}/" class="btn-details">Ver mas</a>
        <a href="https://wa.me/52{TELEFONO}?text=Hola,%20encontre%20su%20escuela%20en%20ESDEMA" class="btn-whatsapp" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</article>
```

**Features comunes para chips:**
- Automatico
- Estandar
- A domicilio
- Paquetes
- Nervios
- Fines de semana
- Intensivo
- Ingles
- Motocicleta
- Flexible

---

### 3.11 Why Choose Section

```html
<section class="why-choose-section">
  <div class="container">
    <div class="why-choose-header">
      <h2>Por que Aprender a Manejar en {NOMBRE_ALCALDIA}</h2>
      <p>Ventajas de tomar tu curso de manejo en esta alcaldia</p>
    </div>
    <div class="why-choose-grid">
      <!-- 4 cards con beneficios locales -->
      <div class="why-choose-card">
        <div class="why-choose-icon">
          <svg><!-- icono --></svg>
        </div>
        <h3>{BENEFICIO_TITULO}</h3>
        <p>{BENEFICIO_DESCRIPCION}</p>
      </div>
      <!-- ... 3 mas ... -->
    </div>
  </div>
</section>
```

**Iconos SVG para beneficios:**
```html
<!-- Check/Verificado -->
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

<!-- Ubicacion -->
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>

<!-- Usuarios/Instructores -->
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

<!-- Dinero/Precios -->
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
```

---

### 3.12 Colonias Section

```html
<section class="colonias-section">
  <div class="container">
    <div class="colonias-header">
      <h2>Colonias de {NOMBRE_ALCALDIA}</h2>
      <p>Encuentra escuelas de manejo en las principales colonias</p>
    </div>
    <div class="colonias-grid">
      <!-- 6-8 colonia cards -->
      <a href="/cdmx/{SLUG_ALCALDIA}/{slug-colonia}/" class="colonia-card">
        <div class="colonia-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <div class="colonia-info">
          <h3>{NOMBRE_COLONIA}</h3>
          <span>{NUM} escuelas</span>
        </div>
      </a>
      <!-- ... mas colonias ... -->
    </div>
  </div>
</section>
```

---

### 3.13 Info Section

```html
<section class="info-section-enhanced">
  <div class="container">
    <div class="info-grid">
      <div class="info-block">
        <h2>Escuelas de Manejo en {NOMBRE_ALCALDIA}: Guia Completa</h2>
        <p>La alcaldia <strong>{NOMBRE_ALCALDIA}</strong> es {DESCRIPCION_ALCALDIA}. Con mas de {POBLACION} habitantes y una excelente infraestructura vial, ofrece el ambiente ideal para conductores principiantes.</p>

        <h3>Vialidades principales para practicar</h3>
        <ul>
          <li>{VIALIDAD_1} - {descripcion}</li>
          <li>{VIALIDAD_2} - {descripcion}</li>
          <li>{VIALIDAD_3} - {descripcion}</li>
          <li>{VIALIDAD_4} - {descripcion}</li>
        </ul>

        <h3>Modulos de licencia cercanos</h3>
        <ul>
          <li>{MODULO_1} - {DIRECCION_1}</li>
          <li>{MODULO_2} - {DIRECCION_2}</li>
        </ul>

        <h3>Requisitos para licencia de conducir</h3>
        <ul>
          <li>Identificacion oficial vigente (INE/IFE)</li>
          <li>Comprobante de domicilio reciente</li>
          <li>CURP</li>
          <li>Examen teorico y practico</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          Precios en {NOMBRE_ALCALDIA}
        </h3>
        <ul class="price-list">
          <li class="price-item">
            <span class="price-item-name">Curso basico (6-8 hrs)</span>
            <span class="price-item-value">$2,400 - $3,200</span>
          </li>
          <li class="price-item">
            <span class="price-item-name">Curso completo (10-15 hrs)</span>
            <span class="price-item-value">$3,500 - $4,800</span>
          </li>
          <li class="price-item">
            <span class="price-item-name">Curso intensivo (20+ hrs)</span>
            <span class="price-item-value">$5,000 - $7,000</span>
          </li>
          <li class="price-item">
            <span class="price-item-name">Clase individual (1 hr)</span>
            <span class="price-item-value">$450 - $600</span>
          </li>
          <li class="price-item">
            <span class="price-item-name">Curso automatico premium</span>
            <span class="price-item-value">$4,500 - $6,500</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### 3.14 FAQ Section

```html
<section class="faq-section">
  <div class="container">
    <div class="faq-header">
      <h2>Preguntas Frecuentes</h2>
    </div>
    <div class="faq-container">
      <div class="faq-list">

        <details class="faq-item">
          <summary class="faq-question">
            Cuanto cuesta aprender a manejar en {NOMBRE_ALCALDIA}?
            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Los precios en {NOMBRE_ALCALDIA} van desde <strong>${PRECIO_MIN} MXN</strong> para cursos basicos hasta <strong>${PRECIO_MAX} MXN</strong> para cursos intensivos completos. El precio promedio para un curso estandar de 10 horas es de aproximadamente ${PRECIO_PROMEDIO} MXN.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">
            Cuales son las mejores escuelas de manejo en {NOMBRE_ALCALDIA}?
            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Las escuelas mejor calificadas en {NOMBRE_ALCALDIA} son <strong>{ESCUELA_1}</strong> ({RATING_1} estrellas), <strong>{ESCUELA_2}</strong> ({RATING_2} estrellas) y <strong>{ESCUELA_3}</strong> ({RATING_3} estrellas). Todas cuentan con certificacion SEMOVI y vehiculos con doble control.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">
            Donde puedo tramitar mi licencia de conducir en {NOMBRE_ALCALDIA}?
            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>El modulo principal para tramitar licencias en {NOMBRE_ALCALDIA} esta ubicado en <strong>{DIRECCION_MODULO}</strong>. {INFO_ADICIONAL_MODULO}. Es necesario agendar cita previa en el portal de SEMOVI.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">
            Cuanto tiempo dura un curso de manejo completo?
            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Un curso basico dura entre <strong>6-8 horas</strong>, un curso completo entre <strong>10-15 horas</strong>, y un curso intensivo puede ser de <strong>20 horas o mas</strong>. La mayoria de las escuelas ofrecen horarios flexibles y clases en fines de semana.</p>
          </div>
        </details>

      </div>
    </div>
  </div>
</section>
```

---

### 3.15 Other Alcaldias Section

```html
<section class="other-alcaldias">
  <div class="container">
    <div class="other-alcaldias-header">
      <h2>Otras Alcaldias en CDMX</h2>
    </div>
    <div class="other-alcaldias-grid">
      <!-- 7 alcaldias cercanas + link a todas -->
      <a href="/cdmx/{slug-alcaldia}/" class="other-alcaldia-link">
        {Nombre Alcaldia}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg>
      </a>
      <!-- ... mas alcaldias ... -->
      <a href="/cdmx/" class="other-alcaldia-link">
        Ver todas las alcaldias
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg>
      </a>
    </div>
  </div>
</section>
```

**Nota:** NO incluir la alcaldia actual en la lista.

---

### 3.16 CTA Section

```html
<section class="section section-cta">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">Tienes una Escuela de Manejo en {NOMBRE_ALCALDIA}?</h2>
      <p class="cta-text">Registra tu escuela gratis y llega a miles de personas buscando aprender a manejar en la zona.</p>
      <a href="/registrar-escuela/" class="btn btn-white btn-lg">Registrar mi Escuela Gratis</a>
    </div>
  </div>
</section>
```

---

### 3.17 Footer y Scripts

```html
  </main>

  <!-- Footer -->
  <div id="esdema-footer"></div>

  <!-- Scripts -->
  <script src="/js/components.js"></script>
  <script src="/js/app.js" defer></script>

</body>
</html>
```

---

## Paso 4: Enlazar en el Sitio

### 4.1 Actualizar `/cdmx/index.html`

#### 4.1.1 En el dropdown de filtros
Agregar la alcaldia al `<select>`:
```html
<option value="{slug-alcaldia}">{Nombre Alcaldia}</option>
```

#### 4.1.2 En la seccion de alcaldias
Agregar card en `.alcaldias-grid`:
```html
<a href="/cdmx/{slug-alcaldia}/" class="alcaldia-card">
  <div class="alcaldia-icon">
    <svg><!-- icono ubicacion --></svg>
  </div>
  <div class="alcaldia-info">
    <h3>{Nombre Alcaldia}</h3>
    <span>{NUM} escuelas</span>
  </div>
  <div class="alcaldia-arrow">
    <svg><!-- arrow --></svg>
  </div>
</a>
```

### 4.2 Actualizar otras paginas de alcaldias

En la seccion "Otras Alcaldias" de cada pagina de alcaldia existente, agregar un link a la nueva:
```html
<a href="/cdmx/{slug-alcaldia}/" class="other-alcaldia-link">
  {Nombre Alcaldia}
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg>
</a>
```

### 4.3 Verificar Sitemap (si existe)

Agregar la URL al sitemap:
```xml
<url>
  <loc>https://esdema.mx/cdmx/{slug-alcaldia}/</loc>
  <lastmod>{FECHA}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Paso 5: Verificacion Final

### 5.1 Checklist de Verificacion

- [ ] La carpeta existe en `/cdmx/{slug-alcaldia}/`
- [ ] El archivo `index.html` esta creado
- [ ] El titulo tiene el nombre correcto de la alcaldia
- [ ] La meta description menciona colonias locales
- [ ] Las coordenadas geo son correctas
- [ ] El canonical URL es correcto
- [ ] Schema.org tiene el nombre correcto
- [ ] Breadcrumb muestra la ruta correcta
- [ ] Hero menciona la alcaldia correctamente
- [ ] Hay minimo 6 school cards
- [ ] Las colonias son de la alcaldia correcta
- [ ] Info section tiene vialidades locales reales
- [ ] FAQ menciona la alcaldia correctamente
- [ ] CTA menciona la alcaldia
- [ ] Other Alcaldias NO incluye la actual
- [ ] Enlazado desde `/cdmx/index.html`
- [ ] Enlazado desde otras alcaldias

### 5.2 Test de Navegacion

1. Abrir `/cdmx/index.html`
2. Click en la card de la alcaldia
3. Verificar que carga correctamente
4. Verificar breadcrumb funcional
5. Click en "Otras Alcaldias" y verificar links

---

## Referencia de las 16 Alcaldias

| # | Alcaldia | Slug | Poblacion | Colonias Principales |
|---|----------|------|-----------|---------------------|
| 1 | Alvaro Obregon | alvaro-obregon | 749,982 | San Angel, Mixcoac, Florida, Guadalupe Inn |
| 2 | Azcapotzalco | azcapotzalco | 400,161 | Claveria, Azcapotzalco Centro, Industrial Vallejo, San Alvaro |
| 3 | Benito Juarez | benito-juarez | 417,416 | Del Valle, Narvarte, Napoles, Mixcoac, Portales |
| 4 | Coyoacan | coyoacan | 620,416 | Coyoacan Centro, Copilco, Del Carmen, Pedregal |
| 5 | Cuajimalpa | cuajimalpa | 199,224 | Santa Fe, Contadero, San Mateo Tlaltenango |
| 6 | Cuauhtemoc | cuauhtemoc | 545,884 | Roma, Condesa, Juarez, Centro Historico, Doctores |
| 7 | Gustavo A. Madero | gustavo-a-madero | 1,164,477 | Lindavista, La Villa, Aragon, Tepeyac |
| 8 | Iztacalco | iztacalco | 390,348 | Agricola Oriental, Pantitlan, Gabriel Ramos Millan |
| 9 | Iztapalapa | iztapalapa | 1,835,486 | Ermita, Santa Cruz Meyehualco, Constitucion de 1917 |
| 10 | Magdalena Contreras | magdalena-contreras | 243,886 | San Jeronimo, La Magdalena, Barranca Seca |
| 11 | Miguel Hidalgo | miguel-hidalgo | 414,470 | Polanco, Anzures, Tacuba, Lomas de Chapultepec |
| 12 | Milpa Alta | milpa-alta | 137,927 | Villa Milpa Alta, San Pedro Atocpan, San Pablo Oztotepec |
| 13 | Tlahuac | tlahuac | 392,313 | Tlahuac Centro, San Francisco Tlaltenco, Zapotitlan |
| 14 | Tlalpan | tlalpan | 699,928 | Coapa, Pedregal de San Angel, Ajusco, Tlalpan Centro |
| 15 | Venustiano Carranza | venustiano-carranza | 427,263 | Jardin Balbuena, Moctezuma, Aeropuerto, Merced |
| 16 | Xochimilco | xochimilco | 415,933 | Xochimilco Centro, Santa Cruz Acalpixca, San Gregorio |

---

## Plantilla Completa

La plantilla base esta en:
```
/cdmx/alvaro-obregon/index.html
```

Para crear una nueva alcaldia:
1. Copiar el archivo completo
2. Usar buscar/reemplazar para cambiar:
   - `Alvaro Obregon` → `{Nombre Alcaldia}`
   - `alvaro-obregon` → `{slug-alcaldia}`
   - Coordenadas geo
   - Colonias
   - Vialidades
   - Escuelas
   - Modulos de licencia

---

## Notas Importantes

1. **Consistencia**: Mantener el mismo formato de precios en todas las alcaldias
2. **Acentos**: En URLs nunca usar acentos
3. **Imagenes**: Usar `/img/escuelas/placeholder.jpg` como default
4. **Telefonos**: Usar formato sin espacios ni guiones (ej: 5512345678)
5. **Ratings**: Usar valores entre 4.0 y 5.0
6. **Resenas**: Usar cantidades realistas (30-150)

---

*Documento de referencia para creacion de paginas de alcaldias*
*Referencia: /cdmx/alvaro-obregon/index.html*
