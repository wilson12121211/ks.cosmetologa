import { defineCollection, z } from 'astro:content';

// Schema para tratamientos
const treatmentsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Facial', 'Corporal', 'Especial']),
    price: z.number().optional(),
    duration: z.string().optional(),
    benefits: z.array(z.string()),
    icon: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema para testimonios
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5),
    photo: z.string().optional(),
    treatment: z.string().optional(),
    date: z.date().optional(),
    featured: z.boolean().default(false),
  }),
});

// Schema para configuración del sitio
const siteConfigCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
      backgroundImage: z.string(),
      overlayOpacity: z.number().min(0).max(1).default(0.6),
    }),
    contact: z.object({
      phone: z.string(),
      whatsapp: z.string(),
      email: z.string(),
      address: z.string(),
      hours: z.array(z.object({
        day: z.string(),
        hours: z.string(),
      })),
    }),
    social: z.object({
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      tiktok: z.string().optional(),
    }),
    seo: z.object({
      siteName: z.string(),
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      defaultImage: z.string(),
      twitterHandle: z.string().optional(),
    }),
  }),
});

// Schema para entradas de blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Schema para páginas dinámicas
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: z.string().optional(),
      ctaText: z.string().optional(),
      ctaLink: z.string().optional(),
    }).optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      noindex: z.boolean().default(false),
    }).optional(),
    blocks: z.array(z.object({
      type: z.enum(['hero', 'treatments', 'testimonials', 'gallery', 'faq', 'cta', 'text', 'features']),
      data: z.any(),
    })).optional(),
  }),
});

export const collections = {
  'treatments': treatmentsCollection,
  'testimonials': testimonialsCollection,
  'site-config': siteConfigCollection,
  'blog': blogCollection,
  'pages': pagesCollection,
};
