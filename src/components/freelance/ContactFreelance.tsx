"use client";

import { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { SocialButtons } from "../SocialButtons";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function ContactFreelance() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // Submit directly to getform.io action
  };

  return (
    <div id="contact" className="w-full py-20 bg-bg relative">
      <div className="portfolio-content max-w-[1240px] mx-auto">
        <Badge color="yellow" className="mb-4">
          Contact
        </Badge>
        <Heading level={2} variant="section" className="mb-10">
          Let's Build Systems Together
        </Heading>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Details Card (Left) */}
          <Card className="col-span-3 lg:col-span-2 border-4 flex flex-col justify-between">
            <div>
              <div className="border-[3px] border-black overflow-hidden bg-bg mb-6">
                <img
                  src="/assets/contact.jpg"
                  alt="Contact Me"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
              <Heading level={3} className="mb-1">
                Arjan Cordia
              </Heading>
              <p className="font-display font-bold text-duck-beak uppercase tracking-wider text-sm mb-4">
                Senior Software Engineer & Platform Specialist
              </p>
              <p className="font-medium text-gray-600 mb-6">
                I am available for freelance contracting, technical advising, design system architecture audits, and frontend performance consults. Drop me a line with your project details!
              </p>
            </div>

            <div className="border-t-[3px] border-black pt-6">
              <p className="font-display font-black text-xs uppercase tracking-widest text-strong mb-2 text-center lg:text-left">
                Connect With Me
              </p>
              <SocialButtons />
            </div>
          </Card>

          {/* Form Card (Right) */}
          <Card className="col-span-3 border-4 p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/2b526499-1abd-4ff6-beb1-6c248170ef9e"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+31 6 12345678"
                />
              </div>

              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane.doe@example.com"
                className="mb-6"
              />

              <InputField
                label="Subject"
                id="subject"
                name="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Consulting on Design Systems / Frontend Platforms"
                className="mb-6"
              />

              <InputField
                label="Message"
                id="message"
                name="message"
                type="textarea"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Hey Arjan! We have a freelance opening for a design systems specialist..."
                className="mb-6"
              />

              <Button
                type="submit"
                className="w-full py-4 tracking-widest"
              >
                Send Message ✉
              </Button>
            </form>
          </Card>
        </div>

        {/* Scroll back up */}
        <div className="flex justify-center mt-16">
          <Button
            variant="icon"
            href="#top"
            className="bg-duck-yellow"
            ariaLabel="Scroll to top"
          >
            <HiOutlineChevronDoubleUp size={24} className="text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
}
