import React, { useState } from "react";
import { Carousel, Card } from "../components/ui/Carousel";
import BlurText from "../components/animations/BlurText";
import adminImg from "../assets/images/Admin.png";
import computo from "../assets/images/ComputoN.png";
import dmovil from "../assets/images/Dmovil.png";
import infraestructura from "../assets/images/Infrestructura.png";
import paradigma from "../assets/images/Paradigma.png";
import poo from "../assets/images/POO.png";
import scrum from "../assets/images/Scrum.png";
import tecnico from "../assets/images/Tecnico.png";
import tester from "../assets/images/Tester.png";
import vir from "../assets/images/Virtualizacion.png";

const data = [
  { category: "2023", title: "Scrum Fundamentals Certified",                      src: scrum,         impact: "Optimizó mi capacidad para gestionar tiempos y entregas de valor en proyectos ágiles, priorizando tareas de alto impacto." },
  { category: "2023", title: "Paradigma de programación",                         src: paradigma,     impact: "Me permitió estructurar soluciones de software más limpias, escalables y fáciles de mantener desde el inicio." },
  { category: "2023", title: "Tester",                                            src: tester,        impact: "Mejoró mi atención al detalle mediante pruebas rigurosas, reduciendo errores en producción." },
  { category: "2023", title: "Programador orientado a objetos",                   src: poo,           impact: "Sentó las bases para crear sistemas complejos con abstracción, herencia y polimorfismo." },
  { category: "2023", title: "Técnico en instalación y reparación de cómputo",   src: tecnico,       impact: "Desarrollé visión integral entre software y los sistemas físicos que lo ejecutan." },
  { category: "2025", title: "Desarrollo móvil en línea",                         src: dmovil,        impact: "Expandí mis capacidades al mundo mobile, construyendo experiencias fluidas para dispositivos modernos." },
  { category: "2025", title: "Fundamentos del cómputo en la nube",                src: computo,       impact: "Estableció mi comprensión base sobre servicios cloud y cómo elegir la arquitectura correcta." },
  { category: "2025", title: "Fundamentos de virtualización",                     src: vir,           impact: "Me permitió abstraer recursos físicos para crear entornos eficientes y seguros en infraestructura moderna." },
  { category: "2025", title: "Asesor de servicios de infraestructura en la nube", src: infraestructura, impact: "Desarrollé criterio técnico para guiar decisiones de infraestructura combinando costos, seguridad y rendimiento." },
  { category: "2025", title: "Administrador de la nube",                          src: adminImg,      impact: "Consolidé la habilidad para desplegar y administrar infraestructura cloud en arquitecturas distribuidas de alto nivel." },
];

export default function Courses() {
  const [selectedImpact, setSelectedImpact] = useState(null);

  const cards = data.map((card, index) => (
    <div key={card.title + index} style={{ cursor: "pointer" }} onClick={() => setSelectedImpact(card.impact)}>
      <Card card={card} index={index} />
    </div>
  ));

  return (
    <section id="courses" style={{
      background: "#070707",
      position: "relative",
      zIndex: 30,
      paddingTop: "5rem",
      paddingBottom: "3rem",
    }}>

      {/* ── Título responsivo ── */}
      <div style={{
        paddingLeft: "clamp(1.25rem, 5vw, 12rem)",
        paddingRight: "clamp(1.25rem, 5vw, 2rem)",
        marginBottom: "2rem",
      }}>
        <BlurText
          text="Cursos y certificaciones"
          className="text-bold"
          delay={100}
          style={{
            fontSize: "clamp(1.6rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            fontWeight: 800,
            justifyContent: "flex-start",
          }}
        />
      </div>

      {/* ── Carrusel ── */}
      <Carousel items={cards} />

      {/* ── Modal ── */}
      {selectedImpact && (
        <div onClick={() => setSelectedImpact(null)} style={{
          position: "fixed", inset: 0, zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1.5rem",
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(14px)",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            maxWidth: "360px", width: "100%",
            background: "rgba(10,10,10,0.98)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "22px",
            padding: "2rem 1.75rem 1.5rem",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.85rem",
            boxShadow: "0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
            <div style={{ width: "2rem", height: "3px", borderRadius: "99px", background: "rgba(255,255,255,0.12)" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600, margin: 0 }}>
              Impacto profesional
            </p>
            <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.05)" }} />
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, textAlign: "center", color: "rgba(255,255,255,0.68)", margin: 0 }}>
              {selectedImpact}
            </p>
            <button
              onClick={() => setSelectedImpact(null)}
              style={{
                marginTop: "0.25rem", background: "transparent", border: "none",
                padding: "0.3rem 0.75rem", fontSize: "0.7rem",
                color: "rgba(255,255,255,0.25)", cursor: "pointer",
                letterSpacing: "0.08em", transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}