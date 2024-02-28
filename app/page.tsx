import About from "./components/About";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Purchase from "./components/Purchase";

export default function Home() {
  return (
    <>
    <main>
      <Header />
      <Hero />
      <About />
      <Purchase />
      <Community />
      <Footer />
    </main>
    </>
  );
}
