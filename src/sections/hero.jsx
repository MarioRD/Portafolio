import Particles from '../components/animations/Particles';
import BlurText from '../components/animations/BlurText';
import myPhoto from '../assets/images/MarioRD.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Capa 1: Estrellas */}
      <Particles /> 

      {/*  Capa 2: Contenedor  */}
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 10, 
        width: '100%',
        height: '100%',
        pointerEvents: 'none' 
      }}>
        
        <div style={{ 
          position: 'absolute', 
          top: '38%', 
          left: '50%', 
          transform: 'translate(-50%, -100%)', 
          zIndex: 6, 
          opacity: 0.3 
        }}>
          <BlurText 
  text="¡Hola!" 
  className="text-bold" 
  style={{ fontSize: '12rem', color: 'white', WebkitTextFillColor: 'white', opacity: 0.7 }} 
/>
        </div>

        <motion.img 
          src={myPhoto} 
          alt="Mario"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ 
            width: '380px', 
            height: 'auto', 
            zIndex: 7, 
            position: 'relative',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
          }}
        />

        <div 
  className="notranslate" 
  lang="es"               
  style={{ 
    marginTop: '-50px', 
    zIndex: 7,
    pointerEvents: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}}>
          <BlurText
            text="Soy Mario Alejandro"
            delay={800} 
            className="text-bold"
            style={{ 
              fontSize: '3.4rem', 
              textAlign: 'center', 
              color: 'white',
              WebkitTextFillColor: 'white', 
              textShadow: '0 5px 15px rgba(0,0,0,0.8)',
              lineHeight: '1.1' 
            }}
          />
          <BlurText
            text="Ruiz Dorantes"
            delay={1000} 
            className="text-bold"
            style={{ 
              fontSize: '3.4rem', 
              textAlign: 'center', 
              color: 'white',
              WebkitTextFillColor: 'white', 
              textShadow: '0 5px 15px rgba(0,0,0,0.8)',
              lineHeight: '1.1',
              marginTop: '5px' 
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;