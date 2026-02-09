import Head from "next/head";
import { About } from "../src/features/landing/components/About";
import { Contact } from "../src/features/landing/components/Contact";
import { FeatureHighlight } from "../src/features/landing/components/FeatureHighlight";
import { Features } from "../src/features/landing/components/Features";
import { Footer } from "../src/features/landing/components/Footer";
import { Header } from "../src/features/landing/components/Header";
import { Hero } from "../src/features/landing/components/Hero";
import { HowItWorks } from "../src/features/landing/components/HowItWorks";

export default function Home() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
