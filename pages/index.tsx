import Head from "next/head";
import { About } from "../components/figma-landing/About";
import { Contact } from "../components/figma-landing/Contact";
import { FeatureHighlight } from "../components/figma-landing/FeatureHighlight";
import { Features } from "../components/figma-landing/Features";
import { Footer } from "../components/figma-landing/Footer";
import { Header } from "../components/figma-landing/Header";
import { Hero } from "../components/figma-landing/Hero";
import { HowItWorks } from "../components/figma-landing/HowItWorks";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>Learneest | Plan, Track, and Master Your Studies</title>
        <meta
          name="description"
          content="Plan your studies, compare planned vs actual time, and track real progress with Learneest."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header onCtaClick={scrollToContact} />
        <main>
          <Hero onPrimaryClick={scrollToContact} />
          <HowItWorks />
          <FeatureHighlight />
          <Features />
          <About onCtaClick={scrollToContact} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
