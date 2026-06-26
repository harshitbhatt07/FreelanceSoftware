import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export { Navbar } from "./Navbar";
export { Footer } from "./Footer";
export { FloatingActions } from "./FloatingActions";
export { PageHero } from "./PageHero";
export { SectionTitle } from "./SectionTitle";
export { BrandTitle } from "./BrandTitle";
export { AgencyVisual } from "./AgencyVisual";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
