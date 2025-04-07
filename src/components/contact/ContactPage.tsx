import { Flex, Text, Button } from "@/once-ui/components";
import { contact, person } from "@/app/resources/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <Flex direction="column" gap="xl" padding="xl">
      {/* Contact Information Section */}
      <Flex direction="column">
        <Text variant="body-strong-xl" marginBottom="m">{contact.title}</Text>
        <Text variant="body-default-l" marginBottom="xl">{contact.description}</Text>
        
        <Flex direction="column" gap="m">
          <Flex align="center" gap="s">
            <FaEnvelope />
            <Text variant="body-default-m">
              <a href={`mailto:${contact.contactInfo.email}`}>
                {contact.contactInfo.email}
              </a>
            </Text>
          </Flex>
          
          <Flex align="center" gap="s">
            <FaPhone />
            <Text variant="body-default-m">
              <a href={`tel:${contact.contactInfo.phone}`}>
                {contact.contactInfo.phone}
              </a>
            </Text>
          </Flex>
          
          <Flex align="center" gap="s">
            <FaMapMarkerAlt />
            <Text variant="body-default-m">{contact.contactInfo.location}</Text>
          </Flex>
          
          <Flex align="center" gap="s">
            <FaCalendarAlt />
            <Text variant="body-default-m">
              <a href={contact.calendar.link} target="_blank" rel="noopener noreferrer">
                {contact.calendar.description}
              </a>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Social Links Section */}
      <Flex direction="column">
        <Text variant="body-strong-l" marginBottom="m">Connect with me</Text>
        <Flex gap="m" style={{ flexWrap: "wrap" }}>
          {contact.socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="secondary"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Contact Form Section */}
      {contact.form.display && (
        <Flex direction="column">
          <Text variant="body-strong-l" marginBottom="m">{contact.form.title}</Text>
          <Text variant="body-default-m" marginBottom="m">{contact.form.description}</Text>
          <form
            action="https://formspree.io/f/xblgpojb" // Replace with your Formspree form ID
            method="POST"
          >
            <Flex direction="column" gap="m">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <Button type="submit">Send Message</Button>
            </Flex>
          </form>
        </Flex>
      )}
    </Flex>
  );
} 