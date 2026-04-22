import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagicBento from '../components/ui/MagicBento';
import BlurText from '../components/animations/BlurText';

// ── SVG Habilidades ────────────────────────────────────────────────────────

const IconProactividad = () => (
  <svg width="40" height="40" viewBox="0 0 80 80">
    <defs>
      <linearGradient id="solidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="30" fill="url(#solidGrad)" />
    <path d="M35 50 L50 40 L35 30 Z" fill="white" />
  </svg>
);

const IconPensamientoSistemico = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <rect x="20" y="20" width="18" height="18" rx="4" fill="white" fillOpacity="0.3" />
    <rect x="42" y="20" width="18" height="18" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="20" y="42" width="18" height="18" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="42" y="42" width="18" height="18" rx="4" fill="white" fillOpacity="0.3" />
  </svg>
);

const IconAutodidactismo = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <path d="M20 25 Q20 20 25 20 H55 Q60 20 60 25 V60 Q60 65 55 65 H25 Q20 65 20 60 Z" fill="white" fillOpacity="0.2" />
    <rect x="28" y="30" width="24" height="4" rx="2" fill="white" />
    <rect x="28" y="40" width="24" height="4" rx="2" fill="white" fillOpacity="0.5" />
  </svg>
);

const IconResolucion = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="4" fill="white" fillOpacity="0.1" />
    <path d="M30 40 L38 48 L52 32" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAutonomia = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <rect x="25" y="20" width="30" height="40" rx="15" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1" />
    <circle cx="40" cy="35" r="6" fill="white" />
  </svg>
);

const IconColaboracion = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <circle cx="30" cy="35" r="12" fill="white" fillOpacity="0.4" />
    <circle cx="50" cy="35" r="12" fill="white" fillOpacity="0.2" />
  </svg>
);

const IconResiliencia = () => (
  <svg width="60" height="60" viewBox="0 0 80 80">
    <path d="M20 50 C20 30 60 30 60 50" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
    <circle cx="40" cy="50" r="5" fill="white" />
  </svg>
);

const cards = [
  { category: 'Perspectivas',      title: 'Proactividad',               icon: <IconProactividad /> },
  { category: 'Resumen',           title: 'Pensamiento Sistémico',      icon: <IconPensamientoSistemico /> },
  { category: 'Trabajo en equipo', title: 'Colaboración Sinérgica',     icon: <IconColaboracion /> },
  { category: 'Eficiencia',        title: 'Resolución de Problemas',    icon: <IconResolucion /> },
  { category: 'Crecimiento',       title: 'Autodidactismo Estratégico', icon: <IconAutodidactismo /> },
  { category: 'Conectividad',      title: 'Autonomía Resolutiva',       icon: <IconAutonomia /> },
  { category: 'Protección',        title: 'Resiliencia Técnica',        icon: <IconResiliencia /> },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale        = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["40px", "0px"]);

  return (
    <div ref={containerRef} style={{
      /* En móvil altura automática, en desktop 100vh */
      minHeight: "100vh",
      height: "auto",
      backgroundColor: "#000",
      position: "relative",
      zIndex: 25,
    }}>
      <div style={{
        position: "sticky",
        top: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <motion.section style={{
          scale,
          borderRadius,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#070707",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          /* Padding vertical generoso en móvil */
          padding: "clamp(3rem, 8vh, 6rem) 0",
        }}>

          <div style={{
            /* En móvil ocupa casi todo el ancho, en desktop 55vw */
            width: "min(55vw, calc(100vw - 2.5rem))",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            <BlurText
              text="Habilidades clave"
              className="text-bold"
              delay={200}
              style={{
                textAlign: 'left',
                /* Escala entre 1.6rem en móvil y 3rem en desktop */
                fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
                fontWeight: 'bold',
              }}
            />
            <MagicBento cards={cards} />
          </div>

        </motion.section>
      </div>
    </div>
  );
}