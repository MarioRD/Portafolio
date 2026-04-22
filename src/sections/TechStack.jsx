import React from 'react';
import BlurText from '../components/animations/BlurText';
import LogoLoop from '../components/ui/LogoLoop';
import {
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiFirebase,
  SiSwift,
  SiAndroidstudio,
  SiReact,
  SiGithub,
  SiDocker,
  SiAngular,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";


const techLogos = [
  { node: <SiJavascript />,      title: "JavaScript"     },
  { node:<FaCss />,            title: "CSS3"           },
  { node: <SiHtml5 />,           title: "HTML5"          },
  { node: <FaAws />, title: "AWS"          },
  { node: <SiMysql />,           title: "MySQL"          },
  { node: <SiFirebase />,        title: "Firebase"       },
  { node: <FaJava />,            title: "Java"           },
  { node: <SiSwift />,           title: "Swift"          },
  { node: <SiAndroidstudio />,   title: "Android Studio" },
  { node: <SiReact />,           title: "React"          },
  { node: <SiGithub />,          title: "GitHub"         },
  { node: <SiDocker />,          title: "Docker"         },
  { node: <SiAngular />,         title: "Angular"        },
];

export default function TechStack() {
  return (
    <section style={{
      background: "#070707",
      paddingTop: "4rem",
      paddingBottom: "9rem",
      position: "relative",
      zIndex: 26,
    }}>

      {/* Título */}
      <div style={{
  width: "min(55vw, calc(100vw - 2.5rem))",
  margin: "0 auto",
  marginBottom: "2.5rem",
  paddingLeft: "clamp(0rem, 2vw, 1rem)",
}}>
  <BlurText
    text="Tecnologías dominadas"
    className="text-bold"
    delay={200}
    style={{
      fontSize: 'clamp(1.6rem, 4vw, 3rem)',
      fontWeight: 'bold',
      justifyContent: 'flex-start',
    }}
  />
</div>

     {/* Wrapper que contiene el overflow sin afectar el loop */}
<div style={{
  width: "100%",
  overflow: "hidden",
  maxWidth: "100vw",
}}>
  <LogoLoop
    logos={techLogos}
    speed={55}
    direction="left"
    logoHeight={45}
    gap={70}
    fadeOut
    fadeOutColor="#070707"
    scaleOnHover
  />
</div>
    </section>
  );
}