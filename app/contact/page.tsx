"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-100">
              Have questions or want to support our mission? We&apos;d love to
              hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Address */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Registered Address</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No 23 Dozie Way, Off Ikot Ekpene Road, Umuahia, Abia State,
                  Nigeria
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Operational Address</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sir John Nwadighioha Evangelical and Welfare Foundation’s
                  building,
                  <br />
                  K/m 112 PH/Enugu Express way Nsukwe Ubakala Umuahia Abia
                  State, Nigeria.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Phone</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+2348135614881"
                      className="text-primary hover:underline"
                    >
                      +234 813 561 4881
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+2348084008241"
                      className="text-primary hover:underline"
                    >
                      +234 808 400 8241
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Email</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  <a
                    href="mailto:zackson2025foundation@gmail.com"
                    className="text-primary hover:underline"
                  >
                    zackson2025foundation@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Volunteer/Support</option>
                      <option value="donate">Donation</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                      Thank you! We&apos;ll get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">How We Can Help</h2>
                <div className="space-y-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We aim to respond to all inquiries within 48 hours. For
                      urgent matters, please call us directly.
                    </p>
                  </div>

                  <div
                    className="bg-card border border-border rounded-lg p-6"
                    id="#donate"
                  >
                    <h3 className="font-bold mb-2">Get Involved</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Interested in supporting our mission? There are many ways
                      to help:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Make a donation to support our programs</li>
                      <li>✓ Volunteer your time and skills</li>
                      <li>✓ Partner with us on specific initiatives</li>
                      <li>✓ Advocate for our cause</li>
                      <li>✓ Spread awareness about our mission</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-bold mb-2">Bank Details</h3>
                    <p className="text-muted-foreground text-sm">
                      For donations and fund transfers:
                    </p>
                    <div className="mt-3 space-y-1 text-sm">
                      <p>
                        <span className="font-semibold">Account Name:</span>{" "}
                        Zack Humanitarian Foundation
                      </p>
                      <p>
                        <span className="font-semibold">Account Number:</span>{" "}
                        4110219720
                      </p>
                      <p>
                        <span className="font-semibold">Bank:</span> Fidelity
                        Bank
                      </p>
                      <p>
                        <span className="font-semibold">Account Type:</span>{" "}
                        Corporate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
