type OrganizationJsonLdProps = {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
};

export function OrganizationJsonLd({
  name = "FacilityPay",
  url = "https://facilitypay.com.br",
  logo = "https://facilitypay.com.br/logo.png",
  description = "FacilityPay oferece as menores taxas do Brasil no parcelado. Maquininhas de cartão com garantia vitalícia, sem aluguel e atendimento humanizado.",
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    foundingDate: "2016",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vitória",
        addressRegion: "ES",
        addressCountry: "BR",
      },
    },
    sameAs: [
      "https://www.instagram.com/sejafacility",
      "https://www.youtube.com/@facilitypay",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
};

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "FacilityPay",
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://facilitypay.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "FacilityPay",
      url: "https://facilitypay.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://facilitypay.com.br/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type WebsiteJsonLdProps = {
  name?: string;
  url?: string;
  description?: string;
};

export function WebsiteJsonLd({
  name = "FacilityPay",
  url = "https://facilitypay.com.br",
  description = "FacilityPay - As menores taxas do Brasil no parcelado. Maquininhas de cartão com garantia vitalícia.",
}: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
