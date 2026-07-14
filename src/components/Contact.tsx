"use client";

import { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { SocialButtons } from "./SocialButtons";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // Standard form submit will trigger, but we could prevent default if doing custom fetch.
    // For now we allow it to submit directly to getform.io action.
  };

  return (
    <div id="contact" className="w-full py-20 bg-bg relative">
      <div className="portfolio-content max-w-[1240px] mx-auto">
        <div className="inline-block border-2 border-black bg-duck-yellow text-strong font-display font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
          Contact
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-strong mb-10 leading-none">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Details Card (Left) */}
          <div className="col-span-3 lg:col-span-2 border-[4px] border-black bg-white p-6 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="border-[3px] border-black overflow-hidden bg-bg mb-6">
                <img
                  src="/assets/contact.jpg"
                  alt="Contact Me"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display font-black text-2xl uppercase text-strong mb-1">
                Arjan Cordia
              </h3>
              <p className="font-display font-bold text-duck-beak uppercase tracking-wider text-sm mb-4">
                Dev Powerhouse & Game Dev
              </p>
              <p className="font-medium text-gray-600 mb-6">
                I'm available for technical consultation, game systems design projects, or just chatting about neat software patterns and skateboards. Drop me a line!
              </p>
            </div>

            <div className="border-t-[3px] border-black pt-6">
              <p className="font-display font-black text-xs uppercase tracking-widest text-strong mb-2 text-center lg:text-left">
                Connect With Me
              </p>
              <SocialButtons />
            </div>
          </div>

          {/* Form Card (Right) */}
          <div className="col-span-3 border-[4px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/2b526499-1abd-4ff6-beb1-6c248170ef9e"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+31 6 12345678"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jane.doe@example.com"
                />
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Collaborating on a game / architecture project"
                />
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Hey Arjan! I'd love to chat about..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-center border-[3px] border-black bg-duck-beak text-white font-display font-black uppercase tracking-widest py-4 transition-all duration-150 shadow-brutal hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
              >
                Send Message ✉
              </button>
            </form>
          </div>
        </div>

        {/* Scroll back up */}
        <div className="flex justify-center mt-16">
          <Link
            href="/#top"
            className="border-[3px] border-black bg-duck-yellow p-4 rounded-full shadow-brutal hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-y-0 active:shadow-none transition-all duration-100 flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <HiOutlineChevronDoubleUp size={24} className="text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
