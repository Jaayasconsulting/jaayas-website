import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Showcase } from "./components/site/showcase";
import { About } from "./components/site/About";
import { MissionVision } from "./components/site/MissionVision";
import { Services } from "./components/site/Services";
import { Approach } from "./components/site/Approach";
import { Technologies } from "./components/site/Technologies";
import { FeaturedCapabilities } from "./components/site/FeaturedCapabilities";
import { CTA } from "./components/site/CTA";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <MissionVision />
      <Services />
      <Approach />
      <Technologies />
      <FeaturedCapabilities />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;