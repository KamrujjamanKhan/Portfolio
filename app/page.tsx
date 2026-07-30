import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Interests />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
