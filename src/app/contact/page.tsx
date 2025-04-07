import { Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { contact, person } from "@/app/resources/content";
import ContactPage from "@/components/contact/ContactPage";

export async function generateMetadata() {
  const title = contact.title;
  const description = contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Contact() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: contact.title,
            description: contact.description,
            url: `https://${baseURL}/contact`,
            contactPoint: {
              "@type": "ContactPoint",
              email: contact.contactInfo.email,
              telephone: contact.contactInfo.phone,
              areaServed: contact.contactInfo.location,
              availableLanguage: contact.contactInfo.availability
            },
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <ContactPage />
    </Flex>
  );
}
