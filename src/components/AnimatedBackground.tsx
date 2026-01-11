import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background-container">
      {/* Floating Orbs */}
      <div className="animated-orb orb-1"></div>
      <div className="animated-orb orb-2"></div>
      <div className="animated-orb orb-3"></div>
      
      {/* Animated Grid Pattern */}
      <div 
        className="animated-grid" 
        style={{
          backgroundImage: `linear-gradient(#FF8303 1px, transparent 1px), linear-gradient(90deg, #FF8303 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
