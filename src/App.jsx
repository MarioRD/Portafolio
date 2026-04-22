import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import TechStack from './sections/TechStack';
import Courses from './sections/Courses';
import Experience from './sections/experience';
import Footer from './sections/footer';


function App() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Skills />
      <Courses />
          <TechStack /> 
          <Experience /> 
          <Footer/>
    </main>
  );
}

export default App;