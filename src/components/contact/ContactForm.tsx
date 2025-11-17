import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";

const offices = [
  {
    country: "INDIA",
    countryCode: "IN",
    phone: "+91 7708443455",
    email: "info@mulecraft.in",
    address: "1/17/14 Kannampalikadu, Thiruchengodu Road, Sankari, Salem, Tamil Nadu - 637301",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=1/17/14+Kannampalikadu,+Thiruchengodu+Road,+Sankari,+Salem,+Tamil+Nadu+637301",
  },
  {
    country: "UNITED KINGDOM",
    countryCode: "GB",
    phone: "+91 7708443455",
    email: "info@mulecraft.in",
    address: "3rd Floor, 86-90 Paul Street, London, England, EC2A 4NE",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=3rd+Floor,+86-90+Paul+Street,+London,+England,+EC2A+4NE",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    company: false,
    phone: false,
    message: false,
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const value = formData[name as keyof typeof formData];
    validateField(name, value);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setFocusedField(name);
  };

  const validateField = (name: string, value: string) => {
    let isValid = true;

    if (name === "email") {
      isValid = value.trim() === "" ? false : emailRegex.test(value);
    } else if (name === "phone") {
      isValid = value.trim() === "" ? false : phoneRegex.test(value);
    } else {
      isValid = value.trim() !== "";
    }

    setFormErrors((prev) => ({
      ...prev,
      [name]: !isValid,
    }));

    return isValid;
  };

  const validateForm = () => {
    const errors: typeof formErrors = {
      firstname: formData.firstname.trim() === "",
      lastname: formData.lastname.trim() === "",
      email: formData.email.trim() === "" || !emailRegex.test(formData.email),
      company: formData.company.trim() === "",
      phone: formData.phone.trim() === "" || !phoneRegex.test(formData.phone),
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorField = Object.keys(formErrors).find(
        (key) => formErrors[key as keyof typeof formErrors]
      );
      if (firstErrorField) {
        setFocusedField(firstErrorField);
      }
      return;
    }

    // TODO: Integrate with Supabase or your backend API
    // For now, we'll just show success message
    try {
      // const { data, error } = await supabase
      //   .schema("mulecraft_internal")
      //   .from("enquiries")
      //   .insert([formData]);
      
      // if (error) {
      //   console.error("Error inserting data:", error);
      //   return;
      // }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const getCountryFlag = (countryCode: string) => {
    const flags: Record<string, string> = {
      IN: "🇮🇳",
      GB: "🇬🇧",
    };
    return flags[countryCode] || "🌍";
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Offices */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Get in Touch! Supercharge Your Integration Capabilities.
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
              Our advisors are here to help you deliver success now. They can answer all your MuleCraft-related questions and show you how to maximize your savings and increase productivity.
            </p>

            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
                Our Offices
              </h3>
              
              {/* Map */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <iframe
                  title="MuleCraft Office Map"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1963208716165!2d77.86914787594058!3d11.465751088728014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95f9c28c187d5%3A0x27f1b9ecca3d8a11!2sMulecraft%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1750403662385!5m2!1sen!2sin"
                ></iframe>
              </div>

              {/* Office Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{getCountryFlag(office.countryCode)}</span>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {office.country}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 mb-2">{office.phone}</p>
                    <p className="text-xs sm:text-sm text-white/70 mb-2">{office.email}</p>
                    <p className="text-xs sm:text-sm text-white/70 mb-4 leading-relaxed">
                      {office.address}
                    </p>
                    <a
                      href={office.gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-white/80 transition-colors"
                    >
                      Get Direction
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {!isSubmitted ? (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <p className="text-xs sm:text-sm text-white/70 mb-6">
                  ✓ Trust is our #1 value, so rest assured your email is safe. Learn more about the use of personal data in our Privacy Policy.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name */}
                  <div className="relative">
                    <Label htmlFor="firstname" className="text-white/80 mb-2 block">
                      First Name
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                        formErrors.firstname && focusedField === "firstname"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formErrors.firstname && focusedField === "firstname" && (
                      <p className="absolute top-full mt-1 text-xs text-red-400">
                        First Name is required
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <Label htmlFor="lastname" className="text-white/80 mb-2 block">
                      Last Name
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                        formErrors.lastname && focusedField === "lastname"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formErrors.lastname && focusedField === "lastname" && (
                      <p className="absolute top-full mt-1 text-xs text-red-400">
                        Last Name is required
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Label htmlFor="email" className="text-white/80 mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                        (formErrors.email || (formData.email !== "" && !emailRegex.test(formData.email))) &&
                        focusedField === "email"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {(formErrors.email || (formData.email !== "" && !emailRegex.test(formData.email))) &&
                      focusedField === "email" && (
                        <p className="absolute top-full mt-1 text-xs text-red-400">
                          {formData.email !== "" && !emailRegex.test(formData.email)
                            ? "Invalid email address"
                            : "Email is required"}
                        </p>
                      )}
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Label htmlFor="company" className="text-white/80 mb-2 block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                        formErrors.company && focusedField === "company"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formErrors.company && focusedField === "company" && (
                      <p className="absolute top-full mt-1 text-xs text-red-400">
                        Company is required
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Label htmlFor="phone" className="text-white/80 mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                        (formErrors.phone || (formData.phone !== "" && !phoneRegex.test(formData.phone))) &&
                        focusedField === "phone"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {(formErrors.phone || (formData.phone !== "" && !phoneRegex.test(formData.phone))) &&
                      focusedField === "phone" && (
                        <p className="absolute top-full mt-1 text-xs text-red-400">
                          {formData.phone !== "" && !phoneRegex.test(formData.phone)
                            ? "Invalid phone number"
                            : "Phone number is required"}
                        </p>
                      )}
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <Label htmlFor="message" className="text-white/80 mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      rows={4}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none ${
                        formErrors.message && focusedField === "message"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formErrors.message && focusedField === "message" && (
                      <p className="absolute top-full mt-1 text-xs text-red-400">
                        Message is required
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 py-3 text-base font-semibold rounded-lg mt-6"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Thank you for contacting us
                </h3>
                <p className="text-sm sm:text-base text-white/70">
                  A representative will reach out to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

