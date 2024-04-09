import Navbar from "./_components/navbar";
import HomePage from "./_components/home";
import Services from "./_components/services";
import Projects from "./_components/projects/projects";
import Testmonial from "./_components/testmonial";
import About from "./_components/about";
import Footer from "./_components/footer";
import Know from "./_components/know";

export default function Home() {
  return (
    <main className=" w-full">
      <div className="fixed w-full transition-all duration-1000 z-50">
        <Navbar />
      </div>
      <HomePage />
      <About />
      <Know />
      <Services />
      <Projects />
      <Testmonial />
      <Footer />
    </main>
  );
}
