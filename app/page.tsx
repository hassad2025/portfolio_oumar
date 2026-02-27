import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './globals.css';
export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}