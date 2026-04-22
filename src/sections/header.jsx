import Dock from '../components/ui/dock';
import GlassSurface from '../components/ui/glassSurface';
<a href="#experience">Portafolio</a>
const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 12h20" />
  </svg>
);

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const navItems = [
  { icon: <IconHome />, label: 'Inicio', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { icon: <IconBriefcase />, label: 'Portafolio', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <IconMail />, label: 'Contacto', onClick: () => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }) },
];

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <GlassSurface
        width="auto"
        height={72}
        borderRadius={36}
        backgroundOpacity={0.02}
        saturation={2}
        distortionScale={-50}   
        redOffset={2}
        greenOffset={5}
        blueOffset={10}
        brightness={40}
        opacity={0.9}
        blur={12}
        className="header-glass"
      >
        <Dock
          items={navItems}
          panelHeight={56}
          baseItemSize={44}
          magnification={64}
          distance={140}
          spring={{ mass: 0.1, stiffness: 180, damping: 15 }}
        />
      </GlassSurface>
    </header>
  );
}