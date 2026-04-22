import { motion } from 'framer-motion';

const BlurText = ({ text, delay = 0, className, style }) => {
  if (!text) return null;

  const words = text.split(/(\s+)/); 

  const defaultGradient = {
    background: 'linear-gradient(to bottom, #ffffff, #666666)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    display: 'inline-block',
  };

  // Si mandas color blanco desde el Hero, se respeta
  const finalWordStyle = style?.color || style?.WebkitTextFillColor 
    ? { display: 'inline-block', ...style } 
    : { ...defaultGradient, ...style };

  return (
    <div className={className} style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'flex-start', 
      alignItems: 'center',
      ...style 
    }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.8, 
            delay: (i * 0.05) + (delay / 1000),
            ease: [0.34, 1.56, 0.64, 1] 
          }}
          style={{ 
            ...finalWordStyle,
            whiteSpace: 'pre',
            margin: 0 
          }}
        >
          {word === '' ? '\u00A0' : word}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;