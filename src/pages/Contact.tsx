import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

