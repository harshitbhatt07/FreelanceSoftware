import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fade } from "./animations";
import { AnimatedSectionTitle } from "./AnimatedSectionTitle";
import { ProjectCard } from "./ProjectCard";

const projects = [
  [
    "StayFinder - Hotel Booking Website",
    "Hotel booking web application with authentication, room listing, booking management, and admin features.",
    "React.js, Node.js, Express.js, MongoDB",
    ["Login", "Rooms", "Booking", "Admin"],
    { live: "https://stayfinder-mu.vercel.app/", github: "#" },
  ],
  [
    "React E-commerce Website",
    "Responsive e-commerce frontend with product listing, cart system, product details, and checkout page.",
    "React.js, Tailwind CSS, JavaScript",
    ["Products", "Cart", "Checkout", "Responsive"],
    { live: "https://kith.com/", github: "#" },
  ],
  [
    "Hotel Green Palace Website",
    "Hotel website with rooms, booking form, gallery, contact section, and responsive design.",
    "HTML, CSS, JavaScript, PHP, MySQL",
    ["Booking", "Gallery", "Contact", "Admin"],
    { live: "https://harshitbhatt07.github.io/HotelBookingWebsite/main.html", github: "#" },
  ],
];

export function ProjectsPreview() {
  return (
    <section className="section bg-[#080808]">
      <div className="containerx">
        <AnimatedSectionTitle eyebrow="Projects" title="Selected Demo Work" />
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project[0]} p={project} i={index} />
          ))}
        </div>
        <motion.div {...fade} className="mt-10 text-center">
          <Link className="btn-primary" to="/projects">
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
