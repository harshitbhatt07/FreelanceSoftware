import { Link } from "react-router-dom";

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="containerx grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black">
            Frelance<span className="brand-dot">Softeare</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Freelance Software Development Team building modern websites, web apps, and digital
            solutions for businesses and startups.
          </p>
        </div>
        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-white/50">
            {quickLinks.map(([name, path]) => (
              <Link className="hover:text-white" key={name} to={path}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Services</h3>
          <p className="mt-4 text-white/50">
            Website Development, Web App Development, UI Design, API Development and Deployment
            Support.
          </p>
        </div>
      </div>
      <p className="containerx mt-10 text-center text-sm text-white/35">
        2026 FrelanceSofteare. All rights reserved.
      </p>
    </footer>
  );
}
