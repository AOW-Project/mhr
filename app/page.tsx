
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Partners from "../components/Partners";

import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden overflow-y-auto min-h-screen">
      <Hero />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}

