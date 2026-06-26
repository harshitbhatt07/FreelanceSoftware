import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Palette, Rocket, Server, ShoppingCart } from "lucide-react";
import { fade, stagger } from "./animations";
import { AnimatedSectionTitle } from "./AnimatedSectionTitle";
import { ServiceCard } from "./ServiceCard";

const services = [
  [
    "Website Development",
    "We build modern, responsive, and professional websites for businesses, startups, and individuals.",
    Code2,
  ],
  [
    "Web App Development",
    "We create dynamic web applications with frontend, backend, database, and API integration.",
    Layers,
  ],
  [
    "UI Design",
    "We design clean, attractive, and user-friendly interfaces for websites and web apps.",
    Palette,
  ],
  [
    "E-commerce Website",
    "We build online store websites with product listing, cart, checkout, and order features.",
    ShoppingCart,
  ],
  [
    "API Development",
    "We create REST APIs using Node.js and Express.js for secure backend communication.",
    Server,
  ],
  [
    "Deployment & Support",
    "We help deploy websites on Vercel, Netlify, Render and provide basic support.",
    Rocket,
  ],
];

export function ServicesPreview() {
  return (
    <section className="section bg-black">
      <div className="containerx">
        <AnimatedSectionTitle
          eyebrow="Services"
          title="What We Build"
          desc="Modern services for startups, businesses and personal brands."
        />
        <motion.div
          {...stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(([title, desc, Icon], index) => (
            <ServiceCard
              key={title}
              title={title}
              desc={desc}
              Icon={Icon}
              index={index}
            />
          ))}
        </motion.div>
        <motion.div {...fade} className="mt-10 text-center">
          <Link className="btn-primary" to="/services">
            All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
