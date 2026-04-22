import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import BlurText from '../components/animations/BlurText';

const experienceData = [
  {
    title: "Desarrollador Full Stack & TIC",
image: "/src/assets/images/Web.png",
    description: "Lideré el desarrollo integral de plataformas web institucionales con integración de servicios críticos. Implementé la migración de servidores internos optimizando la escalabilidad y disponibilidad del sistema. Diseñé aplicaciones móviles para la gestión de clientes y sistematicé procesos mediante formularios automatizados para certificaciones."
  },
  {
    title: "Consultor de Infraestructura Tecnológica",
image: "/src/assets/images/Redes.png",
    description: "Asesoría especializada en el diseño e implementación de redes informáticas robustas y administración de bases de datos. Automaticé auditorías mediante flujos digitales e integré arquitecturas de ciberseguridad y tecnologías emergentes para fortalecer la integridad operativa organizacional."
  },
  {
    title: "App Emoti: Psicología Digital",
image: "/src/assets/images/Emoti.png",
    description: "Desarrollo de una plataforma móvil nativa en Swift y Firebase en colaboración con especialistas en psicología. La aplicación permite detectar, trackear y canalizar las emociones en niños, transformando diagnósticos complejos en una interfaz intuitiva y funcional."
  },
  {
    title: "Ecosistema de Gestión Cultural",
image: "/src/assets/images/Gestion.png",
    description: "Arquitectura de un ecosistema digital en React para la difusión de cultura y juventud. El sistema integra geolocalización avanzada para puntos de interés y un motor de agendamiento dinámico para optimizar el uso de espacios públicos y actividades comunitarias."
  },
  {
    title: "Automatización y Hardware Intelectual",
image: "/src/assets/images/Nfc.png",
    description: "Desarrollé flujos de trabajo en n8n para cotizaciones automatizadas, logrando una reducción del 60% en tiempos operativos. Asimismo, creé un sistema de acceso NFC mediante hardware interconectado y software en Android Studio con MySQL, convirtiendo dispositivos móviles en llaves de seguridad personalizadas."
  },
  {
    title: "Gerencia y Optimización de Negocios",
image: "/src/assets/images/Marketing.png",
    description: "Gestión estratégica de unidades de negocio propias, aplicando tecnología de rutas optimizadas para logística de distribución. Lidero plataformas de E-commerce especializadas en hardware de alta gama, aplicando marketing digital avanzado y gestión de inventarios en tiempo real."
  }
];

const ExperienceCard = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        backgroundColor: '#0a0a0a',
        borderRadius: '24px',
        padding: '30px',
        marginBottom: '4rem',
        border: '1px solid #1a1a1a',
        width: '100%',
        maxWidth: '800px',
        isolation: 'isolate' 
      }}
    >
      <div translate="no">
        <BlurText 
          text={item.title}
          delay={300}
          style={{ 
            fontSize: '2.2rem', 
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textTransform: 'none'
          }}
        />
      </div>

      {/* Contenedor de Imagen con el degradado para bajar el brillo */}
      <div style={{ 
        width: '100%', 
        height: '400px', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        marginBottom: '1.5rem',
        backgroundColor: '#111',
        position: 'relative'
      }}>
        {/* Imagen */}
        <img 
          src={item.image} 
          alt={item.title}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        {/* Overlay: Sombras arriba y abajo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.7) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
      </div>

      <div translate="no">
        <BlurText 
          text={item.description}
          delay={100} 
          style={{ 
            color: '#ffffff', 
            WebkitTextFillColor: '#ffffff',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            fontWeight: 'normal',
            textTransform: 'none'
          }}
        />
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div id="experience" style={{ backgroundColor: "#070707" }}>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            marginTop: "2rem",
            background: "linear-gradient(to bottom right, #cbd5e1, #c2c2c2)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            textAlign: "center",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          Experiencia <br /> Profesional
        </motion.h1>
      </LampContainer>

      <section style={{ 
        padding: '0 5vw 100px 5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "-15vh", 
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}