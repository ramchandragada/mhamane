import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mhamane.vercel.app/#business",
    name: site.name,
    description: site.description,
    url: "https://mhamane.vercel.app",
    telephone: site.phone,
    email: site.email,
    image: "https://mhamane.vercel.app/images/og-share.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solapur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "State", name: "Telangana" },
    ],
    founder: {
      "@type": "Person",
      name: site.md.name,
      jobTitle: site.md.title,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
