import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonicalPath: z.string(),
  keywords: z.array(z.string()).optional()
});

const estados = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcionCorta: z.string(),
    escuelasAprox: z.number().int().nonnegative(),
    alcaldiasAprox: z.number().int().nonnegative(),
    regionesDestacadas: z.array(z.string()).default([]),
    seo: seoSchema
  })
});

const alcaldias = defineCollection({
  type: 'content',
  schema: z.object({
    estadoSlug: z.string(),
    nombre: z.string(),
    colonias: z.array(z.string()),
    precioDesde: z.string(),
    precioHasta: z.string(),
    escuelasCount: z.number().int().nonnegative(),
    coordenadas: z.object({
      lat: z.number(),
      lng: z.number()
    }),
    vialidadesClave: z.array(z.string()).default([]),
    modulosLicencia: z
      .array(
        z.object({
          nombre: z.string(),
          direccion: z.string()
        })
      )
      .default([]),
    rangosPrecio: z
      .array(
        z.object({
          concepto: z.string(),
          rango: z.string()
        })
      )
      .default([]),
    seo: seoSchema,
    faqs: z.array(
      z.object({
        pregunta: z.string(),
        respuesta: z.string()
      })
    )
  })
});

const escuelas = defineCollection({
  type: 'content',
  schema: z.object({
    estadoSlug: z.string(),
    alcaldiaSlug: z.string(),
    nombreComercial: z.string(),
    nombreSeo: z.string(),
    zonaSeo: z.string(),
    colonia: z.string(),
    direccion: z.string(),
    codigoPostal: z.string(),
    telefono: z.string(),
    whatsapp: z.string(),
    email: z.string().optional(),
    semoviRegistro: z.string().optional(),
    geo: z.object({
      lat: z.number(),
      lng: z.number()
    }),
    rating: z.number().min(0).max(5),
    totalResenas: z.number().int().nonnegative(),
    precioDesde: z.string(),
    precioRango: z.string(),
    badges: z.array(z.string()).default([]),
    horarios: z.array(
      z.object({
        dia: z.string(),
        abre: z.string(),
        cierra: z.string()
      })
    ),
    servicios: z.array(z.string()),
    resenas: z
      .array(
        z.object({
          autor: z.string(),
          rating: z.number().min(0).max(5),
          texto: z.string()
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          pregunta: z.string(),
          respuesta: z.string()
        })
      )
      .default([]),
    seo: seoSchema
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    canonicalPath: z.string()
  })
});

export const collections = {
  estados,
  alcaldias,
  escuelas,
  blog
};
