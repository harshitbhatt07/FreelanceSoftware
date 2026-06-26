import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { slideIn } from "./animations";

export function HeroSection() {
  return (
    <section className="hero-surface overflow-hidden pb-8 pt-24 md:pt-28">
      <div className="containerx">
        <div className="grid items-center gap-8 lg:min-h-[410px] lg:grid-cols-[1fr_.48fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-xs font-black text-white/60 md:text-sm">
              Freelance Software Development Team
            </p>
            <h1 className="max-w-5xl text-4xl font-black leading-[.92] tracking-normal text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Turning Ideas Into{" "}
              <span className="text-[#0a84ff]">Digital Products</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Modern websites, mobile apps and backend systems for businesses
              that want to look sharp and work fast online.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link className="btn-primary" to="/projects">
                View Projects
              </Link>
              <Link className="btn-dark" to="/contact">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:text-right"
          >
            <Link
              className="inline-flex items-center gap-2 text-sm font-black text-white"
              to="/services"
            >
              FrelanceSofteare 3.0
              <span className="text-white/45">Everything we build</span>
              <ArrowRight size={16} />
            </Link>
            <p className="mt-4 max-w-md text-base leading-7 text-white/55 lg:ml-auto">
              We are FrelanceSofteare, a freelance software development team
              building responsive websites, web applications, and digital
              solutions for startups and businesses.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-8 pb-4 md:mt-10"
        >
          <div className="grid items-center gap-7 border-y border-white/5 bg-black py-6 md:gap-10 lg:grid-cols-[1.05fr_.95fr] lg:py-8">
            <motion.div
              {...slideIn(0)}
              className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-[0_30px_120px_rgba(0,0,0,.7)] sm:aspect-[16/9] lg:h-[400px] lg:aspect-auto"
            >
              <img
                src="/images/business-discussion.png"
                alt="Business discussion and teamwork"
                className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
            </motion.div>

            <motion.div
              {...slideIn(1)}
              className="relative flex flex-col justify-center px-1 py-4 md:px-6 lg:px-8"
            >
              <h2 className="max-w-xl text-3xl font-black leading-[1.08] text-white md:text-4xl lg:text-5xl">
                Premium websites for serious{" "}
                <span className="text-[#0a84ff]">business growth.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/55 md:text-[17px]">
                We create clean, fast and responsive digital products for
                startups, freelancers and growing businesses, from landing
                pages to full web apps.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
