import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  void main() {
    vec3 pos = position * 30.0; 
    pos.x += sin(uTime * random.z + random.x * 6.28) * 0.8;
    pos.y += cos(uTime * random.w + random.y * 6.28) * 0.8;
    vec4 mvPos = viewMatrix * modelMatrix * vec4(pos, 1.0);
    gl_PointSize = (45.0 / length(mvPos.xyz)); 
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  void main() {
    float d = length(gl_PointCoord.xy - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.9);
  }
`;

const Particles = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, dpr: window.devicePixelRatio });
    const gl = renderer.gl;
    gl.canvas.style.position = 'absolute';
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 25;

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // DESPUÉS — usa el viewport real sin scrollbar
const resize = () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  renderer.setSize(width, height);
  camera.perspective({ aspect: width / height });
};

    const count = 400;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);

    for (let i = 0; i < count; i++) {
      positions.set([(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
    });

    const program = new Program(gl, { 
      vertex, 
      fragment, 
      uniforms: { uTime: { value: 0 } },
      transparent: true 
    });
    
    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    window.addEventListener('resize', resize);
    resize();

    let frame;
    const update = (t) => {
      frame = requestAnimationFrame(update);
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      mesh.rotation.x = mouse.y * 0.5;
      mesh.rotation.y = mouse.x * 0.5;

      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh, camera });
    };
    frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && gl.canvas) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
  <div 
    ref={containerRef} 
    style={{ 
      position: 'fixed',
      top: 0, 
      left: 0,
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden',  // ← agregar esto
      zIndex: 0, 
      pointerEvents: 'none',
      background: 'transparent'
    }} 
  />
);
};

export default Particles;