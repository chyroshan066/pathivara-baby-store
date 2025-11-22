import { Description, Email, Name } from "@/types";

interface Context {
  "@context": "https://schema.org";
}

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

interface Offer extends Name {
  "@type": "Offer";
  priceCurrency: string;
  availability: string;
}

interface Product extends Name, Description {
  "@type": "Product";
  category: string;
  brand?: string;
  offers: Offer;
}

interface ItemList extends Name, Description, Context {
  "@type": "ItemList";
  itemListElement: ListItem[];
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: ProductCategory;
}

interface ProductCategory extends Name, Description {
  "@type": "Product";
  category: string;
}

interface BabyStoreStructuredData extends Name, Description, Email, Context {
  "@type": "Store";
  url: string;
  image: string;
  address: PostalAddress;
  telephone: string[];
  openingHoursSpecification: OpeningHoursSpecification[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates;
  sameAs: string[];
  areaServed: string[];
  paymentAccepted: string[];
  currenciesAccepted: string;
  hasOfferCatalog: OfferCatalog;
}

interface OfferCatalog extends Name {
  "@type": "OfferCatalog";
  itemListElement: OfferCatalogItem[];
}

interface OfferCatalogItem extends Name, Description {
  "@type": "OfferCatalog";
  itemListElement: Product[];
}

export const babyStoreStructuredData: BabyStoreStructuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Pathivara Baby Store",
  "description": "Your trusted baby store in Itahari, Sunsari offering quality baby clothes, diapers (Awibi, Zuvara, Mumbuds), hospital bags, and essentials for children aged 0-14 years. Serving Itahari Chowk and surrounding areas including Dharan, Biratnagar, and Sunsari district.",
  "url": "https://pathivarababystore.com.np",
  "image": "https://pathivarababystore.com.np/images/preview.webp",
  "email": "",
  "telephone": [
    "+977-9842566778",
    "+977-9842566778"
],

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Itahari Chowk",
    "addressLocality": "Itahari",
    "addressRegion": "Sunsari",
    "postalCode": "56705",
    "addressCountry": "NP"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.66285",
    "longitude": "87.27428"
  },

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],

  "priceRange": "$$",
  "paymentAccepted": ["Cash", "eSewa", "Khalti"],
  "currenciesAccepted": "NPR",

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.7",
    "ratingCount": "3"
  },

  "areaServed": ["Itahari", "Dharan", "Biratnagar", "Inaruwa", "Duhabi", "Tarahara", "Sunsari"],

  "sameAs": [
    "",
    "https://www.tiktok.com/@pathivara_babystore?_r=1&_t=ZS-91YWdqC85Lg"
  ],

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Baby Products Catalog",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Baby Clothing",
        "description": "Quality baby clothes for newborns to children up to 14 years",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Newborn Clothing Sets",
            "description": "Soft cotton clothing sets for newborns including rompers, bodysuits, and sleepwear",
            "category": "Baby Clothing",
            "offers": {
              "@type": "Offer",
              "name": "Newborn Clothing",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Toddler Clothing",
            "description": "Comfortable everyday wear for toddlers including t-shirts, pants, and dresses",
            "category": "Baby Clothing",
            "offers": {
              "@type": "Offer",
              "name": "Toddler Clothing",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Kids Clothing",
            "description": "Stylish and comfortable clothing for children up to 14 years",
            "category": "Kids Clothing",
            "offers": {
              "@type": "Offer",
              "name": "Kids Clothing",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Diapers",
        "description": "Premium quality diapers from trusted brands",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Awibi Diapers",
            "description": "Premium Awibi diapers known for superior absorbency and comfort for babies",
            "category": "Diapers",
            "brand": "Awibi",
            "offers": {
              "@type": "Offer",
              "name": "Awibi Diapers",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Zuvara Diapers",
            "description": "Zuvara diapers with excellent leak protection and gentle on baby's skin",
            "category": "Diapers",
            "brand": "Zuvara",
            "offers": {
              "@type": "Offer",
              "name": "Zuvara Diapers",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Mumbuds Diapers",
            "description": "Affordable quality Mumbuds diapers for everyday use",
            "category": "Diapers",
            "brand": "Mumbuds",
            "offers": {
              "@type": "Offer",
              "name": "Mumbuds Diapers",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Hospital Bags & Maternity",
        "description": "Complete hospital bag sets and maternity essentials",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Hospital Bag Set",
            "description": "Complete hospital bag with all essentials for new mothers and babies",
            "category": "Maternity",
            "offers": {
              "@type": "Offer",
              "name": "Hospital Bag Set",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Maternity Essentials",
            "description": "Essential items for expecting mothers preparing for delivery",
            "category": "Maternity",
            "offers": {
              "@type": "Offer",
              "name": "Maternity Essentials",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Baby Essentials",
        "description": "Daily care products and accessories for babies",
        "itemListElement": [
          {
            "@type": "Product",
            "name": "Baby Feeding Bottles",
            "description": "Quality feeding bottles and accessories for infant feeding",
            "category": "Baby Essentials",
            "offers": {
              "@type": "Offer",
              "name": "Feeding Bottles",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Baby Wet Wipes",
            "description": "Gentle wet wipes for baby's delicate skin",
            "category": "Baby Essentials",
            "offers": {
              "@type": "Offer",
              "name": "Wet Wipes",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Baby Lotions & Powders",
            "description": "Gentle skincare products including lotions, powders, and oils for babies",
            "category": "Baby Essentials",
            "offers": {
              "@type": "Offer",
              "name": "Baby Skincare",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Product",
            "name": "Baby Bedding",
            "description": "Comfortable bedding sets, blankets, and sleeping accessories for babies",
            "category": "Baby Essentials",
            "offers": {
              "@type": "Offer",
              "name": "Baby Bedding",
              "priceCurrency": "NPR",
              "availability": "https://schema.org/InStock"
            }
          }
        ]
      }
    ]
  }
};

export const babyProductCategoriesStructuredData: ItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Baby Store Product Categories",
  "description": "Complete range of baby products available at Pathivara Baby Store Itahari",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Baby Clothing",
        "description": "Quality clothing for newborns to children up to 14 years including rompers, bodysuits, dresses, and seasonal wear",
        "category": "Apparel"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Diapers & Nappies",
        "description": "Premium diaper brands including Awibi, Zuvara, and Mumbuds in all sizes",
        "category": "Baby Care"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Hospital Bags",
        "description": "Complete hospital bag sets with all essentials for new mothers and newborn babies",
        "category": "Maternity"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "Baby Feeding",
        "description": "Feeding bottles, nipples, sterilizers, and feeding accessories",
        "category": "Feeding"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "Baby Skincare",
        "description": "Gentle lotions, powders, oils, and wet wipes for baby's delicate skin",
        "category": "Baby Care"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Product",
        "name": "Baby Bedding",
        "description": "Comfortable bedding, blankets, crib sheets, and sleeping accessories",
        "category": "Nursery"
      }
    }
  ]
};