"use client";

import { appName, contactInfo } from "@/constants/app";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Linkedin,
} from "lucide-react";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Trucks", href: "#trucks" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#1a1a1a] text-white pt-16 pb-6 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">{appName}</h3>
          <div className="text-sm text-white/80 leading-relaxed space-y-4">
            <p>
              We are a leading independent truck dispatch company dedicated to
              helping carriers move freight safely, efficiently, and profitably.
            </p>
            <p>
              Our dispatch service goes beyond just booking loads, we become
              your trusted partner in business. We provide the tools and support
              needed to keep your trucks on the road and your operations running
              smoothly.
            </p>
            <p>
              Every carrier is assigned a dedicated dispatcher who knows your
              business inside and out, acting as your single point of contact.
              There’s absolutely no forced dispatch, your priorities come first.
              <br />
              Let us handle the load hunting while you drive. Get in touch today
              to start dispatching smarter.
            </p>
          </div>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4">CONTACT DETAILS</h3>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 text-white" size={18} />
              <span>{contactInfo.location}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-1 text-white" size={18} />
              <a
                href="tel:+19036770493"
                className="hover:text-yellow-400 transition-colors"
              >
                {contactInfo.conatctNumber}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-1 text-white" size={18} />
              <a
                href="mailto:info@apexdispatchllc.com"
                className="hover:text-yellow-400 transition-colors"
              >
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-3 text-white/80 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  ➤ {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col lg:flex-row items-center justify-between text-white/60 text-sm gap-4">
        <p>
          © Copyright {new Date().getFullYear()} |{appName} |
          <Link href="/privacy-policy" className="hover:text-white underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white underline">
            Terms & Conditions
          </Link>
          | Design & Developed by
          <span className="font-semibold text-white"> Talha Mehmood</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com/share/16WcxAcagG/?mibextid=wwXIfr"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/liberty-lane-dispatch-llc-55a212370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
