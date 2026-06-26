import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  CheckCircle2,
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { PageHero, SectionTitle } from "../components/Layout";
import { assetPath } from "../components/assetPath";
import { ProjectCard } from "../components/ProjectCard";
import { ServiceCard } from "../components/ServiceCard";
import { faqs, industries, process, projects, services, tech, why } from "../data/siteData";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.55 },
};

const slideIn = (index = 0) => ({
  initial: {
    opacity: 0,
    x: index % 2 === 0 ? -42 : 42,
    y: 14,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  viewport: { once: true, amount: 0.18, margin: "-70px" },
  transition: {
    duration: 1.05,
    delay: (index % 6) * 0.09,
    ease: [0.16, 1, 0.3, 1],
  },
});

const slideLeft = {
  initial: { opacity: 0, x: -45 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const slideRight = {
  initial: { opacity: 0, x: 45 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function About() {
  const points = [
    ["Freelance Software Development Team", "We handle planning, UI, development and deployment with a clear project flow."],
    ["Modern and Responsive Websites", "Layouts are built to work properly on mobile, tablet, laptop and desktop screens."],
    ["Frontend and Backend Development", "We build complete digital products with interface, APIs, database and integrations."],
    ["Affordable Digital Solutions", "Practical pricing for startups, small businesses and personal brands."],
    ["Clean and User-Friendly Design", "Simple navigation, readable sections and smooth interactions for better user experience."],
    ["Deployment and Basic Support", "We help publish the project online and provide basic support after delivery."],
  ];

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="About Us"
        title="About FrelanceSofteare"
        desc="FrelanceSofteare is a freelance software development team focused on creating modern, responsive, and user-friendly websites."
        variant="radar"
        image={assetPath("/images/about-hero-team.png")}
        imageAlt="Software team collaborating on a digital project"
        animated
      />
      <section className="section border-y border-white/10 bg-[#070707]">
        <div className="containerx">
          <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <motion.div {...slideIn(0)} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-3 shadow-[0_30px_110px_rgba(0,0,0,.55)]">
              <img
                src={assetPath("/images/about-workspace.png")}
                alt="Modern software development workspace"
                className="h-[320px] w-full rounded-2xl object-cover object-center md:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </motion.div>
            <motion.div {...slideIn(1)}>
              <p className="eyebrow mb-4">Who we are</p>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Clean design, reliable development and affordable digital solutions.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/55">
                We help startups, small businesses, and individuals build their online presence with
                clean design, reliable development, and affordable digital solutions.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {points.map(([title, desc], index) => (
              <motion.div {...slideIn(index)} className="rounded-2xl border border-white/10 bg-white/[.04] p-5" key={title}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#0a84ff]" />
                  <div>
                    <h3 className="text-lg font-black leading-snug text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function Services() {
  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Services"
        title="Software services for modern businesses"
        desc="We build websites, web apps, APIs, e-commerce systems, UI designs and deployment-ready digital products."
        variant="stack"
        image={assetPath("/images/services-hero.png")}
        imageAlt="Premium software services visual"
        animated
      />
      <section className="section">
        <div className="containerx grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon], index) => (
            <ServiceCard key={title} title={title} desc={desc} Icon={Icon} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

export function Technologies() {
  const categoryMeta = {
    Frontend: {
      label: "Interface",
      desc: "Clean, responsive and animated user interfaces.",
      width: "88%",
    },
    Mobile: {
      label: "Apps",
      desc: "Cross-platform and native mobile experiences.",
      width: "76%",
    },
    Backend: {
      label: "Logic",
      desc: "APIs, authentication and server-side workflows.",
      width: "82%",
    },
    Database: {
      label: "Storage",
      desc: "Structured data models for dynamic products.",
      width: "72%",
    },
  };

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Technologies"
        title="Modern web and app tech stack"
        desc="Frontend, mobile, backend and database technologies used for production-ready freelance projects."
        variant="radar"
      />
      <section className="section border-y border-white/10 bg-[#070707]">
        <div className="containerx grid gap-8 lg:grid-cols-[320px_1fr]">
          <motion.aside {...slideLeft} className="glass rounded-3xl p-6 lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow mb-4">Stack Map</p>
            <h2 className="text-4xl font-black leading-tight">Technologies we use to build digital products.</h2>
            <p className="mt-5 leading-7 text-white/50">
              Website, web app, mobile app, backend and database stack in one clean system.
            </p>
            <div className="mt-8 grid gap-3">
              {Object.keys(tech).map((category) => (
                <a
                  href={`#tech-${category.toLowerCase()}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm font-black text-white/65 transition hover:bg-white hover:text-black"
                  key={category}
                >
                  {category}
                  <span>{tech[category].length}</span>
                </a>
              ))}
            </div>
          </motion.aside>

          <div className="grid gap-5">
            {Object.entries(tech).map(([category, items], index) => {
              const meta = categoryMeta[category];
              return (
                <motion.article
                  id={`tech-${category.toLowerCase()}`}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-5 shadow-[0_24px_90px_rgba(0,0,0,.35)]"
                  key={category}
                >
                  <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                    <div className="rounded-2xl bg-white p-5 text-black">
                      <p className="text-sm font-black uppercase tracking-[.2em] text-black/45">
                        {meta.label}
                      </p>
                      <h3 className="mt-3 text-3xl font-black">{category}</h3>
                      <p className="mt-4 text-sm font-bold leading-6 text-black/60">{meta.desc}</p>
                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-black/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: meta.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.15 }}
                          className="h-full rounded-full bg-[#0a84ff]"
                        />
                      </div>
                    </div>
                    <div className="grid content-start gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {items.map((item, itemIndex) => (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: itemIndex * 0.035 }}
                          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] p-4 transition group-hover:border-white/20"
                          key={item}
                        >
                          <div className="mb-5 flex items-center justify-between">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-black">
                              {item.slice(0, 2).toUpperCase()}
                            </span>
                            <span className="h-2 w-2 rounded-full bg-[#0a84ff]" />
                          </div>
                          <h4 className="text-lg font-black">{item}</h4>
                          <p className="mt-2 text-sm font-semibold text-white/40">Production ready</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export function Projects() {
  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Projects"
        title="Demo projects ready to replace with real links"
        desc="Same portfolio content with new agency-style UI and modern animated cards."
        variant="editor"
        image={assetPath("/images/project-ecommerce.png")}
        imageAlt="Modern e-commerce project dashboard preview"
        animated
      />
      <section className="section bg-[#080808]">
        <div className="containerx">
          <motion.div {...slideIn(0)}>
            <SectionTitle eyebrow="Projects" title="Our Completed Project" />
          </motion.div>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project[0]} p={project} i={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function Process() {
  const descriptions = [
    "We understand your business, project idea, features, and design requirements.",
    "We create a clear project plan, timeline, and technology structure.",
    "We design a clean and user-friendly interface.",
    "We build frontend, backend, database, and required features.",
    "We test responsiveness, bugs, speed, and functionality.",
    "We deploy the project online and make it live for users.",
    "We provide basic support and updates after delivery.",
  ];

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Work Process"
        title="Discuss -> Plan -> Design -> Develop -> Test -> Deploy -> Support"
        desc="A clear step-by-step process for building professional websites and web applications."
        variant="stack"
      />
      <section className="section border-y border-white/10 bg-[#070707]">
        <div className="containerx max-w-5xl">
          {process.map((item, index) => (
            <motion.div
              {...fade}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[160px_1fr]"
              key={item}
            >
              <span className="text-6xl font-black text-white/15">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-3xl font-black">{item}</h3>
                <p className="mt-3 text-lg leading-8 text-white/50">{descriptions[index]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function WhyChooseUs() {
  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Why Choose Us"
        title="Professional work, clear communication and clean code"
        desc="We focus on clean design, responsive layouts, reliable development, smooth animations, and clear communication."
        variant="radar"
      />
      <section className="section">
        <div className="containerx grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {why.map((item) => (
            <motion.div {...fade} className="glass rounded-2xl p-5 font-bold" key={item}>
              <CheckCircle2 className="mb-4 text-[#0a84ff]" /> {item}
            </motion.div>
          ))}
        </div>
      </section>
      <section className="section overflow-hidden border-y border-white/10 bg-[#070707]">
        <div className="containerx">
          <SectionTitle eyebrow="Industries" title="Industries We Serve" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([name, Icon], index) => (
              <motion.div
                {...fade}
                transition={{ duration: 0.55, delay: index * 0.03 }}
                className="card flex items-center gap-4"
                key={name}
              >
                <Icon className="text-[#0a84ff]" />
                <b>{name}</b>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        desc="Everything clients usually ask before starting a website or web app project."
        variant="stack"
      />
      <section className="section">
        <div className="containerx max-w-4xl">
          {faqs.map(([question, answer], index) => (
            <motion.div {...fade} className="mb-4 glass rounded-2xl p-5" key={question}>
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left text-lg font-black"
              >
                {question}
                <ChevronDown className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`} />
              </button>
              {active === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-3 overflow-hidden leading-7 text-white/50"
                >
                  {answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function Contact() {
  const [loading, setLoading] = useState(false);
  const contactEmail = "freelancesoftware707@gmail.com";
  const whatsappNumber = "919027266480";

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    formData.append("_subject", "New project inquiry from FrelanceSofteare website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("submitted_date", new Date().toLocaleDateString());
    formData.append("submitted_time", new Date().toLocaleTimeString());
    if (email) formData.append("_replyto", email);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) throw Error("submit_failed");

      toast.success("Thank you! Your message has been sent successfully.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Project"
        desc="Have a project idea? Contact us and let's create a modern digital solution for your business."
        variant="editor"
        image={assetPath("/images/contact-hero.png")}
        imageAlt="Client and developer discussing a project"
        animated
      />
      <section className="section border-y border-white/10 bg-[#070707]">
        <div className="containerx grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <motion.form {...slideIn(0)} onSubmit={submit} className="card grid gap-4">
            <input required name="name" className="input" placeholder="Name" />
            <input required type="email" name="email" className="input" placeholder="Email" />
            <input required name="phone" className="input" placeholder="Phone Number" />
            <select required name="projectType" className="input">
              <option value="">Project Type</option>
              <option>Website Development</option>
              <option>Web App Development</option>
              <option>App Development</option>
              <option>UI Design</option>
            </select>
            <textarea required name="message" rows="5" className="input" placeholder="Message" />
            <button disabled={loading} className="btn-blue" type="submit">
              <Send size={18} /> {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
          <motion.div {...slideIn(1)} className="self-start px-2 py-4 lg:px-6">
            <h3 className="text-4xl font-black">Contact Details</h3>
            <div className="mt-8 grid gap-5 text-white/60">
              <p className="flex gap-3">
                <Mail className="text-[#0a84ff]" /> {contactEmail}
              </p>
              <p className="flex gap-3">
                <Phone className="text-[#0a84ff]" /> WhatsApp: 9027266480
              </p>
              <p className="flex gap-3">
                <MapPin className="text-[#0a84ff]" /> India
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp Us
              </a>
              <a className="btn-dark" href="#">
                <Instagram />
              </a>
              <a className="btn-dark" href="#">
                <Linkedin />
              </a>
              <a className="btn-dark" href="#">
                <Github />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
