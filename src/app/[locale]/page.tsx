import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home({params}: { params: {locale: string }}) {

  return (
    <main className="w-full pt-[96px] sm:pt-24 ">
      <Navbar />
      <Hero />
      <Projects locale={params.locale}/>
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
