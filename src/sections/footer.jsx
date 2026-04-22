import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: "Inicio",                       href: "#Hero"          },
    { name: "Habilidades Clave",            href: "#Skills"        },
    { name: "Cursos y Certificaciones",     href: "#courses"},
    { name: "Tecnologías Dominadas",        href: "#TechStack"  },
    { name: "Experiencia",                  href: "#experience"    },
  ];

  const socialLinks = [
    { name: "Facebook",  href: "https://facebook.com"  },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "GitHub",    href: "https://github.com"    },
  ];
 
  return (
    <footer id="footer" style={{
      backgroundColor: '#070707',
      color: '#666',
      padding: '72px 8vw 10rem 8vw',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      marginBottom: 0,
    }}>
 
      {/* ── Fila superior ── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '48px',
        position: 'relative',
        zIndex: 2,
        paddingBottom: '64px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
 
        {/* Columna izquierda */}
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#000', fontWeight: '800', fontSize: '1rem',
            }}>M</div>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
              Mario RD
            </span>
          </div>
 
          <p style={{ fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '240px', color: '#555' }}>
            © Portafolio Mario Alejandro<br />Ruiz Dorantes {currentYear}.<br />
            Todos los derechos reservados.
          </p>
        </div>
 
        {/* Columna Secciones */}
        <div style={{ flex: '1 1 160px' }}>
          <h3 style={{
            color: '#fff', marginBottom: '20px',
            fontSize: '0.8rem', fontWeight: '600',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Secciones
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sections.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  style={{ textDecoration: 'none', color: '#555', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={e => e.target.style.color = '#fff'}
                  onMouseOut={e  => e.target.style.color = '#555'}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Columna Redes */}
        <div style={{ flex: '1 1 160px' }}>
          <h3 style={{
            color: '#fff', marginBottom: '20px',
            fontSize: '0.8rem', fontWeight: '600',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Redes Sociales
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#555', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={e => e.target.style.color = '#fff'}
                  onMouseOut={e  => e.target.style.color = '#555'}
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
      {/* ── Texto grande — degradado arriba claro, abajo oscuro ── */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        fontSize: 'clamp(5rem, 18vw, 14rem)',
        fontWeight: '900',
        letterSpacing: '-0.04em',
        lineHeight: 0.85,
        userSelect: 'none',
        pointerEvents: 'none',
        marginTop: '8px',
        /* Degradado invertido: letras visibles arriba, desaparecen hacia abajo */
        background: 'linear-gradient(to bottom, #070707 0%, #2a2a2a 80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        /* Recorta exactamente al final del texto sin espacio extra */
        display: 'block',
        overflow: 'hidden',
      }}>
        Mario RD
      </div>
 
    </footer>
  );
};
 
export default Footer;