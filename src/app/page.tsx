import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroFilm } from "@/components/home/HeroFilm";
import { Products } from "@/components/home/Products";
import { About } from "@/components/home/About";
import { Materials } from "@/components/home/Materials";
import { Listening } from "@/components/home/Listening";
import { Notes } from "@/components/home/Notes";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <HeroFilm />
        <Products />
        <About />
        <Materials />
        <Listening />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
